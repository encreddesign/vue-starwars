import actions from '../actions';
import mutations from '../mutations';
import { getPeople } from '../getters';

export default {
  namespaced: true,
  state: {
    people: {
      loading: false,
      data: null,
    },
  },
  actions,
  mutations,
  getters: {
    getPeople,
  },
};
