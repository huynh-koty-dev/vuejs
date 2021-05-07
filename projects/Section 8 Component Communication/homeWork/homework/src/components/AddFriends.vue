<template>
    <form @submit.prevent="submitData" class="styleForm">
        <label>name:</label>
        <input v-model="enterName" type="text"><br>
        <label>phone:</label>
        <input v-model="enterPhone" type="text"><br>
        <label>email:</label>
        <input v-model="enterEmail" type="email" required>
        <button type="submit" > add friend</button>
    </form>
</template>
<script>
export default {
    name:"add-friend",
    props:{
        id:{type:String},
        name:{type:String, default:''},
        phone:{type: String,default:''},
        email:{type:String,default:''},
        isFavourite:{type:Boolean,default:false}
    },
    data(){
        return{
            enterName:'',
            enterPhone:'',
            enterEmail:''
        }
    },
    methods:{
        submitData(){
            this.$emit('AddFriend',
            this.enterName,
            this.enterPhone,
            this.enterEmail);
            
        }
    }
}
</script>
<style>
.styleForm{
    padding:20px;
}
label,input{
    
    margin-bottom:10px;
}
</style>