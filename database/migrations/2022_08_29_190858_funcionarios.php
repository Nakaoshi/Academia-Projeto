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
            $table->id();
            $table->string('nome', 15)->nullable(false);
            $table->string('sobrenome',50)->nullable(false);
            $table->string('CPF', 11)->nullable(false);
            $table->enum('genero',array('m','f'));
            $table->string('cargo', 30)->nullable(false);
            $table->float('salario',7);
            $table->string('telefone',11)->nullable(false);
            $table->string('email');
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
