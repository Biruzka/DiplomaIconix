
import AngularObject from 'helpers/angular-object';

export default class PrototypesAreaCtrl extends AngularObject {
    constructor ($scope, $element) {
        'ngInject';
        super($scope, $element);

        this.picture = '1.jpg'
    }

    // loadImage (image) {
    //     return require('./resources/' + image);
    // }
};

