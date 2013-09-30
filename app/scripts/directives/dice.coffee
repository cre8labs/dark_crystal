'use strict';

angular.module('darkCrystalApp')
  .directive 'dice', ['$rootScope', ($rootScope) ->
    restrict: 'A'
    link: (scope, element, attrs) ->
      console.log 'linking dice directive'

      scope.dice = window.dice = $(element).rollingDice(
        turningCounts: 20
        defaultResult: 5
      ).data('rollingDice')

      $rootScope.$on 'dice.roll', ->
        console.log 'dice.roll detected... rolling'
        scope.dice.rollDiceRandom()
  ]
