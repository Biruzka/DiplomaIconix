/**
 * Created by ridel1e on 08/11/2016.
 */

import commonConfig from './environments/common';
import devConfig from './environments/development';
import prodConfig from './environments/production';

const CONSTANT_NAME = 'APP_CONFIG';

let appConfig;

switch (__ENV__) {
  case 'development':
    appConfig = Object.assign({}, commonConfig, devConfig);
    break;

  case 'production':
    appConfig = Object.assign({}, commonConfig, prodConfig);
    break;

  default:
    break;
}

export default (ng) =>
  ng.constant(CONSTANT_NAME, appConfig);