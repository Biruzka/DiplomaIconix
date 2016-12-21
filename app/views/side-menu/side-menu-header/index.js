
import angular from 'angular';

import SideMenuHeaderComponent from './side-menu-header.component';

const module = angular
  .module('app.views.sideMenu.header', [

  ]);

module
  .component('iconixSideMenuHeader', SideMenuHeaderComponent);

export default module.name;
