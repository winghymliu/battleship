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
        c1: 2,
        r1: 5,
        c2: 3,
        r2: 7,
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

      var eastShip = {
        c1: 2,
        r1: 5,
        c2: 4,
        r2: 6,
        length: 2,
        direction: "E"
      };

      ships.push(eastShip);

      var occupiedGrid = grid.updateOccupiedGrid(ships);

      for (var c = 0; c < occupiedGrid.length; c++) {
        for (var r = 0; r < occupiedGrid.length; r++) {
          var expectedValue = 0;
          if ((c == 2 && r == 5) || (c == 1 && r == 5)) {
            expectedValue = 1;
          }
          assert.equal(occupiedGrid[c][r], expectedValue);
        }
      }
    });

    it('returns a correctly defined grid with a ship facing south', function() {
      var ships = [];

      var southShip = {
        c1: 5,
        r1: 5,
        c2: 6,
        r2: 8,
        length: 3,
        direction: "S"
      };

      ships.push(southShip);

      var occupiedGrid = grid.updateOccupiedGrid(ships);

      for (var c = 0; c < occupiedGrid.length; c++) {
        for (var r = 0; r < occupiedGrid.length; r++) {
          var expectedValue = 0;
          if ((c == 5 && r == 5) || (c == 5 && r == 4) || (c == 5 && r == 3)) {
            expectedValue = 1;
          }
          assert.equal(occupiedGrid[c][r], expectedValue);
        }
      }
    });

    it('returns a correctly defined grid with a ship facing west', function() {
      var ships = [];

      var westShip = {
        c1: 3,
        r1: 6,
        c2: 3,
        r2: 6,
        length: 4,
        direction: "W"
      };

      ships.push(westShip);

      var occupiedGrid = grid.updateOccupiedGrid(ships);

      for (var c = 0; c < occupiedGrid.length; c++) {
        for (var r = 0; r < occupiedGrid.length; r++) {
          var expectedValue = 0;
          if ((c == 3 && r == 6) || (c == 4 && r == 6) || (c == 5 && r == 6) || (c == 6 && r == 6)) {
            expectedValue = 1;
          }
          assert.equal(occupiedGrid[c][r], expectedValue);
        }
      }
    });

    it('returns a correctly defined grid with two ships', function() {
      var ships = [];

      var northShip = {
        c1: 2,
        r1: 5,
        c2: 2,
        r2: 6,
        length: 2,
        direction: "N"
      };

      var westShip = {
        c1: 3,
        r1: 6,
        c2: 6,
        r2: 6,
        length: 4,
        direction: "W"
      };

      ships.push(northShip);
      ships.push(westShip);

      var occupiedGrid = grid.updateOccupiedGrid(ships);

      for (var c = 0; c < occupiedGrid.length; c++) {
        for (var r = 0; r < occupiedGrid.length; r++) {
          var expectedValue = 0;
          //West
          if ((c == 3 && r == 6) || (c == 4 && r == 6) || (c == 5 && r == 6) || (c == 6 && r == 6)) {
            expectedValue = 1;
          } //North
          else if ((c == 2 && r == 5) || (c == 2 && r == 6)) {
            expectedValue = 1;
          }
          assert.equal(occupiedGrid[c][r], expectedValue);
        }
      }
    });

    it('throws an exception when two ships overlap', function() {
      var ships = [];

      var northShip = {
        c1: 2,
        r1: 5,
        c2: 2,
        r2: 6,
        length: 2,
        direction: "N"
      };

      var westShip = {
        c1: 1,
        r1: 6,
        c2: 4,
        r2: 6,
        length: 4,
        direction: "W"
      };

      ships.push(northShip);
      ships.push(westShip);

      assert.throws(function() {
        grid.updateOccupiedGrid(ships)
      }, Error, "Overlapping ships");

    });
    
      it('throws an exception when a ship goes off the grid on y axis', function() {
      var ships = [];

      var northShip = {
        c1: 0,
        r1: 0,
        c2: 0,
        r2: -1,
        length: 2,
        direction: "S"
      };

      var westShip = {
        c1: 1,
        r1: 6,
        c2: 4,
        r2: 6,
        length: 4,
        direction: "W"
      };

      ships.push(northShip);
      ships.push(westShip);

      assert.throws(function() {
        grid.updateOccupiedGrid(ships)
      }, Error, "Ship out of bounds");

    });
    
    it('throws an exception when a ship goes off the grid on x axis', function() {
      var ships = [];

      var northShip = {
        c1: 0,
        r1: 0,
        c2: 0,
        r2: 1,
        length: 2,
        direction: "N"
      };

      var westShip = {
        c1: 9,
        r1: 9,
        c2: 12,
        r2: 9,
        length: 4,
        direction: "W"
      };

      ships.push(northShip);
      ships.push(westShip);

      assert.throws(function() {
        grid.updateOccupiedGrid(ships)
      }, Error, "Ship out of bounds");

    });
    
  });
});