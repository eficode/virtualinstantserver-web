var errorController = angular.module('errorController', []);

errorController.controller('errorController', ['$scope', '$location', 'userService',
    function($scope, $location, userService) {
        $scope.handleErrors = function(error) {
            handleLoginErrors(error);
            showErrorModal(error);
        };

        function handleLoginErrors(error) {
            if (error.header.message === 'Web Token Expired' && userService) {
                userService.logout();
                $location.path('/');
            }
        }

        function showErrorModal(error) {
            $scope.action = error.header.action;
            $scope.message = error.header.message;

            if (error.header.message === 'Create operation fail.') {
                $scope.message += " Most likely, server with such name already exists...";
            }

            if (error.header.message !== 'Web Token Expired' && error.header.action !== 'listServersWhereUserRoleIsAdmin' &&  !error.header.action !== 'listServersWhereUserRoleIsUser') {
                
                angular.element('#modalShow').trigger('click');
            }
        }
    }
]);
