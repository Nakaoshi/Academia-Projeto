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
        Schema::create('endereco',function(Blueprint $table){
            $table->increments('id_endereço');
            $table->string('estado',2);
            $table->string('cidade',40)->nullable(false);
            $table->string('bairro', 40)->nullable(false);
            $table->string('rua', 40)->nullable(false);
            //id clientes
            $table->unsignedBigInteger('id_cliente');
            $table->foreign('id_cliente')->references('id')->on('clientes');
            //id dos fornecedores
            $table->unsignedBigInteger('id_fornecedor');
            $table->foreign('id_fornecedor')->references('id')->on('fornecedores');
            //id fos funcionarios
            $table->unsignedBigInteger('id_funcionario');
            $table->foreign('id_funcionario')->references('id')->on('funcionarios');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('endereco');
    }
};
