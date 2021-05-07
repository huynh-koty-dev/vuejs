<template>
    <li>
        <h2>{{name}} <label>{{isFavourite?' (favourite)':''}}</label></h2>
        <button @click="activeContactHandle">{{activeContact?'hide':'show'}}</button>
        <button @click="favouriteHandle">Favourite</button>
        <button @click="$emit('deleteHandle',id)">Delete</button>
          <div v-if="activeContact" class="text">
              <p>name: {{name}}</p>
              <p>phone: {{phone}}</p>
              <p>email: {{email}}</p>
          </div>
    </li>
</template>
<script>
export default {
    name:"friend-contact",
    props:{
        id:{type:String},
        name:{type:String, default:''},
        phone:{type: String,default:''},
        email:{type:String,default:''},
        isFavourite:{type:Boolean,default:false}
    },
    data(){
        return{
            activeContact:false
        }
    },
    methods:{
        activeContactHandle(){        
            this.activeContact =!this.activeContact;            
        },
        favouriteHandle(){
            this.$emit('favourite-toggle',this.id)
        }
    }    
}
</script>
<style>
.text{
    text-align: center;
}
p{
    text-align: left;
}
</style>