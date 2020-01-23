import React from 'react';
import PropTypes from 'prop-types';
import ToggleButtonStyled from './ToggleButtonStyled';
import CheckBoxStyled from './CheckBoxStyled';
import CheckBoxLabelStyled from './CheckBoxLabelStyled';

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.id = uuidv4();
  }

  render() {
    const { onChange, value, ...other } = this.props;

    return (
      <ToggleButtonStyled {...other}>
        <CheckBoxStyled
          id={this.id}
          type="checkbox"
          onChange={onChange}
          checked={value}
        />

        <CheckBoxLabelStyled htmlFor={this.id}/>
      </ToggleButtonStyled>
    )
  }
}

ToggleButton.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired
};

ToggleButton.defaultProps = {};

export default ToggleButton;
