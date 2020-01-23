import React from 'react';
import CandyCaneHeaderStyled from './CandyCaneHeaderStyled'

const FancyHeader = ({ variant, children }) => {
  switch(variant) {
    case 'CandyCane':
      return <CandyCaneHeaderStyled>{children}</CandyCaneHeaderStyled>

    default:
      return (
        <h1>{children}</h1>
      )
  }
};

export default FancyHeader;