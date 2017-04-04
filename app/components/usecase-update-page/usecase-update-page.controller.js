
import AngularObject from 'helpers/angular-object';

export default class UsecaseUpdatePageCtrl extends AngularObject {
    constructor (Usecases, $stateParams) {
        'ngInject';
        super(Usecases, $stateParams);
        this.usecase;
        this.newUsecase;
        var that = this;

        Usecases
            .getById($stateParams.usecaseId)
            .then(function(response){
                    console.log("УРРАА!!!");
                    that.usecase = response.data;
                    console.log("УРРАА!!!" + that.usecase);
                    console.log(response.data, response.status);
                },
                function(response) {
                    console.log("fail!");
                    console.log(response);
                });
    }

        modify(usecase) {
            var usecaseNew = {};
            var key;
            var attributes = ["name", "code", "id_project", "actor", "precondition", "scenario", "result", "status", "testing", "importance", "deadline_data"];
            attributes.forEach(function(item, i, arr) {
                key = item;
                usecaseNew[key] = usecase[key];
            });
            return usecaseNew;
        }


        updateUsecase(usecase) {

            var newUsecase = this.modify(usecase);

            this.Usecases.update(usecase._id, newUsecase)
                .then(function(response){
                    console.log("success "+response.data, response.status);
                },
                function(response) {
                    console.log("fail! ");
                    console.log(response);
                });
        }
};

