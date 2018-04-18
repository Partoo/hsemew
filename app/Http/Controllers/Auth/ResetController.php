<?php

namespace App\Http\Controllers\Auth;

use App\Services\Captcha\GeeTest\Geetest;
use App\Services\Captcha\TencentCaptcha;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Validator;

class ResetController extends Controller
{
    public function showResetForm()
    {
        $session = session()->get('wx_response');
        return view('auth.reset')->with('session', json_encode($session));
    }

    public function verify(Request $request)
    {
//

//        $ticket = $request->input('ticket');
//        $rand = $request->input('rand');
//        $data = ['ticket' => $ticket, 'rand' => $rand];
//        $result = TencentCaptcha::verify($data);
//        if ($result === '1') {
//            return response()->json(['messages' => '验证通过'], 200);
//        }
//        return response()->json(['errors' => '验证不成功，请重试'], 422);

        return Geetest::verify($request);
    }

    public function reset(Request $request)
    {
        dd($request->all());
        $messages = [
//            'mobile.exists' => '该手机号码尚未注册，请返回登录',
//            'uid.exists' => '未发现该微信号，请重新返回扫描微信二维码',
            'password.min' => '密码位数不能少于6位'
        ];
        $validator = Validator::make($request->all(), [
            'mobile' => 'required|string|max:12|exists:users,mobile',
//            'uid' => 'required|exists:users,union_id',
            'authcode' => 'required|string',
//            'password' => 'required|string|confirmed|min:6',
        ], $messages);

        $cache = Cache::get($request->input('mobile'));
        if ($cache !== $request->input('authcode')) {
            return response()->json([
                'errors' => '手机验证码不正确，请检查后重新输入'
            ], 422);
        }

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()->first()], 422);
        }

        User::where('mobile', $request->input('mobile'))->update(['mobile' => null]);

        $user = User::where('union_id', $request->input('uid'))->updateOrCreate([
            'password' => bcrypt($request->input('password')),
            'mobile' => $request->input('mobile'),
            'union_id' => $request->input('uid')
        ]);


        if ($user) {
            auth()->login($user);
            return redirect('/home');
        }

        return response()->json(['errors' => '更新失败，请联系管理员'], 500);


//        return $this->update($request->all());

    }
}
