<template>
    <div class="pagamentos">
       <v-container>
        <h4 class="alunos__font--title">Historico de Transações</h4>
        <div class="px-7">
            <v-simple-table
    fixed-header
  >
    <template v-slot:default>
      <thead >
        <tr class="tabela__header">
          <th class="text-left">
            Plano
          </th>
          <th class="text-left">
            Vencimento
          </th>
          <th class="text-left">
            valor
          </th>
          <th class="text-left">
            Metodo de Pag.
          </th>
          <th class="text-left">
            Situação
          </th>
        </tr>
      </thead>
      <tbody class="tabela">
        <tr
        class="tabela__linha"
          v-for="item in pagas"
          :key="item.plano"
        >
          <td class="tabela__celula">{{ item.plano }}</td>
         
          <td class="tabela__celula">{{ item.vencimento }}</td>
          <td class="tabela__celula">R${{item.valor}}</td>
          <td class="tabela__celula">{{ item.metodo }}</td>
          <td v-if="item.situacao === 'Pendente' " class="tabela__celula pendente">{{ item.situacao }}</td>
          <td v-else class="tabela__celula pago">{{ item.situacao }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
        </div>
       </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pagas:[
               {
                plano:"Standard",
                vencimento:"15/05/2022",
                valor:"89,90",
                metodo:'boleto',
                situacao:"Pendente"
               },
               {
                plano:"Fighter",
                vencimento:"15/05/2022",
                valor:"89,90",
                metodo:'boleto',
                situacao:"Pago"
               }

            ],
            pagamentos: [],
        };
    },
    methods: {
        getData() {
            this.$axios.get("https://swapi.dev/api/people/").then((response) => {
                this.pagamentos = response.data.results;
            });
        },
    },
    mounted() {
        this.getData();
    },
};
</script>

<style scoped lang="scss">
    @import '../../../sass/variables.scss';
    .pagamentos{
        @apply h-screen;
    }

    @media (max-width:768px){
        h4{
            @apply flex justify-center
        }
    }
    th{
        background-color: $azul-escuro!important;
        color: $branco;
    }
    .tabela{
        background-color: $azul-escuro;
        &__celula{
            color: $branco;
            border-radius: 0%;
            border-bottom: 2px solid #FAFAFA!important;
        }
    }
    .pago{
        color: #39DB00 !important;
    }
    .pendente{
        color: #FF2C2C!important;
    }
</style>
