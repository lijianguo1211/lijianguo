<?php


namespace App\Admin\Extensions;

use App\Admin\Extensions\XLSXWriter;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Models\DataModels\BlogModel;
use Illuminate\Support\Facades\DB;

class TableExcelDownload
{
    public function __construct()
    {

    }

    public function blogExcel()
    {
        $excel = new XLSXWriter();
        $excel->writeSheetHeader('Sheet1', [
            '主键ID'=>'integer',
            '作者'=>'string',
            '手机'=>'string',
            '电话'=>'string',
            '详情'=>'string',
        ] );

        foreach ($this->tables() as $k => $item) {
            $excel->writeSheetRow('Sheet1', $item);
        }
        $fileLocation = 'test.xlsx';
        $excel->writeToFile($fileLocation);

        header('Content-Description: File Transfer');
        header("Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        header("Content-Disposition: attachment; filename=".basename($fileLocation));
        header("Content-Transfer-Encoding: binary");
        header("Expires: 0");
        header("Pragma: public");
        header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
        header('Content-Length: ' . filesize($fileLocation)); //Remove

        ob_clean();
        flush();

        readfile($fileLocation);
        unlink($fileLocation);
        exit(0);
    }

    public function tables()
    {
        $excel = new XLSXWriter();
        DB::table('tests')->select('id', 'user', 'phone', 'email', 'info')
            ->orderBy('id')->chunk(5, function($tests) use ($excel) {
            $excel->writeSheetHeader('Sheet1', [
                '主键ID'=>'integer',
                '作者'=>'string',
                '手机'=>'string',
                '电话'=>'string',
                '详情'=>'string',
            ]);
            $fileLocation = 'test.xlsx';
            header('Content-Description: File Transfer');
            header("Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
            header("Content-Disposition: attachment; filename=".basename($fileLocation));
            header("Content-Transfer-Encoding: binary");
            header("Expires: 0");
            header("Pragma: public");
            header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
            header('Content-Length: ' . filesize($fileLocation)); //Remove

            foreach ($tests as $item) {
                $excel->writeSheetRow('Sheet1', (array)$item);
            }
            $excel->writeToFile($fileLocation);
            ob_clean();
            flush();
            readfile($fileLocation);
            unlink($fileLocation);
            exit(0);
        });

    }
}
