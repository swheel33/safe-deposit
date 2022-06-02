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

/***/ "./components/DApp.tsx":
/*!*****************************!*\
  !*** ./components/DApp.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DApp; }\n/* harmony export */ });\n/* harmony import */ var _Users_swheel_Desktop_dev_crypto_deposit_dapp_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_swheel_Desktop_dev_crypto_deposit_dapp_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_swheel_Desktop_dev_crypto_deposit_dapp_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var truncate_eth_address__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! truncate-eth-address */ \"./node_modules/truncate-eth-address/dist/index.js\");\n/* harmony import */ var _abi_DaiAbi_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abi/DaiAbi.json */ \"./abi/DaiAbi.json\");\n/* harmony import */ var _contracts_DepositFactory_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contracts/DepositFactory.json */ \"./contracts/DepositFactory.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction DApp(param) {\n    var chainId = param.chainId, accounts = param.accounts, error = param.error, isActivating = param.isActivating, isActive = param.isActive, provider = param.provider, ENSNames = param.ENSNames;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\"), newContract = ref[0], setNewContract = ref[1];\n    //Contract Addresses\n    var daiContractAddress = \"0x5eD8BD53B0c3fa3dEaBd345430B1A3a6A4e8BD7C\";\n    var depositFactoryAddress = \"0xEf58478CD1d71940b44614196dF2A82f5fED4207\";\n    //ethers signer and contracts\n    var signer = provider.getSigner();\n    var daiContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(daiContractAddress, _abi_DaiAbi_json__WEBPACK_IMPORTED_MODULE_3__, signer);\n    var depositFactory = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(depositFactoryAddress, _contracts_DepositFactory_json__WEBPACK_IMPORTED_MODULE_4__.abi, signer);\n    var depositHandler = function() {\n        var _ref = _asyncToGenerator(_Users_swheel_Desktop_dev_crypto_deposit_dapp_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_swheel_Desktop_dev_crypto_deposit_dapp_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return depositFactory.createDeposit(100, 1654193815, daiContractAddress);\n                    case 2:\n                        depositFactory.on(\"DepositCreated\", function(address) {\n                            return setNewContract(address);\n                        });\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function depositHandler() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            isActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Tag, {\n                size: \"lg\",\n                children: ENSNames[0] ? ENSNames[0] : (0,truncate_eth_address__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(accounts[0])\n            }, void 0, false, {\n                fileName: \"/Users/swheel/Desktop/dev/crypto/deposit-dapp/frontend/components/DApp.tsx\",\n                lineNumber: 38,\n                columnNumber: 26\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                onClick: depositHandler,\n                children: \"Create Deposit\"\n            }, void 0, false, {\n                fileName: \"/Users/swheel/Desktop/dev/crypto/deposit-dapp/frontend/components/DApp.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/swheel/Desktop/dev/crypto/deposit-dapp/frontend/components/DApp.tsx\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this);\n};\n_s(DApp, \"v2x6wirwKCy++9DuW8s383qRkbI=\");\n_c = DApp;\nvar _c;\n$RefreshReg$(_c, \"DApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RBcHAudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBRU87QUFDZDtBQUN5QjtBQUNqQztBQUNZOztBQUc1QixTQUFTTyxJQUFJLENBQUMsS0FRNUIsRUFBRTtRQVIyQkMsT0FBTyxHQUFSLEtBUTVCLENBUjZCQSxPQUFPLEVBQUVDLFFBQVEsR0FBbEIsS0FRNUIsQ0FSc0NBLFFBQVEsRUFBRUMsS0FBSyxHQUF6QixLQVE1QixDQVJnREEsS0FBSyxFQUFFQyxZQUFZLEdBQXZDLEtBUTVCLENBUnVEQSxZQUFZLEVBQUVDLFFBQVEsR0FBakQsS0FRNUIsQ0FScUVBLFFBQVEsRUFBRUMsUUFBUSxHQUEzRCxLQVE1QixDQVIrRUEsUUFBUSxFQUFFQyxRQUFRLEdBQXJFLEtBUTVCLENBUnlGQSxRQUFROztJQVM5RixJQUFzQ1IsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQWxCdEQsV0FrQnNCLEdBQW9CQSxHQUFZLEdBQWhDLEVBbEJ0QixjQWtCc0MsR0FBSUEsR0FBWSxHQUFoQjtJQUNsQyxvQkFBb0I7SUFDcEIsSUFBTVcsa0JBQWtCLEdBQUcsNENBQTRDO0lBQ3ZFLElBQU1DLHFCQUFxQixHQUFHLDRDQUE0QztJQUUxRSw2QkFBNkI7SUFDN0IsSUFBTUMsTUFBTSxHQUFHTixRQUFRLENBQUNPLFNBQVMsRUFBRTtJQUNuQyxJQUFNQyxXQUFXLEdBQUcsSUFBSWhCLG1EQUFlLENBQUNZLGtCQUFrQixFQUFFZCw2Q0FBTSxFQUFFZ0IsTUFBTSxDQUFDO0lBQzNFLElBQU1JLGNBQWMsR0FBRyxJQUFJbEIsbURBQWUsQ0FBQ2EscUJBQXFCLEVBQUVkLCtEQUFxQixFQUFFZSxNQUFNLENBQUM7SUFFaEcsSUFBTU0sY0FBYzttQkFBRyx1TUFBWTs7Ozs7K0JBQzFCRixjQUFjLENBQUNHLGFBQWEsQ0FBQyxHQUFHLEVBQUUsVUFBVSxFQUFHVCxrQkFBa0IsQ0FBQzs7d0JBQ3hFTSxjQUFjLENBQUNJLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRUMsU0FBQUEsT0FBTzttQ0FBSVosY0FBYyxDQUFDWSxPQUFPLENBQUM7eUJBQUEsQ0FBQzs7Ozs7O1NBQ3pFO3dCQUhLSCxjQUFjOzs7T0FHbkI7SUFJRCxxQkFDSSw4REFBQ0ksS0FBRzs7WUFDQ2pCLFFBQVEsa0JBQUksOERBQUNaLGlEQUFHO2dCQUFDOEIsSUFBSSxFQUFDLElBQUk7MEJBQUVoQixRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUdBLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBR1osZ0VBQWtCLENBQUNPLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7b0JBQU87MEJBQy9GLDhEQUFDUixvREFBTTtnQkFBQzhCLE9BQU8sRUFBRU4sY0FBYzswQkFBRSxnQkFBYzs7Ozs7b0JBQVM7Ozs7OztZQUN0RCxDQUNUO0NBQ0o7R0FoQ3VCbEIsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvREFwcC50c3g/MWM5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWcsIEJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcbmltcG9ydCB7IFdlYjNQcm92aWRlciB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9wcm92aWRlcnNcIlxuaW1wb3J0IHRydW5jYXRlRXRoQWRkcmVzcyBmcm9tICd0cnVuY2F0ZS1ldGgtYWRkcmVzcydcbmltcG9ydCBEYWlBYmkgZnJvbSAnLi4vYWJpL0RhaUFiaS5qc29uJ1xuaW1wb3J0IERlcG9zaXRGYWN0b3J5QUJJIGZyb20gJy4uL2NvbnRyYWN0cy9EZXBvc2l0RmFjdG9yeS5qc29uJ1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERBcHAoe2NoYWluSWQsIGFjY291bnRzLCBlcnJvciwgaXNBY3RpdmF0aW5nLCBpc0FjdGl2ZSwgcHJvdmlkZXIsIEVOU05hbWVzfSA6IHtcbiAgICBjaGFpbklkOiBudW1iZXIsXG4gICAgYWNjb3VudHM6IHN0cmluZ1tdLFxuICAgIGVycm9yOiBFcnJvcixcbiAgICBpc0FjdGl2YXRpbmc6IGJvb2xlYW4sXG4gICAgaXNBY3RpdmU6IGJvb2xlYW4sXG4gICAgcHJvdmlkZXI6IFdlYjNQcm92aWRlcixcbiAgICBFTlNOYW1lczogc3RyaW5nW11cbn0pIHtcbiAgICBjb25zdCBbbmV3Q29udHJhY3QsIHNldE5ld0NvbnRyYWN0XSA9IHVzZVN0YXRlKCcnKTtcbiAgICAvL0NvbnRyYWN0IEFkZHJlc3Nlc1xuICAgIGNvbnN0IGRhaUNvbnRyYWN0QWRkcmVzcyA9ICcweDVlRDhCRDUzQjBjM2ZhM2RFYUJkMzQ1NDMwQjFBM2E2QTRlOEJEN0MnO1xuICAgIGNvbnN0IGRlcG9zaXRGYWN0b3J5QWRkcmVzcyA9ICcweEVmNTg0NzhDRDFkNzE5NDBiNDQ2MTQxOTZkRjJBODJmNWZFRDQyMDcnO1xuXG4gICAgLy9ldGhlcnMgc2lnbmVyIGFuZCBjb250cmFjdHNcbiAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICBjb25zdCBkYWlDb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoZGFpQ29udHJhY3RBZGRyZXNzLCBEYWlBYmksIHNpZ25lcik7XG4gICAgY29uc3QgZGVwb3NpdEZhY3RvcnkgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGRlcG9zaXRGYWN0b3J5QWRkcmVzcywgRGVwb3NpdEZhY3RvcnlBQkkuYWJpLCBzaWduZXIpXG5cbiAgICBjb25zdCBkZXBvc2l0SGFuZGxlciA9IGFzeW5jICgpID0+IHtcbiAgICAgICBhd2FpdCBkZXBvc2l0RmFjdG9yeS5jcmVhdGVEZXBvc2l0KDEwMCwgMTY1NDE5MzgxNSAsIGRhaUNvbnRyYWN0QWRkcmVzcylcbiAgICAgICBkZXBvc2l0RmFjdG9yeS5vbignRGVwb3NpdENyZWF0ZWQnLCBhZGRyZXNzID0+IHNldE5ld0NvbnRyYWN0KGFkZHJlc3MpKVxuICAgIH1cblxuICAgIFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtpc0FjdGl2ZSAmJiA8VGFnIHNpemU9J2xnJz57RU5TTmFtZXNbMF0gPyBFTlNOYW1lc1swXSA6IHRydW5jYXRlRXRoQWRkcmVzcyhhY2NvdW50c1swXSl9PC9UYWc+fVxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtkZXBvc2l0SGFuZGxlcn0+Q3JlYXRlIERlcG9zaXQ8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJUYWciLCJCdXR0b24iLCJ0cnVuY2F0ZUV0aEFkZHJlc3MiLCJEYWlBYmkiLCJEZXBvc2l0RmFjdG9yeUFCSSIsImV0aGVycyIsInVzZVN0YXRlIiwiREFwcCIsImNoYWluSWQiLCJhY2NvdW50cyIsImVycm9yIiwiaXNBY3RpdmF0aW5nIiwiaXNBY3RpdmUiLCJwcm92aWRlciIsIkVOU05hbWVzIiwibmV3Q29udHJhY3QiLCJzZXROZXdDb250cmFjdCIsImRhaUNvbnRyYWN0QWRkcmVzcyIsImRlcG9zaXRGYWN0b3J5QWRkcmVzcyIsInNpZ25lciIsImdldFNpZ25lciIsImRhaUNvbnRyYWN0IiwiQ29udHJhY3QiLCJkZXBvc2l0RmFjdG9yeSIsImFiaSIsImRlcG9zaXRIYW5kbGVyIiwiY3JlYXRlRGVwb3NpdCIsIm9uIiwiYWRkcmVzcyIsImRpdiIsInNpemUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DApp.tsx\n");

/***/ })

});