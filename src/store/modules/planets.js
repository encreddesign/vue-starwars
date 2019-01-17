import actions from '../actions';
import mutations from '../mutations';
import { getPlanets } from '../getters';

export default {
  namespaced: true,
  state: {
    planets: {
      loading: false,
      data: null,
    },
    planet: {
      loading: false,
      data: null,
    },
  },
  actions,
  mutations,
  getters: {
    getPlanets,
  },
};
