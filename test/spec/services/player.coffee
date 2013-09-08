'use strict'

describe 'Service: player', () ->

  # load the service's module
  beforeEach module 'darkCrystalApp'

  # instantiate service
  player = {}
  beforeEach inject (_player_) ->
    player = _player_

  it 'should do something', () ->
    expect(!!player).toBe true
