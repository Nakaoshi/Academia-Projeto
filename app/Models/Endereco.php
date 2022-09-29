<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Endereco extends Model
{
    use HasFactory;
    protected $fillable = [
        'rua',
        'bairro', 
        'cep',
        'cidade',
        'estado',
        'id_cliente',
        'id_fornecedor',
        'id_funcionario'
    ];
}
