
import angular from 'angular';

/* component */
import UsecasesPageComponent from './usecases-page.component';

const module = angular
    .module('app.components.usecasesPage', [

    ]);

module
    .component('iconixUsecasesPage', UsecasesPageComponent)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('userApp.usecasesPage', {
                url: '/usecases',
                component: 'iconixUsecasesPage'
            })
    });

export default module.name;