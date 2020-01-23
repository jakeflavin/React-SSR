import styled from 'styled-components';
import ButtonStyled from "../../Inputs/Button/ButtonStyled";

const CandyCaneHeaderStyled = styled.span`
  font-size: 45px;
  position: relative;
  z-index: 15;
  font-weight: 800;
  color: ${props => props.theme.primary};
  background-size: 50px 50px;
  background-color: ${props => props.theme.primary};
  background-image: -webkit-linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.25) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.25) 50%,
    rgba(255, 255, 255, 0.25) 75%,
    transparent 75%,
    transparent
  );
  background: -o-linear-gradient(transparent, transparent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

CandyCaneHeaderStyled.defaultProps = {
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

export default CandyCaneHeaderStyled;
