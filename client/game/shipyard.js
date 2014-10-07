var shipyard = {};

shipyard.createShips = function(){
	
	var ships = [];
	
	var ship1 = {
	  x : 0,
	  y : 0,
	  length: 2,
	  direction:"N"  
	};
	
	ships[0] = ship1;
	
	return ships;
}
module.exports = shipyard;
