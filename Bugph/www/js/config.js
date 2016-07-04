app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "login.html",
      controller:"loginController"
    })
    .state('timeline', {
      url: "/timeline",
      templateUrl: "timeline.html",
      controller:"timelineController"
    })

})