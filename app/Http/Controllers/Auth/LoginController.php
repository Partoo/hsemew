<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Repository\Eloquent\UserRepository;
use Overtrue\Socialite\SocialiteManager;

class LoginController extends Controller
{
    protected $user;

    public function __construct(UserRepository $user)
    {
        $this->user = $user;
        $this->middleware('guest')->except('logout');
    }

    public function handleCallback()
    {
        $config = [
            'wechat' => [
                'client_id' => env('WECHAT_WEMESH_WEB_APPID'),
                'client_secret' => env('WECHAT_WEMESH_WEB_SECRET'),
                'redirect' => urlencode('http://wx.wemesh.cn/') . env('WECHAT_WEMESH_WEB_CALLBACK')
            ]
        ];

        $socialite = new SocialiteManager($config);
        $user = $socialite->driver('wechat')->scopes(['snsapi_login'])->user();
        $response = $user->original;

        return $this->attemptLogin($response);
    }

    protected function attemptLogin($response)
    {
        $user = $this->user->findBy('union_id', $response['unionid'], ['id']);
        if ($user->isNotEmpty()) {
            auth()->loginUsingId($user->first()->id);
            return redirect()->to('/home');
        }

        session()->put('wx_response', $response);
        return redirect('/register');

    }

    public function logout()
    {
        \Auth::logout();
        return redirect('/');
    }
}
