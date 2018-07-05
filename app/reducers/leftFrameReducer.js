import { fromJS } from 'immutable';

import { GET_LEFT_FRAME_SUCCESS, GET_LEFT_FRAME } from '../actions/actionTypes';

const initialState = fromJS({
  data: {
    entries_count: 0,
    topics: [],
    topics_count: 0,
  },
});

function leftFrameReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LEFT_FRAME:
      return state;
    case GET_LEFT_FRAME_SUCCESS:
      const data = action.data;

      return state
        .setIn(['data', 'entries_count'], data.entries_count)
        .setIn(['data', 'topics_count'], data.topics_count)
        .updateIn(['data', 'topics'], (topics) => topics.concat(data.topics));
    default:
      return state;
  }
}

export default leftFrameReducer;
