
import AngularObject from 'helpers/angular-object';

export default class StuffPageCtrl extends AngularObject {
    constructor ($mdDialog, $stateParams, currentSession, $scope) {
        'ngInject';
        super($mdDialog, $stateParams, $scope,  currentSession);

        // this.project = {
        //     name: 'стартапчик',
        //     description: 'ниче такой'
        // }

        this.project = {
            name: "",
            description:""
        };

        var that = this;

        $scope.$watch(function() { return currentSession.project}, function(newValue) {
            that.project.name = currentSession.getCurrentProjectName();
            that.project.description = currentSession.getCurrentProjectDescription();
        });
    }
};


