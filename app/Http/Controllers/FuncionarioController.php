<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Funcionario;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class FuncionarioController extends Controller

{
    public function Auth(Request $request){
        $email = $request->input('email');
        $password = $request->input('passoword');

        $this->validate($request,[
            $email => ['required','email'],
            $password => ['required'],
        ]);

        if(Auth::attempt(['email'=>$request->input('email'),'password'=>$request->input('password')])){
            $funcionarios = Auth::user();
            $token = $funcionarios->createToken('jwt');
            return response()->json($token, 200);
        }else{
            return response()->json('Nao Logou', 404);
        };
    }

    public function getFuncionarios()
    {
        $funcionarios = Funcionario::all()->toArray();
        return array_reverse($funcionarios);      
    }

     
    public function createFuncionario(Request $request)
    {
        $funcionario = new Funcionario([
            'nome' => $request->input('nome'),
            'sobrenome'=> $request->input('sobrenome'),
            'cpf'=> $request->input('cpf'),
            'genero'=> $request->input('genero'),
            'password'=>Hash::make($request->input('password')),
            'cargo'=> $request->input('cargo'),
            'salario'=> $request->input('salario'),
            'telefone'=> $request->input('telefone'),
            'email'=> $request->input('email')
            
        ]);
        $funcionario->save();
        return response()->json('funcionario Criado', 200);
    }
    public function EditFuncionario($id)
    {
        $funcionario = Funcionario::find($id);
        return response()->json($funcionario);
    }
    public function updateFuncionario($id, Request $request)
    {
        $funcionario = Funcionario::find($id);
        $funcionario->update($request->all());
        return response()->json('funcionario Atualizado');
    }
    public function deleteFuncionario($id)
    {
        $funcionario = Funcionario::find($id);
        $funcionario->delete();
        return response()->json('funcionario deletado');
    }
}
