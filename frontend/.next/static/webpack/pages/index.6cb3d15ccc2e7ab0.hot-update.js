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

/***/ "./components/MetamaskDApp.tsx":
/*!*************************************!*\
  !*** ./components/MetamaskDApp.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MetamaskDApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../connectors/metaMask */ \"./connectors/metaMask.ts\");\n/* harmony import */ var _DApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DApp */ \"./components/DApp.tsx\");\n\n\n\nvar _s = $RefreshSig$();\nfunction MetamaskDApp() {\n    _s();\n    var useChainId = _connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__.hooks.useChainId, useAccounts = _connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__.hooks.useAccounts, useError = _connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__.hooks.useError, useIsActivating = _connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__.hooks.useIsActivating, useIsActive = _connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__.hooks.useIsActive, useProvider = _connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__.hooks.useProvider, useENSNames = _connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__.hooks.useENSNames;\n    var chainId = useChainId();\n    var accounts = useAccounts();\n    var error = useError();\n    var isActivating = useIsActivating();\n    var isActive = useIsActive();\n    var provider = useProvider();\n    var ENSNames = useENSNames(provider);\n    provider.on(\"network\", (newNetwork, oldNetwork));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DApp__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        chainId: chainId,\n        accounts: accounts,\n        error: error,\n        isActivating: isActivating,\n        isActive: isActive,\n        provider: provider,\n        ENSNames: ENSNames\n    }, void 0, false, {\n        fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/MetamaskDApp.tsx\",\n        lineNumber: 19,\n        columnNumber: 10\n    }, this);\n};\n_s(MetamaskDApp, \"9b8gVrSAbrGOj/ZfBLfjdOSotPo=\", true);\n_c = MetamaskDApp;\nvar _c;\n$RefreshReg$(_c, \"MetamaskDApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01ldGFtYXNrREFwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUE4QztBQUNwQjs7QUFHWCxTQUFTRSxZQUFZLEdBQUc7O0lBQ25DLElBQVFDLFVBQVUsR0FBb0ZILGtFQUFwRixFQUFFSSxXQUFXLEdBQXVFSixtRUFBdkUsRUFBRUssUUFBUSxHQUE2REwsZ0VBQTdELEVBQUVNLGVBQWUsR0FBNENOLHVFQUE1QyxFQUFFTyxXQUFXLEdBQStCUCxtRUFBL0IsRUFBRVEsV0FBVyxHQUFrQlIsbUVBQWxCLEVBQUVTLFdBQVcsR0FBS1QsbUVBQUw7SUFFakcsSUFBTVUsT0FBTyxHQUFHUCxVQUFVLEVBQUU7SUFDNUIsSUFBTVEsUUFBUSxHQUFHUCxXQUFXLEVBQUU7SUFDOUIsSUFBTVEsS0FBSyxHQUFHUCxRQUFRLEVBQUU7SUFDeEIsSUFBTVEsWUFBWSxHQUFHUCxlQUFlLEVBQUU7SUFDdEMsSUFBTVEsUUFBUSxHQUFHUCxXQUFXLEVBQUU7SUFDOUIsSUFBTVEsUUFBUSxHQUFHUCxXQUFXLEVBQUU7SUFDOUIsSUFBTVEsUUFBUSxHQUFHUCxXQUFXLENBQUNNLFFBQVEsQ0FBQztJQUV0Q0EsUUFBUSxDQUFDRSxFQUFFLENBQUMsU0FBUyxFQUFHQyxDQUFBQSxVQUFVLEVBQUVDLFVBQVUsRUFBRTtJQUVoRCxxQkFDSyw4REFBQ2xCLDZDQUFJO1FBQ05TLE9BQU8sRUFBRUEsT0FBTztRQUNoQkMsUUFBUSxFQUFFQSxRQUFRO1FBQ2xCQyxLQUFLLEVBQUVBLEtBQUs7UUFDWkMsWUFBWSxFQUFFQSxZQUFZO1FBQzFCQyxRQUFRLEVBQUVBLFFBQVE7UUFDbEJDLFFBQVEsRUFBRUEsUUFBUTtRQUNsQkMsUUFBUSxFQUFFQSxRQUFROzs7OztZQUFHLENBQ3hCO0NBQ0o7R0F2QnVCZCxZQUFZO0FBQVpBLEtBQUFBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXRhbWFza0RBcHAudHN4P2ZkMzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9va3MgfSBmcm9tICcuLi9jb25uZWN0b3JzL21ldGFNYXNrJ1xuaW1wb3J0IERBcHAgZnJvbSAnLi9EQXBwJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZXRhbWFza0RBcHAoKSB7XG4gICAgY29uc3QgeyB1c2VDaGFpbklkLCB1c2VBY2NvdW50cywgdXNlRXJyb3IsIHVzZUlzQWN0aXZhdGluZywgdXNlSXNBY3RpdmUsIHVzZVByb3ZpZGVyLCB1c2VFTlNOYW1lcyB9ID0gaG9va3M7XG5cbiAgICBjb25zdCBjaGFpbklkID0gdXNlQ2hhaW5JZCgpXG4gICAgY29uc3QgYWNjb3VudHMgPSB1c2VBY2NvdW50cygpXG4gICAgY29uc3QgZXJyb3IgPSB1c2VFcnJvcigpXG4gICAgY29uc3QgaXNBY3RpdmF0aW5nID0gdXNlSXNBY3RpdmF0aW5nKClcbiAgICBjb25zdCBpc0FjdGl2ZSA9IHVzZUlzQWN0aXZlKClcbiAgICBjb25zdCBwcm92aWRlciA9IHVzZVByb3ZpZGVyKClcbiAgICBjb25zdCBFTlNOYW1lcyA9IHVzZUVOU05hbWVzKHByb3ZpZGVyKVxuXG4gICAgcHJvdmlkZXIub24oJ25ldHdvcmsnLCAobmV3TmV0d29yaywgb2xkTmV0d29yaykpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICAgPERBcHAgXG4gICAgICAgIGNoYWluSWQ9e2NoYWluSWR9XG4gICAgICAgIGFjY291bnRzPXthY2NvdW50c31cbiAgICAgICAgZXJyb3I9e2Vycm9yfVxuICAgICAgICBpc0FjdGl2YXRpbmc9e2lzQWN0aXZhdGluZ31cbiAgICAgICAgaXNBY3RpdmU9e2lzQWN0aXZlfVxuICAgICAgICBwcm92aWRlcj17cHJvdmlkZXJ9XG4gICAgICAgIEVOU05hbWVzPXtFTlNOYW1lc30vPiBcbiAgICApXG59Il0sIm5hbWVzIjpbImhvb2tzIiwiREFwcCIsIk1ldGFtYXNrREFwcCIsInVzZUNoYWluSWQiLCJ1c2VBY2NvdW50cyIsInVzZUVycm9yIiwidXNlSXNBY3RpdmF0aW5nIiwidXNlSXNBY3RpdmUiLCJ1c2VQcm92aWRlciIsInVzZUVOU05hbWVzIiwiY2hhaW5JZCIsImFjY291bnRzIiwiZXJyb3IiLCJpc0FjdGl2YXRpbmciLCJpc0FjdGl2ZSIsInByb3ZpZGVyIiwiRU5TTmFtZXMiLCJvbiIsIm5ld05ldHdvcmsiLCJvbGROZXR3b3JrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MetamaskDApp.tsx\n");

/***/ })

});