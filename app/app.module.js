
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
  .constant('AUTH_EVENTS', {
        notAuthenticated: 'auth-not-authenticated'
    })
  .constant('API_ENDPOINT', {
        url: 'http://0.0.0.0:4000/api'
    })
  .service('currentSession', ['$http', 'Projects', '$cookies', function($http, Projects, $cookies){
      var that = this;

      this.setCurrentProject = function(project) {
          $cookies.put('projectName', project.name);
          $cookies.put('projectAccess', project.access);
          that.setProject();
      };

      this.saveUser = function(user) {
          $cookies.putObject('user', user);
      };

      this.getUserLogin = function(user) {
          return $cookies.getObject("user").login;
      };

      this.getUserId = function(user) {
          return $cookies.getObject("user")._id;
      };

      this.getUserEmail = function(user) {
          return $cookies.getObject("user").email;
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

      this.getCurrentProjectAccess = function() {
          return $cookies.get('projectAccess');
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
    .service('AuthService', ['$q', '$http', 'API_ENDPOINT', function($q, $http, API_ENDPOINT){
        var that = this;
        var LOCAL_TOKEN_KEY = 'yourTokenKey';
        var isAuthenticated = false;
        var authToken;

        this.loadUserCredentials = function() {
            var token = window.localStorage.getItem(that.LOCAL_TOKEN_KEY);
            if (token) {
                that.useCredentials(token);
            }
        };

        this.storeUserCredentials = function(token) {
            window.localStorage.setItem(that.LOCAL_TOKEN_KEY, token);
            that.useCredentials(token);
        };

        this.useCredentials = function(token) {
            that.isAuthenticated = true;
            that.authToken = token;

            // Set the token as header for your requests!
            $http.defaults.headers.common.Authorization = that.authToken;
        };

       this.destroyUserCredentials = function() {
            that.authToken = undefined;
            that.isAuthenticated = false;
            $http.defaults.headers.common.Authorization = undefined;
            window.localStorage.removeItem(that.LOCAL_TOKEN_KEY);
        };

        var register = function(user) {
            return $q(function(resolve, reject) {
                $http.post(API_ENDPOINT.url + '/signup', user).then(function(result) {
                    if (result.data.success) {
                        resolve(result.data.msg);
                    } else {
                        reject(result.data.msg);
                    }
                });
            });
        };

        var login = function(user) {
            return $q(function(resolve, reject) {
                $http.post(API_ENDPOINT.url + '/authenticate', user).then(function(result) {
                    if (result.data.success) {
                        that.storeUserCredentials(result.data.token);
                        // resolve(result.data.msg);
                        resolve(result.data.user);
                    } else {
                        reject(result.data.msg);
                    }
                });
            });
        };

        var logout = function() {
            that.destroyUserCredentials();
        };

        that.loadUserCredentials();

        return {
            login: login,
            register: register,
            logout: logout,
            isAuthenticated: function() {return that.isAuthenticated;},
        };

    }])
    // .service('AuthService', function($q, $http, API_ENDPOINT) {
    //     var LOCAL_TOKEN_KEY = 'yourTokenKey';
    //     var isAuthenticated = false;
    //     var authToken;
    //
    //     function loadUserCredentials() {
    //         var token = window.localStorage.getItem(LOCAL_TOKEN_KEY);
    //         if (token) {
    //             useCredentials(token);
    //         }
    //     }
    //
    //     function storeUserCredentials(token) {
    //         window.localStorage.setItem(LOCAL_TOKEN_KEY, token);
    //         useCredentials(token);
    //     }
    //
    //     function useCredentials(token) {
    //         isAuthenticated = true;
    //         authToken = token;
    //
    //         // Set the token as header for your requests!
    //         $http.defaults.headers.common.Authorization = authToken;
    //     }
    //
    //     function destroyUserCredentials() {
    //         authToken = undefined;
    //         isAuthenticated = false;
    //         $http.defaults.headers.common.Authorization = undefined;
    //         window.localStorage.removeItem(LOCAL_TOKEN_KEY);
    //     }
    //
    //     var register = function(user) {
    //         return $q(function(resolve, reject) {
    //             $http.post(API_ENDPOINT.url + '/signup', user).then(function(result) {
    //                 if (result.data.success) {
    //                     resolve(result.data.msg);
    //                 } else {
    //                     reject(result.data.msg);
    //                 }
    //             });
    //         });
    //     };
    //
    //     var login = function(user) {
    //         return $q(function(resolve, reject) {
    //             $http.post(API_ENDPOINT.url + '/authenticate', user).then(function(result) {
    //                 if (result.data.success) {
    //                     storeUserCredentials(result.data.token);
    //                     resolve(result.data.msg);
    //                 } else {
    //                     reject(result.data.msg);
    //                 }
    //             });
    //         });
    //     };
    //
    //     var logout = function() {
    //         destroyUserCredentials();
    //     };
    //
    //     loadUserCredentials();
    //
    //     return {
    //         login: login,
    //         register: register,
    //         logout: logout,
    //         isAuthenticated: function() {return isAuthenticated;},
    //     };
    // })

    .factory('AuthInterceptor', function ($rootScope, $q, AUTH_EVENTS) {
        return {
            responseError: function (response) {
                $rootScope.$broadcast({
                    401: AUTH_EVENTS.notAuthenticated,
                }[response.status], response);
                return $q.reject(response);
            }
        };
    })

    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('AuthInterceptor');
    })
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    })
    .run(function ($rootScope, $state, AuthService, AUTH_EVENTS) {
        $rootScope.$on('$stateChangeStart', function (event,next, nextParams, fromState) {
            if (!AuthService.isAuthenticated()) {
                console.log(next.name);
                console.log("here I am");
                if (next.name !== 'userApp.loginPage' && next.name !== 'userApp.registrationPage') {
                    event.preventDefault();
                    $state.go('userApp.loginPage');
                }
            }
        });
    });
    // .factory('Authentication', ['$http', '$q', '$timeout', function($http, $q, $timeout){
    //
    //     var authenticatedUser = null;
    //
    //     return  {
    //         requestUser: function()
    //         {
    //             var deferred = $q.defer();
    //
    //             $http.get('/api/user.json').success(function(user)
    //             {
    //                 $timeout(function()
    //                 {
    //                     // Check if user is defined first
    //                     if(user) {
    //
    //                         authenticatedUser = user;
    //                     }
    //
    //                     deferred.resolve(authenticatedUser);
    //                 }, 1000);
    //
    //             }).error(function(error)
    //             {
    //                 deferred.reject(error);
    //             });
    //
    //             return deferred.promise;
    //         },
    //
    //         getUser: function()
    //         {
    //             return authenticatedUser;
    //         },
    //
    //         exists: function()
    //         {
    //             return authenticatedUser != null;
    //         },
    //
    //         login: function(credentials)
    //         {
    //             var deferred = $q.defer();
    //
    //             $http.post('/auth/login', credentials).success(function(user)
    //             {
    //                 if(user)
    //                 {
    //                     authenticatedUser = user;
    //                     deferred.resolve(user);
    //                 }
    //                 else
    //                 {
    //                     deferred.reject('Given credentials are incorrect');
    //                 }
    //
    //             }).error(function(error)
    //             {
    //                 deferred.reject(error);
    //             });
    //
    //             return deferred.promise;
    //         },
    //
    //
    //         logout: function()
    //         {
    //             authenticatedUser = null;
    //         },
    //
    //         isDeveloper: function()
    //         {
    //             return this.exists() && authenticatedUser.type == 'developer';
    //         }
    //     }
    // }]);



export default module.name;

//
// .controller('AppCtrl', function($scope, $state, $ionicPopup, AuthService, AUTH_EVENTS) {
//     $scope.$on(AUTH_EVENTS.notAuthenticated, function(event) {
//         AuthService.logout();
//         $state.go('outside.login');
//         var alertPopup = $ionicPopup.alert({
//             title: 'Session Lost!',
//             template: 'Sorry, You have to login again.'
//         });
//     });
// });
