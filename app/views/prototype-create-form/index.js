
import angular from 'angular';

import PrototypeCreateFormComponent from './prototype-create-form.component.js';

const module = angular
    .module('app.views.prototypeCreateForm', []);

module
    .component('iconixPrototypeCreateForm', PrototypeCreateFormComponent);

export default module.name;
