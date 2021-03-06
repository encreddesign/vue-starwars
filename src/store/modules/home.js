import actions from '../actions';
import mutations from '../mutations';
import { getResources } from '../getters';

export default {
  namespaced: true,
  state: {
    resources: {
      loading: false,
      data: null,
    },
  },
  actions,
  mutations,
  getters: {
    getResources,
  },
};
