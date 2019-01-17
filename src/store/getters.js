export const getResources = (state) => {
  const resources = [];

  if (state.resources.data) {
    const keys = Object.keys(state.resources.data);

    for (let keyI = 0; keyI < keys.length; keyI += 1) {
      const key = keys[keyI];

      resources.push({
        name: key.charAt(0).toUpperCase() + key.substr(1),
        handle: key,
        link: `/${key}`,
      });
    }
  }

  return resources;
};

export const getPeople = (state) => {
  const people = state.people;

  if (people.data && people.data.results) {
    return people.data.results.map((character) => {
      const updatedCharacter = character;

      updatedCharacter.id = updatedCharacter.url.match(/\d+/i)[0];

      return updatedCharacter;
    });
  }

  return [];
};

export const getPlanets = (state) => {
  const planets = state.planets;

  if (planets.data && planets.data.results) {
    return planets.data.results.map((planet) => {
      const updatedPlanet = planet;

      updatedPlanet.id = updatedPlanet.url.match(/\d+/i)[0];

      return updatedPlanet;
    });
  }

  return [];
};

export const getStarships = (state) => {
  const starships = state.starships;

  if (starships.data && starships.data.results) {
    return starships.data.results.map((starship) => {
      const updatedStarship = starship;

      updatedStarship.id = updatedStarship.url.match(/\d+/i)[0];

      return updatedStarship;
    });
  }

  return [];
};
