<?php get_header(); ?>

<main class="newsDetail">

  <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

    <h1 class="newsDetail__title">
      <?php the_title(); ?>
    </h1>

    <p class="newsDetail__date">
      <?php the_time('Y.m.d'); ?>
    </p>

    <div class="newsDetail__content">
      <?php the_content(); ?>
    </div>

  <?php endwhile; endif; ?>

</main>

<?php get_footer(); ?>