
import angular from 'angular';

/* modules */
import HeaderModule from './header';
import SideMenuModule from './side-menu';
import InvitedStuffListModule from './invited-stuff-list';
import StuffInviteFormModule from './stuff-invite-form';
import UsecasesModule from './usecases-pack';
import UsecaseCreateForm from './usecase-create-form';

const module = angular
  .module('app.views', [
    HeaderModule,
    SideMenuModule,
    InvitedStuffListModule,
    StuffInviteFormModule,
    UsecasesModule,
    UsecaseCreateForm
  ]);

export default module.name;
