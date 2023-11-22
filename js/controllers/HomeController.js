app.controller("HomeController", [
  "$scope",
  "dailyPoem",
  function ($scope, dailyPoem) {
    //get all poems up until now
    // parts of the json data title, author, lines, linecount
    $scope.poemLibrary = JSON.parse(localStorage.getItem("poemLibrary")) || [];

    //check if a poem was added today yet
    $scope.today = new Date().toDateString();

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
        })
        .catch(function (error) {
          console.error("Error fetching daily poem:", error);
        });

      //add poem together with date to local storage
    } else {
      $scope.poemData = $scope.poemLibrary[lastPosition].poem;
    }

    // logic for comments
    $scope.reviewLibrary =
      JSON.parse(localStorage.getItem("reviewLibrary")) || [];
    $scope.impressionsText = $scope.reviewLibrary[lastPosition];
    $scope.submitComment = () => {
      $scope.impressionsText = $scope.submittedText;
      //add comment to local storage
      console.log("Type of reviewLibrary");
      console.log(typeof $scope.reviewLibrary);
      $scope.reviewLibrary[lastPosition] = $scope.impressionsText;

      $scope.reviewLibrary = JSON.stringify($scope.reviewLibrary);
      localStorage.setItem("reviewLibrary", $scope.reviewLibrary);
    };

    $scope.editComment = () => {
      // replace that position with edited version
      $scope.reviewLibrary[lastPosition] = $scope.impressionsText;
      $scope.reviewLibrary = JSON.stringify($scope.reviewLibrary);
      localStorage.setItem("reviewLibrary", $scope.reviewLibrary);
    };

    // $scope.deleteComment = () => {
    //   console.log("button works");
    //   $scope.submittedText = "";
    //   $scope.impressionsText = "";
    //   delete $scope.reviewLibrary[lastPosition];
    //   localStorage.setItem(
    //     "reviewLibrary",
    //     JSON.stringify($scope.reviewLibrary)
    //   );
    // };
  },
]);
