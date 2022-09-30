<?php

namespace App\Http\Controllers;

use App\Http\Requests\RequisicaoLogin;

class AutenticacaoController extends Controller
{
    public function login(RequisicaoLogin $request){

        $input = $request->validated();
        dd($input);
            $credentials = request(['email', 'password']);
    
            if (! $token = auth()->attempt($credentials)) {
                return response()->json(['error' => 'Unauthorized'], 401);
            }
    
            return $this->respondWithToken($token);
        
    }
}
