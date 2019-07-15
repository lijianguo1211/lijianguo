<?php


namespace App\Api\Middleware;

use Illuminate\Container\Container;
use Dingo\Api\Http\RateLimit\Throttle\Throttle;


class CustomThrottle extends Throttle
{
    public function match(Container $app)
    {
        // 在这里执行一些逻辑并根据是否返回 true 或 false
        // 你的条件与阀门匹配。
    }
}
