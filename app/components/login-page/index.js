
import angular from 'angular';

/* component */
import LoginPageComponent from './login-page.component';

const module = angular
    .module('app.components.loginPage', [
     
    ]);

module
    .component('iconixLoginPage', LoginPageComponent)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('userApp.loginPage', {
                url: '/',
                component: 'iconixLoginPage'
            })
    });

export default module.name;
