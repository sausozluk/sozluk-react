import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_RANDOMS } from '../actions/actionTypes';
import { randomsLoaded } from '../actions/randomsPageActions';
import { ready, loading, showError } from '../actions/appActions';

import request from '../utils/request';

export function* getRandoms() {
  const requestURL = 'http://sausozluk.net/service/proxy/api/v1/topics/i/random';

  yield put(loading());

  try {
    const randoms = yield call(request, requestURL);
    yield put(randomsLoaded(randoms.data));
    yield put(ready());
  } catch (err) {
    yield put(showError(err));
  }
}

export default function* randomData() {
  yield takeLatest(GET_RANDOMS, getRandoms);
}
