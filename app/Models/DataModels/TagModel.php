<?php

namespace App\Models\DataModels;

class TagModel extends Model
{
    protected $table = 'tags';

    protected $primaryKey = 'id';

    public $fillable = ['tags_name'];

    public function blog()
    {
        return $this->hasOne(BlogModel::class);
    }
}
