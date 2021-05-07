<template>
    <div>
        <button @click="login" v-if="!userIsAuthenticated">Login</button>
        <button @click="logout" v-else>logout</button>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
import { mapGetters } from 'vuex';
export default {
    methods:{
         ...mapActions(['login','logout'])
    },
    computed:{
        // isAuth(){
        //     return this.$store.getters.userIsAuthenticated;
        // }
        ...mapGetters(['userIsAuthenticated'])
    }
}
</script>