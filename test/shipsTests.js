var assert = require("assert"); // node.js core module
var expect = require('chai').expect
var shipyard = require('../client/game/shipyard.js');

describe('ships', function(){
  describe('create ships', function(){
    it('should create the default ships for a team', function(){
        var ships = shipyard.createShips();
        var noOfShips = 1;
        assert.equal(ships.length, noOfShips);
        assert.equal(ships[0].x, 10);
        assert.equal(ships[0].y, 10);
        
	})
  })
})