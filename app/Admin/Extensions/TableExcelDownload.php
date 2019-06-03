<?php


namespace App\Admin\Extensions;

use App\Models\DataModels\BlogModel;
use Maatwebsite\ExcelLight\Excel;
use Maatwebsite\ExcelLight\Reader;
use Maatwebsite\ExcelLight\Writer;
use Maatwebsite\ExcelLight\Row;
use Maatwebsite\ExcelLight\Sheet;

class TableExcelDownload
{
    private $excel;

    public function __construct()
    {

    }

    public function blogExcel(Excel $excel)
    {
        /*$excel->create(function (Writer $writer) {
            $writer->sheet('sheet1', function (Writer $sheet) {
                $data = $this->tables();
                foreach ($data as $k => $item) {
                    $sheet->rows($item);
                }
            });
        })->export(storage_path('workbook.xlsx'));*/
        $excel->create(function (Writer $writer) {
            $writer->sheet('sheet1', function (Writer $sheet) {
                $sheet->rows([
                    [1, 2, 3],
                    [4, 5, 6]
                ]);

                // Add more rows
                $sheet->rows([
                    [7, 8, 9],
                    [10, 11, 12]
                ]);
            });
        })->export(storage_path('workbook.xlsx'));
    }

    public function tables()
    {
        $result = BlogModel::select(
            'blogs.*',
            'u.username',
            'u.email',
            'u.phone',
            't.tags_name'
        )
            ->leftJoin('users as u', 'blogs.user_id', '=', 'u.id')
            ->leftJoin('tags as t', 'blogs.tag_id', '=', 't.id')
            ->limit(10)
            ->get()
            ->toArray();

        if (is_array($result)) {
            return $result;
        }
    }
}
