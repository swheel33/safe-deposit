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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DApp; }\n/* harmony export */ });\n/* harmony import */ var _Users_swheel_Desktop_dev_crypto_deposits_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_swheel_Desktop_dev_crypto_deposits_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_swheel_Desktop_dev_crypto_deposits_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var truncate_eth_address__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! truncate-eth-address */ \"./node_modules/truncate-eth-address/dist/index.js\");\n/* harmony import */ var _abi_DaiAbi_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abi/DaiAbi.json */ \"./abi/DaiAbi.json\");\n/* harmony import */ var _contracts_DepositFactory_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contracts/DepositFactory.json */ \"./contracts/DepositFactory.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _DepositInteraction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DepositInteraction */ \"./components/DepositInteraction.tsx\");\n/* harmony import */ var _ContractForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ContractForm */ \"./components/ContractForm.tsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction DApp(param) {\n    var chainId = param.chainId, accounts = param.accounts, error = param.error, isActivating = param.isActivating, isActive = param.isActive, provider = param.provider, ENSNames = param.ENSNames;\n    _s();\n    //Defining address of the contract that will get created when starting the deposit sequence\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\"), newContract = ref[0], setNewContract = ref[1];\n    //Contract Addresses\n    var daiContractAddress = \"0x5eD8BD53B0c3fa3dEaBd345430B1A3a6A4e8BD7C\";\n    var depositFactoryAddress = \"0x83c61788908494FD106CF41B99CffCB865618a33\";\n    //ethers signer and contracts\n    var signer = provider.getSigner();\n    var daiContract = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(daiContractAddress, _abi_DaiAbi_json__WEBPACK_IMPORTED_MODULE_3__, signer);\n    var depositFactory = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(depositFactoryAddress, _contracts_DepositFactory_json__WEBPACK_IMPORTED_MODULE_4__.abi, signer);\n    var approvalAmount = 100;\n    var depositHandler = function() {\n        var _ref = _asyncToGenerator(_Users_swheel_Desktop_dev_crypto_deposits_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var tx, receipt, emittedAddress;\n            return _Users_swheel_Desktop_dev_crypto_deposits_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return depositFactory.createDeposit(approvalAmount, 1654193815, daiContractAddress);\n                    case 2:\n                        tx = _ctx.sent;\n                        _ctx.next = 5;\n                        return tx.wait();\n                    case 5:\n                        receipt = _ctx.sent;\n                        console.log(receipt);\n                        emittedAddress = receipt.logs[0].address;\n                        setNewContract(emittedAddress);\n                        console.log(\"Contract creation successful! Created contract address is: \".concat(emittedAddress, \".\"));\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function depositHandler() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var allPrevContracts = function() {\n        var _ref = _asyncToGenerator(_Users_swheel_Desktop_dev_crypto_deposits_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var filter, addresses;\n            return _Users_swheel_Desktop_dev_crypto_deposits_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        filter = depositFactory.filters.DepositCreated();\n                        ;\n                        _ctx.next = 4;\n                        return depositFactory.queryFilter(filter).then(function(result) {\n                            addresses = result.map(function(event) {\n                                return event.args[0];\n                            });\n                        });\n                    case 4:\n                        return _ctx.abrupt(\"return\", addresses);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function allPrevContracts() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        return console.log(allPrevContracts());\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            isActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Tag, {\n                size: \"lg\",\n                children: ENSNames[0] ? ENSNames[0] : (0,truncate_eth_address__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(accounts[0])\n            }, void 0, false, {\n                fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/DApp.tsx\",\n                lineNumber: 59,\n                columnNumber: 26\n            }, this),\n            !newContract && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                onClick: depositHandler,\n                children: \"Create Deposit\"\n            }, void 0, false, {\n                fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/DApp.tsx\",\n                lineNumber: 60,\n                columnNumber: 30\n            }, this),\n            newContract && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Tag, {\n                children: [\n                    \"Contract Created: \",\n                    newContract\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/DApp.tsx\",\n                lineNumber: 61,\n                columnNumber: 29\n            }, this),\n            newContract && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_DepositInteraction__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                contract: newContract,\n                tokenAddress: daiContractAddress,\n                tokenContract: daiContract,\n                approvalAmount: approvalAmount,\n                signer: signer\n            }, void 0, false, {\n                fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/DApp.tsx\",\n                lineNumber: 62,\n                columnNumber: 29\n            }, this),\n            !newContract && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ContractForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                setNewContract: setNewContract,\n                allPrevContracts: allPrevContracts\n            }, void 0, false, {\n                fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/DApp.tsx\",\n                lineNumber: 68,\n                columnNumber: 30\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/swheel/Desktop/dev/crypto/deposits/frontend/components/DApp.tsx\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, this);\n};\n_s(DApp, \"4UAO89cZpwyRav4ptF9aIJMX2R4=\");\n_c = DApp;\nvar _c;\n$RefreshReg$(_c, \"DApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0NuQyxRQUFRLGtCQUFJLDhEQUFDZixpREFBRztnQkFBQ21ELElBQUksRUFBQyxJQUFJOzBCQUFFbEMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHQSxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUdmLGdFQUFrQixDQUFDVSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7O29CQUFPO1lBQzlGLENBQUNNLFdBQVcsa0JBQUksOERBQUNqQixvREFBTTtnQkFBQ21ELE9BQU8sRUFBRXZCLGNBQWM7MEJBQUUsZ0JBQWM7Ozs7O29CQUFTO1lBQ3hFWCxXQUFXLGtCQUFJLDhEQUFDbEIsaURBQUc7O29CQUFDLG9CQUFrQjtvQkFBQ2tCLFdBQVc7Ozs7OztvQkFBTztZQUN6REEsV0FBVyxrQkFBSSw4REFBQ1YsMkRBQWtCO2dCQUNuQjZDLFFBQVEsRUFBRW5DLFdBQVc7Z0JBQ3JCb0MsWUFBWSxFQUFFbEMsa0JBQWtCO2dCQUNoQ21DLGFBQWEsRUFBRS9CLFdBQVc7Z0JBQzFCSSxjQUFjLEVBQUVBLGNBQWM7Z0JBQzlCTixNQUFNLEVBQUVBLE1BQU07Ozs7O29CQUFHO1lBQ2hDLENBQUNKLFdBQVcsa0JBQUksOERBQUNULHFEQUFZO2dCQUFDVSxjQUFjLEVBQUVBLGNBQWM7Z0JBQUVvQixnQkFBZ0IsRUFBRUEsZ0JBQWdCOzs7OztvQkFBRzs7Ozs7O1lBQ2xHLENBQ1Q7Q0FDSjtHQTNEdUI3QixJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EQXBwLnRzeD8xYzlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhZywgQnV0dG9uLCBJbnB1dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcbmltcG9ydCB7IFdlYjNQcm92aWRlciB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9wcm92aWRlcnNcIlxuaW1wb3J0IHRydW5jYXRlRXRoQWRkcmVzcyBmcm9tICd0cnVuY2F0ZS1ldGgtYWRkcmVzcydcbmltcG9ydCBEYWlBYmkgZnJvbSAnLi4vYWJpL0RhaUFiaS5qc29uJ1xuaW1wb3J0IERlcG9zaXRGYWN0b3J5QUJJIGZyb20gJy4uL2NvbnRyYWN0cy9EZXBvc2l0RmFjdG9yeS5qc29uJ1xuaW1wb3J0IHsgQmlnTnVtYmVyLCBldGhlcnMgfSBmcm9tICdldGhlcnMnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRGVwb3NpdEludGVyYWN0aW9uIGZyb20gXCIuL0RlcG9zaXRJbnRlcmFjdGlvblwiXG5pbXBvcnQgQ29udHJhY3RGb3JtIGZyb20gXCIuL0NvbnRyYWN0Rm9ybVwiXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gREFwcCh7Y2hhaW5JZCwgYWNjb3VudHMsIGVycm9yLCBpc0FjdGl2YXRpbmcsIGlzQWN0aXZlLCBwcm92aWRlciwgRU5TTmFtZXN9IDoge1xuICAgIGNoYWluSWQ6IG51bWJlcixcbiAgICBhY2NvdW50czogc3RyaW5nW10sXG4gICAgZXJyb3I6IEVycm9yLFxuICAgIGlzQWN0aXZhdGluZzogYm9vbGVhbixcbiAgICBpc0FjdGl2ZTogYm9vbGVhbixcbiAgICBwcm92aWRlcjogV2ViM1Byb3ZpZGVyLFxuICAgIEVOU05hbWVzOiBzdHJpbmdbXVxufSkge1xuICAgIFxuICAgIC8vRGVmaW5pbmcgYWRkcmVzcyBvZiB0aGUgY29udHJhY3QgdGhhdCB3aWxsIGdldCBjcmVhdGVkIHdoZW4gc3RhcnRpbmcgdGhlIGRlcG9zaXQgc2VxdWVuY2VcbiAgICBjb25zdCBbbmV3Q29udHJhY3QsIHNldE5ld0NvbnRyYWN0XSA9IHVzZVN0YXRlKCcnKTtcbiBcbiAgICAvL0NvbnRyYWN0IEFkZHJlc3Nlc1xuICAgIGNvbnN0IGRhaUNvbnRyYWN0QWRkcmVzcyA9ICcweDVlRDhCRDUzQjBjM2ZhM2RFYUJkMzQ1NDMwQjFBM2E2QTRlOEJEN0MnO1xuICAgIGNvbnN0IGRlcG9zaXRGYWN0b3J5QWRkcmVzcyA9ICcweDgzYzYxNzg4OTA4NDk0RkQxMDZDRjQxQjk5Q2ZmQ0I4NjU2MThhMzMnO1xuXG4gICAgLy9ldGhlcnMgc2lnbmVyIGFuZCBjb250cmFjdHNcbiAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICBjb25zdCBkYWlDb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoZGFpQ29udHJhY3RBZGRyZXNzLCBEYWlBYmksIHNpZ25lcik7XG4gICAgY29uc3QgZGVwb3NpdEZhY3RvcnkgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGRlcG9zaXRGYWN0b3J5QWRkcmVzcywgRGVwb3NpdEZhY3RvcnlBQkkuYWJpLCBzaWduZXIpXG5cbiAgICBjb25zdCBhcHByb3ZhbEFtb3VudCA9IDEwMDtcblxuICAgIGNvbnN0IGRlcG9zaXRIYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCB0eCA9IGF3YWl0IGRlcG9zaXRGYWN0b3J5LmNyZWF0ZURlcG9zaXQoYXBwcm92YWxBbW91bnQsIDE2NTQxOTM4MTUgLCBkYWlDb250cmFjdEFkZHJlc3MpO1xuICAgICAgICBjb25zdCByZWNlaXB0ID0gYXdhaXQgdHgud2FpdCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZWNlaXB0KTtcbiAgICAgICAgY29uc3QgZW1pdHRlZEFkZHJlc3MgPSByZWNlaXB0LmxvZ3NbMF0uYWRkcmVzcztcbiAgICAgICAgc2V0TmV3Q29udHJhY3QoZW1pdHRlZEFkZHJlc3MpO1xuICAgICAgICBjb25zb2xlLmxvZyhgQ29udHJhY3QgY3JlYXRpb24gc3VjY2Vzc2Z1bCEgQ3JlYXRlZCBjb250cmFjdCBhZGRyZXNzIGlzOiAke2VtaXR0ZWRBZGRyZXNzfS5gKVxuICAgIH1cblxuICAgIGNvbnN0IGFsbFByZXZDb250cmFjdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbHRlciA9IGRlcG9zaXRGYWN0b3J5LmZpbHRlcnMuRGVwb3NpdENyZWF0ZWQoKTtcbiAgICAgICAgbGV0IGFkZHJlc3NlcztcbiAgICAgICAgYXdhaXQgZGVwb3NpdEZhY3RvcnkucXVlcnlGaWx0ZXIoZmlsdGVyKVxuICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgYWRkcmVzc2VzID0gcmVzdWx0Lm1hcChldmVudCA9PiBldmVudC5hcmdzWzBdKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gYWRkcmVzc2VzO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiBjb25zb2xlLmxvZyhhbGxQcmV2Q29udHJhY3RzKCkpLCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7aXNBY3RpdmUgJiYgPFRhZyBzaXplPSdsZyc+e0VOU05hbWVzWzBdID8gRU5TTmFtZXNbMF0gOiB0cnVuY2F0ZUV0aEFkZHJlc3MoYWNjb3VudHNbMF0pfTwvVGFnPn1cbiAgICAgICAgICAgIHshbmV3Q29udHJhY3QgJiYgPEJ1dHRvbiBvbkNsaWNrPXtkZXBvc2l0SGFuZGxlcn0+Q3JlYXRlIERlcG9zaXQ8L0J1dHRvbj59XG4gICAgICAgICAgICB7bmV3Q29udHJhY3QgJiYgPFRhZz5Db250cmFjdCBDcmVhdGVkOiB7bmV3Q29udHJhY3R9PC9UYWc+fVxuICAgICAgICAgICAge25ld0NvbnRyYWN0ICYmIDxEZXBvc2l0SW50ZXJhY3Rpb24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJhY3Q9e25ld0NvbnRyYWN0fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbkFkZHJlc3M9e2RhaUNvbnRyYWN0QWRkcmVzc30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5Db250cmFjdD17ZGFpQ29udHJhY3R9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcHJvdmFsQW1vdW50PXthcHByb3ZhbEFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduZXI9e3NpZ25lcn0vPn1cbiAgICAgICAgICAgIHshbmV3Q29udHJhY3QgJiYgPENvbnRyYWN0Rm9ybSBzZXROZXdDb250cmFjdD17c2V0TmV3Q29udHJhY3R9IGFsbFByZXZDb250cmFjdHM9e2FsbFByZXZDb250cmFjdHN9Lz59XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiVGFnIiwiQnV0dG9uIiwidHJ1bmNhdGVFdGhBZGRyZXNzIiwiRGFpQWJpIiwiRGVwb3NpdEZhY3RvcnlBQkkiLCJldGhlcnMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkRlcG9zaXRJbnRlcmFjdGlvbiIsIkNvbnRyYWN0Rm9ybSIsIkRBcHAiLCJjaGFpbklkIiwiYWNjb3VudHMiLCJlcnJvciIsImlzQWN0aXZhdGluZyIsImlzQWN0aXZlIiwicHJvdmlkZXIiLCJFTlNOYW1lcyIsIm5ld0NvbnRyYWN0Iiwic2V0TmV3Q29udHJhY3QiLCJkYWlDb250cmFjdEFkZHJlc3MiLCJkZXBvc2l0RmFjdG9yeUFkZHJlc3MiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJkYWlDb250cmFjdCIsIkNvbnRyYWN0IiwiZGVwb3NpdEZhY3RvcnkiLCJhYmkiLCJhcHByb3ZhbEFtb3VudCIsImRlcG9zaXRIYW5kbGVyIiwidHgiLCJyZWNlaXB0IiwiZW1pdHRlZEFkZHJlc3MiLCJjcmVhdGVEZXBvc2l0Iiwid2FpdCIsImNvbnNvbGUiLCJsb2ciLCJsb2dzIiwiYWRkcmVzcyIsImFsbFByZXZDb250cmFjdHMiLCJmaWx0ZXIiLCJhZGRyZXNzZXMiLCJmaWx0ZXJzIiwiRGVwb3NpdENyZWF0ZWQiLCJxdWVyeUZpbHRlciIsInRoZW4iLCJyZXN1bHQiLCJtYXAiLCJldmVudCIsImFyZ3MiLCJkaXYiLCJzaXplIiwib25DbGljayIsImNvbnRyYWN0IiwidG9rZW5BZGRyZXNzIiwidG9rZW5Db250cmFjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DApp.tsx\n");

/***/ })

});