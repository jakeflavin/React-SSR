import React from 'react';
import { text, select } from "@storybook/addon-knobs";
import { actions } from '@storybook/addon-actions';
import Button from './';

export default {
    title: 'Components/Inputs/Button',
    component: Button
};

export const withDefault = () => (
  <Button {...actions('onClick')}>some text</Button>
);

export const withVariants = () => (
  <div>
    <Button color={'primary'} variant={'contained'} {...actions('onClick')}>primary</Button>
    <Button color={'secondary'} variant={'contained'} {...actions('onClick')}>secondary</Button>
    <Button color={'neutral'} variant={'contained'} {...actions('onClick')}>neutral</Button>
    <Button color={'info'} variant={'contained'} {...actions('onClick')}>info</Button>
    <Button color={'success'} variant={'contained'} {...actions('onClick')}>success</Button>
    <Button color={'warning'} variant={'contained'} {...actions('onClick')}>warning</Button>
    <Button color={'danger'} variant={'contained'} {...actions('onClick')}>danger</Button>
    <br />
    <Button color={'primary'} variant={'outlined'} {...actions('onClick')}>primary</Button>
    <Button color={'secondary'} variant={'outlined'} {...actions('onClick')}>secondary</Button>
    <Button color={'neutral'} variant={'outlined'} {...actions('onClick')}>neutral</Button>
    <Button color={'info'} variant={'outlined'} {...actions('onClick')}>info</Button>
    <Button color={'success'} variant={'outlined'} {...actions('onClick')}>success</Button>
    <Button color={'warning'} variant={'outlined'} {...actions('onClick')}>warning</Button>
    <Button color={'danger'} variant={'outlined'} {...actions('onClick')}>danger</Button>
    <br />
    <Button color={'primary'} variant={'link'} {...actions('onClick')}>primary</Button>
    <Button color={'secondary'} variant={'link'} {...actions('onClick')}>secondary</Button>
    <Button color={'neutral'} variant={'link'} {...actions('onClick')}>neutral</Button>
    <Button color={'info'} variant={'link'} {...actions('onClick')}>info</Button>
    <Button color={'success'} variant={'link'} {...actions('onClick')}>success</Button>
    <Button color={'warning'} variant={'link'} {...actions('onClick')}>warning</Button>
    <Button color={'danger'} variant={'link'} {...actions('onClick')}>danger</Button>
  </div>
);

export const withKnobs = () => (
  <Button
    color={select('Color', ['primary', 'secondary', 'neutral', 'info', 'success', 'warning', 'danger'], 'primary' )}
    variant={select('Variant', ['contained', 'outlined', 'link'], 'contained' )}
    {...actions('onClick')}
  >
    {text("Label", "button")}
  </Button>
);