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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DApp; }\n/* harmony export */ });\n/* harmony import */ var _Users_swheel_Desktop_dev_crypto_deposits_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_swheel_Desktop_dev_crypto_deposits_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_swheel_Desktop_dev_crypto_deposits_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var truncate_eth_address__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! truncate-eth-address */ \"./node_modules/truncate-eth-address/dist/index.js\");\n/* harmony import */ var _abi_DaiAbi_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abi/DaiAbi.json */ \"./abi/DaiAbi.json\");\n/* harmony import */ var _contracts_DepositFactory_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contracts/DepositFactory.json */ \"./contracts/DepositFactory.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _DepositInteraction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DepositInteraction */ \"./components/DepositInteraction.tsx\");\n/* harmony import */ var _ContractForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ContractForm */ \"./components/ContractForm.tsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction DApp(param) {\n    var chainId = param.chainId, accounts = param.accounts, error = param.error, isActivating = param.isActivating, isActive = param.isActive, provider = param.provider, ENSNames = param.ENSNames;\n    _s();\n    //Defining address of the contract that will get created when starting the deposit sequence\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\"), newContract = ref[0], setNewContract = ref[1];\n    //Contract Addresses\n    var daiContractAddress = \"0x5eD8BD53B0c3fa3dEaBd345430B1A3a6A4e8BD7C\";\n    var depositFactoryAddress = \"0x83c61788908494FD106CF41B99CffCB865618a33\";\n    //ethers signer and contracts\n    var signer = provider.getSigner();\n    var daiContract = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(daiContractAddress, _abi_DaiAbi_json__WEBPACK_IMPORTED_MODULE_3__, signer);\n    var depositFactory = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(depositFactoryAddress, _contracts_DepositFactory_json__WEBPACK_IMPORTED_MODULE_4__.abi, signer);\n    var approvalAmount = 100;\n    var depositHandler = function() {\n        var _ref = _asyncToGenerator(_Users_swheel_Desktop_dev_crypto_deposits_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var tx, receipt, emittedAddress;\n            return _Users_swheel_Desktop_dev_crypto_deposits_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return depositFactory.createDeposit(approvalAmount, 1654193815, daiContractAddress);\n                    case 2:\n                        tx = _ctx.sent;\n                        _ctx.next = 5;\n                        return tx.wait();\n                    case 5:\n                        receipt = _ctx.sent;\n                        console.log(receipt);\n                        emittedAddress = receipt.logs[0].address;\n                        setNewContract(emittedAddress);\n                        console.log(\"Contract creation successful! Created contract address is: \".concat(emittedAddress, \".\"));\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function depositHandler() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var allEvents = function() {\n        var _ref = _asyncToGenerator(_Users_swheel_Desktop_dev_crypto_deposits_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var events;\n            return _Users_swheel_Desktop_dev_crypto_deposits_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return depositFactory.queryFilter();\n                    case 2:\n                        events = _ctx.sent;\n                        console.log(events);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function allEvents() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            isActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Tag, {\n                size: \"lg\",\n                children: ENSNames[0] ? ENSNames[0] : (0,truncate_eth_address__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(accounts[0])\n            }, void 0, false, {\n                fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/DApp.tsx\",\n                lineNumber: 52,\n                columnNumber: 26\n            }, this),\n            !newContract && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                onClick: depositHandler,\n                children: \"Create Deposit\"\n            }, void 0, false, {\n                fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/DApp.tsx\",\n                lineNumber: 53,\n                columnNumber: 30\n            }, this),\n            newContract && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Tag, {\n                children: [\n                    \"Contract Created: \",\n                    newContract\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/DApp.tsx\",\n                lineNumber: 54,\n                columnNumber: 29\n            }, this),\n            newContract && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_DepositInteraction__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                contract: newContract,\n                tokenAddress: daiContractAddress,\n                tokenContract: daiContract,\n                approvalAmount: approvalAmount,\n                signer: signer\n            }, void 0, false, {\n                fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/DApp.tsx\",\n                lineNumber: 55,\n                columnNumber: 29\n            }, this),\n            !newContract && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ContractForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                setNewContract: setNewContract\n            }, void 0, false, {\n                fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/DApp.tsx\",\n                lineNumber: 61,\n                columnNumber: 30\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                onClick: allEvents,\n                children: \"Click Me\"\n            }, void 0, false, {\n                fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/DApp.tsx\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/DApp.tsx\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, this);\n};\n_s(DApp, \"v2x6wirwKCy++9DuW8s383qRkbI=\");\n_c = DApp;\nvar _c;\n$RefreshReg$(_c, \"DApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWtCO29CQUFDaUIsV0FBVzs7Ozs7O29CQUFPO1lBQ3pEQSxXQUFXLGtCQUFJLDhEQUFDViwyREFBa0I7Z0JBQ25CcUMsUUFBUSxFQUFFM0IsV0FBVztnQkFDckI0QixZQUFZLEVBQUUxQixrQkFBa0I7Z0JBQ2hDMkIsYUFBYSxFQUFFdkIsV0FBVztnQkFDMUJJLGNBQWMsRUFBRUEsY0FBYztnQkFDOUJOLE1BQU0sRUFBRUEsTUFBTTs7Ozs7b0JBQUc7WUFDaEMsQ0FBQ0osV0FBVyxrQkFBSSw4REFBQ1QscURBQVk7Z0JBQUNVLGNBQWMsRUFBRUEsY0FBYzs7Ozs7b0JBQUc7MEJBQ2hFLDhEQUFDakIsb0RBQU07Z0JBQUMwQyxPQUFPLEVBQUVMLFNBQVM7MEJBQUUsVUFBUTs7Ozs7b0JBQVM7Ozs7OztZQUMzQyxDQUNUO0NBQ0o7R0FyRHVCN0IsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvREFwcC50c3g/MWM5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWcsIEJ1dHRvbiwgSW5wdXQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXG5pbXBvcnQgeyBXZWIzUHJvdmlkZXIgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvcHJvdmlkZXJzXCJcbmltcG9ydCB0cnVuY2F0ZUV0aEFkZHJlc3MgZnJvbSAndHJ1bmNhdGUtZXRoLWFkZHJlc3MnXG5pbXBvcnQgRGFpQWJpIGZyb20gJy4uL2FiaS9EYWlBYmkuanNvbidcbmltcG9ydCBEZXBvc2l0RmFjdG9yeUFCSSBmcm9tICcuLi9jb250cmFjdHMvRGVwb3NpdEZhY3RvcnkuanNvbidcbmltcG9ydCB7IEJpZ051bWJlciwgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IERlcG9zaXRJbnRlcmFjdGlvbiBmcm9tIFwiLi9EZXBvc2l0SW50ZXJhY3Rpb25cIlxuaW1wb3J0IENvbnRyYWN0Rm9ybSBmcm9tIFwiLi9Db250cmFjdEZvcm1cIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERBcHAoe2NoYWluSWQsIGFjY291bnRzLCBlcnJvciwgaXNBY3RpdmF0aW5nLCBpc0FjdGl2ZSwgcHJvdmlkZXIsIEVOU05hbWVzfSA6IHtcbiAgICBjaGFpbklkOiBudW1iZXIsXG4gICAgYWNjb3VudHM6IHN0cmluZ1tdLFxuICAgIGVycm9yOiBFcnJvcixcbiAgICBpc0FjdGl2YXRpbmc6IGJvb2xlYW4sXG4gICAgaXNBY3RpdmU6IGJvb2xlYW4sXG4gICAgcHJvdmlkZXI6IFdlYjNQcm92aWRlcixcbiAgICBFTlNOYW1lczogc3RyaW5nW11cbn0pIHtcbiAgICBcbiAgICAvL0RlZmluaW5nIGFkZHJlc3Mgb2YgdGhlIGNvbnRyYWN0IHRoYXQgd2lsbCBnZXQgY3JlYXRlZCB3aGVuIHN0YXJ0aW5nIHRoZSBkZXBvc2l0IHNlcXVlbmNlXG4gICAgY29uc3QgW25ld0NvbnRyYWN0LCBzZXROZXdDb250cmFjdF0gPSB1c2VTdGF0ZSgnJyk7XG4gXG4gICAgLy9Db250cmFjdCBBZGRyZXNzZXNcbiAgICBjb25zdCBkYWlDb250cmFjdEFkZHJlc3MgPSAnMHg1ZUQ4QkQ1M0IwYzNmYTNkRWFCZDM0NTQzMEIxQTNhNkE0ZThCRDdDJztcbiAgICBjb25zdCBkZXBvc2l0RmFjdG9yeUFkZHJlc3MgPSAnMHg4M2M2MTc4ODkwODQ5NEZEMTA2Q0Y0MUI5OUNmZkNCODY1NjE4YTMzJztcblxuICAgIC8vZXRoZXJzIHNpZ25lciBhbmQgY29udHJhY3RzXG4gICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgY29uc3QgZGFpQ29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGRhaUNvbnRyYWN0QWRkcmVzcywgRGFpQWJpLCBzaWduZXIpO1xuICAgIGNvbnN0IGRlcG9zaXRGYWN0b3J5ID0gbmV3IGV0aGVycy5Db250cmFjdChkZXBvc2l0RmFjdG9yeUFkZHJlc3MsIERlcG9zaXRGYWN0b3J5QUJJLmFiaSwgc2lnbmVyKVxuXG4gICAgY29uc3QgYXBwcm92YWxBbW91bnQgPSAxMDA7XG5cbiAgICBjb25zdCBkZXBvc2l0SGFuZGxlciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgdHggPSBhd2FpdCBkZXBvc2l0RmFjdG9yeS5jcmVhdGVEZXBvc2l0KGFwcHJvdmFsQW1vdW50LCAxNjU0MTkzODE1ICwgZGFpQ29udHJhY3RBZGRyZXNzKTtcbiAgICAgICAgY29uc3QgcmVjZWlwdCA9IGF3YWl0IHR4LndhaXQoKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVjZWlwdCk7XG4gICAgICAgIGNvbnN0IGVtaXR0ZWRBZGRyZXNzID0gcmVjZWlwdC5sb2dzWzBdLmFkZHJlc3M7XG4gICAgICAgIHNldE5ld0NvbnRyYWN0KGVtaXR0ZWRBZGRyZXNzKTtcbiAgICAgICAgY29uc29sZS5sb2coYENvbnRyYWN0IGNyZWF0aW9uIHN1Y2Nlc3NmdWwhIENyZWF0ZWQgY29udHJhY3QgYWRkcmVzcyBpczogJHtlbWl0dGVkQWRkcmVzc30uYClcbiAgICB9XG5cbiAgICBjb25zdCBhbGxFdmVudHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IGF3YWl0IGRlcG9zaXRGYWN0b3J5LnF1ZXJ5RmlsdGVyKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50cylcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2lzQWN0aXZlICYmIDxUYWcgc2l6ZT0nbGcnPntFTlNOYW1lc1swXSA/IEVOU05hbWVzWzBdIDogdHJ1bmNhdGVFdGhBZGRyZXNzKGFjY291bnRzWzBdKX08L1RhZz59XG4gICAgICAgICAgICB7IW5ld0NvbnRyYWN0ICYmIDxCdXR0b24gb25DbGljaz17ZGVwb3NpdEhhbmRsZXJ9PkNyZWF0ZSBEZXBvc2l0PC9CdXR0b24+fVxuICAgICAgICAgICAge25ld0NvbnRyYWN0ICYmIDxUYWc+Q29udHJhY3QgQ3JlYXRlZDoge25ld0NvbnRyYWN0fTwvVGFnPn1cbiAgICAgICAgICAgIHtuZXdDb250cmFjdCAmJiA8RGVwb3NpdEludGVyYWN0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyYWN0PXtuZXdDb250cmFjdH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5BZGRyZXNzPXtkYWlDb250cmFjdEFkZHJlc3N9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuQ29udHJhY3Q9e2RhaUNvbnRyYWN0fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHByb3ZhbEFtb3VudD17YXBwcm92YWxBbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmVyPXtzaWduZXJ9Lz59XG4gICAgICAgICAgICB7IW5ld0NvbnRyYWN0ICYmIDxDb250cmFjdEZvcm0gc2V0TmV3Q29udHJhY3Q9e3NldE5ld0NvbnRyYWN0fS8+fVxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXthbGxFdmVudHN9PkNsaWNrIE1lPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiVGFnIiwiQnV0dG9uIiwidHJ1bmNhdGVFdGhBZGRyZXNzIiwiRGFpQWJpIiwiRGVwb3NpdEZhY3RvcnlBQkkiLCJldGhlcnMiLCJ1c2VTdGF0ZSIsIkRlcG9zaXRJbnRlcmFjdGlvbiIsIkNvbnRyYWN0Rm9ybSIsIkRBcHAiLCJjaGFpbklkIiwiYWNjb3VudHMiLCJlcnJvciIsImlzQWN0aXZhdGluZyIsImlzQWN0aXZlIiwicHJvdmlkZXIiLCJFTlNOYW1lcyIsIm5ld0NvbnRyYWN0Iiwic2V0TmV3Q29udHJhY3QiLCJkYWlDb250cmFjdEFkZHJlc3MiLCJkZXBvc2l0RmFjdG9yeUFkZHJlc3MiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJkYWlDb250cmFjdCIsIkNvbnRyYWN0IiwiZGVwb3NpdEZhY3RvcnkiLCJhYmkiLCJhcHByb3ZhbEFtb3VudCIsImRlcG9zaXRIYW5kbGVyIiwidHgiLCJyZWNlaXB0IiwiZW1pdHRlZEFkZHJlc3MiLCJjcmVhdGVEZXBvc2l0Iiwid2FpdCIsImNvbnNvbGUiLCJsb2ciLCJsb2dzIiwiYWRkcmVzcyIsImFsbEV2ZW50cyIsImV2ZW50cyIsInF1ZXJ5RmlsdGVyIiwiZGl2Iiwic2l6ZSIsIm9uQ2xpY2siLCJjb250cmFjdCIsInRva2VuQWRkcmVzcyIsInRva2VuQ29udHJhY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DApp.tsx\n");

/***/ })

});