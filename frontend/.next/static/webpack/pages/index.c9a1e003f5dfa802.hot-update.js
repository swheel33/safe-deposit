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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DApp; }\n/* harmony export */ });\n/* harmony import */ var _Users_swheel_Desktop_dev_crypto_deposits_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_swheel_Desktop_dev_crypto_deposits_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_swheel_Desktop_dev_crypto_deposits_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var truncate_eth_address__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! truncate-eth-address */ \"./node_modules/truncate-eth-address/dist/index.js\");\n/* harmony import */ var _abi_DaiAbi_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abi/DaiAbi.json */ \"./abi/DaiAbi.json\");\n/* harmony import */ var _contracts_DepositFactory_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contracts/DepositFactory.json */ \"./contracts/DepositFactory.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _DepositInteraction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DepositInteraction */ \"./components/DepositInteraction.tsx\");\n/* harmony import */ var _ContractForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ContractForm */ \"./components/ContractForm.tsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction DApp(param) {\n    var chainId = param.chainId, accounts = param.accounts, error = param.error, isActivating = param.isActivating, isActive = param.isActive, provider = param.provider, ENSNames = param.ENSNames;\n    _s();\n    //Correct chain check\n    var isCorrectChain = chainId === 4;\n    //Defining address of the contract that will get created when starting the deposit sequence\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\"), newContract = ref[0], setNewContract = ref[1];\n    //Contract Addresses\n    var daiContractAddress = \"0x5eD8BD53B0c3fa3dEaBd345430B1A3a6A4e8BD7C\";\n    var depositFactoryAddress = \"0x83c61788908494FD106CF41B99CffCB865618a33\";\n    //ethers signer and contracts\n    var signer = provider.getSigner();\n    var daiContract = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(daiContractAddress, _abi_DaiAbi_json__WEBPACK_IMPORTED_MODULE_3__, signer);\n    var depositFactory = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(depositFactoryAddress, _contracts_DepositFactory_json__WEBPACK_IMPORTED_MODULE_4__.abi, signer);\n    var approvalAmount = 100;\n    var depositHandler = function() {\n        var _ref = _asyncToGenerator(_Users_swheel_Desktop_dev_crypto_deposits_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var tx, receipt, emittedAddress;\n            return _Users_swheel_Desktop_dev_crypto_deposits_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return depositFactory.createDeposit(approvalAmount, 1654193815, daiContractAddress);\n                    case 2:\n                        tx = _ctx.sent;\n                        _ctx.next = 5;\n                        return tx.wait();\n                    case 5:\n                        receipt = _ctx.sent;\n                        console.log(receipt);\n                        emittedAddress = receipt.logs[0].address;\n                        setNewContract(emittedAddress);\n                        console.log(\"Contract creation successful! Created contract address is: \".concat(emittedAddress, \".\"));\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function depositHandler() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    //Gets all previous contract events created for validation with ContractForm\n    var allPrevContracts = function() {\n        var _ref = _asyncToGenerator(_Users_swheel_Desktop_dev_crypto_deposits_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var filter, events, addresses;\n            return _Users_swheel_Desktop_dev_crypto_deposits_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        filter = depositFactory.filters.DepositCreated();\n                        _ctx.next = 3;\n                        return depositFactory.queryFilter(filter);\n                    case 3:\n                        events = _ctx.sent;\n                        addresses = events.map(function(event) {\n                            return event.args[0];\n                        });\n                        return _ctx.abrupt(\"return\", addresses);\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function allPrevContracts() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            isCorrectChain && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    isActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Tag, {\n                        size: \"lg\",\n                        children: ENSNames[0] ? ENSNames[0] : (0,truncate_eth_address__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(accounts[0])\n                    }, void 0, false, {\n                        fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/DApp.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 30\n                    }, this),\n                    !newContract && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                        onClick: depositHandler,\n                        children: \"Create Deposit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/DApp.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 34\n                    }, this),\n                    newContract && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Tag, {\n                        children: [\n                            \"Contract Created: \",\n                            newContract\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/DApp.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 33\n                    }, this),\n                    newContract && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_DepositInteraction__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        contract: newContract,\n                        tokenAddress: daiContractAddress,\n                        tokenContract: daiContract,\n                        approvalAmount: approvalAmount,\n                        signer: signer\n                    }, void 0, false, {\n                        fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/DApp.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 33\n                    }, this),\n                    !newContract && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ContractForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        setNewContract: setNewContract,\n                        allPrevContracts: allPrevContracts()\n                    }, void 0, false, {\n                        fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/DApp.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 34\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/DApp.tsx\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this),\n            !isCorrectChain && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Text, {\n                children: \"Please Connect to Rinkeby Testnet.\"\n            }, void 0, false, {\n                fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/DApp.tsx\",\n                lineNumber: 70,\n                columnNumber: 29\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/DApp.tsx\",\n        lineNumber: 56,\n        columnNumber: 9\n    }, this);\n};\n_s(DApp, \"v2x6wirwKCy++9DuW8s383qRkbI=\");\n_c = DApp;\nvar _c;\n$RefreshReg$(_c, \"DApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhEQUFDZixpREFBRzt3QkFBQ21ELElBQUksRUFBQyxJQUFJO2tDQUFFbEMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHQSxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUdkLGdFQUFrQixDQUFDUyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7OzRCQUFPO29CQUM5RixDQUFDTyxXQUFXLGtCQUFJLDhEQUFDbEIsb0RBQU07d0JBQUNtRCxPQUFPLEVBQUV0QixjQUFjO2tDQUFFLGdCQUFjOzs7Ozs0QkFBUztvQkFDeEVYLFdBQVcsa0JBQUksOERBQUNuQixpREFBRzs7NEJBQUMsb0JBQWtCOzRCQUFDbUIsV0FBVzs7Ozs7OzRCQUFPO29CQUN6REEsV0FBVyxrQkFBSSw4REFBQ1gsMkRBQWtCO3dCQUNuQjZDLFFBQVEsRUFBRWxDLFdBQVc7d0JBQ3JCbUMsWUFBWSxFQUFFakMsa0JBQWtCO3dCQUNoQ2tDLGFBQWEsRUFBRTlCLFdBQVc7d0JBQzFCSSxjQUFjLEVBQUVBLGNBQWM7d0JBQzlCTixNQUFNLEVBQUVBLE1BQU07Ozs7OzRCQUFHO29CQUNoQyxDQUFDSixXQUFXLGtCQUFJLDhEQUFDVixxREFBWTt3QkFBQ1csY0FBYyxFQUFFQSxjQUFjO3dCQUFFb0IsZ0JBQWdCLEVBQUVBLGdCQUFnQixFQUFFOzs7Ozs0QkFBRzs7Ozs7O29CQUNwRztZQUNULENBQUN0QixjQUFjLGtCQUFJLDhEQUFDaEIsa0RBQUk7MEJBQUMsb0NBQWtDOzs7OztvQkFBTzs7Ozs7O1lBQzdELENBRVQ7Q0FDSjtHQTlEdUJRLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0RBcHAudHN4PzFjOWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFnLCBCdXR0b24sIElucHV0LCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxuaW1wb3J0IHsgV2ViM1Byb3ZpZGVyIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L3Byb3ZpZGVyc1wiXG5pbXBvcnQgdHJ1bmNhdGVFdGhBZGRyZXNzIGZyb20gJ3RydW5jYXRlLWV0aC1hZGRyZXNzJ1xuaW1wb3J0IERhaUFiaSBmcm9tICcuLi9hYmkvRGFpQWJpLmpzb24nXG5pbXBvcnQgRGVwb3NpdEZhY3RvcnlBQkkgZnJvbSAnLi4vY29udHJhY3RzL0RlcG9zaXRGYWN0b3J5Lmpzb24nXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IERlcG9zaXRJbnRlcmFjdGlvbiBmcm9tIFwiLi9EZXBvc2l0SW50ZXJhY3Rpb25cIlxuaW1wb3J0IENvbnRyYWN0Rm9ybSBmcm9tIFwiLi9Db250cmFjdEZvcm1cIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERBcHAoe2NoYWluSWQsIGFjY291bnRzLCBlcnJvciwgaXNBY3RpdmF0aW5nLCBpc0FjdGl2ZSwgcHJvdmlkZXIsIEVOU05hbWVzfSA6IHtcbiAgICBjaGFpbklkOiBudW1iZXIsXG4gICAgYWNjb3VudHM6IHN0cmluZ1tdLFxuICAgIGVycm9yOiBFcnJvcixcbiAgICBpc0FjdGl2YXRpbmc6IGJvb2xlYW4sXG4gICAgaXNBY3RpdmU6IGJvb2xlYW4sXG4gICAgcHJvdmlkZXI6IFdlYjNQcm92aWRlcixcbiAgICBFTlNOYW1lczogc3RyaW5nW11cbn0pIHtcbiAgICAvL0NvcnJlY3QgY2hhaW4gY2hlY2tcbiAgICBjb25zdCBpc0NvcnJlY3RDaGFpbiA9IGNoYWluSWQgPT09IDQ7XG5cbiAgICAvL0RlZmluaW5nIGFkZHJlc3Mgb2YgdGhlIGNvbnRyYWN0IHRoYXQgd2lsbCBnZXQgY3JlYXRlZCB3aGVuIHN0YXJ0aW5nIHRoZSBkZXBvc2l0IHNlcXVlbmNlXG4gICAgY29uc3QgW25ld0NvbnRyYWN0LCBzZXROZXdDb250cmFjdF0gPSB1c2VTdGF0ZSgnJyk7XG4gXG4gICAgLy9Db250cmFjdCBBZGRyZXNzZXNcbiAgICBjb25zdCBkYWlDb250cmFjdEFkZHJlc3MgPSAnMHg1ZUQ4QkQ1M0IwYzNmYTNkRWFCZDM0NTQzMEIxQTNhNkE0ZThCRDdDJztcbiAgICBjb25zdCBkZXBvc2l0RmFjdG9yeUFkZHJlc3MgPSAnMHg4M2M2MTc4ODkwODQ5NEZEMTA2Q0Y0MUI5OUNmZkNCODY1NjE4YTMzJztcblxuICAgIC8vZXRoZXJzIHNpZ25lciBhbmQgY29udHJhY3RzXG4gICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgY29uc3QgZGFpQ29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGRhaUNvbnRyYWN0QWRkcmVzcywgRGFpQWJpLCBzaWduZXIpO1xuICAgIGNvbnN0IGRlcG9zaXRGYWN0b3J5ID0gbmV3IGV0aGVycy5Db250cmFjdChkZXBvc2l0RmFjdG9yeUFkZHJlc3MsIERlcG9zaXRGYWN0b3J5QUJJLmFiaSwgc2lnbmVyKVxuXG4gICAgY29uc3QgYXBwcm92YWxBbW91bnQgPSAxMDA7XG5cbiAgICBjb25zdCBkZXBvc2l0SGFuZGxlciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgdHggPSBhd2FpdCBkZXBvc2l0RmFjdG9yeS5jcmVhdGVEZXBvc2l0KGFwcHJvdmFsQW1vdW50LCAxNjU0MTkzODE1ICwgZGFpQ29udHJhY3RBZGRyZXNzKTtcbiAgICAgICAgY29uc3QgcmVjZWlwdCA9IGF3YWl0IHR4LndhaXQoKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVjZWlwdCk7XG4gICAgICAgIGNvbnN0IGVtaXR0ZWRBZGRyZXNzID0gcmVjZWlwdC5sb2dzWzBdLmFkZHJlc3M7XG4gICAgICAgIHNldE5ld0NvbnRyYWN0KGVtaXR0ZWRBZGRyZXNzKTtcbiAgICAgICAgY29uc29sZS5sb2coYENvbnRyYWN0IGNyZWF0aW9uIHN1Y2Nlc3NmdWwhIENyZWF0ZWQgY29udHJhY3QgYWRkcmVzcyBpczogJHtlbWl0dGVkQWRkcmVzc30uYClcbiAgICB9XG4gICAgXG4gICAgLy9HZXRzIGFsbCBwcmV2aW91cyBjb250cmFjdCBldmVudHMgY3JlYXRlZCBmb3IgdmFsaWRhdGlvbiB3aXRoIENvbnRyYWN0Rm9ybVxuICAgIGNvbnN0IGFsbFByZXZDb250cmFjdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbHRlciA9IGRlcG9zaXRGYWN0b3J5LmZpbHRlcnMuRGVwb3NpdENyZWF0ZWQoKTtcbiAgICAgICAgY29uc3QgZXZlbnRzID0gYXdhaXQgZGVwb3NpdEZhY3RvcnkucXVlcnlGaWx0ZXIoZmlsdGVyKTtcbiAgICAgICAgY29uc3QgYWRkcmVzc2VzID0gZXZlbnRzLm1hcChldmVudCA9PiBldmVudC5hcmdzWzBdKVxuICAgICAgICByZXR1cm4gYWRkcmVzc2VzO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7aXNDb3JyZWN0Q2hhaW4gJiYgXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtpc0FjdGl2ZSAmJiA8VGFnIHNpemU9J2xnJz57RU5TTmFtZXNbMF0gPyBFTlNOYW1lc1swXSA6IHRydW5jYXRlRXRoQWRkcmVzcyhhY2NvdW50c1swXSl9PC9UYWc+fVxuICAgICAgICAgICAgICAgIHshbmV3Q29udHJhY3QgJiYgPEJ1dHRvbiBvbkNsaWNrPXtkZXBvc2l0SGFuZGxlcn0+Q3JlYXRlIERlcG9zaXQ8L0J1dHRvbj59XG4gICAgICAgICAgICAgICAge25ld0NvbnRyYWN0ICYmIDxUYWc+Q29udHJhY3QgQ3JlYXRlZDoge25ld0NvbnRyYWN0fTwvVGFnPn1cbiAgICAgICAgICAgICAgICB7bmV3Q29udHJhY3QgJiYgPERlcG9zaXRJbnRlcmFjdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJhY3Q9e25ld0NvbnRyYWN0fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5BZGRyZXNzPXtkYWlDb250cmFjdEFkZHJlc3N9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbkNvbnRyYWN0PXtkYWlDb250cmFjdH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcHJvdmFsQW1vdW50PXthcHByb3ZhbEFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmVyPXtzaWduZXJ9Lz59XG4gICAgICAgICAgICAgICAgeyFuZXdDb250cmFjdCAmJiA8Q29udHJhY3RGb3JtIHNldE5ld0NvbnRyYWN0PXtzZXROZXdDb250cmFjdH0gYWxsUHJldkNvbnRyYWN0cz17YWxsUHJldkNvbnRyYWN0cygpfS8+fVxuICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICB7IWlzQ29ycmVjdENoYWluICYmIDxUZXh0PlBsZWFzZSBDb25uZWN0IHRvIFJpbmtlYnkgVGVzdG5ldC48L1RleHQ+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgKVxufSJdLCJuYW1lcyI6WyJUYWciLCJCdXR0b24iLCJUZXh0IiwidHJ1bmNhdGVFdGhBZGRyZXNzIiwiRGFpQWJpIiwiRGVwb3NpdEZhY3RvcnlBQkkiLCJldGhlcnMiLCJ1c2VTdGF0ZSIsIkRlcG9zaXRJbnRlcmFjdGlvbiIsIkNvbnRyYWN0Rm9ybSIsIkRBcHAiLCJjaGFpbklkIiwiYWNjb3VudHMiLCJlcnJvciIsImlzQWN0aXZhdGluZyIsImlzQWN0aXZlIiwicHJvdmlkZXIiLCJFTlNOYW1lcyIsImlzQ29ycmVjdENoYWluIiwibmV3Q29udHJhY3QiLCJzZXROZXdDb250cmFjdCIsImRhaUNvbnRyYWN0QWRkcmVzcyIsImRlcG9zaXRGYWN0b3J5QWRkcmVzcyIsInNpZ25lciIsImdldFNpZ25lciIsImRhaUNvbnRyYWN0IiwiQ29udHJhY3QiLCJkZXBvc2l0RmFjdG9yeSIsImFiaSIsImFwcHJvdmFsQW1vdW50IiwiZGVwb3NpdEhhbmRsZXIiLCJ0eCIsInJlY2VpcHQiLCJlbWl0dGVkQWRkcmVzcyIsImNyZWF0ZURlcG9zaXQiLCJ3YWl0IiwiY29uc29sZSIsImxvZyIsImxvZ3MiLCJhZGRyZXNzIiwiYWxsUHJldkNvbnRyYWN0cyIsImZpbHRlciIsImV2ZW50cyIsImFkZHJlc3NlcyIsImZpbHRlcnMiLCJEZXBvc2l0Q3JlYXRlZCIsInF1ZXJ5RmlsdGVyIiwibWFwIiwiZXZlbnQiLCJhcmdzIiwiZGl2Iiwic2l6ZSIsIm9uQ2xpY2siLCJjb250cmFjdCIsInRva2VuQWRkcmVzcyIsInRva2VuQ29udHJhY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DApp.tsx\n");

/***/ })

});