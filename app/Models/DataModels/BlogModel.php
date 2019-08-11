<?php
/**
 * Created by PhpStorm.
 * User: liyi
 * Date: 2019/4/16
 * Time: 17:35
 */

namespace App\Models\DataModels;

use Encore\Admin\Grid;
use Illuminate\Support\Facades\DB;

/**
 * Notes:php artisan admin:make BlogController --model=App\Models\DataModels\BlogModel
 * User: LiYi
 * Date: 2019/5/29
 * Time: 23:24
 * Class BlogModel
 * @package App\Models\DataModels
 */
class BlogModel extends Model
{
    protected $table = "blogs";

    protected $primaryKey = 'id';

    protected $fillable = ['title', 'info', 'label', 'user_id', 'tag_id'];

    /**
     * Notes:
     * Name: blogContent
     * User: LiYi
     * Date: 2019/6/2
     * Time: 19:58
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function blogContent()
    {
        return $this->hasOne(BlogContentModel::class, 'blog_id');
    }

    public function tag()
    {
        return $this->belongsTo(TagModel::class);
    }

    /**
     * Notes: blog 列表
     * Name: getBlog
     * User: LiYi
     * Date: 2019/8/11
     * Time: 13:12
     * @param int $limit
     * @return mixed
     */
    public function getBlog(int $limit = 10)
    {
        $data = $this->select(
            'types.name',
            'blogs.id',
            'blogs.title',
            'blogs.created_at',
            'blogs.info',
            'users.username',
            'blogs.reading_volume',
            'blogs.info',
            'blogs.label'
        )
            ->join('types', 'blogs.label', '=', 'types.id')
            ->join('users', 'blogs.user_id', '=', 'users.id')
            ->where('blogs.delete_status', '=', 0)
            ->orderBy('blogs.created_at', 'desc')
            ->paginate($limit);
        return $data;
    }

    /**
     * Notes: 最新发布的文章推荐
     * Name: getRelease
     * User: LiYi
     * Date: 2019/8/11
     * Time: 13:18
     * @param int $number
     * @return mixed
     */
    public function getRelease(int $number = 6)
    {
        $data = $this->select('title', 'created_at', 'id')
            ->where('delete_status', '=', 0)
            ->orderBy('created_at', 'DESC')
            ->limit(6)
            ->get()
            ->toArray();

        return $data;
    }

    /**
     * Notes: 得到具体的文章
     * Name: getDetails
     * User: LiYi
     * Date: 2019/8/11
     * Time: 13:19
     * @param $id
     * @return mixed
     */
    public function getDetails($id)
    {
        try {
            self::where('id', '=', $id)->increment('reading_volume');
        } catch (\Exception $e) {
            \Log::error('阅读量更新失败');
        }
        $data = $this->select(
            'blogs.title',
            'blogs.id',
            'blogs.created_at',
            'blogs.user_id',
            'blogs.info',
            'users.username',
            'blog_content.content_md'
        )
            ->join('blog_content', 'blogs.id', '=', 'blog_content.blog_id')
            ->join('users', 'blogs.user_id', '=', 'users.id')
            ->where('blogs.id', '=', $id)
            ->where('blog_content.type', '=', 0)
            ->where('blogs.delete_status', '=', 0)
            ->first();
        return $data;
    }

    public function insertBlog(array $data, array $content)
    {
        $data['user_id'] = 1;
        $content['type'] = 0;
        $blogContent = new BlogContentModel();
        DB::beginTransaction();
        try {
            $gitId = $this->insertGetId($data);

            if ($gitId < 1) {
                $error = '写入得到文章ID失败';
                throw new \Exception($error);
            }

            $content['blog_id'] = $gitId;
            //dd($content);
            $result = $blogContent::create($content);
            DB::commit();
        } catch (\Exception $e) {
            \Log::error('文章写入失败：'.$e->getMessage());
            DB::rollback();
            $result = false;
        }

        return $result;
    }

    /**
     * 推荐阅读【阅读量排行取前六】
     * @return mixed
     */
    public function getValue()
    {
        $result = $this->select('id','title')
            ->where('delete_status','=','0')
            ->orderBy('created_at','DESC')
            ->limit(6)
            ->get()
            ->toArray();

        return $result;
    }

    /**
     * 由博客ID得到发布者的用户ID
     * @param int $id
     * @return mixed
     */
    public function getUserId(int $id)
    {
        $result = $this->select('user_id')->where('id','=',$id)->first();

        return $result;
    }

    /**
     * Notes:列表显示
     * Name: grid
     * User: LiYi
     * Date: 2019/6/3
     * Time: 21:26
     * @return Grid
     */
    public function grid()
    {
        $grid = new Grid($this);
        $grid->model()->select('blogs.*', 'bg.type')
            ->leftjoin('blog_content as bg', 'blogs.id', '=', 'bg.blog_id');

        $grid->column('id', '主键')->sortable();
        $grid->column('title', '文章标题');
        $grid->column('info', '简介')->display(function($info) {
            return mb_substr($info, 0, 30) . '...';
        });
        $grid->column('label', '文章分类')->display(function($label) {
            return TypeModel::find($label)->name;
        })->label();
        $grid->column('user_id', '作者')->display(function($user_id) {
            return UserModel::find($user_id)->username;
        })->label('default');
        $grid->column('reading_volume', '阅读量')->badge();
        $grid->column('type', '类型')->display(function($type) {
            switch ($type) {
                case 0:
                $typeName = '文章';
                    break;
                case 1:
                    $typeName = '图片描述';
                    break;
                case 2:
                    $typeName = '心情';
                    break;
            }
            return $typeName;
        });

        $grid->column('tag.tags_name','标签')->label();

        $grid->column('delete_status', '是否删除')->display(function($delete_status) {
            return $delete_status ? '是' : '否';
        });
        $grid->column('created_at', '创建时间')->sortable();
        $grid->column('updated_at', '修改时间')->sortable();

        $grid->filter(function($filter){
            // 去掉默认的id过滤器
            $filter->disableIdFilter();

            // 在这里添加字段过滤器
            $filter->like('name', 'name');

        });

        //$grid->exporter(new BlogsExporter());

        return $grid;
    }

    /**
     * Notes: 插入文章
     * Name: stores
     * User: LiYi
     * Date: 2019/6/3
     * Time: 21:25
     * @param array $blog
     * @param array $blog_content
     * @param array $tag
     * @return array
     */
    public function stores(array $blog, array $blog_content, array $tag)
    {
        DB::beginTransaction();
        try {
            $tag_id = TagModel::create($tag);

            if (!$tag_id->id) throw new \Exception("文章标签插入失败");

            $blog['tag_id'] = $tag_id->id;
            $blog_id = $this::create($blog);

            if (!$blog_id->id) throw new \Exception("文章插入失败");

            $blog_content['blog_id'] = $blog_id->id;

            BlogContentModel::create($blog_content);

            DB::commit();
            $result = ['status' => 1, 'info' => '文章插入成功'];
        } catch (\Exception $e) {
            self::errorMessgegLog($e, '文章');
            DB::rollBack();
            $result = ['status' => 0, 'info' => $e->getPrevious()];
        }

        return $result;
    }
}
