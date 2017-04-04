
import angular from 'angular';

/* component */
import UsecaseUpdatePageComponent from './usecase-update-page.component.js';

const module = angular
    .module('app.components.usecaseUpdatePage', [

    ]);

module
    .component('iconixUsecaseUpdatePage', UsecaseUpdatePageComponent)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('userApp.usecaseUpdatePage', {
                url: '/usecases/:usecaseId',
                component: 'iconixUsecaseUpdatePage'
            })
    });

export default module.name;
