'use strict'

describe 'Controller: DiceCtrl', () ->

  # load the controller's module
  beforeEach module 'darkCrystalApp'

  DiceCtrl = {}
  scope = {}

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    DiceCtrl = $controller 'DiceCtrl', {
      $scope: scope
    }

  it 'should attach a list of awesomeThings to the scope', () ->
    expect(scope.awesomeThings.length).toBe 3
