<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('confirm', 'Auth\ConfirmController@confirm')->name('confirm');
Route::get('send-confirm-mail', 'Auth\ConfirmController@sendMail')->name('send-confirm-mail');

Route::get('github', 'Auth\GithubController@redirectToProvider')->name('github');
Route::get('github/callback', 'Auth\GithubController@handleProviderCallback');
// Authentication Routes...
Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');
Route::get('user/index', 'Auth\UserController@index')->name('user.index');

// Registration Routes...
Route::get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
Route::post('register', 'Auth\RegisterController@register');

// Password Reset Routes...
Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
Route::post('password/reset', 'Auth\ResetPasswordController@reset');

Route::group(['namespace' => 'Home'], function() {
    Route::get('/', 'IndexController@index')->name('home');
    Route::get('blog/detail/{id}', 'BlogController@show')
        ->where('id', '[0-9]+')->name('home.blog.detail');
    Route::post('markdown/upload', 'ImgController@upload')->name('markdown.img');
    Route::get('questions', 'AskController@index')->name('home.ask.index');
    Route::get('ask/create/index', 'AskController@createIndex')->name('home.ask.create');
    Route::post('ask/add', 'AskController@insert')->name('home.ask.add');
    Route::get('ask/details/{id}', 'AskController@details')
        ->where('id', '[0-9]+')->name('home.ask.details');

    Route::get('img', 'ImgController@index')->name('home.img');
    Route::get('img/index', 'ImgController@userIndex')->name('home.img.index');
    Route::get('img/upload', 'ImgController@upload')->name('home.img.upload');
    Route::get('img/delete', 'ImgController@delete')->name('home.img.delete');

    Route::post('ajaxComment/{id}', 'IndexController@ajaxComment')->where('id', '[0-9]+');
    Route::post('ajaxGetComment/{id}', 'IndexController@ajaxGetComment')->where('id', '[0-9]+');
});


Route::group(['namespace' => 'Tools', 'prefix' => 'tools'], function($route){
    $route->get('index', 'IndexController@index');
    $route->get('fanyi', 'FanyiController@index')->name('tools.fanyi');
    $route->post('baidu/fanyi', 'FanyiController@postFanyi')->name('baidu.fanyi');
    $route->get('encode', 'UrlController@index');
    $route->get('img', 'UrlController@image');
    $route->post('apiUploadFileImage', 'UrlController@apiUploadFileImage')
        ->name('tools.apiUploadFileImage');
    $route->get('sendToEmailJob', 'UrlController@sendToEmailJob');
    $route->get('encryption', 'PasswordController@index');
});

//dngo-api
/*$api = app('Dingo\Api\Routing\Router');
$api->version('v1', function ($api) {
    $api->group(['middleware' => 'api.throttle', 'limit' => 100, 'expires' => 5], function($api) {
        //创建一个端点
        //$api->get('users/{id}', 'App\Api\V1\Controllers\UserController@show');
        $api->get('users/{id}', function() {
            echo App\Api\V1\Controllers\UserController::class;
        });
        //命名路由
        $api->get('users', ['as' => 'users.index', 'uses' => 'App\Api\V1\Controllers\UserController@index']);
        $api->post('users', ['as' => 'users.store', 'uses' => 'App\Api\V1\Controllers\UserController@store']);
    });
});*/

