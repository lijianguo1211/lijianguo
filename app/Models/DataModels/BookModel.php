<?php
/**
 * Created by PhpStorm.
 * User: liyi
 * Date: 2019/5/7
 * Time: 9:11
 */

namespace App\Models\DataModels;

/**
 * Notes:php artisan admin:make BookController --model=App\Models\DataModels\BookModel
 * User: LiYi
 * Date: 2019/5/29
 * Time: 23:25
 * Class BookModel
 * @package App\Models\DataModels
 */
class BookModel extends Model
{
    protected $table = 'books';

    protected $primaryKey = 'id';

    protected $fillable = [];
}
