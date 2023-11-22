app.controller("EntryController", [
  "$scope",
  "$routeParams",
  function ($scope, $routeParams) {
    $scope.test = "testing";
    $scope.passedParam = $routeParams.id;
  },
]);
