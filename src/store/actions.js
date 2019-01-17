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
  [ActionTypes.FETCH_CHARACTER]({ commit, state }, characterId) {
    const newState = state;

    newState.character.loading = true;

    request(MutationTypes.RENDER_CHARACTER, commit, `/people/${characterId}`);
  },
  [ActionTypes.FETCH_PLANETS]({ commit, state }) {
    const newState = state;

    newState.planets.loading = true;

    request(MutationTypes.RENDER_PLANETS, commit, '/planets/');
  },
  [ActionTypes.FETCH_PLANET]({ commit, state }, planetId) {
    const newState = state;

    newState.planet.loading = true;

    request(MutationTypes.RENDER_PLANET, commit, `/planets/${planetId}`);
  },
  [ActionTypes.FETCH_STARSHIPS]({ commit, state }) {
    const newState = state;

    newState.starships.loading = true;

    request(MutationTypes.RENDER_STARSHIPS, commit, '/starships/');
  },
  [ActionTypes.FETCH_STARSHIP]({ commit, state }, starshipId) {
    const newState = state;

    newState.starships.loading = true;

    request(MutationTypes.RENDER_STARSHIP, commit, `/starship/${starshipId}`);
  },
};
