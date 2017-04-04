
import angular from 'angular';

import UsecaseUpdateFormComponent from './usecase-update-form.component.js';

const module = angular
    .module('app.views.usecasesUpdateForm', []);

module
    .component('iconixUsecaseUpdateForm', UsecaseUpdateFormComponent);

export default module.name;
