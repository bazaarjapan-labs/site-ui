(() => {
  // ===== State =====
  const state = {
    activeTag: null,
    activeTrigger: null,
    favOnly: false,
    searchQuery: '',
    favorites: JSON.parse(localStorage.getItem('ui-favs') || '[]'),
    codeOpen: {},
  };

  const TRIGGER_LABELS = {
    auto: '常時アニメーション',
    hover: 'ホバーで動く',
    click: 'クリックで動く',
  };

  const TRIGGER_ORDER = ['auto', 'hover', 'click'];

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  // ===== Toast =====
  let toastEl = null;
  let toastTimer = null;

  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'toast';
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 1800);
  }

  // ===== Copy =====
  function copyText(text) {
    navigator.clipboard.writeText(text).then(() => toast('コピーしました！'));
  }

  // ===== Favorites =====
  function toggleFav(id) {
    const idx = state.favorites.indexOf(id);
    if (idx >= 0) state.favorites.splice(idx, 1);
    else state.favorites.push(id);
    localStorage.setItem('ui-favs', JSON.stringify(state.favorites));
  }

  function isFav(id) {
    return state.favorites.includes(id);
  }

  // ===== Escape HTML =====
  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // ===== Build Code String =====
  function buildCodeStr(code) {
    let parts = [];
    if (code.html) parts.push(`<!-- HTML -->\n${code.html}`);
    if (code.css) parts.push(`/* CSS */\n${code.css}`);
    if (code.js) parts.push(`// JavaScript\n${code.js}`);
    return parts.join('\n\n');
  }

  // ===== Build Display Code =====
  function buildDisplayCode(code) {
    let parts = [];
    if (code.html) parts.push(`<span style="color:#569cd6">/* HTML */</span>\n${escapeHtml(code.html)}`);
    if (code.css) parts.push(`<span style="color:#569cd6">/* CSS */</span>\n${escapeHtml(code.css)}`);
    if (code.js) parts.push(`<span style="color:#569cd6">// JavaScript</span>\n${escapeHtml(code.js)}`);
    return parts.join('\n\n');
  }

  // ===== Trigger Badge =====
  function triggerBadge(trigger) {
    const map = {
      auto: ['⚡', 'badge-auto'],
      hover: ['👆', 'badge-hover'],
      click: ['🖱️', 'badge-click'],
    };
    const [icon, cls] = map[trigger] || ['', ''];
    return `<span class="trigger-badge ${cls}">${icon} ${TRIGGER_LABELS[trigger] || ''}</span>`;
  }

  // ===== Render Card =====
  function renderCard(effect) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.id = effect.id;
    card.dataset.tags = effect.tags.join(',');

    card.innerHTML = `
      <div class="card-header">
        <span class="card-title">${effect.title}</span>
        <div class="card-actions">
          <button class="card-btn-fav ${isFav(effect.id) ? 'is-fav' : ''}" data-fav="${effect.id}" title="お気に入り">
            ${isFav(effect.id) ? '★' : '☆'}
          </button>
          <button class="card-btn js-toggle-code" data-id="${effect.id}">Code</button>
        </div>
      </div>
      <div class="card-prompt">
        <span class="prompt-label">AI指示文</span>
        <span class="prompt-text" title="${effect.prompt}">${effect.prompt}</span>
        <button class="prompt-copy" data-copy-prompt="${effect.id}" title="指示文をコピー">📋</button>
      </div>
      <div class="card-preview js-preview" data-id="${effect.id}">
        ${effect.html}
      </div>
      <div class="card-code js-code" data-id="${effect.id}">
        <button class="code-copy" data-copy-code="${effect.id}" title="コードをコピー">コピー</button>
        <pre><code>${buildDisplayCode(effect.code)}</code></pre>
      </div>
      <div class="card-tags">
        ${effect.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}
      </div>
    `;

    return card;
  }

  // ===== Collect Tags =====
  function collectTags() {
    const tagSet = new Set();
    EFFECTS.forEach(e => e.tags.forEach(t => tagSet.add(t)));
    return [...tagSet].sort();
  }

  // ===== Render Filter Tags =====
  function renderFilterTags() {
    const container = $('#filterTags');
    const tags = collectTags();
    container.innerHTML = tags.map(t =>
      `<button class="filter-tag" data-tag="${t}">${t}</button>`
    ).join('');
  }

  // ===== Render Trigger Filters =====
  function renderTriggerFilters() {
    const container = $('#triggerFilters');
    container.innerHTML = TRIGGER_ORDER.map(t => {
      const icons = { auto: '⚡', hover: '👆', click: '🖱️' };
      return `<button class="trigger-filter-btn" data-trigger="${t}">${icons[t]} ${TRIGGER_LABELS[t]}</button>`;
    }).join('');
  }

  // ===== Filter Effects =====
  function getFilteredEffects() {
    return EFFECTS.filter(e => {
      if (state.favOnly && !isFav(e.id)) return false;
      if (state.activeTag && !e.tags.includes(state.activeTag)) return false;
      if (state.activeTrigger && e.trigger !== state.activeTrigger) return false;
      if (state.searchQuery) {
        const q = state.searchQuery.toLowerCase();
        const searchable = (e.title + e.prompt + e.tags.join(' ')).toLowerCase();
        if (!searchable.includes(q)) return false;
      }
      return true;
    });
  }

  // ===== Sub-category config =====
  const SUB_ORDER = ['move', 'color', 'text-other', 'border', 'other'];
  const SUB_LABELS = {
    move: '文字が動く',
    color: '色が変わる',
    'text-other': 'その他の文字系',
    border: '枠系',
    other: 'その他',
  };
  const SUB_ICONS = {
    move: '💫',
    color: '🎨',
    'text-other': '✏️',
    border: '🔲',
    other: '📦',
  };

  // ===== Append cards to a grid =====
  function appendCards(grid, effects) {
    effects.forEach(effect => {
      const card = renderCard(effect);
      grid.appendChild(card);
      if (state.codeOpen[effect.id]) {
        const codeEl = card.querySelector(`.js-code[data-id="${effect.id}"]`);
        const btn = card.querySelector(`.js-toggle-code[data-id="${effect.id}"]`);
        if (codeEl) codeEl.classList.add('show');
        if (btn) btn.classList.add('active');
      }
      if (effect.init) effect.init(card);
    });
  }

  // ===== Render Gallery =====
  function renderGallery() {
    const gallery = $('#gallery');
    gallery.innerHTML = '';

    const filtered = getFilteredEffects();

    if (filtered.length === 0) {
      gallery.innerHTML = '<div class="no-results">該当するエフェクトがありません</div>';
      return;
    }

    // Group by trigger
    const groups = {};
    TRIGGER_ORDER.forEach(t => { groups[t] = []; });
    filtered.forEach(e => {
      const t = e.trigger || 'auto';
      if (!groups[t]) groups[t] = [];
      groups[t].push(e);
    });

    const triggerIcons = { auto: '⚡', hover: '👆', click: '🖱️' };

    TRIGGER_ORDER.forEach(trigger => {
      const effects = groups[trigger];
      if (!effects || effects.length === 0) return;

      // Main trigger section
      const section = document.createElement('div');
      section.className = 'section-group';
      section.innerHTML = `
        <div class="section-header">
          <span class="section-icon">${triggerIcons[trigger]}</span>
          <h2 class="section-title">${TRIGGER_LABELS[trigger]}</h2>
          <span class="section-count">${effects.length}</span>
        </div>
      `;

      if (trigger === 'auto') {
        // Sub-group auto effects
        const subs = {};
        SUB_ORDER.forEach(s => { subs[s] = []; });
        effects.forEach(e => {
          const s = e.sub || 'other';
          if (!subs[s]) subs[s] = [];
          subs[s].push(e);
        });

        SUB_ORDER.forEach(sub => {
          const subEffects = subs[sub];
          if (!subEffects || subEffects.length === 0) return;

          const subSection = document.createElement('div');
          subSection.className = 'sub-section';
          subSection.innerHTML = `
            <div class="sub-header">
              <span class="sub-icon">${SUB_ICONS[sub]}</span>
              <h3 class="sub-title">${SUB_LABELS[sub]}</h3>
              <span class="section-count">${subEffects.length}</span>
            </div>
            <div class="section-grid"></div>
          `;
          appendCards(subSection.querySelector('.section-grid'), subEffects);
          section.appendChild(subSection);
        });
      } else {
        // Hover / Click - flat grid
        const gridEl = document.createElement('div');
        gridEl.className = 'section-grid';
        appendCards(gridEl, effects);
        section.appendChild(gridEl);
      }

      gallery.appendChild(section);
    });
  }

  // ===== Event Delegation =====
  function setupEvents() {
    const gallery = $('#gallery');

    // Toggle code view
    gallery.addEventListener('click', (e) => {
      const toggleBtn = e.target.closest('.js-toggle-code');
      if (toggleBtn) {
        const id = toggleBtn.dataset.id;
        const codeEl = gallery.querySelector(`.js-code[data-id="${id}"]`);
        if (codeEl) {
          const isOpen = codeEl.classList.toggle('show');
          toggleBtn.classList.toggle('active', isOpen);
          state.codeOpen[id] = isOpen;
        }
        return;
      }

      // Favorite toggle
      const favBtn = e.target.closest('.card-btn-fav');
      if (favBtn) {
        const id = favBtn.dataset.fav;
        toggleFav(id);
        favBtn.classList.toggle('is-fav');
        favBtn.textContent = isFav(id) ? '★' : '☆';
        if (state.favOnly) renderGallery();
        return;
      }

      // Copy prompt
      const promptCopy = e.target.closest('[data-copy-prompt]');
      if (promptCopy) {
        const id = promptCopy.dataset.copyPrompt;
        const effect = EFFECTS.find(e => e.id === id);
        if (effect) copyText(effect.prompt);
        return;
      }

      // Copy code
      const codeCopy = e.target.closest('[data-copy-code]');
      if (codeCopy) {
        const id = codeCopy.dataset.copyCode;
        const effect = EFFECTS.find(e => e.id === id);
        if (effect) copyText(buildCodeStr(effect.code));
        return;
      }
    });

    // Search
    $('#search').addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderGallery();
    });

    // Filter tags
    $('#filterTags').addEventListener('click', (e) => {
      const tagBtn = e.target.closest('.filter-tag');
      if (!tagBtn) return;

      const tag = tagBtn.dataset.tag;
      if (state.activeTag === tag) {
        state.activeTag = null;
        tagBtn.classList.remove('active');
      } else {
        $$('.filter-tag').forEach(b => b.classList.remove('active'));
        state.activeTag = tag;
        tagBtn.classList.add('active');
      }
      renderGallery();
    });

    // Trigger filters
    $('#triggerFilters').addEventListener('click', (e) => {
      const btn = e.target.closest('.trigger-filter-btn');
      if (!btn) return;

      const trigger = btn.dataset.trigger;
      if (state.activeTrigger === trigger) {
        state.activeTrigger = null;
        btn.classList.remove('active');
      } else {
        $$('.trigger-filter-btn').forEach(b => b.classList.remove('active'));
        state.activeTrigger = trigger;
        btn.classList.add('active');
      }
      renderGallery();
    });

    // Fav filter
    $('#favFilterBtn').addEventListener('click', () => {
      state.favOnly = !state.favOnly;
      $('#favFilterBtn').classList.toggle('active', state.favOnly);
      $('#favFilterBtn').querySelector('.star-icon').textContent = state.favOnly ? '★' : '☆';
      renderGallery();
    });

    // Theme toggle
    $('#themeToggle').addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
      localStorage.setItem('ui-theme', isDark ? 'light' : 'dark');
      $('#themeToggle').querySelector('.theme-icon').textContent = isDark ? '🌙' : '☀️';
    });
  }

  // ===== Init =====
  function init() {
    // Restore theme
    const savedTheme = localStorage.getItem('ui-theme');
    if (savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      $('#themeToggle').querySelector('.theme-icon').textContent = '☀️';
    }

    renderTriggerFilters();
    renderFilterTags();
    renderGallery();
    setupEvents();
  }

  // Run
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
