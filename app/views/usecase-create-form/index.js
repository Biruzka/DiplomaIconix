
import angular from 'angular';

import UsecaseCreateFormComponent from './usecase-create-form.component';

const module = angular
    .module('app.views.usecasesCreateForm', []);

module
    .component('iconixUsecaseCreateForm', UsecaseCreateFormComponent);

export default module.name;
