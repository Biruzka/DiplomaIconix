
import angular from 'angular';

/* third-party components */
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';
import ngData from 'angular-material-data-table';
import ngFileUpload from 'ng-file-upload';
// import ngResource from 'ng-resource';


/* third-party styles */
import 'angular-material/angular-material.css';

/* core styles */
import './app.less';

/* app modules */
import ConfigModule from './config';
import ComponentsModule from './components';
import ViewsModule from './views';

/* components */
import AppConfig from './app.config';
import AppComponent from './app.component';

const module = angular
  .module('app', [
    uiRouter,
    ngAria,
    ngAnimate,
    ngMaterial,
    ngData,
    ngFileUpload,


    ConfigModule,
    ComponentsModule,
    ViewsModule
  ]);

module
  .component('iconixApp', AppComponent)
  .config(AppConfig)
  .factory('Usecases', ['$http', function($http){

        return {
            getAsync: getAsync,
            save: save
        };

        function getAsync() {
            return $http.get('http://0.0.0.0:4000/usecases');
        }

        function save(usecase) {
            return $http.post('http://0.0.0.0:4000/usecases', usecase);
        }
    }]);

export default module.name;



