
import AngularObject from 'helpers/angular-object';

export default class StuffPageCtrl extends AngularObject {
    constructor ($mdDialog, currentSession) {
        'ngInject';
        super($mdDialog, currentSession);

        this.user = {
            email: '',
            password: '',
            projects: [{name:"Team", access:"admin"},{name:"Галерея", access:"user"}]
        }

        this.currentProject = '';
    }

    chooseProject(currentProject) {
        var projectObject = JSON.parse(currentProject.currentProject);
        this.currentSession.setCurrentProject(projectObject);
    }
};


