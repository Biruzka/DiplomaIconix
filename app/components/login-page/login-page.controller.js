
import AngularObject from 'helpers/angular-object';

export default class StuffPageCtrl extends AngularObject {
    constructor ($mdDialog, currentSession, $scope, AuthService, $state) {
        'ngInject';
        super($mdDialog, currentSession, $scope, AuthService, $state);

        this.user = {
            email: '',
            password: ''
        };

        var that = this;
    }

    signIn(user) {
        console.log("user: " + user);
        this.AuthService.login(user)
            .then((function(response) {
                var user = response;
                this.$state.go('userApp.projectChoosePage');
                console.log("login success!");
                this.currentSession.saveUser(user);
            }).bind(this))
            .catch(function(err) {
                console.log("login failed "+  err);
                }
            );
    }
};


