import React from 'react';
import { array, select } from '@storybook/addon-knobs';
import List from './';

export default {
  title: 'Components/Typography/List',
  component: List
};

export const withDefault = () => (
  <List>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </List>
);

export const withVariants = () => (
 <div>
   <List type={'none'}>
     <div>None Item 1</div>
     <div>None Item 2</div>
     <div>None Item 3</div>
   </List>
   <List type={'disc'}>
     <div>Disc Item 1</div>
     <div>Disc Item 2</div>
     <div>Disc Item 3</div>
   </List>
   <List type={'lower-alpha'}>
     <div>Lower-Alpha Item 1</div>
     <div>Lower-Alpha Item 2</div>
     <div>Lower-Alpha Item 3</div>
   </List>
   <List type={'decimal'}>
     <div>Decimal Item 1</div>
     <div>Decimal Item 2</div>
     <div>Decimal Item 3</div>
   </List>
 </div>
);

export const withKnobs = () => (
  <List
    type={select('Type',[
      'disc',
      'circle',
      'square',
      'decimal',
      'decimal-leading-zero',
      'lower-roman',
      'upper-roman',
      'lower-greek',
      'lower-latin',
      'upper-latin',
      'armenian',
      'georgian',
      'lower-alpha',
      'upper-alpha',
      'none'
    ], 'none')}
  >
    {
      array('Items', [ 'Item 1', 'Item 2', 'Item 3' ])
    }
  </List>
);