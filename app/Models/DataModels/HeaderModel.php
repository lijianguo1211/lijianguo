<?php
/**
 * Created by PhpStorm.
 * User: liyi
 * Date: 2019/4/18
 * Time: 14:19
 */

namespace App\Models\DataModels;

use Encore\Admin\Grid;

/**
 * Notes:php artisan admin:make HeaderController --model=App\Models\DataModels\HeaderModel
 * User: LiYi
 * Date: 2019/5/29
 * Time: 23:20
 * Class HeaderModel
 * @package App\Models\DataModels
 */
class HeaderModel extends Model
{
    protected $table = "headers";

    protected $primaryKey = 'id';

    protected $fillable = ['title','url','priority','type'];

    /**
     * Notes: 导航表单提交
     * Name: store
     * User: LiYi
     * Date: 2019/6/4
     * Time: 22:13
     * @param array $data
     * @return array
     */
    public function store(array $data)
    {
        try {
            $res = $this::create($data);
            $result = ['status' => $res->id, 'info' => '导航添加成功。。。'];
        } catch (\Exception $e) {
            self::errorMessgegLog($e, '导航');
            $result = ['status' => 0, 'info' => '导航添加成功。。。'];
        }

        return $result;
    }

    /**
     * @param bool $first
     * @param int $where
     * @return mixed
     */
    public function getHeaders($first = false,int $where = 0)
    {
        if ($first == false) {
            $result = $this->select('title','url','type','priority')->where('id','=',$where)->first();
        } else {
            $result = $this->orderBy('created_at','DESC')->get()->toArray();
        }
        return $result;
    }

    /**
     * @param int $id
     * @param array $data
     * @return bool
     */
    public function submitEdit(int $id, array $data)
    {
        try {
            $result = $this->where('id','=',$id)->update($data);
        } catch (\Exception $e) {
            \Log::info('header 更新数据失败：'.$e->getMessage());
            $result = false;
        }

        return $result;
    }

    /**
     * @param int $id
     * @return bool
     */
    public function deletes(int $id)
    {
        try {
            $result = $this->where('id','=',$id)->delete();
        } catch (\Exception $e) {
            \Log::error('删除每日一句失败：'.$e->getMessage());
            $result = false;
        }

        return $result;
    }

    public function getIndexHeader(int $type=0)
    {
        $result = $this->select('title','url')->where('type','=',$type)->orderBy('priority','DESC')->limit(5)->get()->toArray();

        return $result;
    }

    /**
     * Notes: 导航列表
     * Name: grid
     * User: LiYi
     * Date: 2019/6/4
     * Time: 21:25
     * @return Grid
     */
    public function grid()
    {
        $grid = new Grid($this);

        $grid->column('id', '主键')->sortable();
        $grid->column('title', '标题');
        $grid->column('url', 'url')->display(function($url) {
            return env('APP_URL') . '/' . $url;
        })->link();
        $grid->column('priority', '排序')->sortable();
        $grid->column('type', '显示位置')->display(function($type) {
            return $type === 0 ? '头部导航' : '飞机链接';
        })->sortable();
        $grid->column('created_at', '创建时间');
        $grid->column('updated_at', '修改时间');

        return $grid;
    }
}
