var _ = require("underscore");
var grid = {};
var gridSize = 10;

function isOutOfBounds(curX, curY){
	if((curX < 0 || curX > gridSize -1)		 
	   ||(curY < 0 || curY > gridSize -1)){
		return true;  	
	}
	return false;
}

function updateGridWithShip(ship, occupiedGrid){
	var count = ship.length;
	var curX = ship.x;
	var curY = ship.y;
	while(count > 0){
	  if(isOutOfBounds(curX, curY)){
	  	throw new Error("Ship out of bounds");
	  }
		
	  if(occupiedGrid[curX][curY] == 1)	
	  	throw new Error("Overlapping ships");
		
	  occupiedGrid[curX][curY] = 1;
	  
	  if(ship.direction == "N"){
		curY++;		
	  } else if(ship.direction == "E"){
	  	curX--;
	  } else if (ship.direction == "S"){
	  	curY--;
	  } else if(ship.direction == "W") {
	  	curX++;
	  } else {
	  	throw new Error("Uknown direction: " + ship.direction);
	  }
	  count--;
	} ;
	  
	
}

grid.updateOccupiedGrid = function(ships){
	if(ships == null || ships == undefined || ships.length == 0)
		return null;
	var occupiedGrid = [];
	for(var i =0; i < gridSize; i++){
		occupiedGrid[i] = [];
	}
	
	for(var c =0; c < gridSize; c++){
		for(var r =0; r < gridSize; r++){
			occupiedGrid[c][r] = 0;
		}	
	}
	
	_.each(ships, function(ship){
		updateGridWithShip(ship, occupiedGrid);	
	});
	
	return occupiedGrid;
}
module.exports = grid;
