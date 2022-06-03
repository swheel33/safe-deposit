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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DApp; }\n/* harmony export */ });\n/* harmony import */ var _Users_swheel_Desktop_dev_crypto_deposits_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_swheel_Desktop_dev_crypto_deposits_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_swheel_Desktop_dev_crypto_deposits_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var truncate_eth_address__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! truncate-eth-address */ \"./node_modules/truncate-eth-address/dist/index.js\");\n/* harmony import */ var _abi_DaiAbi_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abi/DaiAbi.json */ \"./abi/DaiAbi.json\");\n/* harmony import */ var _contracts_DepositFactory_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contracts/DepositFactory.json */ \"./contracts/DepositFactory.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _DepositInteraction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DepositInteraction */ \"./components/DepositInteraction.tsx\");\n/* harmony import */ var _ContractForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ContractForm */ \"./components/ContractForm.tsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction DApp(param) {\n    var chainId = param.chainId, accounts = param.accounts, error = param.error, isActivating = param.isActivating, isActive = param.isActive, provider = param.provider, ENSNames = param.ENSNames;\n    _s();\n    //Defining address of the contract that will get created when starting the deposit sequence\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\"), newContract = ref[0], setNewContract = ref[1];\n    //Contract Addresses\n    var daiContractAddress = \"0x5eD8BD53B0c3fa3dEaBd345430B1A3a6A4e8BD7C\";\n    var depositFactoryAddress = \"0x83c61788908494FD106CF41B99CffCB865618a33\";\n    //ethers signer and contracts\n    var signer = provider.getSigner();\n    var daiContract = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(daiContractAddress, _abi_DaiAbi_json__WEBPACK_IMPORTED_MODULE_3__, signer);\n    var depositFactory = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(depositFactoryAddress, _contracts_DepositFactory_json__WEBPACK_IMPORTED_MODULE_4__.abi, signer);\n    var approvalAmount = 100;\n    var depositHandler = function() {\n        var _ref = _asyncToGenerator(_Users_swheel_Desktop_dev_crypto_deposits_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var tx, receipt, emittedAddress;\n            return _Users_swheel_Desktop_dev_crypto_deposits_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return depositFactory.createDeposit(approvalAmount, 1654193815, daiContractAddress);\n                    case 2:\n                        tx = _ctx.sent;\n                        _ctx.next = 5;\n                        return tx.wait();\n                    case 5:\n                        receipt = _ctx.sent;\n                        console.log(receipt);\n                        emittedAddress = receipt.logs[0].address;\n                        setNewContract(emittedAddress);\n                        console.log(\"Contract creation successful! Created contract address is: \".concat(emittedAddress, \".\"));\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function depositHandler() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var allPrevContracts = function() {\n        var _ref = _asyncToGenerator(_Users_swheel_Desktop_dev_crypto_deposits_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var filter, events, addresses;\n            return _Users_swheel_Desktop_dev_crypto_deposits_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        filter = depositFactory.filters.DepositCreated();\n                        _ctx.next = 3;\n                        return depositFactory.queryFilter(filter);\n                    case 3:\n                        events = _ctx.sent;\n                        addresses = events.map(function(event) {\n                            return event.args;\n                        });\n                        console.log(events);\n                        console.log(typeof addresses === \"undefined\" ? \"undefined\" : _typeof(addresses));\n                        return _ctx.abrupt(\"return\", addresses);\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function allPrevContracts() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            isActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Tag, {\n                size: \"lg\",\n                children: ENSNames[0] ? ENSNames[0] : (0,truncate_eth_address__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(accounts[0])\n            }, void 0, false, {\n                fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/DApp.tsx\",\n                lineNumber: 56,\n                columnNumber: 26\n            }, this),\n            !newContract && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                onClick: depositHandler,\n                children: \"Create Deposit\"\n            }, void 0, false, {\n                fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/DApp.tsx\",\n                lineNumber: 57,\n                columnNumber: 30\n            }, this),\n            newContract && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Tag, {\n                children: [\n                    \"Contract Created: \",\n                    newContract\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/DApp.tsx\",\n                lineNumber: 58,\n                columnNumber: 29\n            }, this),\n            newContract && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_DepositInteraction__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                contract: newContract,\n                tokenAddress: daiContractAddress,\n                tokenContract: daiContract,\n                approvalAmount: approvalAmount,\n                signer: signer\n            }, void 0, false, {\n                fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/DApp.tsx\",\n                lineNumber: 59,\n                columnNumber: 29\n            }, this),\n            !newContract && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ContractForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                setNewContract: setNewContract,\n                allPrevContracts: allPrevContracts\n            }, void 0, false, {\n                fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/DApp.tsx\",\n                lineNumber: 65,\n                columnNumber: 30\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/DApp.tsx\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, this);\n};\n_s(DApp, \"v2x6wirwKCy++9DuW8s383qRkbI=\");\n_c = DApp;\nvar _c;\n$RefreshReg$(_c, \"DApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RBcHAudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFEO0FBRUE7QUFDZDtBQUN5QjtBQUN0QjtBQUNDO0FBQ1U7QUFDWjs7QUFHMUIsU0FBU1MsSUFBSSxDQUFDLEtBUTVCLEVBQUU7UUFSMkJDLE9BQU8sR0FBUixLQVE1QixDQVI2QkEsT0FBTyxFQUFFQyxRQUFRLEdBQWxCLEtBUTVCLENBUnNDQSxRQUFRLEVBQUVDLEtBQUssR0FBekIsS0FRNUIsQ0FSZ0RBLEtBQUssRUFBRUMsWUFBWSxHQUF2QyxLQVE1QixDQVJ1REEsWUFBWSxFQUFFQyxRQUFRLEdBQWpELEtBUTVCLENBUnFFQSxRQUFRLEVBQUVDLFFBQVEsR0FBM0QsS0FRNUIsQ0FSK0VBLFFBQVEsRUFBRUMsUUFBUSxHQUFyRSxLQVE1QixDQVJ5RkEsUUFBUTs7SUFVOUYsMkZBQTJGO0lBQzNGLElBQXNDVixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBdEJ0RCxXQXNCc0IsR0FBb0JBLEdBQVksR0FBaEMsRUF0QnRCLGNBc0JzQyxHQUFJQSxHQUFZLEdBQWhCO0lBRWxDLG9CQUFvQjtJQUNwQixJQUFNYSxrQkFBa0IsR0FBRyw0Q0FBNEM7SUFDdkUsSUFBTUMscUJBQXFCLEdBQUcsNENBQTRDO0lBRTFFLDZCQUE2QjtJQUM3QixJQUFNQyxNQUFNLEdBQUdOLFFBQVEsQ0FBQ08sU0FBUyxFQUFFO0lBQ25DLElBQU1DLFdBQVcsR0FBRyxJQUFJbEIsbURBQWUsQ0FBQ2Msa0JBQWtCLEVBQUVoQiw2Q0FBTSxFQUFFa0IsTUFBTSxDQUFDO0lBQzNFLElBQU1JLGNBQWMsR0FBRyxJQUFJcEIsbURBQWUsQ0FBQ2UscUJBQXFCLEVBQUVoQiwrREFBcUIsRUFBRWlCLE1BQU0sQ0FBQztJQUVoRyxJQUFNTSxjQUFjLEdBQUcsR0FBRztJQUUxQixJQUFNQyxjQUFjO21CQUFHLG1NQUFZO2dCQUN6QkMsRUFBRSxFQUNGQyxPQUFPLEVBRVBDLGNBQWM7Ozs7OytCQUhITixjQUFjLENBQUNPLGFBQWEsQ0FBQ0wsY0FBYyxFQUFFLFVBQVUsRUFBR1Isa0JBQWtCLENBQUM7O3dCQUF4RlUsRUFBRSxZQUFzRjs7K0JBQ3hFQSxFQUFFLENBQUNJLElBQUksRUFBRTs7d0JBQXpCSCxPQUFPLFlBQWtCO3dCQUMvQkksT0FBTyxDQUFDQyxHQUFHLENBQUNMLE9BQU8sQ0FBQyxDQUFDO3dCQUNmQyxjQUFjLEdBQUdELE9BQU8sQ0FBQ00sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxPQUFPLENBQUM7d0JBQy9DbkIsY0FBYyxDQUFDYSxjQUFjLENBQUMsQ0FBQzt3QkFDL0JHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDZEQUE0RCxDQUFpQixNQUFDLENBQWhCSixjQUFjLEVBQUMsR0FBQyxDQUFDLENBQUM7Ozs7OztTQUMvRjt3QkFQS0gsY0FBYzs7O09BT25CO0lBRUQsSUFBTVUsZ0JBQWdCO21CQUFHLG1NQUFZO2dCQUMzQkMsTUFBTSxFQUNOQyxNQUFNLEVBQ05DLFNBQVM7Ozs7d0JBRlRGLE1BQU0sR0FBR2QsY0FBYyxDQUFDaUIsT0FBTyxDQUFDQyxjQUFjLEVBQUUsQ0FBQzs7K0JBQ2xDbEIsY0FBYyxDQUFDbUIsV0FBVyxDQUFDTCxNQUFNLENBQUM7O3dCQUFqREMsTUFBTSxZQUEyQzt3QkFDakRDLFNBQVMsR0FBR0QsTUFBTSxDQUFDSyxHQUFHLENBQUNDLFNBQUFBLEtBQUs7bUNBQUlBLEtBQUssQ0FBQ0MsSUFBSTt5QkFBQSxDQUFDO3dCQUNqRGIsT0FBTyxDQUFDQyxHQUFHLENBQUNLLE1BQU0sQ0FBQzt3QkFDbkJOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU9NLFNBQVMsaUNBQWhCLE9BQWdCLENBQVRBLFNBQVMsRUFBQztxREFDdEJBLFNBQVM7Ozs7OztTQUNuQjt3QkFQS0gsZ0JBQWdCOzs7T0FPckI7SUFFRCxxQkFDSSw4REFBQ1UsS0FBRzs7WUFDQ2xDLFFBQVEsa0JBQUksOERBQUNkLGlEQUFHO2dCQUFDaUQsSUFBSSxFQUFDLElBQUk7MEJBQUVqQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUdBLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBR2QsZ0VBQWtCLENBQUNTLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7b0JBQU87WUFDOUYsQ0FBQ00sV0FBVyxrQkFBSSw4REFBQ2hCLG9EQUFNO2dCQUFDaUQsT0FBTyxFQUFFdEIsY0FBYzswQkFBRSxnQkFBYzs7Ozs7b0JBQVM7WUFDeEVYLFdBQVcsa0JBQUksOERBQUNqQixpREFBRzs7b0JBQUMsb0JBQWtCO29CQUFDaUIsV0FBVzs7Ozs7O29CQUFPO1lBQ3pEQSxXQUFXLGtCQUFJLDhEQUFDViwyREFBa0I7Z0JBQ25CNEMsUUFBUSxFQUFFbEMsV0FBVztnQkFDckJtQyxZQUFZLEVBQUVqQyxrQkFBa0I7Z0JBQ2hDa0MsYUFBYSxFQUFFOUIsV0FBVztnQkFDMUJJLGNBQWMsRUFBRUEsY0FBYztnQkFDOUJOLE1BQU0sRUFBRUEsTUFBTTs7Ozs7b0JBQUc7WUFDaEMsQ0FBQ0osV0FBVyxrQkFBSSw4REFBQ1QscURBQVk7Z0JBQUNVLGNBQWMsRUFBRUEsY0FBYztnQkFBRW9CLGdCQUFnQixFQUFFQSxnQkFBZ0I7Ozs7O29CQUFHOzs7Ozs7WUFDbEcsQ0FDVDtDQUNKO0dBeER1QjdCLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0RBcHAudHN4PzFjOWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFnLCBCdXR0b24sIElucHV0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxuaW1wb3J0IHsgV2ViM1Byb3ZpZGVyIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L3Byb3ZpZGVyc1wiXG5pbXBvcnQgdHJ1bmNhdGVFdGhBZGRyZXNzIGZyb20gJ3RydW5jYXRlLWV0aC1hZGRyZXNzJ1xuaW1wb3J0IERhaUFiaSBmcm9tICcuLi9hYmkvRGFpQWJpLmpzb24nXG5pbXBvcnQgRGVwb3NpdEZhY3RvcnlBQkkgZnJvbSAnLi4vY29udHJhY3RzL0RlcG9zaXRGYWN0b3J5Lmpzb24nXG5pbXBvcnQgeyBCaWdOdW1iZXIsIGV0aGVycyB9IGZyb20gJ2V0aGVycydcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBEZXBvc2l0SW50ZXJhY3Rpb24gZnJvbSBcIi4vRGVwb3NpdEludGVyYWN0aW9uXCJcbmltcG9ydCBDb250cmFjdEZvcm0gZnJvbSBcIi4vQ29udHJhY3RGb3JtXCJcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEQXBwKHtjaGFpbklkLCBhY2NvdW50cywgZXJyb3IsIGlzQWN0aXZhdGluZywgaXNBY3RpdmUsIHByb3ZpZGVyLCBFTlNOYW1lc30gOiB7XG4gICAgY2hhaW5JZDogbnVtYmVyLFxuICAgIGFjY291bnRzOiBzdHJpbmdbXSxcbiAgICBlcnJvcjogRXJyb3IsXG4gICAgaXNBY3RpdmF0aW5nOiBib29sZWFuLFxuICAgIGlzQWN0aXZlOiBib29sZWFuLFxuICAgIHByb3ZpZGVyOiBXZWIzUHJvdmlkZXIsXG4gICAgRU5TTmFtZXM6IHN0cmluZ1tdXG59KSB7XG4gICAgXG4gICAgLy9EZWZpbmluZyBhZGRyZXNzIG9mIHRoZSBjb250cmFjdCB0aGF0IHdpbGwgZ2V0IGNyZWF0ZWQgd2hlbiBzdGFydGluZyB0aGUgZGVwb3NpdCBzZXF1ZW5jZVxuICAgIGNvbnN0IFtuZXdDb250cmFjdCwgc2V0TmV3Q29udHJhY3RdID0gdXNlU3RhdGUoJycpO1xuIFxuICAgIC8vQ29udHJhY3QgQWRkcmVzc2VzXG4gICAgY29uc3QgZGFpQ29udHJhY3RBZGRyZXNzID0gJzB4NWVEOEJENTNCMGMzZmEzZEVhQmQzNDU0MzBCMUEzYTZBNGU4QkQ3Qyc7XG4gICAgY29uc3QgZGVwb3NpdEZhY3RvcnlBZGRyZXNzID0gJzB4ODNjNjE3ODg5MDg0OTRGRDEwNkNGNDFCOTlDZmZDQjg2NTYxOGEzMyc7XG5cbiAgICAvL2V0aGVycyBzaWduZXIgYW5kIGNvbnRyYWN0c1xuICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgIGNvbnN0IGRhaUNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChkYWlDb250cmFjdEFkZHJlc3MsIERhaUFiaSwgc2lnbmVyKTtcbiAgICBjb25zdCBkZXBvc2l0RmFjdG9yeSA9IG5ldyBldGhlcnMuQ29udHJhY3QoZGVwb3NpdEZhY3RvcnlBZGRyZXNzLCBEZXBvc2l0RmFjdG9yeUFCSS5hYmksIHNpZ25lcilcblxuICAgIGNvbnN0IGFwcHJvdmFsQW1vdW50ID0gMTAwO1xuXG4gICAgY29uc3QgZGVwb3NpdEhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHR4ID0gYXdhaXQgZGVwb3NpdEZhY3RvcnkuY3JlYXRlRGVwb3NpdChhcHByb3ZhbEFtb3VudCwgMTY1NDE5MzgxNSAsIGRhaUNvbnRyYWN0QWRkcmVzcyk7XG4gICAgICAgIGNvbnN0IHJlY2VpcHQgPSBhd2FpdCB0eC53YWl0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlY2VpcHQpO1xuICAgICAgICBjb25zdCBlbWl0dGVkQWRkcmVzcyA9IHJlY2VpcHQubG9nc1swXS5hZGRyZXNzO1xuICAgICAgICBzZXROZXdDb250cmFjdChlbWl0dGVkQWRkcmVzcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBDb250cmFjdCBjcmVhdGlvbiBzdWNjZXNzZnVsISBDcmVhdGVkIGNvbnRyYWN0IGFkZHJlc3MgaXM6ICR7ZW1pdHRlZEFkZHJlc3N9LmApXG4gICAgfVxuXG4gICAgY29uc3QgYWxsUHJldkNvbnRyYWN0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgZmlsdGVyID0gZGVwb3NpdEZhY3RvcnkuZmlsdGVycy5EZXBvc2l0Q3JlYXRlZCgpO1xuICAgICAgICBjb25zdCBldmVudHMgPSBhd2FpdCBkZXBvc2l0RmFjdG9yeS5xdWVyeUZpbHRlcihmaWx0ZXIpO1xuICAgICAgICBjb25zdCBhZGRyZXNzZXMgPSBldmVudHMubWFwKGV2ZW50ID0+IGV2ZW50LmFyZ3MpXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50cylcbiAgICAgICAgY29uc29sZS5sb2codHlwZW9mIGFkZHJlc3NlcylcbiAgICAgICAgcmV0dXJuIGFkZHJlc3NlcztcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2lzQWN0aXZlICYmIDxUYWcgc2l6ZT0nbGcnPntFTlNOYW1lc1swXSA/IEVOU05hbWVzWzBdIDogdHJ1bmNhdGVFdGhBZGRyZXNzKGFjY291bnRzWzBdKX08L1RhZz59XG4gICAgICAgICAgICB7IW5ld0NvbnRyYWN0ICYmIDxCdXR0b24gb25DbGljaz17ZGVwb3NpdEhhbmRsZXJ9PkNyZWF0ZSBEZXBvc2l0PC9CdXR0b24+fVxuICAgICAgICAgICAge25ld0NvbnRyYWN0ICYmIDxUYWc+Q29udHJhY3QgQ3JlYXRlZDoge25ld0NvbnRyYWN0fTwvVGFnPn1cbiAgICAgICAgICAgIHtuZXdDb250cmFjdCAmJiA8RGVwb3NpdEludGVyYWN0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyYWN0PXtuZXdDb250cmFjdH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5BZGRyZXNzPXtkYWlDb250cmFjdEFkZHJlc3N9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuQ29udHJhY3Q9e2RhaUNvbnRyYWN0fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHByb3ZhbEFtb3VudD17YXBwcm92YWxBbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmVyPXtzaWduZXJ9Lz59XG4gICAgICAgICAgICB7IW5ld0NvbnRyYWN0ICYmIDxDb250cmFjdEZvcm0gc2V0TmV3Q29udHJhY3Q9e3NldE5ld0NvbnRyYWN0fSBhbGxQcmV2Q29udHJhY3RzPXthbGxQcmV2Q29udHJhY3RzfS8+fVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbIlRhZyIsIkJ1dHRvbiIsInRydW5jYXRlRXRoQWRkcmVzcyIsIkRhaUFiaSIsIkRlcG9zaXRGYWN0b3J5QUJJIiwiZXRoZXJzIiwidXNlU3RhdGUiLCJEZXBvc2l0SW50ZXJhY3Rpb24iLCJDb250cmFjdEZvcm0iLCJEQXBwIiwiY2hhaW5JZCIsImFjY291bnRzIiwiZXJyb3IiLCJpc0FjdGl2YXRpbmciLCJpc0FjdGl2ZSIsInByb3ZpZGVyIiwiRU5TTmFtZXMiLCJuZXdDb250cmFjdCIsInNldE5ld0NvbnRyYWN0IiwiZGFpQ29udHJhY3RBZGRyZXNzIiwiZGVwb3NpdEZhY3RvcnlBZGRyZXNzIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwiZGFpQ29udHJhY3QiLCJDb250cmFjdCIsImRlcG9zaXRGYWN0b3J5IiwiYWJpIiwiYXBwcm92YWxBbW91bnQiLCJkZXBvc2l0SGFuZGxlciIsInR4IiwicmVjZWlwdCIsImVtaXR0ZWRBZGRyZXNzIiwiY3JlYXRlRGVwb3NpdCIsIndhaXQiLCJjb25zb2xlIiwibG9nIiwibG9ncyIsImFkZHJlc3MiLCJhbGxQcmV2Q29udHJhY3RzIiwiZmlsdGVyIiwiZXZlbnRzIiwiYWRkcmVzc2VzIiwiZmlsdGVycyIsIkRlcG9zaXRDcmVhdGVkIiwicXVlcnlGaWx0ZXIiLCJtYXAiLCJldmVudCIsImFyZ3MiLCJkaXYiLCJzaXplIiwib25DbGljayIsImNvbnRyYWN0IiwidG9rZW5BZGRyZXNzIiwidG9rZW5Db250cmFjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DApp.tsx\n");

/***/ })

});