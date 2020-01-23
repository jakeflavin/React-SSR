import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ToggleButton from 'components/Inputs/ToggleButton';
import lottie from 'lottie-web';

const AnimationsToggleButton = ({ toggleAnimations, animationsEnabled }) => {
  useEffect(() => (animationsEnabled ? lottie.play() : lottie.pause()), [
    animationsEnabled
  ]);

  const handleOnChange = () => {
    toggleAnimations();
  };

  return (
    <ToggleButton
      name={'AnimationsToggleButton'}
      value={animationsEnabled}
      onChange={handleOnChange}
    />
  );
};

AnimationsToggleButton.propTypes = {
  animationsEnabled: PropTypes.bool.isRequired,
  toggleAnimations: PropTypes.func.isRequired
};

export default AnimationsToggleButton;
