app.controller("EntryController", [
  "$scope",
  "$routeParams",
  function ($scope, $routeParams) {
    $scope.index = $routeParams.id;
    $scope.poemLibrary = JSON.parse(localStorage.getItem("poemLibrary"));
    $scope.reviewLibrary = JSON.parse(localStorage.getItem("reviewLibrary"));

    $scope.poemData = $scope.poemLibrary[$scope.index].poem;
    $scope.impressionsText = $scope.reviewLibrary[$scope.index];
  },
]);
