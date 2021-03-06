<?php

use Illuminate\Routing\Router;

Admin::registerAuthRoutes();

Route::group([
    'prefix'        => config('admin.route.prefix'),
    'namespace'     => config('admin.route.namespace'),
    'middleware'    => config('admin.route.middleware'),
], function (Router $router) {

    $router->get('/', 'HomeController@index')->name('admin.home');
    $router->get('test/download/excel', 'HomeController@excels');
    $router->post('img_upload', 'UploadImageController@upload');

    $router->resource('type', TypeController::class);
    $router->resource('ask',AskController::class);
    $router->resource('ask_content',AskContentController::class);
    $router->resource('blog_content',BlogContentController::class);
    $router->resource('blog',BlogController::class);
    $router->resource('comment',CommentController::class);
    $router->resource('header',HeaderController::class);

    $router->resource('image',ImageController::class);
    $router->post('image/to_examine/{id}', 'ImageController@toExamine')
        ->name('image.to_examine');
    $router->post('image/is_delete/{id}', 'ImageController@destroy')
        ->name('image.destroy');


    $router->resource('right_top',RightTopController::class);

    $router->resource('city', CityController::class);

    $router->resource('tools', ToolController::class);


});
