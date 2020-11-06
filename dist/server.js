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

/***/ "./src/client/App.jsx":
/*!****************************!*\
  !*** ./src/client/App.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Matrix_Matrix_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Matrix/Matrix.jsx */ \"./src/client/components/Matrix/Matrix.jsx\");\n/* harmony import */ var _components_Form_Form_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Form/Form.jsx */ \"./src/client/components/Form/Form.jsx\");\n\n\n\n\n\nvar App = function App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/\",\n    exact: true,\n    component: _components_Form_Form_jsx__WEBPACK_IMPORTED_MODULE_3__[\"Form\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/\",\n    render: function render(props) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Matrix_Matrix_jsx__WEBPACK_IMPORTED_MODULE_2__[\"Matrix\"], props);\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/client/App.jsx?");

/***/ }),

/***/ "./src/client/components/Form/Form.jsx":
/*!*********************************************!*\
  !*** ./src/client/components/Form/Form.jsx ***!
  \*********************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Form\", function() { return Form; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Form_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.scss */ \"./src/client/components/Form/Form.scss\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar Form = function Form() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      _useState2 = _slicedToArray(_useState, 2),\n      rowsInputValue = _useState2[0],\n      setRowsInputValue = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      _useState4 = _slicedToArray(_useState3, 2),\n      rowsIsValid = _useState4[0],\n      setRowsIsValid = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      _useState6 = _slicedToArray(_useState5, 2),\n      columnsInputValue = _useState6[0],\n      setColumnsInputValue = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      _useState8 = _slicedToArray(_useState7, 2),\n      columnsIsValid = _useState8[0],\n      setColumnsIsValid = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      _useState10 = _slicedToArray(_useState9, 2),\n      closestInputValue = _useState10[0],\n      setClosestInputValue = _useState10[1];\n\n  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      _useState12 = _slicedToArray(_useState11, 2),\n      closestIsValid = _useState12[0],\n      setClosestIsValid = _useState12[1];\n\n  var rowsAndColumnsValidation = function rowsAndColumnsValidation(inputValue) {\n    if (inputValue && typeof Number(inputValue) === 'number') {\n      return true;\n    } else {\n      return false;\n    }\n  };\n\n  var closestValidation = function closestValidation(value) {\n    if (rowsInputValue && columnsInputValue) {\n      if (Number(value) <= Number(rowsInputValue) * Number(columnsInputValue)) {\n        return true;\n      } else {\n        return false;\n      }\n    }\n  };\n\n  var makeMatrix = function makeMatrix(e) {\n    e.preventDefault();\n\n    if (rowsAndColumnsValidation(rowsInputValue) && rowsAndColumnsValidation(columnsInputValue)) {\n      if (closestValidation(closestInputValue)) {\n        location.assign(\"http://localhost:3000/columns=\".concat(columnsInputValue, \"/rows=\").concat(rowsInputValue, \"/closest=\").concat(closestInputValue));\n      } else {\n        setClosestIsValid(false);\n      }\n    } else {\n      setRowsIsValid(false);\n      setColumnsIsValid(false);\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    className: \"form\",\n    onSubmit: makeMatrix\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Matrix Maker\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form__input-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"form__label\"\n  }, \"Number of rows\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    name: \"rows\",\n    className: \"form__input\",\n    onChange: function onChange(e) {\n      return setRowsInputValue(e.target.value);\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"form__error\",\n    style: rowsIsValid ? {\n      opacity: '0'\n    } : {\n      opacity: '1'\n    }\n  }, \"Enter a number of rows\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form__input-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"form__label\"\n  }, \"Number of columns\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    name: \"columns\",\n    className: \"form__input\",\n    onChange: function onChange(e) {\n      return setColumnsInputValue(e.target.value);\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"form__error\",\n    style: columnsIsValid ? {\n      opacity: '0'\n    } : {\n      opacity: '1'\n    }\n  }, \"Enter a number of columns\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form__input-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"form__label\"\n  }, \"Number of closest cells to shown\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    id: \"closest\",\n    name: \"closest\",\n    className: \"form__input\",\n    onChange: function onChange(e) {\n      return setClosestInputValue(e.target.value);\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"form__error\",\n    style: closestIsValid ? {\n      opacity: '0'\n    } : {\n      opacity: '1'\n    }\n  }, \"Enter a number of closest cells to shown (min: 1, max: columns * rows)\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"form__button\"\n  }, \"Make a matrix\"));\n};\n\n//# sourceURL=webpack:///./src/client/components/Form/Form.jsx?");

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

/***/ "./src/client/components/Matrix/Matrix.jsx":
/*!*************************************************!*\
  !*** ./src/client/components/Matrix/Matrix.jsx ***!
  \*************************************************/
