
import angular from 'angular';

/* component */
import ProjectsPageComponent from './projects-page.component';

const module = angular
  .module('app.components.projectsPage', [

  ]);

module
  .component('iconixProjectsPage', ProjectsPageComponent)
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('userApp.projectsPage', {
        url: '/projects',
        component: 'iconixProjectsPage',
      })
  });

export default module.name;
