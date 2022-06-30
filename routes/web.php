<?php

use Illuminate\Support\Facades\Route;


Route::get('/', [App\Http\Controllers\InicioController::class, 'index']) -> name ('inicio');

// Route::get ('/{any}', 'inicio@index') -> where ('any','.*'); 


Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
