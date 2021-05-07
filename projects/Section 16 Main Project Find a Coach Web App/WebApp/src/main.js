import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import {store} from './store/index.js'
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';
Vue.component('base-card',BaseCard);
Vue.component('base-button',BaseButton);
Vue.component('base-badge',BaseBadge);
Vue.component('base-spinner',BaseSpinner);
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
