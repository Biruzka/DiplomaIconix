import AngularObject from 'helpers/angular-object';

export default class PrototypesAreaCtrl extends AngularObject {
    constructor ($scope, $element, $mdToast, $mdDialog, $document) {
        'ngInject';
        super($scope, $element, $mdToast, $mdDialog, $document);
    }
};

