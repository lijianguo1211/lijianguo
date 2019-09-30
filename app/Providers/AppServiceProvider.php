<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->register(\NunoMaduro\Larastan\LarastanServiceProvider::class);
        $this->app->instance('path.storage', app()->basePath() . DIRECTORY_SEPARATOR . 'storage');
        $this->app->instance('path.config', app()->basePath() . DIRECTORY_SEPARATOR . 'config');
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);
    }
}
