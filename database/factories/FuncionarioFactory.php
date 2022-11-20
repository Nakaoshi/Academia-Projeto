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
            'password'=>$this->faker->password(),
            'gerente' => false,
            'salario' => $this->faker->randomNumber(5,true),
            'telefone' => $faker->cellphoneNumber(),
            'email' => $this->faker->email(),
            'rua'=>$this->faker->address(),
            'casaNumero'=>$this->faker->buildingNumber(),
            'cidade'=>$this->faker->city(),
            'estado'=>$this->faker->state(),
            'complemento'=>$this->faker->streetAddress(),
            'cep'=>$this->faker->randomNumber(8, true)

        ];
    }
}
