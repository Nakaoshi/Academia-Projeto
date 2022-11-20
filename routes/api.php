<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClienteController;
use App\Http\Controllers\FornecedorController;
use App\Http\Controllers\FuncionarioController;
use App\Models\Cliente;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

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



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    $user = Auth::user();
    return response()->json($user, 200);
});


    // ---------------------------------------------------------------------------------------------------------------------/
    // Rotas dos Clientes
    // ---------------------------------------------------------------------------------------------------------------------/

        Route::group(['prefix'=>'cliente'],function(){
            Route::post('Auth',[ClienteController::class, 'AutenticaCliente'])->name('AutenticacaoCliente');
            Route::post('logout',[ClienteController::class, 'clientelogout']);
            Route::get('get',[ClienteController::class,'getCliente']);
            Route::post('/create',[ClienteController::class,'createCliente']);
            Route::get('/editar/{id}',[ClienteController::class,'EditCliente']);
            Route::put('/update/{id}',[ClienteController::class,'updateCliente']);
            Route::delete('/delete/{id}',[ClienteController::class,'deleteCliente']);

        });


    // ---------------------------------------------------------------------------------------------------------------------/
    // Rotas dos funcionarios
    // ---------------------------------------------------------------------------------------------------------------------/
        Route::group(['prefix'=>'funcionario'],function() { 
            Route::post('Auth',[FuncionarioController::class, 'Auth']);
            Route::get('/get',[FuncionarioController::class,'getFuncionarios']);
            Route::post('/create',[FuncionarioController::class,'createFuncionario']);
            Route::get('/editar/{id}',[FuncionarioController::class,'editFuncionario']);
            Route::put('/update/{id}',[FuncionarioController::class,'updateFuncionario']);
            Route::delete('/delete/{id}',[FuncionarioController::class,'deleteFuncionario']);
        });


    // ---------------------------------------------------------------------------------------------------------------------/
    // Rotas Fornecedores
    // ---------------------------------------------------------------------------------------------------------------------/

        Route::group(['prefix'=>'fornecedores'],function() {
                Route::get('get',[FornecedorController::class,'getFornecedores']);
                Route::post('/create',[FornecedorController::class,'createFornecedor']);
                Route::get('/editar/{id}',[FornecedorController::class,'editFornecedor']);
                Route::put('/update/{id}',[FornecedorController::class,'updateFornecedor']);
                Route::delete('/delete/{id}',[FornecedorController::class,'deleteFornecedor']);
        });

