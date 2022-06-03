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

/***/ "./components/ContractForm.tsx":
/*!*************************************!*\
  !*** ./components/ContractForm.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ContractForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ \"./node_modules/yup/es/index.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\n\n\n\n\nfunction ContractForm(param) {\n    var setNewContract = param.setNewContract, allPrevContracts = param.allPrevContracts;\n    var _this = this;\n    var prevContracts = allPrevContracts();\n    var doThing = function() {\n        console.log(prevContracts);\n        console.log(typeof prevContracts === \"undefined\" ? \"undefined\" : _typeof(prevContracts));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {\n        initialValues: {\n            address: \"\"\n        },\n        validationSchema: yup__WEBPACK_IMPORTED_MODULE_2__.object({\n            address: yup__WEBPACK_IMPORTED_MODULE_2__.string().required(\"Required\")\n        }),\n        onSubmit: function(values, actions) {\n            setNewContract(values.address);\n            actions.resetForm();\n        },\n        children: function(formik) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {\n                onSubmit: formik.handleSubmit,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {\n                    w: \"50%\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                            isInvalid: formik.errors.address && formik.touched.address,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                                    children: \"Contract Address\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/ContractForm.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, _objectSpread({\n                                    as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input,\n                                    name: \"address\",\n                                    value: formik.values.address\n                                }, formik.getFieldProps(\"address\")), void 0, false, {\n                                    fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/ContractForm.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormErrorMessage, {\n                                    children: formik.errors.address\n                                }, void 0, false, {\n                                    fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/ContractForm.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/ContractForm.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            disabled: formik.isSubmitting,\n                            type: \"submit\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/ContractForm.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            onClick: doThing,\n                            children: \"Hi\"\n                        }, void 0, false, {\n                            fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/ContractForm.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/ContractForm.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/ContractForm.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, _this);\n        }\n    }, void 0, false, {\n        fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/ContractForm.tsx\",\n        lineNumber: 16,\n        columnNumber: 6\n    }, this);\n};\n_c = ContractForm;\nvar _c;\n$RefreshReg$(_c, \"ContractForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRyYWN0Rm9ybS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3RztBQUM1RDtBQUNsQjtBQUlYLFNBQVNVLFlBQVksQ0FBQyxLQUFrQyxFQUFFO1FBQW5DQyxjQUFjLEdBQWYsS0FBa0MsQ0FBakNBLGNBQWMsRUFBRUMsZ0JBQWdCLEdBQWpDLEtBQWtDLENBQWpCQSxnQkFBZ0I7O0lBQ2xFLElBQU1DLGFBQWEsR0FBR0QsZ0JBQWdCLEVBQUU7SUFFeEMsSUFBTUUsT0FBTyxHQUFHLFdBQU07UUFDbEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxhQUFhLENBQUMsQ0FBQztRQUMzQkUsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBT0gsYUFBYSxpQ0FBcEIsT0FBb0IsQ0FBYkEsYUFBYSxFQUFDLENBQUM7S0FDckM7SUFFRCxxQkFDQyw4REFBQ1AsMENBQU07UUFDUFcsYUFBYSxFQUFFO1lBQUNDLE9BQU8sRUFBRSxFQUFFO1NBQUM7UUFDNUJDLGdCQUFnQixFQUFFVix1Q0FBVSxDQUFDO1lBQzFCUyxPQUFPLEVBQUVULHVDQUFVLEVBQUUsQ0FDaEJhLFFBQVEsQ0FBQyxVQUFVLENBQUM7U0FDeEIsQ0FBQztRQUNGQyxRQUFRLEVBQUUsU0FBQ0MsTUFBTSxFQUFDQyxPQUFPLEVBQUs7WUFDMUJkLGNBQWMsQ0FBQ2EsTUFBTSxDQUFDTixPQUFPLENBQUM7WUFDOUJPLE9BQU8sQ0FBQ0MsU0FBUyxFQUFFLENBQUM7U0FDdkI7a0JBRUFDLFNBQUFBLE1BQU07aUNBQ0gsOERBQUNuQix3Q0FBSTtnQkFBQ2UsUUFBUSxFQUFFSSxNQUFNLENBQUNDLFlBQVk7MEJBQy9CLDRFQUFDdkIsb0RBQU07b0JBQUN3QixDQUFDLEVBQUUsS0FBSzs7c0NBQ1osOERBQUM1Qix5REFBVzs0QkFBQzZCLFNBQVMsRUFBRUgsTUFBTSxDQUFDSSxNQUFNLENBQUNiLE9BQU8sSUFBSVMsTUFBTSxDQUFDSyxPQUFPLENBQUNkLE9BQU87OzhDQUNuRSw4REFBQ2QsdURBQVM7OENBQUMsa0JBQWdCOzs7Ozt5Q0FBWTs4Q0FDdkMsOERBQUNHLHlDQUFLO29DQUFDMEIsRUFBRSxFQUFFOUIsbURBQUs7b0NBQUUrQixJQUFJLEVBQUMsU0FBUztvQ0FBQ0MsS0FBSyxFQUFFUixNQUFNLENBQUNILE1BQU0sQ0FBQ04sT0FBTzttQ0FBTVMsTUFBTSxDQUFDUyxhQUFhLENBQUMsU0FBUyxDQUFDOzs7O3lDQUFHOzhDQUNyRyw4REFBQ2xDLDhEQUFnQjs4Q0FBRXlCLE1BQU0sQ0FBQ0ksTUFBTSxDQUFDYixPQUFPOzs7Ozt5Q0FBb0I7Ozs7OztpQ0FDbEQ7c0NBQ2QsOERBQUNsQixvREFBTTs0QkFBQ3FDLFFBQVEsRUFBRVYsTUFBTSxDQUFDVyxZQUFZOzRCQUFFQyxJQUFJLEVBQUMsUUFBUTtzQ0FBQyxRQUFNOzs7OztpQ0FBUztzQ0FDcEUsOERBQUN2QyxvREFBTTs0QkFBQ3dDLE9BQU8sRUFBRTFCLE9BQU87c0NBQUUsSUFBRTs7Ozs7aUNBQVM7Ozs7Ozt5QkFDaEM7Ozs7O3FCQUNOO1NBRVY7Ozs7O1lBQ0ssQ0FJVDtDQUNKO0FBdkN1QkosS0FBQUEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbnRyYWN0Rm9ybS50c3g/OTYzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIEZvcm1Db250cm9sLCBGb3JtRXJyb3JNZXNzYWdlLCBJbnB1dCwgRm9ybUxhYmVsLCBWU3RhY2ssIEJveCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBGb3JtaWssIEZpZWxkLCBGb3JtIH0gZnJvbSAnZm9ybWlrJ1xuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCdcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRyYWN0Rm9ybSh7c2V0TmV3Q29udHJhY3QsIGFsbFByZXZDb250cmFjdHN9KSB7XG4gICAgY29uc3QgcHJldkNvbnRyYWN0cyA9IGFsbFByZXZDb250cmFjdHMoKTtcbiAgICBcbiAgICBjb25zdCBkb1RoaW5nID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwcmV2Q29udHJhY3RzKTtcbiAgICAgICAgY29uc29sZS5sb2codHlwZW9mIHByZXZDb250cmFjdHMpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgIDxGb3JtaWtcbiAgICAgaW5pdGlhbFZhbHVlcz17e2FkZHJlc3M6ICcnfX1cbiAgICAgdmFsaWRhdGlvblNjaGVtYT17WXVwLm9iamVjdCh7XG4gICAgICAgIGFkZHJlc3M6IFl1cC5zdHJpbmcoKVxuICAgICAgICAgICAgLnJlcXVpcmVkKCdSZXF1aXJlZCcpXG4gICAgICAgIH0pfVxuICAgICAgICBvblN1Ym1pdD17KHZhbHVlcyxhY3Rpb25zKSA9PiB7XG4gICAgICAgICAgICBzZXROZXdDb250cmFjdCh2YWx1ZXMuYWRkcmVzcylcbiAgICAgICAgICAgIGFjdGlvbnMucmVzZXRGb3JtKCk7XG4gICAgICAgIH19XG4gICAgID5cbiAgICAgICAge2Zvcm1payA9PiAgKFxuICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxWU3RhY2sgdz17JzUwJSd9PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgaXNJbnZhbGlkPXtmb3JtaWsuZXJyb3JzLmFkZHJlc3MgJiYgZm9ybWlrLnRvdWNoZWQuYWRkcmVzc30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPkNvbnRyYWN0IEFkZHJlc3M8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBhcz17SW5wdXR9IG5hbWU9J2FkZHJlc3MnIHZhbHVlPXtmb3JtaWsudmFsdWVzLmFkZHJlc3N9IHsuLi5mb3JtaWsuZ2V0RmllbGRQcm9wcygnYWRkcmVzcycpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUVycm9yTWVzc2FnZT57Zm9ybWlrLmVycm9ycy5hZGRyZXNzfTwvRm9ybUVycm9yTWVzc2FnZT5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17Zm9ybWlrLmlzU3VibWl0dGluZ30gdHlwZT0nc3VibWl0Jz5TdWJtaXQ8L0J1dHRvbj4gXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17ZG9UaGluZ30+SGk8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L1ZTdGFjaz5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgXG4gICAgICAgICl9XG4gICAgIDwvRm9ybWlrPlxuICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICBcbiAgICApXG59Il0sIm5hbWVzIjpbIkJ1dHRvbiIsIkZvcm1Db250cm9sIiwiRm9ybUVycm9yTWVzc2FnZSIsIklucHV0IiwiRm9ybUxhYmVsIiwiVlN0YWNrIiwiRm9ybWlrIiwiRmllbGQiLCJGb3JtIiwiWXVwIiwiQ29udHJhY3RGb3JtIiwic2V0TmV3Q29udHJhY3QiLCJhbGxQcmV2Q29udHJhY3RzIiwicHJldkNvbnRyYWN0cyIsImRvVGhpbmciLCJjb25zb2xlIiwibG9nIiwiaW5pdGlhbFZhbHVlcyIsImFkZHJlc3MiLCJ2YWxpZGF0aW9uU2NoZW1hIiwib2JqZWN0Iiwic3RyaW5nIiwicmVxdWlyZWQiLCJvblN1Ym1pdCIsInZhbHVlcyIsImFjdGlvbnMiLCJyZXNldEZvcm0iLCJmb3JtaWsiLCJoYW5kbGVTdWJtaXQiLCJ3IiwiaXNJbnZhbGlkIiwiZXJyb3JzIiwidG91Y2hlZCIsImFzIiwibmFtZSIsInZhbHVlIiwiZ2V0RmllbGRQcm9wcyIsImRpc2FibGVkIiwiaXNTdWJtaXR0aW5nIiwidHlwZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ContractForm.tsx\n");

/***/ })

});