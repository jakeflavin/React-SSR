import React from 'react';
import PropTypes from 'prop-types';
import {
  createGlobalStyle,
  ThemeProvider as StyleProvider
} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  
  #app {
    background-color: ${props => props.theme.background_0};
    min-height: 100%;
    min-width: 100%;
  }
`;

const ThemeProvider = ({ theme, darkModeEnabled, children }) => (
  <StyleProvider theme={darkModeEnabled ? theme.dark : theme.light}>
    <GlobalStyle />
    {children}
  </StyleProvider>
);

ThemeProvider.propTypes = {
  theme: PropTypes.shape({
    dark: PropTypes.object,
    light: PropTypes.object
  }),
  darkModeEnabled: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired
};

export default ThemeProvider;
