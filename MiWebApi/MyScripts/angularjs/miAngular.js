var miApp = angular.module("angApp", []);
miApp.controller("animalesController", function ($scope, $http) {

    $scope.animales = [];
    $scope.animal = [];
    $scope.tipos = [];
    $scope.estado = 'L'; //L = lectura; A = alta; B = Baja; M = Modificacion

    $scope.GetAll = function () {
        $http.get('/api/animales').then(function (resp) {
            $scope.animales = resp.data;
            console.log(resp);
        })
    };

    $scope.GetTipos = function () {
        $http.get('/api/tipos').then(function (rest) {
            $scope.tipos = rest.data;
            console.log(rest);
        })
    }

    $scope.GetTipos();

    $scope.Join = function (tipo) {
        for (t in $scope.tipos) {
            if ($scope.tipos[t].id_tipo == tipo) {
                return $scope.tipos[t].descripcion;
            }
        }
    };

    $scope.Eliminar = function (id) {
        if (window.confirm("¿¿Esta seguro que desea eliminar??")) {
            $http.delete('/api/animales/' + id).then(function (rta) {
                $scope.GetAll();
                console.log(rta);
            });
        }
    };

    $scope.Modificar = function (pet) {
        $scope.animal = pet;
        $scope.animal.fechaIngreso = new Date($scope.animal.fechaIngreso);
        $scope.estado = 'M';
    }

    $scope.Nuevo = function () {
        $scope.animal = {
            nombre: '',
            tipo: '',
            edad: '',
            nroJaula: '',
            fechaIngreso: '',
            adopcion: '' };
        $scope.estado = 'A';
    }

    $scope.GuardarCambios = function(){
        if ($scope.estado == 'A') {
            $http.post('/api/animales', $scope.animal).then(function (rta) {
                $scope.GetAll();
                console.log(rta);
                $scope.estado = 'L';
                $scope.animal = [];

            });
        }
        else {
            if ($scope.estado == 'M') {
                $http.put('/api/animales', $scope.animal).then(function (rta) {
                    $scope.GetAll();
                    console.log(rta);
                    $scope.estado = 'L';
                    $scope.animal = [];

                    })
                }
            }
    }

    $scope.CambiarEstado = function (bol) {
        $scope.animal.adopcion = bol;
    };

});