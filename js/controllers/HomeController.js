app.controller("HomeController", [
  "$scope",
  "dailyPoem",
  function ($scope, dailyPoem) {
    //If current date is the last position, generate a new item.

    //get all poems up until now
    $scope.poemLibrary = JSON.parse(localStorage.getItem("poemLibrary")) || [];
    console.log("Before anything is added");
    console.log(typeof $scope.poemLibrary);

    //check if a poem was added today yet
    $scope.today = new Date().toDateString();
    console.log("today");
    console.log($scope.today);

    //get date of last item in poem library
    let lastPosition;
    if ($scope.poemLibrary.length !== 0) {
      lastPosition = $scope.poemLibrary.length - 1;
    } else {
      lastPosition = 0;
    }

    if ($scope.poemLibrary[lastPosition]) {
      const lastPositionDate = $scope.poemLibrary[lastPosition].date;
      $scope.lastPositionDate = $scope.poemLibrary[lastPosition].date;
    }

    if ($scope.today !== $scope.lastPositionDate) {
      //generate new poem
      dailyPoem
        .then(function (data) {
          $scope.poemData = data[0];
          $scope.poemLibrary.push({
            date: $scope.today,
            poem: $scope.poemData,
          });
          //return library back to a storable string
          $scope.poemLibrary = JSON.stringify($scope.poemLibrary);
          localStorage.setItem("poemLibrary", $scope.poemLibrary);
          console.log("After set statement");
          console.log($scope.poemLibrary);
        })
        .catch(function (error) {
          console.error("Error fetching daily poem:", error);
        });

      //add poem together with date to local storage
    } else {
      $scope.poemData = $scope.poemLibrary[lastPosition].poem;
    }
  },
]);

// parts of the json data title, author, lines, linecount
