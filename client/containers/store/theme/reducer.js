/**
 *
 * theme reducer
 *
 */

import { DISPATCH_ACTIONS } from './constants';

export const initialState = {
  darkModeEnabled: false
  // darkModeEnabled: window.matchMedia('(prefers-color-scheme: dark)').matches,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case DISPATCH_ACTIONS.TOGGLE_DARK_MODE:
      return {
        ...state,
        darkModeEnabled: !state.darkModeEnabled
      };
    default:
      return state;
  }
}

export default reducer;
