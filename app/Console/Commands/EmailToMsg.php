<?php
/**
 * Created by PhpStorm.
 * User: liyi
 * Date: 2019/4/25
 * Time: 16:38
 */

namespace App\Console\Commands;

use App\Jobs\ProcessPodcast;
use App\Mail\TestEmail;
use Illuminate\Console\Command;
use App\Mail\MailConfirm;
use Illuminate\Support\Facades\Mail;
use App\User;
use Illuminate\Mail\Mailer;

class EmailToMsg extends Command
{
    protected $signature = 'emailToUser';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Email to User';

    private $e;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(Mailer $mailer)
    {
        $this->e = $mailer;
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
            $this->tt();
            $this->error('123456');
        } catch (\Exception $e) {
            $this->error($e->getMessage());
        }

    }

    public function tt()
    {
        Mail::to('jay.li@feisu.com')->send(new TestEmail('jay.li@feisu.com'));
    }

    public function email()
    {
        $user = User::find(1);
        $this->e->to('potato.liu@feisu.com')->send(new MailConfirm($user));
    }
}
