import { fromJS } from 'immutable';

import { GET_RANDOMS_SUCCESS, GET_RANDOMS } from '../actions/actionTypes';

const initialState = fromJS({
  data: false,
});

function randomsPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RANDOMS:
      return state
        .set('data', false);
    case GET_RANDOMS_SUCCESS:
      return state
        .set('data', action.data);
    default:
      return state;
  }
}

export default randomsPageReducer;
