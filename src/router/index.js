import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Vuelidate from "vuelidate";
import VueKonva from 'vue-konva';
import VueFormulate from '@braid/vue-formulate'
require('../styles/form.css')

Vue.use(VueFormulate)
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
  path: '/contact',
  name: 'Contact',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "CardDesign" */ '../views/ContactPage.vue'),
  props: true
},
{
  path: '/FAQ',
  name: 'FAQ',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "CardDesign" */ '../views/FaqPage.vue'),
  props: true
},
{
  path: '/Team-Comp-Form',
  name: 'Team comp form',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "CardDesign" */ '../views/TeamCompFormPage.vue'),
  props: true
},
{
  path: '/Team-card-render',
  name: 'Team Card Render',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "CardDesign" */ '../views/TeamCompRenderPage.vue'),
  props: true
},
{
  path: '/basic-card-render',
  name: 'Basic Card Render',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "CardDesign" */ '../views/BasicCardRenderPage.vue'),
  props: true
},
{
  path: '/basic-form',
  name: 'Basic Form',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "CardDesign" */ '../views/BasicCardFormPage.vue'),
  props: true
},
{
  path: '/multiplayer-form',
  name: 'Multiplayer Form',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "CardDesign" */ '../views/MultiplayerCardFormPage.vue'),
  props: true
},
{
  path: '/multiplayer-render',
  name: 'Multiplayer Render page',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "CardDesign" */ '../views/MultiplayerCardRenderPage.vue'),
  props: true
}

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
