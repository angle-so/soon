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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var C_Users_sagni_OneDrive_Desktop_website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_sagni_OneDrive_Desktop_website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_sagni_OneDrive_Desktop_website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var mailIconRef = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(null);\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_2___default().useState(false), 2), isSaving = ref[0], setIsSaving = ref[1];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_2___default().useState(\"Notify me\"), 2), submitLabel = ref1[0], setSubmitLabel = ref1[1];\n    var onFormSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(C_Users_sagni_OneDrive_Desktop_website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var isProd, base;\n            return C_Users_sagni_OneDrive_Desktop_website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        e.preventDefault();\n                        setIsSaving(true);\n                        setSubmitLabel(\"Done!\");\n                        isProd = \"development\" === \"production\";\n                        base = isProd ? \"https://react.email\" : \"http://localhost:3000\";\n                        mailIconRef.current.play();\n                        _ctx.next = 9;\n                        return fetch(\"\".concat(base, \"/api/save\"), {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify({\n                                email_address: e.target.email.value\n                            })\n                        });\n                    case 9:\n                        _ctx.next = 14;\n                        break;\n                    case 11:\n                        _ctx.prev = 11;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        alert(\"Something went wrong, try again later.\");\n                    case 14:\n                        _ctx.prev = 14;\n                        e.target.reset();\n                        setIsSaving(false);\n                        return _ctx.finish(14);\n                    case 18:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    11,\n                    14,\n                    18\n                ]\n            ]);\n        }));\n        return function onFormSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var title = \"Angle Mail\";\n    var description = \"Next-gen email client .\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        content: title,\n                        property: \"og:title\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        content: description,\n                        name: \"description\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        content: description,\n                        property: \"og:description\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        content: \"https://angle.so\",\n                        property: \"og:url\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"absolute w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"nav\", {\n                        className: \"max-w-6xl mx-auto px-6 flex-col items-center justify-between mt-6 mb-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                src: \"/static/logo.svg\",\n                                alt: \"React Email\",\n                                className: \"h-8\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex min-h-screen flex-col justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"mx-auto max-w-5xl items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col text-center px-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"text-gray-10 text-sm font-medium uppercase mb-4\",\n                                children: \"Coming Soon\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                className: \"text-gray-12 text-5xl font-bold mb-6\",\n                                children: \"Join the Waitlist.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"text-gray-11 text-lg mb-6\",\n                                children: \"Be one of the first ones to try the next-gen email experience.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                                className: \"flex gap-2 mx-auto\",\n                                onSubmit: onFormSubmit,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                        type: \"email\",\n                                        name: \"email\",\n                                        placeholder: \"you@example.com\",\n                                        className: \"outline-none bg-gray-3 hover:bg-gray-4 focus:bg-gray-4 w-44 text-sm px-4 h-10 rounded-xl \",\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                        className: \"box-border outline-none self-center relative w-32 inline-flex items-center justify-center rounded-xl transition hover:scale-110 hover:-rotate-2 active:bg-indigo-500 focus:outline-none focus:ring\",\n                                        disabled: isSaving,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                            src: \"/static/submit.svg\",\n                                            alt: \"submit Icon\",\n                                            className: \"absolute left-0 ml-4\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\website\\\\pages\\\\index.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"4/7JMXpiCLM2CYUzFbvMQPdT1eQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUEwQjtBQUNHOztBQUlkLFNBQVNFLElBQUksR0FBRzs7SUFDN0IsSUFBTUMsV0FBVyxHQUFHSCxtREFBWSxDQUF3QixJQUFJLENBQUM7SUFDN0QsSUFBZ0NBLEdBQXFCLG9GQUFyQkEscURBQWMsQ0FBQyxLQUFLLENBQUMsTUFBOUNNLFFBQVEsR0FBaUJOLEdBQXFCLEdBQXRDLEVBQUVPLFdBQVcsR0FBSVAsR0FBcUIsR0FBekI7SUFDNUIsSUFBc0NBLElBQTJCLG9GQUEzQkEscURBQWMsQ0FBQyxXQUFXLENBQUMsTUFBMURRLFdBQVcsR0FBb0JSLElBQTJCLEdBQS9DLEVBQUVTLGNBQWMsR0FBSVQsSUFBMkIsR0FBL0I7SUFFbEMsSUFBTVUsWUFBWTttQkFBRyx1UEFBT0MsQ0FBQyxFQUFLO2dCQU14QkMsTUFBTSxFQUNOQyxJQUFJOzs7Ozt3QkFMVkYsQ0FBQyxDQUFDRyxjQUFjLEVBQUUsQ0FBQzt3QkFDbkJQLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDbEJFLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFFbEJHLE1BQU0sR0FBR0csYUFoQlIsS0FnQmlDLFlBQVksQ0FBQzt3QkFDL0NGLElBQUksR0FBR0QsTUFBTSxHQUFHLHFCQUFxQixHQUFHLHVCQUF1QixDQUFDO3dCQUV0RVQsV0FBVyxDQUFDYSxPQUFPLENBQUNDLElBQUksRUFBRSxDQUFDOzsrQkFFckJDLEtBQUssQ0FBQyxFQUFDLENBQU8sTUFBUyxDQUFkTCxJQUFJLEVBQUMsV0FBUyxDQUFDLEVBQUU7NEJBQzlCTSxNQUFNLEVBQUUsTUFBTTs0QkFDZEMsT0FBTyxFQUFFO2dDQUFFLGNBQWMsRUFBRSxrQkFBa0I7NkJBQUU7NEJBQy9DQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDO2dDQUNuQkMsYUFBYSxFQUFFYixDQUFDLENBQUNjLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxLQUFLOzZCQUNwQyxDQUFDO3lCQUNILENBQUM7Ozs7Ozs7d0JBR0ZDLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDOzs7d0JBR2hEakIsQ0FBQyxDQUFDYyxNQUFNLENBQUNJLEtBQUssRUFBRSxDQUFDO3dCQUNqQnRCLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7U0FFdEI7d0JBMUJLRyxZQUFZLENBQVVDLENBQUM7OztPQTBCNUI7SUFFRCxJQUFNbUIsS0FBSyxHQUFHLFlBQVk7SUFDMUIsSUFBTUMsV0FBVyxHQUFHLHlCQUF5QjtJQUU3QyxxQkFDRTs7MEJBQ0UsOERBQUM5QixrREFBSTs7a0NBQ0gsOERBQUM2QixPQUFLO2tDQUFFQSxLQUFLOzs7Ozs0QkFBUztrQ0FDdEIsOERBQUNFLE1BQUk7d0JBQUNDLE9BQU8sRUFBRUgsS0FBSzt3QkFBRUksUUFBUSxFQUFDLFVBQVU7Ozs7OzRCQUFHO2tDQUM1Qyw4REFBQ0YsTUFBSTt3QkFBQ0MsT0FBTyxFQUFFRixXQUFXO3dCQUFFSSxJQUFJLEVBQUMsYUFBYTs7Ozs7NEJBQUc7a0NBQ2pELDhEQUFDSCxNQUFJO3dCQUFDQyxPQUFPLEVBQUVGLFdBQVc7d0JBQUVHLFFBQVEsRUFBQyxnQkFBZ0I7Ozs7OzRCQUFHO2tDQUN4RCw4REFBQ0YsTUFBSTt3QkFBQ0MsT0FBTyxFQUFDLGtCQUFrQjt3QkFBQ0MsUUFBUSxFQUFDLFFBQVE7Ozs7OzRCQUFHOzs7Ozs7b0JBQ2hEOzBCQUNQLDhEQUFDRSxLQUFHOzBCQUNGLDRFQUFDQSxLQUFHO29CQUFDQyxTQUFTLEVBQUMsaUJBQWlCOzhCQUM5Qiw0RUFBQ0MsS0FBRzt3QkFBQ0QsU0FBUyxFQUFDLHdFQUF3RTtrQ0FDckYsNEVBQUNFLEdBQUM7NEJBQUNDLElBQUksRUFBQyxHQUFHO3NDQUNYLDRFQUFDQyxLQUFHO2dDQUFDQyxHQUFHLEVBQUMsa0JBQWtCO2dDQUFDQyxHQUFHLEVBQUMsYUFBYTtnQ0FBQ04sU0FBUyxFQUFDLEtBQUs7Ozs7O29DQUFHOzs7OztnQ0FFNUQ7Ozs7OzRCQUVBOzs7Ozt3QkFDRjs7Ozs7b0JBQ0Y7MEJBQ04sOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQywyQ0FBMkM7MEJBQ3hELDRFQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsK0NBQStDOzhCQUM1RCw0RUFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLGdDQUFnQzs7MENBQzdDLDhEQUFDTyxHQUFDO2dDQUFDUCxTQUFTLEVBQUMsaURBQWlEOzBDQUFDLGFBRS9EOzs7OztvQ0FBSTswQ0FDSiw4REFBQ1EsSUFBRTtnQ0FBQ1IsU0FBUyxFQUFDLHNDQUFzQzswQ0FBQyxvQkFFckQ7Ozs7O29DQUFLOzBDQUNMLDhEQUFDTyxHQUFDO2dDQUFDUCxTQUFTLEVBQUMsMkJBQTJCOzBDQUFDLGdFQUV6Qzs7Ozs7b0NBQUk7MENBQ0osOERBQUNTLE1BQUk7Z0NBQUNULFNBQVMsRUFBQyxvQkFBb0I7Z0NBQUNVLFFBQVEsRUFBRXJDLFlBQVk7O2tEQUN6RCw4REFBQ3NDLE9BQUs7d0NBQUNDLElBQUksRUFBQyxPQUFPO3dDQUFDZCxJQUFJLEVBQUMsT0FBTzt3Q0FBQ2UsV0FBVyxFQUFDLGlCQUFpQjt3Q0FBQ2IsU0FBUyxFQUFDLDJGQUEyRjt3Q0FBQ2MsUUFBUTs7Ozs7NENBQUc7a0RBQ2hMLDhEQUFDQyxRQUFNO3dDQUFDZixTQUFTLEVBQUMsb01BQW9NO3dDQUFDZ0IsUUFBUSxFQUFFL0MsUUFBUTtrREFDdk8sNEVBQUNtQyxLQUFHOzRDQUFDQyxHQUFHLEVBQUMsb0JBQW9COzRDQUFDQyxHQUFHLEVBQUMsYUFBYTs0Q0FBQ04sU0FBUyxFQUFDLHNCQUFzQjs7Ozs7Z0RBQUc7Ozs7OzRDQUc1RTs7Ozs7O29DQUNKOzs7Ozs7NEJBQ0g7Ozs7O3dCQUNGOzs7OztvQkFDRjs7b0JBQ0wsQ0FDSDtDQUNIO0dBakZ1Qm5DLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMb3R0aWUsIHsgTG90dGllUmVmQ3VycmVudFByb3BzIH0gZnJvbSAnbG90dGllLXJlYWN0JztcbmltcG9ydCBtYWlsSWNvbiBmcm9tICcuLi9wdWJsaWMvc3RhdGljL2ljb25zL21haWwuanNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IG1haWxJY29uUmVmID0gUmVhY3QudXNlUmVmPExvdHRpZVJlZkN1cnJlbnRQcm9wcz4obnVsbCk7XG4gIGNvbnN0IFtpc1NhdmluZywgc2V0SXNTYXZpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc3VibWl0TGFiZWwsIHNldFN1Ym1pdExhYmVsXSA9IFJlYWN0LnVzZVN0YXRlKCdOb3RpZnkgbWUnKTtcbiAgXG4gIGNvbnN0IG9uRm9ybVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHNldElzU2F2aW5nKHRydWUpO1xuICAgICAgc2V0U3VibWl0TGFiZWwoJ0RvbmUhJyk7XG5cbiAgICAgIGNvbnN0IGlzUHJvZCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG4gICAgICBjb25zdCBiYXNlID0gaXNQcm9kID8gJ2h0dHBzOi8vcmVhY3QuZW1haWwnIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCc7XG5cbiAgICAgIG1haWxJY29uUmVmLmN1cnJlbnQucGxheSgpO1xuXG4gICAgICBhd2FpdCBmZXRjaChgJHtiYXNlfS9hcGkvc2F2ZWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgZW1haWxfYWRkcmVzczogZS50YXJnZXQuZW1haWwudmFsdWVcbiAgICAgICAgfSksXG4gICAgICB9KTtcbiAgICB9XG4gICAgY2F0Y2goZSkge1xuICAgICAgYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nLCB0cnkgYWdhaW4gbGF0ZXIuJyk7XG4gICAgfVxuICAgIGZpbmFsbHkge1xuICAgICAgZS50YXJnZXQucmVzZXQoKTtcbiAgICAgIHNldElzU2F2aW5nKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCB0aXRsZSA9ICdBbmdsZSBNYWlsJztcbiAgY29uc3QgZGVzY3JpcHRpb24gPSAnTmV4dC1nZW4gZW1haWwgY2xpZW50IC4nO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIGNvbnRlbnQ9e3RpdGxlfSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgLz5cbiAgICAgICAgPG1ldGEgY29udGVudD17ZGVzY3JpcHRpb259IG5hbWU9XCJkZXNjcmlwdGlvblwiIC8+XG4gICAgICAgIDxtZXRhIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgLz5cbiAgICAgICAgPG1ldGEgY29udGVudD1cImh0dHBzOi8vYW5nbGUuc29cIiBwcm9wZXJ0eT1cIm9nOnVybFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHctZnVsbFwiPlxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG8gcHgtNiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG10LTYgbWItNFwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9sb2dvLnN2Z1wiIGFsdD1cIlJlYWN0IEVtYWlsXCIgY2xhc3NOYW1lPVwiaC04XCIgLz5cblxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy01eGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHRleHQtY2VudGVyIHB4LTRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS0xMCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHVwcGVyY2FzZSBtYi00XCI+XG4gICAgICAgICAgICAgIENvbWluZyBTb29uXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTEyIHRleHQtNXhsIGZvbnQtYm9sZCBtYi02XCI+XG4gICAgICAgICAgICAgIEpvaW4gdGhlIFdhaXRsaXN0LlxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS0xMSB0ZXh0LWxnIG1iLTZcIj5cbiAgICAgICAgICAgIEJlIG9uZSBvZiB0aGUgZmlyc3Qgb25lcyB0byB0cnkgdGhlIG5leHQtZ2VuIGVtYWlsIGV4cGVyaWVuY2UuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIG14LWF1dG9cIiBvblN1Ym1pdD17b25Gb3JtU3VibWl0fT5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwieW91QGV4YW1wbGUuY29tXCIgY2xhc3NOYW1lPVwib3V0bGluZS1ub25lIGJnLWdyYXktMyBob3ZlcjpiZy1ncmF5LTQgZm9jdXM6YmctZ3JheS00IHctNDQgdGV4dC1zbSBweC00IGgtMTAgcm91bmRlZC14bCBcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJveC1ib3JkZXIgb3V0bGluZS1ub25lIHNlbGYtY2VudGVyIHJlbGF0aXZlIHctMzIgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQteGwgdHJhbnNpdGlvbiBob3ZlcjpzY2FsZS0xMTAgaG92ZXI6LXJvdGF0ZS0yIGFjdGl2ZTpiZy1pbmRpZ28tNTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nXCIgZGlzYWJsZWQ9e2lzU2F2aW5nfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvc3VibWl0LnN2Z1wiIGFsdD1cInN1Ym1pdCBJY29uXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0wIG1sLTRcIiAvPlxuICAgICAgICAgICAgICAgIFxuICBcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkIiwiSG9tZSIsIm1haWxJY29uUmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJpc1NhdmluZyIsInNldElzU2F2aW5nIiwic3VibWl0TGFiZWwiLCJzZXRTdWJtaXRMYWJlbCIsIm9uRm9ybVN1Ym1pdCIsImUiLCJpc1Byb2QiLCJiYXNlIiwicHJldmVudERlZmF1bHQiLCJwcm9jZXNzIiwiY3VycmVudCIsInBsYXkiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImVtYWlsX2FkZHJlc3MiLCJ0YXJnZXQiLCJlbWFpbCIsInZhbHVlIiwiYWxlcnQiLCJyZXNldCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJtZXRhIiwiY29udGVudCIsInByb3BlcnR5IiwibmFtZSIsImRpdiIsImNsYXNzTmFtZSIsIm5hdiIsImEiLCJocmVmIiwiaW1nIiwic3JjIiwiYWx0IiwicCIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsImJ1dHRvbiIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});