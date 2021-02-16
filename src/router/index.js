import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Vuelidate from "vuelidate";
import VueKonva from 'vue-konva';
import shareIt from 'vue-share-it';
import VueSocialSharing from 'vue-social-sharing'


Vue.use(shareIt);
Vue.use(VueKonva);
Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.use(VueSocialSharing);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/card',
    name: 'CardPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "CardDesign" */ '../views/CardPage.vue'),
    props: true
  },
  {
  path: '/contact',
  name: 'Contact',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "CardDesign" */ '../views/ContactPage.vue'),
  props: true
}

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
