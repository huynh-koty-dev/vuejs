import Vue from 'vue';
import VueRouter from 'vue-router';

import ProductsList from './pages/ProductsList.vue';
import UserCart from './pages/UserCart.vue';
import ShopAdmin from './pages/ShopAdmin.vue';
Vue.use(VueRouter);

const routes = [
    { path: '/', redirect: '/products' },
    { path: '/products', component: ProductsList },
    { path: '/cart', component: UserCart },
    { path: '/admin', component: ShopAdmin },
];
const router = new VueRouter({
  routes,
  mode:'history'
});

export default router;