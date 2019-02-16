/*
example.js

this script will run a web-demo of swagger-validate-lite

instruction
    1. save this script as example.js
    2. run the shell command:
        $ npm install swagger-validate-lite && PORT=8081 node example.js
    3. open a browser to http://127.0.0.1:8081 and play with the web-demo
    4. edit this script to suit your needs
*/



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
        local = local.global.utility2_rollup || (local.modeJs === 'browser'
            ? local.global.utility2_swagger_validate
            : require('swagger-validate-lite'));
        // init exports
        local.global.local = local;
    }());
    switch (local.modeJs) {



    // run browser js-env code - init-test
    /* istanbul ignore next */
    case 'browser':
        local.testRunBrowser = function (event) {
            if (!event || (event &&
                    event.currentTarget &&
                    event.currentTarget.className &&
                    event.currentTarget.className.includes &&
                    event.currentTarget.className.includes('onreset'))) {
                // reset output
                Array.from(
                    document.querySelectorAll('body > .resettable')
                ).forEach(function (element) {
                    switch (element.tagName) {
                    case 'INPUT':
                    case 'TEXTAREA':
                        element.value = '';
                        break;
                    default:
                        element.textContent = '';
                    }
                });
            }
            switch (event && event.currentTarget && event.currentTarget.id) {
            case 'testRunButton1':
                // show tests
                if (document.querySelector('#testReportDiv1').style.maxHeight === '0px') {
                    local.uiAnimateSlideDown(document.querySelector('#testReportDiv1'));
                    document.querySelector('#testRunButton1').textContent = 'hide internal test';
                    local.modeTest = true;
                    local.testRunDefault(local);
                // hide tests
                } else {
                    local.uiAnimateSlideUp(document.querySelector('#testReportDiv1'));
                    document.querySelector('#testRunButton1').textContent = 'run internal test';
                }
                break;
            // custom-case
            default:
                // validate #inputTextarea1
                local.swagger_validate.swaggerValidateFile({
                    data: document.querySelector('#inputTextarea1').value,
                    file: 'inputTextarea1.json'
                }, function (error, data) {
                    document.querySelector('#outputPre1').style.color = error
                        ? '#d00'
                        : '#090';
                    document.querySelector('#outputPre1').textContent = data;
                });
                break;
            }
            if (document.querySelector('#inputTextareaEval1') && (!event || (event &&
                    event.currentTarget &&
                    event.currentTarget.className &&
                    event.currentTarget.className.includes &&
                    event.currentTarget.className.includes('oneval')))) {
                // try to eval input-code
                try {
                    /*jslint evil: true*/
                    eval(document.querySelector('#inputTextareaEval1').value);
                } catch (errorCaught) {
                    console.error(errorCaught);
                }
            }
        };
        // log stderr and stdout to #outputTextareaStdout1
        ['error', 'log'].forEach(function (key) {
            console[key + '_original'] = console[key];
            console[key] = function () {
                var element;
                console[key + '_original'].apply(console, arguments);
                element = document.querySelector('#outputTextareaStdout1');
                if (!element) {
                    return;
                }
                // append text to #outputTextareaStdout1
                element.value += Array.from(arguments).map(function (arg) {
                    return typeof arg === 'string'
                        ? arg
                        : JSON.stringify(arg, null, 4);
                }).join(' ') + '\n';
                // scroll textarea to bottom
                element.scrollTop = element.scrollHeight;
            };
        });
        // init event-handling
        ['change', 'click', 'keyup'].forEach(function (event) {
            Array.from(document.querySelectorAll('.on' + event)).forEach(function (element) {
                element.addEventListener(event, local.testRunBrowser);
            });
        });
        // run tests
        local.testRunBrowser();
        break;



    // run node js-env code - init-test
    /* istanbul ignore next */
    case 'node':
        // init exports
        module.exports = local;
        // require builtins
        Object.keys(process.binding('natives')).forEach(function (key) {
            if (!local[key] && !(/\/|^_|^sys$/).test(key)) {
                local[key] = require(key);
            }
        });
        // init assets
        local.assetsDict = local.assetsDict || {};
        /* jslint-ignore-begin */
        local.assetsDict['/assets.index.template.html'] = '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<!-- "assets.index.default.template.html" -->\n<title>{{env.npm_package_name}} (v{{env.npm_package_version}})</title>\n<style>\n/*csslint\n    box-sizing: false,\n    universal-selector: false\n*/\n*,\n*:after,\n*:before {\n    box-sizing: border-box;\n}\nbody {\n    background: #dde;\n    font-family: Arial, Helvetica, sans-serif;\n    margin: 0 40px;\n}\nbody > a,\nbody > button,\nbody > div,\nbody > input,\nbody > pre,\nbody > select,\nbody > span,\nbody > textarea {\n    margin-bottom: 20px;\n}\nbody > button {\n    width: 20rem;\n}\nbutton {\n    cursor: pointer;\n}\npre {\n    overflow-wrap: break-word;\n    white-space: pre-wrap;\n}\n@keyframes uiAnimateShake {\n    100% {\n        transform: translateX(0);\n    }\n    0%, 20%, 60% {\n        transform: translateX(10px);\n    }\n    40%, 80% {\n        transform: translateX(-10px);\n    }\n}\n.uiAnimateShake {\n    animation-duration: 500ms;\n    animation-name: uiAnimateShake;\n}\n.uiAnimateSlide {\n    overflow-y: hidden;\n    transition: max-height ease-in 250ms, min-height ease-in 250ms, padding-bottom ease-in 250ms, padding-top ease-in 250ms;\n}\n@keyframes uiAnimateSpin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n}\n.utility2FooterDiv {\n    text-align: center;\n}\n.zeroPixel {\n    border: 0;\n    height: 0;\n    margin: 0;\n    padding: 0;\n    width: 0;\n}\n</style>\n<style>\n/*csslint\n*/\ntextarea {\n    font-family: monospace;\n    height: 20rem;\n    width: 100%;\n}\ntextarea[readonly] {\n    background: #ddd;\n}\n</style>\n</head>\n<body>\n<div id="ajaxProgressDiv1" style="background: #d00; height: 2px; left: 0; margin: 0; padding: 0; position: fixed; top: 0; transition: background 500ms, width 1500ms; width: 0%; z-index: 1;"></div>\n<div class="uiAnimateSpin" style="animation: uiAnimateSpin 2s linear infinite; border: 5px solid #999; border-radius: 50%; border-top: 5px solid #7d7; display: none; height: 25px; vertical-align: middle; width: 25px;"></div>\n<script>\n/*jslint\n    bitwise: true,\n    browser: true,\n    maxerr: 8,\n    maxlen: 100,\n    node: true,\n    nomen: true,\n    regexp: true,\n    stupid: true\n*/\n(function () {\n    "use strict";\n    var ajaxProgressDiv1,\n        ajaxProgressState,\n        ajaxProgressUpdate,\n        timerIntervalAjaxProgressUpdate;\n    ajaxProgressDiv1 = document.querySelector("#ajaxProgressDiv1");\n    setTimeout(function () {\n        ajaxProgressDiv1.style.width = "25%";\n    });\n    ajaxProgressState = 0;\n    ajaxProgressUpdate = (window.local &&\n        window.local.ajaxProgressUpdate) || function () {\n        ajaxProgressDiv1.style.width = "100%";\n        setTimeout(function () {\n            ajaxProgressDiv1.style.background = "transparent";\n            setTimeout(function () {\n                ajaxProgressDiv1.style.width = "0%";\n            }, 500);\n        }, 1500);\n    };\n    timerIntervalAjaxProgressUpdate = setInterval(function () {\n        ajaxProgressState += 1;\n        ajaxProgressDiv1.style.width = Math.max(\n            100 - 75 * Math.exp(-0.125 * ajaxProgressState),\n            Number(ajaxProgressDiv1.style.width.slice(0, -1)) || 0\n        ) + "%";\n    }, 1000);\n    window.addEventListener("load", function () {\n        clearInterval(timerIntervalAjaxProgressUpdate);\n        ajaxProgressUpdate();\n    });\n}());\n</script>\n<h1>\n<!-- utility2-comment\n    <a\n        {{#if env.npm_package_homepage}}\n        href="{{env.npm_package_homepage}}"\n        {{/if env.npm_package_homepage}}\n        target="_blank"\n    >\nutility2-comment -->\n        {{env.npm_package_name}} (v{{env.npm_package_version}})\n<!-- utility2-comment\n    </a>\nutility2-comment -->\n</h1>\n<h3>{{env.npm_package_description}}</h3>\n<!-- utility2-comment\n<h4><a download href="assets.app.js">download standalone app</a></h4>\n<button class="onclick onreset" id="testRunButton1">run internal test</button><br>\n<div class="uiAnimateSlide" id="testReportDiv1" style="border-bottom: 0; border-top: 0; margin-bottom: 0; margin-top: 0; max-height: 0; padding-bottom: 0; padding-top: 0;"></div>\nutility2-comment -->\n\n\n\n<label>edit or paste swagger.json data below to validate\n</label>\n<textarea class="oneval onkeyup onreset" id="inputTextarea1">' +



































































































































































JSON.stringify(JSON.parse(local.assetsDict['/assets.swgg.swagger.petstore.json']), null, 4) +
'</textarea>\n<pre id="outputPre1"></pre>\n<!-- utility2-comment\n{{#if isRollup}}\n<script src="assets.app.js"></script>\n{{#unless isRollup}}\nutility2-comment -->\n<script src="assets.utility2.rollup.js"></script>\n<script>window.utility2.onResetBefore.counter += 1;</script>\n<script src="jsonp.utility2.stateInit?callback=window.utility2.stateInit"></script>\n<script src="assets.swagger_validate.js"></script>\n<script src="assets.example.js"></script>\n<script src="assets.test.js"></script>\n<script>window.utility2.onResetBefore();</script>\n<!-- utility2-comment\n{{/if isRollup}}\nutility2-comment -->\n<div class="utility2FooterDiv">\n    [ this app was created with\n    <a href="https://github.com/kaizhu256/node-utility2" target="_blank">utility2</a>\n    ]\n</div>\n</body>\n</html>\n';
























        /* jslint-ignore-end */
        [
            'assets.index.css',
            'assets.index.template.html',
            'assets.swgg.swagger.json',
            'assets.swgg.swagger.server.json'
        ].forEach(function (file) {
            file = '/' + file;
            local.assetsDict[file] = local.assetsDict[file] || '';
            if (local.fs.existsSync(local.__dirname + file)) {
                local.assetsDict[file] = local.fs.readFileSync(
                    local.__dirname + file,
                    'utf8'
                );
            }
        });
        local.assetsDict['/'] =
            local.assetsDict['/assets.example.html'] =
            local.assetsDict['/assets.index.template.html']
            .replace((/\{\{env\.(\w+?)\}\}/g), function (match0, match1) {
                // jslint-hack
                String(match0);
                switch (match1) {
                case 'npm_package_description':
                    return 'the greatest app in the world!';
                case 'npm_package_name':
                    return 'swagger-validate-lite';
                case 'npm_package_nameLib':
                    return 'swagger_validate';
                case 'npm_package_version':
                    return '0.0.1';
                default:
                    return match0;
                }
            });
        // init cli
        if (module !== require.main || local.global.utility2_rollup) {
            break;
        }
        local.assetsDict['/assets.example.js'] =
            local.assetsDict['/assets.example.js'] ||
            local.fs.readFileSync(__filename, 'utf8');
        // bug-workaround - long $npm_package_buildCustomOrg
        /* jslint-ignore-begin */
        local.assetsDict['/assets.swagger_validate.js'] =
            local.assetsDict['/assets.swagger_validate.js'] ||
            local.fs.readFileSync(
                local.__dirname + '/lib.swagger_validate.js',
                'utf8'
            ).replace((/^#!/), '//');
        /* jslint-ignore-end */
        local.assetsDict['/favicon.ico'] = local.assetsDict['/favicon.ico'] || '';
        // if $npm_config_timeout_exit exists,
        // then exit this process after $npm_config_timeout_exit ms
        if (Number(process.env.npm_config_timeout_exit)) {
            setTimeout(process.exit, Number(process.env.npm_config_timeout_exit));
        }
        // start server
        if (local.global.utility2_serverHttp1) {
            break;
        }
        process.env.PORT = process.env.PORT || '8081';
        console.error('server starting on port ' + process.env.PORT);
        local.http.createServer(function (request, response) {
            request.urlParsed = local.url.parse(request.url);
            if (local.assetsDict[request.urlParsed.pathname] !== undefined) {
                response.end(local.assetsDict[request.urlParsed.pathname]);
                return;
            }
            response.statusCode = 404;
            response.end();
        }).listen(process.env.PORT);
        break;
    }
}());
