'use strict'

angular.module('darkCrystalApp')
  .controller 'GameCtrl', ['$scope', ($scope) ->
    $scope.isCollapsed = false
    $scope.radioModel = 'Middle'




    $scope.dynamic = Math.floor((Math.random()*100)+1)
  ]
