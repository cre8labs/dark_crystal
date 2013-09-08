'use strict'

angular.module('darkCrystalApp')
  .controller 'BoardCtrl', ['$scope', 'Board', ($scope, Board) ->
    $scope.numberOfFields = if Board.fields.length > 0 then Board.fields.length else 35

    $scope.fields = Board.fields

    $scope.generate = ->
      console.log 'generate() called'
      Board.generate $scope.numberOfFields
      $scope.fields = Board.fields

    if $scope.fields.length is 0 then $scope.generate()
  ]
