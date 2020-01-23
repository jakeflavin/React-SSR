/**
 *
 * theme selectors
 *
 */

import { createSelector } from 'reselect';
import { KEY } from './constants';

const selectTheme = state => state[KEY];

const makeSelectTheme = () =>
  createSelector(selectTheme, themeState => themeState.darkModeEnabled);

export { selectTheme, makeSelectTheme };
