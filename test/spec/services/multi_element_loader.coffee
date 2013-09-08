'use strict'

describe 'Service: multiElementLoader', () ->

  # load the service's module
  beforeEach module 'darkCrystalApp'

  # instantiate service
  multiElementLoader = {}
  beforeEach inject (_multiElementLoader_) ->
    multiElementLoader = _multiElementLoader_

  it 'should do something', () ->
    expect(!!multiElementLoader).toBe true
