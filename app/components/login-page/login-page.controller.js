
import AngularObject from 'helpers/angular-object';

export default class StuffPageCtrl extends AngularObject {
    constructor ($mdDialog) {
        'ngInject';
        super($mdDialog);

        this.user = {
            title: 'Developer',
            email: 'ipsum@lorem.com',
            password: 'hey'
        }
    }
};


