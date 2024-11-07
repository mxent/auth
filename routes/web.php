<?php

use Mxent\Auth\Http\Controllers\AuthController;

Route::get('/', [AuthController::class, 'index'])->name('index');