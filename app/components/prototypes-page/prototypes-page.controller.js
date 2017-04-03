
import AngularObject from 'helpers/angular-object';

export default class PrototypesPageCtrl extends AngularObject {
    constructor ($scope, $element, Prototypes, Notes, currentSession) {
        'ngInject';
        super($scope, $element, Prototypes, Notes, currentSession);

        this.prototypes = "hey";
        this.currentPrototypeNotes;
        this.selectedPrototype = {};
        var that=this;

        Prototypes
            .getAsync(this.currentSession.getCurrentProjectId())
            .then(function(response){
                    that.prototypes = response.data;
                    console.log(response.data, response.status);
                },
                function(response) {
                    console.log("fail!");
                    console.log(response);
                });
    }

        getNotes(prototype) {
            this.Notes.getAsync(prototype._id)
                .then((function(response){
                    console.log("success "+response.data, response.status);
                    this.currentPrototypeNotes = response.data;
                    console.log("this");
                    console.log(this);
                    console.log("this");
                    console.log(this.currentPrototypeNotes[0].title + "fd"); // элемент
                    }).bind(this))
                .catch (function (error) {
                    console.log("fail! ");
                    console.log(error);
                    }
                );
            console.log(that.currentPrototypeNotes[0].title + "fdddd"); //undefined
        }
};

