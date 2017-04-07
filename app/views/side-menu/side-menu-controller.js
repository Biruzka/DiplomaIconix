
import AngularObject from 'helpers/angular-object';

export default class MenuCtrl extends AngularObject {
    constructor ($stateParams) {
        'ngInject';
        super($stateParams);
    }
};

// .controller('InsideCtrl', function($scope, AuthService, API_ENDPOINT, $http, $state) {
//     $scope.destroySession = function() {
//         AuthService.logout();
//     };
//
//     $scope.getInfo = function() {
//         $http.get(API_ENDPOINT.url + '/memberinfo').then(function(result) {
//             $scope.memberinfo = result.data.msg;
//         });
//     };
//
//     $scope.logout = function() {
//         AuthService.logout();
//         $state.go('outside.login');
//     };
// })