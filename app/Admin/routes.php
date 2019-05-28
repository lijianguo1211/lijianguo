<?php

use Illuminate\Routing\Router;

Admin::registerAuthRoutes();

Route::group([
    'prefix'        => config('admin.route.prefix'),
    'namespace'     => config('admin.route.namespace'),
    'middleware'    => config('admin.route.middleware'),
], function (Router $router) {

    $router->get('/', 'HomeController@index')->name('admin.home');
    $router->get('type', 'TypeController@index')->name('admin.home');
    $router->get('type/create', 'TypeController@create')->name('admin.type.create');

    $router->resource('type', TypeController::class);

});
