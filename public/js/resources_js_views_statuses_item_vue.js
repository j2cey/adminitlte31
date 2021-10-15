"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_statuses_item_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/statuses/item.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/statuses/item.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _statusBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statusBus */ "./resources/js/views/statuses/statusBus.js");
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "status-item",
  props: {
    status_prop: {}
  },
  components: {},
  mounted: function mounted() {
    var _this = this;

    _statusBus__WEBPACK_IMPORTED_MODULE_0__["default"].$on('status_updated', function (status) {
      if (_this.status.id === status.id) {
        _this.status = status;
      } else {
        _this.refrechStatus();
      }
    });
  },
  data: function data() {
    return {
      status: this.status_prop
    };
  },
  methods: {
    editStatus: function editStatus(status) {
      _statusBus__WEBPACK_IMPORTED_MODULE_0__["default"].$emit('status_edit', status);
    },
    refrechStatus: function refrechStatus() {
      var _this2 = this;

      axios.get("/statuses.fetchone/".concat(this.status.id)).then(function (_ref) {
        var data = _ref.data;
        return _this2.status = data;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/statuses/statusBus.js":
/*!**************************************************!*\
  !*** ./resources/js/views/statuses/statusBus.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new vue__WEBPACK_IMPORTED_MODULE_0__["default"]());

/***/ }),

/***/ "./resources/js/views/statuses/item.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/statuses/item.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _item_vue_vue_type_template_id_7b88d79a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.vue?vue&type=template&id=7b88d79a&scoped=true& */ "./resources/js/views/statuses/item.vue?vue&type=template&id=7b88d79a&scoped=true&");
/* harmony import */ var _item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item.vue?vue&type=script&lang=js& */ "./resources/js/views/statuses/item.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _item_vue_vue_type_template_id_7b88d79a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _item_vue_vue_type_template_id_7b88d79a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7b88d79a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/statuses/item.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/statuses/item.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/statuses/item.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./item.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/statuses/item.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/statuses/item.vue?vue&type=template&id=7b88d79a&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/statuses/item.vue?vue&type=template&id=7b88d79a&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_template_id_7b88d79a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_template_id_7b88d79a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_template_id_7b88d79a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./item.vue?vue&type=template&id=7b88d79a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/statuses/item.vue?vue&type=template&id=7b88d79a&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/statuses/item.vue?vue&type=template&id=7b88d79a&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/statuses/item.vue?vue&type=template&id=7b88d79a&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-sm-3 col-6 border-right" }, [
      _c("span", { staticClass: "text text-sm" }, [
        _vm._v(_vm._s(_vm.status.name))
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-sm-2 col-6 border-right" }, [
      _c("span", { staticClass: "text text-xs" }, [
        _vm._v(_vm._s(_vm.status.code))
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-sm-2 col-6 border-right" }, [
      _c("span", { staticClass: "text text-xs" }, [
        _vm._v(_vm._s(_vm.status.description))
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-sm-3 col-6 border-right" }, [
      _c(
        "div",
        {
          staticClass:
            "custom-control custom-switch custom-switch-off-danger custom-switch-on-success"
        },
        [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.status.is_default,
                expression: "status.is_default"
              }
            ],
            staticClass: "custom-control-input",
            attrs: {
              disabled: "",
              readonly: "",
              type: "checkbox",
              id: _vm.status.code,
              name: _vm.status.code,
              autocomplete: "is_default",
              autofocus: "",
              placeholder: "Is default ?"
            },
            domProps: {
              checked: Array.isArray(_vm.status.is_default)
                ? _vm._i(_vm.status.is_default, null) > -1
                : _vm.status.is_default
            },
            on: {
              change: function($event) {
                var $$a = _vm.status.is_default,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 &&
                      _vm.$set(_vm.status, "is_default", $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      _vm.$set(
                        _vm.status,
                        "is_default",
                        $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                      )
                  }
                } else {
                  _vm.$set(_vm.status, "is_default", $$c)
                }
              }
            }
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass: "custom-control-label",
              attrs: { for: _vm.status.code }
            },
            [_c("span", { staticClass: "text text-xs" })]
          )
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-sm-2 col-6" }, [
      _c("span", { staticClass: "text text-xs text-center" }, [
        _c(
          "a",
          {
            staticClass: "text text-success",
            on: {
              click: function($event) {
                return _vm.editStatus(_vm.status)
              }
            }
          },
          [
            _c("i", {
              staticClass: "fa fa-pencil-square-o",
              attrs: { "aria-hidden": "true" }
            })
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);