'use strict'

describe 'Directive: dice', () ->

  # load the directive's module
  beforeEach module 'darkCrystalApp'

  scope = {}

  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()

  it 'should make hidden element visible', inject ($compile) ->
    element = angular.element '<dice></dice>'
    element = $compile(element) scope
    expect(element.text()).toBe 'this is the dice directive'
