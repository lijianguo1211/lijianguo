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

Route::get('/', 'IndexController@index');
Route::post('liyi', 'IndexController@liyi');
Route::get('liyiPost', 'IndexController@liyiPost');
Route::group(['namespace' => 'Tools', 'prefix' => 'tools'], function(){
    Route::get('index', 'FanyiController@index');
    Route::post('baidu/fanyi', 'FanyiController@postFanyi')->name('baidu.fanyi');
    Route::get('encode', 'UrlController@index');
    Route::get('img', 'UrlController@image');
    Route::post('apiUploadFileImage', 'UrlController@apiUploadFileImage')
        ->name('tools.apiUploadFileImage');
    Route::get('sendToEmailJob', 'UrlController@sendToEmailJob');
    Route::get('encryption', 'PasswordController@index');
});



Route::get('testMd', 'IndexController@test');
Route::get('testHash', 'IndexController@testHash');
Route::get('test/{id}','TestController@test')->name('test.index');
Route::get('getBaiduCode', 'IndexController@getBaiduCode');

Route::get('questions', 'AskController@index');
Route::get('ask/create/index', 'AskController@createIndex');
Route::post('ask/add', 'AskController@insert');
Route::get('ask/details/{id}', 'AskController@details')->where('id', '[0-9]+');



Route::get('confirm', 'Auth\ConfirmController@confirm')->name('confirm');
Route::get('send-confirm-mail', 'Auth\ConfirmController@sendMail')->name('send-confirm-mail');

Route::get('github', 'Auth\GithubController@redirectToProvider')->name('github');
Route::get('github/callback', 'Auth\GithubController@handleProviderCallback');
// Authentication Routes...
Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');

// Registration Routes...
Route::get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
Route::post('register', 'Auth\RegisterController@register');

// Password Reset Routes...
Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
Route::post('password/reset', 'Auth\ResetPasswordController@reset');

//Auth::routes();


Route::get('blog/detail/{id}', 'IndexController@details')->where('id', '[0-9]+');

Route::get('image', 'ImgController@index');
Route::get('img/index', 'ImgController@userIndex');
Route::get('img/upload', 'ImgController@upload');
Route::get('img/delete', 'ImgController@delete');

Route::post('ajaxComment/{id}', 'IndexController@ajaxComment')->where('id', '[0-9]+');
Route::post('ajaxGetComment/{id}', 'IndexController@ajaxGetComment')->where('id', '[0-9]+');
