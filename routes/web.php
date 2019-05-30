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
Route::get('liyi', 'IndexController@liyi');


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
Auth::routes();


Route::get('blog/detail/{id}', 'IndexController@details')->where('id', '[0-9]+');

Route::get('image', 'ImgController@index');
Route::get('img/index', 'ImgController@userIndex');
Route::get('img/upload', 'ImgController@upload');
Route::get('img/delete', 'ImgController@delete');

Route::post('ajaxComment/{id}', 'IndexController@ajaxComment')->where('id', '[0-9]+');
Route::post('ajaxGetComment/{id}', 'IndexController@ajaxGetComment')->where('id', '[0-9]+');
