<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Tymon\JWTAuth\Contracts\JWTSubject;
class Cliente extends Model implements JWTSubject
{
    use HasFactory;
    protected $table = 'clientes';
    protected $fillable = [
        'nome',
        'sobrenome',
        'cpf',
        'password',
        'genero',
        'dataNascimento',
        'telefone',
        'email',
        'plano'
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
