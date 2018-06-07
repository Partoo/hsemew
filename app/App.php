<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class App extends Model
{
    protected $guarded = ['id'];

    public function users()
    {
        return $this->morphedByMany('App\User', 'appable');
    }

    public function units()
    {
        return $this->morphedByMany('App\Unit', 'appable');
    }
}
