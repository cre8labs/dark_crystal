'use strict'

angular.module('darkCrystalApp')
  .controller 'BoardCtrl', ['$scope', 'Board', ($scope, Board) ->
    $scope.numberOfFields = if Board.fields.length > 0 then Board.fields.length else 35

    $scope.generate = ->
      Board.generate $scope.numberOfFields

    if Board.fields.length is 0 then $scope.generate()
  ]
