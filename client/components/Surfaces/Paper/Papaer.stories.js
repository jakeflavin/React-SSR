import React from 'react';
import { actions } from '@storybook/addon-actions';
import Paper from './';

export default {
  title: 'Components/Surfaces/Paper',
  component: Paper
};

export const withDefault = () => (
  <div>
  <Paper style={{ height: '20px', width: '20px', margin: '50px', padding: '10px'}}></Paper>
    <Paper style={{ height: '20px', width: '20px', margin: '50px', padding: '10px'}}></Paper>
    <Paper style={{ height: '20px', width: '20px', margin: '50px', padding: '10px'}}></Paper>
    <Paper style={{ height: '20px', width: '20px', margin: '50px', padding: '10px'}}></Paper>
    <Paper style={{ height: '20px', width: '20px', margin: '50px', padding: '10px'}}></Paper>
    <Paper style={{ height: '20px', width: '20px', margin: '50px', padding: '10px'}}></Paper>
  </div>
);
