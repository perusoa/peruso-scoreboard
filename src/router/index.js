import Vue from 'vue';
import VueRouter from 'vue-router';
import Games from '../views/Games';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Games',
    component: Games
  }
]

const router = new VueRouter({
  routes
})

export default router
