import React, { useEffect } from 'react';
import countdown from 'countdown';
import CountdownStyled from './CountdownStyled';
import CountdownNumber from './CountdownNumber';
import FancyHeader from 'components/Typography/FancyHeader';
import CountDownHeaderStyled from './CountDownHeaderStyled';

const Countdown = ({ label, timeUntil, setTimeUntil }) => {
  const xmas = new Date(2020, 11, 25);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeUntil(countdown(new Date(), xmas));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeUntil]);

  return (
    <CountdownStyled>
      <CountDownHeaderStyled>
        <FancyHeader variant={'CandyCane'}>{label}</FancyHeader>
        {' is in '}
      </CountDownHeaderStyled>
      <CountdownNumber label={'Years'}>{timeUntil.years}</CountdownNumber>
      <CountdownNumber label={'Months'}>{timeUntil.months}</CountdownNumber>
      <CountdownNumber label={'Days'}>{timeUntil.days}</CountdownNumber>
      <CountdownNumber label={'Hours'}>{timeUntil.hours}</CountdownNumber>
      <CountdownNumber label={'Minutes'}>{timeUntil.minutes}</CountdownNumber>
      <CountdownNumber label={'Seconds'}>{timeUntil.seconds}</CountdownNumber>
    </CountdownStyled>
  );
};

export default Countdown;
