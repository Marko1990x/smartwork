var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    $scope.mojeIme = "Marko";
    $scope.mojePrezime = "Dunovic";
    $scope.mestoRodjenja = "Novisad";
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
});
app.controller('cont2', function ($scope) {

    $scope.myFunc = function () {
        $scope.ime2 = "pera";
        $scope.prezime = "peric";
        $scope.godine = "1980 godiste";
        $scope.email = "pera@peric.com";
    };
});

//var app2 = angular.module('myApp2',[]);
// greska je bila zbog app2 :(
/*
app.controller('version2', function ($scope) {
    $scope.pictureName = "Slika X";
    $scope.pictureLocation = '<img src="https://img-9gag-fun.9cache.com/photo/aM23KQV_460s_v1.jpg"></img>';
});
*/
/*
app.cont2('myCtral', function($slika){
    $slika.zanimacija1 = [
        {
            $naziv = "this is the blasted picture"
        },
        {
            $picture = <img src="https://img-9gag-fun.9cache.com/photo/aM23KQV_460s_v1.jpg"></img>
        }
    ]
}); 
*/