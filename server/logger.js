/* eslint-disable no-console */

const logger = {
  error: console.error,

  appStarted: (port, host) => {
    console.log(`
Server started ${`http://${host}:${port} ✓`}
    `);
  },
};

module.exports = logger;
