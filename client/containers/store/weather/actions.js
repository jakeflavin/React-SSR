/**
 *
 * weather actions
 *
 */

import { DISPATCH_ACTIONS } from './constants';

export function getWeather(coords) {
  return {
    type: DISPATCH_ACTIONS.GET_WEATHER,
    coords
  };
}

export function getWeatherSuccess(weather) {
  return {
    type: DISPATCH_ACTIONS.GET_WEATHER_SUCCESS,
    weather
  };
}

export function getWeatherError(error) {
  return {
    type: DISPATCH_ACTIONS.GET_WEATHER_ERROR,
    error
  };
}
