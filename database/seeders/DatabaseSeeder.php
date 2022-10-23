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
        \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'Test User',
            'email' => 'gerente@gmail.com',
            'gerente'=> true,
        ]);
    }
}
