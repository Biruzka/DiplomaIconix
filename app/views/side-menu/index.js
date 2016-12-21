
import angular from 'angular';

import SideMenuComponent from './side-menu.component';

const module = angular
  .module('app.views.sideMenu', [

  ]);

module
  .component('iconixSideMenu', SideMenuComponent);

export default module.name;
