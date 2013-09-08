'use strict';

angular.module('darkCrystalApp')
  .factory 'Element', ['$resource', ($resource) ->
    # AngularJS will instantiate a singleton by calling "new" on this function
    $resource 'resources/data/elements/:id.json', {},
      query:
        method: 'GET'
        params:
          id: 'elements'
        isArray: true
  ]
