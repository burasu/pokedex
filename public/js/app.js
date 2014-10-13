// Función Javascript que se llama a sí misma.
(function () {

    // El primer argumento es el nombre del modulo y el resto
    // las dependencias.
    var app = angular.module('pokedex', [
        'pokedex.controllers'
    ]);

    app.directive('pokemonName', function () {
        return {
            restrict: 'A',
            templateUrl: 'partials/pokemon-name.html'
        };
    });

    app.directive('pokemonImage', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/pokemon-image.html'
        };
    });

    app.directive('pokemonData', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/pokemon-data.html'
        };
    });

    app.directive('pokemonStats', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/pokemon-stats.html'
        };
    });

    app.directive('pokemonEvolution', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/pokemon-evolution.html'
        };
    });

    // Plantilla de comentarios. Con ella se gestiona también la validación de los mensajes
    app.directive('pokemonComments', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/pokemon-comments.html',
            controller: function () {
                this.comments = [];
                this.comment = {};
                this.show = false;

                this.toggle = function () {

                    this.show = ! this.show;

                };

                this.anonymousChanged = function () {
                    if (this.comment.anonymous) {
                        this.comment.email = "";
                    }
                };

                this.addComment = function () {

                    this.comment.date = Date.now();
                    this.comments.push(this.comment);
                    this.comment = {};

                };

            },
            controllerAs: 'cmtsCtrl'
        };
    });

    // Filtro personalizado para generar automáticamente la url de las imágenes.
    app.filter('imageify', function () {

        return function (input) {

            var url = "img/pokemons/" + input.toLowerCase() + ".jpg";
            return url;

        };

    });

})();