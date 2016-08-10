var userService = angular.module('userService', []);

userService.service('userService', ['$http', 'apiService', function($http, apiService) {
    this.getUser = function(id, success, error) {
        var request = apiService.createRequest(apiService.createUrl('users', id), 'GET');
        $http(request).success(function(data) {
            if (data.header.result && data.header.version == apiService.version) {
                var user = new User();
                user.fromJSON(data.data);
                success(user);
            } else {
                error(data);
            }
        }).error(function(data) {
            error(data);
        });
    };

    this.deleteUser = function(id, success, error) {
        var request = apiService.createRequest(apiService.createUrl('users', id), 'DELETE');
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

    this.updateUser = function(id, success, error, user) {
        var userdata = JSON.stringify(user.toJSON());
        var request = apiService.createRequest(apiService.createUrl('users', id), 'PUT', userdata);
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

    this.submitEmail = function(success, error, email) {
        var request = apiService.createRequest(apiService.createUrl('users/restore'), 'POST', email);
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

    this.createUser = function(id, success, error, user) {
        var userdata = JSON.stringify(user.toJSON());
        var request = apiService.createRequest(apiService.createUrl('users'), 'POST', userdata);
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

    this.promoteUser = function(id, success, error) {
        var request = apiService.createRequest(apiService.createUrl('users/rights', id), 'PUT');
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

    this.changePasswordUser = function(id, success, error, user) {
        var userdata = JSON.stringify(user.toJSON());
        var request = apiService.createRequest(apiService.createUrl('users/password', id), 'PUT', userdata);
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

    this.listUsers = function(success, error) {
        var request = apiService.createRequest(apiService.createUrl('users'), 'GET');
        $http(request).success(function(data) {
            if (data.header.result && data.header.version == apiService.version) {
                users = [];
                var currentUser = localStorage.getItem("userid");
                for (var index = 0; index < data.data.length; index++) {
                    if (currentUser != data.data[index].id) {
                        var user = new User();
                        user.fromJSON(data.data[index]);
                        users.push(user);
                    }
                }
                success(users);
            } else {
                error(data);
            }
        }).error(function(data) {
            error(data);
        });
    };

    this.addUsersToVM = function(id, success, error, user) {
        var myUser = new User();
        myUser.id = user;
        var userdata = JSON.stringify(myUser.toJSON());
        var request = apiService.createRequest(apiService.createUrl('servers/users/add', id), 'POST', myUser);
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

    this.removeFromUser = function(id, server, success, error) {
        var request = apiService.createRequest(apiService.createUrl('servers/users/delete', server, id), 'DELETE');
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

    this.listUsersToVM = function(id, success, error) {
        var request = apiService.createRequest(apiService.createUrl('users/servers/not', id), 'GET');
        $http(request).success(function(data) {
            if (data.header.result && data.header.version == apiService.version) {
                users = [];
                for (var index = 0; index < data.data.length; index++) {
                    var user = new User();
                    user.fromJSON(data.data[index]);
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


    this.getCurrentUser = function() {
        return {
            id: localStorage.getItem("userid"),
            username: localStorage.getItem("username")
        };
    };

    this.login = function(username, password, rememberMe, success, error) {
        var userdata = JSON.stringify({
            username: username,
            password: password,
            rememberMe: rememberMe
        });
        var request = apiService.createRequest(apiService.createUrl('users', 'login'), 'POST', userdata);
        $http(request).success(function(data) {
            if (data.header.result && data.header.version == apiService.version) {
                localStorage.setItem("userid", data.data.id);
                localStorage.setItem("username", username);
                localStorage.setItem("token", data.data.token);
                localStorage.setItem("role", data.data.role);
                success();
            } else {
                error(data);
            }
        }).error(function(data) {
            error(data);
        });
    };

    this.logout = function() {
        localStorage.removeItem("userid");
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("role");
    };

    this.serversOfUser = function(id, success, error) {
        var request = apiService.createRequest(apiService.createUrl('servers/users', id), 'GET');
        $http(request).success(function(data) {
            if (data.header.result && data.header.version == apiService.version) {
                servers = [];
                for (var index = 0; index < data.data.length; index++) {
                    var server = new Server();
                    server.fromJSON(data.data[index].server);
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

}]);
