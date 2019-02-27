 var app = angular.module('MainApp').controller('HomeController', function ($scope, $interval) {
     $scope.title = 'This is the Home Page';
     $scope.ja = {
         ime: 'Marko',
         prezime: 'Dunovic',
         godina: 28,
         email: 'marko_dunovic@hotmail.com',
     }
     var tick = function() {
        $scope.clock = Date.now();
      }
      tick();
      $interval(tick, 1000);
     $scope.homes = [{

             name: "Petar",
             lastName: "Petrovic",
             email: "petar@petrovic.com",
             snippet: "Ovo je osoba 1",
             id: 1

         },
         {

             name: "Nikola",
             lastName: "Nikolic",
             email: "nikola@nikolic.com",
             snippet: "Ovo je osoba 2",
             id: 2

         },
         {

             name: "Damjan",
             lastName: "Nikolic",
             email: "damjan@nikolic.com",
             snippet: "Ovo je deo 3",
             id: 3

         },
         {

             name: "Stevan",
             lastName: "Stevic",
             email: "stevan@stevic.com",
             snippet: "Ovo je deo 4",
             id: 4

         },

     ]
 });