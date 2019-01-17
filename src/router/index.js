import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(Router);

const people = () => import('../views/People.vue');
const planets = () => import('../views/Planets.vue');
const starships = () => import('../views/Starships.vue');

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/people/:id?',
      name: 'people',
      component: people,
    },
    {
      path: '/planets/:id?',
      name: 'planets',
      component: planets,
    },
    {
      path: '/starships/:id?',
      name: 'starships',
      component: starships,
    },
  ],
});
