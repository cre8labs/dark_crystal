'use strict';

angular.module('darkCrystalApp')
  .directive 'board', ['Board', (Board) ->
    template: '''
              <ul class="board">
                <field ng-repeat="field in fields track by $index" data-field-index="{{ $index }}" style="background-image: url({{ field.image }});">
                  <span class="badge badge-inverse pull-right">{{ $index +1 }}</span>
                </field>
              </ul>
              '''
    restrict: 'E'
    replace: true
    scope: {}
    controller: ($scope, $element) ->
      $scope.Board = Board
      $scope.fields = Board.fields

      $scope.$watch 'Board.getFields()', (fields) ->
        $scope.fields = fields


    link: (scope, element, attrs) ->

  ]
