/**
 *
 * countdown selectors
 *
 */

import { createSelector } from 'reselect';
import { KEY } from './constants';

const selectItemList = state => state[KEY];

const makeSelectItemList = () =>
  createSelector(selectItemList, itemListState => itemListState.items);

const makeSelectDraft = () =>
  createSelector(selectItemList, itemListState => itemListState.draft);

export { selectItemList, makeSelectItemList, makeSelectDraft };
