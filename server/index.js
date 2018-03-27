/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./logger');

const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const resolve = require('path').resolve;
const app = express();

setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

const customHost = process.env.HOST;
const host = customHost || null;
const prettyHost = customHost || 'localhost';

app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  logger.appStarted(port, prettyHost);
});
