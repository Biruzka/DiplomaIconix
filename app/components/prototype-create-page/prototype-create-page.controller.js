
import AngularObject from 'helpers/angular-object';

export default class PrototypesPageCtrl extends AngularObject {
    constructor (currentSession, Prototypes) {
        'ngInject';
        super(currentSession, Prototypes);
        this.prototype;
        var that = this;
        this.idProject = "58dcf9084568602131df8b66";
    }

    createPrototype(prototype) {
        console.log("prototype created:  ");

        if (this.currentSession.getCurrentProjectId()!=undefined) {
            this.idProject = this.currentSession.getCurrentProjectId();
        };

        console.log("prototype created:  ");
        prototype.id_project = this.idProject;
        console.log(prototype);

        this.Prototypes.save(prototype)
            .then(function(response){
                    console.log("success "+response.data, response.status);
                },
                function(response) {
                    console.log("fail! ");
                    console.log(response);
                });
    }
};

