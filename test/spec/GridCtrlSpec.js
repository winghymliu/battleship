describe('Unit: GridCtrl', function() {

  var ctrl, scope, s;
  // inject the $controller and $rootScope services
  // in the beforeEach block
  beforeEach(
    function() {
      module('app');

      inject(function($controller, $rootScope, _gridServices_) {
        // Create a new scope that's a child of the $rootScope
        scope = $rootScope.$new();
        // Create the controller  
        ctrl = $controller('GridCtrl', {
          $scope: scope,
          gridServices: _gridServices_
        });
        s = _gridServices_;
      });
    });

  it('should be able to return the central coordinates  20',
    function() {
      var boxSize = 20;
      expect(scope.centerCoord(25, boxSize)).toEqual(15);
    });

  it('service should be able to hello',
    function() {
      
      expect(s.sayHello()).toEqual("Hi");
    });

  it('should be able to hello',
    function() {
      var msg = scope.testHi();

      expect(msg).toEqual("Hi");
    });

});