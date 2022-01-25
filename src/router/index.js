import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VueKonva from 'vue-konva';
import VueFormulate from '@braid/vue-formulate'
import VueSimpleAccordion from 'vue-simple-accordion';
import 'vue-simple-accordion/dist/vue-simple-accordion.css';
import VueNavigationBar from "vue-navigation-bar";

require('../styles/form.css')
require('../styles/snow.css')


Vue.use(VueKonva);
Vue.use(VueRouter);
Vue.use(VueFormulate);
Vue.use(VueSimpleAccordion);
Vue.component("vue-navigation-bar", VueNavigationBar);


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
  component: () => import(/* webpackChunkName: "CardDesign" */ '../views/FaqView.vue'),
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
  name: 'BasicForm',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "CardDesign" */ '../views/BasicCardFormPage.vue'),
  props: true
},
{
  path: '/multiplayer-form',
  name: 'Multiplayer-form',
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
},
{
  path: '/character-build-form',
  name: 'Character Build form',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "CardDesign" */ '../views/CharaBuildFormPage.vue'),
  props: true
},
{
  path: '/character-render',
  name: 'CharaBuildRender',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "CardDesign" */ '../views/CharaBuildRender.vue'),
  props: true
},
{
  path: '/test',
  name: 'CharacterBuildBox',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "CardDesign" */ '../views/test.vue'),
  props: true
},
{
  path: '/navbar',
  name: 'Navbar test',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "CardDesign" */ '../views/test navbar.vue'),
  props: true
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
