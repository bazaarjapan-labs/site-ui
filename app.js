(() => {
  // ===== State =====
  const state = {
    activeTag: null,
    favOnly: false,
    searchQuery: '',
    favorites: JSON.parse(localStorage.getItem('ui-favs') || '[]'),
    codeOpen: {},
  };

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

  // ===== Render Card =====
  function renderCard(effect) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.id = effect.id;
    card.dataset.tags = effect.tags.join(',');

    const codeStr = buildCodeStr(effect.code);

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

  // ===== Filter Effects =====
  function getFilteredEffects() {
    return EFFECTS.filter(e => {
      if (state.favOnly && !isFav(e.id)) return false;
      if (state.activeTag && !e.tags.includes(state.activeTag)) return false;
      if (state.searchQuery) {
        const q = state.searchQuery.toLowerCase();
        const searchable = (e.title + e.prompt + e.tags.join(' ')).toLowerCase();
        if (!searchable.includes(q)) return false;
      }
      return true;
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

    filtered.forEach(effect => {
      const card = renderCard(effect);
      gallery.appendChild(card);

      // Restore code open state
      if (state.codeOpen[effect.id]) {
        const codeEl = card.querySelector(`.js-code[data-id="${effect.id}"]`);
        const btn = card.querySelector(`.js-toggle-code[data-id="${effect.id}"]`);
        if (codeEl) codeEl.classList.add('show');
        if (btn) btn.classList.add('active');
      }

      // Run init
      if (effect.init) {
        effect.init(card);
      }
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
