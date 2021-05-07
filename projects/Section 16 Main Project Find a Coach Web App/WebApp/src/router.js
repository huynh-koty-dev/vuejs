import Vue from 'vue'
import VueRouter from 'vue-router'
import CoachesDetail from './pages/coaches/CoachesDetail.vue'
import CoachesLists from './pages/coaches/CoachesLists.vue'
import CoachRegistration from './pages/coaches/CoachRegistration.vue'
import ContactCoach from './pages/requests/ContactCoach.vue'
import RequestReceived from './pages/requests/RequestReceived.vue'
import NotFound from './pages/NotFound.vue'
Vue.use(VueRouter)
const routes = [
    {path:'/',redirect:'/coaches'},
    {path:'/coaches',component:CoachesLists},
    {path:'/coaches/:id',component:CoachesDetail, props:true,children:[
        {path:'contact',component:ContactCoach},
    ]},
    {path:'/register',component:CoachRegistration},
    {path:'/requests',component:RequestReceived},
    {path:'/:notFound(.*)',component:NotFound},
]
const router = new VueRouter({
    routes,
    mode:'history'
})
export default router;