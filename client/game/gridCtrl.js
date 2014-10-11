app.controller('GridCtrl', ['$scope',
	function($scope) {

		$scope.name = "Ari";
		$scope.sayHello = function() {
			$scope.greeting = "Hello " + $scope.name;
		}

		$scope.sketch = function(sketch) {
			var locked = false;

			var cols = 5;
			var rows = 5;
			var unusedColor = 150;
			var occupiedColor = sketch.color(252, 13, 0);
			var selectedColor = 255;
			var bs = 20;

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
			}

			function isHover(ship) {
				var xUpper = (ship.c + 1) * bs;
				var yUpper = (ship.r + 1) * bs;
				var withinX = sketch.mouseX >= ship.c * bs && sketch.mouseX < xUpper;
				var withinY = sketch.mouseY >= ship.r * bs && sketch.mouseY < yUpper;
				if (withinX && withinY) {
					console.log('hover over ' + ship.name);
					return true;
				}
				return false;
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
						var bx = startx + (bs * c);
						var by = starty + (bs * r);
						sketch.rect(bx, by, bs, bs);
					}
				}

				if (locked) {
					sketch.fill(occupiedColor);
					sketch.rect(centerCoord(sketch.mouseX), centerCoord(sketch.mouseY), bs, bs);
				}
			}

			function centerCoord(m) {
				return m - (bs / 2);
			}

			sketch.mousePressed = function() {

				for (var i = 0; i < ships.length; i++) {
					if (isHover(ships[i])) {
						locked = true;
						lockedShip = ships[i].name;
					}
				}
			}
			sketch.mouseReleased = function() {

				if (locked) {
					var newCoords = getDropCoords(sketch.mouseX, sketch.mouseY);
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

			function getDropCoords(curX, curY) {

				if (curX >= (cols * bs) || curY >= (rows * bs) || curX < 0 || curY < 0) {
					console.log("Off the board");
					return null;
				}

				var c = Math.floor(curX / bs);
				var r = Math.floor(curY / bs);
				var coords = {};
				coords.c = c;
				coords.r = r;
				return coords;
			}

		}

	}
]);