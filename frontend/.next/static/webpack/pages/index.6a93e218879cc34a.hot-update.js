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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DApp; }\n/* harmony export */ });\n/* harmony import */ var _Users_swheel_Desktop_dev_crypto_deposits_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_swheel_Desktop_dev_crypto_deposits_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_swheel_Desktop_dev_crypto_deposits_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var truncate_eth_address__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! truncate-eth-address */ \"./node_modules/truncate-eth-address/dist/index.js\");\n/* harmony import */ var _abi_DaiAbi_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abi/DaiAbi.json */ \"./abi/DaiAbi.json\");\n/* harmony import */ var _contracts_DepositFactory_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contracts/DepositFactory.json */ \"./contracts/DepositFactory.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _DepositInteraction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DepositInteraction */ \"./components/DepositInteraction.tsx\");\n/* harmony import */ var _ContractForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ContractForm */ \"./components/ContractForm.tsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction DApp(param) {\n    var chainId = param.chainId, accounts = param.accounts, error = param.error, isActivating = param.isActivating, isActive = param.isActive, provider = param.provider, ENSNames = param.ENSNames;\n    _s();\n    //Correct chain check\n    var isCorrectChain = chainId === 4;\n    //Defining address of the contract that will get created when starting the deposit sequence\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\"), newContract = ref[0], setNewContract = ref[1];\n    //Contract Addresses\n    var daiContractAddress = \"0x5eD8BD53B0c3fa3dEaBd345430B1A3a6A4e8BD7C\";\n    var depositFactoryAddress = \"0x83c61788908494FD106CF41B99CffCB865618a33\";\n    //ethers signer and contracts\n    var signer = provider.getSigner();\n    var daiContract = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(daiContractAddress, _abi_DaiAbi_json__WEBPACK_IMPORTED_MODULE_3__, signer);\n    var depositFactory = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(depositFactoryAddress, _contracts_DepositFactory_json__WEBPACK_IMPORTED_MODULE_4__.abi, signer);\n    var approvalAmount = 100;\n    var depositHandler = function() {\n        var _ref = _asyncToGenerator(_Users_swheel_Desktop_dev_crypto_deposits_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var tx, receipt, emittedAddress;\n            return _Users_swheel_Desktop_dev_crypto_deposits_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return depositFactory.createDeposit(approvalAmount, 1654193815, daiContractAddress);\n                    case 2:\n                        tx = _ctx.sent;\n                        _ctx.next = 5;\n                        return tx.wait();\n                    case 5:\n                        receipt = _ctx.sent;\n                        console.log(receipt);\n                        emittedAddress = receipt.logs[0].address;\n                        setNewContract(emittedAddress);\n                        console.log(\"Contract creation successful! Created contract address is: \".concat(emittedAddress, \".\"));\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function depositHandler() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    //Gets all previous contract events created for validation with ContractForm\n    var allPrevContracts = function() {\n        var _ref = _asyncToGenerator(_Users_swheel_Desktop_dev_crypto_deposits_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var filter, events, addresses;\n            return _Users_swheel_Desktop_dev_crypto_deposits_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        filter = depositFactory.filters.DepositCreated();\n                        _ctx.next = 3;\n                        return depositFactory.queryFilter(filter);\n                    case 3:\n                        events = _ctx.sent;\n                        addresses = events.map(function(event) {\n                            return event.args[0];\n                        });\n                        return _ctx.abrupt(\"return\", addresses);\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function allPrevContracts() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return isCorrectChain && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            isActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Tag, {\n                size: \"lg\",\n                children: ENSNames[0] ? ENSNames[0] : (0,truncate_eth_address__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(accounts[0])\n            }, void 0, false, {\n                fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/DApp.tsx\",\n                lineNumber: 57,\n                columnNumber: 26\n            }, this),\n            !newContract && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                onClick: depositHandler,\n                children: \"Create Deposit\"\n            }, void 0, false, {\n                fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/DApp.tsx\",\n                lineNumber: 58,\n                columnNumber: 30\n            }, this),\n            newContract && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Tag, {\n                children: [\n                    \"Contract Created: \",\n                    newContract\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/DApp.tsx\",\n                lineNumber: 59,\n                columnNumber: 29\n            }, this),\n            newContract && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_DepositInteraction__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                contract: newContract,\n                tokenAddress: daiContractAddress,\n                tokenContract: daiContract,\n                approvalAmount: approvalAmount,\n                signer: signer\n            }, void 0, false, {\n                fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/DApp.tsx\",\n                lineNumber: 60,\n                columnNumber: 29\n            }, this),\n            !newContract && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ContractForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                setNewContract: setNewContract,\n                allPrevContracts: allPrevContracts()\n            }, void 0, false, {\n                fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/DApp.tsx\",\n                lineNumber: 66,\n                columnNumber: 30\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/DApp.tsx\",\n        lineNumber: 56,\n        columnNumber: 27\n    }, this);\n};\n_s(DApp, \"v2x6wirwKCy++9DuW8s383qRkbI=\");\n_c = DApp;\nvar _c;\n$RefreshReg$(_c, \"DApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0QsSUFBSSxFQUFDLElBQUk7MEJBQUVsQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUdBLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBR2QsZ0VBQWtCLENBQUNTLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7b0JBQU87WUFDOUYsQ0FBQ08sV0FBVyxrQkFBSSw4REFBQ2pCLG9EQUFNO2dCQUFDa0QsT0FBTyxFQUFFdEIsY0FBYzswQkFBRSxnQkFBYzs7Ozs7b0JBQVM7WUFDeEVYLFdBQVcsa0JBQUksOERBQUNsQixpREFBRzs7b0JBQUMsb0JBQWtCO29CQUFDa0IsV0FBVzs7Ozs7O29CQUFPO1lBQ3pEQSxXQUFXLGtCQUFJLDhEQUFDWCwyREFBa0I7Z0JBQ25CNkMsUUFBUSxFQUFFbEMsV0FBVztnQkFDckJtQyxZQUFZLEVBQUVqQyxrQkFBa0I7Z0JBQ2hDa0MsYUFBYSxFQUFFOUIsV0FBVztnQkFDMUJJLGNBQWMsRUFBRUEsY0FBYztnQkFDOUJOLE1BQU0sRUFBRUEsTUFBTTs7Ozs7b0JBQUc7WUFDaEMsQ0FBQ0osV0FBVyxrQkFBSSw4REFBQ1YscURBQVk7Z0JBQUNXLGNBQWMsRUFBRUEsY0FBYztnQkFBRW9CLGdCQUFnQixFQUFFQSxnQkFBZ0IsRUFBRTs7Ozs7b0JBQUc7Ozs7OztZQUNwRyxDQUNUO0NBQ0o7R0F6RHVCOUIsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvREFwcC50c3g/MWM5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWcsIEJ1dHRvbiwgSW5wdXQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXG5pbXBvcnQgeyBXZWIzUHJvdmlkZXIgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvcHJvdmlkZXJzXCJcbmltcG9ydCB0cnVuY2F0ZUV0aEFkZHJlc3MgZnJvbSAndHJ1bmNhdGUtZXRoLWFkZHJlc3MnXG5pbXBvcnQgRGFpQWJpIGZyb20gJy4uL2FiaS9EYWlBYmkuanNvbidcbmltcG9ydCBEZXBvc2l0RmFjdG9yeUFCSSBmcm9tICcuLi9jb250cmFjdHMvRGVwb3NpdEZhY3RvcnkuanNvbidcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycydcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRGVwb3NpdEludGVyYWN0aW9uIGZyb20gXCIuL0RlcG9zaXRJbnRlcmFjdGlvblwiXG5pbXBvcnQgQ29udHJhY3RGb3JtIGZyb20gXCIuL0NvbnRyYWN0Rm9ybVwiXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gREFwcCh7Y2hhaW5JZCwgYWNjb3VudHMsIGVycm9yLCBpc0FjdGl2YXRpbmcsIGlzQWN0aXZlLCBwcm92aWRlciwgRU5TTmFtZXN9IDoge1xuICAgIGNoYWluSWQ6IG51bWJlcixcbiAgICBhY2NvdW50czogc3RyaW5nW10sXG4gICAgZXJyb3I6IEVycm9yLFxuICAgIGlzQWN0aXZhdGluZzogYm9vbGVhbixcbiAgICBpc0FjdGl2ZTogYm9vbGVhbixcbiAgICBwcm92aWRlcjogV2ViM1Byb3ZpZGVyLFxuICAgIEVOU05hbWVzOiBzdHJpbmdbXVxufSkge1xuICAgIC8vQ29ycmVjdCBjaGFpbiBjaGVja1xuICAgIGNvbnN0IGlzQ29ycmVjdENoYWluID0gY2hhaW5JZCA9PT0gNDtcblxuICAgIC8vRGVmaW5pbmcgYWRkcmVzcyBvZiB0aGUgY29udHJhY3QgdGhhdCB3aWxsIGdldCBjcmVhdGVkIHdoZW4gc3RhcnRpbmcgdGhlIGRlcG9zaXQgc2VxdWVuY2VcbiAgICBjb25zdCBbbmV3Q29udHJhY3QsIHNldE5ld0NvbnRyYWN0XSA9IHVzZVN0YXRlKCcnKTtcbiBcbiAgICAvL0NvbnRyYWN0IEFkZHJlc3Nlc1xuICAgIGNvbnN0IGRhaUNvbnRyYWN0QWRkcmVzcyA9ICcweDVlRDhCRDUzQjBjM2ZhM2RFYUJkMzQ1NDMwQjFBM2E2QTRlOEJEN0MnO1xuICAgIGNvbnN0IGRlcG9zaXRGYWN0b3J5QWRkcmVzcyA9ICcweDgzYzYxNzg4OTA4NDk0RkQxMDZDRjQxQjk5Q2ZmQ0I4NjU2MThhMzMnO1xuXG4gICAgLy9ldGhlcnMgc2lnbmVyIGFuZCBjb250cmFjdHNcbiAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICBjb25zdCBkYWlDb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoZGFpQ29udHJhY3RBZGRyZXNzLCBEYWlBYmksIHNpZ25lcik7XG4gICAgY29uc3QgZGVwb3NpdEZhY3RvcnkgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGRlcG9zaXRGYWN0b3J5QWRkcmVzcywgRGVwb3NpdEZhY3RvcnlBQkkuYWJpLCBzaWduZXIpXG5cbiAgICBjb25zdCBhcHByb3ZhbEFtb3VudCA9IDEwMDtcblxuICAgIGNvbnN0IGRlcG9zaXRIYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCB0eCA9IGF3YWl0IGRlcG9zaXRGYWN0b3J5LmNyZWF0ZURlcG9zaXQoYXBwcm92YWxBbW91bnQsIDE2NTQxOTM4MTUgLCBkYWlDb250cmFjdEFkZHJlc3MpO1xuICAgICAgICBjb25zdCByZWNlaXB0ID0gYXdhaXQgdHgud2FpdCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZWNlaXB0KTtcbiAgICAgICAgY29uc3QgZW1pdHRlZEFkZHJlc3MgPSByZWNlaXB0LmxvZ3NbMF0uYWRkcmVzcztcbiAgICAgICAgc2V0TmV3Q29udHJhY3QoZW1pdHRlZEFkZHJlc3MpO1xuICAgICAgICBjb25zb2xlLmxvZyhgQ29udHJhY3QgY3JlYXRpb24gc3VjY2Vzc2Z1bCEgQ3JlYXRlZCBjb250cmFjdCBhZGRyZXNzIGlzOiAke2VtaXR0ZWRBZGRyZXNzfS5gKVxuICAgIH1cbiAgICBcbiAgICAvL0dldHMgYWxsIHByZXZpb3VzIGNvbnRyYWN0IGV2ZW50cyBjcmVhdGVkIGZvciB2YWxpZGF0aW9uIHdpdGggQ29udHJhY3RGb3JtXG4gICAgY29uc3QgYWxsUHJldkNvbnRyYWN0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgZmlsdGVyID0gZGVwb3NpdEZhY3RvcnkuZmlsdGVycy5EZXBvc2l0Q3JlYXRlZCgpO1xuICAgICAgICBjb25zdCBldmVudHMgPSBhd2FpdCBkZXBvc2l0RmFjdG9yeS5xdWVyeUZpbHRlcihmaWx0ZXIpO1xuICAgICAgICBjb25zdCBhZGRyZXNzZXMgPSBldmVudHMubWFwKGV2ZW50ID0+IGV2ZW50LmFyZ3NbMF0pXG4gICAgICAgIHJldHVybiBhZGRyZXNzZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgaXNDb3JyZWN0Q2hhaW4gJiYgPGRpdj5cbiAgICAgICAgICAgIHtpc0FjdGl2ZSAmJiA8VGFnIHNpemU9J2xnJz57RU5TTmFtZXNbMF0gPyBFTlNOYW1lc1swXSA6IHRydW5jYXRlRXRoQWRkcmVzcyhhY2NvdW50c1swXSl9PC9UYWc+fVxuICAgICAgICAgICAgeyFuZXdDb250cmFjdCAmJiA8QnV0dG9uIG9uQ2xpY2s9e2RlcG9zaXRIYW5kbGVyfT5DcmVhdGUgRGVwb3NpdDwvQnV0dG9uPn1cbiAgICAgICAgICAgIHtuZXdDb250cmFjdCAmJiA8VGFnPkNvbnRyYWN0IENyZWF0ZWQ6IHtuZXdDb250cmFjdH08L1RhZz59XG4gICAgICAgICAgICB7bmV3Q29udHJhY3QgJiYgPERlcG9zaXRJbnRlcmFjdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cmFjdD17bmV3Q29udHJhY3R9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuQWRkcmVzcz17ZGFpQ29udHJhY3RBZGRyZXNzfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbkNvbnRyYWN0PXtkYWlDb250cmFjdH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwcm92YWxBbW91bnQ9e2FwcHJvdmFsQW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25lcj17c2lnbmVyfS8+fVxuICAgICAgICAgICAgeyFuZXdDb250cmFjdCAmJiA8Q29udHJhY3RGb3JtIHNldE5ld0NvbnRyYWN0PXtzZXROZXdDb250cmFjdH0gYWxsUHJldkNvbnRyYWN0cz17YWxsUHJldkNvbnRyYWN0cygpfS8+fVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbIlRhZyIsIkJ1dHRvbiIsInRydW5jYXRlRXRoQWRkcmVzcyIsIkRhaUFiaSIsIkRlcG9zaXRGYWN0b3J5QUJJIiwiZXRoZXJzIiwidXNlU3RhdGUiLCJEZXBvc2l0SW50ZXJhY3Rpb24iLCJDb250cmFjdEZvcm0iLCJEQXBwIiwiY2hhaW5JZCIsImFjY291bnRzIiwiZXJyb3IiLCJpc0FjdGl2YXRpbmciLCJpc0FjdGl2ZSIsInByb3ZpZGVyIiwiRU5TTmFtZXMiLCJpc0NvcnJlY3RDaGFpbiIsIm5ld0NvbnRyYWN0Iiwic2V0TmV3Q29udHJhY3QiLCJkYWlDb250cmFjdEFkZHJlc3MiLCJkZXBvc2l0RmFjdG9yeUFkZHJlc3MiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJkYWlDb250cmFjdCIsIkNvbnRyYWN0IiwiZGVwb3NpdEZhY3RvcnkiLCJhYmkiLCJhcHByb3ZhbEFtb3VudCIsImRlcG9zaXRIYW5kbGVyIiwidHgiLCJyZWNlaXB0IiwiZW1pdHRlZEFkZHJlc3MiLCJjcmVhdGVEZXBvc2l0Iiwid2FpdCIsImNvbnNvbGUiLCJsb2ciLCJsb2dzIiwiYWRkcmVzcyIsImFsbFByZXZDb250cmFjdHMiLCJmaWx0ZXIiLCJldmVudHMiLCJhZGRyZXNzZXMiLCJmaWx0ZXJzIiwiRGVwb3NpdENyZWF0ZWQiLCJxdWVyeUZpbHRlciIsIm1hcCIsImV2ZW50IiwiYXJncyIsImRpdiIsInNpemUiLCJvbkNsaWNrIiwiY29udHJhY3QiLCJ0b2tlbkFkZHJlc3MiLCJ0b2tlbkNvbnRyYWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DApp.tsx\n");

/***/ })

});