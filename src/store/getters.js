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
      updatedCharacter.starshipIds = updatedCharacter.starships.map(url => url.match(/\d+/i)[0]);

      return updatedCharacter;
    });
  }

  return [];
};
