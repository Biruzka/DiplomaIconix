/**
 * Created by ridel1e on 10/11/2016.
 */

class AngularObject {

  constructor() {
    const $inject = this.constructor.$inject;

    for(let i = 0; i < $inject.length; i++) {
      let injectionName = $inject[i];
      this[injectionName] = arguments[i];
    }

    this._initialize();
  }

  /**
   *
   * @private
   */
  _initialize() {}
}

export default AngularObject;