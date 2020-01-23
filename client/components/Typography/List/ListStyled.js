import styled from 'styled-components';

const ListStyled = styled.ul`
  padding-left: ${props => (props.type === 'none' ? '0px' : '16px')};
`;

export default ListStyled;
