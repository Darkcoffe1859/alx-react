// task_3/webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      // ... (existing rules for CSS and images)
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true,
      chunks: ['header'],
      filename: 'header.bundle.html',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true,
      chunks: ['body'],
      filename: 'body.bundle.html',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true,
      chunks: ['footer'],
      filename: 'footer.bundle.html',
    }),
    new CleanWebpackPlugin(),
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 8564,
  },
};

