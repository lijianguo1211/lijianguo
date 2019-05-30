<?php
/**
 * Created by PhpStorm.
 * User: liyi
 * Date: 2019/3/4
 * Time: 19:55
 */

namespace App\Models\DataModels;
use \Illuminate\Database\Eloquent\Model as Eloquent;
use App\Admin\Traits\TraitMessage;


abstract class Model extends Eloquent
{
    use TraitMessage;
}
