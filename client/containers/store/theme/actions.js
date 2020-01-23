/**
 *
 * theme actions
 *
 */

import { DISPATCH_ACTIONS } from './constants';

export function toggleDarkMode() {
  return {
    type: DISPATCH_ACTIONS.TOGGLE_DARK_MODE
  };
}
