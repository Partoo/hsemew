<?php

namespace App\Http\Controllers;

use App\Services\App\AppRepository;

class AppController extends Controller
{
    protected $plugin;

    public function __construct(PluginRepository $plugin)
    {
        $this->plugin = $plugin;

    }

    public function index()
    {
        return $this->plugin->scan();
    }


}
