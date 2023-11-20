app.controller("HomeController", [
  "$scope",
  "dailyPoem",
  function ($scope, dailyPoem) {
    //TODO: Check local storage and compare localstorage.library[{{len-1}}] to the date current date
    //If current date is the last position, generate a new item.

    //get all poems up until now
    $scope.poemLibrary = localStorage.getItem("poemLibrary") || [];
    console.log($scope.poemLibrary);

    //check if a poem was added today yet
    // comparing two dates.
    $scope.today = new Date();
    console.log($scope.today);

    //get date of last item in poem library
    let lastPosition;
    if ($scope.poemLibrary.length !== 0) {
      lastPosition = $scope.poemLibrary.length - 1;
      console.log("Last position inside of condition " + lastPosition);
    } else {
      lastPosition = 0;
      console.log("Last position outside of condition " + lastPosition);
    }

    if ($scope.poemLibrary[lastPosition]) {
      console.log("Entered last position if statement");

      $scope.lastPositionDate =
        $scope.poemLibrary[lastPosition].date.toDateString() | "";
    }

    if ($scope.today.toDateString() !== $scope.lastPositionDate) {
      //generate new poem
      dailyPoem
        .then(function (data) {
          $scope.poemData = data[0];
        })
        .catch(function (error) {
          console.error("Error fetching daily poem:", error);
        });

      //add poem together with date to local storage
      $scope.poemLibrary.push({
        date: $scope.today,
        poem: $scope.poemData,
      });
      //return library back to a storable string
      localStorage.setItem("poemLibrary", JSON.stringify($scope.poemLibrary));
    }
  },
]);

// parts of the json data title, author, lines, linecount
