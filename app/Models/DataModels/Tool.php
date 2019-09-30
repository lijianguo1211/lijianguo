<?php

namespace App\Models\DataModels;

use Encore\Admin\Grid;
use Illuminate\Database\Eloquent\Model;

class Tool extends Model
{
    public $fillable = [
        'name',
        'desc',
        'image',
        'url',
    ];

    /**
     * Notes: 得到插件
     * Name: getTools
     * User: LiYi
     * Date: 2019/9/29
     * Time: 23:17
     * @return array
     */
    public function getTools()
    {
        try {
            $result = static::orderByDesc('sort')->get()->toArray();
        } catch (\Exception $e) {
            $result = [];
            \Log::error('查询插件失败：' . $e->getMessage());
        }
        return $result;
    }


    public function grid()
    {
        $grid = new Grid(new static());
        $grid->column('id', __('ID'));
        $grid->column('name', __('插件名'));
        $grid->column('desc', __('简介'));
        $grid->column('image', __('图片'));
        $grid->column('url', __('地址'));
        $grid->column('sort', __('排序'));
        $grid->column('updated_at', __('修改时间'));
        return $grid;
    }
}
