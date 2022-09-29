<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Funcionario extends Model
{
    use HasFactory;
    protected $fillable = [
        'nome',
        'sobrenome',
        'cpf',
        'genero',
        'cargo',
        'salario',
        'telefone',
        'email'
    ];

}
