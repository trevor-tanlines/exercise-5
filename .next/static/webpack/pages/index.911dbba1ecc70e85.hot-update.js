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

/***/ "./components/PieChart/index.js":
/*!**************************************!*\
  !*** ./components/PieChart/index.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PieChart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Title, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend);\nfunction PieChart() {\n    _s();\n    const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        datasets: []\n    });\n    const [chartOptions, setChartOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setChartData({\n            labels: [\n                \"Red\",\n                \"Blue\",\n                \"Yellow\",\n                \"Green\",\n                \"Purple\",\n                \"Black\",\n                \"White\",\n                \"Gray\"\n            ],\n            datasets: [\n                {\n                    label: \"Best Colour\",\n                    data: [\n                        10,\n                        6,\n                        15,\n                        20,\n                        12,\n                        4,\n                        5\n                    ],\n                    borderColor: [\n                        \"rgb(53,162,235)\",\n                        \"rgb(34,198,234)\",\n                        \"rgb(89,234,198)\",\n                        \"rgb(17,222,123)\",\n                        \"rgb(1,2,235)\",\n                        \"rgb(78,45,58)\",\n                        \"rgb(222,111,212)\"\n                    ],\n                    backgroundColor: [\n                        \"rgb(53,162,235)\",\n                        \"rgb(34,198,234)\",\n                        \"rgb(89,234,198)\",\n                        \"rgb(17,222,123)\",\n                        \"rgb(1,2,235)\",\n                        \"rgb(78,45,58)\",\n                        \"rgb(222,111,212)\"\n                    ],\n                    borderWidth: 1\n                }\n            ]\n        });\n        setChartOptions({\n            indexAxis: \"y\",\n            plugins: {\n                legend: {\n                    position: \"top\"\n                },\n                title: {\n                    display: true,\n                    text: \"D\"\n                },\n                maintainAspectRatio: false,\n                responsive: true\n            }\n        });\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Pie, {\n                data: chartData,\n                options: chartOptions,\n                style: {\n                    width: \"500px\",\n                    height: \"500px\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/trevortan/Desktop/charts/components/PieChart/index.js\",\n                lineNumber: 77,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/trevortan/Desktop/charts/components/PieChart/index.js\",\n            lineNumber: 76,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(PieChart, \"AGxoyunMg/uLCjHExtm+3p25aEI=\");\n_c = PieChart;\nvar _c;\n$RefreshReg$(_c, \"PieChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BpZUNoYXJ0L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFxQztBQVNuQjtBQUMwQjtBQUU1Q0UsMkNBQU9BLENBQUNRLFFBQVEsQ0FDWlAsbURBQWFBLEVBQ2JDLGdEQUFVQSxFQUNWQywyQ0FBS0EsRUFDTEMsNkNBQU9BLEVBQ1BDLDRDQUFNQTtBQUdLLFNBQVNJOztJQUNwQixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0wsK0NBQVFBLENBQUM7UUFDdkNNLFVBQVUsRUFBRTtJQUNoQjtJQUVBLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdSLCtDQUFRQSxDQUFDLENBQUM7SUFFbERDLGdEQUFTQSxDQUFDO1FBQ05JLGFBQWE7WUFDVEksUUFBUTtnQkFBQztnQkFBTztnQkFBUTtnQkFBVTtnQkFBUztnQkFBVTtnQkFBUztnQkFBUzthQUFPO1lBQzlFSCxVQUFVO2dCQUNOO29CQUNJSSxPQUFPO29CQUNQQyxNQUFNO3dCQUFDO3dCQUFJO3dCQUFHO3dCQUFJO3dCQUFJO3dCQUFJO3dCQUFHO3FCQUFFO29CQUMvQkMsYUFBYTt3QkFDVDt3QkFDQTt3QkFDQTt3QkFDQTt3QkFDQTt3QkFDQTt3QkFDQTtxQkFDSDtvQkFDREMsaUJBQWlCO3dCQUNiO3dCQUNBO3dCQUNBO3dCQUNBO3dCQUNBO3dCQUNBO3dCQUNBO3FCQUNIO29CQUNEQyxhQUFhO2dCQUNqQjthQUNIO1FBQ0w7UUFFQU4sZ0JBQWdCO1lBQ1pPLFdBQVc7WUFDWEMsU0FBUztnQkFDTEMsUUFBUTtvQkFDSkMsVUFBVTtnQkFDZDtnQkFDQUMsT0FBTztvQkFDSEMsU0FBUztvQkFDVEMsTUFBTTtnQkFDVjtnQkFDQUMscUJBQXFCO2dCQUNyQkMsWUFBWTtZQUNaO1FBQ0o7SUFDSjtJQUVBLHFCQUNJO2tCQUNBLDRFQUFDQztzQkFDRyw0RUFBQ2hDLGdEQUFHQTtnQkFBQ21CLE1BQU1QO2dCQUFXcUIsU0FBU2xCO2dCQUFjbUIsT0FBTztvQkFBQ0MsT0FBTztvQkFBU0MsUUFBUTtnQkFBTzs7Ozs7Ozs7Ozs7O0FBS3BHO0dBN0R3QnpCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUGllQ2hhcnQvaW5kZXguanM/NThhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaWUgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInXG5cbmltcG9ydCB7XG4gICAgQ2hhcnQgYXMgQ2hhcnRKUyxcbiAgICBDYXRlZ29yeVNjYWxlLFxuICAgIEFyY0VsZW1lbnQsXG4gICAgVGl0bGUsXG4gICAgVG9vbHRpcCxcbiAgICBMZWdlbmQsXG59IGZyb20gJ2NoYXJ0LmpzJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbkNoYXJ0SlMucmVnaXN0ZXIoXG4gICAgQ2F0ZWdvcnlTY2FsZSxcbiAgICBBcmNFbGVtZW50LFxuICAgIFRpdGxlLFxuICAgIFRvb2x0aXAsXG4gICAgTGVnZW5kXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBpZUNoYXJ0KCkge1xuICAgIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIGRhdGFzZXRzOiBbXVxuICAgIH0pO1xuXG4gICAgY29uc3QgW2NoYXJ0T3B0aW9ucywgc2V0Q2hhcnRPcHRpb25zXSA9IHVzZVN0YXRlKHt9KTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldENoYXJ0RGF0YSh7XG4gICAgICAgICAgICBsYWJlbHM6IFtcIlJlZFwiLCBcIkJsdWVcIiwgXCJZZWxsb3dcIiwgXCJHcmVlblwiLCBcIlB1cnBsZVwiLCBcIkJsYWNrXCIsIFwiV2hpdGVcIiwgXCJHcmF5XCJdLFxuICAgICAgICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQmVzdCBDb2xvdXInLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbMTAsIDYsIDE1LCAyMCwgMTIsIDQsIDVdLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYig1MywxNjIsMjM1KScsXG4gICAgICAgICAgICAgICAgICAgICAgICAncmdiKDM0LDE5OCwyMzQpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdyZ2IoODksMjM0LDE5OCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYigxNywyMjIsMTIzKScsXG4gICAgICAgICAgICAgICAgICAgICAgICAncmdiKDEsMiwyMzUpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdyZ2IoNzgsNDUsNTgpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdyZ2IoMjIyLDExMSwyMTIpJ1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICdyZ2IoNTMsMTYyLDIzNSknLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYigzNCwxOTgsMjM0KScsXG4gICAgICAgICAgICAgICAgICAgICAgICAncmdiKDg5LDIzNCwxOTgpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdyZ2IoMTcsMjIyLDEyMyknLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYigxLDIsMjM1KScsXG4gICAgICAgICAgICAgICAgICAgICAgICAncmdiKDc4LDQ1LDU4KScsXG4gICAgICAgICAgICAgICAgICAgICAgICAncmdiKDIyMiwxMTEsMjEyKSdcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KVxuXG4gICAgICAgIHNldENoYXJ0T3B0aW9ucyh7XG4gICAgICAgICAgICBpbmRleEF4aXM6ICd5JyxcbiAgICAgICAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnRCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxQaWUgZGF0YT17Y2hhcnREYXRhfSBvcHRpb25zPXtjaGFydE9wdGlvbnN9IHN0eWxlPXt7d2lkdGg6IFwiNTAwcHhcIiwgaGVpZ2h0OiBcIjUwMHB4XCJ9fS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgIFxuICAgIClcbn0iXSwibmFtZXMiOlsiUGllIiwiQ2hhcnQiLCJDaGFydEpTIiwiQ2F0ZWdvcnlTY2FsZSIsIkFyY0VsZW1lbnQiLCJUaXRsZSIsIlRvb2x0aXAiLCJMZWdlbmQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInJlZ2lzdGVyIiwiUGllQ2hhcnQiLCJjaGFydERhdGEiLCJzZXRDaGFydERhdGEiLCJkYXRhc2V0cyIsImNoYXJ0T3B0aW9ucyIsInNldENoYXJ0T3B0aW9ucyIsImxhYmVscyIsImxhYmVsIiwiZGF0YSIsImJvcmRlckNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyV2lkdGgiLCJpbmRleEF4aXMiLCJwbHVnaW5zIiwibGVnZW5kIiwicG9zaXRpb24iLCJ0aXRsZSIsImRpc3BsYXkiLCJ0ZXh0IiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInJlc3BvbnNpdmUiLCJkaXYiLCJvcHRpb25zIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PieChart/index.js\n"));

/***/ })

});