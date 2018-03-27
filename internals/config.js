const resolve = require('path').resolve;
const pullAll = require('lodash/pullAll');
const uniq = require('lodash/uniq');

const Config = {
  version: '0.0.1',
  dllPlugin: {
    defaults: {
      exclude: [
        'chalk',
        'compression',
        'cross-env',
        'express',
        'sanitize.css',
      ],
      include: ['core-js', 'eventsource-polyfill', 'babel-polyfill', 'lodash'],
      path: resolve('../node_modules/sozluk-react-dlls'),
    },
    entry(pkg) {
      const dependencyNames = Object.keys(pkg.dependencies);
      const exclude = pkg.dllPlugin.exclude || Config.dllPlugin.defaults.exclude;
      const include = pkg.dllPlugin.include || Config.dllPlugin.defaults.include;
      const includeDependencies = uniq(dependencyNames.concat(include));

      return {
        sozlukReactDeps: pullAll(includeDependencies, exclude),
      };
    },
  },
};

module.exports = Config;
