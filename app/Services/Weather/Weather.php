<?php

namespace App\Services\Weather;

use Cache;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;

class Weather
{
    public static function get()
    {
        if (Cache::has('weather')) {
            return Cache::get('weather');
        } else {
            $result = static::fetchWeather();
            if ($result) {
                Cache::put('weather', $result, 300);
                return $result;
            }

            return response()->json(['errors' => '暂时无法连接天气服务器，请检查您的网络连接情况或与管理员联系'], 501);
        }
    }

    private static function fetchWeather()
    {
        $client = new Client();

        try {
            return $client->request('GET', config('wemesh.weather.url'), [
                'headers' => [
                    'Authorization' => config('wemesh.weather.appkey')
                ],
                'query' => [
                    'city' => config('wemesh.weather.city')
                ]
            ])->getBody()->getContents();
        } catch (GuzzleException $e) {
            return false;
        }
    }
}