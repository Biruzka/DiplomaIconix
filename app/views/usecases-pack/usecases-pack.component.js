
import template from './usecases-pack.html';
import './usecases-pack.less';

export default {
    bindings: {
        usecases: '<',
        removeUsecase: '&onRemoveButtonClick',
    },
    template
}
