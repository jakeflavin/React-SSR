/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

// Needed for redux-saga es6 generator support
import '@babel/polyfill';

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, Link } from 'react-router-dom';

import HomePage from 'containers/pages/HomePage';
import DashboardPage from 'containers/pages/DashboardPage';
import NotFoundPage from 'containers/pages/NotFoundPage';
import LetItSnow from 'components/Animations/LetItSnow';
import DarkModeToggleButton from 'containers/general/DarkModeToggleButton';
import AnimationsToggleButton from 'containers/general/AnimationsToggleButton';
import AppStyled from './AppStyled';

import FooterStyled from './FooterStyled';

// Import root app
import ThemeProvider from 'containers/providers/ThemeProvider';
import theme from '../../../theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        titleTemplate="%s - Christmas Countdown"
        defaultTitle="Christmas Countdown"
      >
        <meta name="description" content="Christmas Countdown" />
      </Helmet>

      <LetItSnow />

      <AppStyled>
        <Switch>
          <Route exact path="/dashboard" component={DashboardPage} />
          <Route exact path="/" component={HomePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <FooterStyled>
          <Link to={'/dashboard'}>yeet</Link>
          <div
            style={{
              flex: '0 0 100%',
              padding: '5px',
              display: 'inline-block'
            }}
          >
            Dark Mode: <DarkModeToggleButton />
          </div>
          <div
            style={{
              flex: '0 0 100%',
              padding: '5px',
              display: 'inline-block'
            }}
          >
            Animations: <AnimationsToggleButton />
          </div>
          <div>{'Made with ❤️ by Jake Flavin'}</div>
        </FooterStyled>
      </AppStyled>
    </div>
  </ThemeProvider>
);

export default App;
