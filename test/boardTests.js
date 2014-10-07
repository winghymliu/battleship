var assert = require("assert"); // node.js core module
var expect = require('chai').expect
var grid = require('../client/game/grid.js');

describe('board', function(){
  describe('updateOccupiedGrid()', function(){
	
	it('test return 1', function(){
	  var occupiedGrid = grid.updateOccupiedGrid();
	  
		assert.equal(occupiedGrid, 1);
	})
  })
})