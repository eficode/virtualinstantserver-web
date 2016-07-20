var serverController = angular.module('serverController', ['serverService', 'errorController']);

serverController.controller('serverController', ['$scope', '$routeParams', 'serverService', '$controller', '$filter', '$location', '$timeout', '$loading',
    function($scope, $routeParams, serverService, $controller, $filter, $location, $timeout, $loading) {
        $controller('errorController',{$scope : $scope });

        $scope.initializeSever = function() {
            $scope.server = [];
            $scope.serverType = [];
            serverService.getServer($routeParams.id, function(server) {
                $scope.server = server;
                $scope.server.dueDate = new Date($scope.server.dueDate);
                $scope.server.ip = makeServerIp($scope.server);
                $scope.serverStatus = makeServerStatus($scope.server);
            }, function(error) {
                $scope.displaErroryModal(error);
            });

            $scope.adminsOfVm();
        }

        function makeServerIp(server) {
            if (checkServerIdRange(server.id)) {
                return "192.168.31." + ((server.host).toString());    
            }
            return "Unknown IP Error";
            
        }

        function checkServerIdRange(id) {
            return id < 254 ? true : false;
        }

        function makeServerStatus(server) {
            return server.statusId === "Running" ? false : true;
        }

        $scope.delete = function() {
            $loading.start('executing');
            serverService.deleteServer($routeParams.id, function() {
                $timeout(function() {
                    $loading.finish('executing');
                    $location.path("vmlist");
                }, 300);

            }, function(error) {
                $loading.finish('executing');
                $scope.displaErroryModal(error);
            })
        }

        $scope.changeStatus = function() {
            $loading.start('executing');
            if ($scope.server.statusId == "Running") {
                serverService.stopServer($routeParams.id, function() {
                    $scope.server.statusId = "Stopped";
                    $scope.serverStatus = true;
                    $loading.finish('executing');
                }, function(error) {
                    $loading.finish('executing');
                    $scope.displaErroryModal(error);
                });
            } else {
                serverService.startServer($routeParams.id, function() {
                    $scope.server.statusId = "Running";
                    $scope.serverStatus = false;
                    $loading.finish('executing');
                }, function(error) {
                    $loading.finish('executing');
                    $scope.displaErroryModal(error);
                })
            }
        }


        $scope.update = function() {
            serverService.updateServer($routeParams.id, function() {
                    $scope.server;
                },
                function(error) {
                    $scope.displaErroryModal(error);
                },
                $scope.server
            )
        }

        $scope.changeRootPassword = function() {;
            $scope.password;
            $scope.confirmPassword;
            if ($scope.password == $scope.confirmPassword) {
                serverService.changeRootPassword($scope.server.id, function() {

                    },
                    function(error) {
                        $scope.displaErroryModal(error);
                    },
                    $scope.confirmPassword
                );
                $('#changeRootPasswordModal').modal('hide');
            } else alert("Not Matching");
        }

        $scope.postponeDueDate = function() {
            serverService.postponeServer($routeParams.id, function() {
                    $scope.server;
                },
                function(error) {
                    $scope.displaErroryModal(error);
                },
                $scope.server
            )
        }
        $scope.create = function() {
            serverService.createSever($routeParams.id, function() {

                },
                function(error) {
                    $scope.displaErroryModal(error);
                },
                $scope.server
            )
        }

        $scope.adminsOfVm = function() {
            serverService.adminsOfVM($routeParams.id, function(user) {
                $scope.admins = user;
                $scope.displayAdmins = false;
                if ($scope.admins.length > 0) {
                    $scope.displayAdmins = true;
                    $scope.show = [];
                    for (var i = 0; i < $scope.admins.length; i++)
                        $scope.show[i] = true;
                }
                $scope.usersOfVm();
            }, function(error) {
                $scope.displaErroryModal(error);
            })
        }
        $scope.usersOfVm = function() {
            serverService.usersOfVM($routeParams.id, function(users) {
                $scope.displayUser = false;
                console.log(users);
                if (users.length > 0) {
                    $scope.displayUser = true;
                    $scope.show = [];
                    console.log(users.length);
                    for (var i = 0; i < users.length; i++)
                        $scope.show[i] = true;
                }
                $scope.users = users;
            }, function(error) {
                $scope.displaErroryModal(error);
            })
        }

        $scope.removeFromVM = function(userID, index) {
            serverService.removeFromVM($routeParams.id, userID, function(user) {
                $scope.show[index] = false;
            }, function(error) {
                $scope.displaErroryModal(error);
            })
        }
    }

]);

serverController.controller('serverListController', ['$scope', '$loading', '$controller', 'serverService',
    function($scope, $loading, $controller, serverService) {
        $controller('errorController',{$scope : $scope });

        $scope.initialize = function() {
            serverService.listServers(function(servers) {
                $scope.servers = servers;
                $scope.show = [];
                for (var i = 0; i < $scope.servers.length; i++)
                    $scope.show[i] = true;
                console.log($scope.servers);
            }, function(error) {
                $scope.displaErroryModal(error);
            })
        }

        $scope.delete = function(serverID, index) {
            $loading.start('executing');
            serverService.deleteServer(serverID, function(user) {
                $loading.finish('executing');
                $scope.show[index] = false;
            }, function(error) {
                $loading.finish('executing');
                $scope.displaErroryModal(error);
            })
        }
    }
]);

serverController.controller('serversAddToUserListController', ['$scope', '$routeParams', '$controller', 'serverService',
    function($scope, $routeParams, $controller, serverService) {
        $controller('errorController',{$scope : $scope });

        $scope.initialize = function() {
            serverService.listVMToUsers($routeParams.id, function(servers) {
                if (servers != 0) {
                    $scope.message = "Add servers to user";
                    $scope.servers = servers;
                    $scope.show = [];
                    for (var i = 0; i < $scope.servers.length; i++)
                        $scope.show[i] = true;
                } else $scope.message = "There are no servers available!"
                console.log(servers);
            }, function(error) {
                $scope.displaErroryModal(error);
            })
        }
        $scope.addVMToUser = function(serverID, index) {
            console.log(serverID);
            serverService.addVMsToUser($routeParams.id, function(servers) {
                $scope.show[index] = false;
            }, function(error) {
                $scope.displaErroryModal(error);
            }, serverID)
        }
    }
]);

serverController.controller('serverCreateController', ['$scope', '$routeParams', '$location', '$loading', '$controller', 'serverService',
    function($scope, $routeParams, $location, $loading, $controller, serverService) {
        $controller('errorController',{$scope : $scope });

        $scope.initialize = function() {
            $scope.server = new Server();
            serverService.getServerTypes(
                function(types) {
                    $scope.serverType = types;
                    $scope.server.typeId = types[0].name;
                    console.log($scope.serverType);
                },
                function(error) {
                    $scope.displaErroryModal(error);
                }
            );
        }

        $scope.create = function() {
            $loading.start('executing');
            serverService.createServer($routeParams.id, function() {
                    $loading.finish('executing');
                    $location.path("/vmlist");
                }, function(error) {
                    $loading.finish('executing');
                    $scope.displaErroryModal(error);
                },
                $scope.server
            )
        }
    }
]);
