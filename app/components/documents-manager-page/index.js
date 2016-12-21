
import angular from 'angular';

/* component */
import DocManagerPageComponent from './documents-manager-page.component';

const module = angular
  .module('app.components.documentManagerPage', [

  ]);

module
  .component('iconixDocManagerPage', DocManagerPageComponent)
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('userApp.docManagerPage', {
        url: '/doc-manager',
        component: 'iconixDocManagerPage' 
      });
  });

export default module.name;