/*! exports provided: Matrix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Matrix\", function() { return Matrix; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/store */ \"./src/client/store/store.js\");\n/* harmony import */ var _lib_lib_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/lib.js */ \"./src/client/lib/lib.js\");\n/* harmony import */ var _Matrix_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Matrix.scss */ \"./src/client/components/Matrix/Matrix.scss\");\n\n\n\n\n\nvar Matrix = function Matrix() {\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n  var cells = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(_store_store__WEBPACK_IMPORTED_MODULE_2__[\"getCells\"]);\n  var tableFooter = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(_store_store__WEBPACK_IMPORTED_MODULE_2__[\"getTableFooter\"]);\n\n  if (cells) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n      className: \"table\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", {\n      className: \"table__body\"\n    }, cells.map(function (row, i) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n        className: \"table__row\",\n        key: i\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: \"table__button-wrapper\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        className: \"table__button-remove\",\n        onClick: function onClick() {\n          return dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_2__[\"removeRow\"])(i));\n        }\n      }, \"Remove row\")), row.map(function (cell) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n          key: cell.id,\n          onClick: function onClick() {\n            return dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_2__[\"increment\"])(cell.id, i));\n          },\n          onMouseOver: function onMouseOver() {\n            return dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_2__[\"showClosest\"])(cell));\n          },\n          onMouseOut: function onMouseOut() {\n            return dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_2__[\"showClosest\"])(cell));\n          },\n          className: cell.isCloser ? 'table__cell table__cell-closest' : 'table__cell'\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n          className: \"table__text\"\n        }, cell.isPercentsShown ? \"\".concat(Math.round(cell.amount / row.reduce(function (acumulator, cell) {\n          return acumulator + cell.amount;\n        }, 0) * 100), \"%\") : cell.amount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"table__percents\",\n          style: cell.isPercentsShown ? {\n            height: \"\".concat(Math.round(cell.amount / row.reduce(function (acumulator, cell) {\n              return acumulator + cell.amount;\n            }, 0) * 100), \"%\"),\n            backgroundColor: \"red\"\n          } : {\n            height: \"0\"\n          }\n        }));\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: \"table__cell\",\n        onMouseOver: function onMouseOver() {\n          return dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_2__[\"percentsToggle\"])(i));\n        },\n        onMouseOut: function onMouseOut() {\n          return dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_2__[\"percentsToggle\"])(i));\n        }\n      }, row.reduce(function (acumulator, cell) {\n        return acumulator + cell.amount;\n      }, 0)));\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tfoot\", {\n      className: \"table__footer\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n      className: \"table__row-footer\"\n    }, tableFooter.map(function (cell) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        key: cell.id,\n        className: \"table__cell-avarange\"\n      }, cell.amount);\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n      className: \"table__button-wrapper\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"table__button-new\",\n      onClick: function onClick() {\n        return dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_2__[\"addRow\"])(Object(_lib_lib_js__WEBPACK_IMPORTED_MODULE_3__[\"rowCreator\"])(cells[0].length)));\n      }\n    }, \"add row\")))));\n  } else {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"oops\");\n  }\n};\n\n//# sourceURL=webpack:///./src/client/components/Matrix/Matrix.jsx?");

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

/***/ "./src/client/lib/lib.js":
/*!*******************************!*\
  !*** ./src/client/lib/lib.js ***!
  \*******************************/
/*! exports provided: rowCreator, cellsCreator, getAverageValues, findClosest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rowCreator\", function() { return rowCreator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cellsCreator\", function() { return cellsCreator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAverageValues\", function() { return getAverageValues; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findClosest\", function() { return findClosest; });\nvar idMaker = function idMaker() {\n  var id = 0;\n  return function () {\n    return id++;\n  };\n};\n\nvar id = idMaker();\n\nvar createRandomNumber = function createRandomNumber() {\n  return Math.floor(Math.random() * 900 + 100);\n};\n\nvar rowCreator = function rowCreator(columns) {\n  var arr = new Array(columns).fill(\"#\");\n  var row = arr.map(function () {\n    return {\n      amount: createRandomNumber(),\n      id: id(),\n      isPercentsShown: false,\n      isCloser: false\n    };\n  });\n  return row;\n};\nvar cellsCreator = function cellsCreator(rows, columns) {\n  var arr = new Array(rows).fill(\"#\");\n  var cells = arr.map(function () {\n    return rowCreator(columns);\n  });\n  return cells;\n};\nvar getAverageValues = function getAverageValues(array) {\n  if (array.length) {\n    var tempoArr = new Array(array[0].length);\n    var index = 0;\n    var res = Array.from(tempoArr, function () {\n      var sum = array.reduce(function (acumulator, item) {\n        return acumulator += item[index].amount;\n      }, 0);\n      index++;\n      return {\n        amount: Math.round(sum / array.length),\n        id: id()\n      };\n    });\n    return res;\n  } else {\n    return [];\n  }\n};\nvar findClosest = function findClosest(array, target, numberOfClosest) {\n  var arr = array.flat();\n  arr.sort(function (a, b) {\n    return a.amount - b.amount;\n  });\n  var targetIndex = arr.indexOf(target);\n  var gap = numberOfClosest / 2;\n\n  if (targetIndex - gap < 0) {\n    return arr.slice(0, numberOfClosest).filter(function (item) {\n      return item.id !== target.id;\n    });\n  } else if (targetIndex + gap > arr.length) {\n    return arr.slice(arr.length - 1 - numberOfClosest).filter(function (item) {\n      return item.id !== target.id;\n    });\n  } else if (numberOfClosest % 2 === 0) {\n    return arr.slice(targetIndex - gap, targetIndex + gap).filter(function (item) {\n      return item.id !== target.id;\n    });\n  } else {\n    var closest = arr.slice(targetIndex - Math.ceil(gap), targetIndex + Math.ceil(gap)).filter(function (item) {\n      return item.id !== target.id;\n    });\n\n    if (Math.abs(target.amount - closest[0].amount) > Math.abs(target.amount - closest[closest.length - 1].amount)) {\n      closest.shift();\n      return closest;\n    } else {\n      closest.pop();\n      return closest;\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/client/lib/lib.js?");

/***/ }),

