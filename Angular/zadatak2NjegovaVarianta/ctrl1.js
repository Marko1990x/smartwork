angular.module('zadatak1').component('ctrlOne', {
    templateUrl: 'ctrl1.html',
    controller: function CtrlOneController($scope) {
        $scope.ime = 'Danilo';
        $scope.prezime = 'Mogin';
        $scope.mestoRodjenja = 'Novi Sad';
        $scope.galerija = [
            {
                slika: 'https://img-9gag-fun.9cache.com/photo/aM23KQV_460s_v1.jpg',
                naziv: 'Slika'
            },
            {
                slika: 'https://img-9gag-fun.9cache.com/photo/aM23KQV_460s_v1.jpg',
                naziv: 'Slika'
            },
            {
                slika: 'https://img-9gag-fun.9cache.com/photo/aM23KQV_460s_v1.jpg',
                naziv: 'Slika'
            },
            {
                slika: 'https://img-9gag-fun.9cache.com/photo/aM23KQV_460s_v1.jpg',
                naziv: 'Slika'
            }
        ];
    }
});
