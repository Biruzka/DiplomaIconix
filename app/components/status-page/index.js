
import angular from 'angular';

/* component */
import StatusPageComponent from './status-page.component';

const module = angular
    .module('app.components.statusPage', [

    ]);

module
    .component('iconixStatusPage', StatusPageComponent)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('userApp.statusPage', {
                url: '/status',
                component: 'iconixStatusPage'
            })
    });

export default module.name;