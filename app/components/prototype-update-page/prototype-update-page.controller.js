
import AngularObject from 'helpers/angular-object';

export default class PrototypeUpdatePageCtrl extends AngularObject {
    constructor ($scope, $element, $mdSidenav, $document, $http) {
        'ngInject';
        super($http);
    }

    upload(file) {
        console.log (file);
        if (file) {
            // create an object for the ids
            var pictureId;

            // create a new formdata to store our image
            var fd = new FormData();
            fd.append('photo', file);

            console.log (fd);

            // process the upload
            $http({
                method: 'POST',
                url: 'https://actorreels.stamplayapp.com/api/cobject/v1/pictures',
                data: fd,
                headers: { 'Content-Type': undefined },
                photo: file
            }).then(function(response) {
                console.log ("Upload Single Image to Stamplay successful!");
                console.log (response);

            }, function(err){
                console.log (err);
            });
        }
    }

};

