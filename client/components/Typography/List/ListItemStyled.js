import styled from 'styled-components';

const ListItemStyled = styled.li`
  list-style-type: ${props => props.type};
  color: ${props => props.theme.fontColor};
`;

export default ListItemStyled;
