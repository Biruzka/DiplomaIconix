import angular from 'angular';

/* component */
import PrototypesPageComponent from './prototypes-page.component';

const module = angular
    .module('app.components.prototypesPage', [

    ]);

module
    .component('iconixPrototypesPage', PrototypesPageComponent)
    .directive('iframeDirective', ['$sce', function($sce) {
        return {
            restrict: 'E',
            template: '<iframe src="{{ trustedUrl }}" frameborder="0" allowfullscreen>{{ trustedUrl }}</iframe>',
            link: function(scope) {
                scope.trustedUrl = $sce.trustAsHtml("./new.html");
                // scope.trustedUrl = $sce.trustAsResourceUrl("//www.youtube.com/embed/dQw4w9WgXcQ");
                // scope.trustedUrl = $sce.trustAsResourceUrl("//www.google.ru/search?client=ubuntu&channel=fs&q=%24sce.+angular&ie=utf-8&oe=utf-8&gfe_rd=cr&ei=ManKWNLfMs-EyAWbxKegDg#newwindow=1&channel=fs&q=$sce+angular+%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5+iframe&*");

            }
        }
    }])
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('userApp.prototypesPage', {
                url: '/prototypes',
                component: 'iconixPrototypesPage'
            })
    });

export default module.name;
