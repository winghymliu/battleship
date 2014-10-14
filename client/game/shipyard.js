var shipyard = {};

shipyard.createShips = function(){
	
	var ships = [];
	
	var ship1 = {
		name: "Ship1",
	  c : 0,
	  r : 0,
	  length: 2,
	  direction:"N"  
	};
	
	ships[0] = ship1;
	
	return ships;
}
module.exports = shipyard;
