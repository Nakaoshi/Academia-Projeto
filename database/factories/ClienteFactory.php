<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Cliente>
 */
class ClienteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        require_once 'vendor/autoload.php';

        $gender = $this->faker->randomElement($array = array('Homem','Mulher','Prefiro Não Declarar'));
        $faker = \Faker\Factory::create('pt_BR');
        return [
            'nome' => $this->faker->name(1),
            'sobrenome' => $this->faker->lastName(50),
            'genero' => $gender,
            'dataNascimento'=>$faker->date(),
            'cpf' =>  $faker->cpf(14),
            'telefone' => sprintf('(0%s)%s',$faker->areaCode, $faker->landline),
            'email' => $this->faker->email(),

        ];
    }
    }

