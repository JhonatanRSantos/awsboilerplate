const path = require('path');
const slsw = require('serverless-webpack');

module.exports = {
  entry        : slsw.lib.entries,
  target       : 'node',
  mode         : slsw.lib.webpack.isLocal ? 'development' : 'production',
  optimization : {
    minimize    : false,
    usedExports : true // Tree-shaking!
  },
  performance : {
    // Turn off size warnings for entry points
    hints : false
  },
  devtool : slsw.lib.webpack.isLocal ? 'source-map' : 'none', // Sourcemap for local debug!
  output  : {
    libraryTarget : 'commonjs',
    path          : path.join(__dirname, '.webpack'),
    filename      : '[name].js',
  },
  module : {
    rules : [
      {
        test   : /node_modules\/(pdfkit|fontkit|png-js|linebreak|unicode-properties|brotli)\//,
        loader : 'transform-loader?brfs',
      },
      {
        test : /\.js$/,
        use  : [
          {
            loader : 'babel-loader',
          },
        ],
        exclude : [/node_modules/],
      },
    ],
  },
};
