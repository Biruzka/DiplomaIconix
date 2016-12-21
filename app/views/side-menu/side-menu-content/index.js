
import angular from 'angular';

import SideMenuContentComponent from './side-menu-content.component';

const module = angular
  .module('app.views.sideMenu.content', []);

module
  .component('iconixSideMenuContent', SideMenuContentComponent);

export default module.name;
