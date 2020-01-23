import styled from 'styled-components';

const ListToSantaItemStyled = styled.div`
  border-top: 1px dotted ${props => props.theme.neutral};
  padding: 0 10px;
  text-align: left;

  &:hover {
    background-color: ${props => props.theme.background_2};
    transition: all 0.2s;
  }
`;

export default ListToSantaItemStyled;
