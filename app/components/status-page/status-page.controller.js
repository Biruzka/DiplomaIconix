
import AngularObject from 'helpers/angular-object';

export default class StatusPageCtrl extends AngularObject {
    constructor ($mdDialog, $mdEditDialog, $q, $scope, $timeout) {
        'ngInject';
        super($mdDialog, $mdEditDialog, $q, $scope, $timeout);

        this.selected = []
        this.limitOptions = [5, 10, 15]

        this.options = {
            rowSelection: false,
            multiSelect: true,
            autoSelect: true,
            decapitate: false,
            boundaryLinks: true,
            limitSelect: true,
            pageSelect: false
        }

        this.query = {
            order: 'code',
            limit: 5,
            page: 1
        }

        this.usecases = {
            "count": 6,
            "data": [{
                code: '001',
                name: 'Создание документа',
                status: 'Разработка',
                testing: 'Успешно',
                importance: 'А',
                deadline: '29/10/2016'
            }, {
                code: '002',
                name: 'Добавление продукта',
                status: 'Ожидание',
                testing: 'Неуспешно',
                importance: 'С',
                deadline: '12/10/2016'
            }, {
                code: '003',
                name: 'Добавление клиента',
                status: 'Релиз',
                testing: 'Успешно',
                importance: 'А',
                deadline: '12/10/2015'
            }, {
                code: '004',
                name: 'Комментирование продукта',
                status: 'Утверждение',
                testing: 'Отсутсвует',
                importance: 'B',
                deadline: '12/10/2017'
            }, {
                code: '005',
                name: 'Отправка письма',
                status: 'Утверждение',
                testing: '',
                importance: 'С',
                deadline: '12/10/2017'
            }, {
                code: '006',
                name: 'Подтверждение заказа',
                status: 'Утверждение',
                testing: '',
                importance: 'А',
                deadline: '12/08/2017'
            }]
        }
    }

    toggleLimitOptions () {
        this.limitOptions = this.limitOptions ? undefined : [5, 10, 15];
    }

    logItem (item) {
        console.log(item.name, 'was selected');
    }

    logOrder (order) {
        console.log('order: ', order);
    }

    logPagination (page, limit) {
        console.log('page: ', page);
        console.log('limit: ', limit);
    }
};