/* istanbul instrument in package swagger_validate */
/* jslint-utility2 */
/*jslint
    bitwise: true,
    browser: true,
    maxerr: 4,
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
        (function () {
            try {
                local.modeJs = typeof process.versions.node === 'string' &&
                    typeof require('http').createServer === 'function' &&
                    'node';
            } catch (ignore) {
            }
            local.modeJs = local.modeJs || 'browser';
        }());
        // init global
        local.global = local.modeJs === 'browser'
            ? window
            : global;
        // re-init local
        local = local.global.local = (local.global.utility2 ||
            require('./assets.utility2.rollup.js')).requireReadme();
        // init test
        local.testRunInit(local);
    }());



    // run shared js-env code - function
    (function () {
        local.testCase_buildApidoc_default = function (options, onError) {
        /*
         * this function will test buildApidoc's default handling-behavior-behavior
         */
            if (local.modeJs !== 'node') {
                onError(null, options);
                return;
            }
            options = { whitelistDict: {
                swaggerValidate: true,
                swaggerValidateDataParameters: true,
                swaggerValidateDataSchema: true,
                swaggerValidateFile: true
            } };
            local.buildApidoc(options, onError);
        };
    }());
}());
