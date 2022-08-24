<?php

use Illuminate\Support\Facades\Route;


Route::get('/', [App\Http\Controllers\InicioController::class, 'index']) -> name ('inicio');
Route::get('/{any}', [App\Http\Controllers\InicioController::class, 'index']) -> name ('inicio');
Route::get('/aluno/{any}', [App\Http\Controllers\InicioController::class, 'aluno']) -> name ('aluno');
Route::get('/funcionario/{any}', [App\Http\Controllers\InicioController::class, 'funcionario']) -> name ('funcionario');

// Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
