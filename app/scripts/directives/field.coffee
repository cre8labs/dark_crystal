'use strict';

angular.module('darkCrystalApp')
  .directive 'field', [->
    require: '^board'
    template: '<li ng-transclude></li>'
    restrict: 'E'
    replace: true
    transclude: true
    link: (scope, element, attrs, boardCtrl) ->

  ]
