
import AngularObject from 'helpers/angular-object';

export default class PrototypesAreaCtrl extends AngularObject {
    constructor ($scope, $element) {
        'ngInject';
        super($scope, $element);
    }

    loadImage (image) {
        return require('./images/' + image);
    }
};

