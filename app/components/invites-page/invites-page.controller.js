
import AngularObject from 'helpers/angular-object';

export default class InvitesPageCtrl extends AngularObject {
  constructor ($mdDialog, $stateParams, Invites, currentSession) {
    'ngInject';
    super($mdDialog, $stateParams, Invites, currentSession);

    this.invites = "hey";
    var that = this;
      
    this.personInvitedEmail = '';
    

    Invites
        .getInvites(this.currentSession.getUserEmail())
        .then(function(response){
              console.log("response " + response);
              that.invites = response.data;
              console.log(response.data, response.status);
            })
            .catch (function(response) {
                console.log("fail!");
                console.log(response);
              }
            );
  }

  acceptInvite(index, projectName) {
    const inviteDialog = this._buildInviteConfirmDialog(email);
    this.personInvitedEmail = email;

    this.$mdDialog
      .show(inviteDialog)
      .then((function(response){
        console.log("success 1");
          var personInvited = {
            name_project: this.currentSession.getCurrentProjectName(),
            email_user:  this.personInvitedEmail
          };
        this.Stuff.addInvite(personInvited)
            .then((function(response){
              console.log("success 2"+response.data, response.status);
            }).bind(this))
            .catch (function (error) {
                  console.log("fail! ");
                  console.log(error);
                }
            );

        }).bind(this))
      .catch(() => {console.log('error')});
  }

  removeInvite(index, invite) {
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

