const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,

  plugins: [
    new HTMLWebpackPlugin({
      template: './client/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s?css/,
        // loaders  can be chained in reverse order, must be JS by the end
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  // allow imports without specifying the file extension
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devServer: {
    static: {
      publicPath: '/dist',
      directory: path.resolve(__dirname, 'dist'),
    },
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
};
