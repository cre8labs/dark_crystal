'use strict';

angular.module('darkCrystalApp')
  .directive 'board', ['Board', (Board) ->
    template: '''
              <ul class="board" ng-transclude>
                <field ng-repeat="field in fields" data-field-index="{{ $index }}" style="background-image: url({{ field.image }});">
                  <span class="badge badge-inverse pull-right">{{ $index +1 }}</span>
                </field>
              </ul>
              '''
    restrict: 'E'
    replace: true
    transclude: true
    scope: {}
    controller: ($scope, $element) ->
      $scope.Board = Board
      $scope.fields = Board.fields

      $scope.$watch 'Board.getFields()', (fields) ->
        $scope.fields = fields


    link: (scope, element, attrs) ->

  ]
