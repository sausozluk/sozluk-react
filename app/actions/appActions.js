import { LOADING, READY, SHOW_ERROR, HIDE_ERROR } from './actionTypes';

export function loading() {
  return {
    type: LOADING,
  };
}

export function ready() {
  return {
    type: READY,
  };
}

export function showError(error) {
  return {
    type: SHOW_ERROR,
    error,
  };
}

export function hideError() {
  return {
    type: HIDE_ERROR,
  };
}
