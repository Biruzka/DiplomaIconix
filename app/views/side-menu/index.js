
import angular from 'angular';

/* modules */
import SideMenuHeaderModule from './side-menu-header';
import SideMenuContentComponent from './side-menu-content';

/* components */
import SideMenuComponent from './side-menu.component';

const module = angular
  .module('app.views.sideMenu', [
    SideMenuHeaderModule,
    SideMenuContentComponent
  ]);

module
  .component('iconixSideMenu', SideMenuComponent);

export default module.name;
