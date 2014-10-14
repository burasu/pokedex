// Función Javascript que se llama a sí misma.
(function () {

    // El primer argumento es el nombre del modulo y el resto
    // las dependencias.
    var app = angular.module('pokedex', [
        'ngRoute',
        'pokedex.controllers',
        'pokedex.directives',
        'pokedex.filters'
    ]);

    // Preparamos para configurar las rutas.
    app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'views/pokedex.html',
                controller: 'PokedexController'
            })

            .when('/pokemon/:id', {
                templateUrl: 'views/pokemon.html',
                controller: 'PokemonController',
                controllerAs: 'pkmCtrl'
            })

            .otherwise({
                redirectTo: '/'
            });

    }]);

})();