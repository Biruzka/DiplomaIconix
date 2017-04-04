
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
  .service('currentSession', ['$http', 'Projects', function($http, Projects){
      this.currentProjectName = '';
      this.currentProject = {};
      var that = this;

      this.setCurrentProjectName = function(name) {
          that.currentProjectName = name;
          that.setProject();
      };

      this.setProject = function() {
          that.currentProject = Projects.getAsyncByName(that.currentProjectName);
      };

      this.getCurrentProjectName = function() {
          return that.currentProjectName;
      };

      this.getCurrentProject = function() {
          return that.currentProject;
      };

      this.getCurrentProjectId = function() {
          if (that.currentProject.$$state != undefined) {
              return that.currentProject.$$state.value.data._id
          };
          return "58dcf9084568602131df8b66";
      };

    }])
  .factory('Projects', ['$http', function($http){

        return {
            getAsyncByName: getAsyncByName,
        };

        function getAsyncByName(name) {
            console.log("function");
            return $http.get('http://0.0.0.0:4000/projects/' + name, name);
        }
    }])
  .factory('Usecases', ['$http', function($http){

        return {
            getAsync: getAsync,
            save: save,
            getById: getById,
            update: update
        };

        function getAsync(id_project) {
            return $http.get('http://0.0.0.0:4000/usecases/'+id_project, {
                params: {
                    
                }
            });
        }

        function getById(id) {
          return $http.get('http://0.0.0.0:4000/usecases/id/'+id, {
              params: {

              }
          });
        }

        function save(usecase) {
            return $http.post('http://0.0.0.0:4000/usecases', usecase);

        }

        function update(usecaseId, usecase) {
          return $http.put('http://0.0.0.0:4000/usecases/'+usecaseId, usecase);

        }
    }])
    .factory('Prototypes', ['$http', function($http){

        return {
            getAsync: getAsync,
            save: save
        };

        function getAsync(id_project) {
            return $http.get('http://0.0.0.0:4000/prototypes/'+id_project, {
                params: {

                }
            });
        }

        function save(prototype) {
            return $http.post('http://0.0.0.0:4000/prototypes',prototype);

        }
    }])
    .factory('Notes', ['$http', function($http){

        return {
            getAsync: getAsync,
            save: save
        };

        function getAsync(id_prototype) {
            return $http.get('http://0.0.0.0:4000/notes/'+id_prototype, {
                params: {

                }
            });
        }

        function save(note) {
            return $http.post('http://0.0.0.0:4000/notes',note);

        }
    }]);


export default module.name;



