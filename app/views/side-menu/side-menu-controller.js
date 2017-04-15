
import AngularObject from 'helpers/angular-object';

export default class MenuCtrl extends AngularObject {
    constructor ($stateParams, $scope, AuthService, API_ENDPOINT, $http, $state, currentSession, $cookies) {
        'ngInject';
        super($stateParams, $scope, AuthService, API_ENDPOINT, $http, $state, currentSession, $cookies);

        var that = this;

        this.user = {
            login:"",
            email:""
        };
        this.project = {
            name: ""
        };

        $scope.$watch(function() { return currentSession.user}, function(newValue) {
                that.user.login = currentSession.getUserLogin();
                that.user.email = currentSession.getUserEmail();
        });

        $scope.$watch(function() { return currentSession.project}, function(newValue) {
            that.project.name = currentSession.getCurrentProjectName();
        });

    }

    logout() {
        this.AuthService.logout();
        this.currentSession.logoutUser();
        console.log("да, я удален");
        console.log();
        this.$state.go("userApp.loginPage");
    }
};
