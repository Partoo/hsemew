webpackJsonp([2],{

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(271)
}
var normalizeComponent = __webpack_require__(8)
/* script */
var __vue_script__ = __webpack_require__(273)
/* template */
var __vue_template__ = __webpack_require__(289)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/layouts/Dashboard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6244f9be", Component.options)
  } else {
    hotAPI.reload("data-v-6244f9be", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(272);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(33)("e5a3d9ac", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6244f9be\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Dashboard.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6244f9be\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Dashboard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(false);
// imports


// module
exports.push([module.i, "\n#box {\n  height: auto;\n  min-height: 100%;\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.app-content {\n  height: 100%;\n}\n.app-content .main-content .breadcrumb-wrapper {\n    background-color: #ffffff;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.07);\n    position: relative;\n    padding: 15px 35px;\n    margin: 0 -15px;\n}\n.app-content .main-content .breadcrumb-wrapper .breadcrumb {\n      background-color: transparent;\n      padding: 0;\n      display: inline-block;\n      position: absolute;\n      right: 35px;\n      top: 50%;\n      margin: -10px 0 0;\n      float: right;\n}\n.app-content .main-content .breadcrumb-wrapper h4 {\n      color: #888;\n}\n@media (min-width: 992px) {\n#box {\n    padding-top: 60px;\n}\n.main-content {\n    margin-left: 220px;\n    margin-top: 0;\n    -webkit-transition: margin-left .5s;\n    transition: margin-left .5s;\n    min-height: 100%;\n}\n.main-content:before, .main-content:after {\n    content: \" \";\n    display: table;\n}\n}\n@media (max-width: 991px) {\n.sidebar-off {\n    position: fixed !important;\n    height: 100%;\n}\n.sidebar-off .app-content {\n      overflow: hidden;\n      position: absolute;\n      -webkit-transform: translate3d(260px, 0, 0);\n              transform: translate3d(260px, 0, 0);\n      -webkit-transition: -webkit-transform 300ms ease 0s;\n      transition: -webkit-transform 300ms ease 0s;\n      transition: transform 300ms ease 0s;\n      transition: transform 300ms ease 0s, -webkit-transform 300ms ease 0s;\n}\n.app-content {\n    -webkit-transition: -webkit-transform 300ms ease 0ms;\n    transition: -webkit-transform 300ms ease 0ms;\n    transition: transform 300ms ease 0ms;\n    transition: transform 300ms ease 0ms, -webkit-transform 300ms ease 0ms;\n    height: 100%;\n    width: 100%;\n    position: relative;\n    z-index: 2;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partials_Header__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partials_Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__partials_Header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_Sidebar__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_Sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__partials_Sidebar__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            // user: User
        };
    },

    computed: {
        sidebarOff: function sidebarOff() {
            return this.$store.state.sidebarCollapsed;
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.$http.get('me').then(function (response) {
            _this.$store.dispatch('storeMe', response.data.data);
        });
    },

    components: {
        Sidebar: __WEBPACK_IMPORTED_MODULE_1__partials_Sidebar___default.a,
        TopHeader: __WEBPACK_IMPORTED_MODULE_0__partials_Header___default.a
    }
});

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(275)
}
var normalizeComponent = __webpack_require__(8)
/* script */
var __vue_script__ = __webpack_require__(277)
/* template */
var __vue_template__ = __webpack_require__(283)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/layouts/partials/Header.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cee3eb92", Component.options)
  } else {
    hotAPI.reload("data-v-cee3eb92", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(276);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(33)("0f808072", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cee3eb92\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Header.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cee3eb92\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Header.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(false);
// imports


// module
exports.push([module.i, "\n.nav {\n  list-style: none;\n}\n.top-nav {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 1080;\n  border: none;\n  margin-bottom: 0;\n  height: 60px;\n  color: #e2e2e2 !important;\n  /*.settings {*/\n  /*position: fixed;*/\n  /*top: -1px;*/\n  /*right: 0;*/\n  /*width: 30px;*/\n  /*line-height: 59px;*/\n  /*}*/\n  /*.settings:after {*/\n  /*position: absolute;*/\n  /*font-size: 17px;*/\n  /*padding: 0;*/\n  /*margin: 0;*/\n  /*font-family: 'FontAwesome';*/\n  /*content: \"\\f085\";*/\n  /*left: 5px;*/\n  /*top: 0;*/\n  /*}*/\n}\n.top-nav a {\n    color: #e2e2e2;\n}\n.top-nav .navbar-header {\n    z-index: 10;\n    background: #2d3642;\n    position: relative;\n    height: 60px;\n}\n.top-nav .navbar-header .sidebar-mobile-toggler {\n      padding: 0 15px;\n      line-height: 60px;\n      height: 60px;\n      border-radius: 0;\n}\n.top-nav .navbar-header .navbar-brand {\n      -webkit-transition: all 0.5s;\n      transition: all 0.5s;\n      padding: 0 15px;\n      float: left;\n      line-height: 60px;\n      height: 60px;\n}\n.top-nav .navbar-header .navbar-brand img {\n        display: inline-block;\n        vertical-align: middle;\n        height: 40px;\n}\n.top-nav .navbar-header .version {\n      position: absolute;\n      bottom: 5px;\n      font-size: smaller;\n      color: #cbcbcb;\n}\n.top-nav .navbar-header .navbar-brand-collapsed {\n      display: none;\n}\n.top-nav .navbar-header .menu-toggler {\n      margin-right: 60px;\n      padding: 0 15px;\n      float: right;\n      background: none;\n      border: none;\n      -webkit-box-shadow: none;\n              box-shadow: none;\n}\n.top-nav .navbar-collapse {\n    background: #374a61;\n    padding-left: 15px !important;\n    padding-right: 15px !important;\n}\n.top-nav .navbar-left {\n    width: 500px;\n    margin-top: 0;\n}\n.top-nav .navbar-left li {\n      display: block;\n}\n.top-nav .sidebar-toggler {\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    float: left;\n    margin-top: 12px;\n    margin-right: 15px;\n    /*border-radius: 0;*/\n}\n.top-nav .navbar-right {\n    margin-right: 20px;\n    /*.dropdown-toggle {*/\n    /*font-weight: 600;*/\n    /*letter-spacing: 0;*/\n    /*line-height: 60px;*/\n    /*padding: 0 15px;*/\n    /*position: relative;*/\n    /*text-align: center;*/\n    /*display: block;*/\n    /*i {*/\n    /*font-size: 18px;*/\n    /*}*/\n    /*}*/\n    /*.badge {*/\n    /*background-color: #e85a5a;*/\n    /*color: #ffffff;*/\n    /*padding: 0;*/\n    /*position: absolute;*/\n    /*top: 10px;*/\n    /*right: -15px;*/\n    /*font-size: 12px;*/\n    /*left: auto;*/\n    /*transform: translateX(-50%);*/\n    /*height: 20px;*/\n    /*min-width: 20px;*/\n    /*line-height: 20px;*/\n    /*}*/\n}\n@media (min-width: 992px) {\n.navbar-header {\n    width: 220px;\n    position: fixed !important;\n    top: 0;\n    left: 0;\n    right: 0;\n}\n.navbar-header .navbar-brand {\n      padding: 0 15px;\n      float: left;\n}\n.navbar-header .navbar-brand-collapsed {\n      padding: 0;\n      width: 50px !important;\n      display: inline-block;\n      opacity: 0;\n      left: -150%;\n      text-align: center;\n}\n.navbar-collapse {\n    margin-left: 220px;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n}\n.navbar-left {\n    margin-left: -15px;\n    padding-left: 0;\n    margin-bottom: 0;\n    list-style: none;\n}\n.navbar-right {\n    position: relative;\n    margin: 0 15px 0 0;\n}\n}\n@media (min-width: 768px) {\n.navbar-collapse {\n    -webkit-transition: margin .5s;\n    transition: margin .5s;\n    height: 60px;\n}\n.navbar-left {\n    float: left;\n}\n.navbar-left li {\n      padding: 0 10px;\n      position: relative;\n}\n.navbar-right {\n    float: right;\n    height: auto !important;\n    /*li:before {*/\n    /*background: linear-gradient(to bottom, rgba(51, 51, 51, 0) 0%, rgba(185, 185, 185, 0.8) 50%, rgba(51, 51, 51, 0) 100%);*/\n    /*content: \"\";*/\n    /*position: absolute;*/\n    /*width: 1px;*/\n    /*right: 0;*/\n    /*top: 5px;*/\n    /*bottom: 5px;*/\n    /*}*/\n}\n.navbar-right li {\n      float: left;\n      position: relative;\n      padding: 20px 10px;\n}\n}\n@media (max-width: 991px) {\n.top-nav {\n    /*position: absolute !important;*/\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_NewsTicker__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_NewsTicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_NewsTicker__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



// import fa from '@fortawesome/fontawesome'
// import {faEnvelope, faBell, faPodcast} from '@fortawesome/fontawesome-free-solid'

// fa.library.add(faEnvelope);
// fa.library.add(faBell);
// fa.library.add(faPodcast);


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            news: [{ link: 'aa', title: '韩国总统文在寅签署修宪案 内容包括总统4年连任制', date: '2017-11-11' }, { link: 'bb', title: '美财长努钦：有望与中国就贸易战签订"停战协议"', date: '2018-03-15' }, { link: 'cc', title: '在恶性通胀的委内瑞拉，比特币如何成了"硬通货"', date: '2008-03-15' }, { link: 'cc', title: '苹果公司CEO库克：拒绝开放拒绝贸易的国家会失败', date: '2008-03-15' }, { link: 'cc', title: '被捧上天的网红食物，可能还不如一桶泡面', date: '2008-03-15' }]
        };
    },

    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapActions */])(['switchSidebar'])),
    components: {
        Ticker: __WEBPACK_IMPORTED_MODULE_1__components_NewsTicker___default.a
    }
});

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(279)
}
var normalizeComponent = __webpack_require__(8)
/* script */
var __vue_script__ = __webpack_require__(281)
/* template */
var __vue_template__ = __webpack_require__(282)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/NewsTicker.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6bbd5eb4", Component.options)
  } else {
    hotAPI.reload("data-v-6bbd5eb4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(280);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(33)("285102ea", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6bbd5eb4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NewsTicker.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6bbd5eb4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NewsTicker.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(false);
// imports


// module
exports.push([module.i, "\n.news-ticker {\n  /*margin-top: 10px;*/\n  /*background-color: #fff;*/\n  /*margin-left: 15px;*/\n  height: 60px;\n  overflow: hidden;\n  width: 500px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  text-align: left;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  /*border-radius: 2px;*/\n  /*border: 1px solid #eaeaea;*/\n}\n.news-ticker .news-left {\n    height: 60px;\n    line-height: 60px;\n    width: 60px;\n    background: #10bacb;\n    text-align: center;\n    color: #fff;\n    font-size: 18px;\n    -ms-flex-preferred-size: auto;\n        flex-basis: auto;\n    -webkit-box-flex: 0;\n        -ms-flex-positive: 0;\n            flex-grow: 0;\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n}\n.news-ticker .news-body {\n    text-align: left;\n    -ms-flex-preferred-size: auto;\n        flex-basis: auto;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -ms-flex-negative: 1;\n        flex-shrink: 1;\n}\n.news-ticker .news-body ul {\n      padding: 0 !important;\n      -webkit-transition: .5s all ease-in-out;\n      transition: .5s all ease-in-out;\n}\n.news-ticker .news-body li {\n      line-height: 60px;\n}\n.news-ticker .news-body li .time {\n        line-height: 60px;\n        float: right;\n}\n", ""]);

// exports


/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        lists: {
            type: Array,
            required: true
        },
        icon_class: {
            type: String,
            default: 'el-icon-tickets'
        }
    },
    data: function data() {
        return {
            paused: false
        };
    },
    mounted: function mounted() {
        var _this = this;

        var current = 0;
        var items = document.querySelectorAll('#news li');
        setInterval(function () {
            if (!_this.paused) {
                items[current].className = 'slide';
                current = (current + 1) % items.length;
                for (var i = 0; i < items.length; i++) {
                    document.getElementById('news').style.marginTop = current * -60 + 'px';
                }
            }
        }, 5000);
    }
});

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "news-ticker" }, [
    _c("span", { staticClass: "news-left" }, [
      _c("i", { class: _vm.icon_class, staticStyle: { "font-size": "2rem" } })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "news-body" }, [
      _c(
        "ul",
        { attrs: { id: "news" } },
        _vm._l(_vm.lists, function(item) {
          return _c(
            "li",
            {
              staticClass: "slide",
              on: {
                mouseover: function($event) {
                  _vm.paused = true
                },
                mouseleave: function($event) {
                  _vm.paused = false
                }
              }
            },
            [
              _c("a", { attrs: { href: item.link } }, [
                _vm._v(_vm._s(item.title))
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "time" }, [_vm._v(_vm._s(item.date))])
            ]
          )
        })
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6bbd5eb4", module.exports)
  }
}

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "top-nav" }, [
    _c("div", { staticClass: "navbar-header" }, [
      _c(
        "button",
        {
          staticClass:
            "sidebar-mobile-toggler pull-left btn hidden-md hidden-lg",
          attrs: { href: "#" },
          on: { click: _vm.switchSidebar }
        },
        [
          _c("i", {
            staticClass: "iconfont icon-fullscreen",
            staticStyle: { "font-size": "20px" }
          })
        ]
      ),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("span", { staticClass: "version hidden-sm" }, [_vm._v("版本:1.0")])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "navbar-collapse collapse  hidden-sm" }, [
      _c(
        "ul",
        { staticClass: "nav navbar-left" },
        [
          _c("ticker", {
            attrs: { lists: _vm.news, icon_class: "iconfont icon-headlines" }
          })
        ],
        1
      ),
      _vm._v(" "),
      _vm._m(1)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "navbar-brand", attrs: { href: "/" } }, [
      _c("img", { attrs: { src: "/img/logo_inverse.png", alt: "wemesh" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "nav navbar-right" }, [
      _c("li", [
        _c("i", { staticClass: "iconfont icon-feedback" }),
        _vm._v(" "),
        _c("a", { attrs: { href: "" } }, [_vm._v("帮助文档")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-cee3eb92", module.exports)
  }
}

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(285)
}
var normalizeComponent = __webpack_require__(8)
/* script */
var __vue_script__ = __webpack_require__(287)
/* template */
var __vue_template__ = __webpack_require__(288)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/layouts/partials/Sidebar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1cc39ea2", Component.options)
  } else {
    hotAPI.reload("data-v-1cc39ea2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(286);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(33)("057bce58", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1cc39ea2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Sidebar.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1cc39ea2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Sidebar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n/*侧边栏关闭*/\n.sidebar-closed #sidebar {\n  width: 50px !important;\n}\n#sidebar {\n  top: 0;\n  left: 0;\n  bottom: 0;\n  background-color: #343F4E;\n  overflow: visible;\n  z-index: 1024;\n}\n#sidebar .sidebar-box {\n    margin: 0;\n    position: relative;\n}\n#sidebar .nav-user-wrapper {\n    padding: 12px 10px;\n    position: relative;\n    overflow: visible;\n    z-index: 1;\n}\n#sidebar .nav-user-wrapper .media {\n      overflow: visible;\n}\n#sidebar .nav-user-wrapper .media .media-left {\n        display: table-cell;\n        vertical-align: top;\n        padding-right: 10px;\n}\n#sidebar .nav-user-wrapper .media .media-body {\n        display: table-cell;\n        white-space: nowrap;\n        width: 10000px;\n        overflow: hidden;\n        zoom: 1;\n}\n#sidebar .nav-user-wrapper .media .media-body .media-heading {\n          color: #fff;\n          margin-top: 0;\n          margin-bottom: 5px;\n}\n#sidebar .nav-user-wrapper .media .media-body .text-small {\n          color: #bbb;\n          font-size: 12px;\n}\n#sidebar .nav-user-wrapper .media .media-right {\n        display: table-cell;\n        vertical-align: top;\n        padding-left: 10px;\n}\n#sidebar .nav-user-wrapper .media .media-right .dropdown {\n          position: relative;\n}\n#sidebar .nav-user-wrapper .media:first-child {\n      margin-top: 0;\n}\n#sidebar .profile-card-photo {\n    width: 58px;\n    height: 58px;\n    display: inline-block;\n}\n#sidebar .profile-card-photo img {\n      border-radius: 50%;\n}\n#sidebar .nav {\n    width: auto;\n    -webkit-transition: all .5s;\n    transition: all .5s;\n    min-height: 100%;\n}\n#sidebar .nav .weather {\n      color: #bbb;\n      text-align: center;\n}\n.el-menu {\n  border-right: none !important;\n}\n.el-menu .el-menu-item-group .is-active {\n    border-left: 3px solid #3ed9e5;\n}\n.el-menu-item-group ul {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n.el-menu-item:hover, .el-menu-item:focus {\n  outline: none;\n}\n\n/*非窄屏*/\n@media (min-width: 992px) {\n#sidebar {\n    width: 220px;\n    position: fixed;\n    margin-top: 0;\n    padding-top: 60px;\n    -webkit-transition: width 0.5s;\n    transition: width 0.5s;\n}\n#sidebar .nav {\n      padding-top: 20px;\n      border-right: none;\n      position: relative;\n}\n.sidebar-closed #sidebar .nav-user-wrapper .media-body, .sidebar-closed #sidebar .nav-user-wrapper .media-right {\n    display: none;\n}\n}\n\n/*窄屏*/\n@media (max-width: 991px) {\n#sidebar {\n    position: fixed !important;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 260px;\n    overflow: hidden;\n    z-index: 0;\n    float: none;\n    -webkit-transform: translate3d(-260px, 0, 0);\n            transform: translate3d(-260px, 0, 0);\n    -webkit-transition: -webkit-transform 300ms ease 0s;\n    transition: -webkit-transform 300ms ease 0s;\n    transition: transform 300ms ease 0s;\n    transition: transform 300ms ease 0s, -webkit-transform 300ms ease 0s;\n}\n.sidebar-off #sidebar {\n    z-index: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-transition: -webkit-transform 300ms ease 0s;\n    transition: -webkit-transform 300ms ease 0s;\n    transition: transform 300ms ease 0s;\n    transition: transform 300ms ease 0s, -webkit-transform 300ms ease 0s;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            slim: {
                height: '100%',
                color: '#fff'
            },
            weatherLoaded: false
        };
    },

    methods: {
        fetchWeather: function fetchWeather() {
            var _this = this;

            this.$http.get('weather').then(function (response) {
                _this.$store.dispatch('getWeather', response.data.result);
                _this.weatherLoaded = true;
            }).catch(function (error) {
                _this.$message({
                    showClose: true,
                    message: '暂时连接不上天气服务器:' + error
                });
            });
        },
        menuOpen: function menuOpen(name, path) {
            console.log(name, path);
        },
        menuClose: function menuClose(name, path) {
            console.log(name, path);
        }
    },
    mounted: function mounted() {
        this.fetchWeather();
    },

    computed: {
        weather: function weather() {
            return this.$store.state.weather;
        },
        profile: function profile() {
            return this.$store.state.myInfo;
        }
    }
});

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "sidebar", attrs: { id: "sidebar" } }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "slimscroll",
            rawName: "v-slimscroll",
            value: _vm.slim,
            expression: "slim"
          }
        ],
        staticClass: "sidebar-box"
      },
      [
        _c("div", { staticClass: "sidebar-container" }, [
          _c("div", { staticClass: "nav-user-wrapper fadeInUp" }, [
            _c("div", { staticClass: "media btn-transparent" }, [
              _c("div", { staticClass: "media-left" }, [
                _vm.profile.avatar === null
                  ? _c(
                      "a",
                      {
                        staticClass: "profile-card-photo",
                        attrs: { href: "#" }
                      },
                      [
                        _c("img", {
                          attrs: {
                            src: "/img/default-avatar.jpg",
                            alt: "avatar"
                          }
                        })
                      ]
                    )
                  : _c(
                      "a",
                      {
                        staticClass: "profile-card-photo",
                        attrs: { href: "#" }
                      },
                      [
                        _c("img", {
                          attrs: { src: _vm.profile.avatar, alt: "avatar" }
                        })
                      ]
                    )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "media-body" }, [
                _c("span", { staticClass: "media-heading text-white" }, [
                  _vm._v(_vm._s(_vm.profile.name))
                ]),
                _vm._v(" "),
                _vm._m(0)
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "media-right media-middle" },
                [
                  _c(
                    "el-dropdown",
                    { attrs: { trigger: "click" } },
                    [
                      _c("span", { staticClass: "btn-transparent" }, [
                        _c("i", { staticClass: "el-icon-arrow-down" })
                      ]),
                      _vm._v(" "),
                      _c(
                        "el-dropdown-menu",
                        { attrs: { slot: "dropdown" }, slot: "dropdown" },
                        [
                          _c(
                            "el-dropdown-item",
                            { attrs: { command: "profile" } },
                            [
                              _c("a", { attrs: { href: "" } }, [
                                _vm._v("个人资料")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "el-dropdown-item",
                            { attrs: { command: "message" } },
                            [
                              _c("a", { attrs: { href: "" } }, [
                                _vm._v("消息中心")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "el-dropdown-item",
                            { attrs: { command: "security" } },
                            [
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("安全设置")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "el-dropdown-item",
                            { attrs: { command: "logout" } },
                            [
                              _c("a", { attrs: { href: "/logout" } }, [
                                _vm._v("退出系统")
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "nav" },
            [
              _c("div", { staticClass: "weather" }, [
                _vm.weatherLoaded
                  ? _c("p", { staticClass: "weather fadeInUp" }, [
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-transparent",
                          staticStyle: { color: "#ccc" },
                          attrs: { href: "" }
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.weather.date) +
                              " " +
                              _vm._s(_vm.weather.week) +
                              " " +
                              _vm._s(_vm.weather.weather) +
                              "\n                        "
                          )
                        ]
                      )
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c(
                "el-menu",
                {
                  attrs: {
                    "default-active": "1-1",
                    "background-color": "#343F4D",
                    "text-color": "#fff"
                  },
                  on: { open: _vm.menuOpen, close: _vm.menuClose }
                },
                [
                  _c(
                    "el-submenu",
                    { attrs: { index: "1" } },
                    [
                      _c("template", { slot: "title" }, [
                        _c("i", { staticClass: "iconfont icon-manage_fill" }),
                        _vm._v(" 应用管理\n                        ")
                      ]),
                      _vm._v(" "),
                      _c("el-menu-item", { attrs: { index: "1-1" } }, [
                        _vm._v("我的应用")
                      ]),
                      _vm._v(" "),
                      _c("el-menu-item", { attrs: { index: "1-2" } }, [
                        _vm._v("创建应用")
                      ])
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "el-submenu",
                    { attrs: { index: "2" } },
                    [
                      _c("template", { slot: "title" }, [
                        _c("i", {
                          staticClass: "iconfont icon-financial_fill"
                        }),
                        _vm._v(" 财务中心\n                        ")
                      ]),
                      _vm._v(" "),
                      _c("el-menu-item", { attrs: { index: "2-1" } }, [
                        _vm._v("账户")
                      ]),
                      _vm._v(" "),
                      _c("el-menu-item", { attrs: { index: "2-2" } }, [
                        _vm._v("优惠券")
                      ]),
                      _vm._v(" "),
                      _c("el-menu-item", { attrs: { index: "2-3" } }, [
                        _vm._v("购物车")
                      ]),
                      _vm._v(" "),
                      _c("el-menu-item", { attrs: { index: "2-4" } }, [
                        _vm._v("订单管理")
                      ])
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "el-submenu",
                    { attrs: { index: "3" } },
                    [
                      _c("template", { slot: "title" }, [
                        _c("i", {
                          staticClass: "iconfont icon-addressbook_fill"
                        }),
                        _vm._v(" 用户中心\n                        ")
                      ]),
                      _vm._v(" "),
                      _c("el-menu-item", { attrs: { index: "3-1" } }, [
                        _vm._v("基本资料")
                      ]),
                      _vm._v(" "),
                      _c("el-menu-item", { attrs: { index: "3-2" } }, [
                        _vm._v("安全设置")
                      ])
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "el-submenu",
                    { attrs: { index: "4" } },
                    [
                      _c("template", { slot: "title" }, [
                        _c("i", {
                          staticClass: "iconfont icon-customerservice_fill"
                        }),
                        _vm._v(" 客服中心\n                        ")
                      ]),
                      _vm._v(" "),
                      _c("el-menu-item", { attrs: { index: "4-1" } }, [
                        _vm._v("我的提问")
                      ]),
                      _vm._v(" "),
                      _c("el-menu-item", { attrs: { index: "4-2" } }, [
                        _vm._v("提交问题")
                      ])
                    ],
                    2
                  )
                ],
                1
              )
            ],
            1
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-small text-white-transparent" }, [
      _c(
        "a",
        {
          staticClass: "button small",
          staticStyle: { margin: "8px 0 0 0" },
          attrs: { href: "#" }
        },
        [_vm._v("升级为协同版")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1cc39ea2", module.exports)
  }
}

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: { "sidebar-off": _vm.sidebarOff }, attrs: { id: "box" } },
    [
      _c("sidebar"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "app-content" },
        [
          _c("top-header"),
          _vm._v(" "),
          _c("div", { staticClass: "main-content" }, [
            _c(
              "div",
              { staticClass: "breadcrumb-wrapper" },
              [
                _c("h4", { staticClass: "title" }, [_vm._v("首页")]),
                _vm._v(" "),
                _c(
                  "el-breadcrumb",
                  { staticClass: "breadcrumb", attrs: { separator: "/" } },
                  [
                    _c("el-breadcrumb-item", { attrs: { to: { path: "/" } } }, [
                      _vm._v("首页")
                    ]),
                    _vm._v(" "),
                    _c("el-breadcrumb-item", [_vm._v("活动管理")]),
                    _vm._v(" "),
                    _c("el-breadcrumb-item", [_vm._v("活动列表")]),
                    _vm._v(" "),
                    _c("el-breadcrumb-item", [_vm._v("活动详情")])
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "container" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-12" }, [_c("router-view")], 1)
              ])
            ])
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6244f9be", module.exports)
  }
}

/***/ })

});