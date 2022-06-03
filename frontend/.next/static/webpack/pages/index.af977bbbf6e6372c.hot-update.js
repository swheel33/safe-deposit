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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ContractForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ \"./node_modules/yup/es/index.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\nfunction ContractForm() {\n    var _this = this;\n    var schema = yup__WEBPACK_IMPORTED_MODULE_2__.object({\n        address: yup__WEBPACK_IMPORTED_MODULE_2__.string().required(\"Required\").matches(/^0x[a-fA-F0-9]{40}$/, \"Must match a contract address (0x...)\")\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {\n        onSubmit: console.log,\n        validationSchema: schema,\n        initialValues: {\n            address: \"\"\n        },\n        children: function(props) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {\n                        name: \"name\",\n                        validate: validateName,\n                        children: function(param) {\n                            var field = param.field, form = param.form;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                                isInvalid: form.errors.name && form.touched.name,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                                        htmlFor: \"name\",\n                                        children: \"First name\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/ContractForm.tsx\",\n                                        lineNumber: 24,\n                                        columnNumber: 21\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, _objectSpread({}, field, {\n                                        id: \"name\",\n                                        placeholder: \"name\"\n                                    }), void 0, false, {\n                                        fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/ContractForm.tsx\",\n                                        lineNumber: 25,\n                                        columnNumber: 21\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormErrorMessage, {\n                                        children: form.errors.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/ContractForm.tsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 21\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/ContractForm.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 17\n                            }, _this);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/ContractForm.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        mt: 4,\n                        colorScheme: \"teal\",\n                        isLoading: props.isSubmitting,\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/ContractForm.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/ContractForm.tsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, _this);\n        }\n    }, void 0, false, {\n        fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/ContractForm.tsx\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, this);\n};\n_c = ContractForm;\nvar _c;\n$RefreshReg$(_c, \"ContractForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRyYWN0Rm9ybS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW9IO0FBQ3hFO0FBQ2xCO0FBSVgsU0FBU1MsWUFBWSxHQUFHOztJQUNuQyxJQUFNQyxNQUFNLEdBQUdGLHVDQUFVLENBQUM7UUFDdEJJLE9BQU8sRUFBRUosdUNBQVUsRUFBRSxDQUNaTSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQ3BCQyxPQUFPLHdCQUF3Qix1Q0FBdUMsQ0FBQztLQUNuRixDQUFDO0lBRUYscUJBQ0ksOERBQUNWLDBDQUFNO1FBQ1BXLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHO1FBQ3JCQyxnQkFBZ0IsRUFBRVQsTUFBTTtRQUN4QlUsYUFBYSxFQUFFO1lBQUNSLE9BQU8sRUFBRSxFQUFFO1NBQUM7a0JBQ3ZCLFNBQUNTLEtBQUs7aUNBQ1AsOERBQUNmLHdDQUFJOztrQ0FDTCw4REFBQ0MseUNBQUs7d0JBQUNlLElBQUksRUFBQyxNQUFNO3dCQUFDQyxRQUFRLEVBQUVDLFlBQVk7a0NBQ3BDO2dDQUFHQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsSUFBSSxTQUFKQSxJQUFJO2lEQUNmLDhEQUFDekIseURBQVc7Z0NBQUMwQixTQUFTLEVBQUVELElBQUksQ0FBQ0UsTUFBTSxDQUFDTixJQUFJLElBQUlJLElBQUksQ0FBQ0csT0FBTyxDQUFDUCxJQUFJOztrREFDekQsOERBQUNsQix1REFBUzt3Q0FBQzBCLE9BQU8sRUFBQyxNQUFNO2tEQUFDLFlBQVU7Ozs7OzZDQUFZO2tEQUNoRCw4REFBQzNCLG1EQUFLLG9CQUFLc0IsS0FBSzt3Q0FBRU0sRUFBRSxFQUFDLE1BQU07d0NBQUNDLFdBQVcsRUFBQyxNQUFNOzs7Ozs2Q0FBRztrREFDakQsOERBQUM5Qiw4REFBZ0I7a0RBQUV3QixJQUFJLENBQUNFLE1BQU0sQ0FBQ04sSUFBSTs7Ozs7NkNBQW9COzs7Ozs7cUNBQzdDO3lCQUNiOzs7Ozs2QkFDRztrQ0FDUiw4REFBQ3RCLG9EQUFNO3dCQUNIaUMsRUFBRSxFQUFFLENBQUM7d0JBQ0xDLFdBQVcsRUFBQyxNQUFNO3dCQUNsQkMsU0FBUyxFQUFFZCxLQUFLLENBQUNlLFlBQVk7d0JBQzdCQyxJQUFJLEVBQUMsUUFBUTtrQ0FDaEIsUUFFRDs7Ozs7NkJBQVM7Ozs7OztxQkFDRjtTQUNWOzs7OztZQUNRLENBRVo7Q0FDSjtBQXBDdUI1QixLQUFBQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29udHJhY3RGb3JtLnRzeD85NjM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgQ29udGFpbmVyLCBGb3JtQ29udHJvbCwgRm9ybUVycm9yTWVzc2FnZSwgSW5wdXQsIEZvcm1MYWJlbCwgVlN0YWNrLCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tICdmb3JtaWsnXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSAneXVwJ1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udHJhY3RGb3JtKCkge1xuICAgIGNvbnN0IHNjaGVtYSA9IFl1cC5vYmplY3Qoe1xuICAgICAgICBhZGRyZXNzOiBZdXAuc3RyaW5nKClcbiAgICAgICAgICAgICAgICAucmVxdWlyZWQoJ1JlcXVpcmVkJylcbiAgICAgICAgICAgICAgICAubWF0Y2hlcygvXjB4W2EtZkEtRjAtOV17NDB9JC8sICdNdXN0IG1hdGNoIGEgY29udHJhY3QgYWRkcmVzcyAoMHguLi4pJylcbiAgICB9KVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxGb3JtaWtcbiAgICAgICAgb25TdWJtaXQ9e2NvbnNvbGUubG9nfVxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtzY2hlbWF9XG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3thZGRyZXNzOiAnJ319PlxuICAgICAgICAgICAgeyhwcm9wcykgPT4gKFxuICAgICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICA8RmllbGQgbmFtZT0nbmFtZScgdmFsaWRhdGU9e3ZhbGlkYXRlTmFtZX0+XG4gICAgICAgICAgICAgICAgeyh7IGZpZWxkLCBmb3JtIH0pID0+IChcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgaXNJbnZhbGlkPXtmb3JtLmVycm9ycy5uYW1lICYmIGZvcm0udG91Y2hlZC5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPSduYW1lJz5GaXJzdCBuYW1lPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCB7Li4uZmllbGR9IGlkPSduYW1lJyBwbGFjZWhvbGRlcj0nbmFtZScgLz5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1FcnJvck1lc3NhZ2U+e2Zvcm0uZXJyb3JzLm5hbWV9PC9Gb3JtRXJyb3JNZXNzYWdlPlxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgbXQ9ezR9XG4gICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9J3RlYWwnXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nPXtwcm9wcy5pc1N1Ym1pdHRpbmd9XG4gICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICl9XG4gICAgICAgIDwvRm9ybWlrPlxuICAgICAgICBcbiAgICApXG59Il0sIm5hbWVzIjpbIkJ1dHRvbiIsIkZvcm1Db250cm9sIiwiRm9ybUVycm9yTWVzc2FnZSIsIklucHV0IiwiRm9ybUxhYmVsIiwiRm9ybWlrIiwiRm9ybSIsIkZpZWxkIiwiWXVwIiwiQ29udHJhY3RGb3JtIiwic2NoZW1hIiwib2JqZWN0IiwiYWRkcmVzcyIsInN0cmluZyIsInJlcXVpcmVkIiwibWF0Y2hlcyIsIm9uU3VibWl0IiwiY29uc29sZSIsImxvZyIsInZhbGlkYXRpb25TY2hlbWEiLCJpbml0aWFsVmFsdWVzIiwicHJvcHMiLCJuYW1lIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZU5hbWUiLCJmaWVsZCIsImZvcm0iLCJpc0ludmFsaWQiLCJlcnJvcnMiLCJ0b3VjaGVkIiwiaHRtbEZvciIsImlkIiwicGxhY2Vob2xkZXIiLCJtdCIsImNvbG9yU2NoZW1lIiwiaXNMb2FkaW5nIiwiaXNTdWJtaXR0aW5nIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ContractForm.tsx\n");

/***/ })

});