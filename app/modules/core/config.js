/**
 * Created by ridel1e on 10/11/2016.
 */

const config = ($logProvider, $compileProvider, $locationProvider, APP_CONFIG) => {
  'ngInject';

  if (APP_CONFIG.HTML5_MODE) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
  }
  
  $compileProvider.debugInfoEnabled(APP_CONFIG.LOGGING_ERROR);
  $logProvider.debugEnabled(APP_CONFIG.LOGGING_ERROR);
};

export default (ng) =>
  ng.config(config);