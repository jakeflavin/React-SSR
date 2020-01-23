import styled from 'styled-components';
import TextBoxLabelStyled from './TextBoxLabelStyled'

const TextBoxInputStyled = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid;
  outline: 0;
  font-size: 1.3rem;
  color:  ${
    props => props.error
      ? props.theme.danger
      : props.warning
        ?  props.theme.warning
        : props.theme.fontColor
  };
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  
  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ ${TextBoxLabelStyled} {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
  
  &:focus {
  color: ${props => props.theme.fontColor};
    padding-bottom: 6px;  
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, ${props => props.theme.primary},${props => props.theme.secondary});
    border-image-slice: 1;
    
    
    ~ ${TextBoxLabelStyled} {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: ${props => props.theme.primary};
      font-weight:700;    
    }
      

}
`;

TextBoxInputStyled.defaultProps = {
  theme: {
    primary: '#4f3d9c',
    secondary: '#764cc1',
    neutral: '#393939',
    success: '#28a745',
    info: '#17a2b8',
    warning: '#ffc107',
    danger: '#dc3545',
    fontColor: '#000'
  }
};

export default TextBoxInputStyled;
