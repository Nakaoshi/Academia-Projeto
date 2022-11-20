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
        $plano =$this->faker->randomElement(["Standard", "Fighter", "GoFighter","Sem Plano"]);
        $gender = $this->faker->randomElement($array = array('Homem','Mulher','Prefiro Não Declarar'));
        $faker = \Faker\Factory::create('pt_BR');
        return [
            'nome' => $this->faker->name(1),
            'sobrenome' => $this->faker->lastName(50),
            'genero' => $gender,
            'dataNascimento'=>$faker->date(),
            'password'=>$this->faker->password(),
            'cpf' =>  $faker->cpf(14),
            'telefone' => $faker->cellphoneNumber(),
            'plano'=>$plano,
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

