<?php

namespace App\Http\Controllers;

use App\Repository\Eloquent\UserRepository;
use App\Services\FileManager\CloudManager;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Socialite\Facades\Socialite;
use Overtrue\Socialite\SocialiteManager;

class AuthController extends Controller
{
    protected $user;

    public function __construct(UserRepository $user)
    {
        $this->user = $user;
        $this->middleware('guest')->except('logout');
    }

    public function showLoginForm()
    {
        return view('auth.login');
    }


    public function register(Request $request)
    {

        $messages = [
            'mobile.required' => '请输入手机号码',
            'mobile.unique' => '该手机号码已被绑定，您可以点击下方的重新绑定进行重置',
            'authcode.require' => '手机验证码需要填写',
            'password.min' => '密码请不要少于6个字符'
        ];
        $validator = Validator::make($request->all(), [
            'mobile' => 'required|string|max:12|unique:users',
            'authcode' => 'required|string',
            'password' => 'required|string|confirmed|min:6',
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

        // 获取session中的微信用户资料
        $wx_request = $request->session()->get('wx_request');
        $avatar = $this->saveAvatar($wx_request['headimgurl'], $request->input('mobile'));
        return $this->createUser([
            'mobile' => $request->input('mobile'),
            'password' => bcrypt($request->input('password')),
            'nickname' => $wx_request['nickname'],
            'gender' => $wx_request['sex'],
            'union_id' => $wx_request['unionid'],
            'open_id' => $wx_request['openid'],
            'area' => $wx_request['country'] . $wx_request['province'] . $wx_request['city'],
            'avatar' => $avatar
        ]);
    }

    public function showRegistrationForm(Request $request)
    {
        $session = $request->session()->get('wx_response');
        dd($session);
        return view('auth.register')->with('session', json_encode($session));
    }

//    public function reset(Request $request)
//    {
//        $messages = [
//            'mobile.exists' => '该手机号码尚未注册',
//            'password.min' => '密码位数不能少于6位'
//        ];
//        $validator = Validator::make($request->all(), [
//            'mobile' => 'required|string|max:12|exists:users,mobile',
//            'authcode' => 'required|string',
//            'password' => 'required|string|confirmed|min:6',
//        ], $messages);
//
//        if ($validator->fails()) {
//            return response()->json(['errors' => $validator->errors()->first()], 422);
//        }
//
//        return $this->update($request->all());
//
//    }

//    public function showResetForm()
//    {
//        return view('auth.reset');
//    }


//    protected function create(array $data)
//    {
//        $cache = Cache::get($data['mobile']);
//        if ($cache !== $data['authcode']) {
//            return response()->json([
//                'errors' => '手机验证码不正确，请检查后重新输入'
//            ], 422);
//        }
//        $this->user->create([
//            'mobile' => $data['mobile'],
//            'password' => bcrypt($data['password']),
//        ]);
//        return response()->json([
//            'message' => '注册成功，请进行登录',
//
//        ]);
//    }

//    protected function update(array $data)
//    {
//        $cache = Cache::get($data['mobile']);
//        if ($cache !== $data['authcode']) {
//            return response()->json([
//                'errors' => '手机验证码不正确，请检查后重新输入'
//            ], 422);
//        } else {
//            $this->user
//                ->where('mobile', '=', $data['mobile'])
//                ->update([
//                    'password' => bcrypt($data['password'])
//                ]);
//            return response()->json(['message' => '密码已成功修改，请重新登录']);
//        }
//
//    }


//    protected function validateLogin(Request $request)
//    {
//        $messages = [
//            'union_id.required' => '请刷新二维码并用微信扫描',
//            'union_id.exists' => '该微信号号尚未注册，您可以用它注册成为新用户',
//            'password.min' => '密码请不要少于6个字符'
//        ];
//        $this->validate($request, [
//            $this->username() => [
//                'required',
//                Rule::exists('users')->where(function ($q) {
//                    $q->where('union_id', request()->input('unionId'));
//                })
//            ],
//            'password' => 'required|string|min:6',
//        ], $messages);
//    }

//
    protected function attemptLogin()
    {
        $wx_request = session()->get('wx_request');
        $user = $this->user->findBy('union_id', $wx_request['unionid']);
        // 如果当前session中找不到该unionid，说明是新用户，去注册绑定
        if ($user->isEmpty()) {
            return redirect('register');
        }
        // 已注册用户直接去后台页
        return response()->redirectTo('/home');

    }

    protected function createUser(array $data)
    {
        $this->user->create($data);
        return response()->json([
            'message' => '注册成功，请进行登录',

        ]);
    }

    protected function saveAvatar($url, $mobile)
    {
        $disk = new CloudManager();
        return $disk->saveRemoteFile($url, "/$mobile/images/avatar/");
//        return 'https://static.wemesh.cn/images/avatar/' . $name;
    }

//    protected function sendFailedLoginResponse()
//    {
//        return response()->json(['errors' => '手机或密码输入不正确，请重试'], 422);
//    }
}
