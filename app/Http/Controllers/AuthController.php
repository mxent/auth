<?php

namespace Mxent\Auth\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class AuthController extends Controller implements HasMiddleware
{

    /**
     * Middleware
     */
    public static function middleware(): array
    {
        return [
            // new Middleware('auth'),
        ];
    }

    /**
     * Index
     */
    public function index()
    {
        return inertia('Auth/Index');
    }

}