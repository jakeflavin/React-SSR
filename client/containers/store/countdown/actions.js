/**
 *
 * countdown actions
 *
 */

import { DISPATCH_ACTIONS } from './constants';

export function setTimeUntil(timeUntil) {
  return {
    type: DISPATCH_ACTIONS.TIME_UTIL,
    timeUntil
  };
}
