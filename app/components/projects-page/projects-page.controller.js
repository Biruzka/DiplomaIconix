
import AngularObject from 'helpers/angular-object';

export default class StuffPageCtrl extends AngularObject {
    constructor ($mdDialog, $stateParams) {
        'ngInject';
        super($mdDialog, $stateParams);

        this.project = {
            name: 'стартапчик',
            description: 'ниче такой'
        }
    }
};


