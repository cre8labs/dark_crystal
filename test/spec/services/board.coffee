'use strict'

describe 'Service: board', () ->

  # load the service's module
  beforeEach module 'darkCrystalApp'

  # instantiate service
  board = {}
  beforeEach inject (_board_) ->
    board = _board_

  it 'should do something', () ->
    expect(!!board).toBe true
