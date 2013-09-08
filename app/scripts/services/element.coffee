'use strict';

angular.module('darkCrystalApp')
  .factory 'Element', ['$resource', ($resource) ->
    # AngularJS will instantiate a singleton by calling "new" on this function
    $resource 'data/elements/:id.json', {},
      query:
        method: 'GET'
        params:
          id: 'elements'
        isArray: true
  ]


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