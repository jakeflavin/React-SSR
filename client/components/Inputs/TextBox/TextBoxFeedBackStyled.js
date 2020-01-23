import styled from 'styled-components';

const TextBoxFeedBackStyled = styled.div`
  color:  ${
    props => props.error
      ? props.theme.danger
      : props.warning
        ?  props.theme.warning
        : props.theme.fontColor
  };
  padding: 8px 0;
  font-size: smaller;
`;

TextBoxFeedBackStyled.defaultProps = {
  theme: {
    primary: '#4f3d9c',
    secondary: '#764cc1',
    neutral: '#393939',
    success: '#28a745',
    info: '#17a2b8',
    warning: '#ffc107',
    danger: '#dc3545'
  }
};

export default TextBoxFeedBackStyled;