/**
 * Created by ridel1e on 03/11/2016.
 */

'use strict';

module.exports = (__dirname, fileName) => {
  return {
    entry: './app/index.js',

    output: {
      path: __dirname + '/public/js',
      filename: fileName
    },

    resolve: {
      modulesDirectories: ['node_modules', 'app'],
      extensions: ['', '.js']
    },

    resolveLoader: {
      modulesDirectories: ['node_modules'],
      moduleTemplates: ['*-loader', '*'],
      extensions: ['', '.js']
    },

    module: {
      loaders: [{
        test: /\.js$/,
        exclude: __dirname + '/node_modules',
        loaders: ['ng-annotate', 'babel-loader']
      }]
    }
  }
};