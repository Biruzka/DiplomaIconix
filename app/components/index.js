
import angular from 'angular';

/* modules */
import UserAppModule from './user-app';
import DocManagerPageModule from './documents-manager-page';

const module = angular
  .module('app.components', [
    UserAppModule,
    DocManagerPageModule
  ]);

export default module.name;
