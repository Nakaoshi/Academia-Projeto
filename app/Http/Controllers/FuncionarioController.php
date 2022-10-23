<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Funcionario;

class FuncionarioController extends Controller
{
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
            'cargo'=> $request->input('cargo'),
            'salario'=> $request->input('salario'),
            'telefone'=> $request->input('telefone'),
            'email'=> $request->input('email')
            
        ]);
        $funcionario->save();
        return response()->json('funcionario Criado');
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
