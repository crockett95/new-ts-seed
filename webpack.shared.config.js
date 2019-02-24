const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {
    seed3: "./src/scripts/main"
  },
  output: {
    path: path.join(__dirname, '.tmp'),
    library: '[name]',
    libraryTarget: 'umd',
    filename: '[name].js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  mode: 'development'
};
