var serverService = angular.module('serverService', []);

serverService.service('serverService', ['$http', '$filter', 'apiService', function($http, $filter, apiService) {
    this.getServer = function(id, success, error) {
        var request = apiService.createRequest(apiService.createUrl('servers', id), 'GET');
        $http(request).success(function(data) {
            if (data.header.result && data.header.version == apiService.version) {
                var server = new Server();
                server.fromJSON(data.data);
                success(server);
            } else {
                error(data);
            }
        }).error(function(data) {
            error(data);
        });
    };
    this.deleteServer = function(id, success, error) {
        var request = apiService.createRequest(apiService.createUrl('servers', id), 'DELETE');
        $http(request).success(function(data) {
            if (data.header.result && data.header.version == apiService.version) {
                success();
            } else {
                error(data)
            }
        }).error(function(data) {
            error(data);
        });
    };
    this.addVMsToUser = function(id, success, error, server) {        
        var myUser = new User();
        myUser.id = id;        
        var request = apiService.createRequest(apiService.createUrl('servers/users/add', server), 'POST', myUser);       
        $http(request).success(function(data) {
            if (data.header.result && data.header.version == apiService.version) {
                success()
                                
            } else {
                error(data);
            }
        }).error(function(data) {
            error(data);
        });
    };

    this.removeFromVM = function(id, user, success, error) {
        var request = apiService.createRequest(apiService.createUrl('servers/users/delete', id, user), 'DELETE');
        $http(request).success(function(data) {
            if (data.header.result && data.header.version == apiService.version) {
                success();
            } else {
                error(data)
            }
        }).error(function(data) {
            error(data);
        });
    };

    this.changeRootPassword = function(id, success, error, password) {
        var request = apiService.createRequest(apiService.createUrl('servers/rootpassword', id), 'PUT', password);        
        $http(request).success(function(data) {
            if (data.header.result && data.header.version == apiService.version) {
                success();
            } else {
                error(data)
            }
        }).error(function(data) {
            error(data);
        });
    };

    this.updateServer = function(id, success, error, server) {
        var serverdata = server.toJSON();
        delete serverdata.dueDate;        
        var request = apiService.createRequest(apiService.createUrl('servers', id), 'PUT', serverdata);
        $http(request).success(function(data) {
            if (data.header.result && data.header.version == apiService.version) {
                success();
            } else {
                error(data)
            }
        }).error(function(data) {
            error(data);
        });
    };

    this.postponeServer = function(id, success, error, server) {
        var temp = new Server();
        var tempDate = new Date(server.dueDate);
        temp.id = server.id;       
        temp.dueDate = $filter('date')(tempDate, "yyyy-MM-dd");
        var serverdata = JSON.stringify(temp.toJSON());
        var request = apiService.createRequest(apiService.createUrl('servers/postpone'), 'PUT', serverdata);
        $http(request).success(function(data) {
            if (data.header.result && data.header.version == apiService.version) {
                success();
            } else {
                error(data)
            }
        }).error(function(data) {
            error(data);
        });
    };

    this.stopServer = function(id, success, error) {
        var request = apiService.createRequest(apiService.createUrl('servers/stop', id), 'GET');
        $http(request).success(function(data) {
            if (data.header.result && data.header.version == apiService.version) {
                success();
            } else {
                error(data)
            }
        }).error(function(data) {
            error(data);
        });
    };

    this.startServer = function(id, success, error) {
        var request = apiService.createRequest(apiService.createUrl('servers/start', id), 'GET');
        $http(request).success(function(data) {
            if (data.header.result && data.header.version == apiService.version) {
                success();
            } else {
                error(data)
            }
        }).error(function(data) {
            error(data);
        });
    };
    this.getServerTypes = function(success, error) {
        var request = apiService.createRequest(apiService.createUrl('servers/types'), 'GET');
        $http(request).success(function(data) {
            if (data.header.result && data.header.version == apiService.version) {
                var test = data.data;
                success(test);
            } else {
                error(data);
            }
        }).error(function(data) {
            error(data);
        });
    };

    this.createServer = function(id, success, error, server) {
        var serverdata = JSON.stringify(server.toJSON());
        var request = apiService.createRequest(apiService.createUrl('servers'), 'POST', serverdata);
        $http(request).success(function(data) {
            if (data.header.result && data.header.version == apiService.version) {
                success();
            } else {
                error(data);
            }
        }).error(function(data) {
            error(data);
        });
    };


    this.listServers = function(success, error) {
        var request = apiService.createRequest(apiService.createUrl('servers'), 'GET');
        $http(request).success(function(data) {
            if (data.header.result && data.header.version == apiService.version) {
                servers = [];
                for (var index = 0; index < data.data.length; index++) {
                    var server = new Server();
                    server.fromJSON(data.data[index]);
                    servers.push(server);
                }
                success(servers);
            } else {
                error(data);
            }
        }).error(function(data) {
            error(data);
        });
    };
    this.listVMToUsers = function(id, success, error) {
        var request = apiService.createRequest(apiService.createUrl('servers/users/not', id), 'GET');
        $http(request).success(function(data) {
            if (data.header.result && data.header.version == apiService.version) {
                servers = [];
                for (var index = 0; index < data.data.length; index++) {
                    var server = new Server();
                    server.fromJSON(data.data[index]);
                    servers.push(server);
                }
                success(servers);
            } else {
                error(data);
            }
        }).error(function(data) {
            error(data);
        });
    };

    this.adminsOfVM = function(id, success, error) {
        var request = apiService.createRequest(apiService.createUrl('servers/users/admin', id), 'GET');
        $http(request).success(function(data) {            
            console.log(data);
            if (data.header.result && data.header.version == apiService.version) {
                users = [];
                for (var index = 0; index < data.data.length; index++) {
                    var user = new User();
                    user.fromJSON(data.data[index].user);
                    users.push(user);
                }
                success(users);
            } else {
                error(data);
            }
        }).error(function(data) {
            error(data);
        });

    };

    this.usersOfVM = function(id, success, error) {
        var request = apiService.createRequest(apiService.createUrl('servers/users/user', id), 'GET');
        $http(request).success(function(data) {
            if (data.header.result && data.header.version == apiService.version) {
                users = [];
                for (var index = 0; index < data.data.length; index++) {
                    var user = new User();
                    user.fromJSON(data.data[index].user);
                    users.push(user);
                }
                success(users);
            } else {
                error(data);
            }
        }).error(function(data) {
            error(data);
        });

    };

}]);