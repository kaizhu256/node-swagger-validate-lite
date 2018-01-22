#!/usr/bin/env node
/* istanbul instrument in package swagger_validate */
/*jslint
    bitwise: true,
    browser: true,
    maxerr: 8,
    maxlen: 100,
    node: true,
    nomen: true,
    regexp: true,
    stupid: true
*/
(function () {
    'use strict';
    var local;



    // run shared js-env code - init-before
    (function () {
        // init local
        local = {};
        // init modeJs
        local.modeJs = (function () {
            try {
                return typeof navigator.userAgent === 'string' &&
                    typeof document.querySelector('body') === 'object' &&
                    typeof XMLHttpRequest.prototype.open === 'function' &&
                    'browser';
            } catch (errorCaughtBrowser) {
                return module.exports &&
                    typeof process.versions.node === 'string' &&
                    typeof require('http').createServer === 'function' &&
                    'node';
            }
        }());
        // init global
        local.global = local.modeJs === 'browser'
            ? window
            : global;
        // init utility2_rollup
        local = local.global.utility2_rollup || local;
        /* istanbul ignore next */
        if (local) {
            local = local.global.utility2_rollup ||
                local.global.utility2_rollup_old ||
                require('./assets.utility2.rollup.js');
            local.fs = null;
        }
        // init exports
        if (local.modeJs === 'browser') {
            local.global.utility2_swagger_validate = local;
        } else {
            // require builtins
            Object.keys(process.binding('natives')).forEach(function (key) {
                if (!local[key] && !(/\/|^_|^sys$/).test(key)) {
                    local[key] = require(key);
                }
            });
            module.exports = local;
            module.exports.__dirname = __dirname;
        }
        // init lib
        local.local = local.swagger_validate = local;
    }());
    switch (local.modeJs) {



    // run node js-env code - init-after
    /* istanbul ignore next */
    case 'node':
        // init cli
        if (module !== require.main || local.global.utility2_rollup) {
            break;
        }
        local.cliDict = {};
        local.cliDict._default = function () {
        /*
         * file/url
         * swagger-validate file/url
         */
            local.swaggerValidateFile({ file: process.argv[2] }, function (error, data) {
                console.error(data);
                process.exit(error);
            });
        };
        local.cliRun();
        break;
    }
}());
