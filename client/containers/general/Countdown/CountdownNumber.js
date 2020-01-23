import React from 'react';
import CountdownNumberStyled from './CountdownNumberStyled';

const CountdownNumber = ({ label, children }) => (
  <CountdownNumberStyled>
    <div>{children}</div>
    {label}
  </CountdownNumberStyled>
);

export default CountdownNumber;
