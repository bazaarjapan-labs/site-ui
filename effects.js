const EFFECTS = [
  // ===== テキスト系 =====
  {
    id: 'rainbow',
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
    id: 'shake',
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
    id: 'glow',
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
    id: 'typewriter',
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
    id: 'bounce',
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
    id: 'neon',
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
    id: 'glitch',
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
    id: 'gradient-text',
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
    id: 'text-stroke',
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
    id: 'float',
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
    id: 'shadow-pop',
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
    id: 'wave-underline',
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
    id: 'stagger',
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
    id: 'gradient-border',
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
    id: 'ripple',
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
    id: 'underline-link',
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
    id: 'hover-card',
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
    id: 'tooltip',
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
    id: 'spinner',
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
    id: 'dot-loader',
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
    id: 'skeleton',
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
    id: 'progress',
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
    id: 'morph',
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
    id: 'marquee',
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
    id: 'pulse',
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
    id: 'elastic',
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
    id: 'flip',
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
    id: 'blur-in',
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
    id: 'slide-up',
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
    id: 'neon-box',
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
    id: 'rainbow-border',
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
    id: 'breathing-glow',
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
];
