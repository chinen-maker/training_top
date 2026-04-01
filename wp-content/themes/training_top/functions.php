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