
import angular from 'angular';

/* modules */
import UserAppModule from './user-app';
import DocManagerPageModule from './documents-manager-page';
import StuffPageModule from './stuff-page';
import ProjectsPageModule from './projects-page';

const module = angular
  .module('app.components', [
    UserAppModule,
    DocManagerPageModule,
    StuffPageModule,
    ProjectsPageModule
  ]);

export default module.name;
