import Vue from 'vue'
import router from './router.js';
import {store} from './store/index.js'
import App from './App.vue'
import BaseBadge from './components/ui/BaseBadge.vue';


Vue.component('base-badge', BaseBadge);
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
