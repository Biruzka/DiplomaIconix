
import angular from 'angular';

import HeaderComponent from './header.component.js';

const module = angular
  .module('app.views.header', []);

module
  .component('iconixHeader', HeaderComponent);

export default module.name;
