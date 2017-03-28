
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
import RegistrationModule from './registration-page';
import PrototypeCreateModule from './prototype-create-page';
import PrototypeUpdateModule from './prototype-update-page';

const module = angular
  .module('app.components', [
    UserAppModule,
    StuffPageModule,
    ProjectsPageModule,
    LoginPageModule,
    PrototypesPageModule,
    UsecasesPageModule,
    UsecaseCreatePageModule,
    StatusPageModule,
    RegistrationModule,
    PrototypeCreateModule,
    PrototypeUpdateModule
  ]);

export default module.name;
