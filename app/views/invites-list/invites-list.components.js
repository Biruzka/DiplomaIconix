
import template from './invites-list.html';
import './invites-list.less';

export default {
  bindings: {
    invites: '<',
    removeInvite: '&onRemoveButtonClick',
    acceptInvite: '&onAcceptButtonClick'
  },
  template
}
