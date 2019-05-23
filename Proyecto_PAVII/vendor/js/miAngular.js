var miApp = angular.module("miApp", []);

miApp.controller("miController", function ($scope, $http) {
    $scope.animales = [{ name: 'Milanesa', type: 'conejo', date: '14/08/2018', edad: '2', jaula: '50', adop: 'false' },
    { name: 'Catalino', type: 'gato', date: '21/04/2017', edad: '1', jaula: '15', adop: 'false' },
    { name: 'Pirlo', type: 'perro', date: '01/10/2019', edad: '3', jaula: '20', adop: 'true' }];

    $scope.agregar = function ()
    {
        if ($scope.validarCampos()) {
            $scope.animales.push({
                name: $scope.nombre,
                type: $scope.tipo,
                date: $scope.fecha,
                edad: $scope.age,
                jaula: $scope.numJaula,
                adop: false
            });
        }
        else {
            alert("No estan cargados todos los campos")
        };

        $scope.limpiar();
    };

    $scope.mostrar = function () {
        window.alert('Prueba numero uno')
    };

    $scope.limpiar = function () {
        $scope.nombre = "";
        $scope.tipo = "";
        $scope.fecha = "";
        $scope.age = "";
        $scope.numJaula = "";
    }

    $scope.validarCampos = function () {
        if ($scope.nombre == "" ||
            $scope.tipo == "" ||
            $scope.fecha == "" ||
            $scope.age == "" ||
            $scope.numJaula == "")
             { return false   }
        else { return true };
    };
});