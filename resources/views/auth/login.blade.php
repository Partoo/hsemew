@extends('layouts.auth')

@section('content')
    {{--<h4 class="text-center" style="color: rgb(130, 130, 130);"><i class="fa fa-user"></i> 用户登录</h4>--}}

    {{--<form class="el-form" method="POST" role="form" action="{{ url('/login') }}" style="margin-bottom: 0;">--}}
    {{--{{ csrf_field() }}--}}
    {{--<div class="el-form-item el-form-item--feedback is-required"><label for="mobile" class="el-form-item__label"--}}
    {{--style="width: 100px;">手机号码</label>--}}
    {{--<div class="el-form-item__content" style="margin-left: 100px;">--}}
    {{--<div class="el-input">--}}
    {{--<input type="text" autocomplete="off" placeholder="输入您的手机号码" required--}}
    {{--class="el-input__inner" name="mobile" value="{{ old('mobile') }}"></div>--}}
    {{--</div>--}}

    {{--@if ($errors->has('mobile'))--}}
    {{--<p class="text-red">{{ $errors->first('mobile') }}</p>--}}
    {{--@endif--}}
    {{--</div>--}}
    {{--<div class="el-form-item el-form-item--feedback is-required"><label for="password" class="el-form-item__label"--}}
    {{--style="width: 100px;">登录密码</label>--}}
    {{--<div class="el-form-item__content" style="margin-left: 100px;">--}}
    {{--<div class="el-input"><input type="password" autocomplete="off" placeholder="输入登录密码" required=""--}}
    {{--class="el-input__inner" name="password" value="{{ old('password') }}">--}}
    {{--</div>--}}
    {{--</div>--}}
    {{--@if ($errors->has('password'))--}}
    {{--<p class="text-red">{{ $errors->first('password') }}</p>--}}
    {{--@endif--}}
    {{--</div>--}}
    {{--<div class="el-row">--}}
    {{--<div class="el-col el-col-12" style="margin-bottom: 10px">--}}
    {{--<div class="input-group">--}}
    {{--<input type="checkbox" id="rememberMe" name="remember">--}}
    {{--<label for="rememberMe">自动登录？</label>--}}
    {{--</div>--}}
    {{--</div>--}}
    {{--<div class="el-col el-col-12">--}}
    {{--TODO:部署时将跳转http改成https--}}
    {{--<a href="https://open.weixin.qq.com/connect/qrconnect?appid=wx3ed1a94156a7ff0c&redirect_uri=http%3A%2F%2Fwx.wemesh.cn%2Fcallback&response_type=code&scope=snsapi_login&state=demo#wechat_redirect"--}}
    {{--class="pull-right"><i class="fa fa-wechat"></i> 使用微信登录--}}
    {{--</a>--}}
    {{--</div>--}}
    {{--</div>--}}
    {{--<div class="el-row" style="margin-left: -7.5px; margin-right: -7.5px;">--}}
    {{--<div class="el-col el-col-24" style="padding-left: 7.5px; padding-right: 7.5px;">--}}
    {{--<button type="submit" class="btn btn-block"><i class="fa fa-sign-in"></i>--}}
    {{--登录系统--}}
    {{--</button>--}}
    {{--</div>--}}
    {{--</div>--}}
    {{--<div class="el-row" style="margin-top: 20px;">--}}
    {{--<div class="el-col el-col-12"><a to="oauth.wechat"><i class="fa fa-wechat"></i> 使用微信登录--}}
    {{--</a></div>--}}
    {{--<div class="el-col el-col-12"><a to="reset" class="align-right" style="color: rgb(136, 136, 136);"><i--}}
    {{--class="fa fa-key"></i>--}}
    {{--找回登录密码--}}
    {{--</a></div>--}}
    {{--</div>--}}
    {{--</form>--}}

    <login></login>

@endsection
