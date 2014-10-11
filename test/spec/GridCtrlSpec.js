describe('Unit: GridCtrl', function() {
  // Load the module with MainController
  beforeEach(module('app'));

  var ctrl, scope;
  // inject the $controller and $rootScope services
  // in the beforeEach block
  beforeEach(inject(function($controller, $rootScope) {
    // Create a new scope that's a child of the $rootScope
    scope = $rootScope.$new();
    // Create the controller  
    ctrl = $controller('GridCtrl', {
      $scope: scope
    });
  }));
  
  it('should be able to return the central coordinates  20', 
    function() {
      var boxSize = 20;
      expect(scope.centerCoord(25, boxSize)).toEqual(15);
  });
  
});