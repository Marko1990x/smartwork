angular.module('angularJSKurs')
    .component('homeDetails', {
        template: 
        `Izabrama je kuca sa ID-om: <span>{{$ctrl.homeId}}</span> <br>`,
        controller: ['$routeParams',
        function homeDetailsController($routeParams) {
            this.homeId = $routeParams.homeId;
        }
    ]
    })