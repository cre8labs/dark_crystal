'use strict'

describe 'Service: element', () ->

  # load the service's module
  beforeEach module 'darkCrystalApp'

  # instantiate service
  element = {}
  beforeEach inject (_element_) ->
    element = _element_

  it 'should do something', () ->
    expect(!!element).toBe true
