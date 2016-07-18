var apiService = angular.module('apiService', []);

apiService.service('apiService', function() {
    var version = 2;
    var loginFreePages = ['/', '/login_error', '/email_error', '/email_submitted', '/newuser', '/forgot_password'];

    function createRequest(url, method, data) {
        return {
            url: url,
            method: method,
            data: data,
            headers: {
                'version': version,
                'userid': (localStorage.getItem("userid") == null) ? '0' : localStorage.getItem("userid"),
                'password': (localStorage.getItem("password") == null) ? '0' : localStorage.getItem("password"),
                'message': ''
            }
        };
    }

    function createUrl() {
        var url = 'http://localhost:8080/api';
        for (var index = 0; index < arguments.length; index++) {
            url += '/' + arguments[index];
            console.log(arguments[index]);
        }
        console.log(url);
        return url;
    }

    function isLoginFreePage(location) {
        if (loginFreePages.indexOf(location) == -1) {
            return false;
        }
        return true;
    }

    return {
        createRequest: createRequest,
        createUrl: createUrl,
        version: version,
        isLoginFreePage: isLoginFreePage
    };
});
