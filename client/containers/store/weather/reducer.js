/**
 *
 * weather reducer
 *
 */

import { DISPATCH_ACTIONS } from './constants';

export const initialState = {
  loading: true,
  error: false,
  weather: {}
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case DISPATCH_ACTIONS.GET_WEATHER:
      return {
        ...state,
        loading: true
      };
    case DISPATCH_ACTIONS.GET_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        weather: action.weather
      };
    case DISPATCH_ACTIONS.GET_WEATHER_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
}

export default reducer;
