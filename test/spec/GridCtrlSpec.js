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
});