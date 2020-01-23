import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyled from './ButtonStyled';

class Button extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    color: PropTypes.oneOf([
      'primary',
      'secondary',
      'neutral',
      'info',
      'success',
      'warning',
      'danger'
    ]),
    variant: PropTypes.oneOf(['contained', 'outlined', 'link']),
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    color: 'neutral',
    variant: 'contained'
  };

  render() {
    const { onClick, color, variant, children, ...other } = this.props;

    return (
      <ButtonStyled
        onClick={() => onClick()}
        color={color}
        variant={variant}
        {...other}
      >
        {children}
      </ButtonStyled>
    );
  }
}

export default Button;
