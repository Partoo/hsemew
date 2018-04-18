@extends('layouts.auth')

@section('content')
    <register></register>
@endsection
@section('prependJs')
    <script>
        window.WxRespond = {!! $session !!}
    </script>
@endsection