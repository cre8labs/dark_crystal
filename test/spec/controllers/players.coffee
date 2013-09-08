'use strict'

describe 'Controller: PlayersCtrl', () ->

  # load the controller's module
  beforeEach module 'darkCrystalApp'

  PlayersCtrl = {}
  scope = {}

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    PlayersCtrl = $controller 'PlayersCtrl', {
      $scope: scope
    }

  it 'should attach a list of awesomeThings to the scope', () ->
    expect(scope.awesomeThings.length).toBe 3
