import React from 'react';
import PropTypes from 'prop-types';
import TextGroupBoxStyled from './TextBoxGroupStyled';
import TextBoxInputStyled from './TextBoxInputStyled';
import TextLabelBoxStyled from './TextBoxLabelStyled';
import TextBoxFeedBackStyled from './TextBoxFeedBackStyled';

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

class TextBox extends React.Component {
  constructor(props){
    super(props);
    this.id = uuidv4();
  }

  handleKeyPress = event => {
    const { onKeyPress } = this.props;
    if (typeof onKeyPress === 'function') {
      onKeyPress(event.key);
    }
  };

  handleOnChange = event => {
    const { onChange } = this.props;
    onChange(event.target.value);
  };

  render() {
    const { value, placeholder, type, error, warning, helperText } = this.props;

    return (
      <TextGroupBoxStyled>
        <TextBoxInputStyled
          type={type === "password" ? "password" : "text"}
          placeholder={placeholder}
          id={this.id}
          value={value}
          onChange={this.handleOnChange}
          onKeyPress={this.handleKeyPress}
          error={error}
          warning={warning}
        />
        <TextLabelBoxStyled
          htmlfor={this.id}
          error={error}
          warning={warning}
        >
          {placeholder}
        </TextLabelBoxStyled>
        {
          error
            ? <TextBoxFeedBackStyled error>{error}</TextBoxFeedBackStyled>
            : warning
              ? <TextBoxFeedBackStyled warning>{warning}</TextBoxFeedBackStyled>
              : helperText
                ? <TextBoxFeedBackStyled>{helperText}</TextBoxFeedBackStyled>
                : ''
        }
      </TextGroupBoxStyled>
    );
  }
}

TextBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password'])
};

TextBox.defaultProps = {
  placeholder: 'Enter some text.',
  type: 'text'
};

export default TextBox;
