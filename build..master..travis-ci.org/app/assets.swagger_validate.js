///usr/bin/env node
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



    // run shared js-env code - function-before
    /* istanbul ignore next */
    (function () {
        local.cliRun = function (fnc) {
        /*
         * this function will run the cli
         */
            var nop;
            nop = function () {
            /*
             * this function will do nothing
             */
                return;
            };
            local.cliDict._eval = local.cliDict._eval || function () {
            /*
             * code
             * eval code
             */
                local.global.local = local;
                require('vm').runInThisContext(process.argv[3]);
            };
            local.cliDict['--eval'] = local.cliDict['--eval'] || local.cliDict._eval;
            local.cliDict['-e'] = local.cliDict['-e'] || local.cliDict._eval;
            local.cliDict._help = local.cliDict._help || function () {
            /*
             * [none]
             * print help
             */
                var element, result, lengthList, sortDict;
                sortDict = {};
                result = [['[command]', '[args]', '[description]', -1]];
                lengthList = [result[0][0].length, result[0][1].length];
                Object.keys(local.cliDict).sort().forEach(function (key, ii) {
                    if (key[0] === '_' && key !== '_default') {
                        return;
                    }
                    sortDict[local.cliDict[key].toString()] =
                        sortDict[local.cliDict[key].toString()] || (ii + 1);
                    element = (/\n +\*(.*)\n +\*(.*)/).exec(local.cliDict[key].toString());
                    // coverage-hack - ignore else-statement
                    nop(local.global.__coverage__ && (function () {
                        element = element || ['', '', ''];
                    }()));
                    element = [
                        key.replace('_default', '[none]') + ' ',
                        element[1].trim() + ' ',
                        element[2].trim(),
                        (sortDict[local.cliDict[key].toString()] << 8) + ii
                    ];
                    result.push(element);
                    lengthList.forEach(function (length, jj) {
                        lengthList[jj] = Math.max(element[jj].length, length);
                    });
                });
                result.sort(function (aa, bb) {
                    return aa[3] < bb[3]
                        ? -1
                        : 1;
                });
                console.log('usage:   ' + __filename + ' [command] [args]');
                console.log('example: ' + __filename + ' --eval    ' +
                    '"console.log(\'hello world\')"\n');
                result.forEach(function (element, ii) {
                    lengthList.forEach(function (length, jj) {
                        while (element[jj].length < length) {
                            element[jj] += '-';
                        }
                    });
                    element = element.slice(0, 3).join('---- ');
                    if (ii === 0) {
                        element = element.replace((/-/g), ' ');
                    }
                    console.log(element);
                });
            };
            local.cliDict['--help'] = local.cliDict['--help'] || local.cliDict._help;
            local.cliDict['-h'] = local.cliDict['-h'] || local.cliDict._help;
            local.cliDict._default = local.cliDict._default || local.cliDict._help;
            local.cliDict.help = local.cliDict.help || local.cliDict._help;
            local.cliDict._interactive = local.cliDict._interactive || function () {
            /*
             * [none]
             * start interactive-mode
             */
                local.global.local = local;
                local.replStart();
            };
            if (local.replStart) {
                local.cliDict['--interactive'] = local.cliDict['--interactive'] ||
                    local.cliDict._interactive;
                local.cliDict['-i'] = local.cliDict['-i'] || local.cliDict._interactive;
            }
            // run fnc()
            fnc = fnc || function () {
                if (local.cliDict[process.argv[2]]) {
                    local.cliDict[process.argv[2]]();
                    return;
                }
                local.cliDict._default();
            };
            fnc();
        };
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
