import angular from 'angular';

/* component */
import PrototypeCreatePageComponent from './prototype-create-page.component.js';

const module = angular
    .module('app.components.prototypeCreatePage', [

    ]);

module
    .component('iconixPrototypeCreatePage', PrototypeCreatePageComponent)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('userApp.prototypeCreatePage', {
                url: '/prototype-create',
                component: 'iconixPrototypeCreatePage'
            })
    });

export default module.name;
