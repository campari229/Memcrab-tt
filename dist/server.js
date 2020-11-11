/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/App.tsx":
/*!****************************!*\
  !*** ./src/client/App.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Matrix_Matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Matrix/Matrix */ \"./src/client/components/Matrix/Matrix.tsx\");\n/* harmony import */ var _components_Form_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Form/Form */ \"./src/client/components/Form/Form.tsx\");\n\r\n\r\n\r\n\r\nvar App = function () {\r\n    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null,\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { path: \"/\", exact: true, component: _components_Form_Form__WEBPACK_IMPORTED_MODULE_3__[\"Form\"] }),\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { path: \"/\", render: function (props) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Matrix_Matrix__WEBPACK_IMPORTED_MODULE_2__[\"Matrix\"], null); } }))));\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\r\n\n\n//# sourceURL=webpack:///./src/client/App.tsx?");

/***/ }),

/***/ "./src/client/components/Cell/Cell.tsx":
/*!*********************************************!*\
  !*** ./src/client/components/Cell/Cell.tsx ***!
  \*********************************************/
/*! exports provided: Cell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return Cell; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/store */ \"./src/client/store/store.ts\");\n/* harmony import */ var _Matrix_Matrix_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Matrix/Matrix.css */ \"./src/client/components/Matrix/Matrix.css\");\n\r\n\r\n\r\n\r\nvar Cell = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (_a) {\r\n    var amount = _a.amount, id = _a.id, isPercentsShown = _a.isPercentsShown, isCloser = _a.isCloser, i = _a.i, rowValue = _a.rowValue;\r\n    var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        console.log(\"cell mount \" + amount);\r\n    });\r\n    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", { onClick: function () { return dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_2__[\"increment\"])(id, i)); }, onMouseOver: function () { dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_2__[\"showClosest\"])(id)); }, onMouseOut: function () { dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_2__[\"showClosest\"])(id)); }, className: isCloser ? _Matrix_Matrix_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"].cellClosest : _Matrix_Matrix_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"].cell },\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", { className: _Matrix_Matrix_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"].text }, isPercentsShown\r\n            ? Math.round((amount / rowValue) * 100) + \"%\"\r\n            : amount),\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { style: isPercentsShown\r\n                ? { height: Math.round((amount / rowValue) * 100) + \"%\", backgroundColor: \"red\", transition: \"height 0.5s\", position: \"absolute\", bottom: \"0\", left: \"0\", width: \"100%\" }\r\n                : { height: \"0\", backgroundColor: \"red\", transition: \"height 0.5s\", position: \"absolute\", bottom: \"0\", left: \"0\", width: \"100%\" } })));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/components/Cell/Cell.tsx?");

/***/ }),

/***/ "./src/client/components/Form/Form.css":
/*!*********************************************!*\
  !*** ./src/client/components/Form/Form.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\"form\":\"_1zIjQqu3Xb4h6p1-15feyX\",\"input\":\"_1TKSOS56HWdAe0Q2kMRmUw\",\"error\":\"_8cZmDyXNpN2bSqlnIL8Y3\",\"button\":\"_25EVraWte8RYT9iCPxnc3M\"});\n\n//# sourceURL=webpack:///./src/client/components/Form/Form.css?");

/***/ }),

