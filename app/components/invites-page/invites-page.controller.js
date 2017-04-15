
import AngularObject from 'helpers/angular-object';

export default class InvitesPageCtrl extends AngularObject {
  constructor ($mdDialog, $stateParams, Invites, currentSession, Users) {
    'ngInject';
    super($mdDialog, $stateParams, Invites, currentSession, Users);

    this.invites = "hey";
    var that = this;

    this.invite = {};
    this.newProject = {};
    this.index = '';
    

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

  acceptInvite(index, invite) {
      console.log(invite);
      this.index = index;
      this.invite = invite;
      this.newProject = {
          name: invite.name_project,
          access: "user"
      };
    const inviteDialog = this._buildInviteConfirmDialog(invite.name_project);

    this.$mdDialog
      .show(inviteDialog)
      .then((function(response){
        console.log("success 1");
        this.Users.addProject( this.newProject, this.currentSession.getUserId())
            .then((function(response){
              console.log("success 2"+JSON.stringify(response.data), response.status);

                this.Invites.deleteById(this.invite._id)
                    .then((function(response){
                        console.log("success deletedddd!!! "+response.data, response.status);
                        this.invites.splice(this.index, 1);
                    }).bind(this))
                    .catch (function (error) {
                            console.log("fail1111 ");
                            console.log(error);
                        }
                    );

            }).bind(this))
            .catch (function (error) {
                  console.log("fail2 ");
                  console.log(error);
                }
            );

        }).bind(this))
      .catch(() => {console.log('error2')});
  }

  removeInvite(index, invite) {
    console.log(invite);
    this.index = index;
    this.invite = invite;
    const removeDialog = this._buildRemoveConfirmDialog(invite.name_project);

    this.$mdDialog
      .show(removeDialog)
        .then((function(response){
            console.log("success 1");
            this.Invites.deleteById( this.invite._id)
                .then((function(response){
                    console.log("success deleted"+JSON.stringify(response.data), response.status);
                    this.invites.splice(this.index, 1);
                }).bind(this))
                .catch (function (error) {
                        console.log("failure of delet ");
                        console.log(error);
                    }
                );

        }).bind(this))
      .catch(() => {console.log('error')});
  }

  _buildInviteConfirmDialog(project) {
    return this.$mdDialog.confirm()
          .title('Принятие приглашения')
          .textContent(`Вы хотите принять проект: ${project}?`)
          .ariaLabel('invitePersonDialog')
          .ok('ПРИНЯТЬ')
          .cancel('ОТМЕНА');
  }

  _buildRemoveConfirmDialog(project) {
    console.log(project);
    return this.$mdDialog.confirm()
          .title('Отклонение приглашения')
          .ariaLabel('removePersonDialog')
          .ok('ОТКЛОНИТЬ')
          .cancel('ОТМЕНА')
          .textContent(`Вы действительно хотите отказаться участвовать в проекте
            ${project}?`);
  }

  _onInviteConfirmDialogSuccess() {
    console.log('success');
  }

  _onInviteConfirmDialogError() {
    console.log('error');
  }
};

