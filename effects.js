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
];