/***/ "./src/client/components/Form/Form.tsx":
/*!*********************************************!*\
  !*** ./src/client/components/Form/Form.tsx ***!
  \*********************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Form\", function() { return Form; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Form_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.css */ \"./src/client/components/Form/Form.css\");\n\r\n\r\nvar Form = function () {\r\n    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''), rowsInputValue = _a[0], setRowsInputValue = _a[1];\r\n    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true), rowsIsValid = _b[0], setRowsIsValid = _b[1];\r\n    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''), columnsInputValue = _c[0], setColumnsInputValue = _c[1];\r\n    var _d = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true), columnsIsValid = _d[0], setColumnsIsValid = _d[1];\r\n    var _e = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''), closestInputValue = _e[0], setClosestInputValue = _e[1];\r\n    var _f = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true), closestIsValid = _f[0], setClosestIsValid = _f[1];\r\n    var rowsAndColumnsValidation = function (inputValue) {\r\n        if (inputValue && typeof Number(inputValue) === 'number') {\r\n            return true;\r\n        }\r\n        else {\r\n            return false;\r\n        }\r\n    };\r\n    var closestValidation = function (value) {\r\n        if (rowsInputValue && columnsInputValue) {\r\n            if (Number(value) <= Number(rowsInputValue) * Number(columnsInputValue)) {\r\n                return true;\r\n            }\r\n            else {\r\n                return false;\r\n            }\r\n        }\r\n    };\r\n    var makeMatrix = function (e) {\r\n        e.preventDefault();\r\n        if (rowsAndColumnsValidation(rowsInputValue) && rowsAndColumnsValidation(columnsInputValue)) {\r\n            if (closestValidation(closestInputValue)) {\r\n                location.assign(\"http://localhost:3000/columns=\" + columnsInputValue + \"/rows=\" + rowsInputValue + \"/closest=\" + closestInputValue);\r\n            }\r\n            else {\r\n                setClosestIsValid(false);\r\n            }\r\n        }\r\n        else {\r\n            setRowsIsValid(false);\r\n            setColumnsIsValid(false);\r\n        }\r\n    };\r\n    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", { className: _Form_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].form, onSubmit: makeMatrix },\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Matrix Maker\"),\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null,\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null,\r\n                \"Number of rows\",\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", { type: \"text\", name: \"rows\", className: _Form_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].input, onChange: function (e) { return setRowsInputValue(e.target.value); } })),\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", { className: _Form_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error, style: rowsIsValid ? { opacity: '0' } : { opacity: '1' } }, \"Enter a number of rows\")),\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null,\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null,\r\n                \"Number of columns\",\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", { type: \"text\", name: \"columns\", className: _Form_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].input, onChange: function (e) { return setColumnsInputValue(e.target.value); } })),\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", { className: _Form_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error, style: columnsIsValid ? { opacity: '0' } : { opacity: '1' } }, \"Enter a number of columns\")),\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null,\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null,\r\n                \"Number of closest cells to shown\",\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", { type: \"text\", id: \"closest\", name: \"closest\", className: _Form_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].input, onChange: function (e) { return setClosestInputValue(e.target.value); } })),\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", { className: _Form_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error, style: closestIsValid ? { opacity: '0' } : { opacity: '1' } }, \"Enter a number of closest cells to shown (min: 1, max: columns * rows)\")),\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", { className: _Form_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button }, \"Make a matrix\")));\r\n};\r\n\n\n//# sourceURL=webpack:///./src/client/components/Form/Form.tsx?");

/***/ }),

/***/ "./src/client/components/Matrix/Matrix.css":
/*!*************************************************!*\
  !*** ./src/client/components/Matrix/Matrix.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\"table\":\"_3DdOOkL2OD250pZg7GrHcc\",\"cell\":\"_1fWo-Bm9450it8nVGAKjrs\",\"body\":\"-BVMmFgfXfkuX5sRMQbX6\",\"row\":\"_1e4oMz93S6wONIfE9AVNSS\",\"cellClosest\":\"_1NqGnAiUHABAdXAbslFADY\",\"cellAvarange\":\"_3UgYeaTPM9fK1JITgoo8rH\",\"rowFooter\":\"_2l8s2MFoqB7kKx4lL6CdOS\",\"text\":\"_2BcuJUtsmTvdENmop-vZEz\",\"buttonWrapper\":\"_2Ph9O1QWdOA3R5awNLxJuz\",\"buttonRemove\":\"_3vrdZ-qvFoyoz-czzYNG_c\",\"button-new\":\"_3tXoV9g1zayk9XDxi7tA5X\"});\n\n//# sourceURL=webpack:///./src/client/components/Matrix/Matrix.css?");

/***/ }),

