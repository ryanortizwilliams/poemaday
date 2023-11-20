app.controller("HomeController", [
  "$scope",
  "dailyPoem",
  function ($scope, dailyPoem) {
    dailyPoem
      .then(function (data) {
        $scope.poemData = data;
      })
      .catch(function (error) {
        // Handle errors if needed
        console.error("Error fetching daily poem:", error);
      });
  },
]);
