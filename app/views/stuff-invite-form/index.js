
import angular from 'angular';

import StuffInviteFormComponent from './stuff-invite-form.component';

const module = angular
  .module('app.views.stuffInviteForm', []);

module
  .component('iconixStuffInviteForm', StuffInviteFormComponent);

export default module.name;
