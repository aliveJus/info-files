подключение CSS  в function.php
--------------------------------------
  wp_enqueue_script( 'script-name', get_template_directory_uri() . '/js/example.css', array(), '1.0.0', true ); //

  ------------------------------------------
  Alethemes framework
  -----------------------------------------
assets - папка с css,images,js для админки
etc - тоже для админки
папка "functions" код подключает не в одной файле functions.php, а несколько файлов из папки

================================================================
функции WP
================================================================

$sliders_main = get_post_meta ( $post -> ID, 'mail_slider_list', true ); // get_post_meta выводит любые произвольные поля ( мета компоненты ) 