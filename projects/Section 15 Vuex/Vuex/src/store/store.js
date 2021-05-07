import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const counterModule = {
    state:{
        counter:0,
    },
    mutations:{
        increment(state){           
            state.counter = state.counter+3;              
    },
        increase(state, payload){
        state.counter = state.counter + payload.value;
    },
    },
    actions:{
        increment(context){
            setTimeout(()=>{
                context.commit('increment');
            },2000)
        },
        increase(context,payload){
            context.commit('increase',payload);
        },
    },
    getters:{
        finalCounter(state){
            return state.counter;
        },
        normalizedCounter(_,getters){
            const finalCounter = getters.finalCounter;
            if(finalCounter<0){
                return 0;
            }
            if(finalCounter >100){
                return 100;
            }
            return finalCounter;
        },
    }
}

export const store = new Vuex.Store({
    modules:{
        numbers:counterModule
    },
    state:{
        
        isLoggedIn:false
    },
    mutations:{
        
        setAuth(state,payload){
            state.isLoggedIn = payload.isAuth;
        }
    },
    actions:{
        
        login(context){
            context.commit('setAuth',{isAuth:true});
        },
        logout(context){
            context.commit('setAuth',{isAuth:false});
        },
    },
    getters:{
        
        userIsAuthenticated(state){
            return state.isLoggedIn;
        }
    }
})