'use strict';

angular.module('darkCrystalApp')
  .service 'Board', [() ->
    fieldTypes = [
      title: 'Road'
      moveRange: [1, 6]
      image: 'resources/fields/road.png'
    ,
      title: 'Plain'
      moveRange: [1, 5]
      image: 'resources/fields/plain.png'
    ,
      title: 'Mountain'
      moveRange: [1, 3]
      image: 'resources/fields/mountain.png'
    ,
      title: 'Forest'
      moveRange: [1, 4]
      image: 'resources/fields/forest.png'
    ,
      title: 'Swamp'
      moveRange: [1, 2]
      image: 'resources/fields/swamp.png'
    ,
      title: 'River'
      moveRange: [1, 3]
      image: 'resources/fields/river.png'
    ,
      title: 'River-Whirlpool'
      moveRange: [1, 2]
      image: 'resources/fields/river_whirlpool.png'
    ,
      title: 'River-Whaterfall'
      moveRange: [1, 2]
      image: 'resources/fields/river_waterfall.png'
    ,
      title: 'Desert'
      moveRange: [1, 2]
      image: 'resources/fields/desert.png'
    ,
      title: 'Desert-Storm'
      moveRange: [1, 2]
      image: 'resources/fields/desert_storm.png'
    ,
      title: 'Desert-Skylights'
      moveRange: [1, 2]
      image: 'resources/fields/swamp_skylights.png'
    ,
      title: 'Swamp-Fog'
      moveRange: [1, 2]
      image: 'resources/fields/swamp_fog.png'
    ,
      title: 'Mountain-Avalanche'
      moveRange: [1, 2]
      image: 'resources/fields/mountain_avalanche.png'
    ,
      title: 'Mountain-Precipice'
      moveRange: [1, 2]
      image: 'resources/fields/mountain_precipice.png'
    ,
      title: 'Desert-Quicksand'
      moveRange: [1, 2]
      image: 'resources/fields/desert_quicksand.png'
    ]

    fields: []
    generate: (numberOfFields = 35) ->
      f = []
      f.push(angular.extend(angular.copy(fieldTypes.shuffle()[0]), index: n)) for n in [0...numberOfFields-1]
      f.push
        title: 'Dark Crystal'
        image: 'resources/fields/dark_crystal.png'
      @fields = f

  ]