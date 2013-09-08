'use strict';

angular.module('darkCrystalApp')
  .service 'Board', () ->
    fieldTypes = [
      title: 'Road'
      moveRange: [1, 6]
      image: '/images/fields/road.png'
    ,
      title: 'Plain'
      moveRange: [1, 5]
      image: '/images/fields/plain.png'
    ,
      title: 'Mountain'
      moveRange: [1, 3]
      image: '/images/fields/mountain.png'
    ,
      title: 'Forest'
      moveRange: [1, 4]
      image: '/images/fields/forest.png'
    ,
      title: 'Swamp'
      moveRange: [1, 2]
      image: '/images/fields/swamp.png'
    ,
      title: 'River'
      moveRange: [1, 3]
      image: '/images/fields/river.png'
    ]

    fields: []
    generate: (numberOfFields = 35) ->
      @fields = []
      @fields.push(fieldTypes.shuffle()[0]) for n in [0...numberOfFields]
      console.log 'fields', @fields
    getFields: ->
      @fields

