<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cliente;

class ClienteController extends Controller
{
    public function getCliente()
    {
        $clientes = Cliente::all()->toArray();
        return array_reverse($clientes);      
    }
    public function createCliente(Request $request)
    {
        $cliente = new Cliente([
            'nome' => $request->input('nome'),
            'sobrenome'=> $request->input('sobrenome'),
            'cpf'=> $request->input('cpf'),
            'genero'=> $request->input('genero'),
            'dataNascimento'=> $request->input('dataNascimento'),
            'telefone'=> $request->input('telefone'),
            'email'=> $request->input('email'),
            'plano'=> $request->input('plano')
        ]);
        $cliente->save();
        return response()->json('cliente Criado');
    }
    public function showCliente($id)
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
