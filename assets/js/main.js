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
      items.forEach((item, index) => {
        // オリジナルにクラスを付与 (2, 5, 8...)
        if (index % 3 === 1) {
          item.classList.add('is-step');
        }

        // クラスが付いた状態でコピーを作成
        const firstClone = item.cloneNode(true);
        const lastClone = item.cloneNode(true);

        list.appendChild(firstClone); // 後ろに追加
        list.insertBefore(lastClone, list.firstChild); // 前に追加
      });
      currentIndex = originalCount; 
    };

    const updateSlider = (withTransition = true) => {
      const style = window.getComputedStyle(list);
      const gap = parseFloat(style.gap) || 0;
      const itemWidth = list.children[0].offsetWidth;

      list.style.transition = withTransition ? 'transform 0.4s ease' : 'none';
      const moveDistance = (itemWidth + gap) * currentIndex;
      list.style.transform = `translateX(-${moveDistance}px)`;
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
      currentIndex += getVisibleCount();
      updateSlider(true);
    });

    prevBtn.addEventListener('click', () => {
      if (isTransitioning) return;
      isTransitioning = true;
      currentIndex -= getVisibleCount();
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