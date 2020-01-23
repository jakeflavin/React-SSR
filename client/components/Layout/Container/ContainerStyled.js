import styled from 'styled-components';

const ContainerStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 0;
  width: calc(100% + ${props => props.offSet * 2}px);
  margin: -${props => props.offSet}px;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
`;

ContainerStyled.defaultProps = {
  theme: {}
};

export default ContainerStyled;
