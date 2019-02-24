var webpackConfig = require('./webpack.test.config');

module.exports = function (config) {
  let settings = {
    frameworks: ['mocha'],
    files: [
      'src/scripts/main.ts',
      'test/unit/main.ts'
    ],
    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-chrome-launcher',
      'karma-coverage'
    ],
    browsers: ['ChromeHeadless'],
    preprocessors: {
      '**/*.ts': ['webpack']
    },
    // optionally, configure the reporter
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },
    reporters: ['dots', 'coverage'],
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
      stats: 'none'
    },
    port: 9876,
    concurrency: Infinity,
    logLevel: config.LOG_WARN
  };

  config.set(settings);
};
