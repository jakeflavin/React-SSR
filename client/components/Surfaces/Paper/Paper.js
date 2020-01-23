/**
 *
 * Paper
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import PaperStyled from './PaperStyled';

class Paper extends React.Component {
  static propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    gutters: PropTypes.bool
  };

  static defaultProps = {
    gutters: true,
    width: 100,
    height: 100
  };

  render() {
    const { width, height, color, gutters, children, ...other } = this.props;

    return (
      <PaperStyled
        width={width}
        height={height}
        color={color}
        gutters={gutters}
        {...other}
      >
        {children}
      </PaperStyled>
    );
  }
}

export default Paper;
