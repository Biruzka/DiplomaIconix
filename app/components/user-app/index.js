
import angular from 'angular';

/* components */
import UserAppComponent from './user-app.component';

const module = angular
  .module('app.components.userApp', []);

module
  .component('iconixUserApp', UserAppComponent)
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('userApp', {
        abstract: true,
        component: 'iconixUserApp'
      });
  });

export default module.name;
