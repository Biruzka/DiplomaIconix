
import angular from 'angular';

import CommentsComponent from './comments.component.js';

const module = angular
    .module('app.views.comments', []);

module
    .component('iconixComments', CommentsComponent);

export default module.name;
