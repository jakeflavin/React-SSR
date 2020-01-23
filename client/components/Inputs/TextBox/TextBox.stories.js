import React from 'react';
import { text, select } from "@storybook/addon-knobs";
import { actions } from '@storybook/addon-actions';
import TextBox from './';

export default {
  title: 'Components/Inputs/Text Box',
  component: TextBox
};

export const withDefault = () => (
  <TextBox
    value={text('Value', '')}
    {...actions('onChange', 'onKeyPress')}
  />
);

export const withVarients = () => (
  <div>
    <TextBox
      value={text('Value', 'Jake', 'First Name')}
      placeholder={text('Placeholder', 'First Name', 'First Name')}
      type={select('Type',['text', 'password'], 'text', 'First Name')}
      helperText={text('Helper Text', '', 'First Name')}
      error={text('Error', '', 'First Name')}
      warning={text('Warning', '', 'First Name')}
      {...actions('onChange', 'onKeyPress')}
    />
    <TextBox
      value={text('Value', '', 'Last Name')}
      placeholder={text('Placeholder', 'Last Name', 'Last Name')}
      type={select('Type',['text', 'password'], 'text', 'Last Name')}
      helperText={text('Helper Text', 'Enter a value.', 'Last Name')}
      error={text('Error', '', 'Last Name')}
      warning={text('Warning', 'This value is required.', 'Last Name')}
      {...actions('onChange', 'onKeyPress')}
    />
    <TextBox
      value={text('Value', 'example@email.com', 'Email')}
      placeholder={text('Placeholder', 'Email', 'Email')}
      type={select('Type',['text', 'password'], 'text', 'Email')}
      helperText={text('Helper Text', 'Enter a value.', 'Email')}
      error={text('Error', '', 'Email')}
      warning={text('Warning', '', 'Email')}
      {...actions('onChange', 'onKeyPress')}
    />
    <TextBox
      value={text('Value', 'some super secret password', 'Password')}
      placeholder={text('Placeholder', 'Password', 'Password')}
      type={select('Type',['text', 'password'], 'password', 'Password')}
      helperText={text('Helper Text', 'Enter a value.', 'Password')}
      error={text('Error', 'Password is not long enough.', 'Password')}
      warning={text('Warning', '', 'Password')}
      {...actions('onChange', 'onKeyPress')}
    />
  </div>
);

export const withKnobs = () => (
  <TextBox
    value={text('Value', 'Some Awesomeness')}
    placeholder={text('Placeholder', 'Value')}
    type={select('Type',['text', 'password'], 'text')}
    helperText={text('Helper Text', 'Enter a value.')}
    error={text('Error', '')}
    warning={text('Warning', '')}
    {...actions('onChange', 'onKeyPress')}
  />
);
