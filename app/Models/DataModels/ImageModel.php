<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019-04-21
 * Time: 22:04
 */

namespace App\Models\DataModels;


use App\Admin\Extensions\SwitchButton;
use Encore\Admin\Grid;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Tests\Models\Tag;

/**
 * Notes:php artisan admin:make ImageController --model=App\Models\DataModels\ImageModel
 * User: LiYi
 * Date: 2019/5/29
 * Time: 23:21
 * Class ImageModel
 * @package App\Models\DataModels
 */
class ImageModel extends Model
{
    protected $table = "image";

    protected $primaryKey = 'id';

    protected $fillable = ['id', 'user_id', 'image_path', 'title', 'content', 'label', 'tag_id'];

    public function insertImg($fileObj)
    {
        $file = public_path('/upload/hotspot/');

        if (!is_dir($file)) {
            mkdir($file, 0755, true);
        }
    }

    public function valiImg()
    {

    }

    public function addImg(array $data)
    {
        try {
            $result = $this::create($data);
        } catch (\Exception $e) {
            \Log::error('热点图片添加失败：'.$e->getMessage());
            $result = false;
        }

        return $result;
    }

    public function getHeaderIndex()
    {
        $result = $this->select('users.username','types.name','image.title','image.content','image.label','image.image_path')
            ->join('users','image.user_id','=','users.id')
            ->join('types','image.label','=','types.id')
            ->where('image.is_to_examine','=',0)
            ->where('image.is_delete','=',0)
            ->orderBy('image.created_at','DESC')
            ->limit(2)
            ->get()
            ->toArray();

        return $result;
    }

    /**
     * Notes: 图片列表展示
     * Name: grid
     * User: LiYi
     * Date: 2019/6/14
     * Time: 22:35
     * @return Grid
     */
    public function grid()
    {
        $grid = new Grid($this);

        $grid->column('id','Id');
        $grid->column('title','标题');
        $grid->column('content','描述')->display(function($content) {
            return "<span title='{$content}'>" . str_limit($content, 20, '...') ."</span>";
        });
        $grid->column('label','分类')->display(function($label) {
            return self::getLabel($label);
        })->label();

        $grid->column('tag_id', '标签')->label();

        $grid->column('user_id','作者')->display(function($user_id) {
            return self::getUser($user_id);
        })->badge('primary');

        $grid->column('image_path','图片地址')->display(function($image_path) {
            return "<span title='{$image_path}'>" . str_limit($image_path, 20, '...') ."</span>";

        });
        $grid->column('is_to_examine','审核')->display(function($is_to_examine) {

        });
        $grid->column('to_examine_content','原因')->badge();
        $grid->column('is_delete','是否删除')->display(function($is_delete) {
            return (new SwitchButton(
                $this->id,
                '',
                'is_delete',
                $is_delete
            ))->returnHtml();
        });

        $grid->column('created_at','添加时间');
        $grid->column('updated_at','修改时间');

        return $grid;
    }

    /**
     * Notes: 热点图片上传
     * Name: imageStore
     * User: LiYi
     * Date: 2019/6/14
     * Time: 22:35
     * @param array $tags
     * @param array $image
     * @return array
     */
    public function imageStore(array $tags, array $image):array
    {
        DB::beginTransaction();
        try {
            TypeModel::create($tags);

            $this::create($image);

            DB::commit();

            $result = ['status' => true, 'info' => '热点图片上传成功'];
        } catch (\Exception $e) {
            self::errorMessgegLog($e, '热点图片');
            $result = ['status' => false, 'info' => $e->getMessage()];
            DB::rollBack();
        }

        return $result;
    }

    /**
     * Notes: 热点图片删除
     * Name: destory
     * User: LiYi
     * Date: 2019/6/14
     * Time: 22:48
     * @param int $id
     * @return array
     */
    public function destory(int $id):array
    {
       try {
           $data = $this::where('id', $id)->first();
           $data->is_delete = 1;
           $data->save();
           $result = ['status' => true, 'info' => '热点图片删除成功'];
       } catch (\Exception $e) {
           self::errorMessgegLog($e, '热点图片');
           $result = ['status' => false, 'info' => $e->getMessage()];
       }

       return $result;
    }
}
