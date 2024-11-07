<?php
namespace Mxent\Auth\Providers;

use Illuminate\Support\ServiceProvider;
use Mxent\Auth\Providers\RouteServiceProvider;

class AuthServiceProvider extends ServiceProvider
{

    public function boot()
    {
        $this->loadMigrationsFrom(__DIR__.'/../../database/migrations');
        $this->loadTranslationsFrom(__DIR__.'/../../resources/lang', 'auth');
        $this->publishes([
            __DIR__ . '/../../config/auth.php' => config_path('auth.php'),
        ], 'auth-config');
        $this->publishes([
            __DIR__.'/../../database/migrations/' => database_path('migrations')
        ], 'auth-migrations');
        $this->publishes([
            __DIR__.'/../../resources/lang' => $this->app->langPath('vendor/auth'),
        ], 'auth-lang');
        $this->publishes([
            __DIR__.'/../../resources/views' => resource_path('views/vendor/auth'),
        ], 'auth-views');
        $this->publishes([
            __DIR__.'/../../resources/js' => resource_path('js/vendor/auth'),
        ], 'auth-js');
        $this->publishes([
            __DIR__.'/../../resources/css' => resource_path('css/vendor/auth'),
        ], 'auth-css');
    }

    public function register()
    {
        $this->app->register(RouteServiceProvider::class);
        $this->mergeConfigFrom(__DIR__.'/../../config/auth.php', 'auth');
        $this->loadViewsFrom(__DIR__ . '/../../resources/views', 'auth');
    }

}