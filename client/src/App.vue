<template>
  <div id="app" class="main-container">
    <b-img src="/src/assets/MaineCoon.jpg" fluid center rounded alt="Maine Coon kitten" />
    <router-view />
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import Image from 'bootstrap-vue/es/components/image/img'

  export default {
    name: 'app',
    components: {
      'b-img': Image
    }
  }
</script>

<style lang="scss">
  .main-container {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: forestgreen;

    img {
      margin-bottom: 30px;
      margin-top: 20px;
      max-height: 300px;
    }
  }
</style>
