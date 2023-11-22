app.controller("OverviewController", [
  "$scope",
  function ($scope) {
    $scope.poemLibrary = JSON.parse(localStorage.getItem("poemLibrary"));
    $scope.reviewLibrary = JSON.parse(localStorage.getItem("reviewLibrary"));
  },
]);
