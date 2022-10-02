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
        return [
            'nome' => $this->faker->name,
            'sobrenome' => $this->faker->lastName,
            'cpf' => $this->faker->countryCode,
            'genero' => $this->faker->title($gender = "M"),
            'cargo' => $this->faker->jobTitle,
            'salario' => $this->faker->randomDigitNot(5),
            'telefone' => $this->faker->phoneNumber,
            'email' => $this->faker->email
        ];
    }
}
