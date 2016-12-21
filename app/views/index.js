
import angular from 'angular';

/* modules */
import HeaderModule from './header';
import SideMenuModule from './side-menu';
import InvitedStuffListModule from './invited-stuff-list';
import StuffInviteFormModule from './stuff-invite-form';

const module = angular
  .module('app.views', [
    HeaderModule,
    SideMenuModule,
    InvitedStuffListModule,
    StuffInviteFormModule
  ]);

export default module.name;
