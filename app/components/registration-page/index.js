
import angular from 'angular';

/* component */
import RegistrationPageComponent from './registration-page.component.js';

const module = angular
    .module('app.components.registrationPage', [
     
    ]);

module
    .component('iconixRegistrationPage', RegistrationPageComponent)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('userApp.registrationPage', {
                url: '/registration',
                component: 'iconixRegistrationPage'
            })
    });

export default module.name;
