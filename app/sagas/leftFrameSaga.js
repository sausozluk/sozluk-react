import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_LEFT_FRAME } from '../actions/actionTypes';
import { leftFrameLoaded } from '../actions/leftFrameActions';
import { ready, loading, showError } from '../actions/appActions';

import request from '../utils/request';

export function* getLeftFrame(action) {
  const requestURL = `http://sausozluk.net/service/proxy/api/v1/topics?count=20&timestamp=${action.timestamp}`;

  yield put(loading());

  try {
    const leftFrame = yield call(request, requestURL);
    yield put(leftFrameLoaded(leftFrame.data));
    yield put(ready());
  } catch (err) {
    yield put(showError(err));
  }
}

export default function* leftFrameData() {
  yield takeLatest(GET_LEFT_FRAME, getLeftFrame);
}
