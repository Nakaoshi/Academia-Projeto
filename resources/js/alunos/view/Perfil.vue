<template>
    <div class="perfil">
        <!-- <div class="perfil__title">
            <h3 class="alunos__font--title">
                {{ this.$route.name.toUpperCase() }}
            </h3>
            <v-spacer></v-spacer>
        </div> -->

        <div class="perfil__mainInfo">
            <v-avatar color="teal" size="180" class="perfil__mainInfo--img">
                <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" />
            </v-avatar>
            <div class="perfil__mainInfo--texts">
                <h2 class="perfil__font--title">
                    {{ this.cliente.nomeCompleto }}
                </h2>
                <p class="perfil__font--text">{{ this.cliente.idade }} ANOS</p>
            </div>
        </div>
        <v-container class="perfil__info">
            <div class="perfil__info--group">
                <h4 class="perfil__font--subtitle">INFORMAÇÕES PESSOAIS</h4>
                <p class="perfil__font--text">
                    {{ this.cliente.nomeCompleto }}
                </p>
                <p class="perfil__font--text">
                    {{ this.cliente.dataNascimento }}
                </p>
                <p class="perfil__font--text">{{ this.cliente.cpf }}</p>
                <p class="perfil__font--text">{{ this.cliente.sexo }}</p>
            </div>
            <div class="perfil__info--group">
                <h4 class="perfil__font--subtitle">Contato</h4>
                <p class="perfil__font--text">
                    {{ this.cliente.contato.telefone }}
                </p>
                <p class="perfil__font--text">
                    {{ this.cliente.contato.email }}
                </p>
                <p class="perfil__font--text break-words">
                    {{ this.cliente.contato.endereco }}
                </p>
                <p class="perfil__font--text">
                    {{ this.cliente.contato.cidade }}
                </p>
                <p class="perfil__font--text">{{ this.cliente.contato.cep }}</p>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cliente: {
                nome: "Nakaoshi",
                idade: 20,
                nomeCompleto: "Luiz Nakaoshi Junior",
                dataNascimento: "20/20/2000",
                cpf: "999.999.999-99",
                sexo: "Masculino",
                contato: {
                    
                        telefone: "(11) 99999-9999",
                        email: "email@email.com",
                        endereco:
                            "Rua das Ruas das Cidades,99",
                        cidade: "São Paulo - SP",
                        cep: "99999.99",
                    
                },
            },
        };
    },
};
</script>

<style lang="scss" scoped>
.perfil {
    @apply space-y-20 h-screen;
    &__mainInfo{
        @apply grid grid-cols-12 gap-4;
        
        @media(max-width:1024px){
            @apply flex justify-center items-center;
        }
        @media(max-width:728px){
            @apply flex-col ;
        }
        &--img{
            @apply col-span-3;

            @media screen and (max-width:1024px){
                @apply col-span-12 mx-auto;
            }
        }
        &--texts{
            @apply col-span-9 flex flex-col items-start justify-start;
            @media (max-width:1024px){
                @apply mx-auto justify-start items-center ;
            }
        }
    }
    &__info{
        @apply flex space-x-14 ;
        &--group{
            @apply flex flex-col justify-around ;
        }
        
        @media (max-width:728px){
            @apply flex-col justify-center items-center  space-y-5 space-x-0 m-0 p-0;
        &--group{
            @apply text-center;
        }
        }

    }
    &__font {
        &--title {
            @apply flex justify-center mt-6;
            font-family: "Poppins";
            font-style: normal;
            font-weight: 700;
            line-height: 48px;
            color: #ffffff;
        }
        &--subtitle {
            font-family: "Poppins";
            font-style: normal;
            font-weight: 700;
            line-height: 36px;
            color: #ffffff;
        }
        &--text {
            font-family: "Poppins";
            font-style: italic;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #e5e5e5;
        }
    }
}
</style>
