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
            $table->increments('id');
            $table->string('cnpj',14)->nullable(false)->unique();
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