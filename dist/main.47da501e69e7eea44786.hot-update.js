webpackHotUpdate("main",{

/***/ "./src/client/components/Cell/Cell.tsx":
/*!*********************************************!*\
  !*** ./src/client/components/Cell/Cell.tsx ***!
  \*********************************************/
/*! exports provided: Cell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return Cell; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/store */ \"./src/client/store/store.ts\");\n/* harmony import */ var _Matrix_Matrix_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Matrix/Matrix.css */ \"./src/client/components/Matrix/Matrix.css\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.i);\n\n\n\n\n\nvar Cell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (_a) {\n  var amount = _a.amount,\n      id = _a.id,\n      isPercentsShown = _a.isPercentsShown,\n      isCloser = _a.isCloser,\n      i = _a.i,\n      rowValue = _a.rowValue;\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    console.log(\"cell mount \" + amount);\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n    onClick: function onClick() {\n      return dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_2__[\"increment\"])(id, i));\n    },\n    onMouseOver: function onMouseOver() {\n      dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_2__[\"showClosest\"])(id));\n    },\n    onMouseOut: function onMouseOut() {\n      dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_2__[\"showClosest\"])(id));\n    },\n    className: isCloser ? _Matrix_Matrix_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"].cellClosest : _Matrix_Matrix_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"].cell\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: _Matrix_Matrix_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"].text\n  }, isPercentsShown ? Math.round(amount / rowValue * 100) + \"%\" : amount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: isPercentsShown ? {\n      height: Math.round(amount / rowValue * 100) + \"%\",\n      backgroundColor: \"red\",\n      transitio: transitio\n    } : {\n      height: \"0\",\n      backgroundColor: \"red\",\n      transitio: transitio\n    }\n  }));\n});\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.i);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\"), __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\")))\n\n//# sourceURL=webpack:///./src/client/components/Cell/Cell.tsx?");

/***/ })

})