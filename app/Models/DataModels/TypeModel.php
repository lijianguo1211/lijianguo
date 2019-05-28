<?php
/**
 * Created by PhpStorm.
 * User: liyi
 * Date: 2019/4/17
 * Time: 17:07
 */

namespace App\Models\DataModels;

use Encore\Admin\Grid;

class TypeModel extends Model
{
    protected $table = "types";

    protected $primaryKey = 'id';

    protected $fillable = ['id','pid','name'];

    /**
     * @param int $pid
     * @param array $target
     * @return array
     */
    public function getType($pid=0,$target = [])
    {
        $type = $this->where('pid','=',$pid)->get();
        //$id = $type['type_id'];
        static $n = 1;
        foreach($type as $k => $v) {
            $v->level = $n;
            $target[$v->id] = $v;
            $n++;
            $target = $this->getType($v->id,$target);
            $n--;
        }
        return $target;
    }

    /**
     * @param $id
     * @return mixed
     */
    public function getFirstType($id)
    {
        $data = $this->select('id','pid','name')->where('id','=',$id)->first();

        return $data;
    }

    /**
     * @param $typeArray
     * @param $id
     * @return mixed
     */
    public function updateType($typeArray,$id)
    {
        $result = $this->where(['id'=>$id])->update($typeArray);

        return $result;
    }

    public function deteleType($id)
    {
        //先查询是否有记录,在查询它下面是否有子分类,如果有子分类,就给一个异常
        $type = $this->getFirstType($id);

        if(empty($type)) {
            return false;
        }

        $type_child = $this->where(['pid'=>$type['id']])->first();

        if(!empty($type_child)) {
            return false;
        }
        try {
            $data = $this->where(['id'=>$id])->delete();
        } catch (\Exception $e) {
            \Log::error('删除分类失败：'.$e->getMessage());
        }
        return $data;
    }


    /**
     * Notes:
     * Name: grid
     * User: LiYi
     * Date: 2019/5/28
     * Time: 22:35
     * @return Grid
     */
    public function grid()
    {
        $grid = new Grid($this);

        $grid->column('id','ID');
        $grid->column('name','分类名');
        $grid->column('pid','父级分类名')->display(function($pid){
            return self::where('id','=',$pid)->value('name');
        });
        $grid->column('created_at','创建时间');
        $grid->column('updated_at','修改时间');


        return $grid;
    }

}
