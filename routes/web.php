<?php

use Illuminate\Support\Facades\Route;

//apagar o {any} após terminar de fazer as telas
Route::redirect('/','inicio');
Route::get('/{any}', [App\Http\Controllers\InicioController::class, 'index'])->name('index');
Route::get('/aluno/{any}', [App\Http\Controllers\InicioController::class, 'aluno'])->name('aluno');
Route::get('/funcionario/{any}', [App\Http\Controllers\InicioController::class, 'funcionario']) -> name ('funcionario');

// Auth::routes();

Route::fallback(function(){
    return view('error.error404');
});