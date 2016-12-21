
import angular from 'angular';

/* modules */
import HeaderModule from './header';

const module = angular
  .module('app.views', [
    HeaderModule
  ]);

export default module.name;
