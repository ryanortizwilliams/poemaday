const app = angular.module("PoemApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  //   $locationProvider.html5Mode(true);
  $routeProvider
    .when("/", {
      controller: "HomeController",
      templateUrl: "/views/home.html",
    })
    .when("/mylogs", {
      controller: "OverviewController",
      templateUrl: "/views/mylogs.html",
    })
    .otherwise({
      redirectTo: "/",
    });
});
