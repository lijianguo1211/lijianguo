<?php

namespace App\Jobs;

use App\Mail\TestEmail;
use Illuminate\Bus\Queueable;
use Illuminate\Support\Facades\Mail;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class ProcessPodcast implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $job;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($job)
    {
        $this->job = $job;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        Mail::to($this->job)->send(new TestEmail($this->job));
        //Mail::to('jay.li@feisu.com')->send(new TestEmail('jay.li@feisu.com'));
    }
}
