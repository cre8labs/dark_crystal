'use strict';

angular.module('darkCrystalApp')
  .directive 'dice', ['$rootScope', ($rootScope) ->
    restrict: 'A'
    link: (scope, element, attrs) ->
      scope.dice = window.dice = $(element).rollingDice(
        turningCounts: 20
        defaultResult: 5
      )
        .on('rolling', ->
          console.log 'rolling...'
        )
        .on('rolled', (event) ->
          alert "Rolled: #{event.num}"
        )
        .data('rollingDice')

      $rootScope.$on 'dice.roll', ->
        scope.dice.rollDiceRandom()
  ]
