app.controller("OverviewController", [
  "$scope",
  function ($scope) {
    $scope.testVar = "testing testing";

    $scope.poemLibrary = JSON.parse(localStorage.getItem("poemLibrary"));
    $scope.reviewLibrary = JSON.parse(localStorage.getItem("reviewLibrary"));
  },
]);
