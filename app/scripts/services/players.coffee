'use strict';

angular.module('darkCrystalApp')
  .service 'Players', ['Player', () ->
    # AngularJS will instantiate a singleton by calling "new" on this function
    players: []
    add: (player) ->
      @players.push player
    all: ->
      @players
  ]