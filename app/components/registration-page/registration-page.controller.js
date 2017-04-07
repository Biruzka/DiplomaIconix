
import AngularObject from 'helpers/angular-object';

export default class RegistrationPageCtrl extends AngularObject {
    constructor ($mdDialog) {
        'ngInject';
        super($mdDialog);
    }
};


// .controller('RegisterCtrl', function($scope, AuthService, $ionicPopup, $state) {
//     $scope.user = {
//         name: '',
//         password: ''
//     };
//
//     $scope.signup = function() {
//         AuthService.register($scope.user).then(function(msg) {
//             $state.go('outside.login');
//             var alertPopup = $ionicPopup.alert({
//                 title: 'Register success!',
//                 template: msg
//             });
//         }, function(errMsg) {
//             var alertPopup = $ionicPopup.alert({
//                 title: 'Register failed!',
//                 template: errMsg
//             });
//         });
//     };
// })