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
        Schema::create('fornecedores', function(Blueprint $table){
            $table->id();
            $table->string('CNPJ',14)->nullable(false);
            $table->string('nomeFantasia',70)->nullable(false);
            $table->string('razaoSocial',60)->nullable(false);
            $table->string('telefone',11)->nullable(false);
            $table->string('email', 60);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fornecedores');
    }
};
