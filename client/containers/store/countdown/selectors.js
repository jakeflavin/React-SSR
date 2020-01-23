/**
 *
 * countdown selectors
 *
 */

import { createSelector } from 'reselect';
import { KEY } from './constants';

const selectCountdown = state => state[KEY];

const makeSelectCountdown = () =>
  createSelector(selectCountdown, countdownState => countdownState.timeUntil);

export { selectCountdown, makeSelectCountdown };
