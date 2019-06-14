<?php
/**
 * Notes:
 * File name:CreateRunTable
 * Create by: Jay.Li
 * Created on: 2019\6\4 0004 17:08
 */


namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use App\Admin\Controllers\BlogController;
use Symfony\Component\VarDumper\Caster\ReflectionCaster;

class CreateRunTable extends Command
{
    protected $signature = 'createRunTable';

    protected $description = 'createRunTable';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        try {
            $this->getInstance();
        } catch (\Exception $e) {
            $this->error($e->getMessage());
        }

    }

    public function getInstance()
    {
        $ref = new \ReflectionClass(BlogController::class);
        $this->info('*************构造函数*************');
        $con = $ref->getConstructor();
        var_dump($con);
        $this->info('*************构造函数*************');
        $this->info('*************构造函数参数*************');
        $par = $con->getParameters();
        var_dump($par);
        $this->info('*************构造函数参数*************');
        $this->info('*************实例化输出*************');
        $class = $ref->newInstanceArgs($par);
        var_dump($class);
    }

    public function getTest($strl)
    {
        $str = '1234567890qwertyuioplkjhgfdsazxcvbnmMNBVCXAZSDFGHJKLPOIUYTREWQ';
        $len = strlen($str);
        $code = '';
        for ($i=0; $i<$strl; $i++) {
            $first = mt_rand(0, $len-1);
            $code .= $str[$first];
        }
        for ($i=0; $i<1000000000; $i++) {
            $code = DB::table('tests')->insertGetId([
                'user' => $this->getTest(45),
                'phone' => $this->getTest(10),
                'email' => $this->getTest(15),
                'info' => $this->getTest(150),
            ]);
            $this->info($code . '-->');
        }
        return $code;
    }
}
