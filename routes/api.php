<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClienteController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', [App\Http\Controllers\AutenticacaoController::class, 'login']);
Route::get('login', function(){return "login";});



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
/*
Route::middleware('api')->group(function () {
    Route::resource('clientes', ProductController::class);
});
Route::middleware('api')->group(function () {
    Route::get('index', 'ClienteController@index');
    Route::post('create','ClienteController@createCliente');
    Route::put('update','ClienteController@updateCliente');
    Route::delete('delete','ClienteController@deletCliente');

});
*/
Route::get('index-clientes',[ClienteController::class,'index']);
Route::post('create-clientes',[ClienteController::class,'createCliente']);
Route::put('update-clientes',[ClienteController::class,'updateCliente']);
Route::delete('delete-clientes',[ClienteController::class,'deletCliente']);
