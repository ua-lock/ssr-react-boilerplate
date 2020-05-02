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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./routes/index.js":
/*!*************************!*\
  !*** ./routes/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_pages_Saturn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/pages/Saturn */ \"./views/pages/Saturn.js\");\n/* harmony import */ var _views_pages_Neptune__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/pages/Neptune */ \"./views/pages/Neptune.js\");\n/* harmony import */ var _views_pages_BlackHoles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/pages/BlackHoles */ \"./views/pages/BlackHoles.js\");\n/* harmony import */ var _views_pages_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/pages/Home */ \"./views/pages/Home.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  path: '/',\n  exact: true,\n  component: _views_pages_Home__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n}, {\n  path: '/saturn',\n  component: _views_pages_Saturn__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}, {\n  path: '/neptune',\n  component: _views_pages_Neptune__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}, {\n  path: '/blackhole',\n  component: _views_pages_BlackHoles__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}]);\n\n//# sourceURL=webpack:///./routes/index.js?");

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _views_markupTemplate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/markupTemplate */ \"./views/markupTemplate.js\");\n/* harmony import */ var _views_components_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/components/App */ \"./views/components/App.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes */ \"./routes/index.js\");\n\n\n\n // --- Modules\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nvar PORT = process.env.PORT || 5454;\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"](__dirname));\napp.get('/favicon.ico', function (req, res) {\n  return res.end();\n});\napp.get('*', function (req, res) {\n  var preloadedMarkup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__[\"renderToString\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"StaticRouter\"], {\n    context: {},\n    location: req.url\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_views_components_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)));\n  var requestLocation = _routes__WEBPACK_IMPORTED_MODULE_6__[\"default\"].find(function (route) {\n    return Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"matchPath\"])(req.url, route);\n  }) || null;\n  requestLocation ? res.status(200).send(Object(_views_markupTemplate__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(preloadedMarkup)) : res.status(400).send('Document not goblin');\n});\napp.listen(PORT, function (err) {\n  if (err) console.error(err);\n  return console.info(\"Server running @ port \".concat(PORT));\n});\n\n//# sourceURL=webpack:///./server.js?");

/***/ }),

/***/ "./views/components/App.js":
/*!*********************************!*\
  !*** ./views/components/App.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation */ \"./views/components/Navigation.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes */ \"./routes/index.js\");\n\n\n\n\n\nvar App = function App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Hello from React!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Like space? Pick a star, and see some facts about it:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Switch\"], null, _routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(function (_ref) {\n    var path = _ref.path,\n        exact = _ref.exact,\n        C = _ref.component;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n      key: path,\n      path: path,\n      exact: exact,\n      render: function render(props) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(C, props);\n      }\n    });\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./views/components/App.js?");

/***/ }),

/***/ "./views/components/Navigation.js":
/*!****************************************!*\
  !*** ./views/components/Navigation.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routes */ \"./routes/index.js\");\n\n\n\n\nvar Navigation = function Navigation() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, _routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].map(function (_ref) {\n    var path = _ref.path;\n    if (path == '/') return null;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: path\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      to: path\n    }, path.substring(1)));\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\n//# sourceURL=webpack:///./views/components/Navigation.js?");

/***/ }),

/***/ "./views/markupTemplate.js":
/*!*********************************!*\
  !*** ./views/markupTemplate.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar markupTemplate = function markupTemplate(hydration) {\n  return \"\\n      <!DOCTYPE html>\\n      <html lang=\\\"en\\\">\\n      <head>\\n        <meta charset=\\\"UTF-8\\\"/>\\n        <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\"/>\\n        <meta name=\\\"description\\\" content=\\\"Server-side rendered React PWA\\\">\\n        <title>SSR React PWA</title>\\n        </head>\\n        <body>\\n        <div id=\\\"root\\\">\".concat(hydration, \"</div>\\n        <script src=\\\"/app.bundle.js\\\" defer></script>\\n        </body>\\n        </html>\\n        \");\n}; //<link rel=\"stylesheet\" href=\"/style.bundle.css\">\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (markupTemplate);\n\n//# sourceURL=webpack:///./views/markupTemplate.js?");

/***/ }),

