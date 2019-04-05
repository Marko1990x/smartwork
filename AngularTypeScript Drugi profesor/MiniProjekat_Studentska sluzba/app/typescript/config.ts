/// <reference path="./node_modules/@types/systemjs/index.d.ts" />

namespace systemJsInit {
    const sysConfig = {
        packages: {
            '.': {
                defaultExtension: 'js'
            }
        }
    }
    SystemJS.config(sysConfig)
    System.import('./scripts/app.js');
}