angular.module('angularJSKurs')
    .component('phoneDetails', {
        template: 
        `Odabran je telefon sa ID: <span>{{$ctrl.phoneId}}</span> <br>`,
        controller: ['$routeParams',
        function PhoneDetailsController($routeParams) {
            this.phoneId = $routeParams.phoneId;
        }
    ]
    })