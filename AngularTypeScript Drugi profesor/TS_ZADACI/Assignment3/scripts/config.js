"use strict";
/// <reference path="../node_modules/@types/systemjs/index.d.ts" />
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
    System.import('./scripts/index.js');
})(systemJsInit || (systemJsInit = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsbUVBQW1FO0FBRW5FLElBQVUsWUFBWSxDQVVyQjtBQVZELFdBQVUsWUFBWTtJQUNsQixJQUFNLFNBQVMsR0FBRztRQUNkLFFBQVEsRUFBRTtZQUNOLEdBQUcsRUFBRTtnQkFDRCxnQkFBZ0IsRUFBRSxJQUFJO2FBQ3pCO1NBQ0o7S0FDSixDQUFBO0lBQ0QsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUMxQixNQUFNLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDeEMsQ0FBQyxFQVZTLFlBQVksS0FBWixZQUFZLFFBVXJCIn0=