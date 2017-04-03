
import AngularObject from 'helpers/angular-object';

export default class UsecasePageCtrl extends AngularObject {
    constructor ($mdDialog, $http, Usecases, currentSession) {
        'ngInject';
        super($mdDialog, $http, Usecases, currentSession);

        this.usecases = "hey";
        var that=this;

        Usecases
            .getAsync(this.currentSession.getCurrentProjectId())
            .then(function(response){
                that.usecases = response.data;
                console.log(response.data, response.status);
            },
                function(response) {
                console.log("fail!");
                console.log(response);
            });

        // this.usecases = [{
        //     code: '001',
        //     name: 'Создание документа',
        //     actor: 'пользователь',
        //     precondition: 'на странице "документы"',
        //     scenario: 'нажимаем на кнопку fab, заполяем обязательные поля формы, нажимаем сохранить',
        //     result: 'документ в базе данных'
        // }, {
        //     code: '002',
        //     name: 'Добавление продукта',
        //     actor: 'предприниматель',
        //     precondition: 'на странице личный кабинет',
        //     scenario: 'нажать на кнопку fab, загрузить изображение, добавить описание, сохранить',
        //     result: 'продукт отображается на странице продуктов'
        // }, {
        //     code: '003',
        //     name: 'Добавление клиента',
        //     actor: 'предприниматель',
        //     precondition: 'на странице покупатели',
        //     scenario: 'нажать на клиента, выбрать магазин, сохранить',
        //     result: 'клиент в списке клиентов'
        // }, {
        //     code: '004',
        //     name: 'Комментирование продукта',
        //     actor: 'пользователь',
        //     precondition: 'на странице продукта',
        //     scenario: 'нажать на кнопку добавить комментарий, заполнить форму, сохранить',
        //     result: 'комментарий отображается в списке комментариев'
        // }]
    }

    removeUsecase(index, usecase) {
        const removeDialog = this._buildRemoveConfirmDialog(usecase);

        this.$mdDialog
            .show(removeDialog)
            .then(() => {console.log('success')})
            .catch(() => {console.log('error')});
    }

    _buildRemoveConfirmDialog(usecase) {
        console.log(usecase);
        return this.$mdDialog.confirm()
            .title('Удаление usecase')
            .ariaLabel('removeUsecaseDialog')
            .ok('УДАЛИТЬ')
            .cancel('ОТМЕНА')
            .textContent(`Вы действительно хотите удалить usecase 
            ${usecase.code} ${usecase.name}?`);
    }
};

