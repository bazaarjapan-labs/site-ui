const EFFECTS = [
  // ===== テキスト系 =====
  {
    id: 'rainbow', trigger: 'auto', sub: 'color',
    title: 'レインボーテキスト',
    tags: ['テキスト', 'グラデーション', 'アニメーション'],
    prompt: 'テキストが虹色に流れるように光るCSSアニメーションを作って',
    html: '<span class="fx-rainbow">Rainbow Text</span>',
    code: {
      html: '<span class="rainbow-text">Rainbow Text</span>',
      css: `.rainbow-text {
  background: linear-gradient(90deg, #ff0000, #ff7700, #ffff00, #00ff00, #0077ff, #8b00ff, #ff0000);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: rainbow-move 3s linear infinite;
  font-size: 2rem;
  font-weight: 800;
}

@keyframes rainbow-move {
  to { background-position: 200% center; }
}`
    }
  },
  {
    id: 'shake', trigger: 'auto', sub: 'move',
    title: '揺れるテキスト',
    tags: ['テキスト', 'アニメーション'],
    prompt: 'テキストが左右に小刻みに揺れるアニメーションを作って',
    html: '<span class="fx-shake">ブルブル</span>',
    code: {
      html: '<span class="shake-text">ブルブル</span>',
      css: `.shake-text {
  display: inline-block;
  font-size: 2rem;
  font-weight: 700;
  animation: shake 0.5s ease-in-out infinite;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px) rotate(-1deg); }
  75% { transform: translateX(4px) rotate(1deg); }
}`
    }
  },
  {
    id: 'glow', trigger: 'auto', sub: 'color',
    title: '光るテキスト（パルス）',
    tags: ['テキスト', '光', 'アニメーション'],
    prompt: 'テキストがネオンのように光って脈打つCSSエフェクトを作って',
    html: '<span class="fx-glow">Glowing</span>',
    code: {
      html: '<span class="glow-text">Glowing</span>',
      css: `.glow-text {
  font-size: 2rem;
  font-weight: 700;
  color: #4da3ff;
  animation: glow-pulse 2s ease-in-out infinite;
}

@keyframes glow-pulse {
  0%, 100% { text-shadow: 0 0 5px #4da3ff, 0 0 10px #4da3ff; }
  50% { text-shadow: 0 0 20px #4da3ff, 0 0 40px #4da3ff, 0 0 60px #4da3ff; }
}`
    }
  },
  {
    id: 'typewriter', trigger: 'auto', sub: 'text-other',
    title: 'タイプライター',
    tags: ['テキスト', 'アニメーション'],
    prompt: 'テキストが1文字ずつ表示されるタイプライター風アニメーションをCSSで作って',
    html: '<span class="fx-typewriter">Hello, World!</span>',
    code: {
      html: '<span class="typewriter">Hello, World!</span>',
      css: `.typewriter {
  font-size: 1.5rem;
  font-weight: 600;
  font-family: monospace;
  border-right: 2px solid #333;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  animation: type 3s steps(13) forwards, blink 0.7s step-end infinite;
}

@keyframes type {
  to { width: 100%; }
}

@keyframes blink {
  50% { border-color: transparent; }
}`
    }
  },
  {
    id: 'bounce', trigger: 'auto', sub: 'move',
    title: 'バウンド文字',
    tags: ['テキスト', 'アニメーション'],
    prompt: 'テキストの各文字が順番に跳ねるアニメーションを作って。文字ごとに遅延をつけて波のように動かして',
    html: '<span class="fx-bounce" id="bounce-text"></span>',
    code: {
      html: '<span class="bounce-text">Bounce!</span>',
      css: `.bounce-text span {
  display: inline-block;
  font-size: 2rem;
  font-weight: 700;
  animation: bounce 0.6s ease infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}`,
      js: `document.querySelector('.bounce-text').innerHTML =
  'Bounce!'.split('').map((c, i) =>
    \`<span style="animation-delay:\${i * 0.1}s">\${c}</span>\`
  ).join('');`
    },
    init: (el) => {
      const target = el.querySelector('#bounce-text');
      if (target) {
        target.innerHTML = 'Bounce!'.split('').map((c, i) =>
          `<span style="animation-delay:${i * 0.1}s">${c === ' ' ? '&nbsp;' : c}</span>`
        ).join('');
      }
    }
  },
  {
    id: 'neon', trigger: 'auto', sub: 'color',
    title: 'ネオンフリッカー',
    tags: ['テキスト', '光', 'アニメーション'],
    prompt: 'テキストがネオンサインのようにチカチカ点滅しながら光るエフェクトを作って',
    html: '<span class="fx-neon">NEON</span>',
    code: {
      html: '<span class="neon-text">NEON</span>',
      css: `.neon-text {
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  animation: neon-flicker 1.5s ease-in-out infinite alternate;
}

@keyframes neon-flicker {
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff,
                 0 0 40px #ff00de, 0 0 80px #ff00de;
  }
  20%, 24%, 55% {
    text-shadow: none;
  }
}`
    }
  },
  {
    id: 'glitch', trigger: 'auto', sub: 'text-other',
    title: 'グリッチテキスト',
    tags: ['テキスト', 'アニメーション', 'エフェクト'],
    prompt: 'テキストがグリッチ（バグっぽく）ブレて赤と青がズレるエフェクトを作って',
    html: '<span class="fx-glitch" data-text="GLITCH">GLITCH</span>',
    code: {
      html: '<span class="glitch" data-text="GLITCH">GLITCH</span>',
      css: `.glitch {
  font-size: 2rem;
  font-weight: 800;
  position: relative;
}

.glitch::before, .glitch::after {
  content: attr(data-text);
  position: absolute;
  left: 0; top: 0;
}

.glitch::before {
  color: #ff0000;
  animation: glitch-1 0.3s infinite;
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
}

.glitch::after {
  color: #0000ff;
  animation: glitch-2 0.3s infinite;
  clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
}

@keyframes glitch-1 {
  20% { transform: translate(-3px, 3px); }
  40% { transform: translate(3px, -3px); }
  60% { transform: translate(-2px, 1px); }
  80% { transform: translate(2px, -2px); }
}

@keyframes glitch-2 {
  20% { transform: translate(3px, -3px); }
  40% { transform: translate(-3px, 3px); }
  60% { transform: translate(2px, -1px); }
  80% { transform: translate(-2px, 2px); }
}`
    }
  },
  {
    id: 'gradient-text', trigger: 'auto', sub: 'color',
    title: 'グラデーションテキスト',
    tags: ['テキスト', 'グラデーション'],
    prompt: '文字に紫からピンクのグラデーションを付けて。背景じゃなく文字自体をグラデーションにして',
    html: '<span class="fx-gradient-text">Gradient</span>',
    code: {
      html: '<span class="gradient-text">Gradient</span>',
      css: `.gradient-text {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}`
    }
  },
  {
    id: 'text-stroke', trigger: 'hover',
    title: 'アウトラインテキスト',
    tags: ['テキスト', 'ホバー'],
    prompt: '文字を中が透明で輪郭だけの袋文字にして、ホバーで色が塗りつぶされるようにして',
    html: '<span class="fx-text-stroke">OUTLINE</span>',
    code: {
      html: '<span class="stroke-text">OUTLINE</span>',
      css: `.stroke-text {
  font-size: 2.5rem;
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 2px #333;
  transition: color 0.3s;
}

.stroke-text:hover {
  color: #0071e3;
  -webkit-text-stroke: 2px #0071e3;
}`
    }
  },
  {
    id: 'float', trigger: 'auto', sub: 'move',
    title: 'ふわふわ浮遊',
    tags: ['テキスト', 'アニメーション'],
    prompt: 'テキストがゆっくり上下にふわふわ浮遊するアニメーションを作って',
    html: '<span class="fx-float">ふわふわ</span>',
    code: {
      html: '<span class="float-text">ふわふわ</span>',
      css: `.float-text {
  display: inline-block;
  font-size: 2rem;
  font-weight: 700;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-16px); }
}`
    }
  },
  {
    id: 'shadow-pop', trigger: 'auto', sub: 'move',
    title: '立体シャドウ',
    tags: ['テキスト', 'アニメーション', '3D'],
    prompt: 'テキストに段階的な影をつけて立体的に飛び出すアニメーションを作って',
    html: '<span class="fx-shadow-pop">POP</span>',
    code: {
      html: '<span class="shadow-pop">POP</span>',
      css: `.shadow-pop {
  font-size: 2rem;
  font-weight: 800;
  animation: shadow-pop 1.5s ease-in-out infinite alternate;
}

@keyframes shadow-pop {
  0% {
    text-shadow: 1px 1px 0 #ccc, 2px 2px 0 #bbb, 3px 3px 0 #aaa;
    transform: translate(0, 0);
  }
  100% {
    text-shadow: 1px 1px 0 #ccc, 2px 2px 0 #bbb, 3px 3px 0 #aaa,
                 4px 4px 0 #999, 5px 5px 0 #888, 6px 6px 0 #777;
    transform: translate(-3px, -3px);
  }
}`
    }
  },
  {
    id: 'wave-underline', trigger: 'auto', sub: 'color',
    title: 'レインボーアンダーライン',
    tags: ['テキスト', 'グラデーション', 'アニメーション'],
    prompt: 'テキストの下に虹色のアンダーラインが流れるように動くエフェクトを作って',
    html: '<span class="fx-wave-underline">Underline</span>',
    code: {
      html: '<span class="wave-underline">Underline</span>',
      css: `.wave-underline {
  font-size: 1.8rem;
  font-weight: 700;
  position: relative;
  display: inline-block;
}

.wave-underline::after {
  content: '';
  position: absolute;
  left: 0; bottom: -4px;
  width: 100%; height: 4px;
  background: linear-gradient(90deg, #ff6b6b, #ffd93d, #6bff6b, #6bb5ff);
  background-size: 200% auto;
  border-radius: 2px;
  animation: wave 2s linear infinite;
}

@keyframes wave {
  to { background-position: 200% center; }
}`
    }
  },
  {
    id: 'stagger', trigger: 'auto', sub: 'move',
    title: '順次フェードイン',
    tags: ['テキスト', 'アニメーション'],
    prompt: '文字が1文字ずつ下からフェードインしながら現れるアニメーションを作って',
    html: '<span class="fx-stagger" id="stagger-text"></span>',
    code: {
      html: '<span class="stagger-text">HELLO</span>',
      css: `.stagger-text span {
  display: inline-block;
  font-size: 2rem;
  font-weight: 700;
  animation: stagger-in 2s ease-in-out infinite;
}

@keyframes stagger-in {
  0% { opacity: 0; transform: translateY(20px); }
  20%, 80% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-20px); }
}`,
      js: `document.querySelector('.stagger-text').innerHTML =
  'HELLO'.split('').map((c, i) =>
    \`<span style="animation-delay:\${i * 0.15}s">\${c}</span>\`
  ).join('');`
    },
    init: (el) => {
      const target = el.querySelector('#stagger-text');
      if (target) {
        target.innerHTML = 'HELLO'.split('').map((c, i) =>
          `<span style="animation-delay:${i * 0.15}s">${c === ' ' ? '&nbsp;' : c}</span>`
        ).join('');
      }
    }
  },

  // ===== ボタン・インタラクション系 =====
  {
    id: 'gradient-border', trigger: 'auto', sub: 'border',
    title: 'グラデーション枠ボタン',
    tags: ['ボタン', 'グラデーション', 'アニメーション'],
    prompt: 'ボタンの枠線が虹色にアニメーションで変化するグラデーションボーダーボタンを作って',
    html: '<button class="fx-gradient-border">Click me</button>',
    code: {
      html: '<button class="gradient-btn">Click me</button>',
      css: `.gradient-btn {
  position: relative;
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 600;
  background: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  z-index: 1;
}

.gradient-btn::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 10px;
  background: linear-gradient(135deg, #ff6b6b, #ffd93d, #6bff6b, #6bb5ff, #c96bff);
  background-size: 300% 300%;
  z-index: -1;
  animation: gradient-rotate 3s ease infinite;
}

@keyframes gradient-rotate {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`
    }
  },
  {
    id: 'ripple', trigger: 'click',
    title: 'リップルボタン',
    tags: ['ボタン', 'インタラクション', 'JS'],
    prompt: 'ボタンをクリックした位置から波紋が広がるマテリアルデザイン風リップルエフェクトを作って',
    html: '<button class="fx-ripple-btn" id="ripple-btn">クリックしてね</button>',
    code: {
      html: '<button class="ripple-btn">クリックしてね</button>',
      css: `.ripple-btn {
  position: relative;
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  background: #0071e3;
  color: #fff;
  cursor: pointer;
  overflow: hidden;
}

.ripple-btn .ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255,255,255,0.4);
  transform: scale(0);
  animation: ripple 0.6s linear;
  pointer-events: none;
}

@keyframes ripple {
  to { transform: scale(4); opacity: 0; }
}`,
      js: `document.querySelector('.ripple-btn').addEventListener('click', function(e) {
  const ripple = document.createElement('span');
  ripple.classList.add('ripple');
  const rect = this.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
  ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
  this.appendChild(ripple);
  ripple.addEventListener('animationend', () => ripple.remove());
});`
    },
    init: (el) => {
      const btn = el.querySelector('#ripple-btn');
      if (btn) {
        btn.addEventListener('click', function(e) {
          const ripple = document.createElement('span');
          ripple.classList.add('ripple');
          const rect = this.getBoundingClientRect();
          const size = Math.max(rect.width, rect.height);
          ripple.style.width = ripple.style.height = size + 'px';
          ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
          ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
          this.appendChild(ripple);
          ripple.addEventListener('animationend', () => ripple.remove());
        });
      }
    }
  },
  {
    id: 'underline-link', trigger: 'hover',
    title: 'ホバーアンダーラインリンク',
    tags: ['リンク', 'ホバー', 'アニメーション'],
    prompt: 'リンクにホバーすると下線が左から右にスッと伸びてくるアニメーションを作って',
    html: '<a class="fx-underline-link" href="#">Hover me</a>',
    code: {
      html: '<a class="hover-link" href="#">Hover me</a>',
      css: `.hover-link {
  position: relative;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
}

.hover-link::after {
  content: '';
  position: absolute;
  left: 0; bottom: -2px;
  width: 0; height: 2px;
  background: #0071e3;
  transition: width 0.3s ease;
}

.hover-link:hover::after {
  width: 100%;
}`
    }
  },
  {
    id: 'hover-card', trigger: 'hover',
    title: 'ホバー拡大カード',
    tags: ['カード', 'ホバー', 'アニメーション'],
    prompt: 'カードにホバーしたらふわっと拡大してシャドウが深くなるエフェクトを作って',
    html: '<div class="fx-hover-card">Hover Card</div>',
    code: {
      html: '<div class="hover-card">Hover Card</div>',
      css: `.hover-card {
  padding: 20px 32px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-weight: 600;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.hover-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}`
    }
  },
  {
    id: 'tooltip', trigger: 'hover',
    title: 'ツールチップ',
    tags: ['UI部品', 'ホバー', 'アニメーション'],
    prompt: '要素にホバーすると上にふわっとツールチップが表示されるCSSのみのエフェクトを作って',
    html: '<div class="fx-tooltip-demo">ホバーしてね<div class="tooltip">これがツールチップ！</div></div>',
    code: {
      html: `<div class="tooltip-trigger">
  ホバーしてね
  <div class="tooltip">これがツールチップ！</div>
</div>`,
      css: `.tooltip-trigger {
  position: relative;
  display: inline-block;
  padding: 10px 24px;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: help;
}

.tooltip {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) scale(0.8);
  padding: 6px 12px;
  background: #333;
  color: #fff;
  font-size: 0.78rem;
  border-radius: 6px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: all 0.2s;
}

.tooltip::after {
  content: '';
  position: absolute;
  top: 100%; left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: #333;
}

.tooltip-trigger:hover .tooltip {
  opacity: 1;
  transform: translateX(-50%) scale(1);
}`
    }
  },

  // ===== ローダー系 =====
  {
    id: 'spinner', trigger: 'auto', sub: 'other',
    title: 'スピナーローダー',
    tags: ['ローダー', 'アニメーション'],
    prompt: 'くるくる回転するシンプルなローディングスピナーを作って',
    html: '<div class="fx-spinner"></div>',
    code: {
      html: '<div class="spinner"></div>',
      css: `.spinner {
  width: 48px;
  height: 48px;
  border: 4px solid #ddd;
  border-top: 4px solid #0071e3;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}`
    }
  },
  {
    id: 'dot-loader', trigger: 'auto', sub: 'other',
    title: 'ドットローダー',
    tags: ['ローダー', 'アニメーション'],
    prompt: '3つのドットが順番に跳ねるローディングアニメーションを作って',
    html: '<div class="fx-dot-loader"><span></span><span></span><span></span></div>',
    code: {
      html: `<div class="dot-loader">
  <span></span><span></span><span></span>
</div>`,
      css: `.dot-loader {
  display: flex;
  gap: 8px;
}

.dot-loader span {
  width: 12px; height: 12px;
  background: #0071e3;
  border-radius: 50%;
  animation: dot-bounce 1.4s ease-in-out infinite both;
}

.dot-loader span:nth-child(1) { animation-delay: -0.32s; }
.dot-loader span:nth-child(2) { animation-delay: -0.16s; }

@keyframes dot-bounce {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
}`
    }
  },
  {
    id: 'skeleton', trigger: 'auto', sub: 'other',
    title: 'スケルトンローダー',
    tags: ['ローダー', 'アニメーション', 'UI部品'],
    prompt: 'コンテンツ読み込み中に表示するスケルトンローダー（シマー付き）を作って',
    html: '<div class="fx-skeleton"><div class="sk-line"></div><div class="sk-line"></div><div class="sk-line"></div></div>',
    code: {
      html: `<div class="skeleton">
  <div class="sk-line"></div>
  <div class="sk-line"></div>
  <div class="sk-line"></div>
</div>`,
      css: `.skeleton { max-width: 260px; }

.sk-line {
  height: 12px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  border-radius: 6px;
  margin-bottom: 8px;
  animation: shimmer 1.5s infinite;
}

.sk-line:last-child { width: 60%; }
.sk-line:nth-child(2) { width: 80%; }

@keyframes shimmer {
  to { background-position: -200% 0; }
}`
    }
  },
  {
    id: 'progress', trigger: 'auto', sub: 'other',
    title: 'プログレスバー',
    tags: ['ローダー', 'アニメーション', 'UI部品'],
    prompt: 'グラデーション付きでアニメーションするプログレスバーを作って',
    html: '<div class="fx-progress-wrap"><div class="fx-progress"><div class="fx-progress-bar"></div></div></div>',
    code: {
      html: `<div class="progress-wrap">
  <div class="progress">
    <div class="progress-bar"></div>
  </div>
</div>`,
      css: `.progress-wrap { max-width: 260px; width: 100%; }

.progress {
  width: 100%; height: 8px;
  background: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #0071e3, #764ba2);
  border-radius: 4px;
  animation: progress-fill 2s ease-in-out infinite;
}

@keyframes progress-fill {
  0% { width: 0%; }
  50% { width: 80%; }
  100% { width: 100%; }
}`
    }
  },

  // ===== 装飾・図形系 =====
  {
    id: 'morph', trigger: 'auto', sub: 'other',
    title: 'モーフィングシェイプ',
    tags: ['図形', 'アニメーション'],
    prompt: '丸い図形がグラデーションを保ちながらアメーバのように形を変え続けるアニメーションを作って',
    html: '<div class="fx-morph"></div>',
    code: {
      html: '<div class="morph-shape"></div>',
      css: `.morph-shape {
  width: 80px; height: 80px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  animation: morph 4s ease-in-out infinite;
}

@keyframes morph {
  0%, 100% { border-radius: 50%; }
  25% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
  50% { border-radius: 50% 50% 20% 80% / 25% 80% 20% 75%; }
  75% { border-radius: 70% 30% 50% 50% / 50% 50% 70% 30%; }
}`
    }
  },
  {
    id: 'marquee', trigger: 'auto', sub: 'move',
    title: 'マーキー（流れるテキスト）',
    tags: ['テキスト', 'アニメーション'],
    prompt: 'テキストが右から左にスクロールし続けるマーキーアニメーションを作って',
    html: '<div class="fx-marquee-wrap"><span class="fx-marquee">ニュース速報: これはマーキーテキストです →→→</span></div>',
    code: {
      html: `<div class="marquee-wrap">
  <span class="marquee-text">ニュース速報: これはマーキーテキストです</span>
</div>`,
      css: `.marquee-wrap {
  width: 100%;
  overflow: hidden;
}

.marquee-text {
  display: inline-block;
  white-space: nowrap;
  font-size: 1.5rem;
  font-weight: 600;
  animation: marquee 8s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}`
    }
  },
  {
    id: 'pulse', trigger: 'auto', sub: 'move',
    title: 'パルス拡大',
    tags: ['テキスト', 'アニメーション'],
    prompt: 'テキストがドクドクと脈打つように拡大縮小を繰り返すアニメーションを作って',
    html: '<span class="fx-pulse">Pulse</span>',
    code: {
      html: '<span class="pulse-text">Pulse</span>',
      css: `.pulse-text {
  display: inline-block;
  font-size: 2rem;
  font-weight: 700;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.15); }
}`
    }
  },
  {
    id: 'elastic', trigger: 'auto', sub: 'move',
    title: 'エラスティック（弾む）',
    tags: ['テキスト', 'アニメーション'],
    prompt: 'テキストがゴムのように横に伸びたり縦に伸びたりする弾むアニメーションを作って',
    html: '<span class="fx-elastic">Elastic</span>',
    code: {
      html: '<span class="elastic-text">Elastic</span>',
      css: `.elastic-text {
  display: inline-block;
  font-size: 2rem;
  font-weight: 700;
  animation: elastic 1.5s ease-in-out infinite;
}

@keyframes elastic {
  0%, 100% { transform: scaleX(1); }
  30% { transform: scaleX(1.25) scaleY(0.75); }
  40% { transform: scaleX(0.75) scaleY(1.25); }
  50% { transform: scaleX(1.15) scaleY(0.85); }
  65% { transform: scaleX(0.95) scaleY(1.05); }
  75% { transform: scaleX(1.05) scaleY(0.95); }
}`
    }
  },
  {
    id: 'flip', trigger: 'auto', sub: 'move',
    title: 'フリップ回転',
    tags: ['テキスト', 'アニメーション', '3D'],
    prompt: 'テキストがY軸で180度くるっと回転するフリップアニメーションを作って',
    html: '<span class="fx-flip">FLIP</span>',
    code: {
      html: '<span class="flip-text">FLIP</span>',
      css: `.flip-text {
  display: inline-block;
  font-size: 2rem;
  font-weight: 700;
  animation: flip 2s ease-in-out infinite;
}

@keyframes flip {
  0%, 100% { transform: rotateY(0); }
  50% { transform: rotateY(180deg); }
}`
    }
  },
  {
    id: 'blur-in', trigger: 'auto', sub: 'move',
    title: 'ブラーイン・アウト',
    tags: ['テキスト', 'アニメーション'],
    prompt: 'テキストがぼやけて消えてまた現れるブラーアニメーションを作って',
    html: '<span class="fx-blur-in">Blur</span>',
    code: {
      html: '<span class="blur-text">Blur</span>',
      css: `.blur-text {
  font-size: 2rem;
  font-weight: 700;
  animation: blur-in 2s ease-in-out infinite;
}

@keyframes blur-in {
  0%, 100% { filter: blur(0); opacity: 1; }
  50% { filter: blur(4px); opacity: 0.5; }
}`
    }
  },
  {
    id: 'slide-up', trigger: 'auto', sub: 'move',
    title: 'スライドアップフェード',
    tags: ['テキスト', 'アニメーション'],
    prompt: 'テキストが下からスライドしながらフェードインして上にスライドしながらフェードアウトするアニメーションを作って',
    html: '<span class="fx-slide-up">Slide Up</span>',
    code: {
      html: '<span class="slide-text">Slide Up</span>',
      css: `.slide-text {
  font-size: 1.8rem;
  font-weight: 700;
  animation: slide-up 2s ease-in-out infinite;
}

@keyframes slide-up {
  0% { transform: translateY(20px); opacity: 0; }
  30%, 70% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-20px); opacity: 0; }
}`
    }
  },

  // ===== 枠が光る系 =====
  {
    id: 'neon-box', trigger: 'auto', sub: 'border',
    title: 'ネオン枠グロー',
    tags: ['枠', '光', 'アニメーション'],
    prompt: '要素の枠線がネオンのように光って脈打つbox-shadowエフェクトを作って。シアン色のネオンサイン風にして',
    html: '<div style="background:#111;padding:48px 32px;border-radius:8px;width:100%;display:flex;align-items:center;justify-content:center"><div class="fx-neon-box">Neon Box</div></div>',
    code: {
      html: '<div class="neon-box">Neon Box</div>',
      css: `.neon-box {
  padding: 16px 32px;
  font-size: 1.2rem;
  font-weight: 700;
  color: #0ff;
  background: #111;
  border: 2px solid #0ff;
  border-radius: 8px;
  animation: neon-box-glow 2s ease-in-out infinite alternate;
}

@keyframes neon-box-glow {
  0% {
    box-shadow: 0 0 5px #0ff, 0 0 10px #0ff, inset 0 0 5px rgba(0,255,255,0.1);
    border-color: #0ff;
  }
  100% {
    box-shadow: 0 0 10px #0ff, 0 0 25px #0ff, 0 0 50px #0ff, inset 0 0 15px rgba(0,255,255,0.2);
    border-color: #fff;
  }
}`
    }
  },
  {
    id: 'rainbow-border', trigger: 'auto', sub: 'border',
    title: '虹色回転ボーダー',
    tags: ['枠', 'グラデーション', 'アニメーション'],
    prompt: '要素の枠線が虹色のグラデーションでくるくる回転するボーダーエフェクトを作って。conic-gradientで回転させて',
    html: '<div class="fx-rainbow-border-wrap" id="rb-wrap"><div class="fx-rainbow-border">Rainbow Border</div></div>',
    code: {
      html: `<div class="rainbow-border-wrap">
  <div class="rainbow-border">Rainbow Border</div>
</div>`,
      css: `.rainbow-border-wrap {
  padding: 3px;
  border-radius: 12px;
  background: conic-gradient(from 0deg, #ff0000, #ff7700, #ffff00, #00ff00, #0077ff, #8b00ff, #ff0000);
}

.rainbow-border {
  padding: 20px 36px;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 10px;
  background: #fff;
}`,
      js: `// JSで回転アニメーション
let angle = 0;
const wrap = document.querySelector('.rainbow-border-wrap');
function rotate() {
  angle = (angle + 2) % 360;
  wrap.style.background =
    \`conic-gradient(from \${angle}deg, #ff0000, #ff7700, #ffff00, #00ff00, #0077ff, #8b00ff, #ff0000)\`;
  requestAnimationFrame(rotate);
}
rotate();`
    },
    init: (el) => {
      const wrap = el.querySelector('#rb-wrap');
      if (!wrap) return;
      let angle = 0;
      function rotate() {
        angle = (angle + 2) % 360;
        wrap.style.background =
          `conic-gradient(from ${angle}deg, #ff0000, #ff7700, #ffff00, #00ff00, #0077ff, #8b00ff, #ff0000)`;
        wrap._rafId = requestAnimationFrame(rotate);
      }
      rotate();
    }
  },
  {
    id: 'breathing-glow', trigger: 'auto', sub: 'border',
    title: '呼吸する光の枠',
    tags: ['枠', '光', 'アニメーション'],
    prompt: '要素の枠線が呼吸するようにじんわり光ったり暗くなったりを繰り返すグローエフェクトを作って。紫系で',
    html: '<div style="background:#1a1a2e;padding:48px 32px;border-radius:8px;width:100%;display:flex;align-items:center;justify-content:center"><div class="fx-breathing-glow">Breathing Glow</div></div>',
    code: {
      html: '<div class="breathing-glow">Breathing Glow</div>',
      css: `.breathing-glow {
  padding: 16px 32px;
  font-size: 1.2rem;
  font-weight: 700;
  background: #fff;
  border: 2px solid #764ba2;
  border-radius: 8px;
  animation: breathing 3s ease-in-out infinite;
}

@keyframes breathing {
  0%, 100% {
    box-shadow: 0 0 5px rgba(118,75,162,0.3);
    border-color: rgba(118,75,162,0.5);
  }
  50% {
    box-shadow: 0 0 15px rgba(118,75,162,0.6), 0 0 30px rgba(118,75,162,0.3), 0 0 45px rgba(118,75,162,0.1);
    border-color: rgba(118,75,162,1);
  }
}`
    }
  },

  // ===== 追加エフェクト =====
  {
    id: 'glass', trigger: 'auto', sub: 'border',
    title: 'すりガラス（グラスモーフィズム）',
    tags: ['カード', 'デザイン'],
    prompt: 'すりガラス風の半透明カード（グラスモーフィズム）を作って。backdrop-filterで背景をぼかして、白い半透明ボーダーを付けて',
    html: '<div class="fx-glass-area"><div class="fx-glass">Glassmorphism Card</div></div>',
    code: {
      html: '<div class="glass-card">Glassmorphism Card</div>',
      css: `.glass-card {
  padding: 24px 32px;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 12px;
  color: #fff;
  font-weight: 600;
}`
    }
  },
  {
    id: 'fill-btn', trigger: 'hover',
    title: 'ホバー塗りつぶしボタン',
    tags: ['ボタン', 'ホバー', 'アニメーション'],
    prompt: 'ボタンにホバーしたら左から背景色がスライドして塗りつぶされるエフェクトを作って。枠線だけのボタンからベタ塗りに変わる感じで',
    html: '<button class="fx-fill-btn">Hover me</button>',
    code: {
      html: '<button class="fill-btn">Hover me</button>',
      css: `.fill-btn {
  position: relative;
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 600;
  color: #0071e3;
  background: transparent;
  border: 2px solid #0071e3;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.4s;
  z-index: 1;
}

.fill-btn::before {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 100%; height: 100%;
  background: #0071e3;
  transition: left 0.4s;
  z-index: -1;
}

.fill-btn:hover { color: #fff; }
.fill-btn:hover::before { left: 0; }`
    }
  },
  {
    id: 'badge', trigger: 'auto', sub: 'other',
    title: '通知バッジ（パルス）',
    tags: ['UI部品', 'アニメーション'],
    prompt: '要素の右上に赤い通知バッジを付けて、ping/パルスアニメーションで注意を引くようにして',
    html: '<div class="fx-badge-wrap">通知<span class="fx-badge">3</span></div>',
    code: {
      html: `<div class="badge-wrap">
  通知
  <span class="badge">3</span>
</div>`,
      css: `.badge-wrap {
  position: relative;
  display: inline-block;
  padding: 10px 24px;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-weight: 600;
}

.badge {
  position: absolute;
  top: -6px; right: -6px;
  width: 18px; height: 18px;
  background: #ff3b30;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 0.65rem;
  font-weight: 700;
}

.badge::after {
  content: '';
  position: absolute;
  width: 100%; height: 100%;
  border-radius: 50%;
  background: #ff3b30;
  animation: badge-ping 1.5s cubic-bezier(0,0,0.2,1) infinite;
}

@keyframes badge-ping {
  75%, 100% { transform: scale(2.2); opacity: 0; }
}`
    }
  },
  {
    id: 'gradient-bg', trigger: 'auto', sub: 'border',
    title: 'グラデーション背景アニメーション',
    tags: ['背景', 'グラデーション', 'アニメーション'],
    prompt: '背景のグラデーションがゆっくり色が移り変わるアニメーションを作って。4色のグラデーションを対角線に配置して',
    html: '<div class="fx-gradient-bg">Animated Gradient</div>',
    code: {
      html: '<div class="gradient-bg">Animated Gradient</div>',
      css: `.gradient-bg {
  padding: 32px;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient-shift 6s ease infinite;
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`
    }
  },
  {
    id: 'shine', trigger: 'hover',
    title: 'ホバーで光が走るボタン',
    tags: ['ボタン', 'ホバー', 'アニメーション'],
    prompt: 'ボタンにホバーすると斜めに光が左から右にシュッと走るシャイン/グリントエフェクトを作って',
    html: '<button class="fx-shine">Shine Effect</button>',
    code: {
      html: '<button class="shine-btn">Shine Effect</button>',
      css: `.shine-btn {
  position: relative;
  padding: 16px 32px;
  font-size: 1rem;
  font-weight: 600;
  background: #0071e3;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
}

.shine-btn::after {
  content: '';
  position: absolute;
  top: -50%; left: -75%;
  width: 50%; height: 200%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transform: skewX(-25deg);
  transition: left 0.6s;
}

.shine-btn:hover::after {
  left: 125%;
}`
    }
  },
  {
    id: 'shine-loop', trigger: 'auto', sub: 'border',
    title: '常時シャインボタン',
    tags: ['ボタン', 'アニメーション'],
    prompt: 'ボタンの上を斜めの光が繰り返し左から右にシュッと走り続けるシャインエフェクトを作って。ホバー不要で常時アニメーションで',
    html: '<button class="fx-shine-loop">Shine Loop</button>',
    code: {
      html: '<button class="shine-loop-btn">Shine Loop</button>',
      css: `.shine-loop-btn {
  position: relative;
  padding: 16px 32px;
  font-size: 1rem;
  font-weight: 600;
  background: #0071e3;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
}

.shine-loop-btn::after {
  content: '';
  position: absolute;
  top: -50%; left: -75%;
  width: 50%; height: 200%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  transform: skewX(-25deg);
  animation: shine-loop 2.5s ease-in-out infinite;
}

@keyframes shine-loop {
  0% { left: -75%; }
  100% { left: 125%; }
}`
    }
  },
  {
    id: 'wavy', trigger: 'auto', sub: 'move',
    title: 'ウェーブテキスト',
    tags: ['テキスト', 'アニメーション'],
    prompt: '文字が1文字ずつ波のように上下に揺れるウェーブアニメーションを作って。各文字にdelayをずらして',
    html: '<span class="fx-wavy" id="wavy-text"></span>',
    code: {
      html: '<span class="wavy-text">Wave!</span>',
      css: `.wavy-text span {
  display: inline-block;
  font-size: 2rem;
  font-weight: 700;
  animation: wavy 1.5s ease-in-out infinite;
}

@keyframes wavy {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}`,
      js: `document.querySelector('.wavy-text').innerHTML =
  'Wave!'.split('').map((c, i) =>
    \`<span style="animation-delay:\${i * 0.1}s">\${c}</span>\`
  ).join('');`
    },
    init: (el) => {
      const t = el.querySelector('#wavy-text');
      if (t) t.innerHTML = 'Wave!'.split('').map((c, i) =>
        `<span style="animation-delay:${i * 0.1}s">${c === ' ' ? '&nbsp;' : c}</span>`
      ).join('');
    }
  },
  {
    id: 'border-draw', trigger: 'hover',
    title: 'ホバーで枠線が描かれる',
    tags: ['ボタン', 'ホバー', 'アニメーション'],
    prompt: '要素にホバーすると枠線がスッと一周描かれるSVGボーダードローエフェクトを作って',
    html: '<button class="fx-border-draw">Hover me<svg><rect x="1" y="1" rx="4" ry="4" width="calc(100% - 2px)" height="calc(100% - 2px)"/></svg></button>',
    code: {
      html: `<button class="border-draw">
  Hover me
  <svg><rect x="1" y="1" rx="4" ry="4"
    width="calc(100% - 2px)"
    height="calc(100% - 2px)"/></svg>
</button>`,
      css: `.border-draw {
  position: relative;
  padding: 16px 32px;
  font-size: 1rem;
  font-weight: 600;
  background: transparent;
  border: none;
  cursor: pointer;
}

.border-draw svg {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
}

.border-draw rect {
  fill: none;
  stroke: #0071e3;
  stroke-width: 2;
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  transition: stroke-dashoffset 0.6s ease;
}

.border-draw:hover rect {
  stroke-dashoffset: 0;
}`
    }
  },
  {
    id: 'wobble', trigger: 'auto', sub: 'move',
    title: 'ウォブル（ゆらゆら）',
    tags: ['テキスト', 'アニメーション'],
    prompt: 'テキストが左右にゆらゆら揺れるウォブルアニメーションを作って。振り子のように徐々に収束する動きで',
    html: '<span class="fx-wobble">Wobble</span>',
    code: {
      html: '<span class="wobble-text">Wobble</span>',
      css: `.wobble-text {
  display: inline-block;
  font-size: 2rem;
  font-weight: 700;
  animation: wobble 2s ease-in-out infinite;
}

@keyframes wobble {
  0%, 100% { transform: rotate(0); }
  15% { transform: rotate(5deg); }
  30% { transform: rotate(-5deg); }
  45% { transform: rotate(3deg); }
  60% { transform: rotate(-3deg); }
  75% { transform: rotate(1deg); }
}`
    }
  },
  {
    id: 'toggle', trigger: 'click',
    title: 'トグルスイッチ',
    tags: ['UI部品', 'インタラクション'],
    prompt: 'CSSだけでiOS風のトグルスイッチを作って。クリックでON/OFFが切り替わるようにして',
    html: '<label style="cursor:pointer;display:flex;align-items:center;gap:12px;font-weight:600"><input type="checkbox" class="fx-toggle" checked> ON / OFF</label>',
    code: {
      html: '<input type="checkbox" class="toggle" checked>',
      css: `.toggle {
  position: relative;
  width: 52px; height: 28px;
  appearance: none;
  -webkit-appearance: none;
  background: #ccc;
  border-radius: 14px;
  cursor: pointer;
  transition: background 0.3s;
  border: none;
}

.toggle::before {
  content: '';
  position: absolute;
  top: 2px; left: 2px;
  width: 24px; height: 24px;
  background: #fff;
  border-radius: 50%;
  transition: transform 0.3s;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
}

.toggle:checked { background: #34c759; }
.toggle:checked::before { transform: translateX(24px); }`
    }
  },
  {
    id: 'gradient-shadow', trigger: 'hover',
    title: 'グラデーションシャドウ',
    tags: ['ボタン', 'ホバー', 'デザイン'],
    prompt: 'グラデーション背景のボタンに、同じ色のぼんやりした影をつけて浮いてるように見せて。ホバーでさらに浮くように',
    html: '<button class="fx-gradient-shadow">Gradient Shadow</button>',
    code: {
      html: '<button class="gradient-shadow-btn">Gradient Shadow</button>',
      css: `.gradient-shadow-btn {
  padding: 20px 32px;
  font-size: 1rem;
  font-weight: 600;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 30px -5px rgba(102,126,234,0.5);
  border: none;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.gradient-shadow-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px -5px rgba(102,126,234,0.7);
}`
    }
  },
  {
    id: 'heartbeat', trigger: 'auto', sub: 'other',
    title: 'ハートビート',
    tags: ['アイコン', 'アニメーション'],
    prompt: 'ハートが心臓の鼓動のようにドクドクと2回拍打って休むアニメーションを作って',
    html: '<span class="fx-heartbeat">❤️</span>',
    code: {
      html: '<span class="heartbeat">❤️</span>',
      css: `.heartbeat {
  font-size: 2.5rem;
  display: inline-block;
  animation: heartbeat 1.2s ease-in-out infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  14% { transform: scale(1.3); }
  28% { transform: scale(1); }
  42% { transform: scale(1.3); }
  70% { transform: scale(1); }
}`
    }
  },
  {
    id: 'rotating-words', trigger: 'auto', sub: 'text-other',
    title: '回転する単語',
    tags: ['テキスト', 'アニメーション'],
    prompt: '「私たちは ○○ です」の○○部分が別の単語に次々と切り替わるアニメーションを作って。縦にスライドして入れ替わるように',
    html: '<div class="fx-rotating-words">私たちは <div class="word-slot"><div class="word-list"><span>エンジニア</span><span>デザイナー</span><span>クリエイター</span><span>チーム</span></div></div> です</div>',
    code: {
      html: `<div class="rotating-words">
  私たちは
  <div class="word-slot">
    <div class="word-list">
      <span>エンジニア</span>
      <span>デザイナー</span>
      <span>クリエイター</span>
      <span>チーム</span>
    </div>
  </div>
  です
</div>`,
      css: `.rotating-words {
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
}

.word-slot {
  display: inline-block;
  position: relative;
  height: 1.5em;
  overflow: hidden;
  min-width: 100px;
}

.word-slot span {
  display: block;
  height: 1.5em;
  line-height: 1.5em;
  color: #0071e3;
}

.word-list {
  animation: word-rotate 6s ease-in-out infinite;
}

@keyframes word-rotate {
  0%, 20% { transform: translateY(0); }
  25%, 45% { transform: translateY(-1.5em); }
  50%, 70% { transform: translateY(-3em); }
  75%, 95% { transform: translateY(-4.5em); }
  100% { transform: translateY(0); }
}`
    }
  },
  {
    id: 'color-cycle', trigger: 'auto', sub: 'border',
    title: '色が変わる背景',
    tags: ['背景', 'アニメーション'],
    prompt: '背景色がゆっくり赤→オレンジ→緑→青→紫と変化し続けるカラーサイクルアニメーションを作って',
    html: '<div class="fx-color-cycle">Color Cycle</div>',
    code: {
      html: '<div class="color-cycle">Color Cycle</div>',
      css: `.color-cycle {
  padding: 32px;
  border-radius: 8px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  animation: color-cycle 8s linear infinite;
}

@keyframes color-cycle {
  0% { background: #e74c3c; }
  16% { background: #e67e22; }
  33% { background: #2ecc71; }
  50% { background: #3498db; }
  66% { background: #9b59b6; }
  83% { background: #e74c3c; }
  100% { background: #e74c3c; }
}`
    }
  },
  {
    id: 'decode', trigger: 'auto', sub: 'move',
    title: 'テキストデコード（解読）',
    tags: ['テキスト', 'アニメーション', 'JS'],
    prompt: 'テキストがランダムな文字からデコード（解読）されるように1文字ずつ正しい文字に変わっていくアニメーションを作って',
    html: '<span class="fx-decode" id="decode-text">DECODING...</span>',
    code: {
      html: '<span class="decode-text">HELLO</span>',
      css: `.decode-text {
  font-family: monospace;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 2px;
}`,
      js: `const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%';
const target = 'HELLO WORLD';
const el = document.querySelector('.decode-text');
let iteration = 0;

const interval = setInterval(() => {
  el.textContent = target.split('').map((char, i) => {
    if (i < iteration) return target[i];
    return chars[Math.floor(Math.random() * chars.length)];
  }).join('');
  if (iteration >= target.length) {
    iteration = 0; // loop
  }
  iteration += 1 / 3;
}, 50);`
    },
    init: (el) => {
      const span = el.querySelector('#decode-text');
      if (!span) return;
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%';
      const target = 'HELLO WORLD';
      let iteration = 0;
      setInterval(() => {
        span.textContent = target.split('').map((char, i) => {
          if (i < iteration) return target[i];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('');
        if (iteration >= target.length + 10) iteration = 0;
        iteration += 1 / 3;
      }, 50);
    }
  },
  {
    id: 'strikethrough', trigger: 'auto', sub: 'text-other',
    title: '打ち消し線アニメーション',
    tags: ['テキスト', 'アニメーション'],
    prompt: 'テキストに打ち消し線が左から右にスッと引かれるアニメーションを作って。繰り返しで線が消えてまた引かれるように',
    html: '<span class="fx-strikethrough">SALE ¥9,800</span>',
    code: {
      html: '<span class="strikethrough">SALE ¥9,800</span>',
      css: `.strikethrough {
  position: relative;
  display: inline-block;
  font-size: 1.8rem;
  font-weight: 700;
}

.strikethrough::after {
  content: '';
  position: absolute;
  left: 0; top: 50%;
  width: 0; height: 3px;
  background: #e74c3c;
  animation: strike 2s ease-in-out infinite;
}

@keyframes strike {
  0%, 100% { width: 0; left: 0; }
  40%, 60% { width: 100%; left: 0; }
  80% { width: 0; left: 100%; }
}`
    }
  },

  // ===== 追加エフェクト v2 =====

  // --- 色が変わる ---
  {
    id: 'shadow-color', trigger: 'auto', sub: 'color',
    title: '影の色が変わるテキスト',
    tags: ['テキスト', 'アニメーション'],
    prompt: 'テキストの影の色が赤→黄→緑→青と順番に変化し続けるアニメーションを作って',
    html: '<span class="fx-shadow-color">SHADOW</span>',
    code: {
      html: '<span class="shadow-color">SHADOW</span>',
      css: `.shadow-color {
  font-size: 2rem;
  font-weight: 800;
  animation: shadow-color 4s linear infinite;
}

@keyframes shadow-color {
  0% { text-shadow: 3px 3px 0 #e74c3c; }
  25% { text-shadow: 3px 3px 0 #f1c40f; }
  50% { text-shadow: 3px 3px 0 #2ecc71; }
  75% { text-shadow: 3px 3px 0 #3498db; }
  100% { text-shadow: 3px 3px 0 #e74c3c; }
}`
    }
  },
  {
    id: 'chromatic', trigger: 'auto', sub: 'color',
    title: '色収差（RGBずれ）',
    tags: ['テキスト', 'アニメーション', 'エフェクト'],
    prompt: 'テキストの赤と青の色がずれて揺れる色収差（クロマティックアベレーション）エフェクトを作って',
    html: '<span class="fx-chromatic" data-text="CHROME">CHROME</span>',
    code: {
      html: '<span class="chromatic" data-text="CHROME">CHROME</span>',
      css: `.chromatic {
  font-size: 2rem;
  font-weight: 800;
  position: relative;
}

.chromatic::before, .chromatic::after {
  content: attr(data-text);
  position: absolute;
  top: 0; left: 0;
}

.chromatic::before {
  color: #ff0000;
  opacity: 0.6;
  animation: chroma-r 2s ease-in-out infinite;
}

.chromatic::after {
  color: #0000ff;
  opacity: 0.6;
  animation: chroma-b 2s ease-in-out infinite;
}

@keyframes chroma-r {
  0%, 100% { transform: translate(-2px, 0); }
  50% { transform: translate(2px, 1px); }
}

@keyframes chroma-b {
  0%, 100% { transform: translate(2px, 0); }
  50% { transform: translate(-2px, -1px); }
}`
    }
  },

  // --- その他の文字系 ---
  {
    id: 'highlight', trigger: 'hover',
    title: 'マーカーハイライト',
    tags: ['テキスト', 'ホバー'],
    prompt: 'テキストにホバーすると蛍光マーカーで線を引くようにハイライトされるエフェクトを作って',
    html: '<span class="fx-highlight">重要なテキスト</span>',
    code: {
      html: '<span class="highlight">重要なテキスト</span>',
      css: `.highlight {
  font-size: 1.5rem;
  font-weight: 700;
  position: relative;
  display: inline;
  cursor: pointer;
}

.highlight::before {
  content: '';
  position: absolute;
  left: -2px; bottom: 0;
  width: 0; height: 40%;
  background: rgba(255, 230, 0, 0.5);
  z-index: -1;
  transition: width 0.4s ease;
}

.highlight:hover::before {
  width: calc(100% + 4px);
}`
    }
  },
  {
    id: 'counter', trigger: 'auto', sub: 'text-other',
    title: 'カウントアップ',
    tags: ['テキスト', 'アニメーション', 'JS'],
    prompt: '数字が0からターゲットの値までカウントアップするアニメーションを作って',
    html: '<span class="fx-counter" id="counter-el">0</span>',
    code: {
      html: '<span class="counter">0</span>',
      css: `.counter {
  font-size: 2.5rem;
  font-weight: 800;
  font-family: monospace;
  font-variant-numeric: tabular-nums;
}`,
      js: `function countUp(el, target, duration = 2000) {
  let start = 0;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    el.textContent = Math.floor(progress * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
countUp(document.querySelector('.counter'), 12345);`
    },
    init: (el) => {
      const span = el.querySelector('#counter-el');
      if (!span) return;
      function run() {
        let start = null;
        const target = 12345;
        const duration = 2000;
        const step = (ts) => {
          if (!start) start = ts;
          const p = Math.min((ts - start) / duration, 1);
          span.textContent = Math.floor(p * target).toLocaleString();
          if (p < 1) requestAnimationFrame(step);
          else setTimeout(run, 1500);
        };
        requestAnimationFrame(step);
      }
      run();
    }
  },
  {
    id: 'clip-reveal', trigger: 'auto', sub: 'text-other',
    title: 'クリップパス文字出現',
    tags: ['テキスト', 'アニメーション'],
    prompt: 'テキストがclip-pathで左から右にスッと現れて、右に消えていくリビールアニメーションを作って',
    html: '<span class="fx-clip-reveal">REVEAL</span>',
    code: {
      html: '<span class="clip-reveal">REVEAL</span>',
      css: `.clip-reveal {
  font-size: 2rem;
  font-weight: 700;
  animation: clip-reveal 3s ease-in-out infinite;
}

@keyframes clip-reveal {
  0% { clip-path: inset(0 100% 0 0); }
  30%, 70% { clip-path: inset(0 0 0 0); }
  100% { clip-path: inset(0 0 0 100%); }
}`
    }
  },

  // --- 枠系 ---
  {
    id: 'wave-divider', trigger: 'auto', sub: 'other',
    title: 'ウェーブ区切り線',
    tags: ['装飾', 'アニメーション'],
    prompt: 'セクション間の区切りとして使えるSVGの波形ディバイダーを作って。波がゆらゆら動くようにして',
    html: '<div class="fx-wave-divider"><svg viewBox="0 0 320 40" preserveAspectRatio="none"><path class="wave-path" fill="var(--accent)" opacity="0.3" d="M0,20 Q80,0 160,20 T320,20 L320,40 L0,40 Z"><animate attributeName="d" dur="3s" repeatCount="indefinite" values="M0,20 Q80,0 160,20 T320,20 L320,40 L0,40 Z;M0,20 Q80,40 160,20 T320,20 L320,40 L0,40 Z;M0,20 Q80,0 160,20 T320,20 L320,40 L0,40 Z"/></path></svg></div>',
    code: {
      html: `<div class="wave-divider">
  <svg viewBox="0 0 320 40" preserveAspectRatio="none">
    <path fill="#0071e3" opacity="0.3"
      d="M0,20 Q80,0 160,20 T320,20 L320,40 L0,40 Z">
      <animate attributeName="d" dur="3s"
        repeatCount="indefinite"
        values="M0,20 Q80,0 160,20 T320,20 L320,40 L0,40 Z;
                M0,20 Q80,40 160,20 T320,20 L320,40 L0,40 Z;
                M0,20 Q80,0 160,20 T320,20 L320,40 L0,40 Z"/>
    </path>
  </svg>
</div>`,
      css: `.wave-divider { width: 100%; }
.wave-divider svg {
  display: block;
  width: 100%;
  height: 40px;
}`
    }
  },
  {
    id: 'focus-ring', trigger: 'auto', sub: 'border',
    title: 'フォーカスリングパルス',
    tags: ['枠', 'アニメーション', 'UI部品'],
    prompt: 'ボタンの周りにフォーカスリングが脈打つように広がって消えるパルスアニメーションを作って',
    html: '<button class="fx-focus-ring">Focus Ring</button>',
    code: {
      html: '<button class="focus-ring-btn">Focus Ring</button>',
      css: `.focus-ring-btn {
  padding: 12px 28px;
  font-size: 1rem;
  font-weight: 600;
  background: #fff;
  border: 2px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  animation: focus-pulse 2s ease-in-out infinite;
}

@keyframes focus-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(0,113,227,0.4); }
  50% { box-shadow: 0 0 0 6px rgba(0,113,227,0); }
}`
    }
  },

  // --- その他 ---
  {
    id: 'sparkle', trigger: 'auto', sub: 'other',
    title: 'キラキラ',
    tags: ['装飾', 'アニメーション'],
    prompt: 'テキストの周りに星がキラキラ光るスパークルエフェクトを作って',
    html: '<span class="fx-sparkle" id="sparkle-el">Sparkle</span>',
    code: {
      html: '<span class="sparkle">Sparkle</span>',
      css: `.sparkle {
  position: relative;
  font-size: 2rem;
  font-weight: 700;
  display: inline-block;
}

.sparkle .star {
  position: absolute;
  font-size: 0.8rem;
  animation: sparkle 1.5s ease-in-out infinite;
  pointer-events: none;
}

@keyframes sparkle {
  0%, 100% { opacity: 0; transform: scale(0) rotate(0); }
  50% { opacity: 1; transform: scale(1) rotate(180deg); }
}`,
      js: `const el = document.querySelector('.sparkle');
const positions = [
  { top: '-10px', left: '-5px', delay: '0s' },
  { top: '-5px', right: '-8px', delay: '0.5s' },
  { bottom: '-8px', left: '30%', delay: '1s' },
  { top: '50%', right: '-10px', delay: '0.3s' },
];
positions.forEach(p => {
  const star = document.createElement('span');
  star.className = 'star';
  star.textContent = '✦';
  Object.assign(star.style, p);
  star.style.animationDelay = p.delay;
  el.appendChild(star);
});`
    },
    init: (el) => {
      const span = el.querySelector('#sparkle-el');
      if (!span) return;
      const positions = [
        { top: '-10px', left: '-5px', animationDelay: '0s' },
        { top: '-5px', right: '-8px', animationDelay: '0.5s' },
        { bottom: '-8px', left: '30%', animationDelay: '1s' },
        { top: '50%', right: '-10px', animationDelay: '0.3s' },
      ];
      positions.forEach(p => {
        const star = document.createElement('span');
        star.className = 'star';
        star.textContent = '✦';
        Object.assign(star.style, p);
        span.appendChild(star);
      });
    }
  },
  {
    id: 'breathing-circle', trigger: 'auto', sub: 'other',
    title: '呼吸する円',
    tags: ['図形', 'アニメーション'],
    prompt: '丸い円がゆっくり拡大縮小しながら透明度も変わる呼吸アニメーションを作って。瞑想アプリのような感じで',
    html: '<div class="fx-breathing-circle"></div>',
    code: {
      html: '<div class="breathing-circle"></div>',
      css: `.breathing-circle {
  width: 60px; height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  animation: breathing-circle 3s ease-in-out infinite;
}

@keyframes breathing-circle {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.2); opacity: 1; }
}`
    }
  },

  // --- ホバー ---
  {
    id: 'tilt-card', trigger: 'hover',
    title: '3Dチルトカード',
    tags: ['カード', 'ホバー', '3D'],
    prompt: 'カードにホバーすると3Dで少し傾いて奥行きが出るチルトエフェクトを作って',
    html: '<div class="fx-tilt-card">3D Tilt Card</div>',
    code: {
      html: '<div class="tilt-card">3D Tilt Card</div>',
      css: `.tilt-card {
  padding: 24px 32px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  font-weight: 600;
  text-align: center;
  transition: transform 0.3s ease;
  transform-style: preserve-3d;
  perspective: 500px;
  cursor: pointer;
}

.tilt-card:hover {
  transform: rotateY(-8deg) rotateX(5deg);
  box-shadow: 8px 8px 20px rgba(0,0,0,0.12);
}`
    }
  },
  {
    id: 'hover-rotate', trigger: 'hover',
    title: 'ホバーで1回転',
    tags: ['アイコン', 'ホバー', 'アニメーション'],
    prompt: '要素にホバーすると360度くるっと1回転するエフェクトを作って。アイコンや画像に使えるように',
    html: '<span class="fx-hover-rotate">🔄</span>',
    code: {
      html: '<span class="hover-rotate">🔄</span>',
      css: `.hover-rotate {
  display: inline-block;
  font-size: 2rem;
  transition: transform 0.5s ease;
  cursor: pointer;
}

.hover-rotate:hover {
  transform: rotate(360deg);
}`
    }
  },
  {
    id: 'blur-bg', trigger: 'hover',
    title: 'ホバーで背景ぼかし',
    tags: ['カード', 'ホバー', 'エフェクト'],
    prompt: 'カードにホバーすると背景がぼやけてテキストが際立つブラー背景エフェクトを作って',
    html: '<div class="fx-blur-bg-wrap"><div class="bg-img"></div><div class="bg-text">ホバーしてね</div></div>',
    code: {
      html: `<div class="blur-bg-wrap">
  <div class="bg-img"></div>
  <div class="bg-text">ホバーしてね</div>
</div>`,
      css: `.blur-bg-wrap {
  position: relative;
  padding: 24px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
}

.bg-img {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
  transition: filter 0.4s;
}

.blur-bg-wrap:hover .bg-img {
  filter: blur(6px);
}

.bg-text {
  position: relative;
  color: #fff;
  font-weight: 700;
  text-align: center;
  z-index: 1;
}`
    }
  },
  {
    id: 'jelly-btn', trigger: 'hover',
    title: 'ゼリーボタン',
    tags: ['ボタン', 'ホバー', 'アニメーション'],
    prompt: 'ボタンにホバーするとゼリーのようにぷるぷる弾むアニメーションを作って',
    html: '<button class="fx-jelly-btn">Jelly!</button>',
    code: {
      html: '<button class="jelly-btn">Jelly!</button>',
      css: `.jelly-btn {
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 600;
  background: #0071e3;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.jelly-btn:hover {
  animation: jelly 0.5s ease;
}

@keyframes jelly {
  0% { transform: scale(1, 1); }
  30% { transform: scale(1.2, 0.8); }
  40% { transform: scale(0.8, 1.2); }
  50% { transform: scale(1.1, 0.9); }
  65% { transform: scale(0.95, 1.05); }
  75% { transform: scale(1.05, 0.95); }
  100% { transform: scale(1, 1); }
}`
    }
  },

  // --- クリック ---
  {
    id: 'hamburger', trigger: 'click',
    title: 'ハンバーガーメニュー',
    tags: ['UI部品', 'インタラクション', 'アニメーション'],
    prompt: 'ハンバーガーメニューアイコンをクリックすると×印に変形するアニメーションを作って。3本線から×にスムーズに変わるように',
    html: '<button class="fx-hamburger" id="hamburger-btn"><span></span><span></span><span></span></button>',
    code: {
      html: `<button class="hamburger">
  <span></span><span></span><span></span>
</button>`,
      css: `.hamburger {
  width: 36px; height: 28px;
  position: relative;
  cursor: pointer;
  background: none;
  border: none;
}

.hamburger span {
  display: block;
  position: absolute;
  height: 3px; width: 100%;
  background: #333;
  border-radius: 2px;
  left: 0;
  transition: all 0.3s ease;
}

.hamburger span:nth-child(1) { top: 0; }
.hamburger span:nth-child(2) { top: 12px; }
.hamburger span:nth-child(3) { top: 24px; }

.hamburger.is-open span:nth-child(1) {
  top: 12px; transform: rotate(45deg);
}
.hamburger.is-open span:nth-child(2) { opacity: 0; }
.hamburger.is-open span:nth-child(3) {
  top: 12px; transform: rotate(-45deg);
}`,
      js: `document.querySelector('.hamburger')
  .addEventListener('click', function() {
    this.classList.toggle('is-open');
  });`
    },
    init: (el) => {
      const btn = el.querySelector('#hamburger-btn');
      if (btn) btn.addEventListener('click', () => btn.classList.toggle('is-open'));
    }
  },
  {
    id: 'accordion', trigger: 'click',
    title: 'アコーディオン',
    tags: ['UI部品', 'インタラクション', 'アニメーション'],
    prompt: 'クリックで中身がスムーズに開閉するアコーディオンUIを作って。矢印も回転するようにして',
    html: '<div class="fx-accordion" id="accordion-el"><div class="fx-accordion-header">開閉する<span class="arrow">▼</span></div><div class="fx-accordion-body"><div class="fx-accordion-body-inner">アコーディオンの中身です。クリックで開閉します。</div></div></div>',
    code: {
      html: `<div class="accordion">
  <div class="accordion-header">
    開閉する <span class="arrow">▼</span>
  </div>
  <div class="accordion-body">
    <div class="accordion-body-inner">
      アコーディオンの中身です。
    </div>
  </div>
</div>`,
      css: `.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

.accordion-header .arrow {
  transition: transform 0.3s;
}

.accordion.is-open .accordion-header {
  border-radius: 8px 8px 0 0;
}

.accordion.is-open .arrow {
  transform: rotate(180deg);
}

.accordion-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  border: 1px solid #ddd;
  border-top: none;
  border-radius: 0 0 8px 8px;
}

.accordion.is-open .accordion-body {
  max-height: 200px;
}

.accordion-body-inner {
  padding: 12px 16px;
  font-size: 0.85rem;
}`,
      js: `document.querySelector('.accordion-header')
  .addEventListener('click', function() {
    this.closest('.accordion').classList.toggle('is-open');
  });`
    },
    init: (el) => {
      const header = el.querySelector('.fx-accordion-header');
      if (header) header.addEventListener('click', () => {
        header.closest('.fx-accordion').classList.toggle('is-open');
      });
    }
  },

  // ===== 追加エフェクト v3 =====

  // --- 文字が動く ---
  {
    id: 'letter-space', trigger: 'auto', sub: 'move',
    title: '文字間が広がる',
    tags: ['テキスト', 'アニメーション'],
    prompt: 'テキストの文字間隔がゆっくり広がって戻るアニメーションを作って',
    html: '<span class="fx-letter-space">SPACING</span>',
    code: {
      html: '<span class="letter-space">SPACING</span>',
      css: `.letter-space {
  font-size: 1.8rem;
  font-weight: 700;
  animation: letter-space 3s ease-in-out infinite;
}

@keyframes letter-space {
  0%, 100% { letter-spacing: 0; }
  50% { letter-spacing: 12px; }
}`
    }
  },

  // --- 枠系 ---
  {
    id: 'neon-btn', trigger: 'auto', sub: 'border',
    title: 'ネオンボタン（緑）',
    tags: ['ボタン', '光', 'アニメーション'],
    prompt: '暗い背景に緑色のネオンサイン風に光るボタンを作って。枠線とテキストが光って',
    html: '<div class="fx-neon-btn-area"><button class="fx-neon-btn">NEON</button></div>',
    code: {
      html: '<button class="neon-btn">NEON</button>',
      css: `.neon-btn {
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 700;
  color: #0f0;
  background: transparent;
  border: 2px solid #0f0;
  border-radius: 8px;
  cursor: pointer;
  text-shadow: 0 0 5px #0f0;
  animation: neon-btn-glow 2s ease-in-out infinite alternate;
}

@keyframes neon-btn-glow {
  0% { box-shadow: 0 0 5px #0f0, inset 0 0 5px rgba(0,255,0,0.1); }
  100% { box-shadow: 0 0 15px #0f0, 0 0 30px #0f0, inset 0 0 10px rgba(0,255,0,0.15); }
}`
    }
  },

  // --- その他 ---
  {
    id: 'typing-dots', trigger: 'auto', sub: 'other',
    title: '入力中ドット（チャット）',
    tags: ['UI部品', 'アニメーション'],
    prompt: 'チャットアプリの「入力中...」を表す3つのドットが順番に跳ねるインジケーターを作って',
    html: '<div class="fx-typing-dots"><span></span><span></span><span></span></div>',
    code: {
      html: `<div class="typing-dots">
  <span></span><span></span><span></span>
</div>`,
      css: `.typing-dots {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 12px 18px;
  background: #e8e8ed;
  border-radius: 18px;
  width: fit-content;
}

.typing-dots span {
  width: 8px; height: 8px;
  background: #999;
  border-radius: 50%;
  animation: typing-dot 1.4s ease-in-out infinite;
}

.typing-dots span:nth-child(2) { animation-delay: 0.2s; }
.typing-dots span:nth-child(3) { animation-delay: 0.4s; }

@keyframes typing-dot {
  0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
  30% { transform: translateY(-6px); opacity: 1; }
}`
    }
  },
  {
    id: 'bubbles', trigger: 'auto', sub: 'other',
    title: '浮かぶバブル',
    tags: ['装飾', 'アニメーション'],
    prompt: '下から上にふわふわと泡が浮かんでいくバブルアニメーションを作って。背景装飾として使えるように',
    html: '<div class="fx-bubbles" id="bubbles-el"></div>',
    code: {
      html: '<div class="bubbles"></div>',
      css: `.bubbles {
  position: relative;
  width: 100%; height: 80px;
  overflow: hidden;
  border-radius: 8px;
  background: linear-gradient(to top, #e0f7fa, #fff);
}

.bubbles .bubble {
  position: absolute;
  bottom: -20px;
  border-radius: 50%;
  background: rgba(0,150,255,0.15);
  animation: bubble-rise linear infinite;
}

@keyframes bubble-rise {
  0% { transform: translateY(0) scale(1); opacity: 0.6; }
  100% { transform: translateY(-100px) scale(0.5); opacity: 0; }
}`,
      js: `const container = document.querySelector('.bubbles');
for (let i = 0; i < 8; i++) {
  const b = document.createElement('div');
  b.className = 'bubble';
  const size = 8 + Math.random() * 16;
  b.style.width = b.style.height = size + 'px';
  b.style.left = Math.random() * 100 + '%';
  b.style.animationDuration = 2 + Math.random() * 3 + 's';
  b.style.animationDelay = Math.random() * 3 + 's';
  container.appendChild(b);
}`
    },
    init: (el) => {
      const container = el.querySelector('#bubbles-el');
      if (!container) return;
      for (let i = 0; i < 8; i++) {
        const b = document.createElement('div');
        b.className = 'bubble';
        const size = 8 + Math.random() * 16;
        b.style.width = b.style.height = size + 'px';
        b.style.left = Math.random() * 100 + '%';
        b.style.animationDuration = 2 + Math.random() * 3 + 's';
        b.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(b);
      }
    }
  },
  {
    id: 'circular-progress', trigger: 'auto', sub: 'other',
    title: '円形プログレス',
    tags: ['ローダー', 'アニメーション'],
    prompt: 'SVGで円形のプログレスバーを作って。円が描かれていくアニメーション付きで',
    html: '<div class="fx-circular-progress"><svg width="64" height="64"><circle class="track" cx="32" cy="32" r="26"/><circle class="fill-circle" cx="32" cy="32" r="26"/></svg><span class="progress-text">80%</span></div>',
    code: {
      html: `<div class="circular-progress">
  <svg width="64" height="64">
    <circle class="track" cx="32" cy="32" r="26"/>
    <circle class="fill" cx="32" cy="32" r="26"/>
  </svg>
  <span class="progress-text">80%</span>
</div>`,
      css: `.circular-progress {
  position: relative;
  width: 64px; height: 64px;
}

.circular-progress svg { transform: rotate(-90deg); }

.circular-progress circle {
  fill: none;
  stroke-width: 5;
  stroke-linecap: round;
}

.track { stroke: #ddd; }

.fill {
  stroke: #0071e3;
  stroke-dasharray: 164;
  stroke-dashoffset: 164;
  animation: circular-fill 2s ease-in-out infinite;
}

.progress-text {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
}

@keyframes circular-fill {
  0% { stroke-dashoffset: 164; }
  50% { stroke-dashoffset: 33; }
  100% { stroke-dashoffset: 164; }
}`
    }
  },
  {
    id: 'scroll-progress', trigger: 'auto', sub: 'other',
    title: 'スクロールプログレスバー',
    tags: ['UI部品', 'アニメーション'],
    prompt: 'ページ上部にスクロール量に応じて伸びるプログレスバーを作って。スクロールの進捗が分かるように',
    html: '<div class="fx-scroll-progress-demo"><div class="fx-scroll-progress-bar"></div><div class="fx-scroll-progress-label">↑ ページ上部に固定して使う</div></div>',
    code: {
      html: '<div class="scroll-progress-bar" id="scrollBar"></div>',
      css: `.scroll-progress-bar {
  position: fixed;
  top: 0; left: 0;
  height: 4px;
  background: #0071e3;
  z-index: 9999;
  transition: width 0.1s;
}`,
      js: `window.addEventListener('scroll', () => {
  const bar = document.getElementById('scrollBar');
  const max = document.body.scrollHeight - window.innerHeight;
  const pct = (window.scrollY / max) * 100;
  bar.style.width = pct + '%';
});`
    }
  },

  // --- ホバー ---
  {
    id: 'reveal', trigger: 'hover',
    title: 'ホバーで中身が現れる',
    tags: ['カード', 'ホバー', 'アニメーション'],
    prompt: 'カードにホバーすると表面がフェードアウトして下に隠れていた中身が現れるリビールエフェクトを作って',
    html: '<div class="fx-reveal-wrap"><div class="fx-reveal-bg">隠れてたよ！</div><div class="fx-reveal-overlay">ホバーしてね</div></div>',
    code: {
      html: `<div class="reveal-wrap">
  <div class="reveal-bg">隠れてたよ！</div>
  <div class="reveal-overlay">ホバーしてね</div>
</div>`,
      css: `.reveal-wrap {
  position: relative;
  width: 200px; height: 80px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
}

.reveal-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
}

.reveal-overlay {
  position: absolute;
  inset: 0;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  transition: opacity 0.4s, transform 0.4s;
}

.reveal-wrap:hover .reveal-overlay {
  opacity: 0;
  transform: scale(1.1);
}`
    }
  },
  {
    id: 'slide-text-btn', trigger: 'hover',
    title: 'ホバーで文字が入れ替わるボタン',
    tags: ['ボタン', 'ホバー', 'アニメーション'],
    prompt: 'ボタンにホバーすると文字が下からスライドして別の文字に入れ替わるエフェクトを作って',
    html: '<button class="fx-slide-text-btn"><span class="text-default">送信</span><span class="text-hover">Submit →</span></button>',
    code: {
      html: `<button class="slide-text-btn">
  <span class="text-default">送信</span>
  <span class="text-hover">Submit →</span>
</button>`,
      css: `.slide-text-btn {
  position: relative;
  padding: 12px 40px;
  font-size: 1rem;
  font-weight: 600;
  background: #0071e3;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
}

.text-default, .text-hover {
  display: block;
  transition: transform 0.3s ease;
}

.text-hover {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(100%);
}

.slide-text-btn:hover .text-default {
  transform: translateY(-100%);
}

.slide-text-btn:hover .text-hover {
  transform: translateY(0);
}`
    }
  },

  // --- クリック ---
  {
    id: 'card-flip', trigger: 'click',
    title: 'カードフリップ（表裏）',
    tags: ['カード', 'インタラクション', '3D'],
    prompt: 'クリックでカードが裏返って裏面が見えるフリップアニメーションを作って。3Dで回転するように',
    html: '<div class="fx-card-flip" id="card-flip-el"><div class="fx-card-flip-inner"><div class="fx-card-flip-front">表面 (Click!)</div><div class="fx-card-flip-back">裏面！</div></div></div>',
    code: {
      html: `<div class="card-flip">
  <div class="card-flip-inner">
    <div class="card-flip-front">表面</div>
    <div class="card-flip-back">裏面</div>
  </div>
</div>`,
      css: `.card-flip {
  width: 180px; height: 100px;
  perspective: 600px;
  cursor: pointer;
}

.card-flip-inner {
  position: relative;
  width: 100%; height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.card-flip.is-flipped .card-flip-inner {
  transform: rotateY(180deg);
}

.card-flip-front, .card-flip-back {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-weight: 600;
  backface-visibility: hidden;
}

.card-flip-front { background: #0071e3; color: #fff; }
.card-flip-back {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #fff;
  transform: rotateY(180deg);
}`,
      js: `document.querySelector('.card-flip')
  .addEventListener('click', function() {
    this.classList.toggle('is-flipped');
  });`
    },
    init: (el) => {
      const card = el.querySelector('#card-flip-el');
      if (card) card.addEventListener('click', () => card.classList.toggle('is-flipped'));
    }
  },
  {
    id: 'checkbox', trigger: 'click',
    title: 'カスタムチェックボックス',
    tags: ['UI部品', 'インタラクション'],
    prompt: 'CSSだけでチェックマークがアニメーション付きで表示されるカスタムチェックボックスを作って',
    html: '<label style="cursor:pointer;display:flex;align-items:center;gap:10px;font-weight:600"><input type="checkbox" class="fx-checkbox"> チェックしてね</label>',
    code: {
      html: '<input type="checkbox" class="custom-checkbox">',
      css: `.custom-checkbox {
  appearance: none;
  -webkit-appearance: none;
  width: 24px; height: 24px;
  border: 2px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  transition: background 0.2s, border-color 0.2s;
}

.custom-checkbox:checked {
  background: #0071e3;
  border-color: #0071e3;
}

.custom-checkbox::after {
  content: '';
  position: absolute;
  left: 7px; top: 3px;
  width: 6px; height: 11px;
  border: solid #fff;
  border-width: 0 2.5px 2.5px 0;
  transform: rotate(45deg) scale(0);
  transition: transform 0.2s ease;
}

.custom-checkbox:checked::after {
  transform: rotate(45deg) scale(1);
}`
    }
  },

  // ===== 追加エフェクト v4 =====

  // --- 文字が動く ---
  {
    id: 'pendulum', trigger: 'auto', sub: 'move',
    title: '振り子スイング',
    tags: ['テキスト', 'アニメーション'],
    prompt: 'テキストが振り子のように左右にゆらゆら揺れるアニメーションを作って。上端を軸にして',
    html: '<span class="fx-pendulum">⏳ Tick Tock</span>',
    code: {
      html: '<span class="pendulum">Tick Tock</span>',
      css: `.pendulum {
  display: inline-block;
  font-size: 2rem;
  font-weight: 700;
  transform-origin: top center;
  animation: pendulum 2s ease-in-out infinite;
}

@keyframes pendulum {
  0%, 100% { transform: rotate(15deg); }
  50% { transform: rotate(-15deg); }
}`
    }
  },
  {
    id: 'letter-space-v', trigger: 'auto', sub: 'move',
    title: '文字間が広がる（縦グラデ）',
    tags: ['テキスト', 'アニメーション'],
    prompt: 'テキストに縦方向に流れるグラデーションをかけて。虹色が上から下に流れ続けるように',
    html: '<span class="fx-gradient-v">VERTICAL</span>',
    code: {
      html: '<span class="gradient-v">VERTICAL</span>',
      css: `.gradient-v {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(0deg, #ff6b6b, #ffd93d, #6bff6b, #6bb5ff, #ff6b6b);
  background-size: 100% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-v 3s linear infinite;
}

@keyframes gradient-v {
  to { background-position: 0 300%; }
}`
    }
  },

  // --- 色が変わる ---
  {
    id: 'bg-clip-text', trigger: 'auto', sub: 'color',
    title: 'グラデ流れテキスト（多色）',
    tags: ['テキスト', 'グラデーション', 'アニメーション'],
    prompt: '4色のグラデーションがテキストの上を斜めに流れ続けるアニメーションを作って',
    html: '<span class="fx-bg-clip-text">VIVID</span>',
    code: {
      html: '<span class="bg-clip-text">VIVID</span>',
      css: `.bg-clip-text {
  font-size: 2.5rem;
  font-weight: 900;
  background: linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: bg-shift 4s ease infinite;
}

@keyframes bg-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`
    }
  },

  // --- その他の文字系 ---
  {
    id: 'type-delete', trigger: 'auto', sub: 'text-other',
    title: 'タイプ＆デリート',
    tags: ['テキスト', 'アニメーション', 'JS'],
    prompt: 'テキストが1文字ずつ打たれて、全部表示されたら1文字ずつ消えて、別の単語をまた打ち始めるタイプライターアニメーションを作って',
    html: '<span class="fx-type-delete" id="type-delete-el"></span>',
    code: {
      html: '<span class="type-delete" id="typeEl"></span>',
      css: `.type-delete {
  font-family: monospace;
  font-size: 1.5rem;
  font-weight: 600;
  border-right: 2px solid #333;
  animation: blink-caret 0.7s step-end infinite;
}

@keyframes blink-caret {
  50% { border-color: transparent; }
}`,
      js: `const words = ['Developer', 'Designer', 'Creator'];
const el = document.getElementById('typeEl');
let wordIdx = 0, charIdx = 0, deleting = false;

function tick() {
  const word = words[wordIdx];
  el.textContent = word.substring(0, charIdx);

  if (!deleting) {
    charIdx++;
    if (charIdx > word.length) {
      deleting = true;
      return setTimeout(tick, 1500);
    }
  } else {
    charIdx--;
    if (charIdx === 0) {
      deleting = false;
      wordIdx = (wordIdx + 1) % words.length;
    }
  }
  setTimeout(tick, deleting ? 50 : 100);
}
tick();`
    },
    init: (el) => {
      const span = el.querySelector('#type-delete-el');
      if (!span) return;
      const words = ['Developer', 'Designer', 'Creator'];
      let wordIdx = 0, charIdx = 0, deleting = false;
      function tick() {
        const word = words[wordIdx];
        span.textContent = word.substring(0, charIdx);
        if (!deleting) {
          charIdx++;
          if (charIdx > word.length) { deleting = true; return setTimeout(tick, 1500); }
        } else {
          charIdx--;
          if (charIdx === 0) { deleting = false; wordIdx = (wordIdx + 1) % words.length; }
        }
        setTimeout(tick, deleting ? 50 : 100);
      }
      tick();
    }
  },
  {
    id: 'reflect', trigger: 'auto', sub: 'text-other',
    title: '反射テキスト',
    tags: ['テキスト', 'デザイン'],
    prompt: 'テキストの下に鏡に映ったような反射（リフレクション）を付けて。反射は薄くぼかして',
    html: '<span class="fx-reflect" data-text="REFLECT">REFLECT</span>',
    code: {
      html: '<span class="reflect" data-text="REFLECT">REFLECT</span>',
      css: `.reflect {
  font-size: 2rem;
  font-weight: 800;
  position: relative;
  display: inline-block;
}

.reflect::after {
  content: attr(data-text);
  position: absolute;
  left: 0; top: 100%;
  width: 100%;
  transform: scaleY(-1);
  background: linear-gradient(to bottom, rgba(0,0,0,0.3), transparent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0.3;
  filter: blur(1px);
}`
    }
  },

  // --- その他 ---
  {
    id: 'orbit', trigger: 'auto', sub: 'other',
    title: '軌道アニメーション',
    tags: ['図形', 'アニメーション'],
    prompt: '中心の丸の周りを小さな丸が周回する軌道アニメーションを作って。惑星の公転のように',
    html: '<div class="fx-orbit"><div class="fx-orbit-center"></div><div class="fx-orbit-dot"></div></div>',
    code: {
      html: `<div class="orbit">
  <div class="orbit-center"></div>
  <div class="orbit-dot"></div>
</div>`,
      css: `.orbit {
  position: relative;
  width: 80px; height: 80px;
}

.orbit-center {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 16px; height: 16px;
  background: #0071e3;
  border-radius: 50%;
}

.orbit-dot {
  position: absolute;
  top: 50%; left: 50%;
  width: 80px; height: 80px;
  margin: -40px 0 0 -40px;
  animation: orbit 2s linear infinite;
}

.orbit-dot::before {
  content: '';
  position: absolute;
  top: 0; left: 50%;
  transform: translateX(-50%);
  width: 10px; height: 10px;
  background: #764ba2;
  border-radius: 50%;
}

@keyframes orbit {
  to { transform: rotate(360deg); }
}`
    }
  },
  {
    id: 'snow', trigger: 'auto', sub: 'other',
    title: '雪が降る',
    tags: ['装飾', 'アニメーション'],
    prompt: '画面に雪がふわふわ降ってくるアニメーションを作って。背景装飾として使えるように',
    html: '<div class="fx-snow" id="snow-el"></div>',
    code: {
      html: '<div class="snow-container"></div>',
      css: `.snow-container {
  position: relative;
  width: 100%; height: 80px;
  overflow: hidden;
  background: linear-gradient(to bottom, #1a1a2e, #16213e);
}

.flake {
  position: absolute;
  top: -10px;
  color: #fff;
  font-size: 0.8rem;
  opacity: 0.8;
  animation: snow-fall linear infinite;
}

@keyframes snow-fall {
  to { transform: translateY(90px) rotate(360deg); }
}`,
      js: `const c = document.querySelector('.snow-container');
for (let i = 0; i < 15; i++) {
  const f = document.createElement('span');
  f.className = 'flake';
  f.textContent = '❄';
  f.style.left = Math.random() * 100 + '%';
  f.style.fontSize = 0.5 + Math.random() * 0.8 + 'rem';
  f.style.animationDuration = 2 + Math.random() * 4 + 's';
  f.style.animationDelay = Math.random() * 4 + 's';
  c.appendChild(f);
}`
    },
    init: (el) => {
      const c = el.querySelector('#snow-el');
      if (!c) return;
      for (let i = 0; i < 15; i++) {
        const f = document.createElement('span');
        f.className = 'flake';
        f.textContent = '❄';
        f.style.left = Math.random() * 100 + '%';
        f.style.fontSize = 0.5 + Math.random() * 0.8 + 'rem';
        f.style.animationDuration = 2 + Math.random() * 4 + 's';
        f.style.animationDelay = Math.random() * 4 + 's';
        c.appendChild(f);
      }
    }
  },

  // --- ホバー ---
  {
    id: 'img-zoom', trigger: 'hover',
    title: 'ホバーで画像ズーム',
    tags: ['カード', 'ホバー', 'アニメーション'],
    prompt: '画像にホバーするとじわっとズームインするエフェクトを作って。はみ出さないように親要素はoverflow:hiddenで',
    html: '<div class="fx-img-zoom"><div class="fx-img-zoom-inner">Zoom In</div></div>',
    code: {
      html: `<div class="img-zoom">
  <img src="image.jpg" alt="">
</div>`,
      css: `.img-zoom {
  width: 200px; height: 100px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
}

.img-zoom img {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.img-zoom:hover img {
  transform: scale(1.15);
}`
    }
  },
  {
    id: 'push-btn', trigger: 'hover',
    title: '3D押しボタン',
    tags: ['ボタン', 'ホバー', '3D'],
    prompt: 'ボタンの下に影をつけて立体的にして、ホバー/クリックで押し込まれるように沈むエフェクトを作って',
    html: '<button class="fx-push-btn">Push me</button>',
    code: {
      html: '<button class="push-btn">Push me</button>',
      css: `.push-btn {
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 600;
  background: #0071e3;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 0 #004fa3;
  transition: all 0.1s;
}

.push-btn:hover {
  transform: translateY(2px);
  box-shadow: 0 2px 0 #004fa3;
}

.push-btn:active {
  transform: translateY(4px);
  box-shadow: 0 0 0 #004fa3;
}`
    }
  },
  {
    id: 'dropdown', trigger: 'hover',
    title: 'ドロップダウンメニュー',
    tags: ['UI部品', 'ホバー', 'アニメーション'],
    prompt: 'ホバーでふわっと表示されるドロップダウンメニューを作って。CSS transitionで出現するように',
    html: '<div class="fx-dropdown"><button class="fx-dropdown-btn">メニュー ▾</button><div class="fx-dropdown-menu"><div class="fx-dropdown-item">プロフィール</div><div class="fx-dropdown-item">設定</div><div class="fx-dropdown-item">ログアウト</div></div></div>',
    code: {
      html: `<div class="dropdown">
  <button class="dropdown-btn">メニュー ▾</button>
  <div class="dropdown-menu">
    <div class="dropdown-item">プロフィール</div>
    <div class="dropdown-item">設定</div>
    <div class="dropdown-item">ログアウト</div>
  </div>
</div>`,
      css: `.dropdown { position: relative; display: inline-block; }

.dropdown-btn {
  padding: 10px 20px;
  font-weight: 600;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  min-width: 150px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  opacity: 0;
  transform: translateY(-8px);
  pointer-events: none;
  transition: all 0.2s;
}

.dropdown:hover .dropdown-menu {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.dropdown-item {
  padding: 8px 14px;
  font-size: 0.82rem;
  cursor: pointer;
  transition: background 0.15s;
}

.dropdown-item:hover { background: #f5f5f5; }`
    }
  },

  // --- クリック ---
  {
    id: 'loading-btn', trigger: 'click',
    title: 'ローディングボタン',
    tags: ['ボタン', 'インタラクション', 'アニメーション'],
    prompt: 'ボタンをクリックするとスピナーが表示されてローディング中になり、完了したら「Done!」に変わるボタンを作って',
    html: '<button class="fx-loading-btn" id="loading-btn-el"><span class="btn-spinner"></span><span class="btn-label">送信する</span></button>',
    code: {
      html: `<button class="loading-btn" id="btn">
  <span class="btn-spinner"></span>
  <span class="btn-label">送信する</span>
</button>`,
      css: `.loading-btn {
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 600;
  background: #0071e3;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  min-width: 140px;
  position: relative;
  transition: all 0.3s;
}

.loading-btn.is-loading {
  pointer-events: none;
  padding-left: 42px;
  opacity: 0.85;
}

.btn-spinner {
  display: none;
  position: absolute;
  left: 14px; top: 50%;
  transform: translateY(-50%);
  width: 18px; height: 18px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

.loading-btn.is-loading .btn-spinner { display: block; }
.loading-btn.is-done { background: #34c759; }`,
      js: `const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  btn.classList.add('is-loading');
  btn.querySelector('.btn-label').textContent = '送信中...';
  setTimeout(() => {
    btn.classList.remove('is-loading');
    btn.classList.add('is-done');
    btn.querySelector('.btn-label').textContent = 'Done!';
    setTimeout(() => {
      btn.classList.remove('is-done');
      btn.querySelector('.btn-label').textContent = '送信する';
    }, 1500);
  }, 2000);
});`
    },
    init: (el) => {
      const btn = el.querySelector('#loading-btn-el');
      if (!btn) return;
      btn.addEventListener('click', () => {
        if (btn.classList.contains('is-loading')) return;
        btn.classList.add('is-loading');
        btn.querySelector('.btn-label').textContent = '送信中...';
        setTimeout(() => {
          btn.classList.remove('is-loading');
          btn.classList.add('is-done');
          btn.querySelector('.btn-label').textContent = 'Done!';
          setTimeout(() => {
            btn.classList.remove('is-done');
            btn.querySelector('.btn-label').textContent = '送信する';
          }, 1500);
        }, 2000);
      });
    }
  },
  {
    id: 'like-btn', trigger: 'click',
    title: 'いいねボタン',
    tags: ['ボタン', 'インタラクション', 'アニメーション'],
    prompt: 'ハートをクリックするとポンと弾んで赤くなるいいねボタンを作って。もう一度押すと解除される',
    html: '<button class="fx-like-btn" id="like-btn-el">♥</button>',
    code: {
      html: '<button class="like-btn">♥</button>',
      css: `.like-btn {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #ccc;
}

.like-btn.is-liked {
  color: #ff3b30;
  animation: like-pop 0.4s ease;
}

@keyframes like-pop {
  25% { transform: scale(1.4); }
  50% { transform: scale(0.9); }
  100% { transform: scale(1); }
}`,
      js: `document.querySelector('.like-btn')
  .addEventListener('click', function() {
    this.classList.toggle('is-liked');
  });`
    },
    init: (el) => {
      const btn = el.querySelector('#like-btn-el');
      if (btn) btn.addEventListener('click', () => btn.classList.toggle('is-liked'));
    }
  },
  {
    id: 'star-rating', trigger: 'click',
    title: '星レーティング',
    tags: ['UI部品', 'インタラクション'],
    prompt: 'CSSだけで星をクリックして評価できるスターレーティングUIを作って。クリックした星まで黄色くなるように',
    html: '<div class="fx-star-rating"><input type="radio" name="fx-star" id="fxs5" value="5"><label for="fxs5">★</label><input type="radio" name="fx-star" id="fxs4" value="4"><label for="fxs4">★</label><input type="radio" name="fx-star" id="fxs3" value="3" checked><label for="fxs3">★</label><input type="radio" name="fx-star" id="fxs2" value="2"><label for="fxs2">★</label><input type="radio" name="fx-star" id="fxs1" value="1"><label for="fxs1">★</label></div>',
    code: {
      html: `<div class="star-rating">
  <input type="radio" name="star" id="s5" value="5"><label for="s5">★</label>
  <input type="radio" name="star" id="s4" value="4"><label for="s4">★</label>
  <input type="radio" name="star" id="s3" value="3"><label for="s3">★</label>
  <input type="radio" name="star" id="s2" value="2"><label for="s2">★</label>
  <input type="radio" name="star" id="s1" value="1"><label for="s1">★</label>
</div>`,
      css: `.star-rating {
  display: flex;
  flex-direction: row-reverse;
  gap: 4px;
  font-size: 1.5rem;
}

.star-rating input { display: none; }

.star-rating label {
  cursor: pointer;
  color: #ddd;
  transition: color 0.15s, transform 0.15s;
}

.star-rating label:hover,
.star-rating label:hover ~ label,
.star-rating input:checked ~ label {
  color: #f5a623;
}

.star-rating label:hover {
  transform: scale(1.2);
}`
    }
  },
  {
    id: 'tabs', trigger: 'click',
    title: 'タブ切り替え',
    tags: ['UI部品', 'インタラクション'],
    prompt: 'CSSだけで切り替えられるタブUIを作って。クリックで内容がフェードインして切り替わるように',
    html: '<div class="fx-tabs"><input type="radio" name="fx-tab" id="tab1" checked><label for="tab1">Tab 1</label><input type="radio" name="fx-tab" id="tab2"><label for="tab2">Tab 2</label><input type="radio" name="fx-tab" id="tab3"><label for="tab3">Tab 3</label><div class="fx-tab-labels"></div><div class="fx-tab-panels"><div class="fx-tab-panel panel-1">タブ1の内容です。</div><div class="fx-tab-panel panel-2">タブ2の内容です。</div><div class="fx-tab-panel panel-3">タブ3の内容です。</div></div></div>',
    code: {
      html: `<div class="tabs">
  <input type="radio" name="tab" id="t1" checked>
  <label for="t1">Tab 1</label>
  <input type="radio" name="tab" id="t2">
  <label for="t2">Tab 2</label>
  <input type="radio" name="tab" id="t3">
  <label for="t3">Tab 3</label>
  <div class="tab-panels">
    <div class="panel panel-1">内容1</div>
    <div class="panel panel-2">内容2</div>
    <div class="panel panel-3">内容3</div>
  </div>
</div>`,
      css: `.tabs input { display: none; }

.tabs label {
  padding: 8px 16px;
  font-weight: 600;
  cursor: pointer;
  color: #999;
  border-bottom: 2px solid transparent;
}

.tabs input:checked + label {
  color: #0071e3;
  border-bottom-color: #0071e3;
}

.panel { display: none; padding: 12px; }

.tabs #t1:checked ~ .tab-panels .panel-1,
.tabs #t2:checked ~ .tab-panels .panel-2,
.tabs #t3:checked ~ .tab-panels .panel-3 {
  display: block;
  animation: tab-fade 0.3s ease;
}

@keyframes tab-fade {
  from { opacity: 0; }
  to { opacity: 1; }
}`
    }
  },

  // ===== 追加エフェクト v5 =====

  // --- 文字が動く ---
  {
    id: 'slide-in', trigger: 'auto', sub: 'move',
    title: 'スライドイン',
    tags: ['テキスト', 'アニメーション'],
    prompt: 'テキストが左からスライドしながらフェードインして、右にスライドしながらフェードアウトするアニメーションを作って',
    html: '<span class="fx-slide-in">→ Slide In ←</span>',
    code: {
      html: '<span class="slide-in">Slide In</span>',
      css: `.slide-in {
  font-size: 1.5rem;
  font-weight: 700;
  animation: slide-in 2s ease-in-out infinite;
}

@keyframes slide-in {
  0% { transform: translateX(-40px); opacity: 0; }
  20%, 80% { transform: translateX(0); opacity: 1; }
  100% { transform: translateX(40px); opacity: 0; }
}`
    }
  },
  {
    id: 'split', trigger: 'auto', sub: 'move',
    title: 'テキスト分裂',
    tags: ['テキスト', 'アニメーション'],
    prompt: '文字が1文字ずつばらけて広がって、また元に戻るアニメーションを作って',
    html: '<span class="fx-split" id="split-el"></span>',
    code: {
      html: '<span class="split-text">SPLIT</span>',
      css: `.split-text span {
  display: inline-block;
  font-size: 2rem;
  font-weight: 700;
  animation: split 3s ease-in-out infinite;
}

@keyframes split {
  0%, 100% { letter-spacing: 0; opacity: 1; transform: translateY(0); }
  50% { letter-spacing: 8px; opacity: 0.7; transform: translateY(-4px); }
}`,
      js: `document.querySelector('.split-text').innerHTML =
  'SPLIT'.split('').map((c, i) =>
    \`<span style="animation-delay:\${i * 0.1}s">\${c}</span>\`
  ).join('');`
    },
    init: (el) => {
      const t = el.querySelector('#split-el');
      if (t) t.innerHTML = 'SPLIT'.split('').map((c, i) =>
        `<span style="animation-delay:${i * 0.1}s">${c}</span>`
      ).join('');
    }
  },

  // --- その他の文字系 ---
  {
    id: 'long-shadow', trigger: 'auto', sub: 'text-other',
    title: 'ロングシャドウ',
    tags: ['テキスト', 'デザイン'],
    prompt: 'テキストにフラットデザイン風のロングシャドウ（長い影）を付けて。色付き背景の上に白文字で',
    html: '<div class="fx-long-shadow-area"><span class="fx-long-shadow">LONG</span></div>',
    code: {
      html: '<span class="long-shadow">LONG</span>',
      css: `.long-shadow {
  font-size: 2.5rem;
  font-weight: 900;
  color: #fff;
  text-shadow:
    1px 1px 0 rgba(0,0,0,0.1),
    2px 2px 0 rgba(0,0,0,0.1),
    3px 3px 0 rgba(0,0,0,0.1),
    4px 4px 0 rgba(0,0,0,0.1),
    5px 5px 0 rgba(0,0,0,0.1),
    6px 6px 0 rgba(0,0,0,0.1),
    7px 7px 0 rgba(0,0,0,0.08),
    8px 8px 0 rgba(0,0,0,0.06),
    9px 9px 0 rgba(0,0,0,0.04),
    10px 10px 0 rgba(0,0,0,0.02);
}`
    }
  },

  // --- 枠系 ---
  {
    id: 'marching-ants', trigger: 'auto', sub: 'border',
    title: '行進する点線（マーチングアンツ）',
    tags: ['枠', 'アニメーション'],
    prompt: '要素の枠線が点線で動く（マーチングアンツ/行進するアリ）エフェクトを作って。選択領域のように見えるやつ',
    html: '<div class="fx-marching-ants">Marching Ants</div>',
    code: {
      html: '<div class="marching-ants">Marching Ants</div>',
      css: `.marching-ants {
  padding: 20px 32px;
  font-weight: 600;
  background-image:
    repeating-linear-gradient(0deg, #0071e3, #0071e3 8px, transparent 8px, transparent 16px),
    repeating-linear-gradient(90deg, #0071e3, #0071e3 8px, transparent 8px, transparent 16px),
    repeating-linear-gradient(180deg, #0071e3, #0071e3 8px, transparent 8px, transparent 16px),
    repeating-linear-gradient(270deg, #0071e3, #0071e3 8px, transparent 8px, transparent 16px);
  background-size: 2px 100%, 100% 2px, 2px 100%, 100% 2px;
  background-position: 0 0, 0 0, 100% 0, 0 100%;
  background-repeat: no-repeat;
  animation: march 1s linear infinite;
}

@keyframes march {
  to { background-position: 0 -16px, -16px 0, 100% 16px, 16px 100%; }
}`
    }
  },
  {
    id: 'stripes', trigger: 'auto', sub: 'border',
    title: '動くストライプ背景',
    tags: ['背景', 'アニメーション'],
    prompt: '斜めストライプの背景がスクロールし続けるアニメーションを作って。工事中バリケードのような感じで',
    html: '<div class="fx-stripes">LOADING...</div>',
    code: {
      html: '<div class="stripes">LOADING...</div>',
      css: `.stripes {
  padding: 24px;
  border-radius: 8px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  background: repeating-linear-gradient(
    45deg,
    #3498db, #3498db 10px,
    #2980b9 10px, #2980b9 20px
  );
  background-size: 28px 28px;
  animation: stripes 1s linear infinite;
}

@keyframes stripes {
  to { background-position: 28px 0; }
}`
    }
  },

  // --- その他 ---
  {
    id: 'svg-draw', trigger: 'auto', sub: 'other',
    title: 'SVGパス描画',
    tags: ['装飾', 'アニメーション'],
    prompt: 'SVGの線が一筆書きのように描かれていくアニメーションを作って。stroke-dasharrayとstroke-dashoffsetで',
    html: '<div class="fx-svg-draw"><svg viewBox="0 0 120 60"><path d="M10,50 Q35,5 60,30 T110,10" stroke-linecap="round"/></svg></div>',
    code: {
      html: `<svg class="svg-draw" viewBox="0 0 120 60">
  <path d="M10,50 Q35,5 60,30 T110,10"/>
</svg>`,
      css: `.svg-draw path {
  fill: none;
  stroke: #0071e3;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  animation: draw 3s ease-in-out infinite;
}

@keyframes draw {
  0% { stroke-dashoffset: 300; }
  40%, 60% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -300; }
}`
    }
  },
  {
    id: 'stepper', trigger: 'auto', sub: 'other',
    title: 'ステッパー（進捗ステップ）',
    tags: ['UI部品', 'デザイン'],
    prompt: '手順の進捗を表す丸と線のステッパーUIを作って。完了したステップは色が変わるように',
    html: '<div class="fx-stepper"><div class="fx-step done"><span class="fx-step-circle">✓</span></div><div class="fx-step done"><div class="fx-step-line"></div><span class="fx-step-circle">✓</span></div><div class="fx-step active"><div class="fx-step-line"></div><span class="fx-step-circle">3</span></div><div class="fx-step"><div class="fx-step-line"></div><span class="fx-step-circle">4</span></div></div>',
    code: {
      html: `<div class="stepper">
  <div class="step done"><span class="circle">✓</span></div>
  <div class="step done"><div class="line"></div><span class="circle">✓</span></div>
  <div class="step active"><div class="line"></div><span class="circle">3</span></div>
  <div class="step"><div class="line"></div><span class="circle">4</span></div>
</div>`,
      css: `.stepper { display: flex; align-items: center; }
.step { display: flex; align-items: center; }

.circle {
  width: 28px; height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 700;
  border: 2px solid #ddd;
  color: #999;
}

.step.done .circle {
  background: #0071e3;
  border-color: #0071e3;
  color: #fff;
}

.step.active .circle {
  border-color: #0071e3;
  color: #0071e3;
  box-shadow: 0 0 0 3px rgba(0,113,227,0.15);
}

.line {
  width: 32px; height: 2px;
  background: #ddd;
}

.step.done .line { background: #0071e3; }`
    }
  },
  {
    id: 'radial-pulse', trigger: 'auto', sub: 'other',
    title: '電波パルス',
    tags: ['図形', 'アニメーション'],
    prompt: '丸い点から電波のように円が広がっていくパルスアニメーションを作って。WiFiの電波みたいに',
    html: '<div class="fx-radial-pulse"></div>',
    code: {
      html: '<div class="radial-pulse"></div>',
      css: `.radial-pulse {
  width: 60px; height: 60px;
  border-radius: 50%;
  background: #0071e3;
  position: relative;
}

.radial-pulse::before, .radial-pulse::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid #0071e3;
  animation: radial 2s ease-out infinite;
}

.radial-pulse::after { animation-delay: 1s; }

@keyframes radial {
  0% { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(2.5); opacity: 0; }
}`
    }
  },
  {
    id: 'seamless-marquee', trigger: 'auto', sub: 'other',
    title: '無限ループマーキー',
    tags: ['テキスト', 'アニメーション'],
    prompt: 'テキストが途切れなくスムーズに左にスクロールし続ける無限ループマーキーを作って。同じテキストを2つ並べて繋ぎ目をなくす方法で',
    html: '<div class="fx-seamless-marquee"><div class="fx-seamless-track"><span>React · Vue · Angular · Svelte · Next.js · Nuxt · Astro ·&nbsp;</span><span>React · Vue · Angular · Svelte · Next.js · Nuxt · Astro ·&nbsp;</span></div></div>',
    code: {
      html: `<div class="marquee-wrap">
  <div class="marquee-track">
    <span>React · Vue · Angular · Svelte ·&nbsp;</span>
    <span>React · Vue · Angular · Svelte ·&nbsp;</span>
  </div>
</div>`,
      css: `.marquee-wrap {
  width: 100%;
  overflow: hidden;
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: seamless-scroll 10s linear infinite;
}

.marquee-track span {
  flex-shrink: 0;
  padding: 0 24px;
  font-size: 1.2rem;
  font-weight: 600;
  white-space: nowrap;
}

@keyframes seamless-scroll {
  to { transform: translateX(-50%); }
}`
    }
  },

  // --- ホバー ---
  {
    id: 'icon-btn', trigger: 'hover',
    title: 'ホバーで矢印が出るボタン',
    tags: ['ボタン', 'ホバー', 'アニメーション'],
    prompt: 'ボタンにホバーすると右に矢印→がスライドして現れるエフェクトを作って',
    html: '<button class="fx-icon-btn">詳しく見る<span class="btn-arrow"> →</span></button>',
    code: {
      html: `<button class="icon-btn">
  詳しく見る<span class="btn-arrow"> →</span>
</button>`,
      css: `.icon-btn {
  display: inline-flex;
  align-items: center;
  gap: 0;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  background: #0071e3;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  transition: gap 0.3s;
}

.btn-arrow {
  max-width: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-width 0.3s, opacity 0.3s;
}

.icon-btn:hover { gap: 8px; }

.icon-btn:hover .btn-arrow {
  max-width: 20px;
  opacity: 1;
}`
    }
  },

  // --- クリック ---
  {
    id: 'toast-demo', trigger: 'click',
    title: 'トースト通知',
    tags: ['UI部品', 'インタラクション', 'アニメーション'],
    prompt: 'ボタンを押すと画面下部からトースト通知がスッと現れて、数秒後に消えるエフェクトを作って',
    html: '<button class="fx-fill-btn" id="toast-trigger-btn">通知を出す</button>',
    code: {
      html: '<button id="toastBtn">通知を出す</button>',
      css: `.toast-msg {
  position: fixed;
  bottom: 24px; left: 50%;
  transform: translateX(-50%) translateY(80px);
  padding: 12px 24px;
  background: #333;
  color: #fff;
  border-radius: 8px;
  font-size: 0.85rem;
  opacity: 0;
  transition: all 0.3s;
}

.toast-msg.show {
  transform: translateX(-50%) translateY(0);
  opacity: 1;
}`,
      js: `document.getElementById('toastBtn').addEventListener('click', () => {
  const t = document.createElement('div');
  t.className = 'toast-msg';
  t.textContent = '保存しました！';
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => {
    t.classList.remove('show');
    setTimeout(() => t.remove(), 300);
  }, 2000);
});`
    },
    init: (el) => {
      const btn = el.querySelector('#toast-trigger-btn');
      if (!btn) return;
      btn.addEventListener('click', () => {
        const t = document.createElement('div');
        t.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(80px);padding:12px 24px;background:#333;color:#fff;border-radius:8px;font-size:0.85rem;opacity:0;transition:all 0.3s;z-index:9999';
        t.textContent = '保存しました！';
        document.body.appendChild(t);
        requestAnimationFrame(() => { t.style.transform = 'translateX(-50%) translateY(0)'; t.style.opacity = '1'; });
        setTimeout(() => { t.style.transform = 'translateX(-50%) translateY(80px)'; t.style.opacity = '0'; setTimeout(() => t.remove(), 300); }, 2000);
      });
    }
  },

  // ===== 追加エフェクト v6 =====

  // --- 文字が動く ---
  {
    id: 'bounce-in', trigger: 'auto', sub: 'move',
    title: 'バウンスイン',
    tags: ['テキスト', 'アニメーション'],
    prompt: 'テキストが上から落ちてきてバウンドして止まるアニメーションを作って。着地時に小さく跳ねるように',
    html: '<span class="fx-bounce-in">Drop!</span>',
    code: {
      html: '<span class="bounce-in">Drop!</span>',
      css: `.bounce-in {
  font-size: 2rem;
  font-weight: 700;
  animation: bounce-in 2s ease infinite;
}

@keyframes bounce-in {
  0% { transform: translateY(-40px); opacity: 0; }
  20% { transform: translateY(0); opacity: 1; }
  40% { transform: translateY(-12px); }
  60% { transform: translateY(0); }
  75% { transform: translateY(-4px); }
  85%, 100% { transform: translateY(0); }
}`
    }
  },

  // --- その他の文字系 ---
  {
    id: 'morph-text', trigger: 'auto', sub: 'text-other',
    title: 'モーフィングテキスト',
    tags: ['テキスト', 'アニメーション', 'JS'],
    prompt: '2つの単語がぼやけながら入れ替わるモーフィングテキストアニメーションを作って',
    html: '<span class="fx-blur-in" id="morph-el" style="min-width:100px;display:inline-block;text-align:center">Hello</span>',
    code: {
      html: '<span class="morph-text" id="morphEl">Hello</span>',
      css: `.morph-text {
  font-size: 2rem;
  font-weight: 700;
  display: inline-block;
  transition: filter 0.4s, opacity 0.4s;
}`,
      js: `const words = ['Hello', 'World', 'Morph', 'Text'];
const el = document.getElementById('morphEl');
let idx = 0;
setInterval(() => {
  el.style.filter = 'blur(8px)';
  el.style.opacity = '0.3';
  setTimeout(() => {
    idx = (idx + 1) % words.length;
    el.textContent = words[idx];
    el.style.filter = 'blur(0)';
    el.style.opacity = '1';
  }, 400);
}, 2000);`
    },
    init: (el) => {
      const span = el.querySelector('#morph-el');
      if (!span) return;
      const words = ['Hello', 'World', 'Morph', 'Text'];
      let idx = 0;
      setInterval(() => {
        span.style.filter = 'blur(8px)'; span.style.opacity = '0.3';
        setTimeout(() => { idx = (idx + 1) % words.length; span.textContent = words[idx]; span.style.filter = 'blur(0)'; span.style.opacity = '1'; }, 400);
      }, 2000);
    }
  },

  // --- 枠系 ---
  {
    id: 'ken-burns', trigger: 'auto', sub: 'border',
    title: 'ケンバーンズ（ゆっくりズーム＆パン）',
    tags: ['背景', 'アニメーション'],
    prompt: '背景画像がゆっくりズームしながらパンするケンバーンズエフェクトを作って。ヒーローセクションの背景向け',
    html: '<div class="fx-ken-burns"><div class="fx-ken-burns-inner">Hero Section</div></div>',
    code: {
      html: `<div class="ken-burns">
  <div class="ken-burns-inner">Hero Section</div>
</div>`,
      css: `.ken-burns {
  width: 100%; height: 200px;
  overflow: hidden; border-radius: 8px;
}

.ken-burns-inner {
  width: 100%; height: 100%;
  background: url('hero.jpg') center/cover;
  animation: ken-burns 8s ease-in-out infinite alternate;
}

@keyframes ken-burns {
  0% { transform: scale(1) translate(0, 0); }
  100% { transform: scale(1.2) translate(-3%, -3%); }
}`
    }
  },

  // --- その他 ---
  {
    id: 'avatars', trigger: 'auto', sub: 'other',
    title: '重なるアバター',
    tags: ['UI部品', 'デザイン'],
    prompt: '複数のアバターアイコンが少し重なって並ぶスタックアバターUIを作って。ホバーで少し浮くように',
    html: '<div class="fx-avatars"><div class="fx-avatar fx-avatar-1">A</div><div class="fx-avatar fx-avatar-2">B</div><div class="fx-avatar fx-avatar-3">C</div><div class="fx-avatar fx-avatar-4">D</div><div class="fx-avatar fx-avatar-more">+3</div></div>',
    code: {
      html: `<div class="avatars">
  <div class="avatar" style="background:#667eea">A</div>
  <div class="avatar" style="background:#764ba2">B</div>
  <div class="avatar" style="background:#f093fb">C</div>
  <div class="avatar more">+3</div>
</div>`,
      css: `.avatars { display: flex; }

.avatar {
  width: 40px; height: 40px;
  border-radius: 50%;
  border: 3px solid #fff;
  margin-left: -12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  color: #fff;
  transition: transform 0.2s;
}

.avatar:first-child { margin-left: 0; }
.avatar:hover { transform: translateY(-4px); z-index: 2; }
.avatar.more { background: #e0e0e0; color: #666; }`
    }
  },
  {
    id: 'gooey', trigger: 'auto', sub: 'other',
    title: 'グーイー（ぬるぬる結合）',
    tags: ['図形', 'アニメーション'],
    prompt: '複数の丸がくっついたり離れたりするグーイー（粘性）エフェクトを作って。SVGフィルターで結合感を出して',
    html: '<svg style="position:absolute;width:0;height:0"><filter id="gooey-filter"><feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur"/><feColorMatrix in="blur" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="gooey"/></filter></svg><div class="fx-gooey"><div class="fx-gooey-dot"></div><div class="fx-gooey-dot"></div><div class="fx-gooey-dot"></div></div>',
    code: {
      html: `<svg style="position:absolute;width:0;height:0">
  <filter id="gooey">
    <feGaussianBlur in="SourceGraphic" stdDeviation="6"/>
    <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"/>
  </filter>
</svg>
<div class="gooey">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>`,
      css: `.gooey {
  display: flex;
  filter: url(#gooey);
}

.dot {
  width: 20px; height: 20px;
  background: #0071e3;
  border-radius: 50%;
  animation: gooey-move 2s ease-in-out infinite alternate;
}

.dot:nth-child(2) { animation-delay: 0.3s; }
.dot:nth-child(3) { animation-delay: 0.6s; }

@keyframes gooey-move {
  0% { transform: translateX(0); }
  100% { transform: translateX(16px); }
}`
    }
  },
  {
    id: 'matrix', trigger: 'auto', sub: 'other',
    title: 'マトリックス・レイン',
    tags: ['装飾', 'アニメーション', 'JS'],
    prompt: 'マトリックスの緑の文字が上から降ってくるレインエフェクトを作って。ランダムな文字が列ごとに落ちるように',
    html: '<div class="fx-matrix" id="matrix-el"></div>',
    code: {
      html: '<div class="matrix" id="matrixEl"></div>',
      css: `.matrix {
  width: 100%; height: 80px;
  overflow: hidden;
  border-radius: 8px;
  background: #000;
  position: relative;
}

.matrix .col {
  position: absolute;
  top: -20px;
  font-family: monospace;
  font-size: 0.7rem;
  color: #0f0;
  writing-mode: vertical-rl;
  animation: matrix-fall linear infinite;
}

@keyframes matrix-fall {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(200%); }
}`,
      js: `const el = document.getElementById('matrixEl');
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
for (let i = 0; i < 20; i++) {
  const col = document.createElement('span');
  col.className = 'col';
  col.style.left = (i * 5) + '%';
  col.style.animationDuration = 1.5 + Math.random() * 3 + 's';
  col.style.animationDelay = Math.random() * 3 + 's';
  col.style.opacity = 0.3 + Math.random() * 0.7;
  let text = '';
  for (let j = 0; j < 8; j++) text += chars[Math.floor(Math.random() * chars.length)];
  col.textContent = text;
  el.appendChild(col);
}`
    },
    init: (el) => {
      const container = el.querySelector('#matrix-el');
      if (!container) return;
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      for (let i = 0; i < 20; i++) {
        const col = document.createElement('span');
        col.className = 'col';
        col.style.left = (i * 5) + '%';
        col.style.animationDuration = 1.5 + Math.random() * 3 + 's';
        col.style.animationDelay = Math.random() * 3 + 's';
        col.style.opacity = 0.3 + Math.random() * 0.7;
        let text = '';
        for (let j = 0; j < 8; j++) text += chars[Math.floor(Math.random() * chars.length)];
        col.textContent = text;
        container.appendChild(col);
      }
    }
  },

  // --- ホバー ---
  {
    id: 'center-underline', trigger: 'hover',
    title: '中央から広がる下線',
    tags: ['リンク', 'ホバー', 'アニメーション'],
    prompt: 'リンクにホバーすると中央から左右に下線が広がるアニメーションを作って',
    html: '<a class="fx-center-underline" href="#">Center Underline</a>',
    code: {
      html: '<a class="center-underline" href="#">Center Underline</a>',
      css: `.center-underline {
  font-size: 1.5rem;
  font-weight: 600;
  position: relative;
  text-decoration: none;
  color: #333;
}

.center-underline::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0; height: 2px;
  background: #0071e3;
  transition: all 0.3s ease;
}

.center-underline:hover::after {
  left: 0;
  width: 100%;
}`
    }
  },
  {
    id: 'color-shadow-card', trigger: 'hover',
    title: 'ホバーでカラーシャドウ',
    tags: ['カード', 'ホバー', 'アニメーション'],
    prompt: 'カードにホバーすると色付きの影がふわっと現れて浮くエフェクトを作って。普通のグレーの影じゃなく青紫の色付き影で',
    html: '<div class="fx-color-shadow-card">Color Shadow</div>',
    code: {
      html: '<div class="color-shadow-card">Color Shadow</div>',
      css: `.color-shadow-card {
  padding: 24px 32px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.color-shadow-card:hover {
  transform: translateY(-4px);
  border-color: transparent;
  box-shadow: 0 10px 30px rgba(102,126,234,0.35),
              0 4px 10px rgba(102,126,234,0.2);
}`
    }
  },
  {
    id: 'scramble-hover', trigger: 'hover',
    title: 'ホバーで文字化け',
    tags: ['テキスト', 'ホバー', 'JS'],
    prompt: 'テキストにホバーするとランダムな文字にバラけてから元に戻る文字化けエフェクトを作って',
    html: '<span class="fx-scramble-hover" id="scramble-el">HOVER ME</span>',
    code: {
      html: '<span class="scramble" id="scrambleEl">HOVER ME</span>',
      css: `.scramble {
  font-family: monospace;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
}`,
      js: `const el = document.getElementById('scrambleEl');
const original = el.textContent;
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%';

el.addEventListener('mouseenter', () => {
  let iteration = 0;
  const interval = setInterval(() => {
    el.textContent = original.split('').map((c, i) => {
      if (i < iteration) return original[i];
      return chars[Math.floor(Math.random() * chars.length)];
    }).join('');
    if (iteration >= original.length) clearInterval(interval);
    iteration += 1 / 3;
  }, 30);
});`
    },
    init: (el) => {
      const span = el.querySelector('#scramble-el');
      if (!span) return;
      const original = 'HOVER ME';
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%';
      span.addEventListener('mouseenter', () => {
        let iteration = 0;
        const interval = setInterval(() => {
          span.textContent = original.split('').map((c, i) => {
            if (i < iteration) return original[i];
            return chars[Math.floor(Math.random() * chars.length)];
          }).join('');
          if (iteration >= original.length) clearInterval(interval);
          iteration += 1 / 3;
        }, 30);
      });
    }
  },

  // --- クリック ---
  {
    id: 'confetti', trigger: 'click',
    title: '紙吹雪（コンフェティ）',
    tags: ['装飾', 'インタラクション', 'JS'],
    prompt: 'ボタンをクリックしたら紙吹雪がパーッと飛び散るコンフェティエフェクトを作って',
    html: '<button class="fx-confetti-btn" id="confetti-btn">🎉 Celebrate!</button>',
    code: {
      html: '<button class="confetti-btn" id="confettiBtn">🎉 Celebrate!</button>',
      css: `.confetti-btn {
  padding: 12px 28px;
  font-size: 1rem;
  font-weight: 600;
  background: #0071e3;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
}

.confetti-piece {
  position: absolute;
  width: 8px; height: 8px;
  border-radius: 2px;
  pointer-events: none;
  animation: confetti-fly 1s ease-out forwards;
}

@keyframes confetti-fly {
  0% { transform: translate(0, 0) rotate(0); opacity: 1; }
  100% { opacity: 0; }
}`,
      js: `document.getElementById('confettiBtn').addEventListener('click', function(e) {
  const colors = ['#ff6b6b','#ffd93d','#6bff6b','#6bb5ff','#c96bff','#ff9ff3'];
  for (let i = 0; i < 20; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.left = '50%';
    piece.style.top = '50%';
    const angle = Math.random() * Math.PI * 2;
    const dist = 40 + Math.random() * 60;
    const x = Math.cos(angle) * dist;
    const y = Math.sin(angle) * dist - 30;
    piece.style.setProperty('--x', x + 'px');
    piece.style.setProperty('--y', y + 'px');
    piece.animate([
      { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
      { transform: \`translate(\${x}px, \${y}px) rotate(\${Math.random()*720}deg)\`, opacity: 0 }
    ], { duration: 800 + Math.random() * 400, easing: 'cubic-bezier(0,0.9,0.3,1)' });
    this.appendChild(piece);
    setTimeout(() => piece.remove(), 1200);
  }
});`
    },
    init: (el) => {
      const btn = el.querySelector('#confetti-btn');
      if (!btn) return;
      btn.addEventListener('click', function() {
        const colors = ['#ff6b6b','#ffd93d','#6bff6b','#6bb5ff','#c96bff','#ff9ff3'];
        for (let i = 0; i < 20; i++) {
          const piece = document.createElement('div');
          piece.className = 'confetti-piece';
          piece.style.background = colors[Math.floor(Math.random() * colors.length)];
          piece.style.left = '50%'; piece.style.top = '50%';
          const angle = Math.random() * Math.PI * 2;
          const dist = 40 + Math.random() * 60;
          const x = Math.cos(angle) * dist;
          const y = Math.sin(angle) * dist - 30;
          piece.animate([
            { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
            { transform: `translate(${x}px,${y}px) rotate(${Math.random()*720}deg)`, opacity: 0 }
          ], { duration: 800 + Math.random() * 400, easing: 'cubic-bezier(0,0.9,0.3,1)' });
          this.appendChild(piece);
          setTimeout(() => piece.remove(), 1200);
        }
      });
    }
  },
  {
    id: 'copy-btn', trigger: 'click',
    title: 'コピーボタン',
    tags: ['ボタン', 'インタラクション'],
    prompt: 'コピーボタンをクリックするとアイコンがチェックマークに変わって「Copied!」と表示されるエフェクトを作って',
    html: '<button class="fx-copy-btn" id="copy-btn-el"><span class="copy-icon">📋</span> <span class="copy-label">Copy</span></button>',
    code: {
      html: `<button class="copy-btn" id="copyBtn">
  <span class="icon">📋</span> Copy
</button>`,
      css: `.copy-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  font-weight: 600;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.copy-btn.is-copied {
  border-color: #34c759;
  color: #34c759;
}`,
      js: `document.getElementById('copyBtn').addEventListener('click', function() {
  this.querySelector('.icon').textContent = '✅';
  this.classList.add('is-copied');
  this.lastChild.textContent = ' Copied!';
  setTimeout(() => {
    this.querySelector('.icon').textContent = '📋';
    this.classList.remove('is-copied');
    this.lastChild.textContent = ' Copy';
  }, 2000);
});`
    },
    init: (el) => {
      const btn = el.querySelector('#copy-btn-el');
      if (!btn) return;
      btn.addEventListener('click', function() {
        if (this.classList.contains('is-copied')) return;
        this.querySelector('.copy-icon').textContent = '✅';
        this.querySelector('.copy-label').textContent = 'Copied!';
        this.classList.add('is-copied');
        setTimeout(() => {
          this.querySelector('.copy-icon').textContent = '📋';
          this.querySelector('.copy-label').textContent = 'Copy';
          this.classList.remove('is-copied');
        }, 2000);
      });
    }
  },

  // ===== 追加エフェクト v7 =====

  // --- 色が変わる ---
  {
    id: 'karaoke', trigger: 'auto', sub: 'color',
    title: 'カラオケテキスト',
    tags: ['テキスト', 'アニメーション'],
    prompt: 'テキストが1文字ずつ順番に色が変わっていくカラオケの歌詞のようなアニメーションを作って',
    html: '<span class="fx-karaoke" id="karaoke-el"></span>',
    code: {
      html: '<span class="karaoke">カラオケテキスト</span>',
      css: `.karaoke span {
  display: inline-block;
  font-size: 2rem;
  font-weight: 700;
  color: #ddd;
  animation: karaoke 3s linear infinite;
}

@keyframes karaoke {
  0%, 10% { color: #ddd; }
  20%, 100% { color: #0071e3; }
}`,
      js: `document.querySelector('.karaoke').innerHTML =
  'カラオケテキスト'.split('').map((c, i) =>
    \`<span style="animation-delay:\${i * 0.3}s">\${c}</span>\`
  ).join('');`
    },
    init: (el) => {
      const t = el.querySelector('#karaoke-el');
      if (t) t.innerHTML = 'カラオケテキスト'.split('').map((c, i) =>
        `<span style="animation-delay:${i * 0.3}s">${c}</span>`
      ).join('');
    }
  },
  {
    id: 'gradient-text-border', trigger: 'auto', sub: 'color',
    title: 'グラデ流れアウトライン',
    tags: ['テキスト', 'グラデーション', 'アニメーション'],
    prompt: '文字の輪郭にグラデーションが流れるアウトラインテキストを作って。中は透明でグラデーションが動き続けるように',
    html: '<span class="fx-gradient-text-border">OUTLINE</span>',
    code: {
      html: '<span class="gradient-outline">OUTLINE</span>',
      css: `.gradient-outline {
  font-size: 2rem;
  font-weight: 900;
  color: transparent;
  background: linear-gradient(135deg, #ff6b6b, #ffd93d, #6bff6b, #6bb5ff);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  animation: gradient-outline 4s ease infinite;
}

@keyframes gradient-outline {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`
    }
  },

  // --- 文字が動く ---
  {
    id: 'zoom-blur', trigger: 'auto', sub: 'move',
    title: 'ズームブラー',
    tags: ['テキスト', 'アニメーション'],
    prompt: 'テキストがズームしながらぼやけて消えてまた戻るアニメーションを作って。インパクトのある登場演出',
    html: '<span class="fx-zoom-blur">ZOOM</span>',
    code: {
      html: '<span class="zoom-blur">ZOOM</span>',
      css: `.zoom-blur {
  font-size: 2rem;
  font-weight: 700;
  animation: zoom-blur 3s ease-in-out infinite;
}

@keyframes zoom-blur {
  0%, 100% { transform: scale(1); filter: blur(0); opacity: 1; }
  50% { transform: scale(1.5); filter: blur(3px); opacity: 0.5; }
}`
    }
  },

  // --- その他の文字系 ---
  {
    id: 'multiline-type', trigger: 'auto', sub: 'text-other',
    title: 'コードタイピング',
    tags: ['テキスト', 'アニメーション', 'JS'],
    prompt: 'コードが1文字ずつタイピングされるようにコンソール風に表示されるアニメーションを作って。カーソル付きで',
    html: '<div class="fx-multiline-type" id="multitype-el"></div>',
    code: {
      html: '<div class="code-type" id="codeEl"></div>',
      css: `.code-type {
  font-family: monospace;
  font-size: 0.9rem;
  line-height: 1.6;
  white-space: pre-wrap;
}

.cursor {
  display: inline-block;
  width: 8px; height: 1em;
  background: #333;
  vertical-align: text-bottom;
  animation: blink 0.7s step-end infinite;
}

@keyframes blink { 50% { opacity: 0; } }`,
      js: `const code = 'const hello = () => {\\n  console.log("Hi!");\\n};';
const el = document.getElementById('codeEl');
let i = 0;
function type() {
  if (i <= code.length) {
    el.innerHTML = code.substring(0, i) + '<span class="cursor"></span>';
    i++;
    setTimeout(type, 50);
  } else {
    setTimeout(() => { i = 0; type(); }, 2000);
  }
}
type();`
    },
    init: (el) => {
      const span = el.querySelector('#multitype-el');
      if (!span) return;
      const code = 'const hello = () => {\n  console.log("Hi!");\n};';
      let i = 0;
      function type() {
        if (i <= code.length) {
          span.innerHTML = code.substring(0, i).replace(/\n/g, '<br>') + '<span class="cursor" style="display:inline-block;width:8px;height:1em;background:var(--text);vertical-align:text-bottom;animation:blink-caret-td 0.7s step-end infinite"></span>';
          i++;
          setTimeout(type, 50);
        } else {
          setTimeout(() => { i = 0; type(); }, 2000);
        }
      }
      type();
    }
  },

  // --- 枠系 ---
  {
    id: 'parallax-demo', trigger: 'auto', sub: 'border',
    title: 'パララックス（視差効果）',
    tags: ['背景', 'アニメーション', 'JS'],
    prompt: 'マウスの位置に応じて背景と前景が異なる速度で動くパララックスエフェクトを作って',
    html: '<div class="fx-parallax-demo" id="parallax-demo-el"><div class="fx-parallax-layer fx-parallax-back">BG</div><div class="fx-parallax-layer fx-parallax-front">PARALLAX</div></div>',
    code: {
      html: `<div class="parallax-area">
  <div class="parallax-back">BG</div>
  <div class="parallax-front">PARALLAX</div>
</div>`,
      css: `.parallax-area {
  position: relative;
  width: 100%; height: 200px;
  overflow: hidden; border-radius: 8px;
}

.parallax-back, .parallax-front {
  position: absolute;
  width: 100%;
  text-align: center;
  font-weight: 700;
}

.parallax-back {
  inset: 0;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: rgba(255,255,255,0.3);
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.parallax-front {
  top: 30%;
  color: #fff;
  font-size: 1.5rem;
}`,
      js: `const area = document.querySelector('.parallax-area');
const back = area.querySelector('.parallax-back');
const front = area.querySelector('.parallax-front');

area.addEventListener('mousemove', (e) => {
  const rect = area.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  back.style.transform = \`translate(\${x * 10}px, \${y * 10}px)\`;
  front.style.transform = \`translate(\${x * 25}px, \${y * 25}px)\`;
});`
    },
    init: (el) => {
      const area = el.querySelector('#parallax-demo-el');
      if (!area) return;
      const back = area.querySelector('.fx-parallax-back');
      const front = area.querySelector('.fx-parallax-front');
      area.addEventListener('mousemove', (e) => {
        const rect = area.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        back.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
        front.style.transform = `translate(${x * 25}px, ${y * 25}px)`;
      });
    }
  },

  // --- その他 ---
  {
    id: 'custom-cursor', trigger: 'auto', sub: 'other',
    title: 'カスタムカーソル',
    tags: ['インタラクション', 'JS'],
    prompt: 'マウスカーソルの代わりに丸いカスタムカーソルが追従するエフェクトを作って。少し遅れてついてくるように',
    html: '<div class="fx-cursor-area" id="cursor-area-el">この中でマウスを動かしてね<div class="fx-custom-cursor" id="custom-cursor-el"></div></div>',
    code: {
      html: `<div class="cursor-area">
  <div class="custom-cursor" id="cursor"></div>
</div>`,
      css: `.cursor-area {
  width: 100%; height: 200px;
  border: 1px dashed #ddd;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  cursor: none;
}

.custom-cursor {
  position: absolute;
  width: 20px; height: 20px;
  border: 2px solid #0071e3;
  border-radius: 50%;
  pointer-events: none;
  transition: transform 0.15s ease;
  transform: translate(-50%, -50%);
}`,
      js: `const area = document.querySelector('.cursor-area');
const cursor = document.getElementById('cursor');

area.addEventListener('mousemove', (e) => {
  const rect = area.getBoundingClientRect();
  cursor.style.left = (e.clientX - rect.left) + 'px';
  cursor.style.top = (e.clientY - rect.top) + 'px';
});`
    },
    init: (el) => {
      const area = el.querySelector('#cursor-area-el');
      const cursor = el.querySelector('#custom-cursor-el');
      if (!area || !cursor) return;
      area.addEventListener('mousemove', (e) => {
        const rect = area.getBoundingClientRect();
        cursor.style.left = (e.clientX - rect.left) + 'px';
        cursor.style.top = (e.clientY - rect.top) + 'px';
      });
    }
  },

  // --- ホバー ---
  {
    id: 'double-underline', trigger: 'hover',
    title: '二重下線ホバー',
    tags: ['リンク', 'ホバー', 'アニメーション'],
    prompt: 'リンクにホバーすると二重の下線が順番に左から伸びてくるエフェクトを作って',
    html: '<a class="fx-double-underline" href="#">Double Line</a>',
    code: {
      html: '<a class="double-underline" href="#">Double Line</a>',
      css: `.double-underline {
  font-size: 1.5rem;
  font-weight: 600;
  position: relative;
  text-decoration: none;
  color: #333;
}

.double-underline::before,
.double-underline::after {
  content: '';
  position: absolute;
  left: 0;
  width: 0; height: 2px;
  background: #0071e3;
  transition: width 0.3s ease;
}

.double-underline::before { bottom: -2px; }
.double-underline::after { bottom: -7px; transition-delay: 0.1s; }

.double-underline:hover::before,
.double-underline:hover::after { width: 100%; }`
    }
  },
  {
    id: 'img-overlay', trigger: 'hover',
    title: 'ホバーで暗くしてテキスト表示',
    tags: ['カード', 'ホバー', 'アニメーション'],
    prompt: '画像にホバーすると暗いオーバーレイがかかってテキストがフェードインするエフェクトを作って',
    html: '<div class="fx-img-overlay"><div class="fx-img-overlay-bg"></div><div class="fx-img-overlay-text">View Details</div></div>',
    code: {
      html: `<div class="img-overlay">
  <img src="image.jpg" class="overlay-bg" alt="">
  <div class="overlay-text">View Details</div>
</div>`,
      css: `.img-overlay {
  position: relative;
  width: 200px; height: 100px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
}

.overlay-bg {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.overlay-text {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0);
  color: #fff;
  font-weight: 700;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
}

.img-overlay:hover .overlay-bg { transform: scale(1.1); }

.img-overlay:hover .overlay-text {
  opacity: 1;
  transform: translateY(0);
  background: rgba(0,0,0,0.4);
}`
    }
  },

  // --- クリック ---
  {
    id: 'rubber-click', trigger: 'click',
    title: 'ラバーバンド（ゴムパッチン）',
    tags: ['テキスト', 'インタラクション', 'アニメーション'],
    prompt: 'クリックするとゴムのようにびよーんと伸び縮みするラバーバンドアニメーションを作って',
    html: '<span class="fx-rubber" id="rubber-el">Click me!</span>',
    code: {
      html: '<span class="rubber" id="rubberEl">Click me!</span>',
      css: `.rubber {
  display: inline-block;
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;
}

.rubber.is-animating {
  animation: rubber 0.8s ease;
}

@keyframes rubber {
  30% { transform: scaleX(1.25) scaleY(0.75); }
  40% { transform: scaleX(0.75) scaleY(1.25); }
  50% { transform: scaleX(1.15) scaleY(0.85); }
  65% { transform: scaleX(0.95) scaleY(1.05); }
  75% { transform: scaleX(1.05) scaleY(0.95); }
  100% { transform: scaleX(1) scaleY(1); }
}`,
      js: `document.getElementById('rubberEl').addEventListener('click', function() {
  this.classList.remove('is-animating');
  void this.offsetWidth; // reflow
  this.classList.add('is-animating');
});`
    },
    init: (el) => {
      const span = el.querySelector('#rubber-el');
      if (!span) return;
      span.addEventListener('click', function() {
        this.classList.remove('is-animating');
        void this.offsetWidth;
        this.classList.add('is-animating');
      });
    }
  },
  {
    id: 'compare', trigger: 'click',
    title: 'ビフォーアフター比較',
    tags: ['UI部品', 'インタラクション', 'JS'],
    prompt: 'ドラッグで左右に動かせるビフォーアフター比較スライダーを作って。画像や要素を左右で比較できるように',
    html: '<div class="fx-compare" id="compare-el"><div class="fx-compare-after">After</div><div class="fx-compare-before" id="compare-before">Before</div><div class="fx-compare-line" id="compare-line"></div></div>',
    code: {
      html: `<div class="compare" id="compareEl">
  <div class="compare-after">After</div>
  <div class="compare-before" id="before">Before</div>
  <div class="compare-line" id="line"></div>
</div>`,
      css: `.compare {
  position: relative;
  width: 300px; height: 150px;
  border-radius: 8px;
  overflow: hidden;
  cursor: ew-resize;
}

.compare-before, .compare-after {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #fff;
}

.compare-after { background: #e74c3c; }
.compare-before { background: #667eea; clip-path: inset(0 50% 0 0); }

.compare-line {
  position: absolute;
  top: 0; left: 50%;
  width: 3px; height: 100%;
  background: #fff;
  transform: translateX(-50%);
}`,
      js: `const el = document.getElementById('compareEl');
const before = document.getElementById('before');
const line = document.getElementById('line');

el.addEventListener('mousemove', (e) => {
  const rect = el.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  before.style.clipPath = \`inset(0 \${100 - x}% 0 0)\`;
  line.style.left = x + '%';
});`
    },
    init: (el) => {
      const area = el.querySelector('#compare-el');
      const before = el.querySelector('#compare-before');
      const line = el.querySelector('#compare-line');
      if (!area || !before || !line) return;
      area.addEventListener('mousemove', (e) => {
        const rect = area.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        before.style.clipPath = `inset(0 ${100 - x}% 0 0)`;
        line.style.left = x + '%';
      });
    }
  },

  // ===== 追加エフェクト v8 =====

  // --- その他 ---
  {
    id: 'timeline', trigger: 'auto', sub: 'other',
    title: 'タイムライン',
    tags: ['UI部品', 'デザイン'],
    prompt: '縦線と丸で繋いだタイムラインUIを作って。完了したステップは色が変わるようにして',
    html: '<div class="fx-timeline"><div class="fx-timeline-item done"><div class="fx-timeline-title">企画</div><div class="fx-timeline-desc">2024年1月</div></div><div class="fx-timeline-item done"><div class="fx-timeline-title">開発</div><div class="fx-timeline-desc">2024年3月</div></div><div class="fx-timeline-item"><div class="fx-timeline-title">リリース</div><div class="fx-timeline-desc">予定</div></div></div>',
    code: {
      html: `<div class="timeline">
  <div class="timeline-item done">
    <div class="title">企画</div>
    <div class="desc">2024年1月</div>
  </div>
  <div class="timeline-item done">
    <div class="title">開発</div>
    <div class="desc">2024年3月</div>
  </div>
  <div class="timeline-item">
    <div class="title">リリース</div>
    <div class="desc">予定</div>
  </div>
</div>`,
      css: `.timeline {
  position: relative;
  padding-left: 24px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 7px; top: 0;
  width: 2px; height: 100%;
  background: #ddd;
}

.timeline-item {
  position: relative;
  padding-bottom: 16px;
  padding-left: 8px;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -21px; top: 4px;
  width: 12px; height: 12px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid #ddd;
}

.timeline-item.done::before {
  background: #0071e3;
  border-color: #0071e3;
}

.title { font-weight: 600; font-size: 0.85rem; }
.desc { font-size: 0.75rem; color: #999; }`
    }
  },
  {
    id: 'snap-scroll', trigger: 'auto', sub: 'other',
    title: 'スナップスクロール',
    tags: ['UI部品', 'インタラクション'],
    prompt: '横スクロールでページごとにピタッと止まるスナップスクロールを作って。カルーセル風に',
    html: '<div class="fx-snap-demo"><div class="fx-snap-item" style="background:#667eea">Page 1</div><div class="fx-snap-item" style="background:#764ba2">Page 2</div><div class="fx-snap-item" style="background:#e74c3c">Page 3</div></div>',
    code: {
      html: `<div class="snap-scroll">
  <div class="snap-item" style="background:#667eea">Page 1</div>
  <div class="snap-item" style="background:#764ba2">Page 2</div>
  <div class="snap-item" style="background:#e74c3c">Page 3</div>
</div>`,
      css: `.snap-scroll {
  width: 300px; height: 150px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  display: flex;
  border-radius: 8px;
}

.snap-item {
  flex: 0 0 100%;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #fff;
}`
    }
  },

  // --- ホバー ---
  {
    id: 'tooltip-left', trigger: 'hover',
    title: 'ツールチップ（左）',
    tags: ['UI部品', 'ホバー', 'アニメーション'],
    prompt: '要素にホバーすると左側にツールチップが出現するエフェクトを作って。矢印付きで',
    html: '<div class="fx-tooltip-left">ホバー →<div class="tip">左に出るよ</div></div>',
    code: {
      html: `<div class="tooltip-left">
  ホバー
  <div class="tip">左に出るよ</div>
</div>`,
      css: `.tooltip-left {
  position: relative;
  display: inline-block;
  padding: 10px 24px;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: help;
}

.tip {
  position: absolute;
  right: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%) scale(0.8);
  padding: 6px 12px;
  background: #333;
  color: #fff;
  font-size: 0.78rem;
  border-radius: 6px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: all 0.2s;
}

.tip::after {
  content: '';
  position: absolute;
  left: 100%; top: 50%;
  transform: translateY(-50%);
  border: 5px solid transparent;
  border-left-color: #333;
}

.tooltip-left:hover .tip {
  opacity: 1;
  transform: translateY(-50%) scale(1);
}`
    }
  },
  {
    id: 'gradient-fill-text', trigger: 'hover',
    title: 'ホバーでグラデ塗りテキスト',
    tags: ['テキスト', 'ホバー', 'グラデーション'],
    prompt: 'テキストにホバーすると左からグラデーションで塗りつぶされるエフェクトを作って',
    html: '<span class="fx-gradient-fill-text" data-text="GRADIENT">GRADIENT</span>',
    code: {
      html: '<span class="gradient-fill" data-text="GRADIENT">GRADIENT</span>',
      css: `.gradient-fill {
  font-size: 1.8rem;
  font-weight: 800;
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.gradient-fill::before {
  content: attr(data-text);
  position: absolute;
  left: 0; top: 0;
  width: 0;
  overflow: hidden;
  white-space: nowrap;
  background: linear-gradient(90deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: width 0.4s ease;
}

.gradient-fill:hover::before { width: 100%; }`
    }
  },

  // --- クリック ---
  {
    id: 'modal', trigger: 'click',
    title: 'モーダル',
    tags: ['UI部品', 'インタラクション', 'アニメーション'],
    prompt: 'ボタンクリックでオーバーレイ付きのモーダルがスケールアニメーションで出現するUIを作って。背景クリックやボタンで閉じるように',
    html: '<button class="fx-fill-btn" id="modal-trigger-btn">モーダルを開く</button><div class="fx-modal-overlay" id="modal-overlay-el"><div class="fx-modal"><div class="fx-modal-title">モーダルタイトル</div><div class="fx-modal-body">これはモーダルの中身です。背景クリックか下のボタンで閉じます。</div><button class="fx-modal-close" id="modal-close-btn">閉じる</button></div></div>',
    code: {
      html: `<button id="openBtn">モーダルを開く</button>
<div class="modal-overlay" id="overlay">
  <div class="modal">
    <h3>タイトル</h3>
    <p>モーダルの中身</p>
    <button id="closeBtn">閉じる</button>
  </div>
</div>`,
      css: `.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
  z-index: 1000;
}

.modal-overlay.is-open {
  opacity: 1;
  pointer-events: auto;
}

.modal {
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  max-width: 320px;
  width: 90%;
  transform: scale(0.9) translateY(20px);
  transition: transform 0.3s;
  box-shadow: 0 16px 48px rgba(0,0,0,0.2);
}

.modal-overlay.is-open .modal {
  transform: scale(1) translateY(0);
}`,
      js: `const overlay = document.getElementById('overlay');
document.getElementById('openBtn').onclick = () => overlay.classList.add('is-open');
document.getElementById('closeBtn').onclick = () => overlay.classList.remove('is-open');
overlay.onclick = (e) => { if (e.target === overlay) overlay.classList.remove('is-open'); };`
    },
    init: (el) => {
      const btn = el.querySelector('#modal-trigger-btn');
      const overlay = el.querySelector('#modal-overlay-el');
      const close = el.querySelector('#modal-close-btn');
      if (!btn || !overlay) return;
      btn.addEventListener('click', () => overlay.classList.add('is-open'));
      if (close) close.addEventListener('click', () => overlay.classList.remove('is-open'));
      overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.classList.remove('is-open'); });
    }
  },
  {
    id: 'search-expand', trigger: 'click',
    title: '検索バー展開',
    tags: ['UI部品', 'インタラクション', 'アニメーション'],
    prompt: '検索アイコンをクリックすると入力欄がスッと横に広がる検索バー展開エフェクトを作って',
    html: '<div class="fx-search-expand" id="search-expand-el"><input type="text" placeholder="検索..."><button id="search-expand-btn">🔍</button></div>',
    code: {
      html: `<div class="search-expand" id="searchWrap">
  <input type="text" placeholder="検索...">
  <button id="searchBtn">🔍</button>
</div>`,
      css: `.search-expand {
  display: flex;
  align-items: center;
}

.search-expand input {
  width: 0; padding: 0;
  border: none; outline: none;
  background: #f5f5f5;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  border-radius: 8px;
}

.search-expand.is-open input {
  width: 160px;
  padding: 8px 12px;
  border: 1px solid #ddd;
}

.search-expand button {
  width: 36px; height: 36px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f5f5f5;
  cursor: pointer;
  font-size: 1rem;
}`,
      js: `const wrap = document.getElementById('searchWrap');
document.getElementById('searchBtn').onclick = () => {
  wrap.classList.toggle('is-open');
  if (wrap.classList.contains('is-open')) {
    wrap.querySelector('input').focus();
  }
};`
    },
    init: (el) => {
      const wrap = el.querySelector('#search-expand-el');
      const btn = el.querySelector('#search-expand-btn');
      if (!wrap || !btn) return;
      btn.addEventListener('click', () => {
        wrap.classList.toggle('is-open');
        if (wrap.classList.contains('is-open')) wrap.querySelector('input').focus();
      });
    }
  },
  {
    id: 'drag-list', trigger: 'click',
    title: 'ドラッグ並べ替え',
    tags: ['UI部品', 'インタラクション', 'JS'],
    prompt: 'リストアイテムをドラッグして並べ替えられるソータブルリストを作って',
    html: '<div class="fx-drag-list" id="drag-list-el"><div class="fx-drag-item" draggable="true"><span class="fx-drag-handle">⠿</span> アイテム 1</div><div class="fx-drag-item" draggable="true"><span class="fx-drag-handle">⠿</span> アイテム 2</div><div class="fx-drag-item" draggable="true"><span class="fx-drag-handle">⠿</span> アイテム 3</div><div class="fx-drag-item" draggable="true"><span class="fx-drag-handle">⠿</span> アイテム 4</div></div>',
    code: {
      html: `<div class="drag-list" id="list">
  <div class="drag-item" draggable="true"><span class="handle">⠿</span> Item 1</div>
  <div class="drag-item" draggable="true"><span class="handle">⠿</span> Item 2</div>
  <div class="drag-item" draggable="true"><span class="handle">⠿</span> Item 3</div>
</div>`,
      css: `.drag-list { display: flex; flex-direction: column; gap: 6px; }

.drag-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 6px;
  cursor: grab;
  transition: box-shadow 0.2s, transform 0.2s;
  user-select: none;
}

.drag-item:active { cursor: grabbing; box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
.drag-item.is-dragging { opacity: 0.5; }`,
      js: `const list = document.getElementById('list');
let dragged = null;

list.querySelectorAll('.drag-item').forEach(item => {
  item.addEventListener('dragstart', () => { dragged = item; item.classList.add('is-dragging'); });
  item.addEventListener('dragend', () => { dragged.classList.remove('is-dragging'); dragged = null; });
  item.addEventListener('dragover', (e) => {
    e.preventDefault();
    if (item !== dragged) list.insertBefore(dragged, item);
  });
});`
    },
    init: (el) => {
      const list = el.querySelector('#drag-list-el');
      if (!list) return;
      let dragged = null;
      list.querySelectorAll('.fx-drag-item').forEach(item => {
        item.addEventListener('dragstart', () => { dragged = item; item.classList.add('is-dragging'); });
        item.addEventListener('dragend', () => { if (dragged) dragged.classList.remove('is-dragging'); dragged = null; });
        item.addEventListener('dragover', (e) => { e.preventDefault(); if (item !== dragged && dragged) list.insertBefore(dragged, item); });
      });
    }
  },
  {
    id: 'num-badge', trigger: 'click',
    title: 'カウントバッジ',
    tags: ['UI部品', 'インタラクション', 'アニメーション'],
    prompt: 'ボタンをクリックするたびに横のバッジの数字が増えてポンと弾むカウンターバッジを作って',
    html: '<div class="fx-num-badge" id="num-badge-el" style="cursor:pointer">クリック <span class="fx-num-badge-count" id="num-badge-count">0</span></div>',
    code: {
      html: `<div class="num-badge" id="badgeWrap">
  クリック <span class="badge-count" id="count">0</span>
</div>`,
      css: `.num-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

.badge-count {
  min-width: 24px; height: 24px;
  padding: 0 6px;
  background: #0071e3;
  color: #fff;
  border-radius: 12px;
  font-size: 0.72rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.badge-count.is-bump { animation: bump 0.3s ease; }
@keyframes bump { 50% { transform: scale(1.3); } }`,
      js: `let count = 0;
document.getElementById('badgeWrap').addEventListener('click', () => {
  count++;
  const el = document.getElementById('count');
  el.textContent = count;
  el.classList.remove('is-bump');
  void el.offsetWidth;
  el.classList.add('is-bump');
});`
    },
    init: (el) => {
      const wrap = el.querySelector('#num-badge-el');
      const badge = el.querySelector('#num-badge-count');
      if (!wrap || !badge) return;
      let count = 0;
      wrap.addEventListener('click', () => {
        count++;
        badge.textContent = count;
        badge.classList.remove('is-bump');
        void badge.offsetWidth;
        badge.classList.add('is-bump');
      });
    }
  },
];
