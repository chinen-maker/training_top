<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<header class="header">
  <div class="header__inner">
    <h1 class="header__logo">
      <a href="/" class="header__logo__link">
        <div class="header__logo__imgBox">
          <img src="<?php echo get_template_directory_uri(); ?>/img/header_logo.png" class="header__logo__img" alt="吉瀬こどもの森">
        </div>
      </a>
    </h1>
    <button type="button" class="header__hamburger">
      <span class="header__hamburger__line"></span>
      <span class="header__hamburger__line"></span>
      <span class="header__hamburger__line"></span>
    </button>
    <div class="header__listBox">
      <ul class="header__list">
        <li class="header__list__item">
          <a href="/" class="header__list__link">
            <div class="header__list__imgBox">
              <picture>
                <source srcset="assets/img/img_headerArrow-sp.png" media="(max-width:768px)">
                <img src="<?php echo get_template_directory_uri(); ?>/img/header_story.png" alt="ストーリー・オブ・ネイチャー" class="header__list__img">
              </picture>
            </div>
            <p class="header__list__title">ストーリー・オブ・ネイチャー</p>
          </a>
        </li>
        <li class="header__list__item">
          <a href="/" class="header__list__link">
            <div class="header__list__imgBox">
              <picture>
                <source srcset="assets/img/img_headerArrow-sp.png" media="(max-width:768px)">
                <img src="<?php echo get_template_directory_uri(); ?>/img/header_introduction.png" alt="園について" class="header__list__img">
              </picture>
            </div>
            <p class="header__list__title">園について</p>
          </a>
        </li>
        <li class="header__list__item">
          <a href="/" class="header__list__link">
            <div class="header__list__imgBox">
              <picture>
                <source srcset="assets/img/img_headerArrow-sp.png" media="(max-width:768px)">
                <img src="<?php echo get_template_directory_uri(); ?>/img/header_life.png" alt="園の生活" class="header__list__img">
              </picture>
            </div>
            <p class="header__list__title">園の生活</p>
          </a>
        </li>
        <li class="header__list__item">
          <a href="/" class="header__list__link">
            <div class="header__list__imgBox">
              <picture>
                <source srcset="assets/img/img_headerArrow-sp.png" media="(max-width:768px)">
                <img src="<?php echo get_template_directory_uri(); ?>/img/header_guidance.png" alt="入園案内" class="header__list__img">
              </picture>
            </div>
            <p class="header__list__title">入園案内</p>
          </a>
        </li>
        <li class="header__list__item">
          <a href="/" class="header__list__link">
            <div class="header__list__imgBox">
              <picture>
                <source srcset="assets/img/img_headerArrow-sp.png" media="(max-width:768px)">
                <img src="<?php echo get_template_directory_uri(); ?>/img/header_blog.png" alt="ブログ" class="header__list__img">
              </picture>
            </div>
            <p class="header__list__title">ブログ</p>
          </a>
        </li>
        <li class="header__list__item">
          <a href="/" class="header__list__link">
            <div class="header__list__imgBox">
              <picture>
                <source srcset="assets/img/img_headerArrow-sp.png" media="(max-width:768px)">
                <img src="<?php echo get_template_directory_uri(); ?>/img/header_recruit.png" alt="職員採用" class="header__list__img">
              </picture>
            </div>
            <p class="header__list__title">職員採用</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</header>