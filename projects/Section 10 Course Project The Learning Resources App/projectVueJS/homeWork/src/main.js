import Vue from 'vue'
import App from './App.vue'
import BaseButton from './components/UI/BaseButton.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseDialog from './components/UI/BaseDialog.vue';
Vue.component('base-button',  BaseButton )
Vue.component('base-card', BaseCard)
Vue.component('base-dialog', BaseDialog)
new Vue({
  el: '#app',
  render: h => h(App)
})
