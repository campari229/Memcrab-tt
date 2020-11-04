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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.js");
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Matrix_Matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Matrix/Matrix */ \"./src/client/components/Matrix/Matrix.tsx\");\n/* harmony import */ var _components_Form_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Form/Form */ \"./src/client/components/Form/Form.tsx\");\n\r\n\r\n\r\n\r\nvar App = function () {\r\n    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null,\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { path: \"/\", exact: true, component: _components_Form_Form__WEBPACK_IMPORTED_MODULE_3__[\"Form\"] }),\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { path: \"/\", render: function (props) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Matrix_Matrix__WEBPACK_IMPORTED_MODULE_2__[\"Matrix\"], null); } })));\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\r\n\n\n//# sourceURL=webpack:///./src/client/App.tsx?");

/***/ }),

/***/ "./src/client/components/Form/Form.scss":
/*!**********************************************!*\
  !*** ./src/client/components/Form/Form.scss ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/client/components/Form/Form.scss?");

/***/ }),

/***/ "./src/client/components/Form/Form.tsx":
/*!*********************************************!*\
  !*** ./src/client/components/Form/Form.tsx ***!
  \*********************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Form\", function() { return Form; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Form_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.scss */ \"./src/client/components/Form/Form.scss\");\n\r\n\r\nvar Form = function () {\r\n    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''), rowsInputValue = _a[0], setRowsInputValue = _a[1];\r\n    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true), rowsIsValid = _b[0], setRowsIsValid = _b[1];\r\n    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''), columnsInputValue = _c[0], setColumnsInputValue = _c[1];\r\n    var _d = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true), columnsIsValid = _d[0], setColumnsIsValid = _d[1];\r\n    var _e = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''), closestInputValue = _e[0], setClosestInputValue = _e[1];\r\n    var _f = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true), closestIsValid = _f[0], setClosestIsValid = _f[1];\r\n    var rowsAndColumnsValidation = function (inputValue) {\r\n        if (inputValue && typeof Number(inputValue) === 'number') {\r\n            return true;\r\n        }\r\n        else {\r\n            return false;\r\n        }\r\n    };\r\n    var closestValidation = function (value) {\r\n        if (rowsInputValue && columnsInputValue) {\r\n            if (Number(value) <= Number(rowsInputValue) * Number(columnsInputValue)) {\r\n                return true;\r\n            }\r\n            else {\r\n                return false;\r\n            }\r\n        }\r\n    };\r\n    var makeMatrix = function (e) {\r\n        e.preventDefault();\r\n        if (rowsAndColumnsValidation(rowsInputValue) && rowsAndColumnsValidation(columnsInputValue)) {\r\n            if (closestValidation(closestInputValue)) {\r\n                location.assign(\"http://localhost:3000/columns=\" + columnsInputValue + \"/rows=\" + rowsInputValue + \"/closest=\" + closestInputValue);\r\n            }\r\n            else {\r\n                setClosestIsValid(false);\r\n            }\r\n        }\r\n        else {\r\n            setRowsIsValid(false);\r\n            setColumnsIsValid(false);\r\n        }\r\n    };\r\n    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", { className: \"form\", onSubmit: makeMatrix },\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Matrix Maker\"),\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"form__input-wrapper\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", { className: \"form__label\" },\r\n                \"Number of rows\",\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", { type: \"text\", name: \"rows\", className: \"form__input\", onChange: function (e) { return setRowsInputValue(e.target.value); } })),\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", { className: \"form__error\", style: rowsIsValid ? { opacity: '0' } : { opacity: '1' } }, \"Enter a number of rows\")),\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"form__input-wrapper\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", { className: \"form__label\" },\r\n                \"Number of columns\",\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", { type: \"text\", name: \"columns\", className: \"form__input\", onChange: function (e) { return setColumnsInputValue(e.target.value); } })),\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", { className: \"form__error\", style: columnsIsValid ? { opacity: '0' } : { opacity: '1' } }, \"Enter a number of columns\")),\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"form__input-wrapper\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", { className: \"form__label\" },\r\n                \"Number of closest cells to shown\",\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", { type: \"text\", id: \"closest\", name: \"closest\", className: \"form__input\", onChange: function (e) { return setClosestInputValue(e.target.value); } })),\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", { className: \"form__error\", style: closestIsValid ? { opacity: '0' } : { opacity: '1' } }, \"Enter a number of closest cells to shown (min: 1, max: columns * rows)\")),\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", { className: \"form__button\" }, \"Make a matrix\")));\r\n};\r\n\n\n//# sourceURL=webpack:///./src/client/components/Form/Form.tsx?");

/***/ }),

/***/ "./src/client/components/Matrix/Matrix.scss":
/*!**************************************************!*\
  !*** ./src/client/components/Matrix/Matrix.scss ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/client/components/Matrix/Matrix.scss?");

/***/ }),

/***/ "./src/client/components/Matrix/Matrix.tsx":
/*!*************************************************!*\
  !*** ./src/client/components/Matrix/Matrix.tsx ***!
  \*************************************************/
/*! exports provided: Matrix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Matrix\", function() { return Matrix; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/store */ \"./src/client/store/store.js\");\n/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/lib */ \"./src/client/lib/lib.ts\");\n/* harmony import */ var _Matrix_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Matrix.scss */ \"./src/client/components/Matrix/Matrix.scss\");\n\r\n\r\n\r\n\r\n\r\nvar Matrix = function () {\r\n    var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\r\n    var cells = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(_store_store__WEBPACK_IMPORTED_MODULE_2__[\"getCells\"]);\r\n    var tableFooter = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(_store_store__WEBPACK_IMPORTED_MODULE_2__[\"getTableFooter\"]);\r\n    if (cells) {\r\n        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", { className: \"table\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", { className: \"table__body\" }, cells.map(function (row, i) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", { className: \"table__row\", key: i },\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", { className: \"table__button-wrapper\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", { className: \"table__button-remove\", onClick: function () { return dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_2__[\"removeRow\"])(i)); } }, \"Remove row\")),\r\n                row.map(function (cell) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", { key: cell.id, onClick: function () { return dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_2__[\"increment\"])(cell.id, i)); }, onMouseOver: function () { return dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_2__[\"showClosest\"])(cell)); }, onMouseOut: function () { return dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_2__[\"showClosest\"])(cell)); }, className: cell.isCloser ? 'table__cell table__cell-closest' : 'table__cell' },\r\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", { className: \"table__text\" }, cell.isPercentsShown\r\n                        ? Math.round((cell.amount / row.reduce(function (acumulator, cell) { return acumulator + cell.amount; }, 0)) * 100) + \"%\"\r\n                        : cell.amount),\r\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"table__percents\", style: cell.isPercentsShown\r\n                            ? { height: Math.round((cell.amount / row.reduce(function (acumulator, cell) { return acumulator + cell.amount; }, 0)) * 100) + \"%\", backgroundColor: \"red\" }\r\n                            : { height: \"0\" } }))); }),\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", { className: \"table__cell\", onMouseOver: function () { return dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_2__[\"percentsToggle\"])(i)); }, onMouseOut: function () { return dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_2__[\"percentsToggle\"])(i)); } }, row.reduce(function (acumulator, cell) { return acumulator + cell.amount; }, 0)))); })),\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tfoot\", { className: \"table__footer\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", { className: \"table__row-footer\" },\r\n                    tableFooter.map(function (cell) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", { key: cell.id, className: \"table__cell-avarange\" }, cell.amount)); }),\r\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", { className: \"table__button-wrapper\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", { className: \"table__button-new\", onClick: function () { return dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_2__[\"addRow\"])(Object(_lib_lib__WEBPACK_IMPORTED_MODULE_3__[\"rowCreator\"])(cells[0].length))); } }, \"add row\"))))));\r\n    }\r\n    else {\r\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"oops\");\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/client/components/Matrix/Matrix.tsx?");

/***/ }),

/***/ "./src/client/lib/lib.ts":
/*!*******************************!*\
  !*** ./src/client/lib/lib.ts ***!
  \*******************************/
/*! exports provided: rowCreator, cellsCreator, getAverageValues, findClosest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rowCreator\", function() { return rowCreator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cellsCreator\", function() { return cellsCreator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAverageValues\", function() { return getAverageValues; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findClosest\", function() { return findClosest; });\nvar __spreadArrays = (undefined && undefined.__spreadArrays) || function () {\r\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\r\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\r\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\r\n            r[k] = a[j];\r\n    return r;\r\n};\r\nvar id = 1;\r\nvar createRandomNumber = function () {\r\n    return Math.floor(Math.random() * (900) + 100);\r\n};\r\nvar rowCreator = function (columns) {\r\n    var row = [];\r\n    for (var i = 0; i < columns; i++) {\r\n        var amount = createRandomNumber();\r\n        row.push({\r\n            amount: amount,\r\n            id: id,\r\n            isPercentsShown: false,\r\n            isCloser: false,\r\n        });\r\n        id++;\r\n    }\r\n    return row;\r\n};\r\nvar cellsCreator = function (rows, columns) {\r\n    var cells = [];\r\n    for (var i = 0; i < rows; i++) {\r\n        cells.push(rowCreator(columns));\r\n    }\r\n    return cells;\r\n};\r\nvar getAverageValues = function (array) {\r\n    if (array.length) {\r\n        var row = [];\r\n        for (var i = 0; i < array[0].length; i++) {\r\n            var sum = 0;\r\n            for (var j = 0; j < array.length; j++) {\r\n                sum += array[j][i].amount;\r\n            }\r\n            row.push({\r\n                amount: Math.round(sum / array.length),\r\n                id: id\r\n            });\r\n            id++;\r\n        }\r\n        return row;\r\n    }\r\n    else {\r\n        return [];\r\n    }\r\n};\r\nvar findClosest = function (array, target, numberOfClosest) {\r\n    var arr = array.flat();\r\n    arr.sort(function (a, b) { return a.amount - b.amount; });\r\n    var targetIndex = arr.indexOf(target);\r\n    var gap = numberOfClosest / 2;\r\n    arr.filter(function (item) { return item.id !== target.id; });\r\n    if (targetIndex - gap < 0) {\r\n        return __spreadArrays(arr).splice(0, numberOfClosest);\r\n    }\r\n    else if (targetIndex + gap > arr.length) {\r\n        return __spreadArrays(arr).splice(-(arr.length - 1), numberOfClosest);\r\n    }\r\n    else if (numberOfClosest % 2 === 0) {\r\n        return __spreadArrays(arr).splice(targetIndex - gap, numberOfClosest);\r\n    }\r\n    else {\r\n        var closest = __spreadArrays(arr).splice(targetIndex - Math.ceil(gap), numberOfClosest + 1);\r\n        if (Math.abs(target.amount - closest[0].amount) > Math.abs(target.amount - closest[closest.length - 1].amount)) {\r\n            closest.shift();\r\n            return closest;\r\n        }\r\n        else {\r\n            closest.pop();\r\n            return closest;\r\n        }\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/client/lib/lib.ts?");

/***/ }),

/***/ "./src/client/store/store.js":
/*!***********************************!*\
  !*** ./src/client/store/store.js ***!
  \***********************************/
/*! exports provided: setCells, addRow, removeRow, increment, percentsToggle, showClosest, setNumberOfClosest, getCells, getTableFooter, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setCells\", function() { return setCells; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addRow\", function() { return addRow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeRow\", function() { return removeRow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"increment\", function() { return increment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"percentsToggle\", function() { return percentsToggle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showClosest\", function() { return showClosest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setNumberOfClosest\", function() { return setNumberOfClosest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCells\", function() { return getCells; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTableFooter\", function() { return getTableFooter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reducer\", function() { return reducer; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_lib_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/lib.ts */ \"./src/client/lib/lib.ts\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar SET_CELLS = 'SET_CELLS';\nvar ADD_ROW = 'ADD_ROW';\nvar REMOVE_ROW = 'REMOVE_ROW';\nvar INCREMENT = 'INCREMENT';\nvar PERCENTS_TOGGLE = 'PERCENTS_TOGGLE';\nvar SET_NUMBER_OF_CLOSEST = 'SET_NUMBER_OF_CLOSEST';\nvar SHOW_CLOSEST = 'SHOW_CLOSEST';\nvar setCells = function setCells(cells) {\n  return {\n    type: SET_CELLS,\n    cells: cells\n  };\n};\nvar addRow = function addRow(row) {\n  return {\n    type: ADD_ROW,\n    row: row\n  };\n};\nvar removeRow = function removeRow(number) {\n  return {\n    type: REMOVE_ROW,\n    number: number\n  };\n};\nvar increment = function increment(id, rowIndex) {\n  return {\n    type: INCREMENT,\n    id: id,\n    rowIndex: rowIndex\n  };\n};\nvar percentsToggle = function percentsToggle(rowIndex) {\n  return {\n    type: PERCENTS_TOGGLE,\n    rowIndex: rowIndex\n  };\n};\nvar showClosest = function showClosest(target) {\n  return {\n    type: SHOW_CLOSEST,\n    target: target\n  };\n};\nvar setNumberOfClosest = function setNumberOfClosest(numberOfClosest) {\n  return {\n    type: SET_NUMBER_OF_CLOSEST,\n    numberOfClosest: numberOfClosest\n  };\n};\nvar getCells = function getCells(state) {\n  return state.cells;\n};\nvar getTableFooter = function getTableFooter(state) {\n  return state.tableFooter;\n}; // type InitialState = {\n//   cells: Cell[][];\n//   tableFooter: Cell[];\n//   numberOfClosest: number;\n// };\n// const initialState = {\n//   cells: [],\n//   tableFooter: [],\n//   numberOfClosest: 0,\n// };\n\nvar reducer = function reducer(state, action) {\n  switch (action.type) {\n    case 'SET_CELLS':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        cells: action.cells,\n        tableFooter: Object(_lib_lib_ts__WEBPACK_IMPORTED_MODULE_1__[\"getAverageValues\"])(action.cells)\n      });\n\n    case 'ADD_ROW':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        cells: [].concat(_toConsumableArray(state.cells), [action.row]),\n        tableFooter: Object(_lib_lib_ts__WEBPACK_IMPORTED_MODULE_1__[\"getAverageValues\"])([].concat(_toConsumableArray(state.cells), [action.row]))\n      });\n\n    case 'REMOVE_ROW':\n      var filteredCells = state.cells.filter(function (row, index) {\n        return index !== action.number;\n      });\n      return _objectSpread(_objectSpread({}, state), {}, {\n        cells: filteredCells,\n        tableFooter: Object(_lib_lib_ts__WEBPACK_IMPORTED_MODULE_1__[\"getAverageValues\"])(filteredCells)\n      });\n\n    case 'INCREMENT':\n      var cells = _toConsumableArray(state.cells);\n\n      var incrementedCell = cells[action.rowIndex].find(function (cell) {\n        return cell.id === action.id;\n      });\n\n      if (incrementedCell) {\n        incrementedCell.amount++;\n      }\n\n      return _objectSpread(_objectSpread(_objectSpread({}, state), cells), {}, {\n        tableFooter: Object(_lib_lib_ts__WEBPACK_IMPORTED_MODULE_1__[\"getAverageValues\"])(cells)\n      });\n\n    case 'PERCENTS_TOGGLE':\n      var percentsCells = _toConsumableArray(state.cells);\n\n      percentsCells[action.rowIndex] = percentsCells[action.rowIndex].map(function (cell) {\n        return _objectSpread(_objectSpread({}, cell), {}, {\n          isPercentsShown: !cell.isPercentsShown\n        });\n      });\n      return _objectSpread(_objectSpread({}, state), {}, {\n        cells: percentsCells\n      });\n\n    case 'SET_NUMBER_OF_CLOSEST':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        numberOfClosest: action.numberOfClosest\n      });\n\n    case 'SHOW_CLOSEST':\n      var closest = Object(_lib_lib_ts__WEBPACK_IMPORTED_MODULE_1__[\"findClosest\"])(state.cells, action.target, state.numberOfClosest);\n\n      var closestCells = _toConsumableArray(state.cells);\n\n      closestCells.forEach(function (row) {\n        row.forEach(function (cell) {\n          if (closest.includes(cell)) {\n            cell.isCloser = !cell.isCloser;\n          }\n        });\n      });\n      return _objectSpread(_objectSpread({}, state), {}, {\n        cells: closestCells\n      });\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/client/store/store.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client_App_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client/App.tsx */ \"./src/client/App.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_client_store_store_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/client/store/store.js */ \"./src/client/store/store.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _client_lib_lib_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./client/lib/lib.ts */ \"./src/client/lib/lib.ts\");\n\n\n\n\n\n\n\n\n\nvar port = 3000;\nvar server = express__WEBPACK_IMPORTED_MODULE_0___default()();\nserver.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"]('dist'));\n\nvar htmlMaker = function htmlMaker(body, state) {\n  return \"\\n  <!DOCTYPE html>\\n  <html>\\n    <head>\\n      <title>React SSR App</title>\\n      <script defer src=\\\"/bundle.js\\\"></script>\\n      <link rel=\\\"stylesheet\\\" type=\\\"text/css\\\" href=\\\"/styles.css\\\"></link> \\n    </head>\\n    <body style=\\\"margin:0\\\">\\n      <div id=\\\"app\\\">\".concat(body, \"</div>\\n      <script>\\n          window.__PRELOADED_STATE__ = \").concat(JSON.stringify(state).replace(/</g, \"\\\\u003c\"), \"\\n      </script>\\n    </body>\\n  </html>\\n  \");\n};\n\nserver.get('*', function (req, res) {\n  var preloadedState = {};\n  var params = req.path.match(/(?<=)\\d+/gi);\n\n  if (params && params.length === 3) {\n    var data = req.path.match(/(?<=)\\d+/gi);\n    preloadedState = {\n      cells: Object(_client_lib_lib_ts__WEBPACK_IMPORTED_MODULE_8__[\"cellsCreator\"])(data[1], data[0]),\n      numberOfClosest: data[2],\n      tableFooter: Object(_client_lib_lib_ts__WEBPACK_IMPORTED_MODULE_8__[\"getAverageValues\"])(Object(_client_lib_lib_ts__WEBPACK_IMPORTED_MODULE_8__[\"cellsCreator\"])(data[1], data[0]))\n    };\n  }\n\n  var store = Object(redux__WEBPACK_IMPORTED_MODULE_6__[\"createStore\"])(_src_client_store_store_js__WEBPACK_IMPORTED_MODULE_5__[\"reducer\"], preloadedState);\n  var context = {};\n  var finalState = store.getState();\n  var app = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__[\"renderToString\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"StaticRouter\"], {\n    location: req.path,\n    context: context\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"Provider\"], {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_client_App_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null))));\n  res.send(htmlMaker(app, finalState));\n});\nserver.listen(port);\nconsole.log(\"Serving at http://localhost:\".concat(port));\n\n//# sourceURL=webpack:///./src/server.js?");

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