"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var C_Users_sagni_OneDrive_Desktop_website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_sagni_OneDrive_Desktop_website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_sagni_OneDrive_Desktop_website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lottie_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lottie-react */ \"./node_modules/lottie-react/build/index.umd.js\");\n/* harmony import */ var lottie_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lottie_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_static_icons_mail_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/static/icons/mail.json */ \"./public/static/icons/mail.json\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var mailIconRef = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(null);\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_2___default().useState(false), 2), isSaving = ref[0], setIsSaving = ref[1];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_2___default().useState(\"Notify me\"), 2), submitLabel = ref1[0], setSubmitLabel = ref1[1];\n    var onFormSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(C_Users_sagni_OneDrive_Desktop_website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var isProd, base;\n            return C_Users_sagni_OneDrive_Desktop_website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        e.preventDefault();\n                        setIsSaving(true);\n                        setSubmitLabel(\"Done!\");\n                        isProd = \"development\" === \"production\";\n                        base = isProd ? \"https://react.email\" : \"http://localhost:3000\";\n                        mailIconRef.current.play();\n                        _ctx.next = 9;\n                        return fetch(\"\".concat(base, \"/api/save\"), {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify({\n                                email_address: e.target.email.value\n                            })\n                        });\n                    case 9:\n                        _ctx.next = 14;\n                        break;\n                    case 11:\n                        _ctx.prev = 11;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        alert(\"Something went wrong, try again later.\");\n                    case 14:\n                        _ctx.prev = 14;\n                        e.target.reset();\n                        setIsSaving(false);\n                        return _ctx.finish(14);\n                    case 18:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    11,\n                    14,\n                    18\n                ]\n            ]);\n        }));\n        return function onFormSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var title = \"React Email\";\n    var description = \"High-quality, unstyled components for creating emails using React.\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        content: title,\n                        property: \"og:title\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        content: description,\n                        name: \"description\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        content: description,\n                        property: \"og:description\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        content: \"https://react.email\",\n                        property: \"og:url\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"absolute w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"nav\", {\n                        className: \"max-w-6xl mx-auto px-6 flex items-center justify-between mt-6 mb-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                src: \"/static/logo.svg\",\n                                alt: \"React Email\",\n                                className: \"h-8\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex min-h-screen flex-col justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"mx-auto max-w-5xl items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col text-center px-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"text-gray-10 text-sm font-medium uppercase mb-4\",\n                                children: \"Coming Soon\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                className: \"text-gray-12 text-5xl font-bold mb-6\",\n                                children: [\n                                    \"Build and send\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 29\n                                    }, this),\n                                    \"emails using React\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"text-gray-11 text-lg mb-6\",\n                                children: \"High-quality, unstyled components for creating emails.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                                className: \"flex gap-2 mx-auto\",\n                                onSubmit: onFormSubmit,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                        type: \"email\",\n                                        name: \"email\",\n                                        placeholder: \"you@example.com\",\n                                        className: \"outline-none bg-gray-3 hover:bg-gray-4 focus:bg-gray-4 w-44 text-sm px-4 h-10 rounded-full focus:ring-1 focus:ring-cyan-1 transition duration-300 ease-in-out caret-cyan-1\",\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                        className: \"box-border outline-none self-center relative w-32 inline-flex items-center justify-center rounded-full text-center font-semibold transition duration-300 ease-in-out bg-gray-12 text-gray-1 text-sm h-10 px-4 hover:bg-cyan-1 focus:bg-cyan-1\",\n                                        disabled: isSaving,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((lottie_react__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                lottieRef: mailIconRef,\n                                                className: \"mr-1 w-5 h-5\",\n                                                animationData: _public_static_icons_mail_json__WEBPACK_IMPORTED_MODULE_5__,\n                                                loop: false,\n                                                autoplay: false\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                                className: \"relative top-px\",\n                                                children: submitLabel\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"4/7JMXpiCLM2CYUzFbvMQPdT1eQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UDs7Ozs7OzRDQUNBOzs7Ozs7b0NBQ0o7Ozs7Ozs0QkFDSDs7Ozs7d0JBQ0Y7Ozs7O29CQUNGOztvQkFDTCxDQUNIO0NBQ0g7R0F4RnVCTixJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTG90dGllLCB7IExvdHRpZVJlZkN1cnJlbnRQcm9wcyB9IGZyb20gJ2xvdHRpZS1yZWFjdCc7XG5pbXBvcnQgbWFpbEljb24gZnJvbSAnLi4vcHVibGljL3N0YXRpYy9pY29ucy9tYWlsLmpzb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBtYWlsSWNvblJlZiA9IFJlYWN0LnVzZVJlZjxMb3R0aWVSZWZDdXJyZW50UHJvcHM+KG51bGwpO1xuICBjb25zdCBbaXNTYXZpbmcsIHNldElzU2F2aW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3N1Ym1pdExhYmVsLCBzZXRTdWJtaXRMYWJlbF0gPSBSZWFjdC51c2VTdGF0ZSgnTm90aWZ5IG1lJyk7XG4gIFxuICBjb25zdCBvbkZvcm1TdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBzZXRJc1NhdmluZyh0cnVlKTtcbiAgICAgIHNldFN1Ym1pdExhYmVsKCdEb25lIScpO1xuXG4gICAgICBjb25zdCBpc1Byb2QgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuICAgICAgY29uc3QgYmFzZSA9IGlzUHJvZCA/ICdodHRwczovL3JlYWN0LmVtYWlsJyA6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnO1xuXG4gICAgICBtYWlsSWNvblJlZi5jdXJyZW50LnBsYXkoKTtcblxuICAgICAgYXdhaXQgZmV0Y2goYCR7YmFzZX0vYXBpL3NhdmVgLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGVtYWlsX2FkZHJlc3M6IGUudGFyZ2V0LmVtYWlsLnZhbHVlXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGNhdGNoKGUpIHtcbiAgICAgIGFsZXJ0KCdTb21ldGhpbmcgd2VudCB3cm9uZywgdHJ5IGFnYWluIGxhdGVyLicpO1xuICAgIH1cbiAgICBmaW5hbGx5IHtcbiAgICAgIGUudGFyZ2V0LnJlc2V0KCk7XG4gICAgICBzZXRJc1NhdmluZyhmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgdGl0bGUgPSAnUmVhY3QgRW1haWwnO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9ICdIaWdoLXF1YWxpdHksIHVuc3R5bGVkIGNvbXBvbmVudHMgZm9yIGNyZWF0aW5nIGVtYWlscyB1c2luZyBSZWFjdC4nO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIGNvbnRlbnQ9e3RpdGxlfSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgLz5cbiAgICAgICAgPG1ldGEgY29udGVudD17ZGVzY3JpcHRpb259IG5hbWU9XCJkZXNjcmlwdGlvblwiIC8+XG4gICAgICAgIDxtZXRhIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgLz5cbiAgICAgICAgPG1ldGEgY29udGVudD1cImh0dHBzOi8vcmVhY3QuZW1haWxcIiBwcm9wZXJ0eT1cIm9nOnVybFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHctZnVsbFwiPlxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG8gcHgtNiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbXQtNiBtYi00XCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2xvZ28uc3ZnXCIgYWx0PVwiUmVhY3QgRW1haWxcIiBjbGFzc05hbWU9XCJoLThcIiAvPlxuXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICBcbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTV4bCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdGV4dC1jZW50ZXIgcHgtNFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTEwIHRleHQtc20gZm9udC1tZWRpdW0gdXBwZXJjYXNlIG1iLTRcIj5cbiAgICAgICAgICAgICAgQ29taW5nIFNvb25cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMTIgdGV4dC01eGwgZm9udC1ib2xkIG1iLTZcIj5cbiAgICAgICAgICAgICAgQnVpbGQgYW5kIHNlbmQ8YnIgLz5lbWFpbHMgdXNpbmcgUmVhY3RcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMTEgdGV4dC1sZyBtYi02XCI+XG4gICAgICAgICAgICAgIEhpZ2gtcXVhbGl0eSwgdW5zdHlsZWQgY29tcG9uZW50cyBmb3IgY3JlYXRpbmcgZW1haWxzLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBteC1hdXRvXCIgb25TdWJtaXQ9e29uRm9ybVN1Ym1pdH0+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cInlvdUBleGFtcGxlLmNvbVwiIGNsYXNzTmFtZT1cIm91dGxpbmUtbm9uZSBiZy1ncmF5LTMgaG92ZXI6YmctZ3JheS00IGZvY3VzOmJnLWdyYXktNCB3LTQ0IHRleHQtc20gcHgtNCBoLTEwIHJvdW5kZWQtZnVsbCBmb2N1czpyaW5nLTEgZm9jdXM6cmluZy1jeWFuLTEgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgY2FyZXQtY3lhbi0xXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3gtYm9yZGVyIG91dGxpbmUtbm9uZSBzZWxmLWNlbnRlciByZWxhdGl2ZSB3LTMyIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgdGV4dC1jZW50ZXIgZm9udC1zZW1pYm9sZCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBiZy1ncmF5LTEyIHRleHQtZ3JheS0xIHRleHQtc20gaC0xMCBweC00IGhvdmVyOmJnLWN5YW4tMSBmb2N1czpiZy1jeWFuLTFcIiBkaXNhYmxlZD17aXNTYXZpbmd9PlxuICAgICAgICAgICAgICAgIDxMb3R0aWVcbiAgICAgICAgICAgICAgICAgIGxvdHRpZVJlZj17bWFpbEljb25SZWZ9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0xIHctNSBoLTVcIlxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRGF0YT17bWFpbEljb259XG4gICAgICAgICAgICAgICAgICBsb29wPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgIGF1dG9wbGF5PXtmYWxzZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlbGF0aXZlIHRvcC1weFwiPlxuICAgICAgICAgICAgICAgICAge3N1Ym1pdExhYmVsfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkIiwiTG90dGllIiwibWFpbEljb24iLCJIb21lIiwibWFpbEljb25SZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImlzU2F2aW5nIiwic2V0SXNTYXZpbmciLCJzdWJtaXRMYWJlbCIsInNldFN1Ym1pdExhYmVsIiwib25Gb3JtU3VibWl0IiwiZSIsImlzUHJvZCIsImJhc2UiLCJwcmV2ZW50RGVmYXVsdCIsInByb2Nlc3MiLCJjdXJyZW50IiwicGxheSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZW1haWxfYWRkcmVzcyIsInRhcmdldCIsImVtYWlsIiwidmFsdWUiLCJhbGVydCIsInJlc2V0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm1ldGEiLCJjb250ZW50IiwicHJvcGVydHkiLCJuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwibmF2IiwiYSIsImhyZWYiLCJpbWciLCJzcmMiLCJhbHQiLCJwIiwiaDEiLCJiciIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJidXR0b24iLCJkaXNhYmxlZCIsImxvdHRpZVJlZiIsImFuaW1hdGlvbkRhdGEiLCJsb29wIiwiYXV0b3BsYXkiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});