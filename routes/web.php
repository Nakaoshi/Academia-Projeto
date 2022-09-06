<?php

use Illuminate\Support\Facades\Route;

Route::redirect('/','usuarios');
//SPA dos usuarios
Route::get('usuarios/{vue?}',function(){
    return view('usuarios.index');
})->where('vue', '.*?')->name("usuarios");
// SPA dos Funcionarios
Route::get('funcionarios/{vue?}',function(){
    return view('funcionarios.index');
})->where('vue', '.*?');
//SPA dos alunos
Route::get('alunos/{vue?}',function(){
    return view('alunos.index');
})->where('vue', '.*?');

// Auth::routes();

Route::fallback(function(){
    return view('error.error404');
});