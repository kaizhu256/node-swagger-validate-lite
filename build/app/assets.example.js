
















































































































/*
example.js

this script will run a web-demo of swagger-validate-lite

instruction
    1. save this script as example.js
    2. run shell-command:
        $ npm install kaizhu256/node-swagger-validate-lite#alpha && PORT=8081 node example.js
    3. open a browser to http://127.0.0.1:8081 and play with web-demo
    4. edit this script to suit your needs
*/



/* istanbul instrument in package swagger_validate */
/* istanbul ignore next */
/* jslint utility2:true */
(function (globalThis) {
    "use strict";
    var consoleError;
    var local;
    // init globalThis
    (function () {
        try {
            globalThis = Function("return this")(); // jslint ignore:line
        } catch (ignore) {}
    }());
    globalThis.globalThis = globalThis;
    // init debug_inline
    if (!globalThis["debug\u0049nline"]) {
        consoleError = console.error;
        globalThis["debug\u0049nline"] = function () {
        /*
         * this function will both print <arguments> to stderr
         * and return <arguments>[0]
         */
            var argList;
            argList = Array.from(arguments); // jslint ignore:line
            // debug arguments
            globalThis["debug\u0049nlineArguments"] = argList;
            consoleError("\n\ndebug\u0049nline");
            consoleError.apply(console, argList);
            consoleError("\n");
            // return arg0 for inspection
            return argList[0];
        };
    }
    // init local
    local = {};
    local.local = local;
    globalThis.globalLocal = local;
    // init isBrowser
    local.isBrowser = (
        typeof window === "object"
        && window === globalThis
        && typeof window.XMLHttpRequest === "function"
        && window.document
        && typeof window.document.querySelector === "function"
    );
    // init function
    local.assertThrow = function (passed, message) {
    /*
     * this function will throw error <message> if <passed> is falsy
     */
        var error;
        if (passed) {
            return;
        }
        error = (
            // ternary-condition
            (
                message
                && typeof message.message === "string"
                && typeof message.stack === "string"
            )
            // if message is an error-object, then leave it as is
            ? message
            : new Error(
                typeof message === "string"
                // if message is a string, then leave it as is
                ? message
                // else JSON.stringify message
                : JSON.stringify(message, null, 4)
            )
        );
        throw error;
    };
    local.functionOrNop = function (fnc) {
    /*
     * this function will if <fnc> exists,
     * them return <fnc>,
     * else return <nop>
     */
        return fnc || local.nop;
    };
    local.identity = function (value) {
    /*
     * this function will return <value>
     */
        return value;
    };
    local.nop = function () {
    /*
     * this function will do nothing
     */
        return;
    };
    local.objectAssignDefault = function (target, source) {
    /*
     * this function will if items from <target> are
     * null, undefined, or empty-string,
     * then overwrite them with items from <source>
     */
        Object.keys(source).forEach(function (key) {
            if (
                target[key] === null
                || target[key] === undefined
                || target[key] === ""
            ) {
                target[key] = target[key] || source[key];
            }
        });
        return target;
    };
    // require builtin
    if (!local.isBrowser) {
        local.assert = require("assert");
        local.buffer = require("buffer");
        local.child_process = require("child_process");
        local.cluster = require("cluster");
        local.crypto = require("crypto");
        local.dgram = require("dgram");
        local.dns = require("dns");
        local.domain = require("domain");
        local.events = require("events");
        local.fs = require("fs");
        local.http = require("http");
        local.https = require("https");
        local.net = require("net");
        local.os = require("os");
        local.path = require("path");
        local.querystring = require("querystring");
        local.readline = require("readline");
        local.repl = require("repl");
        local.stream = require("stream");
        local.string_decoder = require("string_decoder");
        local.timers = require("timers");
        local.tls = require("tls");
        local.tty = require("tty");
        local.url = require("url");
        local.util = require("util");
        local.vm = require("vm");
        local.zlib = require("zlib");
    }
}(this));



