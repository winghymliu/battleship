var app = angular.module('app',[]);

app.directive('processing', function() {
  return {
    scope: true,
    link: function(scope, iElement, iAttrs) {
      scope.$sketch = new Processing(iElement[0], scope[iAttrs.processing]);
    }
  };
});