/***/ "./src/client/components/Matrix/Matrix.tsx":
/*!*************************************************!*\
  !*** ./src/client/components/Matrix/Matrix.tsx ***!
  \*************************************************/
/*! exports provided: Matrix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Matrix\", function() { return Matrix; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/store */ \"./src/client/store/store.ts\");\n/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/lib */ \"./src/client/lib/lib.ts\");\n/* harmony import */ var _Matrix_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Matrix.css */ \"./src/client/components/Matrix/Matrix.css\");\n/* harmony import */ var _Row_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Row/Row */ \"./src/client/components/Row/Row.tsx\");\n\r\n\r\n\r\n\r\n\r\n\r\nvar Matrix = function () {\r\n    var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\r\n    var cells = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(_store_store__WEBPACK_IMPORTED_MODULE_2__[\"getCells\"]);\r\n    var tableFooter = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(_store_store__WEBPACK_IMPORTED_MODULE_2__[\"getTableFooter\"]);\r\n    if (cells) {\r\n        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", { className: _Matrix_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].table },\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", { className: _Matrix_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].body }, cells.map(function (row, i) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", { className: _Matrix_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].row, key: i },\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Row_Row__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], { row: row, i: i }))); })),\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tfoot\", null,\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", { className: _Matrix_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].rowFooter },\r\n                    tableFooter.map(function (cell) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", { key: cell.id, className: _Matrix_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].cellAvarange }, cell.amount)); }),\r\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", { className: _Matrix_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].buttonWrapper },\r\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", { className: _Matrix_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].buttonRemove, onClick: function () { return dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_2__[\"addRow\"])(Object(_lib_lib__WEBPACK_IMPORTED_MODULE_3__[\"rowCreator\"])(cells[0].length))); } }, \"add row\"))))));\r\n    }\r\n    else {\r\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"oops\");\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/client/components/Matrix/Matrix.tsx?");

/***/ }),

/***/ "./src/client/components/Row/Row.tsx":
/*!*******************************************!*\
  !*** ./src/client/components/Row/Row.tsx ***!
  \*******************************************/
/*! exports provided: Row */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Row\", function() { return Row; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Cell_Cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Cell/Cell */ \"./src/client/components/Cell/Cell.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/store */ \"./src/client/store/store.ts\");\n/* harmony import */ var _Matrix_Matrix_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Matrix/Matrix.css */ \"./src/client/components/Matrix/Matrix.css\");\n\r\n\r\n\r\n\r\n\r\nvar Row = function (_a) {\r\n    var row = _a.row, i = _a.i;\r\n    var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\r\n    var rowValue = row.reduce(function (acumulator, cell) { return acumulator + cell.amount; }, 0);\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        console.log(\"row \" + i);\r\n    });\r\n    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", { className: _Matrix_Matrix_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].buttonWrapper },\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", { className: _Matrix_Matrix_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].buttonRemove, onClick: function () { return dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_3__[\"removeRow\"])(i)); } }, \"Remove row\")),\r\n        row.map(function (cell) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Cell_Cell__WEBPACK_IMPORTED_MODULE_1__[\"Cell\"], { amount: cell.amount, id: cell.id, isCloser: cell.isCloser, isPercentsShown: cell.isPercentsShown, i: i, key: cell.id, rowValue: rowValue })); }),\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", { className: _Matrix_Matrix_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].cell, onMouseOver: function () { dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_3__[\"percentsToggle\"])(i)); }, onMouseOut: function () { return dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_3__[\"percentsToggle\"])(i)); } }, row.reduce(function (acumulator, cell) { return acumulator + cell.amount; }, 0))));\r\n};\r\n\n\n//# sourceURL=webpack:///./src/client/components/Row/Row.tsx?");

/***/ }),

/***/ "./src/client/lib/lib.ts":
/*!*******************************!*\
  !*** ./src/client/lib/lib.ts ***!
  \*******************************/
