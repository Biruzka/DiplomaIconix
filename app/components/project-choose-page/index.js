
import angular from 'angular';

/* component */
import ProjectChoosePageComponent from './project-choose-page.component';

const module = angular
    .module('app.components.projectChoosePage', [
     
    ]);

module
    .component('iconixProjectChoosePage', ProjectChoosePageComponent)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('userApp.projectChoosePage', {
                url: '/project-choose',
                component: 'iconixProjectChoosePage'
            })
    });

export default module.name;
