const initApp = () => {
  // ===============================
  // 1. ハンバーガーメニュー
  // ===============================
  const hamburger = document.querySelector(".header__hamburger");
  const menu = document.querySelector(".header__listBox");

  if (hamburger && menu) {
    hamburger.addEventListener("click", (event) => {
      event.preventDefault();
      hamburger.classList.toggle("is-active");
      menu.classList.toggle("is-active");
      document.body.classList.toggle("is-menu-open");
    });

    // メニュー内のリンクをクリックしたらメニューを閉じる
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove("is-active");
        menu.classList.remove("is-active");
        document.body.classList.remove("is-menu-open");
      });
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
    const originals = Array.from(items);
    const getVisibleCount = () => window.innerWidth <= 768 ? 1 : 3;
    const visibleCount = getVisibleCount();
    const stepCount = 1;

    const fillItems = () => {
      let fillIndex = 0;
      while (list.children.length <= visibleCount) {
        list.appendChild(originals[fillIndex % originalCount].cloneNode(true));
        fillIndex += 1;
      }
    };

    const setupClones = () => {
      const baseItems = Array.from(list.children);
      const slideCount = baseItems.length;
      baseItems.forEach((item) => {
        list.appendChild(item.cloneNode(true));
        list.insertBefore(item.cloneNode(true), list.firstChild);
      });
      return slideCount;
    };

    const updateStepClass = (slideCount) => {
      list.querySelectorAll('.is-step').forEach(item => item.classList.remove('is-step'));
      const centerIndex = currentIndex + Math.floor(visibleCount / 2);
      const centerItem = list.children[centerIndex];
      if (centerItem) {
        centerItem.classList.add('is-step');
      }
    };

    const updateSlider = (withTransition = true) => {
      const style = window.getComputedStyle(list);
      const gap = parseFloat(style.gap) || 0;
      const itemWidth = list.children[0].offsetWidth;
      const moveDistance = (itemWidth + gap) * currentIndex;

      list.style.transition = withTransition ? 'transform 0.4s ease' : 'none';
      list.style.transform = `translateX(-${moveDistance}px)`;
      updateStepClass();

      if (!withTransition) {
        requestAnimationFrame(() => {
          list.style.transition = '';
        });
      }
    };

    let slideCount = originalCount;
    let infiniteMode = false;

    const getMaxIndex = () => infiniteMode ? slideCount * 2 : Math.max(0, slideCount - visibleCount);

    list.addEventListener('transitionend', () => {
      isTransitioning = false;
      if (!infiniteMode) return;

      if (currentIndex >= slideCount * 2) {
        currentIndex = slideCount;
        updateSlider(false);
      } else if (currentIndex <= 0) {
        currentIndex = slideCount;
        updateSlider(false);
      }
    });

    nextBtn.addEventListener('click', () => {
      if (isTransitioning) return;
      const maxIndex = getMaxIndex();
      if (currentIndex >= maxIndex) return;
      isTransitioning = true;
      currentIndex = Math.min(maxIndex, currentIndex + stepCount);
      updateSlider(true);
    });

    prevBtn.addEventListener('click', () => {
      if (isTransitioning) return;
      if (currentIndex <= 0) return;
      isTransitioning = true;
      currentIndex = Math.max(0, currentIndex - stepCount);
      updateSlider(true);
    });

    if (originalCount <= visibleCount) {
      fillItems();
    }
    slideCount = list.children.length;
    infiniteMode = slideCount > visibleCount;
    const baseSlideCount = setupClones();
    
    if (infiniteMode) {
      currentIndex = baseSlideCount;
    } else {
      currentIndex = 0;
    }
    
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