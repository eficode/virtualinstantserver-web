(function() {
  var app = angular.module('VIS', ['ngRoute', 'xeditable', 'apiService', 'userController', 'serverController', 'errorController', 'directives', 'truncate', 'darthwade.dwLoading'])

  app.run(function($http, editableOptions) {
    editableOptions.theme = 'bs3';
  });

 app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
      $routeProvider.
      //public routes
      when('/', {
        templateUrl: "views/login.html",
        controller: "userLoginController"
      }).

      when('/login_error', {
        templateUrl: "views/login_error.html",
        controller: "userLoginController"
      }).

      when('/email_error', {
        templateUrl: "views/email_error.html",
        controller: "userRestorePassController"
      }).

      when('/forgot_password', {
        templateUrl: "views/forgot_password.html",
        controller: "userRestorePassController"
      }).
      when('/email_submitted', {
        templateUrl: "views/pass_reset_confirmation.html",
      }).

      when('/newuser', {
        templateUrl: "views/new_user.html",
        controller: "usersCreateController"
      }).
      //private routes
      when('/newserver', {
        templateUrl: "views/new_server.html",
        controller: "serverCreateController"
      }).

      when('/userlist/:id', {
        templateUrl: "views/userprofile.html",
        controller: "userController"
      }).
      
      when('/userlist', {
        templateUrl: "views/userlist.html",
        controller: "usersListController"
      }).

      when('/vmlist/:id/add_Users', {
        templateUrl: "views/add_To_userlist.html",
        controller: "usersAddToSeverListController"
      }).

      when('/userlist/:id/add_Servers', {
        templateUrl: "views/add_To_vmlist.html",
        controller: "serversAddToUserListController"
      }).

      when('/vmlist', {
        templateUrl: "views/serverlist.html",
        controller: "serverListController"
      }).

      when('/myaccount', {
        templateUrl: "views/myaccount.html",
        controller: "userController"
      }).

      when('/vmlist/:id', {
        templateUrl: "views/serverprofile.html",
        controller: "serverController"
      }).
      
      otherwise({redirectTo : '/'});
  }]);
})();
