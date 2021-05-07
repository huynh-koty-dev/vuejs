<template>
  <div id="app">
    <the-header title="Remember Me"></the-header>
    <the-resource></the-resource>
  </div>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheResource from './components/learning-resource/TheResource.vue';
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components:{
    TheHeader,
    TheResource
  }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
