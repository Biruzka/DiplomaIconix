
import angular from 'angular';

import InvitedStuffListComponent from './invited-stuff-list.components';

const module = angular
  .module('app.views.invitedStuffList', []);

module
  .component('iconixInvitedStuffList', InvitedStuffListComponent);

export default module.name;
