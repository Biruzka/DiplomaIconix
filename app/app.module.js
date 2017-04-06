
import angular from 'angular';

/* third-party components */
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';
import ngData from 'angular-material-data-table';
import ngFileUpload from 'ng-file-upload';
import ngCookies from 'angular-cookies';
// import angularFileUpload from 'angular-file-upload';
// var angularFileUpload = require('../node_modules/angular-file-upload/dist/angular-file-upload.min');

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
    // ngFileUpload,
    ngCookies,
      // angularFileUpload,

    ConfigModule,
    ComponentsModule,
    ViewsModule
  ]);

module
  .component('iconixApp', AppComponent)
  .config(AppConfig)
  .service('currentSession', ['$http', 'Projects', '$cookies', function($http, Projects, $cookies){
      var that = this;
      this.setCurrentProjectName = function(name) {
          $cookies.put('projectName', name);
          that.setProject();
      };

      this.setProject = function() {
          Projects.getAsyncByName($cookies.get('projectName'))
              .then((function(response){
                  console.log("success "+response.data, response.status);
                  $cookies.putObject('currentProject', response.data);
              }).bind(that))

              .catch (function (error) {
                      console.log("fail! ");
                      console.log(error);
                  }
              );
      };

      this.getCurrentProjectName = function() {
          return $cookies.get('projectName');
      };

      this.getCurrentProject = function() {
          return $cookies.getObject("currentProject");
      };

      this.getCurrentProjectId = function() {
          var currentProject = $cookies.getObject("currentProject");
          console.log("current ID " + currentProject);
          if (currentProject._id != undefined) {
              return currentProject._id;
          }
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
            update: update,
            delete: deleteById
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

        function deleteById(id) {
          return $http.delete('http://0.0.0.0:4000/usecases/'+id, {
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
    }])
    .factory('Authentication', ['$http', '$q', '$timeout', function($http, $q, $timeout){

        var authenticatedUser = null;

        return  {
            requestUser: function()
            {
                var deferred = $q.defer();

                $http.get('/api/user.json').success(function(user)
                {
                    $timeout(function()
                    {
                        // Check if user is defined first
                        if(user) {

                            authenticatedUser = user;
                        }

                        deferred.resolve(authenticatedUser);
                    }, 1000);

                }).error(function(error)
                {
                    deferred.reject(error);
                });

                return deferred.promise;
            },

            getUser: function()
            {
                return authenticatedUser;
            },

            exists: function()
            {
                return authenticatedUser != null;
            },

            login: function(credentials)
            {
                var deferred = $q.defer();

                $http.post('/auth/login', credentials).success(function(user)
                {
                    if(user)
                    {
                        authenticatedUser = user;
                        deferred.resolve(user);
                    }
                    else
                    {
                        deferred.reject('Given credentials are incorrect');
                    }

                }).error(function(error)
                {
                    deferred.reject(error);
                });

                return deferred.promise;
            },


            logout: function()
            {
                authenticatedUser = null;
            },

            isDeveloper: function()
            {
                return this.exists() && authenticatedUser.type == 'developer';
            }
        }
    }]);



export default module.name;



