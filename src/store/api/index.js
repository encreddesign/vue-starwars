import Axios from 'axios';

/**
 * Requests api and commits response to mutation
 * @param {String} commitType
 * @param {Function} commit
 * @param {String} path
 */
export default async function request(commitType, commit, path = '/') {
  try {
    const response = await Axios.get(`https://swapi.co/api${path}`);

    if (response.data) {
      commit(commitType, {
        code: response.status,
        data: response.data,
      });
    }
  } catch (error) {
    commit(commitType, {
      code: error.status,
      message: error.data,
    });
  }
}
