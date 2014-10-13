(function () {

    angular.module('pokedex.filters', [])

    // Filtro personalizado para generar automáticamente la url de las imágenes.
    .filter('imageify', function () {

        return function (input) {

            var url = "img/pokemons/" + input.toLowerCase() + ".jpg";
            return url;

        };

    });

})()