/***/ "./views/pages/BlackHoles.js":
/*!***********************************!*\
  !*** ./views/pages/BlackHoles.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar BlackHoles = function BlackHoles() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Facts about Black Holes\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Black holes are among the strangest things in the universe. They are massive objects \\u2013 collections of mass \\u2013 with gravity so strong that nothing can escape, not even light. The most common types of black holes are the stellar-mass and supermassive black holes. Stellar-mass black holes are created when massive stars explode, leaving behind a black hole with the mass of just a few suns. Supermassive black holes exist in the hearts of galaxies and usually contain the mass equivalent of millions of suns.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Famous Black Holes\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Cygnus X-1:\"), \" a stellar-mass black hole and x-ray source that lies some 6,500 light-years away. It is a binary system that contains a blue supergiant variable star and the x-ray source thought to be the black hole.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Sagittarius A*:\"), \" the supermassive black hole at the heart of the Milky Way Galaxy. It lies in the direction of the constellation Sagittarius. This black hole contains the mass of about 4 million suns.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"M87:\"), \" this elliptical galaxy has a 3.5 billion solar-mass black hole at its heart. The black hole is surrounded by a disk of superheated material and has a jet of superheated material streaming away from the black hole that extends across 5,000 light-years from the galaxy\\u2019s core.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Centaurus A:\"), \" this galaxy, which lies in the direction of the constellation Centaurus, is a giant spiral galaxy with an incredibly active nucleus. It contains a 55 million solar-mass black hole at its heart, with two jets of material that stream away from the galaxy at about half the speed of light across a million light-years of space.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Facts about Black Holes\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"The massive gravitational influence of a black hole distorts space and time in the near neighbourhood. The closer you get to a black hole, the slower time runs. Material that gets too close to a black hole gets sucked in and can never escape.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Material spirals in to a black hole through an accretion disk \\u2014 a disk of gas, dust, stars and planets that fall into orbit the black hole.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"The \\u201Cpoint of no return\\u201D around a black hole is called the \\u201Cevent horizon\\u201D. This is the region where the gravity of the black hole overcomes the momentum of material spinning around it in the accretion disk. Once something cross the event horizon, it is lost to the pull of the black hole.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Black holes were first proposed to exist in the 18th century, but remained a mathematical curiosity until the first candidate black hole was found in 1964. It was called Cygnus X-1, an x-ray source in the constellation Cygnus.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Black holes do not emit radiation on their own. They are detected by the radiation given off as material is heated in the accretion disk, and also by the black hole\\u2019s gravitational effect on other nearby objects (or light passing by).\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"small\", null, \"Facts taken from\", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://space-facts.com/\",\n    rel: \"noreferrer\"\n  }, \"space-facts\"), \".\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlackHoles);\n\n//# sourceURL=webpack:///./views/pages/BlackHoles.js?");

/***/ }),

/***/ "./views/pages/Home.js":
/*!*****************************!*\
  !*** ./views/pages/Home.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Home = function Home() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Click a link above to start navigating\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./views/pages/Home.js?");

/***/ }),

/***/ "./views/pages/Neptune.js":
/*!********************************!*\
  !*** ./views/pages/Neptune.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Neptune = function Neptune() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Facts about Neptune\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Neptune is the most distant planet from the Sun.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Neptune is the smallest gas giant. \")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"A year on Neptune lasts 165 Earth years.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Neptune is named after the Roman god of the sea. \")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Neptune has 6 faint rings. \"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Neptune was not known to the ancients.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"It is not visible to the naked eye and was first observed in 1846. Its position was determined using mathematical predictions. It was named after the Roman god of the sea.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Neptune spins on its axis very rapidly.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"Its equatorial clouds take 16 hours to make one rotation. This is because Neptune is not solid body.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Neptune is the smallest of the ice giants.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"Despite being smaller than Uranus, Neptune has a greater mass. Below its heavy atmosphere, Uranus is made of layers of hydrogen, helium, and methane gases. They enclose a layer of water, ammonia and methane ice. The inner core of the planet is made of rock.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"The atmosphere of Neptune is made of hydrogen and helium, with some methane.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"The methane absorbs red light, which makes the planet appear a lovely blue. High, thin clouds drift in the upper atmosphere.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Neptune has a very active climate.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"Large storms whirl through its upper atmosphere, and high-speed winds track around the planet at up 600 meters per second. One of the largest storms ever seen was recorded in 1989. It was called the Great Dark Spot. It lasted about five years.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Neptune has a very thin collection of rings.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"They are likely made up of ice particles mixed with dust grains and possibly coated with a carbon-based substance.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Neptune has 14 moons.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"The most interesting moon is Triton, a frozen world that is spewing nitrogen ice and dust particles out from below its surface. It was likely captured by the gravitational pull of Neptune. It is probably the coldest world in the solar system.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Only one spacecraft has flown by Neptune.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"In 1989, the Voyager 2 spacecraft swept past the planet. It returned the first close-up images of the Neptune system. The NASA/ESA Hubble Space Telescope has also studied this planet, as have a number of ground-based telescopes.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"small\", null, \"Facts taken from\", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://space-facts.com/\",\n    rel: \"noreferrer\"\n  }, \"space-facts\"), \".\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Neptune);\n\n//# sourceURL=webpack:///./views/pages/Neptune.js?");

/***/ }),

