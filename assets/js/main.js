const initApp = () => {
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
  }

  // ===============================
  // 2. 無限ループスライダー
  // ===============================
  const list = document.querySelector('.blogList');
  const items = document.querySelectorAll('.blogList__item');
  const prevBtn = document.querySelector('.blogSlider__prev');
  const nextBtn = document.querySelector('.blogSlider__next');

  if (list && items.length > 0 && prevBtn && nextBtn) {
    let currentIndex = 0;
    let isTransitioning = false;
    const originalCount = items.length;

    const getVisibleCount = () => window.innerWidth <= 768 ? 1 : 3;

    // --- ★修正ポイント: この箱の中に正しい処理を入れる ---
    const setupClones = () => {
    const visibleCount = getVisibleCount();

    const itemsArray = Array.from(items);

    // 前に追加（最後のn個）
    itemsArray.slice(-visibleCount).forEach(item => {
      const clone = item.cloneNode(true);
      list.insertBefore(clone, list.firstChild);
    });

    // 後ろに追加（最初のn個）
    itemsArray.slice(0, visibleCount).forEach(item => {
      const clone = item.cloneNode(true);
      list.appendChild(clone);
    });

    originalCount = itemsArray.length;

    currentIndex = visibleCount;
  };

    const updateSlider = (withTransition = true) => {
    const viewport = document.querySelector('.blogSlider__viewport');
    const style = window.getComputedStyle(list);
    const gap = parseFloat(style.gap) || 0;

    const visibleCount = getVisibleCount();
    const containerWidth = viewport.offsetWidth;

    const itemWidth = (containerWidth - gap * (visibleCount - 1)) / visibleCount;

    list.style.transition = withTransition ? 'transform 0.4s ease' : 'none';

    // ★ここ重要（中央基準にする）
    const centerOffset = (containerWidth - itemWidth) / 2;

    const moveDistance = (itemWidth + gap) * currentIndex - centerOffset;

    list.style.transform = `translateX(-${moveDistance}px)`;

    document.querySelectorAll('.blogList__item').forEach(item => {
    item.classList.remove('is-center');
  });

  // 中央の要素にクラス付与
  const allItems = document.querySelectorAll('.blogList__item');
  if (allItems[currentIndex]) {
    allItems[currentIndex].classList.add('is-center');
  }
  };

    list.addEventListener('transitionend', () => {
      isTransitioning = false;
      if (currentIndex >= originalCount * 2) {
        currentIndex = originalCount;
        updateSlider(false);
      } else if (currentIndex <= 0) {
        currentIndex = originalCount;
        updateSlider(false);
      }
    });

    nextBtn.addEventListener('click', () => {
      if (isTransitioning) return;
      isTransitioning = true;
      currentIndex += 1;
      updateSlider(true);
    });

    prevBtn.addEventListener('click', () => {
      console.log('prev clicked', isTransitioning);
      if (isTransitioning) return;
      isTransitioning = true;
      currentIndex -= 1;

      if (currentIndex < 0) {
        currentIndex = originalCount;
        updateSlider(false);
      }
      updateSlider(true);
    });

    // ここで上で定義した setupClones を呼ぶ
    setupClones();
    updateSlider(false);

    window.addEventListener('resize', () => {
      updateSlider(false);
    });
  }
};

// 最後に initApp 自体を実行する
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}