// 【確認用】
console.log('--- JSファイルの読み込み自体は成功しています ---');

const initApp = () => {
  console.log('--- DOMの準備が整いました（initApp開始） ---');

  // ===============================
  // 1. ハンバーガーメニュー
  // ===============================
  const hamburger = document.querySelector(".header__hamburger");
  const menu = document.querySelector(".header__listBox");
  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("is-active");
      menu.classList.toggle("is-active");
      document.body.classList.toggle("is-menu-open");
    });
    console.log('ハンバーガー準備OK');
  }

  // ===============================
  // 2. スライダーの初期化
  // ===============================
  const list = document.querySelector('.blogList');
  const items = document.querySelectorAll('.blogList__item');
  const prevBtn = document.querySelector('.blogSlider__prev');
  const nextBtn = document.querySelector('.blogSlider__next');

  // 要素チェック
  if (list && items.length > 0 && prevBtn && nextBtn) {
    let currentIndex = 0;

    // 表示枚数を画面幅で判定
    const getVisibleCount = () => {
      return window.innerWidth <= 768 ? 1 : 3;
    };

    // スライダー更新（移動）処理
    const updateSlider = () => {
      const visibleCount = getVisibleCount();
      // 全体のページ数（インデックス）を計算
      // 6枚あるとき：PC(3枚ずつ)ならmaxIndexは1。SP(1枚ずつ)ならmaxIndexは5。
      const maxIndex = (window.innerWidth <= 768) ? items.length - 1 : Math.ceil(items.length / 3) - 1;

      // ガード：画面幅を変えた時に今の位置がはみ出さないようにする
      if (currentIndex > maxIndex) currentIndex = maxIndex;

      const style = window.getComputedStyle(list);
      const gap = parseFloat(style.gap) || 0;
      const itemWidth = items[0].offsetWidth;

      // 移動距離の計算
      // PCの場合：currentIndexが1の時、3枚分飛ばす必要がある
      const multiplier = (window.innerWidth <= 768) ? currentIndex : currentIndex * 3;
      const moveDistance = (itemWidth + gap) * multiplier;
      
      list.style.transform = `translateX(-${moveDistance}px)`;
      console.log(`移動中... 現在のIndex: ${currentIndex}`);
    };

    // 次へボタン
    nextBtn.addEventListener('click', () => {
      const maxIndex = (window.innerWidth <= 768) ? items.length - 1 : Math.ceil(items.length / 3) - 1;
      currentIndex = (currentIndex < maxIndex) ? currentIndex + 1 : 0;
      updateSlider();
    });

    // 前へボタン
    prevBtn.addEventListener('click', () => {
      const maxIndex = (window.innerWidth <= 768) ? items.length - 1 : Math.ceil(items.length / 3) - 1;
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : maxIndex;
      updateSlider();
    });

    window.addEventListener('resize', updateSlider);
    updateSlider(); // 初期表示
    console.log('スライダー準備OK');
  }
};

// 最後に initApp を実行する
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}