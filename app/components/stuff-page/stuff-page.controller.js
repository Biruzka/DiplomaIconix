
import AngularObject from 'helpers/angular-object';

export default class StuffPageCtrl extends AngularObject {
  constructor ($mdDialog, $stateParams) {
    'ngInject';
    super($mdDialog, $stateParams);

    this.stuff = [{
      email: 'biruzka@gmail.com',
      firstName: 'Файруза',
      lastName: 'Идрисова'
    }, {
      email: 'ridel1e@gmail.com',
      firstName: 'Руслан',
      lastName: 'Салахов'
    }, {
      email: 'ravilgy@gmail.com',
      firstName: 'Равиль',
      lastName: 'Губайдуллин'
    }]
  }

  invitePerson(email) {
    const inviteDialog = this._buildInviteConfirmDialog(email);

    this.$mdDialog
      .show(inviteDialog)
      .then(() => {console.log('success')})
      .catch(() => {console.log('error')});
  }

  removePerson(index, person) {
    const removeDialog = this._buildRemoveConfirmDialog(person);

    this.$mdDialog
      .show(removeDialog)
      .then(() => {console.log('success')})
      .catch(() => {console.log('error')});
  }

  _buildInviteConfirmDialog(email) {
    return this.$mdDialog.confirm()
          .title('Приглашение сотрудника')
          .textContent(`Вы хотите пригласить нового сотрудника по почте: ${email}?`)
          .ariaLabel('invitePersonDialog')
          .ok('ПРИГЛАСИТЬ')
          .cancel('ОТМЕНА');
  }

  _buildRemoveConfirmDialog(person) {
    console.log(person);
    return this.$mdDialog.confirm()
          .title('Удаление сотрудника')
          .ariaLabel('removePersonDialog')
          .ok('УДАЛИТЬ')
          .cancel('ОТМЕНА')
          .textContent(`Вы действительно хотите удалить сотрудника 
            ${person.lastName} ${person.firstName}?`);
  }

  _onInviteConfirmDialogSuccess() {
    console.log('success');
  }

  _onInviteConfirmDialogError() {
    console.log('error');
  }
};

