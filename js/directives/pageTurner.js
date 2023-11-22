app.directive("pageTurner", function () {
  return {
    restrict: "E",
    scope: { data: "=" },
    templateUrl: "js/directives/pageTurner.html",
  };
});
