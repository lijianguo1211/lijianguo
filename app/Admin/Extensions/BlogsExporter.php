<?php
/**
 * Notes:
 * File name:Blogs
 * Create by: Jay.Li
 * Created on: 2019\6\4 0004 18:02
 */


namespace App\Admin\Extensions;

use Encore\Admin\Grid\Exporters\ExcelExporter;

class BlogsExporter extends ExcelExporter
{
    protected $fileName = '文章列表.xlsx';

    protected $columns = [
        'title'   => '标题',
        'info' => '内容',
    ];
}
