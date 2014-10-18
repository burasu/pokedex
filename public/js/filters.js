(function () {

    angular.module('pokedex.filters', [])
        .filter('normalize', function () {
            return function (input) {

                if ( ! input ) return "";

                input = input
                    .replace('♀', 'f')
                    .replace('♂', 'm')
                    .replace(/\W+/g, '');
                return input.toLowerCase();
            }

        })

        // Filtro personalizado para generar automáticamente la url de las imágenes.
        .filter('imageify', ['$filter', function ($filter) {

            return function (input) {
                var url = "img/pokemons/" + $filter('normalize')(input) + ".jpg";
                return url;
            };
        }]);

})();