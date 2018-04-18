<?php


use App\Services\Captcha\GeeTest\Geetest;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/home', 'HomeController@index')->name('home');
//AUTH
Route::get('logout', 'Auth\LoginController@logout');
Route::get('register', 'Auth\RegisterController@showRegistrationForm')->name('register')->middleware('wx_request');
Route::post('api/v1/register', 'Auth\RegisterController@register');
Route::get('reset', 'Auth\ResetController@showResetForm')->name('reset')->middleware('wx_request');
Route::post('api/v1/reset', 'Auth\ResetController@reset');
Route::post('api/v1/captcha/verify', 'Auth\ResetController@verify');

Route::get('api/v1/captcha/get', function () {
    return Geetest::init();
});

//微信网页授权
Route::get('/oauth/wechat/callback', 'Auth\LoginController@handleCallback');
