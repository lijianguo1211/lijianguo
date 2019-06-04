<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Log\Events\MessageLogged;

class LogToEmailEvent extends MessageLogged
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $level;

    /**
     * The log message.
     *
     * @var string
     */
    public $message;

    /**
     * The log context.
     *
     * @var array
     */
    public $context;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($level, $message, array $context = [])
    {
        parent::__construct($level, $message, $context = []);
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        //return new PrivateChannel('channel-name');
    }
}
