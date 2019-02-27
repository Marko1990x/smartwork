angular.module('MainApp')
    .component('homeDetails', {
        template: 
        `Izabrama je osoba sa ID-om: <span>{{$ctrl.homeId}}</span> <br>`,
        controller: ['$routeParams',
        function homeDetailsController($routeParams) {
            this.homeId = $routeParams.homeId;
        }
    ]
    })