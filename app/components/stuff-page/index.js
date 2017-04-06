
import angular from 'angular';

/* component */
import StuffPageComponent from './stuff-page.component';

const module = angular
  .module('app.components.stuffPage', [

  ]);

module
  .component('iconixStuffPage', StuffPageComponent)
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('userApp.stuffPage', {
        url: '/stuff',
        component: 'iconixStuffPage'

      })
  });

export default module.name;