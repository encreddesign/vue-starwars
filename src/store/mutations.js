import MutationTypes from './types/mutation.types';

export default {
  [MutationTypes.RENDER_CHARACTERS](state, payload) {
    const newState = state;

    newState.resources.loading = false;

    if (payload.message) {
      newState.resources.data = payload.data;
      return;
    }

    newState.resources.data = payload.data;
  },
};
