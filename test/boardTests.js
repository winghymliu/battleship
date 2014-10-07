var assert = require("assert");
var expect = require('chai').expect
var _ = require("underscore");
var grid = require('../client/game/grid.js');
var shipyard = require('../client/game/shipyard.js');

describe('board', function(){
  describe('updateOccupiedGrid()', function(){
	
  	it('returns null if no ships are provided', function(){
  	  var ships = [];
  	  var occupiedGrid = grid.updateOccupiedGrid(ships);
  	  
  		assert.equal(occupiedGrid, null);
  	});
  	
  	it('returns a board of correct size', function(){
  	  var ships = shipyard.createShips();
  	  var occupiedGrid = grid.updateOccupiedGrid(ships);
  	  assert.equal(occupiedGrid.length, 10);
  	  _.each(occupiedGrid, function(col){
  	    assert.equal(col.length, 10);
  	  });
  		
  	});
  });
});