import React from 'react';
import addons, { makeDecorator } from '@storybook/addons';
import { useAddonState } from '@storybook/api'

export default (themes) => makeDecorator({
  name: 'AddonTheme',
  wrapper: (getStory, context, { options, parameters }) => {
    const channel = addons.getChannel();

    channel.emit('addon-theme/theme-add', themes);

    channel.on('addon-theme/theme-change', (curr) => {
      console.log(options)
    });

    return (
      <div>
        {
          getStory(context)
        }
      </div>
    );
  }
})
