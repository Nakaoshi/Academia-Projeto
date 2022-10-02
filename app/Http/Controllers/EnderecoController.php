<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Endereco;

class EnderecoController extends Controller
{
    public function index()
    {
        $enderecos = Endereco::all()->toArray();
        return array_reverse($enderecos);      
    }
    public function createEndereco(Request $request)
    {
        $endereco = new Endereco([
            'rua'=> $request->input('rua'),
            'bairro'=> $request->input('bairro'), 
            'cep'=> $request->input('cep'),
            'cidade'=> $request->input('cidade'),
            'estado'=> $request->input('estado'),
            'id_cliente'=> $request->input('id_cliente'),
            'id_fornecedor'=> $request->input('id_fornecedor'),
            'id_funcionario'=> $request->input('id_funcinario')
        ]);
        $endereco->save();
        return response()->json('endereco Criado');
    }
    public function showEndereco($id)
    {
        $endereco = Endereco::find($id);
        return response()->json($endereco);
    }
    public function updateEndereco($id, Request $request)
    {
        $endereco = Endereco::find($id);
        $endereco->update($request->all());
        return response()->json('endereco Atualizado');
    }
    public function deleteEndereco($id)
    {
        $endereco = Endereco::find($id);
        $endereco->delete();
        return response()->json('endereco deletado');
    }
}
