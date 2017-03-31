
import AngularObject from 'helpers/angular-object';

export default class UsecaseCreatePageCtrl extends AngularObject {
    constructor (Usecases, Projects, currentSession) {
        'ngInject';
        super(Usecases, Projects, currentSession);
        this.usecase;
        this.project;
        var that = this;
        this.idProject = "58dcf9084568602131df8b66";



        // Usecases
        //     .save(currentSession.currentProjectName)
        //     .then(function(response){
        //             that.project = response.data;
        //             console.log(response.data, response.status);
        //         },
        //         function(response) {
        //             console.log("fail!");
        //             console.log(response);
        //         });

        // Projects
        //     .getAsyncByName(currentSession.currentProjectName)
        //     .then(function(response){
        //             that.project = response.data;
        //             console.log(response.data, response.status);
        //         },
        //         function(response) {
        //             console.log("fail!");
        //             console.log(response);
        //         });
    }


    createUsecase(usecase) {
        if (this.currentSession.getCurrentProjectId()!=undefined) {
            this.idProject = this.currentSession.getCurrentProjectId();
        };

        console.log("usecase created:  ");
        usecase.id_project = this.idProject;
        console.log(usecase);

        console.log("answer from server" + this.Usecases.save(usecase));
    }
};

