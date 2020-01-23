import styled from 'styled-components';
import CheckBoxLabelStyled from './CheckBoxLabelStyled';

const CheckBoxStyled = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabelStyled} {
    background: ${props => props.theme.success};
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

CheckBoxStyled.defaultProps = {
  theme: {
    success: '#4fbe79'
  }
};

export default CheckBoxStyled;
