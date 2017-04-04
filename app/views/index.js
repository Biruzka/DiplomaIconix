
import angular from 'angular';

/* modules */
import HeaderModule from './header';
import SideMenuModule from './side-menu';
import InvitedStuffListModule from './invited-stuff-list';
import StuffInviteFormModule from './stuff-invite-form';
import UsecasesModule from './usecases-pack';
import UsecaseCreateForm from './usecase-create-form';
import StatusTable from './status-table';
import PrototypeArea from './prototype-area';
import Comments from './comments';
import Enter from './enter';
import PrototypeCreateForm from './prototype-create-form';
import PrototypeUpdateArea from './prototype-update-area';
import UsecaseUpdateForm from './usecase-update-form';

const module = angular
  .module('app.views', [
    HeaderModule,
    SideMenuModule,
    InvitedStuffListModule,
    StuffInviteFormModule,
    UsecasesModule,
    UsecaseCreateForm,
    StatusTable,
    PrototypeArea,
    Comments,
    Enter,
    PrototypeCreateForm,
    PrototypeUpdateArea,
    UsecaseUpdateForm
  ]);

export default module.name;
