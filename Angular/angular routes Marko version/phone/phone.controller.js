angular.module('angularJSKurs').controller('PhoneController', function($scope){
    $scope.title = 'Phone page';
    $scope.phones = [
        {
            name: "Nexus 5",
            snippet: "Ovo je deo 1",
            id: 1
        },
        {
            name: "Bla bla 3",
            snippet: "Ovo je deo 2",
            id: 2
        },
        {
            name: "Nokia",
            snippet: "Ovo je deo 3",
            id: 3
        }
        
    ]
})