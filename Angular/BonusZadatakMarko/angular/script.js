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

    $scope.mojeIme = "MarkoD";
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
}),
app.controller('controllerTwo', function($scope){
    $scope.myname = "Marko";
    $scope.lastname = "Dunovic";

    $scope.imeONE = "Nenad";
    $scope.lastONE = "Bosanac";
    $scope.polONE = "M";

    $scope.count = 10;
    $scope.count1 = 5;
    $scope.count2 = 10;
    $scope.count3 = 5;
    $scope.count4 = 10;
    $scope.count5 = 5;
    $scope.count6 = 10;
    $scope.count7 = 5;

    $scope.increment = () => {
        $scope.count++;
    }
    $scope.increment = () => {
        $scope.count--;
    }
    
    $scope.Zemlje = [{
        naziv: "Srbija",
        subnaziv1: "Beograd",
        subnaziv2: "Novi Sad",
        subnaziv3: "Subotica",
    },
    {
        naziv: "BIH",
        subnaziv1: "Banjaluka",
        subnaziv2: "Bihac",
        subnaziv3: "Sarajevo",
    },
    {
        naziv: "Makedonija",
        subnaziv1: "Skoplje",
        subnaziv2: "Veles",
        subnaziv3: "Ohrid",
    }

];
})
;


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