
import angular from 'angular';

import PrototypeUpdateAreaComponent from './prototype-update-area.component.js';

const module = angular
    .module('app.views.prototypeUpdateArea', []);

module
    .component('iconixPrototypeUpdateArea', PrototypeUpdateAreaComponent);

export default module.name;
