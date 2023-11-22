app.controller("NavController", function ($scope, $location) {
  $scope.myLogs = $location.path("/mylogs");
});
