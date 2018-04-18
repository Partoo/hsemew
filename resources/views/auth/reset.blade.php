@extends('layouts.auth')

@section('content')
    <reset></reset>
@endsection
@section('prependJs')
    <script>
        window.WxRespond = {!! $session !!}
    </script>
@stop

