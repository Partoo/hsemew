<!DOCTYPE html>
<html lang="utf-8">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="author" content="Partoo">
    <meta name="description" content="维脉事 - 企事业单位微信一体化系统">
    <meta name="keywords" content="wemesh,维脉事,微信一体化">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Wemesh-维脉事</title>
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">

    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    @if (Auth::check())
        <script>
            window.WEMESH = <?php echo json_encode([
                'passed' => true,
                'userAvatar' => Auth::user()->avatar,
                'username' => Auth::user()->nickname
            ]); ?>
        </script>
    @else

        <script>
            window.WEMESH = <?php echo json_encode([
                'csrfToken' => csrf_token(),
                'appid' => env('WECHAT_WEMESH_WEB_APPID'),
                'redirect' => env('WECHAT_WEMESH_WEB_REDIRECT')
            ]); ?>
        </script>
    @endif
</head>
<body>
<div id="app">
    <land></land>
</div>

<!-- Scripts -->
<script src="{{ asset('js/landing.js') }}"></script>
</body>
</html>

