<?php

namespace App\Http\Controllers\Auth;

use App\Repository\Eloquent\UserRepository;
use App\Services\FileManager\CloudManager;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    protected $user;

    public function __construct(UserRepository $user)
    {
        $this->user = $user;

    }

    public function showRegistrationForm(Request $request)
    {
        // 此处不用$request->session()->pull('wx_response')的原因是用户可能由此页跳转到解绑手机，清除session配合后面的forget方法
        $session = $request->session()->get('wx_response');
        return view('auth.register')->with('session', json_encode($session));
    }

    public function register(Request $request)
    {
        $messages = [
            'mobile.required' => '请输入手机号码',
            'authcode.require' => '手机验证码需要填写',
//            'password.min' => '密码请不要少于6个字符'
        ];
        $validator = Validator::make($request->all(), [
            'mobile' => 'required|string|max:12',
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

        $mobile = $request->input('mobile');

        // 提示一下
//        if ($this->user->exist('mobile', $mobile) && $request->input('submitType') === 'register') {
//            return response()->json([
//                'errors' => '该手机号码已被其它微信号绑定，建议您使用原微信号扫描登录。'
//            ], 406);
//        }

        if ($this->user->exist('mobile', $mobile) && $request->input('submitType') === 'rebind') {
            $user = $this->user->where('mobile', '=', $mobile)->first();
            $user->mobile = null;
            $user->save();
        }
        // 获取session中的微信用户资料
        $wx_request = $request->all();
        // 清除期间的session
        session()->forget('wx_response');

        $avatar = $this->saveAvatar($wx_request['headimgurl'], $request->input('mobile'));
        $user = $this->user->create([
            'mobile' => $request->input('mobile'),
//            'password' => bcrypt($request->input('password')),
            'nickname' => $wx_request['nickname'],
            'gender' => $wx_request['sex'],
            'union_id' => $wx_request['unionid'],
            'open_id' => $wx_request['openid'],
            'area' => $wx_request['country'] . $wx_request['province'] . $wx_request['city'],
            'avatar' => $avatar
        ]);
        if ($user) {
            Auth::loginUsingId($user->id);
            return response()->json(['message' => '注册成功，现在可以进入后台管理了'], 200);
        }
        return response()->json(['errors' => '注册失败，请重新尝试'], 500);
    }

    protected function saveAvatar($url, $mobile)
    {
        $disk = new CloudManager();
        return $disk->saveRemoteFile($url, "/$mobile/images/avatar/");
    }
}
