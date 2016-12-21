
import common from './environments/common';
import prod from './environments/prod';
import dev from './environments/dev';

let appConfig;

switch(__ENV__) {
  case 'development':
    appConfig = Object.assign({}, common, dev);
    break;

  case 'production':
    appConfig = Object.assign({}, common, prod);
    break;

  default:
    break;
}

export default appConfig;
