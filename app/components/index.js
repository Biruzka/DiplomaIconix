
import angular from 'angular';

/* modules */
import UserAppModule from './user-app';
import StuffPageModule from './stuff-page';
import ProjectsPageModule from './projects-page';
import LoginPageModule from './login-page';
import PrototypesPageModule from './prototypes-page';
import UsecasesPageModule from './usecases-page';
import UsecaseCreatePageModule from './usecase-create-page';
import StatusPageModule from './status-page';

const module = angular
  .module('app.components', [
    UserAppModule,
    StuffPageModule,
    ProjectsPageModule,
    LoginPageModule,
    PrototypesPageModule,
    UsecasesPageModule,
    UsecaseCreatePageModule,
    StatusPageModule
  ]);

export default module.name;
