var directives = angular.module('directives', ['VIS']);

directives.directive('userlistelement', function() {
    return {
        restrict: "E",
        templateUrl: '../views/templates/user-list.html'
    };
});

directives.directive('serverlistelement', function() {
    return {
        restrict: "E",
        templateUrl: '../views/templates/server-list.html'
    };
});

directives.directive('usermodals', function() {
    return {
        restrict: "E",
        templateUrl: '../views/templates/user-modals.html'
    };
});

directives.directive('servermodals', function() {
    return {
        restrict: "E",
        templateUrl: '../views/templates/server-modals.html'
    };
});

directives.directive('userprofile', function() {
    return {
        restrict: "E",
        templateUrl: '../views/templates/user-profile.html'
    };
});

directives.directive('serverprofile', function() {
    return {
        restrict: "E",
        templateUrl: '../views/templates/server-profile.html'
    };
});

directives.directive('errormodal', function(){
    return {
    restrict: "E",
      templateUrl:'../views/templates/error-modal.html'
    };
});