import actions from '../actions';
import mutations from '../mutations';
import getters from '../getters';

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
  getters,
};
