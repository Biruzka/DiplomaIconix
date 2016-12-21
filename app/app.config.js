
export default (
  $logProvider, 
  $compileProvider, 
  $locationProvider, 
  $httpProvider,
  APP_CONFIG
) => {
  if (APP_CONFIG.HTML5_MODE) {
    $locationProvider.html5Mode(true);
  }

  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $compileProvider.debugInfoEnabled(APP_CONFIG.LOGGING_ERROR);
  $logProvider.debugEnabled(APP_CONFIG.LOGGING_ERROR);
};
