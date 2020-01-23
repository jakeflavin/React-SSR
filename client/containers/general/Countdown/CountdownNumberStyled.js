import styled from 'styled-components';

const CountdownNumberStyled = styled.div`
  background: ${props => props.theme.secondary};
  display: block;
  padding: 20px;
  border-radius: 5px;
  color: #f6f4f3;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Lato', sans-serif;
  font-size: 0.6em;
  letter-spacing: 2px;
  margin: 2px 2px;
  min-width: 100px;
  flex: 1;

  div {
    font-family: 'Montserrat', sans-serif;
    color: ${props => props.theme.background_1};
    font-size: 4em;
  }
`;

export default CountdownNumberStyled;
