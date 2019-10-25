(function (SK) {
    "use strict";
    var GLOBAL = Function('return this')() || (42, eval)('this');

    // AJAX
    (function (SK) {
        SK.AJAX = function (options) {
            var self = this;
            if ((options === null || options === undefined) || (options.url === undefined || options.url === null)) {
                options.url = window.location;
            }
            var localOptions = options,
                url = options.url,
                method = options.method || "GET",
                async = options.async || true,
                    data = options.data || null,
                    headers = options.headers || {},
                    timeout = options.timeout || -1,
                    thisContext = options.context || null,
                    success = options.success || function () {
                        return;
                    },
                    fail = options.fail || function () {
                        return;
                    },
                    complete = options.complete || function () {
                        return;
                    },
                    finallyFn = options["finally"] || function () {
                        return;
                    };

            self.Execute = function () {
                var xhr = new XMLHttpRequest(),
                    name = null;
                xhr.open(method, url, async);
                for (name in headers) {
                    if (headers.hasOwnProperty(name) &&
                        (typeof headers[name]).toUpperCase() !== "FUNCTION") {
                        xhr.setRequestHeader(name, headers[name]);
                    }
                }
                if (timeout !== -1) {
                    xhr.timeout = timeout;
                }
                xhr.send(data);

                xhr.onreadystatechange = function () {
                    if (xhr.readyState !== 4) {
                        return;
                    }

                    var JSON = null;
                    try {
                        JSON = GLOBAL.JSON.parse(xhr.responseText);
                    } catch (ignore) {}
                    var responses = {
                        JSON: JSON,
                        Text: xhr.responseText,
                        XML: xhr.responseXML
                    };
                    try {
                        if (xhr.status >= 200 && xhr.status < 300) {
                            success.apply(thisContext, [responses, xhr]);
                        } else {
                            if (localOptions[xhr.status] !== undefined &&
                                localOptions[xhr.status] !== null) {
                                localOptions[xhr.status].apply(thisContext, [responses, xhr]);
                            } else {
                                fail.apply(thisContext, [responses, xhr]);
                            }
                        }
                        complete.apply(thisContext, [responses, xhr]);
                    } finally {
                        finallyFn.apply(thisContext, [responses, xhr]);
                    }
                };
            };

            self.AddHeader = function (name, value) {
                headers[name] = value;
            };
            self.RemoveHeader = function (name) {
                delete headers[name];
            };
            self.BasicAuthentication = function (username, password) {
                this.AddHeader("Authorization", "Basic " + window.btoa(username + ":" + password));
            };

            return self;
        };
    }(SK));


}(window.SK = window.SK || {}));