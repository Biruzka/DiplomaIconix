/**
 * Created by ridel1e on 03/11/2016.
 */

'use strict';

const commonPlugins = require('../common-plugins');

module.exports = {
  devtool: "cheap-inline-module-source-map",

  watch: true,

  watchOptions: {
    aggregateTimeout: 100
  },

  plugins: commonPlugins
};