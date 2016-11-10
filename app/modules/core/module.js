/**
 * Created by ridel1e on 10/11/2016.
 */

import angular from 'angular';

/* third-party modules and config importing */
import config from 'modules/app-config';

const MODULE_NAME = `${APPLICATION_NAME}.core`;

export default angular
  .module(MODULE_NAME, [
    config
  ]);