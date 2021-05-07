import Vue from 'vue'
import Vuex from 'vuex'
import productsModule from './module/product.js'
import cartModule from './module/cart.js'
Vue.use(Vuex)

export const store = new Vuex.Store({
    modules:{
        prods: productsModule,
        cart:cartModule
    }
})