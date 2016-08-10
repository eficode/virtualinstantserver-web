var apiService = angular.module('apiService', []);

apiService.service('apiService', function() {
    var version = 2;
    var loginFreePages = ['/', '/login_error', '/email_error', '/email_submitted', '/newuser', '/forgot_password'];
    var prodUrl = 'http://add.your.url.com'; 
    var devUrl = 'http://localhost:8080/api'; 

   /* Public Functions */
    function createRequest(url, method, data) {
        return {
            url: url,
            method: method,
            data: data,
            headers: {
                'version': version,
                'userid': (localStorage.getItem("userid") == null) ? '0' : localStorage.getItem("userid"),
                'token': (localStorage.getItem("token") == null) ? '0' : localStorage.getItem("token"),
                'message': ''
            }
        };
    }

    function createUrl() {
        var url = getApiIp();
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

    /* Private Functions */
    function getApiIp() {
        var hostName = removePortFromString(location.host);
        return hostName === "diyserver.office.eficode.fi" ? prodUrl : devUrl;
    }

    function removePortFromString(str) {
        return str.replace(/:.*/, "");
    }

    return {
        createRequest: createRequest,
        createUrl: createUrl,
        version: version,
        isLoginFreePage: isLoginFreePage
    };
});