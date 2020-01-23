import React from 'react';
import { boolean } from "@storybook/addon-knobs";
import { actions } from '@storybook/addon-actions';
import ToggleButton from './';

export default {
  title: 'Components/Inputs/Toggle Button',
  component: ToggleButton
};

export const withDefault = () => (
  <ToggleButton
    value={boolean('Checked', true)}
    {...actions('onChange')}
  />
);
