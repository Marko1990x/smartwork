"use strict";
var systemJsInit;
(function (systemJsInit) {
    var sysConfig = {
        packages: {
            '.': {
                defaultExtension: 'js'
            }
        }
    };
    SystemJS.config(sysConfig);
    System.import('./scripts/app.js');
})(systemJsInit || (systemJsInit = {}));
