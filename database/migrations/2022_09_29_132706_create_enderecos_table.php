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
        Schema::create('enderecos',function(Blueprint $table){
            $table->increments('id_endereco');
            $table->string('rua', 40)->nullable(false);
            $table->string('bairro', 40)->nullable(false);
            $table->string('cep',8)->nullable(false);
            $table->string('cidade',40)->nullable(false);
            $table->string('estado',2);
            //id clientes
            $table->unsignedInteger('id_cliente');
            $table->foreign('id_cliente')->references('id')->on('clientes');
            //id dos fornecedores
            $table->unsignedInteger('id_fornecedor');
            $table->foreign('id_fornecedor')->references('id')->on('fornecedores');
            //id fos funcionarios
            $table->unsignedInteger('id_funcionario');
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
        Schema::dropIfExists('enderecos');
    }
};
