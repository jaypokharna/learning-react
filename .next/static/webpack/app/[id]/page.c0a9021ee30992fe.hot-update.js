"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[id]/page",{

/***/ "(app-pages-browser)/./app/[id]/page.js":
/*!**************************!*\
  !*** ./app/[id]/page.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst contact = (param)=>{\n    let { params } = param;\n    _s();\n    const { id } = params;\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getUser = async ()=>{\n        const { data } = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"https://jsonplaceholder.typicode.com/users/\" + id);\n        console.log(JSON.stringify(data.name));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getUser();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-xl bg-cyan-500 m-2 p-2\",\n                children: [\n                    \"Page ID - \",\n                    id\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jaypokharna/Desktop/ReactJS/learningreact/app/[id]/page.js\",\n                lineNumber: 21,\n                columnNumber: 6\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-xl bg-cyan-500 m-2 p-2\",\n                children: [\n                    \"Data - \",\n                    JSON.stringify\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jaypokharna/Desktop/ReactJS/learningreact/app/[id]/page.js\",\n                lineNumber: 22,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(contact, \"JadZszbqna06PpJs9hMo7Hl/LOY=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (contact);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9baWRdL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUN5QjtBQUN5QjtBQUVsRCxNQUFNSSxVQUFVO1FBQUMsRUFBQ0MsTUFBTSxFQUFDOztJQUN2QixNQUFNLEVBQUNDLEVBQUUsRUFBQyxHQUFHRDtJQUViLE1BQU0sQ0FBQ0UsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU1NLFVBQVU7UUFDZCxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHLE1BQU1WLDZDQUFLQSxDQUFDVyxHQUFHLENBQUMsZ0RBQThDTDtRQUMvRU0sUUFBUUMsR0FBRyxDQUFDQyxLQUFLQyxTQUFTLENBQUNMLEtBQUtNLElBQUk7SUFDdEM7SUFFQWQsZ0RBQVNBLENBQUM7UUFDUk87SUFDRixHQUFHLEVBQUU7SUFHTCxxQkFDRTs7MEJBQ0MsOERBQUNRO2dCQUFJQyxXQUFVOztvQkFBOEI7b0JBQVdaOzs7Ozs7OzBCQUN6RCw4REFBQ1c7Z0JBQUlDLFdBQVU7O29CQUE4QjtvQkFBUUosS0FBS0MsU0FBUzs7Ozs7Ozs7O0FBR3ZFO0dBcEJNWDtBQXNCTiwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvW2lkXS9wYWdlLmpzPzU5MmIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBjb250YWN0ID0gKHtwYXJhbXN9KSA9PiB7XG4gIGNvbnN0IHtpZH0gPSBwYXJhbXM7XG5cbiAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgZ2V0VXNlciA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzLycraWQpXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YS5uYW1lKSlcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0VXNlcigpXG4gIH0sIFtdKVxuICBcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXhsIGJnLWN5YW4tNTAwIG0tMiBwLTInPlBhZ2UgSUQgLSB7aWR9PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9J3RleHQteGwgYmctY3lhbi01MDAgbS0yIHAtMic+RGF0YSAtIHtKU09OLnN0cmluZ2lmeX08L2Rpdj5cbiAgICA8Lz5cbiAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdCJdLCJuYW1lcyI6WyJheGlvcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjb250YWN0IiwicGFyYW1zIiwiaWQiLCJ1c2VycyIsInNldFVzZXJzIiwiZ2V0VXNlciIsImRhdGEiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWUiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[id]/page.js\n"));

/***/ })

});