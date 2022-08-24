<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Psy\CodeCleaner\FunctionReturnInWriteContextPass;

class inicioController extends Controller
{
    public function index(){
        return view ('site.inicio');
    }
    public function aluno(){
        return view ('site.cliente');
    }
    public function funcionario(){
        return view ('site.cliente');
    }
}
