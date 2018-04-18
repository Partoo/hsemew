<?php
/**
 * 功能：腾讯滑动验证静态类
 *
 * @project     wemesh
 * @author      Partoo
 * @copyright   2018 StarIO Network Technology Company
 * @link        http://www.stario.net
 */

namespace App\Services\Captcha;


use GuzzleHttp\Client;

class TencentCaptcha
{
    /**返回1为成功
     * @param array $data
     * @return string
     */
    public static function verify(array $data)
    {
        $ticket = $data['ticket'];
        $rand = $data['rand'];

        $client = new Client();

        $res = $client->post('https://ssl.captcha.qq.com/ticket/verify', [
            'form_params' => [
                'aid' => env('TENCENT_CAPTCHA_AID', ''),
                'AppSecretKey' => env('TENCENT_CAPTCHA_ASK', ''),
                'Ticket' => $ticket,
                'Randstr' => $rand,
                'UserIP' => request()->ip()
            ]
        ]);
        $res = json_decode($res->getBody()->getContents());
        return $res->response;


    }
}