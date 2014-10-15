app.controller('GridCtrl', 
	function($scope, gridServices) {
	
	var rows = gridServices.getRows();
	var cols = gridServices.getCols();
		
		$scope.sketch = function(sketch) {
			var locked = false;
			var boxSize = 20;

			var unusedColor = 150;
			var occupiedColor = sketch.color(252, 13, 0);
			var selectedColor = 255;


			var s1 = {
				r: 1,
				c: 2,
				name: "A"
			}

			var ships = [s1];
			var lockedShip = null;

			sketch.setup = function() {
				sketch.rectMode(sketch.CORNER);
				sketch.size(200, 200);
				console.log($scope.testHi());
			}

			sketch.draw = function() {
				sketch.background(0);
				sketch.stroke(400);
				var startx = 0;
				var starty = 0;

				for (var r = 0; r < rows; r++) {
					for (var c = 0; c < cols; c++) {
						for (var i = 0; i < ships.length; i++) {
							if (ships[i].r == r && ships[i].c == c) {
								//console.log("Name: " + items[i].name + " R: "+ items[i].r + " C: "+ items[i].c);
								if (locked) {
									sketch.fill(selectedColor);
								}
								else {
									sketch.fill(occupiedColor);
								}
							}
							else {
								sketch.fill(unusedColor);
							}
						}
						var bx = startx + (boxSize * c);
						var by = starty + (boxSize * r);
						sketch.rect(bx, by, boxSize, boxSize);
					}
				}

				if (locked) {
					sketch.fill(occupiedColor);
					sketch.rect(gridServices.centerCoord(sketch.mouseX, boxSize), gridServices.centerCoord(sketch.mouseY, boxSize), boxSize, boxSize);
				}
			}

			sketch.mousePressed = function() {

				for (var i = 0; i < ships.length; i++) {
					if (gridServices.isHover(ships[i]), boxSize, sketch.mouseX, sketch.mouseY) {
						locked = true;
						lockedShip = ships[i].name;
					}
				}
			}
			sketch.mouseReleased = function() {

				if (locked) {
					var newCoords = gridServices.getDropCoords(sketch.mouseX, sketch.mouseY, boxSize);
					if (newCoords) {
						ships[0].c = newCoords.c;
						ships[0].r = newCoords.r;
						console.log("Ship c: " + ships[0].c);
						console.log("Ship r: " + ships[0].r);
					}

					locked = false;
					lockedShip = null;

				}
			}

			sketch.mouseDragged = function() {

			}

		}

	}
);