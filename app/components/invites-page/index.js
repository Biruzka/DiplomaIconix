
import angular from 'angular';

/* component */
import InvitesPageComponent from './invites-page.component.js';

const module = angular
  .module('app.components.invitesPage', [

  ]);

module
  .component('iconixInvitesPage', InvitesPageComponent)
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('userApp.invitesPage', {
        url: '/invites',
        component: 'iconixInvitesPage'

      })
  });

export default module.name;