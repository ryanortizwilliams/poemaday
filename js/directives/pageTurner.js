app.directive("pageTurner", function () {
  return {
    restrict: "E",
    scope: { data: "=", index: "=" },
    templateUrl: "js/directives/pageTurner.html",
    link: function (scope, element, attrs) {
      console.log(scope.data.length);
      scope.date = scope.data[scope.index].date;

      //TODO write logic for routing urls limits
      //check for first or final page
      if (scope.index + 1 <= scope.data.length) {
        scope.nextPage = scope.index + 1;
      } else {
        scope.nextPage = scope.index;
      }

      if (scope.index - 1 >= scope.data.length) {
        scope.nextPage = scope.index - 1;
      } else {
        scope.nextPage = scope.index;
      }

      scope.previousPage = scope.index - 1;
    },
  };
});
