<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cliente;
use App\Models\Funcionario;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class ClienteController extends Controller
{

    public function AutenticaCliente(Request $request)
    {

        $email = $request->input('email');
        $password = $request->input('password');

        $this->validate($request, [
            'email' => 'required',
            'password' => 'required',
        ]);

        if (Auth::attempt(['email' => $email, 'password' => $password])) {
            $user = Auth::user();
            $token = $user->createToken('jwt');

            return response()->json($token->plainTextToken, 200);
        } else {
            return response()->json('Não Logou', 404);
        }
    }


    public function clientelogout()
    {
        Auth::logout();
        return response()->json([
            'status' => 'success',
            'message' => 'Usuario deslogado',
        ]);
    }

    /*--------------------------------------------------------------
    pega todos os registros do banco de dados de clientes
    -----------------------------------------------------------------*/
    public function getCliente()
    {
        $clientes = Cliente::all()->toArray();
        return array_reverse($clientes);
    }


    /*--------------------------------------------------------------
    Cria usuarios na tabela de clientes
    -----------------------------------------------------------------*/

    public function createCliente(Request $request)
    {

        $cliente = Cliente::create([
            'nome' => $request->input('nome'),
            'sobrenome' => $request->input('sobrenome'),
            'cpf' => $request->input('cpf'),
            'genero' => $request->input('genero'),
            'password' => Hash::make($request->input('password')),
            'dataNascimento' => $request->input('dataNascimento'),
            'telefone' => $request->input('telefone'),
            'email' => $request->input('email'),
            'plano' => $request->input('plano'),
            'rua' => $request->input('rua'),
            'casaNumero' => $request->input('casaNumero'),
            'complemento' => $request->input('cidade'),
            'cidade' => $request->input('estado'),
            'estado' => $request->input('complemento'),
            'cep' => $request->input('cep'),
        ]);
        $cliente = Cliente::where('email', $request->email)->first();


        $cliente->save();
        return response()->json('cliente Criado');
    }

    /*--------------------------------------------------------------
    chama o cliente especifico pelo id
    -----------------------------------------------------------------*/
    public function EditCliente($id)
    {
        $cliente = Cliente::find($id);
        return response()->json($cliente);
    }
    /*--------------------------------------------------------------
        atualiza o usuario editado
    -----------------------------------------------------------------*/

    public function updateCliente($id, Request $request)
    {
        $cliente = Cliente::find($id);
        $cliente->update($request->all());
        return response()->json('cliente Atualizado');
    }

    /*--------------------------------------------------------------
    deleta o usuario da tabela de clientes
    -----------------------------------------------------------------*/
    public function deleteCliente($id)
    {
        $cliente = Cliente::find($id);
        $cliente->delete();
        return response()->json('cliente deletado');
    }
}
