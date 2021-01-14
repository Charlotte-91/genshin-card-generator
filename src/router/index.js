import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Vuelidate from "vuelidate";
import VueKonva from 'vue-konva';

Vue.use(VueKonva);
Vue.use(VueRouter);
Vue.use(Vuelidate);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/card-page',
    name: 'CardPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "CardDesign" */ '../views/CardPage.vue'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
