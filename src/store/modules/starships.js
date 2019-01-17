import actions from '../actions';
import mutations from '../mutations';
import { getStarships } from '../getters';

export default {
  namespaced: true,
  state: {
    starships: {
      loading: false,
      data: null,
    },
    starship: {
      loading: false,
      data: null,
    },
  },
  actions,
  mutations,
  getters: {
    getStarships,
  },
};
