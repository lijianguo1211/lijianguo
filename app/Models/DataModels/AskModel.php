<?php
/**
 * Created by PhpStorm.
 * User: liyi
 * Date: 2019/5/9
 * Time: 10:23
 */

namespace App\Models\DataModels;

use Encore\Admin\Grid;

/**
 * Notes:php artisan admin:make AskController --model=App\Models\DataModels\AskModel
 * User: LiYi
 * Date: 2019/5/29
 * Time: 23:23
 * Class AskModel
 * @package App\Models\DataModels
 */
class AskModel extends Model
{
    /**
     * 表名
     * @var string
     */
    protected $table = "ask";

    /**
     * 主键
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     * 白名单
     * @var array
     */
    protected $fillable = ['title','id','content','user_id','label'];

    /**
     * 添加
     * @param array $data
     * @return bool
     */
    public function add(array $data)
    {
        try {
            $result = $this::create($data);
        } catch (\Exception $e) {
            \Log::error('发布提问失败：'.$e->getMessage());
            $result = false;
        }
        return $result;
    }

    /**
     * 得到一页
     * @return array
     */
    public function getIndexs():array
    {
        $result = $this->select('ask.title','ask.id','users.username','ask.label','ask.created_at','ask.reading_value')
            ->join('users','ask.user_id','=','users.id')
            ->limit(10)
            ->orderBy('created_at','desc')
            ->get()->toArray();
        foreach ($result as $k => $item) {
            $result[$k]['label'] = explode(',',$item['label']);
        }

        return $result;
    }

    /**
     * 得到一条
     * @param int $id
     * @return mixed
     */
    public function getindex(int $id)
    {
        try {
            $this::where('id','=',$id)->increment('reading_value');
        } catch (\Exception $e) {
            \Log::error('阅读量增加失败：'.$e->getMessage());
        }

        $result = $this->select('ask.title','ask.id','ask.content','users.username','ask.label','ask.created_at','ask.reading_value','users.id')
            ->join('users','ask.user_id','=','users.id')
            ->where('ask.id','=',$id)
            ->first();
        $result['label'] = explode(',',$result['label']);
        $result['content'] =  EndaEditor::MarkDecode($result['content']);
        return $result;
    }

    public function grid()
    {
        $grid = new Grid($this);

        $grid->column('id', '主键');
        $grid->column('user_id', '用户')->display(function($user_id) {
            return UserModel::where('id', $user_id)->value('username');
        });
        $grid->column('title', '标题');
        $grid->column('label', '标签')->display(function($label){
            return explode(',', $label);
        })->label();
        $grid->column('reading_value', '阅读量')->badge();
        $grid->column('content', '简介')->display(function($content) {
            return mb_substr($content, 0, 30).'...';
        });
        $grid->column('created_at', '创建时间');
        $grid->column('updated_at', '修改时间');

        $grid->filter(function($filter){

            // 去掉默认的id过滤器
            $filter->disableIdFilter();

            // 在这里添加字段过滤器
            $filter->like('title', '标题');

        });

        return $grid;
    }
}
