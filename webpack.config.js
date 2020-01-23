/*
 * DO NOT USE ES6 SYNTAX IN THIS FILE
 *
 * This file is used by webpack.
 *
 */

const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const browserConfig = {
  entry: './client/index.js',
  mode: process.env.NODE_ENV,
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: 'app.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        include: path.resolve(__dirname, 'client'),
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-syntax-dynamic-import',
            'babel-plugin-redux-saga'
          ]
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'true'
    })
  ],
  resolve: {
    modules: ['client', 'node_modules']
  }
};

const serverConfig = {
  entry: './server/index.js',
  mode: process.env.NODE_ENV,
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        include: [
          path.resolve(__dirname, 'server'),
          path.resolve(__dirname, 'client')
        ],
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-syntax-dynamic-import',
            'babel-plugin-redux-saga'
          ]
        }
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        include: [
          path.resolve(__dirname, 'server')
        ],
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'false'
    })
  ],
  resolve: {
    modules: ['client', 'node_modules']
  }
};

module.exports = [browserConfig, serverConfig];
