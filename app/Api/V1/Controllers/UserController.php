<?php
/**
 * Notes:
 * File name:UserController
 * Create by: Jay.Li
 * Created on: 2019\7\15 0015 14:24
 */


namespace App\Api\V1\Controllers;

use App\User;

class UserController extends BaseController
{
    public function index()
    {
        return User::all();
    }

    public function show($id)
    {
        $user = User::findOrFail($id);

        /**
         * 响应数组
         */
        return $this->response->array($user->toArray());

        /**
         *
         * 响应一个元素
         */

        /**
         * 响应一个元素集合
         */

        /**
         * 分页响应
         */
    }
}
