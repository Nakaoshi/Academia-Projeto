<?php

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
        Schema::create('funcionarios', function(Blueprint $table){
            $table->increments('id');
            $table->string('nome')->nullable(false);
            $table->string('sobrenome',50)->nullable(false);
            $table->string('cpf', 14)->nullable()->unique(false);
            $table->enum('genero',array('Homem','Mulher','Prefiro Não Declarar'));
            $table->string('cargo')->nullable(false);
            $table->float('salario',11);
            $table->string('telefone',15)->nullable(false);
            $table->string('email');
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
        Schema::dropIfExists('funcionarios');
    }
};
