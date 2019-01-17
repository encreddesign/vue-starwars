import MutationTypes from './types/mutation.types';

export default {
  [MutationTypes.RENDER_RESOURCES](state, payload) {
    const newState = state;

    newState.resources.loading = false;

    if (payload.message) {
      newState.resources.data = payload.data;
      return;
    }

    newState.resources.data = payload.data;
  },
  [MutationTypes.RENDER_CHARACTERS](state, payload) {
    const newState = state;

    newState.people.loading = false;

    if (payload.message) {
      newState.people.data = payload.data;
      return;
    }

    newState.people.data = payload.data;
  },
  [MutationTypes.RENDER_CHARACTER](state, payload) {
    const newState = state;

    newState.character.loading = false;

    if (payload.message) {
      newState.character.data = payload.data;
      return;
    }

    newState.character.data = payload.data;
  },
  [MutationTypes.RENDER_PLANETS](state, payload) {
    const newState = state;

    newState.planets.loading = false;

    if (payload.message) {
      newState.planets.data = payload.data;
      return;
    }

    newState.planets.data = payload.data;
  },
  [MutationTypes.RENDER_PLANET](state, payload) {
    const newState = state;

    newState.planet.loading = false;

    if (payload.message) {
      newState.planet.data = payload.data;
      return;
    }

    newState.planet.data = payload.data;
  },
  [MutationTypes.RENDER_STARSHIPS](state, payload) {
    const newState = state;

    newState.starships.loading = false;

    if (payload.message) {
      newState.starships.data = payload.data;
      return;
    }

    newState.starships.data = payload.data;
  },
  [MutationTypes.RENDER_STARSHIP](state, payload) {
    const newState = state;

    newState.starship.loading = false;

    if (payload.message) {
      newState.starship.data = payload.data;
      return;
    }

    newState.starship.data = payload.data;
  },
};
