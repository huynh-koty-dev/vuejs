<template>
    <div>
        <section>
            <coach-filter @change-filter="setFilter"></coach-filter>
        </section>
        <section>
            <base-card>
            <div class="controls">
                <base-button mode="outline" @click="loadCoaches">Refresh</base-button>
                <base-button v-if="!isCoach && !isLoading" link to="/register">Register as Coach</base-button>
            </div>
            <div v-if="isLoading">
                <base-spinner></base-spinner>
            </div>
           <ul v-else-if="hasCoaches"> 
               <coach-item v-for="coach in filterCoaches" 
               :key="coach.id" 
               :id="coach.id" 
               :rate="coach.hourlyRate"
               :firstName="coach.firstName"
               :lastName="coach.lastName"
               :areas="coach.areas">
                   {{coach.firstName}}
               </coach-item>
           </ul>
           <h3 v-else>No coaches found.</h3>
           </base-card>
        </section>
    </div>
</template>
<script>
import CoachFilter from '../../components/coaches/CoachFilter.vue'
import CoachItem from '../../components/coaches/CoachItem.vue'

export default {
    components:{
        CoachItem,
        
        CoachFilter
    },
    data(){
        return{
            isLoading:false,
            activeFilter:{
                frontend:true,
                backend:true,
                carrer:true
            }
        }
    },
    created(){
        this.loadCoaches();
    },
    methods:{
        
        setFilter(updateFilters){
            this.activeFilter = updateFilters;
        },
         loadCoaches(){
            this.isLoading=true;
            this.$store.dispatch('coaches/loadCoaches');
            
            setTimeout(()=>{
                this.isLoading=false;
            },1000)
        },
        
    },
    computed:{
        isCoach(){
            return this.$store.getters['coaches/isCoach'];
        },
        filterCoaches(){
            const coaches = this.$store.getters['coaches/coaches'];
            return coaches.filter(coach => {
                if(this.activeFilter.frontend && coach.areas.includes('frontend')){
                    return true;
                }
                if(this.activeFilter.backend && coach.areas.includes('backend')){
                    return true;
                }
                if(this.activeFilter.career && coach.areas.includes('career')){
                    return true;
                }
                return false;  
            });
        },
        hasCoaches(){
            return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
        }
    },
    
}
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>