/*! exports provided: rowCreator, cellsCreator, getAverageValues, findClosest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rowCreator\", function() { return rowCreator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cellsCreator\", function() { return cellsCreator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAverageValues\", function() { return getAverageValues; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findClosest\", function() { return findClosest; });\nvar __spreadArrays = (undefined && undefined.__spreadArrays) || function () {\r\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\r\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\r\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\r\n            r[k] = a[j];\r\n    return r;\r\n};\r\nvar idMaker = function () {\r\n    var id = 0;\r\n    return function () {\r\n        return id++;\r\n    };\r\n};\r\nvar id = idMaker();\r\nvar createRandomNumber = function () {\r\n    return Math.floor(Math.random() * (900) + 100);\r\n};\r\nvar rowCreator = function (columns) {\r\n    return Array.from({ length: columns }, function () {\r\n        return {\r\n            amount: createRandomNumber(),\r\n            id: id(),\r\n            isPercentsShown: false,\r\n            isCloser: false\r\n        };\r\n    });\r\n};\r\nvar cellsCreator = function (rows, columns) {\r\n    return Array.from({ length: rows }, function () { return rowCreator(columns); });\r\n};\r\nvar getAverageValues = function (array) {\r\n    if (array.length) {\r\n        return array[0].reduce(function (acumulator, row, rowIndex) {\r\n            var rowSum = array.reduce(function (acumulator, cell, cellIndex) {\r\n                return acumulator += array[cellIndex][rowIndex].amount;\r\n            }, 0);\r\n            return __spreadArrays(acumulator, [\r\n                {\r\n                    amount: Math.round(rowSum / array[0].length),\r\n                    id: id(),\r\n                }\r\n            ]);\r\n        }, []);\r\n    }\r\n    else {\r\n        return [];\r\n    }\r\n};\r\nvar findClosest = function (array, targetId, numberOfClosest) {\r\n    var arr = array.flat();\r\n    arr.sort(function (a, b) { return a.amount - b.amount; });\r\n    var target = arr.find(function (item) { return item.id === targetId; });\r\n    if (target) {\r\n        var targetIndex = arr.indexOf(target);\r\n        var arrayWithoutTarget = arr.filter(function (item) { return item.id !== target.id; });\r\n        var gap = numberOfClosest / 2;\r\n        if (targetIndex - gap < 0) {\r\n            return arrayWithoutTarget.slice(0, numberOfClosest);\r\n        }\r\n        else if (targetIndex + gap > arr.length) {\r\n            return arrayWithoutTarget.slice((arr.length - 1) - numberOfClosest);\r\n        }\r\n        else if (numberOfClosest % 2 === 0) {\r\n            return arrayWithoutTarget.slice(targetIndex - gap, targetIndex + gap);\r\n        }\r\n        else {\r\n            var closest = arrayWithoutTarget.slice(targetIndex - Math.ceil(gap), targetIndex + Math.ceil(gap));\r\n            if (Math.abs(target.amount - closest[0].amount) > Math.abs(target.amount - closest[closest.length - 1].amount)) {\r\n                closest.shift();\r\n                return closest;\r\n            }\r\n            else {\r\n                closest.pop();\r\n                return closest;\r\n            }\r\n        }\r\n    }\r\n    else {\r\n        return [];\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/client/lib/lib.ts?");

/***/ }),

/***/ "./src/client/store/actions.ts":
/*!*************************************!*\
  !*** ./src/client/store/actions.ts ***!
  \*************************************/
/*! exports provided: actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"actions\", function() { return actions; });\nvar actions = {\r\n    SET_CELLS: 'SET_CELLS',\r\n    ADD_ROW: 'ADD_ROW',\r\n    REMOVE_ROW: 'REMOVE_ROW',\r\n    INCREMENT: 'INCREMENT',\r\n    PERCENTS_TOGGLE: 'PERCENTS_TOGGLE',\r\n    SET_NUMBER_OF_CLOSEST: 'SET_NUMBER_OF_CLOSEST',\r\n    SHOW_CLOSEST: 'SHOW_CLOSEST'\r\n};\r\n\n\n//# sourceURL=webpack:///./src/client/store/actions.ts?");

/***/ }),

