import Axios from 'axios';
import ActionTypes from './types/action.types';
import MutationTypes from './types/mutation.types';

export default {
  async [ActionTypes.FETCH_CHARACTERS]({ commit, state }) {
    const newState = state;

    newState.resources.loading = true;

    try {
      const response = await Axios.get('https://swapi.co/api/');

      if (response.data) {
        commit(MutationTypes.RENDER_CHARACTERS, {
          code: response.status,
          data: response.data,
        });
      }
    } catch (error) {
      commit(MutationTypes.RENDER_CHARACTERS, {
        code: error.status,
        message: error.data,
      });
    }
  },
};
