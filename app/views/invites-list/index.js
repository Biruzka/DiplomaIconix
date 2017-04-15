
import angular from 'angular';

import InvitesListComponent from './invites-list.components.js';

const module = angular
  .module('app.views.invitesList', []);

module
  .component('iconixInvitesList', InvitesListComponent);

export default module.name;
