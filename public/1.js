webpackJsonp([1],{

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(44)
/* script */
var __vue_script__ = __webpack_require__(207)
/* template */
var __vue_template__ = __webpack_require__(211)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/assets/js/components/Test.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b5c7676e", Component.options)
  } else {
    hotAPI.reload("data-v-b5c7676e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 207:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            tableData: [],
            loading: false
        };
    },

    methods: {
        onSubmit: function onSubmit() {

            $http.get(URL);
        },
        refresh: function refresh() {
            this.search();
        },
        search: function search() {
            var _this = this;

            this.loading = !this.loading;
            var URL = 'http://larvuent.test/json/data.json';
            console.log(' mounted.');
            this.$http.get(URL).then(function (response) {
                setTimeout(function () {
                    _this.loading = !_this.loading;
                    _this.tableData = response.data.tableData;
                    _this.message = '123';
                }, 1000);
            }, function (response) {
                // error callback
            });
        }
    },
    mounted: function mounted() {
        this.search();
    }
});

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-form",
        { ref: "form", attrs: { model: _vm.form, "label-width": "80px" } },
        [
          _c(
            "el-form-item",
            { attrs: { label: "活动名称" } },
            [
              _c("el-input", {
                model: {
                  value: _vm.form.name,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "name", $$v)
                  },
                  expression: "form.name"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "活动区域" } },
            [
              _c(
                "el-select",
                {
                  attrs: { placeholder: "请选择活动区域" },
                  model: {
                    value: _vm.form.region,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "region", $$v)
                    },
                    expression: "form.region"
                  }
                },
                [
                  _c("el-option", {
                    attrs: { label: "区域一", value: "shanghai" }
                  }),
                  _vm._v(" "),
                  _c("el-option", {
                    attrs: { label: "区域二", value: "beijing" }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "活动时间" } },
            [
              _c(
                "el-col",
                { attrs: { span: 11 } },
                [
                  _c("el-date-picker", {
                    staticStyle: { width: "100%" },
                    attrs: { type: "date", placeholder: "选择日期" },
                    model: {
                      value: _vm.form.date1,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "date1", $$v)
                      },
                      expression: "form.date1"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("el-col", { staticClass: "line", attrs: { span: 2 } }, [
                _vm._v("-")
              ]),
              _vm._v(" "),
              _c(
                "el-col",
                { attrs: { span: 11 } },
                [
                  _c("el-time-picker", {
                    staticStyle: { width: "100%" },
                    attrs: { type: "fixed-time", placeholder: "选择时间" },
                    model: {
                      value: _vm.form.date2,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "date2", $$v)
                      },
                      expression: "form.date2"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "即时配送" } },
            [
              _c("el-switch", {
                model: {
                  value: _vm.form.delivery,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "delivery", $$v)
                  },
                  expression: "form.delivery"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "活动性质" } },
            [
              _c(
                "el-checkbox-group",
                {
                  model: {
                    value: _vm.form.type,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "type", $$v)
                    },
                    expression: "form.type"
                  }
                },
                [
                  _c("el-checkbox", {
                    attrs: { label: "美食/餐厅线上活动", name: "type" }
                  }),
                  _vm._v(" "),
                  _c("el-checkbox", {
                    attrs: { label: "地推活动", name: "type" }
                  }),
                  _vm._v(" "),
                  _c("el-checkbox", {
                    attrs: { label: "线下主题活动", name: "type" }
                  }),
                  _vm._v(" "),
                  _c("el-checkbox", {
                    attrs: { label: "单纯品牌曝光", name: "type" }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "特殊资源" } },
            [
              _c(
                "el-radio-group",
                {
                  model: {
                    value: _vm.form.resource,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "resource", $$v)
                    },
                    expression: "form.resource"
                  }
                },
                [
                  _c("el-radio", { attrs: { label: "线上品牌商赞助" } }),
                  _vm._v(" "),
                  _c("el-radio", { attrs: { label: "线下场地免费" } })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "活动形式" } },
            [
              _c("el-input", {
                attrs: { type: "textarea" },
                model: {
                  value: _vm.form.desc,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "desc", $$v)
                  },
                  expression: "form.desc"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.onSubmit } },
                [_vm._v("立即创建")]
              ),
              _vm._v(" "),
              _c("el-button", [_vm._v("取消")])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-button",
        { attrs: { type: "primary" }, on: { click: _vm.search } },
        [_vm._v("查询")]
      ),
      _vm._v(" "),
      _c(
        "el-table",
        {
          directives: [
            {
              name: "loading",
              rawName: "v-loading",
              value: _vm.loading,
              expression: "loading"
            }
          ],
          staticStyle: { width: "100%" },
          attrs: { data: _vm.tableData }
        },
        [
          _c("el-table-column", {
            attrs: { prop: "date", label: "日期", width: "180" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "name", label: "姓名", width: "180" }
          }),
          _vm._v(" "),
          _c("el-table-column", { attrs: { prop: "address", label: "地址" } })
        ],
        1
      ),
      _vm._v(" "),
      _c("router-link", { attrs: { to: "/" } }, [_vm._v("跳转主页")])
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
    require("vue-hot-reload-api")      .rerender("data-v-b5c7676e", module.exports)
  }
}

/***/ })

});