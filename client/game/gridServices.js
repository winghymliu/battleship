app.service('gridServices', function() {
  var gridServices = {};

  var cols = 5;
  var rows = 5;

  gridServices.getCols = function() {
    return cols;
  }

  gridServices.getRows = function() {
    return rows;
  }

  gridServices.centerCoord = function(c, boxsize) {
    return c - (boxsize / 2);
  }

  gridServices.getDropCoords = function(curX, curY, boxSize) {

    if (curX >= (cols * boxSize) || curY >= (rows * boxSize) || curX < 0 || curY < 0) {
      console.log("Off the board");
      return null;
    }

    var c = Math.floor(curX / boxSize);
    var r = Math.floor(curY / boxSize);
    var coords = {};
    coords.c = c;
    coords.r = r;
    return coords;
  }

  gridServices.isHover = function(ship, boxSize, curX, curY) {
    /*
        var cAdjust = 1;
        var rAdjust = 1;
        var shipExtra = (ship.length - 1);
        console.log(shipExtra);
        if (ship.direction == "N") {
          rAdjust = rAdjust + shipExtra;
        }
        else if (ship.direction == "E") {
          cAdjust = cAdjust - shipExtra;
        }
        else if (ship.direction == "S") {
          rAdjust = rAdjust - shipExtra;
        }
        else if (ship.direction == "W") {
          cAdjust = cAdjust + shipExtra;
        }
        else {
          throw new Error("Uknown direction: " + ship.direction);
        }
        
        console.log("rAdjust" + rAdjust);
        console.log("cAdjust" + cAdjust);
        
        var cUpper = (ship.c + cAdjust) * boxSize;
        var rUpper = (ship.r + rAdjust) * boxSize;
        var cLower = ship.c * boxSize;
        var rLower = ship.r * boxSize;
        
        var withinX = curX >= rLower && curX < cUpper;
        var withinY = curY >= rLower && curY < rUpper;

        console.log("cLower " + cLower);
        console.log("rLower " + rLower);

        console.log("cUpper " + cUpper);
        console.log("rUpper " + rUpper);

        console.log("WithinX " + withinX);
        console.log("WithinY " + withinY);

        if (withinX && withinY) {
          console.log('hover over ' + ship.name);

          return true;
        }
        */

    var cLower = ship.c1 * boxSize;
    var cUpper = ship.c2 * boxSize;
    var rLower = ship.r1 * boxSize;
    var rUpper = ship.r2 * boxSize;


    var withinX = curX >= cLower && curX < cUpper;
    var withinY = curY >= rLower && curY < rUpper;


    console.log("cLower " + cLower);
    console.log("rLower " + rLower);

    console.log("cUpper " + cUpper);
    console.log("rUpper " + rUpper);

    console.log("WithinX " + withinX);
    console.log("WithinY " + withinY);

    return withinX && withinY;

  }

  return gridServices;
});