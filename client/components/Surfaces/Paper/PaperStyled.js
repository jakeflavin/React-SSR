import styled from 'styled-components';

const PaperStyled = styled.div`
  border-radius: 4px;
  background-color: ${props => `${props.theme.background_1}`};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  display: block;
  height: 100%;
`;

PaperStyled.defaultProps = {
  theme: {
    background: '#FFF'
  }
};

export default PaperStyled;
