
import angular from 'angular';

/* modules */
import HeaderModule from './header';
import SideMenuModule from './side-menu';

const module = angular
  .module('app.views', [
    HeaderModule,
    SideMenuModule
  ]);

export default module.name;