/***/ "./src/client/store/store.js":
/*!***********************************!*\
  !*** ./src/client/store/store.js ***!
  \***********************************/
/*! exports provided: setCells, addRow, removeRow, increment, percentsToggle, showClosest, setNumberOfClosest, getCells, getTableFooter, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setCells\", function() { return setCells; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addRow\", function() { return addRow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeRow\", function() { return removeRow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"increment\", function() { return increment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"percentsToggle\", function() { return percentsToggle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showClosest\", function() { return showClosest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setNumberOfClosest\", function() { return setNumberOfClosest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCells\", function() { return getCells; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTableFooter\", function() { return getTableFooter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reducer\", function() { return reducer; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_lib_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/lib.js */ \"./src/client/lib/lib.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar SET_CELLS = 'SET_CELLS';\nvar ADD_ROW = 'ADD_ROW';\nvar REMOVE_ROW = 'REMOVE_ROW';\nvar INCREMENT = 'INCREMENT';\nvar PERCENTS_TOGGLE = 'PERCENTS_TOGGLE';\nvar SET_NUMBER_OF_CLOSEST = 'SET_NUMBER_OF_CLOSEST';\nvar SHOW_CLOSEST = 'SHOW_CLOSEST';\nvar setCells = function setCells(cells) {\n  return {\n    type: SET_CELLS,\n    cells: cells\n  };\n};\nvar addRow = function addRow(row) {\n  return {\n    type: ADD_ROW,\n    row: row\n  };\n};\nvar removeRow = function removeRow(number) {\n  return {\n    type: REMOVE_ROW,\n    number: number\n  };\n};\nvar increment = function increment(id, rowIndex) {\n  return {\n    type: INCREMENT,\n    id: id,\n    rowIndex: rowIndex\n  };\n};\nvar percentsToggle = function percentsToggle(rowIndex) {\n  return {\n    type: PERCENTS_TOGGLE,\n    rowIndex: rowIndex\n  };\n};\nvar showClosest = function showClosest(target) {\n  return {\n    type: SHOW_CLOSEST,\n    target: target\n  };\n};\nvar setNumberOfClosest = function setNumberOfClosest(numberOfClosest) {\n  return {\n    type: SET_NUMBER_OF_CLOSEST,\n    numberOfClosest: numberOfClosest\n  };\n};\nvar getCells = function getCells(state) {\n  return state.cells;\n};\nvar getTableFooter = function getTableFooter(state) {\n  return state.tableFooter;\n}; // type InitialState = {\n//   cells: Cell[][];\n//   tableFooter: Cell[];\n//   numberOfClosest: number;\n// };\n// const initialState = {\n//   cells: [],\n//   tableFooter: [],\n//   numberOfClosest: 0,\n// };\n\nvar reducer = function reducer(state, action) {\n  switch (action.type) {\n    case 'SET_CELLS':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        cells: action.cells,\n        tableFooter: Object(_lib_lib_js__WEBPACK_IMPORTED_MODULE_1__[\"getAverageValues\"])(action.cells)\n      });\n\n    case 'ADD_ROW':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        cells: [].concat(_toConsumableArray(state.cells), [action.row]),\n        tableFooter: Object(_lib_lib_js__WEBPACK_IMPORTED_MODULE_1__[\"getAverageValues\"])([].concat(_toConsumableArray(state.cells), [action.row]))\n      });\n\n    case 'REMOVE_ROW':\n      var filteredCells = state.cells.filter(function (row, index) {\n        return index !== action.number;\n      });\n      return _objectSpread(_objectSpread({}, state), {}, {\n        cells: filteredCells,\n        tableFooter: Object(_lib_lib_js__WEBPACK_IMPORTED_MODULE_1__[\"getAverageValues\"])(filteredCells)\n      });\n\n    case 'INCREMENT':\n      var cells = _toConsumableArray(state.cells);\n\n      var incrementedCell = cells[action.rowIndex].find(function (cell) {\n        return cell.id === action.id;\n      });\n\n      if (incrementedCell) {\n        incrementedCell.amount++;\n      }\n\n      return _objectSpread(_objectSpread(_objectSpread({}, state), cells), {}, {\n        tableFooter: Object(_lib_lib_js__WEBPACK_IMPORTED_MODULE_1__[\"getAverageValues\"])(cells)\n      });\n\n    case 'PERCENTS_TOGGLE':\n      var percentsCells = _toConsumableArray(state.cells);\n\n      percentsCells[action.rowIndex] = percentsCells[action.rowIndex].map(function (cell) {\n        return _objectSpread(_objectSpread({}, cell), {}, {\n          isPercentsShown: !cell.isPercentsShown\n        });\n      });\n      return _objectSpread(_objectSpread({}, state), {}, {\n        cells: percentsCells\n      });\n\n    case 'SET_NUMBER_OF_CLOSEST':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        numberOfClosest: action.numberOfClosest\n      });\n\n    case 'SHOW_CLOSEST':\n      var closest = Object(_lib_lib_js__WEBPACK_IMPORTED_MODULE_1__[\"findClosest\"])(state.cells, action.target, state.numberOfClosest);\n\n      var closestCells = _toConsumableArray(state.cells);\n\n      closestCells.forEach(function (row) {\n        row.forEach(function (cell) {\n          if (closest.includes(cell)) {\n            cell.isCloser = !cell.isCloser;\n          }\n        });\n      });\n      return _objectSpread(_objectSpread({}, state), {}, {\n        cells: closestCells\n      });\n\n    default:\n      return state;\n  }\n}; // const store = createStore(reducer);\n// export default store;\n\n//# sourceURL=webpack:///./src/client/store/store.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client_App_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client/App.jsx */ \"./src/client/App.jsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_client_store_store_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/client/store/store.js */ \"./src/client/store/store.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _client_lib_lib_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./client/lib/lib.js */ \"./src/client/lib/lib.js\");\n\n\n\n\n\n\n\n\n\nvar port = 3000;\nvar server = express__WEBPACK_IMPORTED_MODULE_0___default()();\nserver.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"]('dist'));\n\nvar htmlMaker = function htmlMaker(body, state) {\n  return \"\\n  <!DOCTYPE html>\\n  <html>\\n    <head>\\n      <title>React SSR App</title>\\n      <script defer src=\\\"/bundle.js\\\"></script>\\n      <link rel=\\\"stylesheet\\\" type=\\\"text/css\\\" href=\\\"/styles.css\\\"></link> \\n    </head>\\n    <body style=\\\"margin:0\\\">\\n      <div id=\\\"app\\\">\".concat(body, \"</div>\\n      <script>\\n          window.__PRELOADED_STATE__ = \").concat(JSON.stringify(state), \"\\n      </script>\\n    </body>\\n  </html>\\n  \");\n};\n\nserver.get('*', function (req, res) {\n  var preloadedState = {};\n  var params = req.path.match(/(?<=)\\d+/gi);\n\n  if (params && params.length === 3) {\n    var data = req.path.match(/(?<=)\\d+/gi).map(function (param) {\n      return Number(param);\n    });\n    preloadedState = {\n      cells: Object(_client_lib_lib_js__WEBPACK_IMPORTED_MODULE_8__[\"cellsCreator\"])(data[1], data[0]),\n      numberOfClosest: data[2],\n      tableFooter: Object(_client_lib_lib_js__WEBPACK_IMPORTED_MODULE_8__[\"getAverageValues\"])(Object(_client_lib_lib_js__WEBPACK_IMPORTED_MODULE_8__[\"cellsCreator\"])(data[1], data[0]))\n    };\n  }\n\n  var store = Object(redux__WEBPACK_IMPORTED_MODULE_6__[\"createStore\"])(_src_client_store_store_js__WEBPACK_IMPORTED_MODULE_5__[\"reducer\"], preloadedState);\n  var context = {};\n  var finalState = store.getState();\n  var app = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__[\"renderToString\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"StaticRouter\"], {\n    location: req.path,\n    context: context\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"Provider\"], {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_client_App_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null))));\n  res.send(htmlMaker(app, finalState));\n});\nserver.listen(port);\nconsole.log(\"Serving at http://localhost:\".concat(port));\n\n//# sourceURL=webpack:///./src/server.js?");

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