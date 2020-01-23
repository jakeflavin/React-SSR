import styled from 'styled-components';

const AppBarStyled = styled.div`
  margin: 4px;
  padding: 4px;
  border-radius: 4px;
  font-size: 16px;
  background-color: ${props => `${props.theme.background_1}`};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${props => props.width}%;
  height: ${props => props.height}%;
  color: ${props => props.theme.fontColor};
`;

export default AppBarStyled;
