import Vue from 'vue'
import Vuex from 'vuex'
import CoachesModule from './modules/coaches/index.js'
import RequestModule from './modules/requests/index.js'
Vue.use(Vuex)
export const store = new Vuex.Store({
    modules:{
        coaches: CoachesModule,
        requests: RequestModule
    },
    state(){
        return{
            userId:'c3'
        }
    },
    getters:{
        userId(state){
            return state.userId;
        }
    }
})