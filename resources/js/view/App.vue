<template>
  <div id="app">
  
  <RouterView/>
  </div>
</template>

<script>
export default ({
  name:'App',
  
  components: {
  logo: () => import('../components/icons/logo.png')

},
  data: () => (
    {
      drawer: false,
      group: null
    })
})
</script>

<style>

</style>