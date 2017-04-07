
import AngularObject from 'helpers/angular-object';

export default class StuffPageCtrl extends AngularObject {
    constructor ($mdDialog, currentSession) {
        'ngInject';
        super($mdDialog, currentSession);

        this.user = {
            email: '',
            password: ''
        }
    }

    signIn(user) {
        // this.currentSession.signIn(user);
    }
};


