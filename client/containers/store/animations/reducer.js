/**
 *
 * theme reducer
 *
 */

import { KEY, DISPATCH_ACTIONS } from './constants';

let initialState = {
  animationsEnabled: true
};

if (typeof window !== 'undefined' && window[`__PRELOADED_${KEY}_STATE__`]) {
  initialState = window[`__PRELOADED_${KEY}_STATE__`];
  console.log(initialState)
  delete window[`__PRELOADED_${KEY}_STATE__`];
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case DISPATCH_ACTIONS.TOGGLE_ANIMATIONS:
      return {
        ...state,
        animationsEnabled: !state.animationsEnabled
      };
    default:
      return state;
  }
}

export default reducer;
