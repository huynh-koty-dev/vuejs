<template>
    <div>
        <button @click="increment">Add 3</button><br>
        <button @click="increase({value:10})">Add 10</button>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    methods:{
        // addOne(){
        //     this.$store.dispatch('increment');
        // }
        ...mapActions(['increment','increase'])
    }
}
</script>