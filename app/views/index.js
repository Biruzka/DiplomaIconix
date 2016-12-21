
import angular from 'angular';

/* modules */
import HeaderModule from './header';
import SideMenuModule from './side-menu';
import InvitedStuffListModule from './invited-stuff-list';

const module = angular
  .module('app.views', [
    HeaderModule,
    SideMenuModule,
    InvitedStuffListModule
  ]);

export default module.name;
