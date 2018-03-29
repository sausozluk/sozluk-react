import { fromJS } from 'immutable';

import { GET_LEFT_FRAME_SUCCESS, GET_LEFT_FRAME } from '../actions/actionTypes';

const initialState = fromJS({
  data: false,
});

function leftFrameReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LEFT_FRAME:
      return state
        .set('data', false);
    case GET_LEFT_FRAME_SUCCESS:
      return state
        .set('data', action.data);
    default:
      return state;
  }
}

export default leftFrameReducer;
