
import angular from 'angular';

/* component */
import UsecaseCreatePageComponent from './usecase-create-page.component';

const module = angular
    .module('app.components.usecaseCreatePage', [

    ]);

module
    .component('iconixUsecaseCreatePage', UsecaseCreatePageComponent)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('userApp.usecaseCreatePage', {
                url: '/usecase-create-form',
                component: 'iconixUsecaseCreatePage'
            })
    });

export default module.name;
