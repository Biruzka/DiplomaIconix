
import template from './invited-stuff-list.html';
import './invited-stuff-list.less';

export default {
  bindings: {
    stuff: '<',
    removePerson: '&onRemoveButtonClick',
  },
  template
}
