<?php

namespace App\Models\DataModels;

use Encore\Admin\Grid;
use Encore\Admin\Traits\AdminBuilder;
use Encore\Admin\Traits\ModelTree;/
/**
 * Notes: php artisan admin:make CityController --model=App\Models\DataModels\CityModel
 * User: LiYi
 * Date: 2019/6/15
 * Time: 23:57
 * Class CityModel
 * @package App\Models\DataModels
 */
class CityModel extends Model
{
    use ModelTree, AdminBuilder;

    protected $table = 'citys';

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        $this->setParentColumn('parent');
        $this->setOrderColumn('level');
        $this->setTitleColumn('name');
    }

    public function grid()
    {
        $grid = new Grid($this);

        $grid->column('id', '主键');

        $grid->column('name', '城市');

        $grid->column('parent', '关系');

        $grid->column('level', '等级');

        $grid->column('created_at', '创建时间');
        $grid->column('updated_at', '修改时间');

        return $grid;
    }
}
