"use strict"
### gloabal angular ###

angular.module("hitchhikrApp", ['ngAnimate'])
  .controller 'ArticlesCtrl', ($scope, $http, Cart) ->
    $http.get('articles.json').then (articlesResponse) ->
      $scope.cart = Cart
      $scope.articles = articlesResponse.data
  .factory 'Cart', ->
    items = []
    {
      getItems: ->
        items
      addArticle: (article) ->
        items.push(article)
      sum: ->
        items.reduce (total, article) ->
          total + article.price
        , 0
    }
  .controller 'CartCtrl', ($scope, Cart) ->
    $scope.cart = Cart
