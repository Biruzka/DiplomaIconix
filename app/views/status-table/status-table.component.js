
import template from './status-table.html';
import './status-table.less';

export default {
    bindings: {
        selected: '<',
        limitOptions: '<',
        options: '<',
        query: '<',
        usecases: '<',
        toggleLimitOptions: '&toggleLimitOptions',
        getTypes: '&getTypes',
        loadStuff: '&loadStuff',
        logItem: '&logItem',
        logOrder: '&logOrder',
        logPagination: '&logPagination'
    },
    template
}
