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
                "sp.attack": 65,
                "sp.defense": 65,
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

})();