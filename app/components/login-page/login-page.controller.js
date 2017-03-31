
import AngularObject from 'helpers/angular-object';

export default class StuffPageCtrl extends AngularObject {
    constructor ($mdDialog, currentSession) {
        'ngInject';
        super($mdDialog, currentSession);

        this.user = {
            projectName: '',
            email: '',
            password: ''
        }
    }

    signIn(user) {
        this.currentSession.setCurrentProjectName(user.projectName);
        console.log("signIn"+this.currentSession.getCurrentProjectName());
    }
};


