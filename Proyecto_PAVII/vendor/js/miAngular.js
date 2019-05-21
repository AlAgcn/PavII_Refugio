var miApp = angular.module("miApp", []);
miApp.controller("miController", function ($scope, $http) {
    $scope.animales = [{ name: 'Milanesa', type: 'conejo', date: '14/08/2018', edad: '2', jaula: '50', adop: 'false' },
    { name: 'Catalino', type: 'gato', date: '21/04/2017', edad: '1', jaula: '15', adop: 'false' },
    { name: 'Pirlo', type: 'perro', date: '01/10/2019', edad: '3', jaula: '20', adop: 'true' }];

    $scope.agregar = function (unAnimal)
    {
        $scope.animales.push(unAnimal)
    };

    $scope.mostrar = function () {
        window.alert('Prueba numero uno')
    }


});