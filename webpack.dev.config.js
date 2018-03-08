const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devServer: {
    port: 8000,
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    host: '192.168.10.162',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
      },
      {
        test: /\.md$/,
        loader: 'raw-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
};
