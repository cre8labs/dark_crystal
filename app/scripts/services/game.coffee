'use strict';

angular.module('darkCrystalApp')
  .service 'Game', ['Players', 'Board', (Players, Board) ->

    phases =
      preparation: []

    current_phase: null

  ]