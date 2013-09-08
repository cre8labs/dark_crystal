'use strict'

angular.module('darkCrystalApp')
  .controller 'PlayersCtrl', ['$scope', 'elements', 'Element', 'Players', ($scope, elements, Element, Players) ->
    $scope.myInterval = 5000
    slides = $scope.slides = []
    players = $scope.players = Players.all()

    randomNames = ['Adam', 'Monika', 'Sam', 'Martha', 'Tom']

    $scope.addSlide = (element) ->
      slides.push
        image: element.image
        text: element.name

    $scope.addPlayer = (index) ->
      element = Element.get(id: elements[index].id)
      players.push
        name: randomNames.shuffle()[0]
        element: element
        human: false

    $scope.removePlayer = (index) ->
      players.splice(index, 1)

    elements.map $scope.addSlide
  ]
