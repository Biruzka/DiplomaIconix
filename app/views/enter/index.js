
import angular from 'angular';

import EnterComponent from './enter.component.js';

const module = angular
    .module('app.views.enter', []);

module
    .component('iconixEnter', EnterComponent);

export default module.name;
