angular.module('angularJSKurs').controller('HomeController', function ($scope) {
    $scope.title = 'Home Page';
    $scope.homes = [{

        name: "Moja kuca 1",
        snippet: "Ovo je deo 1",
        id: 1

    },
    {

        name: "Moja kuca 2",
        snippet: "Ovo je deo 2",
        id: 2

    },
    {

        name: "Moja kuca 3",
        snippet: "Ovo je deo 3",
        id: 3

    },
    {

        name: "Moja kuca 4",
        snippet: "Ovo je deo 4",
        id: 4

    },

]
})