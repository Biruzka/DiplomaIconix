
import angular from 'angular';

import PrototypeAreaComponent from './prototype-area.component';

const module = angular
    .module('app.views.prototypeArea', []);

module
    .component('iconixPrototypeArea', PrototypeAreaComponent);

export default module.name;