/***/ "./src/client/store/store.ts":
/*!***********************************!*\
  !*** ./src/client/store/store.ts ***!
  \***********************************/
/*! exports provided: setCells, addRow, removeRow, increment, percentsToggle, showClosest, setNumberOfClosest, getCells, getTableFooter, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setCells\", function() { return setCells; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addRow\", function() { return addRow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeRow\", function() { return removeRow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"increment\", function() { return increment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"percentsToggle\", function() { return percentsToggle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showClosest\", function() { return showClosest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setNumberOfClosest\", function() { return setNumberOfClosest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCells\", function() { return getCells; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTableFooter\", function() { return getTableFooter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reducer\", function() { return reducer; });\n/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/lib */ \"./src/client/lib/lib.ts\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./src/client/store/actions.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __spreadArrays = (undefined && undefined.__spreadArrays) || function () {\r\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\r\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\r\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\r\n            r[k] = a[j];\r\n    return r;\r\n};\r\n\r\n\r\nvar setCells = function (cells) { return ({\r\n    type: _actions__WEBPACK_IMPORTED_MODULE_1__[\"actions\"].SET_CELLS,\r\n    cells: cells,\r\n}); };\r\nvar addRow = function (row) { return ({\r\n    type: _actions__WEBPACK_IMPORTED_MODULE_1__[\"actions\"].ADD_ROW,\r\n    row: row,\r\n}); };\r\nvar removeRow = function (number) { return ({\r\n    type: _actions__WEBPACK_IMPORTED_MODULE_1__[\"actions\"].REMOVE_ROW,\r\n    number: number,\r\n}); };\r\nvar increment = function (id, rowIndex) { return ({\r\n    type: _actions__WEBPACK_IMPORTED_MODULE_1__[\"actions\"].INCREMENT,\r\n    id: id,\r\n    rowIndex: rowIndex,\r\n}); };\r\nvar percentsToggle = function (rowIndex) { return ({\r\n    type: _actions__WEBPACK_IMPORTED_MODULE_1__[\"actions\"].PERCENTS_TOGGLE,\r\n    rowIndex: rowIndex,\r\n}); };\r\nvar showClosest = function (targetId) { return ({\r\n    type: _actions__WEBPACK_IMPORTED_MODULE_1__[\"actions\"].SHOW_CLOSEST,\r\n    targetId: targetId,\r\n}); };\r\nvar setNumberOfClosest = function (numberOfClosest) { return ({\r\n    type: _actions__WEBPACK_IMPORTED_MODULE_1__[\"actions\"].SET_NUMBER_OF_CLOSEST,\r\n    numberOfClosest: numberOfClosest,\r\n}); };\r\nvar getCells = function (state) { return state.cells; };\r\nvar getTableFooter = function (state) { return state.tableFooter; };\r\nvar initialState = {\r\n    cells: [],\r\n    tableFooter: [],\r\n    numberOfClosest: 0,\r\n};\r\nvar reducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case 'SET_CELLS':\r\n            return __assign(__assign({}, state), { cells: action.cells, tableFooter: Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__[\"getAverageValues\"])(action.cells) });\r\n        case 'ADD_ROW':\r\n            return __assign(__assign({}, state), { cells: __spreadArrays(state.cells, [\r\n                    action.row,\r\n                ]), tableFooter: Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__[\"getAverageValues\"])(__spreadArrays(state.cells, [action.row])) });\r\n        case 'REMOVE_ROW':\r\n            var filteredCells = state.cells.filter(function (row, index) { return index !== action.number; });\r\n            return __assign(__assign({}, state), { cells: filteredCells, tableFooter: Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__[\"getAverageValues\"])(filteredCells) });\r\n        case 'INCREMENT':\r\n            var cells = __spreadArrays(state.cells);\r\n            var incrementedCell = cells[action.rowIndex].find(function (cell) { return cell.id === action.id; });\r\n            if (incrementedCell) {\r\n                incrementedCell.amount++;\r\n            }\r\n            return __assign(__assign(__assign({}, state), cells), { tableFooter: Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__[\"getAverageValues\"])(cells) });\r\n        case 'PERCENTS_TOGGLE':\r\n            var percentsCells = __spreadArrays(state.cells);\r\n            percentsCells[action.rowIndex] = percentsCells[action.rowIndex].map(function (cell) { return (__assign(__assign({}, cell), { isPercentsShown: !cell.isPercentsShown })); });\r\n            return __assign(__assign({}, state), { cells: percentsCells });\r\n        case 'SET_NUMBER_OF_CLOSEST':\r\n            return __assign(__assign({}, state), { numberOfClosest: action.numberOfClosest });\r\n        case 'SHOW_CLOSEST':\r\n            var closest_1 = Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__[\"findClosest\"])(state.cells, action.targetId, state.numberOfClosest);\r\n            var closestCells = __spreadArrays(state.cells);\r\n            closestCells.forEach(function (row) {\r\n                row.forEach(function (cell) {\r\n                    if (closest_1.includes(cell)) {\r\n                        cell.isCloser = !cell.isCloser;\r\n                    }\r\n                });\r\n            });\r\n            return __assign(__assign({}, state), { cells: closestCells });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/client/store/store.ts?");

