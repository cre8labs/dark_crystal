'use strict'

describe 'Service: players', () ->

  # load the service's module
  beforeEach module 'darkCrystalApp'

  # instantiate service
  players = {}
  beforeEach inject (_players_) ->
    players = _players_

  it 'should do something', () ->
    expect(!!players).toBe true
