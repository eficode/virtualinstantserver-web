var errorController = angular.module('errorController', []);

errorController.controller('errorController', ['$scope',
    function($scope) {
        $scope.displaErroryModal = function(error) {
            $scope.action = error.header.action;
            $scope.message = error.header.message;
            angular.element('#modalShow').trigger('click');
        }
    }
]);
