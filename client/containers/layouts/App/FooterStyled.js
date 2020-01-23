import styled from 'styled-components';

const FooterStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3em 0;
  color: ${props => props.theme.fontColor};
  font-size: 20px;
`;

export default FooterStyled;
