var app = angular.module('myApp', []);
app.controller('controller1', function ($scope) {
    
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

    $scope.name = 'world';
    $scope.count = 10;

    $scope.increment = () => {
        $scope.count++;
    }

    $scope.submit = () =>{
        const userObj = {
            name: $scope.mojeIme,
            lastName: $scope.mojePrezime,
            age: $scope.godiste,
            email: $scope.email
        }
        console.log('userObj');
        console.log(userObj);
    }
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