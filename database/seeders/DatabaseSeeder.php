<?php

namespace Database\Seeders;

use App\Models\Cliente;
use App\Models\Funcionario;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Cliente::factory(10)->create();
        Funcionario::factory(10)->create();
        Funcionario::factory()->create([
            'nome' => 'Test User',
            'sobrenome'=>'Nakaoshi',
            'cpf'=>'333.333.333-33',
            'genero'=>'Homem',
            'cargo'=>'gerente',
            'password'=>'Nakaoshi',
            'email' => 'gerente@gmail.com',
            'gerente'=> true,
        ]);
        \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'Luiz Nakaoshi',
            'email' => 'Nakaoshi@gmail.com',
            'gerente'=> true,
        ]);
    }
}
