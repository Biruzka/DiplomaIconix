
import AngularObject from 'helpers/angular-object';

export default class RegistrationPageCtrl extends AngularObject {
    constructor (AuthService, $state) {
        'ngInject';
        super(AuthService, $state);

        this.user = {
            login: '',
            email: '',
            password: ''
        };

        var that = this;
    }

    signUp(user) {
        if (user.password == user.passwordRepeat) {
            this.AuthService.register(user)
                .then((function(response) {
                    this.$state.go('userApp.loginPage');
                    console.log("login success!  response: "+response);
                }).bind(this))
                .catch(function(err) {
                        console.log("login failed "+  err);
                    }
                );
        }

    }
};
