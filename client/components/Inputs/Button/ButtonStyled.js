import styled from 'styled-components';
import { lighten, darken } from '../../shadeColor';

const ButtonStyled = styled.button`
  padding: ${props => 
    props.variant === 'outlined' ? '3px 7px' : '4px 8px'
  };
  margin: 8px;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  line-height: 1.75;
  border-radius: 4px;
  white-space: nowrap;
  background-position: center;
  transition: background 0.8s;
  
  border: ${props => 
    props.variant === 'outlined' ? `1px solid ${props.theme[props.color]}` : 0
  };
  font-weight: bold;
  background-color: ${props =>
  props.variant === 'contained' ? props.theme[props.color] : 'transparent'
  };
  color: ${props =>
    props.variant === 'contained' ? '#FFF' : props.theme[props.color]
  };
  
  &:hover {
    color: #FFF;
    background: ${props => `${lighten(props.theme[props.color])} radial-gradient(circle, transparent 1%, ${lighten(props.theme[props.color])} 1%) center/15000%`};
    border: ${props => 
      props.variant === 'outlined' ? `1px solid ${lighten(props.theme[props.color])}` : 0
    };
  }
  
  &:active {
    background-color: ${props => darken(props.theme[props.color])};
    background-size: 100%;
    transition: background 0s;
    color: #FFF;
  }
  
  background-color:#272d2d;
  box-shadow: 9px 9px 16px rgb(64,64,64,0.6), -9px -9px 16px rgba(17,17,17, 0.5);
  
`;

ButtonStyled.defaultProps = {
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

export default ButtonStyled;
