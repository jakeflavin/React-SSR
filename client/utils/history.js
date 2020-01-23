import { createBrowserHistory, createMemoryHistory } from 'history';

export const isServer = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

const history = isServer ? createMemoryHistory() : createBrowserHistory();

export default history;
