<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Fornecedor extends Model implements JWTSubject
{
    use HasFactory;

    protected $table = 'fornecedores';
    protected $fillable = [
        'cnpj',
        'nomeFantasia',
        'razaoSocial',
        'telefone',
        'email',
        'rua',
        'casaNumero',
        'cidade',
        'estado',
        'complemento',
        'cep'
    ];
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }
}
