'use strict'

angular.module('darkCrystalApp')
  .controller 'TopNavCtrl', ['$scope', '$location', ($scope, $location) ->
    $scope.navTo = (path) ->
      $location.path path
  ]
