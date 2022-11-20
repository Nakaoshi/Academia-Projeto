<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Funcionario;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class FuncionarioController extends Controller

{
    public function AutenticacaoFuncionario(Request $request){

        $email = $request->input('email');
        $password = $request->input('password');

        $this->validate($request,[
            'email' => 'required',
            'password' => 'required',
        ]);

       // ---------------------------------------------------------------------------------------------------------------------/
    // MODO QUE RETORNA USUARIO
    // ---------------------------------------------------------------------------------------------------------------------/

        if(Auth::attempt(['email'=>$email,'password'=>$password])){
            $user = Auth::user();
            $token = $user->createToken('jwt');
            
            return response()->json($token->plainTextToken, 200);
        }else{
            return response()->json('Não Logou', 404);

        }
    }

    public function clientelogout(){
        Auth::logout();
        return response()->json([
            'status' => 'success',
            'message' => 'Usuario deslogado',
        ]);
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
            'email'=> $request->input('email'),
            'rua'=>$request->input('rua'),
            'casaNumero'=>$request->input('casaNumero'),
            'complemento'=>$request->input('cidade'),
            'cidade'=>$request->input('estado'),
            'estado'=>$request->input('complemento'),
            'cep'=>$request->input('cep'),
            
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
