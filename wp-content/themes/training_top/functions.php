<?php
function my_scripts() {
  wp_enqueue_style(
    'style',
    get_template_directory_uri() . '/css/style.css'
  );

  wp_enqueue_script(
    'main',
    get_template_directory_uri() . '/js/main.js',
    [],
    false,
    true
  );
}
add_action('wp_enqueue_scripts', 'my_scripts');

function my_theme_setup() {
  add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'my_theme_setup');

function create_news_post_type() {

  register_post_type('news',
    array(
      'label' => 'お知らせ',
      'public' => true,
      'has_archive' => true,
      'show_in_rest' => true,
      'supports' => array('title','editor','thumbnail'),
    )
  );

}
add_action('init', 'create_news_post_type');