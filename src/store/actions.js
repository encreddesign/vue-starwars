import ActionTypes from './types/action.types';
import MutationTypes from './types/mutation.types';
import request from './api';

export default {
  [ActionTypes.FETCH_RESOURCES]({ commit, state }) {
    const newState = state;

    newState.resources.loading = true;

    request(MutationTypes.RENDER_RESOURCES, commit);
  },
  [ActionTypes.FETCH_CHARACTERS]({ commit, state }) {
    const newState = state;

    newState.people.loading = true;

    request(MutationTypes.RENDER_CHARACTERS, commit, '/people/');
  },
};
