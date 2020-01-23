/**
 *
 * coutdown reducer
 *
 */

import { DISPATCH_ACTIONS } from './constants';
import countdown from 'countdown';

export const initialState = {
  timeUntil: { ...countdown(new Date()) }
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case DISPATCH_ACTIONS.TIME_UTIL:
      return {
        ...state,
        timeUntil: action.timeUntil
      };
    default:
      return state;
  }
}

export default reducer;
