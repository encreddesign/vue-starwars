import Vue from 'vue';
import Vuex from 'vuex';
import home from './modules/home';
import people from './modules/people';
import planets from './modules/planets';
import starships from './modules/starships';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    people,
    planets,
    starships,
  },
});
