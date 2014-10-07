var assert = require("assert");
var expect = require('chai').expect;
var _ = require("underscore");
var grid = require('../client/game/grid.js');
var shipyard = require('../client/game/shipyard.js');

describe('grid', function() {
  describe('updateOccupiedGrid()', function() {

    it('returns null if no ships are provided', function() {
      var ships = [];
      var occupiedGrid = grid.updateOccupiedGrid(ships);

      assert.equal(occupiedGrid, null);
    });

    it('returns a grid of correct size', function() {
      var ships = shipyard.createShips();
      var occupiedGrid = grid.updateOccupiedGrid(ships);
      assert.equal(occupiedGrid.length, 10);
      _.each(occupiedGrid, function(col) {
        assert.equal(col.length, 10);
      });
    });

    it('returns a correctly defined grid when given default ships', function() {
      var ships = shipyard.createShips();
      var occupiedGrid = grid.updateOccupiedGrid(ships);

      for (var c = 0; c < occupiedGrid.length; c++) {
        for (var r = 0; r < occupiedGrid.length; r++) {
          var expectedValue = 0;
          if ((c == 0 && r == 0) || (c == 0 && r == 1)) {
            expectedValue = 1;
          }
          assert.equal(occupiedGrid[c][r], expectedValue);
        }
      }
    });

    it('returns a correctly defined grid with a ship facing north', function() {
      var ships = [];

      var northShip = {
        x: 2,
        y: 5,
        length: 2,
        direction: "N"
      };

      ships.push(northShip);

      var occupiedGrid = grid.updateOccupiedGrid(ships);

      for (var c = 0; c < occupiedGrid.length; c++) {
        for (var r = 0; r < occupiedGrid.length; r++) {
          var expectedValue = 0;
          if ((c == 2 && r == 5) || (c == 2 && r == 6)) {
            expectedValue = 1;
          }
          assert.equal(occupiedGrid[c][r], expectedValue);
        }
      }
    });

    it('returns a correctly defined grid with a ship facing north', function() {
      var ships = [];

      var northShip = {
        x: 2,
        y: 5,
        length: 2,
        direction: "N"
      };

      ships.push(northShip);

      var occupiedGrid = grid.updateOccupiedGrid(ships);

      for (var c = 0; c < occupiedGrid.length; c++) {
        for (var r = 0; r < occupiedGrid.length; r++) {
          var expectedValue = 0;
          if ((c == 2 && r == 5) || (c == 2 && r == 6)) {
            expectedValue = 1;
          }
          assert.equal(occupiedGrid[c][r], expectedValue);
        }
      }
    });

    it('returns a correctly defined grid with a ship facing east', function() {
      var ships = [];

      var northShip = {
        x: 2,
        y: 5,
        length: 2,
        direction: "E"
      };

      ships.push(northShip);

      var occupiedGrid = grid.updateOccupiedGrid(ships);

      for (var c = 0; c < occupiedGrid.length; c++) {
        for (var r = 0; r < occupiedGrid.length; r++) {
          var expectedValue = 0;
          if ((c == 2 && r == 5) 
            ||(c == 1 && r == 5)) {
            expectedValue = 1;
          }
          assert.equal(occupiedGrid[c][r], expectedValue);
        }
      }
    });

    it('returns a correctly defined grid with a ship facing south', function() {
      var ships = [];

      var northShip = {
        x: 5,
        y: 5,
        length: 3,
        direction: "S"
      };

      ships.push(northShip);

      var occupiedGrid = grid.updateOccupiedGrid(ships);

      for (var c = 0; c < occupiedGrid.length; c++) {
        for (var r = 0; r < occupiedGrid.length; r++) {
          var expectedValue = 0;
          if ((c == 5 && r == 5) 
            ||(c == 5 && r == 4) 
            ||(c == 5 && r == 3)) {
            expectedValue = 1;
          }
          assert.equal(occupiedGrid[c][r], expectedValue);
        }
      }
    });

    it('returns a correctly defined grid with a ship facing west', function() {
      var ships = [];

      var northShip = {
        x: 3,
        y: 6,
        length: 4,
        direction: "W"
      };

      ships.push(northShip);

      var occupiedGrid = grid.updateOccupiedGrid(ships);

      for (var c = 0; c < occupiedGrid.length; c++) {
        for (var r = 0; r < occupiedGrid.length; r++) {
          var expectedValue = 0;
          if ((c == 3 && r == 6) 
            ||(c == 4 && r == 6)
            ||(c == 5 && r == 6)
            ||(c == 6 && r == 6)
            ) {
            expectedValue = 1;
          }
          assert.equal(occupiedGrid[c][r], expectedValue);
        }
      }
    });
  });
});