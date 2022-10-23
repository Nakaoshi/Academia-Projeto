<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Funcionario>
 */
class FuncionarioFactory extends Factory
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
            'nome' => $faker->name(),
            'sobrenome' => $this->faker->lastName(),
            'cpf' =>  $faker->cpf(14),
            'genero' => $gender,
            'cargo' => $this->faker->jobTitle(30),
            'salario' => $this->faker->randomDigitNot(5),
            'telefone' => sprintf('(0%s) %s', $faker->areaCode, $faker->landline),
            'email' => $this->faker->email(),

        ];
    }
}
