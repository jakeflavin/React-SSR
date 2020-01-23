/**
 *
 * annimations selectors
 *
 */

import { createSelector } from 'reselect';
import { KEY } from './constants';

const selectAnimations = state => state[KEY];

const makeSelectAnimations = () =>
  createSelector(
    selectAnimations,
    animationseState => animationseState.animationsEnabled
  );

export { selectAnimations, makeSelectAnimations };
