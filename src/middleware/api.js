/* global fetch:false */
import { REQUEST, SUCCESS, FAILURE } from '../store/constants';

const HOST_API = process.env.HOST_API || 'https://api.coindesk.com';

export const API = () => next => (action) => {
  const { callAPI, type, options, ...rest } = action;
  if (!callAPI) return next(action);
  next({
    ...rest, type: type + REQUEST, payload: options,
  });

  return fetch(HOST_API + callAPI, {
    headers: {
      'content-type': 'application/json',
    },
    method: 'GET',
    mode: 'cors',
  })
    .then(res => res.json())
    .then(response => next({ ...rest, type: type + SUCCESS, payload: response }))
    .catch(error => next({ ...rest, type: type + FAILURE, error }));
};

export default API;
