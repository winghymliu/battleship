var shipyard = {};

shipyard.createShips = function(){
	
	var ships = [];
	
	var ship1 = {
		name: "Ship1",
	  c1 : 0,
	  r1 : 0,
	  c2 : 1,
	  r2 : 2,
	  length: 2,
	  direction:"N"  
	};
	
	ships[0] = ship1;
	
	return ships;
}
module.exports = shipyard;
