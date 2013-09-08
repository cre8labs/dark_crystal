'use strict'

do -> Array::shuffle ?= ->
  for i in [@length-1..1]
    j = Math.floor Math.random() * (i + 1)
    [@[i], @[j]] = [@[j], @[i]]
  @

angular.module('darkCrystalApp', ['ui.bootstrap', 'ngResource'])
  .config ['$routeProvider', ($routeProvider) ->
    $routeProvider
      .when '/',
#        templateUrl: 'views/welcome.html'
#        controller: 'GameCtrl'
        redirectTo: '/players'
      .when '/about',
        templateUrl: 'views/about.html'
      .when '/contact',
        templateUrl: 'views/contact.html'
      .when '/players',
        templateUrl: 'views/players.html'
        controller: 'PlayersCtrl'
        resolve:
          elements: ['MultiElementLoader', (MultiElementLoader) ->
            MultiElementLoader()
          ]
      .when '/board',
        templateUrl: 'views/board.html',
        controller: 'BoardCtrl'
      .otherwise
        redirectTo: '/players'
  ]
