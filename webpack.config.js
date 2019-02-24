module.exports = {
  entry: 'server.js',
  output: {
    path: __dirname + '/client/src/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
};
