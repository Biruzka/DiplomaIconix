
import angular from 'angular';

import StatusTableComponent from './status-table.component';

const module = angular
    .module('app.views.statusTable', []);

module
    .component('iconixStatusTable', StatusTableComponent);

export default module.name;
