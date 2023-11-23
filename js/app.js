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
    .when("/entry/:id", {
      controller: "EntryController",
      templateUrl: "/views/entry.html",
    })
    .when("/options", {
      controller: "OptionsController",
      templateUrl: "/views/options.html",
    })
    .otherwise({
      redirectTo: "/",
    });
});
