const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/server.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
    publicPath: '/'
  },

  target: 'node',
  externals: nodeExternals(),
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `'production'`
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    })
  ],

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.css']
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' }
    ]
  }
};
