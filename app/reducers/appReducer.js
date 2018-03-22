import { fromJS } from 'immutable';

import { LOADING, READY, SHOW_ERROR, HIDE_ERROR } from '../actions/actionTypes';

const initialState = fromJS({
  loading: false,
  error: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return state
        .set('loading', true)
        .set('error', false);
    case READY:
      return state
        .set('loading', false)
        .set('error', false);
    case SHOW_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case HIDE_ERROR:
      return state
        .set('error', false)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
