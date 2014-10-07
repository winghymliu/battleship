var assert = require("assert");
var expect = require('chai').expect
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
            
            for(var c = 0; c < occupiedGrid.length; c++){
              for(var r = 0; r < occupiedGrid.length; r++){
                var expectedValue = 0;
                if((c == 0 && r == 0)|| (c == 0 && r == 1) ){
                  expectedValue = 1;
                } 
                assert.equal(occupiedGrid[c][r], expectedValue);      
              }
            }
          });
      });
});      
      