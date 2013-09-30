'use strict'

angular.module('darkCrystalApp')
  .controller 'DiceCtrl', ['$rootScope', '$scope', ($rootScope, $scope) ->
    $scope.roll = ->
      console.log 'roll() called'
      $rootScope.$emit 'dice.roll'
  ]
