import React from 'react';
import PropTypes from 'prop-types';
import ToggleButton from 'components/Inputs/ToggleButton';

const DarkModeToggleButton = ({ darkModeEnabled, toggleDarkMode }) => (
  <ToggleButton
    name={'DarkModeToggleButton'}
    value={darkModeEnabled}
    onChange={toggleDarkMode}
  />
);

DarkModeToggleButton.propTypes = {
  darkModeEnabled: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired
};

export default DarkModeToggleButton;
