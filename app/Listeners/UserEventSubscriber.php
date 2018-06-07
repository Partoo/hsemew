<?php

namespace App\Listeners;


use App\Notifications\UserOnLogin;
use Carbon\Carbon;

class UserEventSubscriber
{
    public function onUserLogin($event)
    {
        $event->user->notify(new UserOnLogin);
    }

    public function onUserRegister($event)
    {
        $user = $event->user;
        $logs = $user->logs;
        $logs['ip'] = request()->ip();
        $logs['time'] = Carbon::now()->toDateTimeString();
        $logs['event'] = '注册成为WeMesh一员';
        $user->logs = $logs;
        $user->save();
    }

    public function subscribe($events)
    {
        $events->listen(
            'Illuminate\Auth\Events\Login',
            'App\Listeners\UserEventSubscriber@onUserLogin'
        );
        $events->listen(
            'Illuminate\Auth\Events\Register',
            'App\Listeners\UserEventSubscriber@onUserRegister'
        );
    }
}
