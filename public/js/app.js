// Función Javascript que se llama a sí misma.
(function () {

    // El primer argumento es el nombre del modulo y el resto
    // las dependencias.
    var app = angular.module('pokedex', []);

    // Definimos el controlador.
    app.controller('PokemonController', function () {

        // definimos el objeto
        this.pokemon = {
            id: "001",
            name: "Bulbasaur",
            species: "Seed Pokémon",
            type: [ "Grass", "Poison" ],
            height: "2′4″ (0.71m)",
            weight: "15.2 lbs (6.9 kg)",
            abilities: [ "Overgrow", "Chlorophyll" ],
            stats: {
                hp: 45,
                attack: 49,
                defense: 49,
                "sp.atk": 65,
                "sp.def": 65,
                speed: 45,
                total: 318
            },
            evolution: [ "Bulbasaur", "Ivysaur", "Venusaur" ]
        };
    });

    // Definimos un nuevo controlador para la gestión de las solapas.
    app.controller('TabsController', function () {

        this.tab = 1;

        this.selectTab = function (tab) {
            this.tab = tab;
        };

    });

    // Controlador de comentarios
    app.controller('CommentsController', function () {

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


    // Filtro personalizado para generar automáticamente la url de las imágenes.
    app.filter('imageify', function () {

        return function (input) {

            var url = "img/pokemons/" + input.toLowerCase() + ".jpg";
            return url;

        };

    });

})();