(function () {

    angular.module('pokedex.services', [])

        .factory('pokemonService', ['$http', '$q', function ($http, $q) {

            function all() {

            }

            return {
                all: all
            }
        }]);

})();
