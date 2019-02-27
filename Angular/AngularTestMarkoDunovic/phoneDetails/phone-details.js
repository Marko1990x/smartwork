angular.module('MainApp')
    .component('phoneDetails', {
        template: 
        `Odabrana je Slika sa ID: <span>{{$ctrl.phoneId}}</span> <br>`,
        controller: ['$routeParams',
        function PhoneDetailsController($routeParams) {
            this.phoneId = $routeParams.phoneId;
        }
    ]
    })