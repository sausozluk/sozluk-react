import { GET_RANDOMS, GET_RANDOMS_SUCCESS } from './actionTypes';

export function getRandoms() {
  return {
    type: GET_RANDOMS,
  };
}

export function randomsLoaded(data) {
  return {
    type: GET_RANDOMS_SUCCESS,
    data,
  };
}
