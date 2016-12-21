
import angular from 'angular';

export default class BaseResourceProvider {
  constructor () {
    this._defaultApiPath = '';
  }

  setApiPath(newApiPath) {
    this._defaultApiPath = newApiPath;
  }

  $get($http, $q, $exceptionHandler) {
    'ngInject';

    const defaultApiPath = this._defaultApiPath;

    return {
      createResource (resource, keyAttr) {
        return class Resource {
          constructor (attrs) {
            this._attrs = Object.assign({}, attrs);
          }

          save () {
            if (this._attrs[this.constructor.keyAttribute] === undefined) {
              return $http
                .post(`${defaultApiPath}/${resource}`, this._toJson())
                .catch(this._onError.bind(this))
            } 
            else {
              return $http
                .patch(`${defaultApiPath}/${resource}`, this._toJson())
                .catch(this._onError.bind(this));
            }           
          }

          remove () {
            
          }

          _toJson () {
            return angular.toJson(this._attrs);
          }

          _onError () {
            
          }

          static all (params) {
            return $http
              .get(`${defaultApiPath}/${resource}`, {
                params
              });
          }

          static one () {
            
          }

          static get keyAttribute () {
            return keyAttr;
          }
        } 
      }
    }
  }
};
