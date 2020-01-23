import styled from 'styled-components';

const TextBoxLabelStyled = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: ${
    props => props.error 
      ? props.theme.danger 
      : props.warning 
        ?  props.theme.warning 
        : props.theme.fontColor
  };
`;

TextBoxLabelStyled.defaultProps = {
  theme: {
    primary: '#4f3d9c',
    secondary: '#764cc1',
    neutral: '#393939',
    success: '#28a745',
    info: '#17a2b8',
    warning: '#ffc107',
    danger: '#dc3545'
  }
};

export default TextBoxLabelStyled;
