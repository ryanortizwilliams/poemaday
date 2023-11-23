app.directive("pageTurner", function () {
  return {
    restrict: "E",
    scope: { data: "=", index: "=" },
    templateUrl: "js/directives/pageTurner.html",
    link: function (scope, element, attrs) {
      console.log(scope.data.length);
      scope.date = scope.data[scope.index].date;

      // Determine next page values
      const maxValue = scope.data.length - 1;
      const minValue = 0;

      if (parseInt(scope.index) + 1 <= maxValue) {
        scope.nextPage = parseInt(scope.index) + 1;
      } else {
        scope.nextPage = scope.index;
      }

      if (parseInt(scope.index) - 1 >= minValue) {
        scope.previousPage = parseInt(scope.index) - 1;
      } else {
        scope.previousPage = scope.index;
      }
    },
  };
});
