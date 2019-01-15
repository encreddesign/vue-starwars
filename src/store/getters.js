export default {
  getResources: (state) => {
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
  },
};
