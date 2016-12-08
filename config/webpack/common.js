/**
 * Created by ridel1e on 03/11/2016.
 */

'use strict';

module.exports = (__dirname, fileName) => {
  return {
    entry: './app/index.js',

    output: {
      path: __dirname + '/public',
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
      }, {
        test: /\.less$/,
        loaders: ['style', 'css', 'autoprefixer?browsers=last 2 versions', 'less']
      }, {
        test: /\.css$/,
        loaders: ['style', 'css', 'autoprefixer?browsers=last 2 versions']
      }, {
        test: /\.(png|jpg|svg)$/,
        loaders: ['file?name=resources/[name].[ext]']
      }, {
        test: /\.html$/,
        loaders: ['raw']
      }]
    }
  }
};
