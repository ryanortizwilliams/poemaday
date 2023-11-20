app.factory("dailyPoem", [
  "$http",
  function ($http) {
    return $http
      .get("https://poetrydb.org/random")
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return error;
      });
  },
]);
