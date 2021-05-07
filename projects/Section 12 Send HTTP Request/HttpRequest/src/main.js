import Vue from 'vue'
import App from './App.vue'
import BaseButton from './components/UI/BaseButton.vue'
import BaseCard from './components/UI/BaseCard.vue'
Vue.component('base-button',BaseButton);
Vue.component('base-card',BaseCard)
new Vue({
  el: '#app',
  render: h => h(App)
})
