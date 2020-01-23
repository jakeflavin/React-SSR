/**
 *
 * animations actions
 *
 */

import { DISPATCH_ACTIONS } from './constants';

export function toggleAnimations() {
  return {
    type: DISPATCH_ACTIONS.TOGGLE_ANIMATIONS
  };
}
