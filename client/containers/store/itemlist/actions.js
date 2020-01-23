/**
 *
 * item list actions
 *
 */

import { DISPATCH_ACTIONS } from './constants';

export function updateDraft(draft) {
  return {
    type: DISPATCH_ACTIONS.UPDATE_DRAFT,
    draft
  };
}

export function addItem(item) {
  return {
    type: DISPATCH_ACTIONS.ADD_ITEM,
    item
  };
}

export function removeItem(item) {
  return {
    type: DISPATCH_ACTIONS.REMOVE_ITEM,
    item
  };
}
