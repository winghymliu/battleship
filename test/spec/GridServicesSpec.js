describe('Unit: GridServicesSpec', function() {

  var scope, service;

  beforeEach(
    function() {
      module('app');

      inject(function($controller, $rootScope, _gridServices_) {
        scope = $rootScope.$new();
        service = _gridServices_;
      });
    });
    
  describe('Function:get rows and cols', function() {
    it('should be able to return the correct rows and cols',
      function() {
        expect(service.getRows()).toBe(5);
        expect(service.getCols()).toBe(5);
      });
  });  

  describe('Function:centerCoord', function() {
    it('should be able to return the central coordinates  20',
      function() {
        var boxSize = 20;
        expect(service.centerCoord(25, boxSize)).toEqual(15);
      });
  });

  describe('Function:getDropCoords', function() {
    it('should be able to return the correct grid drop coordinates for 0 0',
      function() {
        var boxSize = 20;
        var coords = service.getDropCoords(0, 0, boxSize);

        expect(coords.c).toEqual(0);
        expect(coords.r).toEqual(0);
      });

    it('should be able to return the correct grid drop coordinates for 23 46',
      function() {
        var boxSize = 20;
        var coords = service.getDropCoords(23, 46, boxSize);

        expect(coords.c).toEqual(1);
        expect(coords.r).toEqual(2);
      });

    it('should return null for -1 46',
      function() {
        var boxSize = 20;
        expect(service.getDropCoords(-1, 46, boxSize)).toEqual(null);
      });

    it('should return null for 999 46',
      function() {
        var boxSize = 20;
        expect(service.getDropCoords(999, 46, boxSize)).toEqual(null);
      });


    it('should return null for 10 -1',
      function() {
        var boxSize = 20;
        expect(service.getDropCoords(10, -1, boxSize)).toEqual(null);
      });

    it('should return null for 46 999',
      function() {
        var boxSize = 20;
        expect(service.getDropCoords(46, 999, boxSize)).toEqual(null);
      });

  });

  describe('Function:isHover', function() {
    it('should return true when over a north facing ship',
      function() {
        var boxSize = 20;
        var ship = {
          name: "ship1",
          c1: 0,
          r1: 0,
          c2: 1,
          r2: 2,
          length: 2,
          direction: "N"
        };
        expect(service.isHover(ship, boxSize, 0, 0)).toBe(true);
        expect(service.isHover(ship, boxSize, 5, 5)).toBe(true);
        expect(service.isHover(ship, boxSize, 5, 35)).toBe(true);
      });
      
       it('should return true when over a south facing ship',
      function() {
        var boxSize = 20;
        var ship = {
          name: "ship1",
          c1: 4,
          r1: 2,
          c2: 5,
          r2: 4,
          length: 2,
          direction: "S"
        };
        
        expect(service.isHover(ship, boxSize, 80, 40)).toBe(true);
        expect(service.isHover(ship, boxSize, 99, 79)).toBe(true);
        
        expect(service.isHover(ship, boxSize, 95, 90)).toBe(false);
        expect(service.isHover(ship, boxSize, 100, 79)).toBe(false);
        expect(service.isHover(ship, boxSize, 99, 80)).toBe(false);
      });
      
        it('should return true when over a east facing ship',
      function() {
        var boxSize = 10;
        var ship = {
          name: "ship1",
          c1: 3,
          r1: 2,
          c2: 5,
          r2: 3,
          length: 2,
          direction: "E"
        };
        
        expect(service.isHover(ship, boxSize, 30, 25)).toBe(true);
        expect(service.isHover(ship, boxSize, 49, 29)).toBe(true);
        expect(service.isHover(ship, boxSize, 50, 29)).toBe(false);
      });
      
        it('should return true when over a west facing ship',
      function() {
        var boxSize = 10;
        var ship = {
          name: "ship1",
          c1: 2,
          r1: 3,
          c2: 3,
          r2: 4,
          length: 1,
          direction: "W"
        };
        
        expect(service.isHover(ship, boxSize, 20, 30)).toBe(true);
        expect(service.isHover(ship, boxSize, 29, 39)).toBe(true);
        expect(service.isHover(ship, boxSize, 30, 40)).toBe(false);
        
      });
      
  });

});