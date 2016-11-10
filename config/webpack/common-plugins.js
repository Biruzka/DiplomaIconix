/**
 * Created by ridel1e on 03/11/2016.
 */

const webpack = require('webpack');
const appConfiguration = require('../app.config');

const __ENV__ = process.env.NODE_ENV || 'development';

module.exports = [
  new webpack.DefinePlugin({
    __ENV__: JSON.stringify(__ENV__),
    APPLICATION_NAME: JSON.stringify(appConfiguration.applicationName)
  }),
  new webpack.ProvidePlugin({
    _: 'lodash'
  })
];