/***/ "./views/pages/Saturn.js":
/*!*******************************!*\
  !*** ./views/pages/Saturn.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Saturn = function Saturn() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Facts about Saturn\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Saturn is the most distant planet that can be seen with the naked eye.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"It is the fifth brightest object in the solar system and is also easily studied through binoculars or a small telescope.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Saturn was known to the ancients, including the Babylonians and Far Eastern observers.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"It is named for the Roman god Saturnus, and was known to the Greeks as Cronus.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Saturn is the flattest planet.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"Its polar diameter is 90% of its equatorial diameter, this is due to its low density and fast rotation. Saturn turns on its axis once every 10 hours and 34 minutes\\xA0giving it the second-shortest day of any of the solar system\\u2019s planets.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Saturn orbits the Sun once every 29.4 Earth years.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"Its slow movement against the backdrop of stars earned it the nickname of \\u201CLubadsagush\\u201D from the ancient Assyrians. The name means \\u201Coldest of the old\\u201D.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Saturn\\u2019s upper atmosphere is divided into bands of clouds.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"The top layers are mostly ammonia ice. Below them, the clouds are largely water ice. Below are layers of cold hydrogen and sulfur ice mixtures.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Saturn has oval-shaped storms similar to Jupiter\\u2019s.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"The region around its north pole has a hexagonal-shaped pattern of clouds. Scientists think this may be a wave pattern in the upper clouds. The planet also has a vortex over its south pole that resembles a hurricane-like storm.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Saturn is made mostly of hydrogen.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"It exists in layers that get denser farther into the planet. Eventually, deep inside, the hydrogen becomes metallic. At the core lies a hot interior.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Saturn has the most extensive rings in the solar system.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"The Saturnian rings are made mostly of chunks of ice and small amounts of carbonaceous dust. The rings stretch out more than 120,700 km from the planet, but are are amazingly thin: only about 20 meters thick.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Saturn has 150 moons and smaller moonlets.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"All are frozen worlds. The largest moons are Titan and Rhea. Enceladus appears to have an ocean below its frozen surface.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Titan is a moon with complex and dense nitrogen-rich atmosphere.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"It is composed mostly of water ice and rock. Its frozen surface has lakes of liquid methane and landscapes covered with frozen nitrogen. Planetary scientists consider Titan to be a possible harbour for life, but not Earth-like life.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Four spacecraft have visited Saturn.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", null, \"Pioneer 11\"), \",\\xA0\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", null, \"Voyager 1\\xA0\"), \"and\\xA0\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", null, \"2\"), \", and the\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", null, \"\\xA0Cassini-Huygens mission\\xA0\"), \"have all studied the planet. Cassini orbited Saturn from July 2004 until September 2017, sending back a wealth of data about the planet, its moons, and rings.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Saturn has more moons than any other planet.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \" 20 new moons were discovered in 2019 bring the total to 82, 3 more than Jupiter.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"small\", null, \"Facts taken from\", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://space-facts.com/\",\n    rel: \"noreferrer\"\n  }, \"space-facts\"), \".\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Saturn);\n\n//# sourceURL=webpack:///./views/pages/Saturn.js?");

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

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });