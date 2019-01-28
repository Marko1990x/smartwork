angular
    .module('angularJsKurs')
    .component('helloWorld', {
        template: 'hello, {{user}}',
        controller: function HelloWorldController($scope) {
            $scope.user = 'World';
        }
    });


angular
    .module('angularJsKurs')
    .component('testApp', {
        template: "This is a test, {{mytest}}",
        controller: function testComponent($scope) {
            $scope.mytest = 'World'
        }
    });


/*
template: `This is a test,  -- ovako moze da ide u vise redova
     {{mytest}}`, */

angular
    .module('angularJsKurs')
    .component('partOne', {
        templateUrl: "./comp1/comp1.html",
        controller: function contSlika($scope) {
            $scope.slika = [{
                    img: "https://img-9gag-fun.9cache.com/photo/aM23KQV_460s_v1.jpg",
                    naziv: "slika 1"
                },
                {
                    img: "https://img-9gag-fun.9cache.com/photo/aM23KQV_460s_v1.jpg",
                    naziv: "slika 2"
                },
                {
                    img: "https://img-9gag-fun.9cache.com/photo/aM23KQV_460s_v1.jpg",
                    naziv: "slika 3"
                }

            ];

            $scope.mojeIme = "Marko";
            $scope.mojePrezime = "Dunovic";
            $scope.mestoRodjenja = "Novisad";
            $scope.godiste = 28;
            $scope.email = "marko_Dunovic@hotmail.com"
        }
    });

angular
    .module('angularJsKurs')
    .component('partTwo', {
        templateUrl: "./comp2/comp2.html",
        controller: function deoDva($scope) {
            $scope.mojeIme = "Marko";
            $scope.mojePrezime = "Dunovic";
            $scope.mestoRodjenja = "Novisad";
            $scope.godiste = 28;
            $scope.email = "marko_Dunovic@hotmail.com"

            $scope.name = 'world';
            $scope.count = 10;

            $scope.increment = () => {
                $scope.count++;
            }

            $scope.submit = () => {
                const userObj = {
                    name: $scope.mojeIme,
                    lastName: $scope.mojePrezime,
                    age: $scope.godiste,
                    email: $scope.email
                }
                console.log('userObj');
                console.log(userObj);
            }
        }
    });