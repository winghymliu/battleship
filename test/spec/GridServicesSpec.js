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
    it('should return true when over a ship',
      function() {
        var boxSize = 20;
        var ship = {
          name: "ship1",
          c: 0,
          r: 0,
          length: 2,
          direction: "N"
        };
        expect(service.isHover(ship, boxSize, 0, 0)).toBe(true);
        expect(service.isHover(ship, boxSize, 5, 5)).toBe(true);
        expect(service.isHover(ship, boxSize, 5, 35)).toBe(true);
      });
  });

});