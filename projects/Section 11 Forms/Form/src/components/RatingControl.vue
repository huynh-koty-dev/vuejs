<template>
    <ul>
        <li :class="{active: rating==='poor'}"><button type="button" @click=" activate('poor')">Poor</button></li>
        <li :class="{active: rating==='average'}"><button type="button" @click=" activate('average')">Average</button></li>
        <li :class="{active: rating==='great'}"><button type="button" @click=" activate('great')">Great</button></li>
    </ul>
</template>
<script>
export default {
    props:['rating'],
    emits:['eventOption'],
    // data(){
    //     return{
    //         activeOption: this.modelValue
    //     }
    // },
    methods:{
        activate(option){
            // this.activeOption=option;
            console.log('ratingcontrol'+ option)
            this.$emit('eventOption',option)
        }
    }
}
</script>
<style scoped>
.active{
    border-color: rgb(199, 0, 199);
}
.active button{
    color:rgb(199, 0, 199);
}
ul{
    list-style: none;
    margin: 0.5rem 0;
    padding: 0;
    display: flex;
}
li{
    margin: 0 1rem;
    border: 1px solid #ccc;
    padding:1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
button{
    font: inherit;
    border:none;
    background-color: transparent;
    cursor:pointer;
}
</style>