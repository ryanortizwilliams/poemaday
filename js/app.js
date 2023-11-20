const app = angular.module("PoemApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      controller: "HomeController",
      templateUrl: "/views/home.html",
    })
    .otherwise({
      redirectTo: "/",
    });
});
