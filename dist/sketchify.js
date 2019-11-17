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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".sk-text {\\n  font-family: 'Indie Flower', Helvetica, sans-serif, SimSun;\\n}\\n\\n/* latin */\\n@font-face {\\n  font-family: 'Shadows Into Light';\\n  font-style: normal;\\n  font-weight: 400;\\n  font-display: swap;\\n  src: local('Shadows Into Light'), local('ShadowsIntoLight'), url(https://fonts.gstatic.com/s/shadowsintolight/v9/UqyNK9UOIntux_czAvDQx_ZcHqZXBNQzdcD55TecYQ.woff2) format('woff2');\\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\\n}\\n\\n/* latin */\\n@font-face {\\n  font-family: 'Indie Flower';\\n  font-style: normal;\\n  font-weight: 400;\\n  font-display: swap;\\n  src: local('Indie Flower'), local('IndieFlower'), url(https://fonts.gstatic.com/s/indieflower/v11/m8JVjfNVeKWVnh3QMuKkFcZVaUuH99GUDg.woff2) format('woff2');\\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/highcharts.js":
/*!***************************!*\
  !*** ./src/highcharts.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst HIGH_CHART_CLASSES = [\n  \"highcharts-root\",\n  \"highcharts-grid\",\n  \"highcharts-grid-line\",\n  \"highcharts-axis\",\n  \"highcharts-axis-line\",\n  \"highcharts-series-group\",\n  \"highcharts-series\",\n  \"highcharts-point\",\n  \"highcharts-graph\",\n  \"highcharts-area\",\n  \"highcharts-markers\"\n];\n\nconst config = {\n  blacklist: [\"highcharts-background\", \"highcharts-plot-background\"]\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n\n\n//# sourceURL=webpack:///./src/highcharts.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _highcharts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./highcharts.js */ \"./src/highcharts.js\");\n/* harmony import */ var _xcharts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xcharts.js */ \"./src/xcharts.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nconst chartConfigs = {\n  highcharts: _highcharts_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  xcharts: _xcharts_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n};\n\nfunction shouldFilter(el, blacklist) {\n  if (!blacklist) {\n    return false;\n  }\n\n  for (let i = 0; i < blacklist.length; i += 1) {\n    if ($(el).hasClass(blacklist[i])) {\n      return true;\n    }\n  }\n  return false;\n}\n\nfunction Sketchifier(root, option) {\n  const svgList = $(root).find('svg');\n  const handlers = [];\n  svgList.each(function(index) {\n    const el = $(this)[0];\n    handlers.push(SVGSketchifier(el, option));\n  })\n\n  return {\n    handify() {\n      handlers.forEach(h => h.handify());\n    },\n    restore() {\n      handlers.forEach(h => h.restore());\n    },\n  };\n}\n\nfunction SVGSketchifier(svg, option) {\n  const defaultOptions = {\n    fillStyle: 'hachure',\n    roughness: 1,\n    bowing: 1,\n    strokeWidth: 1,\n    chartType: '',\n  };\n\n  const mySvg = svg;\n  const myOption = {\n    ...defaultOptions,\n    ...option,\n  };\n\n  const rc = rough.svg(svg);\n  const hiddenEl = []; // save the state for all hidden elements\n  const chartConfig = chartConfigs[myOption.chartType];\n  const blacklist = chartConfig ? chartConfig.blacklist : [];\n\n  function getAttrValue(el, attr, defaultValue = 0.0) {\n    if ($(el).attr(attr)) {\n      return parseFloat($(el).attr(attr));\n    }\n    if ($(el).css(attr)) {\n      return parseFloat($(el).css(attr));\n    }\n    return defaultValue;\n  }\n\n  function getStyleAttrValue(el, attr) {\n    return $(el).attr(attr) ? $(el).attr(attr) : $(el).css(attr);\n  }\n\n  function handifyRect(el) {\n    $(el).hide();\n    hiddenEl.push($(el));\n    const parent = $(el).parent()[0];\n    const x = getAttrValue(el, 'x');\n    const y = getAttrValue(el, 'y');\n    const width = getAttrValue(el, 'width');\n    const height = getAttrValue(el, 'height');\n    const fill = getStyleAttrValue(el, 'fill');\n    const stroke = getStyleAttrValue(el, 'stroke');\n    const opacity = getAttrValue(el, 'opacity', 1.0);\n    const node = rc.rectangle(x, y, width, height, {\n      fill,\n      stroke,\n      fillStyle: myOption.fillStyle,\n      roughness: myOption.roughness,\n      bowing: myOption.bowing,\n      strokeWidth: myOption.strokeWidth\n    });\n    $(node).addClass('handy');\n    $(node).attr('opacity', opacity);\n    if (myOption.fillStyle === 'solid') {\n      $(node).children().css('fill', fill);\n    }\n    if ($(el).attr('transform')) {\n      $(node).attr('transform', $(el).attr('transform'));\n    }\n    parent.appendChild(node);\n  }\n\n  function handifyCircle(el) {\n    $(el).hide();\n    hiddenEl.push($(el));\n    const parent = $(el).parent()[0];\n    const cx = getAttrValue(el, 'cx');\n    const cy = getAttrValue(el, 'cy');\n    const r = getAttrValue(el, 'r');\n    const rr = r || parseFloat(getStyleAttrValue(el, 'r'));\n    const fill = getStyleAttrValue(el, 'fill');\n    const stroke = getStyleAttrValue(el, 'stroke');\n    const opacity = getAttrValue(el, 'opacity', 1.0);\n    const node = rc.circle(cx, cy, rr * 2, {\n      fill,\n      stroke,\n      fillStyle: myOption.fillStyle,\n      roughness: myOption.roughness,\n      bowing: myOption.bowing,\n      strokeWidth: myOption.strokeWidth\n    });\n    $(node).addClass('handy');\n    $(node).attr('opacity', opacity);\n    if (myOption.fillStyle === 'solid') {\n      $(node).children().css('fill', fill);\n    }\n    if ($(el).attr('transform')) {\n      $(node).attr('transform', $(el).attr('transform'));\n    }\n    parent.appendChild(node);\n  }\n\n  function handifyLine(el) {\n    $(el).hide();\n    hiddenEl.push($(el));\n    const parent = $(el).parent()[0];\n    const x1 = getAttrValue(el, 'x1');\n    const x2 = getAttrValue(el, 'x2');\n    const y1 = getAttrValue(el, 'y1');\n    const y2 = getAttrValue(el, 'y2');\n    const fill = getStyleAttrValue(el, 'fill');\n    const stroke = getStyleAttrValue(el, 'stroke');\n    const opacity = getAttrValue(el, 'opacity', 1.0);\n    const node = rc.line(x1, y1, x2, y2, {\n      fill,\n      stroke,\n      fillStyle: myOption.fillStyle,\n      roughness: myOption.roughness,\n      bowing: myOption.bowing,\n      strokeWidth: myOption.strokeWidth\n    });\n    $(node).addClass('handy');\n    $(node).attr('opacity', opacity);\n    if (myOption.fillStyle === 'solid') {\n      $(node).children().css('fill', fill);\n    }\n    if ($(el).attr('transform')) {\n      $(node).attr('transform', $(el).attr('transform'));\n    }\n    parent.appendChild(node);\n  }\n\n  function handifyEllipse(el) {\n    $(el).hide();\n    hiddenEl.push($(el));\n    const parent = $(el).parent()[0];\n    const cx = getAttrValue(el, 'cx');\n    const cy = getAttrValue(el, 'cy');\n    const rx = getAttrValue(el, 'rx');\n    const ry = getAttrValue(el, 'ry');\n    const fill = getStyleAttrValue(el, 'fill');\n    const stroke = getStyleAttrValue(el, 'stroke');\n    const opacity = getAttrValue(el, 'opacity', 1.0);\n    const node = rc.ellipse(cx, cy, rx * 2, ry * 2, {\n      fill,\n      stroke,\n      fillStyle: myOption.fillStyle,\n      roughness: myOption.roughness,\n      bowing: myOption.bowing,\n      strokeWidth: myOption.strokeWidth,\n    });\n    $(node).addClass('handy');\n    $(node).attr('opacity', opacity);\n    if (myOption.fillStyle === 'solid') {\n      $(node).children().css('fill', fill);\n    }\n    if ($(el).attr('transform')) {\n      $(node).attr('transform', $(el).attr('transform'));\n    }\n    parent.appendChild(node);\n  }\n\n  function handifyPolygon(el) {\n    $(el).hide();\n    hiddenEl.push($(el));\n    const parent = $(el).parent()[0];\n    const points = $(el).attr('points');\n    if (points) {\n      const pointsArray = points.split(/(\\s+)/).filter((e) => e.trim().length > 0);\n      const pointsPairArray = pointsArray.map((p) => {\n        const po = p.split(',');\n        return [parseFloat(po[0]), parseFloat(po[1])];\n      });\n      const fill = getStyleAttrValue(el, 'fill');\n      const stroke = getStyleAttrValue(el, 'stroke');\n      const opacity = getAttrValue(el, 'opacity', 1.0);\n      const node = rc.polygon(pointsPairArray, {\n        fill,\n        stroke,\n        fillStyle: myOption.fillStyle,\n        roughness: myOption.roughness,\n        bowing: myOption.bowing,\n        strokeWidth: myOption.strokeWidth,\n      });\n      $(node).addClass('handy');\n      $(node).attr('opacity', opacity);\n      if (myOption.fillStyle === 'solid') {\n        $(node).children().css('fill', fill);\n      }\n      if ($(el).attr('transform')) {\n        $(node).attr('transform', $(el).attr('transform'));\n      }\n      parent.appendChild(node);\n    }\n  }\n\n  function handifyPath(el) {\n    $(el).hide();\n    hiddenEl.push($(el));\n    const parent = $(el).parent()[0];\n    const d = $(el).attr('d');\n    const fill = getStyleAttrValue(el, 'fill');\n    const stroke = getStyleAttrValue(el, 'stroke');\n    const opacity = getAttrValue(el, 'opacity', 1.0);\n    const node = rc.path(d, {\n      fill,\n      stroke,\n      fillStyle: myOption.fillStyle,\n      roughness: myOption.roughness,\n      bowing: myOption.bowing,\n      strokeWidth: myOption.strokeWidth,\n    });\n    $(node).addClass('handy');\n    $(node).attr('opacity', opacity);\n    if (myOption.fillStyle === 'solid') {\n      $(node).children().css('fill', fill);\n    }\n    if ($(el).attr('transform')) {\n      $(node).attr('transform', $(el).attr('transform'));\n    }\n    parent.appendChild(node);\n  }\n\n  function handify(el) {\n    const tag = $(el).prop('tagName').toLowerCase();\n\n    if (shouldFilter(el, blacklist)) {\n      return;\n    }\n\n    switch (tag) {\n      case 'svg':\n      case 'g':\n        $(el)\n          .children()\n          .each(function() {\n            handify($(this)[0]);\n          });\n        break;\n      case 'rect':\n        handifyRect(el);\n        break;\n      case 'circle':\n        handifyCircle(el);\n        break;\n      case 'line':\n        handifyLine(el);\n        break;\n      case 'ellipse':\n        handifyEllipse(el);\n        break;\n      case 'polygon':\n        handifyPolygon(el);\n        break;\n      case 'path':\n        handifyPath(el);\n        break;\n      case 'text':\n        $(el).addClass('sk-text');\n        break;\n      default:\n    }\n  }\n\n  return {\n    handify() {\n      handify(mySvg);\n    },\n    restore() {\n      $('.handy').remove();\n      hiddenEl.forEach((el) => {\n        el.show();\n      });\n      $(mySvg)\n        .find('text')\n        .removeClass('sk-text');\n    },\n  };\n}\n\nglobal.Sketchifier = Sketchifier;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./src/xcharts.js":
/*!************************!*\
  !*** ./src/xcharts.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst config = {\n  blacklist: [\"xc-bar-bg-rect\",\"xc-radar-coverPolygon\"]\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n\n\n//# sourceURL=webpack:///./src/xcharts.js?");

/***/ })

/******/ });