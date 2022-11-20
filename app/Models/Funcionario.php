<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;
class Funcionario extends Model implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;
    protected $table = "funcionarios";
    protected $fillable = [
        'nome',
        'sobrenome',
        'cpf',
        'genero',
        'gerente',
        'password',
        'cargo',
        'salario',
        'telefone',
        'email',
        'rua',
        'casaNumero',
        'cidade',
        'estado',
        'complemento',
        'cep'
    ];
    protected $hidden = [
        'create_at',
        'updated_at'
    ];

    public function getAuthPassword() {
        return $this->password;
    }
    
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
