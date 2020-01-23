/**
 *
 * item list reducer
 *
 */

import { DISPATCH_ACTIONS } from './constants';

export const initialState = {
  draft: '',
  items: [{ label: 'Toy Truck' }, { label: 'iPad' }, { label: 'Hot Wheels' }]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case DISPATCH_ACTIONS.UPDATE_DRAFT:
      return {
        ...state,
        draft: action.draft
      };
    case DISPATCH_ACTIONS.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.item]
      };
    case DISPATCH_ACTIONS.REMOVE_ITEM:
      return {
        ...state,
        items: [...state.items.filter(x => x.label !== action.item.label)]
      };
    default:
      return state;
  }
}

export default reducer;
