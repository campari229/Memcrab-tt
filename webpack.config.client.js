const path = require('path');
const APP_PATH = path.resolve(__dirname, 'src/client/index.jsx');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: APP_PATH,

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.css']
  },

  module: {
    rules: [
      { test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    })
  ]
};