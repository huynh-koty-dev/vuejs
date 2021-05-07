<template>
  <div id="app">
    
    <base-container title="Vuex" v-if="userIsAuthenticated">
      <the-counter></the-counter>
      <favourite-value></favourite-value>
      <button @click="addOne">add 10</button>
      <change-counter></change-counter>
    </base-container>
    <base-container title="Auth">
      <user-auth></user-auth>
    </base-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavouriteValue from './components/FavouriteValue.vue';
import UserAuth from './components/UserAuth.vue';
export default {
  name: 'app',
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavouriteValue,
    UserAuth
  },
  props:['counter'],
  data(){
    return{

    }
  },
  methods:{
    addOne(){
      this.$store.dispatch('increase',{value:10});
    }
  },
  computed:{
    ...mapGetters(['userIsAuthenticated'])
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
