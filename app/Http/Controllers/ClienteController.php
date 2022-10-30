<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cliente;
use App\Models\Funcionario;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class ClienteController extends Controller
{
    public function AutenticaCliente(Request $request){

        $email = $request->input('email');
        $password = $request->input('password');


        $this->validate($request,[
            'email' => 'required',
            'password' => 'required',
        ]);
        $user = Funcionario::where('email', $email)->first();
        if (! $user || ! Hash::check($password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        // if(Auth::attempt(['email'=>$email,'password'=>$password])){
        //     $user = Auth::user('clientes');
        //     $token = $user->createToken('jwt');
            
        //     return response()->json($token->plainTextToken, 200);
        // }else{
        //     return response()->json('nao', 404);
        // };

        
    }

    public function clientelogout(){
        Auth::logout();
    }

    public function getCliente()
    {
        $clientes = Cliente::all()->toArray();
        return array_reverse($clientes);      
    }


    public function createCliente(Request $request)
    {
        
        $cliente = Cliente::create([
            'nome' => $request->input('nome'),
            'sobrenome'=> $request->input('sobrenome'),
            'cpf'=> $request->input('cpf'),
            'genero'=> $request->input('genero'),
            'password'=>Hash::make($request->input('password')),
            'dataNascimento'=> $request->input('dataNascimento'),
            'telefone'=> $request->input('telefone'),
            'email'=> $request->input('email'),
            'plano'=> $request->input('plano')
        ]);
        $cliente = Cliente::where('email', $request->email)->first();

        if (isset($cliente->id)) {
            return response()->json(['error' => 'Usuario já existe'], 401);
        }
        $cliente->save();
        return response()->json('cliente Criado');
    }


    public function EditCliente($id)
    {
        $cliente = Cliente::find($id);
        return response()->json($cliente);
    }


    public function updateCliente($id, Request $request)
    {
        $cliente = Cliente::find($id);
        $cliente->update($request->all());
        return response()->json('cliente Atualizado');
    }


    public function deleteCliente($id)
    {
        $cliente = Cliente::find($id);
        $cliente->delete();
        return response()->json('cliente deletado');
    }
}
