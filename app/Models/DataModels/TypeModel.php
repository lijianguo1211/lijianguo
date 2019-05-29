<?php
/**
 * Created by PhpStorm.
 * User: liyi
 * Date: 2019/4/17
 * Time: 17:07
 */

namespace App\Models\DataModels;

use Encore\Admin\Grid;
use Illuminate\Support\Facades\DB;

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
     * Notes: 删除分类
     * Name: deteleType
     * User: LiYi
     * Date: 2019/5/29
     * Time: 22:03
     * @param int $id
     * @return bool
     */
    public function deteleType(int $id) :bool
    {
        //先查询是否有记录,在查询它下面是否有子分类,如果有子分类,就给一个异常
        DB::beginTransaction();
        try {
            $type = self::find($id);

            if(empty($type)) {
                throw new Exception('分类下还存在子分类，必须先删除子分类才');
            }

            $type_child = $this->where(['pid'=>$type['id']])->first();

            if(!empty($type_child)) {
                throw new Exception('分类不存在，删除失败');
            }
            $this->where(['id'=>$id])->delete();

            DB::commit();
            $result = true;
        } catch (\Exception $e) {
            $this->errorMessgegLog($e);
            DB::rollBack();
            $result = false;
        }
        return $result;
    }


    /**
     * Notes: 分类列表展示
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
            if ($pid === 0) {
                return '顶级分类';
            }
            return self::where('id','=',$pid)->value('name');
        });
        $grid->column('created_at','创建时间');
        $grid->column('updated_at','修改时间');

        return $grid;
    }

    /**
     * Notes: 分类表单提交
     * Name: store
     * User: LiYi
     * Date: 2019/5/29
     * Time: 22:04
     * @param array $type
     * @return bool
     */
    public function store(array $type):bool
    {
        DB::beginTransaction();
       try {
           self::create($type);
           DB::commit();
           $result = true;
       } catch (\Exception $e) {
           $this->errorMessgegLog($e);
           DB::rollBack();
           $result = false;
       }

       return $result;
    }

    /**
     * Notes: 编辑分类提交
     * Name: saves
     * User: LiYi
     * Date: 2019/5/29
     * Time: 22:04
     * @param array $type
     * @param int $id
     * @return bool
     */
    public function saves(array $type, int $id):bool
    {
        DB::beginTransaction();
        try {
            $result = self::find($id);
            $result->name = $type['name'];
            $result->pid = $type['pid'];
            DB::commit();
            $result = true;
        } catch (\Exception $e) {
            $this->errorMessgegLog($e);
            DB::rollBack();
            $result = false;
        }

        return $result;
    }

    /**
     * Notes: 错误消息日志记录
     * Name: errorMessgegLog
     * User: LiYi
     * Date: 2019/5/29
     * Time: 22:04
     * @param $e
     * @return mixed
     */
    protected function errorMessgegLog($e)
    {
        return \Log::error('分类添加失败文件：'.$e->getFile().
            "\n分类添加失败行数：".$e->getLine().
            "\n分类添加失败代码：".$e->getCode().
            "\n分类添加失败原因：".$e->getMessage()
        );
    }

}
