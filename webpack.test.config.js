const defaults = require('lodash/defaults');
const cloneDeep = require('lodash/cloneDeep');
const sharedConfig = require('./webpack.shared.config');
const webpack = require('webpack');

const overrides = {
  module: defaults({
    rules: sharedConfig.module.rules.map(rule => {
      rule = cloneDeep(rule);
      rule.use.forEach(a => {
        if (a.loader === 'babel-loader') {
          a.options = {
            envName: 'test'
          };
        }
      });
      return rule;
    })
  }, sharedConfig.module)
}

module.exports = defaults(overrides, sharedConfig);
