(function() {
  "use strict";
  /* gloabal angular*/

  angular.module("hitchhikrApp", []).controller('ArticlesCtrl', function($scope) {
    return $scope.articles = [
      {
        id: 1,
        name: "Pizza Vegetaria",
        price: 5
      }, {
        id: 2,
        name: "Pizza Salami",
        price: 5.5
      }, {
        id: 3,
        name: "Pizza Thunfisch",
        price: 6
      }
    ];
  });

}).call(this);
