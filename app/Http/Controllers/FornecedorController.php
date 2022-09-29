<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Fornecedor;

class FornecedorController extends Controller
{
    public function index()
    {
        $fornecedores = Fornecedor::all()->toArray();
        return array_reverse($fornecedores);      
    }
    public function createFornecedor(Request $request)
    {
        $fornecedor = new Fornecedor([
            'cnpj'=> $request->input('cnpj'),
            'nomeFantasia'=> $request->input('nomeFantasia'),
            'razaoSocial'=> $request->input('razaoSocial'),
            'telefone'=> $request->input('telefone'),
            'email'=> $request->input('ameil')
            
        ]);
        $fornecedor->save();
        return response()->json('fornecedor Criado');
    }
    public function showFornecedor($id)
    {
        $fornecedor = Fornecedor::find($id);
        return response()->json($fornecedor);
    }
    public function updateFornecedor($id, Request $request)
    {
        $fornecedor = Fornecedor::find($id);
        $fornecedor->update($request->all());
        return response()->json('fornecedor Atualizado');
    }
    public function deleteFornecedor($id)
    {
        $fornecedor = Fornecedor::find($id);
        $fornecedor->delete();
        return response()->json('fornecedor deletado');
    }
}