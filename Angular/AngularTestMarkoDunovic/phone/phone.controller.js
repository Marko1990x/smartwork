angular.module('MainApp').controller('PhoneController', function ($scope, $http) {
    $scope.home = "This is the homepage";

    $scope.getRequest = function () {
        console.log("I've been pressed!");
        $http.get("http://api.myjson.com/bins/12qiaa")
            .then(function successCallback(response) {
                $scope.galerija = response.data.galerija;
                console.log(response.data.galerija);
                // console.log(response.data.galerija);
                // var row0 = response.data.galerija[0];
                // var row1 = response.data.galerija[1];
                // var row2 = response.data.galerija[2];
                // var row3 = response.data.galerija[3];
                // var row4 = response.data.galerija[4];
                // var row5     = response.data.galerija[5];
                // return response;

            }, function errorCallback(response) {
                console.log("Unable to perform get request");
            });
    };
    $scope.title = 'Stranica sa gallerijom';
    $scope.phones = [{
            name: "picture of a flower 1",
            snippet: "ovo je flower 1",
            id: 1,
        },
        {
            name: "picture of a cat",
            snippet: "ovo je slika macke",
            id: 2,
        },
        {
            name: "picture of a bird",
            snippet: "ovo je slika ptice",
            id: 3,
        }

    ]
})