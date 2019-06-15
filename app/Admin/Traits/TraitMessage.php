<?php


namespace App\Admin\Traits;


use App\Models\DataModels\TypeModel;
use App\Models\DataModels\UserModel;

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

    public function getType($pid=0,$target = [])
    {
        $type = TypeModel::where('pid','=',$pid)->get();
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

    public function getSelectType()
    {
        $array = [];
        foreach ($this->getType() as $k => $item) {
            $array[$item->id] = str_repeat('__', $item->level) . $item->name;
        }

        return $array;
    }

    public function getConfigHeader()
    {
        $data = arsort(config('config.header'));
        foreach ($data as $k => $item) {

        }
    }

    /**
     * Notes: 查询标签
     * Name: getLabel
     * User: LiYi
     * Date: 2019/6/12
     * Time: 22:29
     * @param int $id
     * @return string
     */
    public static function getLabel(int $id):string
    {
        $value = TypeModel::where('id', $id)->value('name');

        if (!empty($value)) {
            return $value;
        }

        return '未知';
    }

    /**
     * Notes: 查询用户名
     * Name: getUser
     * User: LiYi
     * Date: 2019/6/12
     * Time: 22:32
     * @param int $id
     * @return string
     */
    public static function getUser(int $id):string
    {
        $value = UserModel::where('id', $id)->value('username');

        if (!empty($value)) {
            return $value;
        }

        return 'LiYi';
    }
}
