'use strict';

angular.module('darkCrystalApp')
  .factory 'MultiElementLoader', ['Element', '$q', (Element, $q) ->
    () ->
      delay = $q.defer()
      Element.query (elements) ->
        delay.resolve elements
      , ->
        delay.reject 'Unable to fetch Elements'
      delay.promise
  ]