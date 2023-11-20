app.controller("HomeController", [
  "$scope",
  "dailyPoem",
  function ($scope, dailyPoem) {
    $scope.date = new Date();
    dailyPoem
      .then(function (data) {
        $scope.poemData = data[0];
      })
      .catch(function (error) {
        // Handle errors if needed
        console.error("Error fetching daily poem:", error);
      });

    $scope.test = "testing controller variables";
  },
]);

// parts of the json data title, author, lines, linecount
