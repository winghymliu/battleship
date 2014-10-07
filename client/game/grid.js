var grid = {};
var gridSize = 10;

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
	
	return occupiedGrid;
}
module.exports = grid;
