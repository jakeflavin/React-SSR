import React from 'react';
import { array, select } from '@storybook/addon-knobs';
import FancyHeader from './';

export default {
  title: 'Components/Typography/Fancy Header',
  component: FancyHeader
};

export const withDefault = () => (
  <FancyHeader>Default Header</FancyHeader>
);

export const withVariants = () => (
  <div>
    <FancyHeader>Default Header</FancyHeader>
    <FancyHeader variant={'CandyCane'}>Candy Cane Header</FancyHeader>
  </div>
);

export const withKnobs = () => (
  <FancyHeader
    variant={select('Variant',['', 'CandyCane'], '')}
  >
    Fancy Header
  </FancyHeader>
);