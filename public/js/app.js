// Función Javascript que se llama a sí misma.
(function () {

    // El primer argumento es el nombre del modulo y el resto
    // las dependencias.
    var app = angular.module('pokedex', [
        'pokedex.controllers',
        'pokedex.directives',
        'pokedex.filters'
    ]);

})();