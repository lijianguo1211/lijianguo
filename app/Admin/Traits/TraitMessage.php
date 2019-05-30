<?php


namespace App\Admin\Traits;


trait TraitMessage
{
    /**
     * Notes: 错误日志记录格式
     * Name: errorMessgegLog
     * User: LiYi
     * Date: 2019/5/30
     * Time: 22:36
     * @param $e
     * @return mixed
     */
    public static function errorMessgegLog($e, string $type)
    {
        return \Log::error($type.'添加失败文件：'.$e->getFile().
            "\n分类添加失败行数：".$e->getLine().
            "\n分类添加失败代码：".$e->getCode().
            "\n分类添加失败原因：".$e->getMessage()
        );
    }
}
