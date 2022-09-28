<?php

use Illuminate\Support\Facades\Route;

Route::redirect('/','inicio');
//SPA dos usuarios
Route::get('inicio/{vue?}',function(){
    return view('usuarios.index');
})->where('vue', '.*?')->name("inicio");
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