<?php
/**
 * 功能：
 *
 * @project     wemesh
 * @author      Partoo
 * @copyright   2018 StarIO Network Technology Company
 * @link        http://www.stario.net
 */

namespace App\Services\Captcha\GeeTest;


class Geetest
{
    public static function init()
    {
        $Gt = new GeetestLib(env('GEETEST_ID'), env('GEETEST_KEY'));

        $data = [
            'user_id' => env('GEETEST_ID'),
            'client_type' => 'web',
            'ip_address' => request()->ip()
        ];

        $status = $Gt->pre_process($data, 1);

        session()->put('gtserver', $status);
//        session()->put('gt_userid', $data['user_id']);

        return response()->json(json_decode($Gt->get_response_str()));
    }

    public static function verify()
    {
        $Gt = new GeetestLib(env('GEETEST_ID'), env('GEETEST_KEY'));

        $data = [
            'user_id' => env('GEETEST_ID'),
            'client_type' => 'web',
            'ip_address' => request()->ip()
        ];
        if (session('gtserver') == 1) {
            $result = $Gt->success_validate(request()->input('geetest_challenge'), request()->input('geetest_validate'), request()->input('geetest_seccode'), $data);
            if ($result) {
                return response()->json(['success' => true]);
            }
            return response()->json(['success' => false]);
        }

        $result = $Gt->fail_validate(request()->input('geetest_challenge'), request()->input('geetest_validate'), request()->input('geetest_seccode'));

        if ($result) {
            return response()->json(['success' => true]);
        }
        return response()->json(['success' => false]);
    }
}