import { addDecorator } from '@storybook/react';
import { withKnobs } from "@storybook/addon-knobs";
import withThemesProvider from './addon-theme';

addDecorator(withThemesProvider([
  { name: 'Light', color: 'red' },
  { name: 'Dark', color: 'blue' }
]));
addDecorator(withKnobs);