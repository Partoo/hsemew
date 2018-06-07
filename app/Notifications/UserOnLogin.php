<?php
/**
 * 功能：
 *
 * @project     wemesh
 * @author      Partoo
 * @copyright   2018 StarIO Network Technology Company
 * @link        http://www.stario.net
 */

namespace App\Notifications;


use Carbon\Carbon;

class UserOnLogin extends BaseNotify
{
    public function toArray($notifiable)
    {
        return [
            'title' => Carbon::now() . ' 在' . request()->ip() . '登录系统成功',
            'content' => request()->header('User-Agent'),
            'type' => 'info'
        ];
    }
}