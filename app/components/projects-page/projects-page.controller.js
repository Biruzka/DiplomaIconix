
import AngularObject from 'helpers/angular-object';

export default class StuffPageCtrl extends AngularObject {
    constructor ($mdDialog) {
        'ngInject';
        super($mdDialog);

        this.project = {
            name: 'Стартапчик',
            description: 'ниче такой'
        }
    }
};


