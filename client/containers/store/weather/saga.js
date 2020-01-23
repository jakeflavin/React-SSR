/**
 * weather sagas
 *
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { getWeatherSuccess, getWeatherError } from './actions';
import { DISPATCH_ACTIONS } from './constants';

export function* getWeather({ coords }) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  };
  try {
    const response = yield call(
      request,
      `/api/weather/${coords}`,
      requestOptions
    );
    yield put(getWeatherSuccess(response));
  } catch (err) {
    yield put(getWeatherError(err));
  }
}

export default function* sagaFunction() {
  yield takeLatest([DISPATCH_ACTIONS.GET_WEATHER], getWeather);
}
