module.exports = {
  stories: ['../../client/**/*.stories.js'],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    './config/storybook/addon-theme/register'
  ]
};