/* eslint-disable no-console */

import chalk from 'chalk';
import ip from 'ip';

const divider = chalk.gray('\n-----------------------------------');

/**
 * Logger middleware, you can customize it to make messages more personal
 */
const logger = {
  info: log => {
    console.log(chalk.blue(log));
  },

  // Called whenever there's an error on the server we want to print
  error: err => {
    console.error(chalk.red(err));
  },

  // Called when express.js app starts on given port w/o errors
  appStarted: port => {
    console.log(`😎 Server started ! ${chalk.green('✓')}`);

    console.log(
      `
      ${chalk.bold('Access URLs:')}${divider}
      Localhost: ${chalk.magenta(`http://localhost:${port}`)}
      LAN: ${chalk.magenta(`http://${ip.address()}:${port}`)}${divider}
      ${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}
    `.replace(/  +/g, '')
    );
  }
};

export default logger;
