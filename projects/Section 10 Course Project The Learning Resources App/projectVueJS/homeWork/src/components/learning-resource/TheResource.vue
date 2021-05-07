<template>
<section>
    <base-card>
        <button @click="setSelectedTab('stored-resource')">Stored Resources</button>
        <button @click="setSelectedTab('add-resources')">Add Resource</button> 
    </base-card>
    <keep-alive>
    <component :is="selectedTab"></component>
    </keep-alive>
</section>
</template>
<script>
import StoredResource from './StoredResource.vue';
import AddResources from './AddResources.vue';
export default {
    components:{
         StoredResource,
         AddResources,
    },
    data(){
        return{
            selectedTab:'stored-resource',
            storedResources:[
             {
                 id:'official-guide', 
                 title:'Official Guide', 
                 description:'the official in vue.js documentation.',
                 link:'https://vuejs.org'         
            },
            {
                 id:'google', 
                 title:'Google', 
                 description:'learn to Google...',
                 link:'https://www.google.com.vn'         
            }
            ]
        };
    },
    provide(){
        return{
            storedResources:this.storedResources,
            addResource: this.addResource,
            removeItem: this.removeItem
        }
    },
    methods:{
        setSelectedTab(tab){
            this.selectedTab = tab;
        },
        addResource(title, description, url){
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: url
            }
            this.storedResources.unshift(newResource);
            this.selectedTab='stored-resource';
        },
        removeItem(resId){
            const resIndex = this.storedResources.findIndex(res => res.id === resId);
            this.storedResources.splice(resIndex,1);
        }
    }
}
</script>