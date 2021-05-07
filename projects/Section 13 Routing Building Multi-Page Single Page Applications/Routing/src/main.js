import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import notFound from './components/nav/notFound.vue'
Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/teams' },
  { name:'teams', path: '/teams', component: TeamsList, children:[
    { name:'team-members', path: ':teamId', component: TeamMembers,props:true },
  ]},
  { path: '/users', component: UsersList},
  
  { path: '/:notFound(.*)', component: notFound }
];
const router = new VueRouter({
  routes,
  mode:'history',
  linkActiveClass:'active'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
