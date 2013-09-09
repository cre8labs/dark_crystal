'use strict'

angular.module('darkCrystalApp')
  .controller 'GameCtrl', ['$scope', 'Board', 'Players', ($scope, Board, Players) ->
    $scope.fields = Board.fields
    $scope.players = Players.all()
  ]
