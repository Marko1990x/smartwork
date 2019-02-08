angular.module('angularJSKurs').config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider
        .when('/home', {
            templateUrl: './home/home.html',
            controller: 'HomeController'
        })
        .when('/phones', {
            templateUrl: './phone/phone.html',
            controller: 'PhoneController'
        })
        .when('/phones/:phoneId', {
            template: '<phone-details></phone-details>'
        })
        .when('/homes/:homeId', {
            template: '<home-details></home-details>'
        })
        .otherwise( {
            redirectTo: '/home'
        });
});