<template>
    <div id="app">
        <div v-if="$route.name === 'Login Funcionario'" class="hidden"></div>
        <navbar-funcionario v-else></navbar-funcionario>

        <router-view></router-view>
    </div>
</template>
<script>
export default {
    methods: {
        // validate(){ //essa função é só caso o token ja venha do back direto
        //     this.$axios.get().then((response)=>{
        //         console.log(response);

        //         if(response.data.status === "Token is Invalid"){
        //             this.$router.push('/funcionarios')
        //         }
        //     })
        // }
    },
    watch:{
        verificaToken: function(){
            const token = localStorage.getItem('myauth_token')
            if(!token){
                this.$router.push('/funcionarios')
            
        }
        }
    },
};
</script>
<style>
body {
    background: #222831;
}
</style>
