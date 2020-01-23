import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { StaticRouter } from 'react-router';
import App from 'containers/layouts/App';
import { Provider } from 'react-redux';
import configureStore from 'configureStore';
import template from 'index.hbs';
import themeRducer from 'containers/store/theme/reducer';
import { KEY } from 'containers/store/theme/constants';

const isDevelopment = process.env.NODE_ENV === 'development';

export default app => {
  app.get('*', (req, res) => {
    const state = { theme: { darkModeEnabled: true } };
    const reducers = {};
    reducers[KEY] = themeRducer;
    const store = configureStore(state, reducers);
    const preloadedState = store.getState();

    const sheet = new ServerStyleSheet();

    const html = ReactDOMServer.renderToString(sheet.collectStyles(
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
          <App />
        </StaticRouter>
      </Provider>
    ));

    const styleTags = sheet.getStyleTags();
    sheet.seal();

    res.send(template({ isDevelopment, html, styleTags, state: JSON.stringify(preloadedState) }));
  });
};
