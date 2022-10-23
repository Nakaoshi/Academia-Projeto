p<?php

use Carbon\Carbon;
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
            $table->string('nome', 130)->nullable(false);
            $table->string('sobrenome', 50)->nullable(false);
            $table->string('cpf', 14)->nullable(false)->unique();
            $table->enum('genero',array('Homem','Mulher','Prefiro Não Declarar'));
            $table->string('dataNascimento')->nullable(false);
            $table->string('telefone', 14)->nullable(false);
            $table->string('email', 60);
            $table->enum('plano',array('Standard','Fighter','GoFighter','Sem Plano'))->default('Sem plano');
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();

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
