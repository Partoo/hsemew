<?php

namespace App\Http\Middleware;

use Closure;

class WxRequest
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (!$request->session()->has('wx_response') && $request->path() != '/') {
            return response()->redirectTo('/');
        }
        return $next($request);
    }
}
