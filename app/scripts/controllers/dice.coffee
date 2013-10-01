'use strict'

angular.module('darkCrystalApp')
  .controller 'DiceCtrl', ['$rootScope', '$scope', ($rootScope, $scope) ->
    $scope.roll = ->
      $rootScope.$emit 'dice.roll'
  ]
