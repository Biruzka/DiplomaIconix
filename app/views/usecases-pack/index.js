
import angular from 'angular';

import UsecasesPackComponent from './usecases-pack.component';

const module = angular
    .module('app.views.usecasesPack', []);

module
    .component('iconixUsecasesPack', UsecasesPackComponent);

export default module.name;
