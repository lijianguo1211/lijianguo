<?php
/**
 * Created by PhpStorm.
 * User: liyi
 * Date: 2019/4/16
 * Time: 17:53
 */

namespace App\Models\DataModels;

/**
 * Notes:php artisan admin:make BlogContentController --model=App\Models\DataModels\BlogContentModel
 * User: LiYi
 * Date: 2019/5/29
 * Time: 23:24
 * Class BlogContentModel
 * @package App\Models\DataModels
 */
class BlogContentModel extends Model
{
    protected $table = "blog_content";

    protected $primaryKey = 'id';

    protected $fillable = ['content','type','blog_id','content_md'];

    public $timestamps= false;

    public function blog()
    {
        return $this->belongsTo(BlogModel::class);
    }
}
