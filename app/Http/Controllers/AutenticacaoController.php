<?php

namespace App\Http\Controllers;

use App\Http\Requests\RequisicaoLogin;

class AutenticacaoController extends Controller
{
    public function login(RequisicaoLogin $request){

        $input = $request->validated();
            
        $credentials = [
                'email' => $input['email'],
                'password' => $input['password']
            ];
    
            if (! $token = auth()->attempt($credentials)) {
                return response()->json(['error' => 'Unauthorized'], 401);
            }
            
            return response()->json([
                'access_token' => $token,
                'token_type' => 'bearer',
                'expires_in' => auth()->factory()->getTTL() * 60 //sim vai ficar dando erro
            ]);
        
    }
    public function usuario()
    {
        return response()->json(auth()->user());
    }
}