(function (local) {
"use strict";



// run shared js-env code - init-before
(function () {
// init local
local = (
    globalThis.utility2_rollup
    || globalThis.utility2_swagger_validate
    || globalThis.utility2_moduleExports
);
// init exports
globalThis.local = local;
}());



/* istanbul ignore next */
// run browser js-env code - init-test
(function () {
if (!local.isBrowser) {
    return;
}
// log stderr and stdout to #outputStdout1
["error", "log"].forEach(function (key) {
    var argList;
    var element;
    var fnc;
    element = document.querySelector(
        "#outputStdout1"
    );
    if (!element) {
        return;
    }
    fnc = console[key];
    console[key] = function () {
        argList = Array.from(arguments); // jslint ignore:line
        fnc.apply(console, argList);
        // append text to #outputStdout1
        element.textContent += argList.map(function (arg) {
            return (
                typeof arg === "string"
                ? arg
                : JSON.stringify(arg, null, 4)
            );
        }).join(" ").replace((
            /\u001b\[\d*m/g
        ), "") + "\n";
        // scroll textarea to bottom
        element.scrollTop = element.scrollHeight;
    };
});
Object.assign(local, globalThis.domOnEventDelegateDict);
globalThis.domOnEventDelegateDict = local;
local.onEventDomDb = (
    local.db && local.db.onEventDomDb
);
local.testRunBrowser = function (event) {
/*
 * this function will run browser-tests
 */
    switch (
        !event.ctrlKey
        && !event.metaKey
        && (
            event.modeInit
            || (event.type + "." + (event.target && event.target.id))
        )
    ) {
    // custom-case
    case "click.inputTextarea1":
    case "keydown.inputTextarea1":
    case true:
        // validate #inputTextarea1
        document.querySelector(
            "#outputStdout1"
        ).value = "";
        local.swagger_validate.swaggerValidateFile({
            data: document.querySelector(
                "#inputTextarea1"
            ).value,
            file: "inputTextarea1.json"
        }, function (err) {
            document.querySelector(
                "#outputStdout1"
            ).style.color = (
                err
                ? "#d00"
                : "#070"
            );
        });
        break;
    // run browser-tests
    default:
        if (
            (event.target && event.target.id) !== "testRunButton1"
            && !(event.modeInit && (
                /\bmodeTest=1\b/
            ).test(location.search))
        ) {
            return;
        }
        // show browser-tests
        if (document.querySelector(
            "#testReportDiv1"
        ).style.maxHeight === "0px") {
            local.uiAnimateSlideDown(document.querySelector(
                "#testReportDiv1"
            ));
            document.querySelector(
                "#testRunButton1"
            ).textContent = "hide internal test";
            local.modeTest = 1;
            local.testRunDefault(local);
            return;
        }
        // hide browser-tests
        local.uiAnimateSlideUp(document.querySelector(
            "#testReportDiv1"
        ));
        document.querySelector(
            "#testRunButton1"
        ).textContent = "run internal test";
    }
};

local.testRunBrowser({
    modeInit: true
});
}());



/* istanbul ignore next */
// run node js-env code - init-test
(function () {
if (local.isBrowser) {
    return;
}
// init exports
module.exports = local;
/* validateLineSortedReset */
// init assets
local.assetsDict = local.assetsDict || {};
[
    "assets.index.template.html",
    "assets.swgg.swagger.json",
    "assets.swgg.swagger.server.json"
].forEach(function (file) {
    file = "/" + file;
    local.assetsDict[file] = local.assetsDict[file] || "";
    if (local.fs.existsSync(local.__dirname + file)) {
        local.assetsDict[file] = local.fs.readFileSync(
            local.__dirname + file,
            "utf8"
        );
    }
});
/* jslint ignore:start */
local.assetsDict["/assets.index.template.html"] = '\
<!doctype html>\n\
<html lang="en">\n\
<head>\n\
<meta charset="utf-8">\n\
<meta name="viewport" content="width=device-width, initial-scale=1">\n\
<!-- "assets.utility2.template.html" -->\n\
<title>{{env.npm_package_name}} ({{env.npm_package_version}})</title>\n\
<style>\n\
/* jslint utility2:true */\n\
/*csslint\n\
*/\n\
/* csslint ignore:start */\n\
*,\n\
*:after,\n\
*:before {\n\
    box-sizing: border-box;\n\
}\n\
/* csslint ignore:end */\n\
@keyframes uiAnimateShake {\n\
    0%, 50% {\n\
        transform: translateX(10px);\n\
    }\n\
    25%, 75% {\n\
        transform: translateX(-10px);\n\
    }\n\
    100% {\n\
        transform: translateX(0);\n\
    }\n\
}\n\
@keyframes uiAnimateSpin {\n\
    0% {\n\
        transform: rotate(0deg);\n\
    }\n\
    100% {\n\
        transform: rotate(360deg);\n\
    }\n\
}\n\
a {\n\
    overflow-wrap: break-word;\n\
}\n\
body {\n\
    background: #eef;\n\
    font-family: Arial, Helvetica, sans-serif;\n\
    font-size: small;\n\
    margin: 0 40px;\n\
}\n\
body > div,\n\
body > form > div,\n\
body > form > input,\n\
body > form > pre,\n\
body > form > .button,\n\
body > form > .textarea,\n\
body > input,\n\
body > pre,\n\
body > .button,\n\
body > .textarea {\n\
    margin-bottom: 20px;\n\
    margin-top: 0;\n\
}\n\
body > form > input,\n\
body > form > .button,\n\
body > input,\n\
body > .button {\n\
    width: 20rem;\n\
}\n\
body > form > .textarea,\n\
body > .textarea {\n\
    height: 10rem;\n\
    width: 100%;\n\
}\n\
body > .readonly {\n\
    background: #ddd;\n\
}\n\
code,\n\
pre,\n\
.textarea {\n\
    font-family: Consolas, Menlo, monospace;\n\
    font-size: smaller;\n\
}\n\
pre {\n\
    overflow-wrap: break-word;\n\
    white-space: pre-wrap;\n\
}\n\
.button {\n\
    background-color: #fff;\n\
    border: 1px solid;\n\
    border-bottom-color: rgb(186, 186, 186);\n\
    border-left-color: rgb(209, 209, 209);\n\
    border-radius: 4px;\n\
    border-right-color: rgb(209, 209, 209);\n\
    border-top-color: rgb(216, 216, 216);\n\
    color: #00d;\n\
    cursor: pointer;\n\
    display: inline-block;\n\
    font-family: Arial, Helvetica, sans-serif;\n\
    font-size: 12px;\n\
    font-style: normal;\n\
    font-weight: normal;\n\
    margin: 0;\n\
    padding: 2px 7px 3px 7px;\n\
    text-align: center;\n\
    text-decoration: underline;\n\
}\n\
.colorError {\n\
    color: #d00;\n\
}\n\
.textarea {\n\
    background: #fff;\n\
    border: 1px solid #999;\n\
    border-radius: 0;\n\
    cursor: auto;\n\
    overflow: auto;\n\
    padding: 2px;\n\
}\n\
.uiAnimateShake {\n\
    animation-duration: 500ms;\n\
    animation-name: uiAnimateShake;\n\
}\n\
.uiAnimateSlide {\n\
    overflow-y: hidden;\n\
    transition: max-height ease-in 250ms, min-height ease-in 250ms, padding-bottom ease-in 250ms, padding-top ease-in 250ms;\n\
}\n\
.utility2FooterDiv {\n\
    text-align: center;\n\
}\n\
.zeroPixel {\n\
    border: 0;\n\
    height: 0;\n\
    margin: 0;\n\
    padding: 0;\n\
    width: 0;\n\
}\n\
</style>\n\
</head>\n\
<body>\n\
<div id="ajaxProgressDiv1" style="background: #d00; height: 2px; left: 0; margin: 0; padding: 0; position: fixed; top: 0; transition: background 500ms, width 1500ms; width: 0%; z-index: 1;"></div>\n\
<div class="uiAnimateSpin" style="animation: uiAnimateSpin 2s linear infinite; border: 5px solid #999; border-radius: 50%; border-top: 5px solid #7d7; display: none; height: 25px; vertical-align: middle; width: 25px;"></div>\n\
<a class="zeroPixel" download="db.persistence.json" href="" id="dbExportA1"></a>\n\
<input class="zeroPixel" data-onevent="onEventDomDb" data-onevent-db="dbImportInput" type="file">\n\
<script>\n\
/* jslint utility2:true */\n\
// init domOnEventWindowOnloadTimeElapsed\n\
(function () {\n\
/*\n\
 * this function will measure and print time-elapsed for window.onload\n\
 */\n\
    "use strict";\n\
    if (window.domOnEventWindowOnloadTimeElapsed) {\n\
        return;\n\
    }\n\
    window.domOnEventWindowOnloadTimeElapsed = Date.now() + 100;\n\
    window.addEventListener("load", function () {\n\
        setTimeout(function () {\n\
            window.domOnEventWindowOnloadTimeElapsed = (\n\
                Date.now()\n\
                - window.domOnEventWindowOnloadTimeElapsed\n\
            );\n\
            console.error(\n\
                "domOnEventWindowOnloadTimeElapsed = "\n\
                + window.domOnEventWindowOnloadTimeElapsed\n\
            );\n\
        }, 100);\n\
    });\n\
}());\n\
\n\
\n\
\n\
// init domOnEventDelegateDict\n\
(function () {\n\
/*\n\
 * this function will handle delegated dom-event\n\
 * example usage:\n\
 */\n\
    "use strict";\n\
    var timerTimeoutDict;\n\
    if (window.domOnEventDelegateDict) {\n\
        return;\n\
    }\n\
    window.domOnEventDelegateDict = {};\n\
    timerTimeoutDict = {};\n\
    window.domOnEventDelegateDict.domOnEventDelegate = function (event) {\n\
        event.targetOnEvent = event.target.closest(\n\
            "[data-onevent]"\n\
        );\n\
        if (\n\
            !event.targetOnEvent\n\
            || event.targetOnEvent.dataset.onevent === "domOnEventNop"\n\
            || event.target.closest(\n\
                ".disabled, .readonly"\n\
            )\n\
        ) {\n\
            return;\n\
        }\n\
        // rate-limit high-frequency-event\n\
        switch (event.type) {\n\
        case "keydown":\n\
        case "keyup":\n\
            // filter non-input keyboard-event\n\
            if (!event.target.closest(\n\
                "input, option, select, textarea"\n\
            )) {\n\
                return;\n\
            }\n\
            if (timerTimeoutDict[event.type] !== true) {\n\
                timerTimeoutDict[event.type] = (\n\
                    timerTimeoutDict[event.type]\n\
                    || setTimeout(function () {\n\
                        timerTimeoutDict[event.type] = true;\n\
                        window.domOnEventDelegateDict.domOnEventDelegate(\n\
                            event\n\
                        );\n\
                    }, 50)\n\
                );\n\
                return;\n\
            }\n\
            timerTimeoutDict[event.type] = null;\n\
            break;\n\
        }\n\
        switch (event.targetOnEvent.tagName) {\n\
        case "BUTTON":\n\
        case "FORM":\n\
            event.preventDefault();\n\
            break;\n\
        }\n\
        // reset output\n\
        if (\n\
            !event.ctrlKey\n\
            && !event.metaKey\n\
            && event.targetOnEvent.dataset.oneventResetOutput\n\
        ) {\n\
            Array.from(document.querySelectorAll(\n\
                ".onevent-reset-output"\n\
            )).forEach(function (element) {\n\
                switch (element.tagName) {\n\
                case "INPUT":\n\
                case "TEXTAREA":\n\
                    element.value = "";\n\
                    break;\n\
                case "PRE":\n\
                    element.textContent = "";\n\
                    break;\n\
                default:\n\
                    element.innerHTML = "";\n\
                }\n\
            });\n\
        }\n\
        event.stopPropagation();\n\
        window.domOnEventDelegateDict[event.targetOnEvent.dataset.onevent](\n\
            event\n\
        );\n\
    };\n\
    // init event-handling\n\
    [\n\
        "change",\n\
        "click",\n\
        "keydown",\n\
        "submit"\n\
    ].forEach(function (eventType) {\n\
        document.addEventListener(\n\
            eventType,\n\
            window.domOnEventDelegateDict.domOnEventDelegate\n\
        );\n\
    });\n\
}());\n\
\n\
\n\
\n\
// init timerIntervalAjaxProgressUpdate\n\
(function () {\n\
/*\n\
 * this function will increment ajax-progress-bar\n\
 * until webpage has loaded\n\
 */\n\
    "use strict";\n\
    var ajaxProgressDiv1;\n\
    var ajaxProgressState;\n\
    var ajaxProgressUpdate;\n\
    if (\n\
        window.timerIntervalAjaxProgressUpdate\n\
        || !document.querySelector(\n\
            "#ajaxProgressDiv1"\n\
        )\n\
    ) {\n\
        return;\n\
    }\n\
    ajaxProgressDiv1 = document.querySelector(\n\
        "#ajaxProgressDiv1"\n\
    );\n\
    setTimeout(function () {\n\
        ajaxProgressDiv1.style.width = "25%";\n\
    });\n\
    ajaxProgressState = 0;\n\
    ajaxProgressUpdate = (\n\
        window.local\n\
        && window.local.ajaxProgressUpdate\n\
    ) || function () {\n\
        ajaxProgressDiv1.style.width = "100%";\n\
        setTimeout(function () {\n\
            ajaxProgressDiv1.style.background = "transparent";\n\
            setTimeout(function () {\n\
                ajaxProgressDiv1.style.width = "0%";\n\
            }, 500);\n\
        }, 1000);\n\
    };\n\
    window.timerIntervalAjaxProgressUpdate = setInterval(function () {\n\
        ajaxProgressState += 1;\n\
        ajaxProgressDiv1.style.width = Math.max(\n\
            100 - 75 * Math.exp(-0.125 * ajaxProgressState),\n\
            ajaxProgressDiv1.style.width.slice(0, -1) | 0\n\
        ) + "%";\n\
    }, 1000);\n\
    window.addEventListener("load", function () {\n\
        clearInterval(window.timerIntervalAjaxProgressUpdate);\n\
        ajaxProgressUpdate();\n\
    });\n\
}());\n\
\n\
\n\
\n\
// init domOnEventSelectAllWithinPre\n\
(function () {\n\
/*\n\
 * this function will limit select-all within <pre tabIndex="0"> elements\n\
 * https://stackoverflow.com/questions/985272/selecting-text-in-an-element-akin-to-highlighting-with-your-mouse\n\
 */\n\
    "use strict";\n\
    if (window.domOnEventSelectAllWithinPre) {\n\
        return;\n\
    }\n\
    window.domOnEventSelectAllWithinPre = function (event) {\n\
        var range;\n\
        var selection;\n\
        if (\n\
            event\n\
            && event.key === "a"\n\
            && (event.ctrlKey || event.metaKey)\n\
            && event.target.closest(\n\
                "pre"\n\
            )\n\
        ) {\n\
            range = document.createRange();\n\
            range.selectNodeContents(event.target.closest(\n\
                "pre"\n\
            ));\n\
            selection = window.getSelection();\n\
            selection.removeAllRanges();\n\
            selection.addRange(range);\n\
            event.preventDefault();\n\
        }\n\
    };\n\
    // init event-handling\n\
    document.addEventListener(\n\
        "keydown",\n\
        window.domOnEventSelectAllWithinPre\n\
    );\n\
}());\n\
</script>\n\
<h1>\n\
<!-- utility2-comment\n\
    <a\n\
        {{#if env.npm_package_homepage}}\n\
        href="{{env.npm_package_homepage}}"\n\
        {{/if env.npm_package_homepage}}\n\
        target="_blank"\n\
    >\n\
utility2-comment -->\n\
        {{env.npm_package_name}} ({{env.npm_package_version}})\n\
<!-- utility2-comment\n\
    </a>\n\
utility2-comment -->\n\
</h1>\n\
<h3>{{env.npm_package_description}}</h3>\n\
<!-- utility2-comment\n\
<a class="button" download href="assets.app.js">download standalone app</a><br>\n\
<button class="button" data-onevent="testRunBrowser" data-onevent-reset-output="1" id="testRunButton1">run internal test</button><br>\n\
<div class="uiAnimateSlide" id="testReportDiv1" style="border-bottom: 0; border-top: 0; margin-bottom: 0; margin-top: 0; max-height: 0; padding-bottom: 0; padding-top: 0;"></div>\n\
utility2-comment -->\n\
\n\
\n\
\n\
<label>edit or paste swagger.json data below to validate</label>\n\
<textarea class="textarea" data-onevent="testRunBrowser" data-onevent-reset-output="1" id="inputTextarea1">{\n\
    "swagger": "this is an example error",\n\
    "info": {\n\
        "title": "Swagger Petstore",\n\
        "version": "0.0.1"\n\
    },\n\
    "paths": {\n\
        "/pet/{petId}": {\n\
            "get": {\n\
                "operationId": "getPetById",\n\
                "parameters": [\n\
                    {\n\
                        "name": "petId",\n\
                        "in": "path",\n\
                        "description": "ID of pet to return",\n\
                        "required": true,\n\
                        "type": "integer",\n\
                        "format": "int64"\n\
                    }\n\
                ],\n\
                "responses": {\n\
                    "200": {\n\
                        "description": "successful operation"\n\
                    }\n\
                },\n\
                "tags": [\n\
                    "pet"\n\
                ]\n\
            }\n\
        }\n\
    },\n\
    "tags": [\n\
        {\n\
            "name": "pet"\n\
        }\n\
    ]\n\
}</textarea>\n\
<label>stderr and stdout</label>\n\
<pre class="onevent-reset-output readonly textarea" id="outputStdout1" tabIndex="0"></pre>\n\
<!-- utility2-comment\n\
{{#if isRollup}}\n\
<script src="assets.app.js"></script>\n\
{{#unless isRollup}}\n\
utility2-comment -->\n\
<script src="assets.utility2.rollup.js"></script>\n\
<script>window.utility2_onReadyBefore.counter += 1;</script>\n\
<script src="jsonp.utility2.stateInit?callback=window.utility2.stateInit"></script>\n\
<script src="assets.swagger_validate.js"></script>\n\
<script src="assets.example.js"></script>\n\
<script src="assets.test.js"></script>\n\
<script>window.utility2_onReadyBefore();</script>\n\
<!-- utility2-comment\n\
{{/if isRollup}}\n\
utility2-comment -->\n\
<div class="utility2FooterDiv">\n\
    [ this app was created with\n\
    <a href="https://github.com/kaizhu256/node-utility2" target="_blank">utility2</a>\n\
    ]\n\
</div>\n\
</body>\n\
</html>\n\
';
/* jslint ignore:end */
/* validateLineSortedReset */
/* jslint ignore:start */
local.assetsDict["/assets.swagger_validate.js"] =
    local.assetsDict["/assets.swagger_validate.js"] ||
    local.fs.readFileSync(local.__dirname + "/lib.swagger_validate.js", "utf8"
).replace((/^#!\//), "// ");
/* jslint ignore:end */
/* validateLineSortedReset */
local.assetsDict["/"] = local.assetsDict["/assets.index.template.html"]
.replace((
    /\{\{env\.(\w+?)\}\}/g
), function (match0, match1) {
    switch (match1) {
    case "npm_package_description":
        return "the greatest app in the world!";
    case "npm_package_name":
        return "swagger-validate-lite";
    case "npm_package_nameLib":
        return "swagger_validate";
    case "npm_package_version":
        return "0.0.1";
    default:
        return match0;
    }
});
local.assetsDict["/assets.example.html"] = local.assetsDict["/"];
local.assetsDict["/index.html"] = local.assetsDict["/"];
// init cli
if (module !== require.main || globalThis.utility2_rollup) {
    return;
}
/* validateLineSortedReset */
local.assetsDict["/assets.example.js"] = (
    local.assetsDict["/assets.example.js"]
    || local.fs.readFileSync(__filename, "utf8")
);
local.assetsDict["/favicon.ico"] = local.assetsDict["/favicon.ico"] || "";
// if $npm_config_timeout_exit exists,
// then exit this process after $npm_config_timeout_exit ms
if (Number(process.env.npm_config_timeout_exit)) {
    setTimeout(process.exit, Number(process.env.npm_config_timeout_exit));
}
// start server
if (globalThis.utility2_serverHttp1) {
    return;
}
process.env.PORT = process.env.PORT || "8081";
console.error("http-server listening on port " + process.env.PORT);
local.http.createServer(function (request, response) {
    request.urlParsed = local.url.parse(request.url);
    if (local.assetsDict[request.urlParsed.pathname] !== undefined) {
        response.end(local.assetsDict[request.urlParsed.pathname]);
        return;
    }
    response.statusCode = 404;
    response.end();
}).listen(process.env.PORT);
}());



}());