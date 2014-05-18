(function() {
  "use strict";
  /* gloabal angular*/

  angular.module("hitchhikrApp", ['ngAnimate']).controller('ArticlesCtrl', function($scope, $http, Cart) {
    return $http.get('articles.json').then(function(articlesResponse) {
      $scope.cart = Cart;
      return $scope.articles = articlesResponse.data;
    });
  }).factory('Cart', function() {
    var items;
    items = [];
    return {
      getItems: function() {
        return items;
      },
      addArticle: function(article) {
        return items.push(article);
      },
      sum: function() {
        return items.reduce(function(total, article) {
          return total + article.price;
        }, 0);
      }
    };
  }).controller('CartCtrl', function($scope, Cart) {
    return $scope.cart = Cart;
  });

}).call(this);
