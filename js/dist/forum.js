module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/forum/components/AccountVerificationModal.js":
/*!**********************************************************!*\
  !*** ./src/forum/components/AccountVerificationModal.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AccountVerificationModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Alert */ "flarum/components/Alert");
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Alert__WEBPACK_IMPORTED_MODULE_4__);





/* global m, moment */

var AccountVerificationModal = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AccountVerificationModal, _Modal);

  function AccountVerificationModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = AccountVerificationModal.prototype;

  _proto.init = function init() {
    _Modal.prototype.init.call(this);

    this.name = m.prop("");
    this.surname = m.prop("");
    this.birthYear = m.prop("");
    this.identityNumber = m.prop("");
  };

  _proto.title = function title() {
    return "Hesap Doğrulama";
  };

  _proto.form = function form() {
    return [m("div", {
      className: "Form-group"
    }, m("label", null, " \u0130sim "), m("input", {
      className: "FormControl",
      bidi: this.name
    })), m("div", {
      className: "Form-group"
    }, m("label", null, " Soyisim "), m("input", {
      className: "FormControl",
      bidi: this.surname
    })), m("div", {
      className: "Form-group"
    }, m("label", null, " Do\u011Fum Y\u0131l\u0131 "), m("input", {
      className: "FormControl",
      bidi: this.birthYear
    })), m("div", {
      className: "Form-group"
    }, m("label", null, " TC Kimlik Numaras\u0131 "), m("input", {
      className: "FormControl",
      bidi: this.identityNumber
    }))];
  };

  _proto.content = function content() {
    var _this = this;

    if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.data.attributes.identity_approved === 1) {
      this.alert = new flarum_components_Alert__WEBPACK_IMPORTED_MODULE_4___default.a({
        type: "success",
        children: "Hesap doğrulanmış."
      });
      return;
    }

    return m('.Modal-body', [this.form(), flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      className: 'Button Button--primary',
      children: "Doğrula",
      disabled: this.name() === "" || this.surname() === "" || this.identityNumber() === "" || this.birthYear() === "",
      onclick: function onclick() {
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.request({
          url: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('apiUrl') + '/account-verification',
          method: 'POST',
          data: {
            "data": {
              "name": _this.name(),
              "surname": _this.surname(),
              "birthYear": _this.birthYear(),
              "identityNumber": _this.identityNumber()
            }
          },
          errorHandler: _this.onerror.bind(_this)
        }).then(function (updated) {
          _this.alert = null;

          if (updated.success !== true) {
            _this.alert = new flarum_components_Alert__WEBPACK_IMPORTED_MODULE_4___default.a({
              type: "error",
              children: updated.data
            });
            m.redraw();
          } else {
            location.reload();
          }
        });
      }
    })]);
  };

  return AccountVerificationModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_SessionDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/SessionDropdown */ "flarum/components/SessionDropdown");
/* harmony import */ var flarum_components_SessionDropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SessionDropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AccountVerificationModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/AccountVerificationModal */ "./src/forum/components/AccountVerificationModal.js");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_PostUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/PostUser */ "flarum/components/PostUser");
/* harmony import */ var flarum_components_PostUser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_PostUser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_components_UserCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/components/UserCard */ "flarum/components/UserCard");
/* harmony import */ var flarum_components_UserCard__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_components_UserCard__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/helpers/listItems */ "flarum/helpers/listItems");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_7__);









var matchTag = function matchTag(tagName) {
  return function (node) {
    return node && node.tag && node.tag === tagName;
  };
};

var get = function get(from) {
  for (var _len = arguments.length, selectors = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    selectors[_key - 1] = arguments[_key];
  }

  return [].concat(selectors).map(function (s) {
    return s.replace(/\[([^\[\]]*)\]/g, '.$1.').split('.').filter(function (t) {
      return t !== '';
    }).reduce(function (prev, cur) {
      return prev && prev[cur];
    }, from);
  });
};

Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_SessionDropdown__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'items', function (items) {
  if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user) {
    items.add('account-verification', flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a.component({
      icon: 'fas fa-user-check',
      children: 'Hesap Doğrulama',
      onclick: function onclick() {
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _components_AccountVerificationModal__WEBPACK_IMPORTED_MODULE_3__["default"]());
      }
    }));
  }
});
Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_UserCard__WEBPACK_IMPORTED_MODULE_6___default.a.prototype, 'view', function (view) {
  var user = this.props.user;
  var badges = user.badges().toArray();
  var container = get(view, 'children[0].children[0]')[0];
  var profile = container && container.children.find(function (i) {
    return i.attrs && i.attrs.className === 'UserCard-profile';
  });
  if (!container || !profile || user.data.attributes.identity_approved !== 1) return view;
  profile.children = profile.children.map(function (i) {
    var _ref = i.attrs || {},
        className = _ref.className;

    if (className === 'UserCard-badges badges') return null;

    if (className === 'UserCard-identity') {
      var els = [m("span", {
        className: "username"
      }, user && user.displayName()), m("ul", {
        className: "UserCard-badges badges"
      }, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_7___default()(badges), m("li", null, m("span", {
        className: "Verified"
      }, m("span", {
        className: "fa-stack"
      }, m("i", {
        className: "fas fa-certificate fa-stack-2x"
      }), m("i", {
        className: "fas fa-check fa-stack-1x fa-inverse"
      })))))];

      if (i.children[0].tag === 'a') {
        i.children[0].children[1] = els;
      } else {
        i.children[1] = els;
      }
    }

    return i;
  });
  return view;
});
Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_PostUser__WEBPACK_IMPORTED_MODULE_5___default.a.prototype, 'view', function (node) {
  var post = this.props.post;
  var user = post.user();

  if (!user || user.data.attributes.identity_approved !== 1) {
    return node;
  }

  var header = node.children.find(matchTag('h3'));
  header.children.push(m("span", {
    className: "Verified"
  }, m("span", {
    className: "fa-stack"
  }, m("i", {
    className: "fas fa-certificate fa-stack-2x"
  }), m("i", {
    className: "fas fa-check fa-stack-1x fa-inverse"
  }))));
  return node;
});

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/Alert":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Alert']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Alert'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Modal'];

/***/ }),

/***/ "flarum/components/PostUser":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/PostUser']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/PostUser'];

/***/ }),

/***/ "flarum/components/SessionDropdown":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['components/SessionDropdown']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/SessionDropdown'];

/***/ }),

/***/ "flarum/components/UserCard":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/UserCard']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/UserCard'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/helpers/listItems":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/listItems']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/listItems'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map