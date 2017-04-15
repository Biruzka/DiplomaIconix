
import template from './side-menu-header.html';
import './side-menu-header.less';

export default {
  template,
  bindings: {
    logout: '&logout',
    user: '<',
    project: '<'
  }
}
