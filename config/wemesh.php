<?php

return [
    'site_name' => '维脉事-WeMesh',
    'meta' => [
        'keywords' => 'WeMesh,维脉事,青岛世达奥科网络技术有限公司,办公一体化',
        'description' => '维脉事-Wemesh是一个基于微信进行一体化办公的平台'
    ],
    'default_avatar' => env('DEFAULT_AVATAR') ?: '/img/avatar.png',
    'favicon' => env('FAVICON') ?: '/favicon.ico',
    'plugin_namespace_root' => env('PLUGIN_NAMESPACE_ROOT') ?: 'App\\Plugins\\',
    'weather' => [
        'url' => 'http://jisutqybmf.market.alicloudapi.com/weather/query',
        'appkey' => env('ALI_WEATHER_AK'),
        'city' => '胶州市'
    ]
];