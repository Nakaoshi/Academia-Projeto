p<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clientes',function(Blueprint $table){
            $table->increments('id');
            $table->string('nome', 15)->nullable(false);
            $table->string('sobrenome', 50)->nullable(false);
            $table->string('cpf', 11)->nullable(false)->unique();
            $table->enum('genero',array('M','F'));
            $table->date('dataNascimento')->nullable(false);
            $table->string('telefone', 11)->nullable(false);
            $table->string('email', 60);
            $table->enum('plano',array('Standard','Fighter','GoFighter','Sem Plano'))->default('Sem plano');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clientes');
    }
};
