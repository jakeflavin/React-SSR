/**
 *
 * theme selectors
 *
 */

import { createSelector } from 'reselect';
import { KEY } from './constants';

const selectWeather = state => state[KEY];

const makeSelectWeather = () =>
  createSelector(selectWeather, weatherState => weatherState.weather);

const makeSelectWeatherLoading = () =>
  createSelector(selectWeather, weatherState => weatherState.loading);

const makeSelectWeatherError = () =>
  createSelector(selectWeather, weatherState => weatherState.error);

export {
  selectWeather,
  makeSelectWeather,
  makeSelectWeatherLoading,
  makeSelectWeatherError
};
