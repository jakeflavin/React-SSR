import React from 'react';
import { addons } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';
import Panel from './Panel';

addons.register('addon-theme', api => {
  addons.addPanel('addon-theme/panel', {
    title: 'Themes',
    render: ({ active, key }) => (
      <AddonPanel key={key} active={active}>
        <Panel api={api}/>
      </AddonPanel>
    ),
  });
});