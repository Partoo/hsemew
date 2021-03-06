<?php


use App\Services\Captcha\GeeTest\Geetest;
use App\Services\Weather\Weather;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/home/{any}', 'HomeController@index')->where('any', '.*');
//AUTH
Route::get('logout', 'Auth\LoginController@logout');
Route::get('register', 'Auth\RegisterController@showRegistrationForm')->name('register')->middleware('wx_request');
Route::post('api/v1/register', 'Auth\RegisterController@register');

Route::get('api/v1/captcha/get', function () {
    return Geetest::init();
});
Route::post('api/v1/captcha/verify', function () {
    return Geetest::verify();
});

//微信网页授权
Route::get('/oauth/wechat/callback', 'Auth\LoginController@handleCallback');


// HOME API

Route::group(['middleware' => 'auth', 'prefix' => 'api/v1/'], function () {
    Route::get('weather', function () {
        return Weather::get();
    });
    Route::get('me', 'MeController@profile');
});


Route::get('test', 'PluginController@index');
