self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Navbar; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Container */ "./components/Container.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Project\\NextJS\\blog\\blog-frontend\\components\\Navbar.js",
    _s = $RefreshSig$();





function Navbar(_ref) {
  _s();

  var _this = this;

  var categories = _ref.categories;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      keyword = _useState[0],
      setKeyword = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      offcavnas = _useState2[0],
      setOffcanvas = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      search = _useState3[0],
      setSearch = _useState3[1];

  var items = categories.map(function (category) {
    return {
      name: category.name,
      href: "/category/".concat(category.slug)
    };
  });

  function doSearch(e) {
    e.preventDefault();
    next_router__WEBPACK_IMPORTED_MODULE_4___default().push({
      pathname: '/search',
      query: {
        q: keyword
      }
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
    className: "py-10",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex items-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-3/12 lg:hidden",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: function onClick() {
              return setOffcanvas(!offcavnas);
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
                opacity: "0.4",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                  d: "M3 12H21",
                  stroke: "white",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                  d: "M3 6H21",
                  stroke: "white",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 31,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                  d: "M3 18H21",
                  stroke: "white",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "lg:w-2/12 w-6/12",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "flex items-center justify-center lg:justify-start",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-4 shadow-2xl",
                children: "G"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 17
              }, this), "GoBlog"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-3/12 lg:hidden text-right",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: function onClick() {
              return setSearch(!search);
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
              className: "inline-block",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
                opacity: "0.4",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                  d: "M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z",
                  stroke: "white",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                  d: "M21 21L16.65 16.65",
                  stroke: "white",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "lg:w-7/12 w-full bg-gradient-to-b from-gray-600 to-gray-900 lg:bg-none fixed lg:static top-0 h-full lg:h-auto p-10 lg:p-0 transition-all ".concat(offcavnas ? 'left-0' : '-left-full'),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "absolute top-10 right-10 lg:hidden",
            onClick: function onClick() {
              return setOffcanvas(false);
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
                x1: "18",
                y1: "6",
                x2: "6",
                y2: "18"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 194
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 237
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "lg:space-x-14 flex lg:items-center flex-col lg:flex-row space-y-4 lg:space-y-0",
            children: items.map(function (item) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: item.href,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "hover:underline",
                    children: item.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 64,
                    columnNumber: 60
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 37
                }, _this)
              }, item.name, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "lg:w-3/12 absolute lg:static w-full left-0 px-10 lg:px-0 transition-all ".concat(search ? 'top-10' : '-top-40'),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "absolute top-3 right-14 lg:hidden",
            onClick: function onClick() {
              return setSearch(false);
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
                x1: "18",
                y1: "6",
                x2: "6",
                y2: "18"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 193
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 236
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
            onSubmit: doSearch,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              className: "bg-gray-700 py-3 px-6 w-full lg:rounded-full rounded-lg bg-search pl-12",
              placeholder: "Search ...",
              onChange: function onChange(e) {
                return setKeyword(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

_s(Navbar, "Bxwbuo2l512knxTcgvTq55JctFA=");

_c = Navbar;

var _c;

$RefreshReg$(_c, "Navbar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanMiXSwibmFtZXMiOlsiTmF2YmFyIiwiY2F0ZWdvcmllcyIsInVzZVN0YXRlIiwia2V5d29yZCIsInNldEtleXdvcmQiLCJvZmZjYXZuYXMiLCJzZXRPZmZjYW52YXMiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJpdGVtcyIsIm1hcCIsImNhdGVnb3J5IiwibmFtZSIsImhyZWYiLCJzbHVnIiwiZG9TZWFyY2giLCJlIiwicHJldmVudERlZmF1bHQiLCJSb3V0ZXIiLCJwYXRobmFtZSIsInF1ZXJ5IiwicSIsIml0ZW0iLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxPQUE4QjtBQUFBOztBQUFBOztBQUFBLE1BQWJDLFVBQWEsUUFBYkEsVUFBYTs7QUFBQSxrQkFDYkMsK0NBQVEsQ0FBQyxLQUFELENBREs7QUFBQSxNQUNwQ0MsT0FEb0M7QUFBQSxNQUMzQkMsVUFEMkI7O0FBQUEsbUJBRVRGLCtDQUFRLENBQUMsS0FBRCxDQUZDO0FBQUEsTUFFcENHLFNBRm9DO0FBQUEsTUFFekJDLFlBRnlCOztBQUFBLG1CQUdmSiwrQ0FBUSxDQUFDLEtBQUQsQ0FITztBQUFBLE1BR3BDSyxNQUhvQztBQUFBLE1BRzVCQyxTQUg0Qjs7QUFJM0MsTUFBTUMsS0FBSyxHQUFHUixVQUFVLENBQUNTLEdBQVgsQ0FBZSxVQUFBQyxRQUFRO0FBQUEsV0FBSTtBQUFDQyxVQUFJLEVBQUVELFFBQVEsQ0FBQ0MsSUFBaEI7QUFBc0JDLFVBQUksc0JBQWVGLFFBQVEsQ0FBQ0csSUFBeEI7QUFBMUIsS0FBSjtBQUFBLEdBQXZCLENBQWQ7O0FBRUEsV0FBU0MsUUFBVCxDQUFrQkMsQ0FBbEIsRUFBb0I7QUFDbEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBQywyREFBQSxDQUFZO0FBQ1ZDLGNBQVEsRUFBRSxT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O0FBQUE7QUFBQSxrQkFERixlQU9FO0FBQU0sb0JBQVEsRUFBRU8sUUFBaEI7QUFBQSxtQ0FDRTtBQUNFLHVCQUFTLEVBQUMseUVBRFo7QUFFRSx5QkFBVyxFQUFDLFlBRmQ7QUFHRSxzQkFBUSxFQUFFLGtCQUFDQyxDQUFEO0FBQUEsdUJBQU9aLFVBQVUsQ0FBQ1ksQ0FBQyxDQUFDTyxNQUFGLENBQVNDLEtBQVYsQ0FBakI7QUFBQTtBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlGRDs7R0F6R3VCeEIsTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjM3YmQ3NWMwOTAxNGM1YzhlZDZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAY29tcG9uZW50cy9Db250YWluZXInO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcih7Y2F0ZWdvcmllc30pIHtcclxuICBjb25zdCBba2V5d29yZCwgc2V0S2V5d29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29mZmNhdm5hcywgc2V0T2ZmY2FudmFzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGl0ZW1zID0gY2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4oe25hbWU6IGNhdGVnb3J5Lm5hbWUsIGhyZWY6IGAvY2F0ZWdvcnkvJHtjYXRlZ29yeS5zbHVnfWB9KSk7XHJcblxyXG4gIGZ1bmN0aW9uIGRvU2VhcmNoKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgIHBhdGhuYW1lOiAnL3NlYXJjaCcsXHJcbiAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgcToga2V5d29yZFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwicHktMTBcIj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMy8xMiBsZzpoaWRkZW5cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRPZmZjYW52YXMoIW9mZmNhdm5hcykgfT5cclxuICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgIDxnIG9wYWNpdHk9XCIwLjRcIj5cclxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zIDEySDIxXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMgNkgyMVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiLz5cclxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zIDE4SDIxXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LTIvMTIgdy02LzEyXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbGc6anVzdGlmeS1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgYmctZ3JheS01MDAgcm91bmRlZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtci00IHNoYWRvdy0yeGxcIj5HPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBHb0Jsb2dcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTMvMTIgbGc6aGlkZGVuIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTZWFyY2goIXNlYXJjaCkgfT5cclxuICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgIDxnIG9wYWNpdHk9XCIwLjRcIj5cclxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMSAxOUMxNS40MTgzIDE5IDE5IDE1LjQxODMgMTkgMTFDMTkgNi41ODE3MiAxNS40MTgzIDMgMTEgM0M2LjU4MTcyIDMgMyA2LjU4MTcyIDMgMTFDMyAxNS40MTgzIDYuNTgxNzIgMTkgMTEgMTlaXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIxIDIxTDE2LjY1IDE2LjY1XCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BsZzp3LTcvMTIgdy1mdWxsIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1ncmF5LTYwMCB0by1ncmF5LTkwMCBsZzpiZy1ub25lIGZpeGVkIGxnOnN0YXRpYyB0b3AtMCBoLWZ1bGwgbGc6aC1hdXRvIHAtMTAgbGc6cC0wIHRyYW5zaXRpb24tYWxsICR7b2ZmY2F2bmFzID8gJ2xlZnQtMCcgOiAnLWxlZnQtZnVsbCd9YH0+XHJcbiAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEwIHJpZ2h0LTEwIGxnOmhpZGRlblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T2ZmY2FudmFzKGZhbHNlKSB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgPjxsaW5lIHgxPVwiMThcIiB5MT1cIjZcIiB4Mj1cIjZcIiB5Mj1cIjE4XCI+PC9saW5lPjxsaW5lIHgxPVwiNlwiIHkxPVwiNlwiIHgyPVwiMThcIiB5Mj1cIjE4XCI+PC9saW5lPjwvc3ZnPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxnOnNwYWNlLXgtMTQgZmxleCBsZzppdGVtcy1jZW50ZXIgZmxleC1jb2wgbGc6ZmxleC1yb3cgc3BhY2UteS00IGxnOnNwYWNlLXktMFwiPlxyXG4gICAgICAgICAgICAgIHtpdGVtcy5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLm5hbWV9PjxMaW5rIGhyZWY9e2l0ZW0uaHJlZn0+PGEgY2xhc3NOYW1lPVwiaG92ZXI6dW5kZXJsaW5lXCI+e2l0ZW0ubmFtZX08L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICB7LyogPGEgXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnVuZGVybGluZSBjdXJzb3ItcG9pbnRlciBmbGV4IGl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldERyb3Bkb3duKCFkcm9wZG93bil9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIExhaW5ueWFcclxuICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJtbC0yXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNCA2TDggMTBMMTIgNlwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiLz5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICB7ZHJvcGRvd24gJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy1bMjAwcHhdIGJnLWdyYXktODAwIHJvdW5kZWQgc2hhZG93LTJ4bCBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2Ryb3Bkb3duTGlzdC5tYXAoKHsgdGV4dCwgaHJlZiB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXt0ZXh0fSBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItd2hpdGUvNSBsYXN0OmJvcmRlci0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZsZXggcHktMyBweC02IGhvdmVyOmJnLWdyYXktNzAwLzYwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvbGk+ICovfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGxnOnctMy8xMiBhYnNvbHV0ZSBsZzpzdGF0aWMgdy1mdWxsIGxlZnQtMCBweC0xMCBsZzpweC0wIHRyYW5zaXRpb24tYWxsICR7c2VhcmNoID8gJ3RvcC0xMCcgOiAnLXRvcC00MCd9YH0+XHJcbiAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTMgcmlnaHQtMTQgbGc6aGlkZGVuXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWFyY2goZmFsc2UpIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj48bGluZSB4MT1cIjE4XCIgeTE9XCI2XCIgeDI9XCI2XCIgeTI9XCIxOFwiPjwvbGluZT48bGluZSB4MT1cIjZcIiB5MT1cIjZcIiB4Mj1cIjE4XCIgeTI9XCIxOFwiPjwvbGluZT48L3N2Zz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtkb1NlYXJjaH0+XHJcbiAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS03MDAgcHktMyBweC02IHctZnVsbCBsZzpyb3VuZGVkLWZ1bGwgcm91bmRlZC1sZyBiZy1zZWFyY2ggcGwtMTJcIiBcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIC4uLlwiIFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRLZXl3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9