
import AngularObject from 'helpers/angular-object';

export default class UsecaseCreatePageCtrl extends AngularObject {
    constructor (Usecases, Projects, currentSession) {
        'ngInject';
        super(Usecases, Projects, currentSession);
        this.usecase;
        this.project;
        var that = this;
        this.idProject = "58dcf9084568602131df8b66";

    }


    createUsecase(usecase) {

        if (this.currentSession.getCurrentProjectId()!=undefined) {
            this.idProject = this.currentSession.getCurrentProjectId();
        };

        console.log("usecase created:  ");
        usecase.id_project = this.idProject;
        console.log(usecase);

        this.Usecases.save(usecase)
            .then(function(response){
                console.log("success "+response.data, response.status);
            },
            function(response) {
                console.log("fail! ");
                console.log(response);
            });
    }
};

