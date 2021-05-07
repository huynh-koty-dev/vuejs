<template>
    <ul>
        <resource-item
          v-for="res in storedResources"
          :key="res.id"
          :id="res.id"
          :title="res.title"
          :description="res.description"
          :link="res.link"
         ></resource-item>
    </ul>
</template>
<script>
import ResourceItem from './ResourceItem.vue';
export default {
    name:'stored-resource',
    inject:['storedResources'],
    data(){
        return{
            
        }
    },
    components:{
        ResourceItem,
    }
}
</script>
<style >
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>