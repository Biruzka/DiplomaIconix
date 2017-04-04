
import template from './prototype-area.html';
import './prototype-area.less';
import controller from './prototype-area.controller';

export default {
    bindings: {
        prototypes: '<',
        selectedPrototype: '<',
        currentPrototypeNotes: '<',
        getNotes: '&onSelectButtonClick'
    },
    template,
    controller
}
