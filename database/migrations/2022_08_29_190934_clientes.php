<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use League\CommonMark\Reference\Reference;

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
            $table->id();
            $table->string('nome', 15)->nullable(false);
            $table->string('sobrenome', 50)->nullable(false);
            $table->string('CPF', 11)->nullable();
            $table->enum('gender',array('M','F'));
            $table->date('Data de Nascimento')->nullable(false);
            $table->string('telefone', 11)->nullable(false);
            $table->string('email', 60);
            $table->unsignedBigInteger('id_plano');
            $table->foreign('id_plano')->references('id')->on('planos');
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
