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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst contact = (param)=>{\n    let { params } = param;\n    _s();\n    const { id } = params;\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getUser = async ()=>{\n        const { data } = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"https://jsonplaceholder.typicode.com/users/\" + id);\n        console.log(JSON.stringify(data.name));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getUser();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-xl bg-cyan-500 m-2 p-2\",\n                children: [\n                    \"Page ID - \",\n                    id\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jaypokharna/Desktop/ReactJS/learningreact/app/[id]/page.js\",\n                lineNumber: 21,\n                columnNumber: 6\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-xl bg-cyan-500 m-2 p-2\",\n                children: [\n                    \"Data - \",\n                    id\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jaypokharna/Desktop/ReactJS/learningreact/app/[id]/page.js\",\n                lineNumber: 22,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(contact, \"JadZszbqna06PpJs9hMo7Hl/LOY=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (contact);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9baWRdL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUN5QjtBQUN5QjtBQUVsRCxNQUFNSSxVQUFVO1FBQUMsRUFBQ0MsTUFBTSxFQUFDOztJQUN2QixNQUFNLEVBQUNDLEVBQUUsRUFBQyxHQUFHRDtJQUViLE1BQU0sQ0FBQ0UsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU1NLFVBQVU7UUFDZCxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHLE1BQU1WLDZDQUFLQSxDQUFDVyxHQUFHLENBQUMsZ0RBQThDTDtRQUMvRU0sUUFBUUMsR0FBRyxDQUFDQyxLQUFLQyxTQUFTLENBQUNMLEtBQUtNLElBQUk7SUFDdEM7SUFFQWQsZ0RBQVNBLENBQUM7UUFDUk87SUFDRixHQUFHLEVBQUU7SUFHTCxxQkFDRTs7MEJBQ0MsOERBQUNRO2dCQUFJQyxXQUFVOztvQkFBOEI7b0JBQVdaOzs7Ozs7OzBCQUN6RCw4REFBQ1c7Z0JBQUlDLFdBQVU7O29CQUE4QjtvQkFBUVo7Ozs7Ozs7OztBQUd6RDtHQXBCTUY7QUFzQk4sK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL1tpZF0vcGFnZS5qcz81OTJiIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgY29udGFjdCA9ICh7cGFyYW1zfSkgPT4ge1xuICBjb25zdCB7aWR9ID0gcGFyYW1zO1xuXG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IGdldFVzZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycy8nK2lkKVxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEubmFtZSkpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFVzZXIoKVxuICB9LCBbXSlcbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC14bCBiZy1jeWFuLTUwMCBtLTIgcC0yJz5QYWdlIElEIC0ge2lkfTwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXhsIGJnLWN5YW4tNTAwIG0tMiBwLTInPkRhdGEgLSB7aWR9PC9kaXY+XG4gICAgPC8+XG4gICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3QiXSwibmFtZXMiOlsiYXhpb3MiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY29udGFjdCIsInBhcmFtcyIsImlkIiwidXNlcnMiLCJzZXRVc2VycyIsImdldFVzZXIiLCJkYXRhIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[id]/page.js\n"));

/***/ })

});