import styled from 'styled-components';

const ItemStyled = styled.div`
  box-sizing: border-box;
  flex-grow: 0;
  text-align: ${props => props.align};

  @media (min-width: ${props => props.theme.breakPoints.xs}) {
    max-width: ${props =>
      props.xs ? `${Math.round((props.xs / 12) * 10e7) / 10e5}%` : 'none'};
    flex-basis: ${props =>
      props.xs ? `${Math.round((props.xs / 12) * 10e7) / 10e5}%` : 'auto'};
  }

  @media (min-width: ${props => props.theme.breakPoints.sm}) {
    max-width: ${props =>
      props.sm ? `${Math.round((props.sm / 12) * 10e7) / 10e5}%` : 'none'};
    flex-basis: ${props =>
      props.sm ? `${Math.round((props.sm / 12) * 10e7) / 10e5}%` : 'auto'};
  }

  @media (min-width: ${props => props.theme.breakPoints.md}) {
    max-width: ${props =>
      props.md ? `${Math.round((props.md / 12) * 10e7) / 10e5}%` : 'none'};
    flex-basis: ${props =>
      props.md ? `${Math.round((props.md / 12) * 10e7) / 10e5}%` : 'auto'};
  }

  @media (min-width: ${props => props.theme.breakPoints.lg}) {
    max-width: ${props =>
      props.lg ? `${Math.round((props.lg / 12) * 10e7) / 10e5}%` : 'none'};
    flex-basis: ${props =>
      props.lg ? `${Math.round((props.lg / 12) * 10e7) / 10e5}%` : 'auto'};
  }

  @media (min-width: ${props => props.theme.breakPoints.xl}) {
    max-width: ${props =>
      props.xlg ? `${Math.round((props.xl / 12) * 10e7) / 10e5}%` : 'none'};
    flex-basis: ${props =>
      props.xl ? `${Math.round((props.xl / 12) * 10e7) / 10e5}%` : 'auto'};
  }
`;

ItemStyled.defaultProps = {
  theme: {}
};

export default ItemStyled;
