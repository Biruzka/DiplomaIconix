
import angular from 'angular';

/* components */
import AppComponent from './app.component';

const module = angular
  .module('app', []);

module
  .component('iconixApp', AppComponent);

export default module.name;



