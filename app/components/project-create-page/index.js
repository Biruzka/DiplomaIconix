
import angular from 'angular';

/* component */
import ProjectCreatePageComponent from './project-create-page.component.js';

const module = angular
    .module('app.components.projectCreatePage', [
     
    ]);

module
    .component('iconixProjectCreatePage', ProjectCreatePageComponent)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('userApp.projectCreatePage', {
                url: '/projectCreate',
                component: 'iconixProjectCreatePage'
            })
    });

export default module.name;