/***/ }),

/***/ "./src/server.tsx":
/*!************************!*\
  !*** ./src/server.tsx ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client/App */ \"./src/client/App.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _client_store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client/store/store */ \"./src/client/store/store.ts\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _client_lib_lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./client/lib/lib */ \"./src/client/lib/lib.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar port = 3000;\r\nvar server = express__WEBPACK_IMPORTED_MODULE_0___default()();\r\nserver.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static('dist'));\r\nvar htmlMaker = function (body, state) {\r\n    return \"\\n  <!DOCTYPE html>\\n  <html>\\n    <head>\\n      <title>React SSR App</title>\\n      <script defer src=\\\"/bundle.js\\\"></script>\\n      <link rel=\\\"stylesheet\\\" type=\\\"text/css\\\" href=\\\"/styles.css\\\"></link> \\n    </head>\\n    <body style=\\\"margin:0\\\">\\n      <div id=\\\"app\\\">\" + body + \"</div>\\n      <script>\\n          window.__PRELOADED_STATE__ = \" + JSON.stringify(state) + \"\\n      </script>\\n    </body>\\n  </html>\\n  \";\r\n};\r\nserver.get('*', function (req, res) {\r\n    var preloadedState = {\r\n        cells: [],\r\n        numberOfClosest: 0,\r\n        tableFooter: []\r\n    };\r\n    var params = req.path.match(/(?<=)\\d+/gi);\r\n    if (params && params.length === 3) {\r\n        var data = req.path.match(/(?<=)\\d+/gi);\r\n        if (data) {\r\n            var cells = Object(_client_lib_lib__WEBPACK_IMPORTED_MODULE_8__[\"cellsCreator\"])(Number(data[1]), Number(data[0]));\r\n            preloadedState = {\r\n                cells: cells,\r\n                numberOfClosest: Number(data[2]),\r\n                tableFooter: Object(_client_lib_lib__WEBPACK_IMPORTED_MODULE_8__[\"getAverageValues\"])(cells)\r\n            };\r\n        }\r\n    }\r\n    var store = Object(redux__WEBPACK_IMPORTED_MODULE_6__[\"createStore\"])(_client_store_store__WEBPACK_IMPORTED_MODULE_5__[\"reducer\"], preloadedState);\r\n    var context = {};\r\n    var finalState = store.getState();\r\n    var app = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"StaticRouter\"], { location: req.path, context: context },\r\n        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"Provider\"], { store: store },\r\n            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_client_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null))));\r\n    res.send(htmlMaker(app, finalState));\r\n});\r\nserver.listen(port);\r\nconsole.log(\"Serving at http://localhost:\" + port);\r\n\n\n//# sourceURL=webpack:///./src/server.tsx?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ })

/******/ });