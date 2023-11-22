app.directive("pageTurner", function () {
  return {
    restrict: "E",
    scope: { data: "=", index: "=" },
    templateUrl: "js/directives/pageTurner.html",
    link: function (scope, element, attrs) {
      console.log(scope.data);
      scope.date = scope.data[scope.index].date;
    },
  };
});
