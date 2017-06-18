const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname+'/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
  ],
  stats: {
    colors: true
  },
  devtool: 'source-map'
};