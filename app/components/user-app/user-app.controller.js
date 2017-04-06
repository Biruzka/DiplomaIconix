
import AngularObject from 'helpers/angular-object';

export default class UserAppCtrl extends AngularObject {
  constructor($mdSidenav, $stateParams) {
    'ngInject';
    super($mdSidenav, $stateParams);

    this.SIDE_MENU_ID = 'menu';
  }

  openSideMenu() {
    this
      .$mdSidenav(this.SIDE_MENU_ID)
      .toggle()
  }
};
