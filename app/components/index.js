
import angular from 'angular';

/* modules */
import UserAppModule from './user-app';
import StuffPageModule from './stuff-page';
import ProjectsPageModule from './projects-page';
import LoginPageModule from './login-page';
import PrototypesPageModule from './prototypes-page';

const module = angular
  .module('app.components', [
    UserAppModule,
    StuffPageModule,
    ProjectsPageModule,
    LoginPageModule,
    PrototypesPageModule
  ]);

export default module.name;
