"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_alunos_view_Pagamentos_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/alunos/view/Pagamentos.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/alunos/view/Pagamentos.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      pagas: [{
        plano: "Standard",
        vencimento: "15/05/2022",
        valor: "89,90",
        metodo: 'boleto',
        situacao: "Pendente"
      }, {
        plano: "Fighter",
        vencimento: "15/05/2022",
        valor: "89,90",
        metodo: 'boleto',
        situacao: "Pago"
      }],
      pagamentos: []
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      this.$axios.get("https://swapi.dev/api/people/").then(function (response) {
        _this.pagamentos = response.data.results;
      });
    }
  },
  mounted: function mounted() {
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/alunos/view/Pagamentos.vue?vue&type=style&index=0&id=1faff8ae&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/alunos/view/Pagamentos.vue?vue&type=style&index=0&id=1faff8ae&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".pagamentos[data-v-1faff8ae] {\n  height: 100vh;\n}\n@media (max-width: 768px) {\nh4[data-v-1faff8ae] {\n    display: flex;\n    justify-content: center;\n}\n}\nth[data-v-1faff8ae] {\n  background-color: #222831 !important;\n  color: #fafafa;\n}\n.tabela[data-v-1faff8ae] {\n  background-color: #222831;\n}\n.tabela__celula[data-v-1faff8ae] {\n  color: #fafafa;\n  border-radius: 0%;\n  border-bottom: 2px solid #FAFAFA !important;\n}\n.pago[data-v-1faff8ae] {\n  color: #39DB00 !important;\n}\n.pendente[data-v-1faff8ae] {\n  color: #FF2C2C !important;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/alunos/view/Pagamentos.vue?vue&type=style&index=0&id=1faff8ae&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/alunos/view/Pagamentos.vue?vue&type=style&index=0&id=1faff8ae&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagamentos_vue_vue_type_style_index_0_id_1faff8ae_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Pagamentos.vue?vue&type=style&index=0&id=1faff8ae&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/alunos/view/Pagamentos.vue?vue&type=style&index=0&id=1faff8ae&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagamentos_vue_vue_type_style_index_0_id_1faff8ae_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagamentos_vue_vue_type_style_index_0_id_1faff8ae_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/alunos/view/Pagamentos.vue":
/*!*************************************************!*\
  !*** ./resources/js/alunos/view/Pagamentos.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Pagamentos_vue_vue_type_template_id_1faff8ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagamentos.vue?vue&type=template&id=1faff8ae&scoped=true& */ "./resources/js/alunos/view/Pagamentos.vue?vue&type=template&id=1faff8ae&scoped=true&");
/* harmony import */ var _Pagamentos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagamentos.vue?vue&type=script&lang=js& */ "./resources/js/alunos/view/Pagamentos.vue?vue&type=script&lang=js&");
/* harmony import */ var _Pagamentos_vue_vue_type_style_index_0_id_1faff8ae_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pagamentos.vue?vue&type=style&index=0&id=1faff8ae&scoped=true&lang=scss& */ "./resources/js/alunos/view/Pagamentos.vue?vue&type=style&index=0&id=1faff8ae&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Pagamentos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pagamentos_vue_vue_type_template_id_1faff8ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Pagamentos_vue_vue_type_template_id_1faff8ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1faff8ae",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/alunos/view/Pagamentos.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/alunos/view/Pagamentos.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/alunos/view/Pagamentos.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagamentos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Pagamentos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/alunos/view/Pagamentos.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagamentos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/alunos/view/Pagamentos.vue?vue&type=style&index=0&id=1faff8ae&scoped=true&lang=scss&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/alunos/view/Pagamentos.vue?vue&type=style&index=0&id=1faff8ae&scoped=true&lang=scss& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagamentos_vue_vue_type_style_index_0_id_1faff8ae_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Pagamentos.vue?vue&type=style&index=0&id=1faff8ae&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/alunos/view/Pagamentos.vue?vue&type=style&index=0&id=1faff8ae&scoped=true&lang=scss&");


/***/ }),

/***/ "./resources/js/alunos/view/Pagamentos.vue?vue&type=template&id=1faff8ae&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/alunos/view/Pagamentos.vue?vue&type=template&id=1faff8ae&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagamentos_vue_vue_type_template_id_1faff8ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagamentos_vue_vue_type_template_id_1faff8ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagamentos_vue_vue_type_template_id_1faff8ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Pagamentos.vue?vue&type=template&id=1faff8ae&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/alunos/view/Pagamentos.vue?vue&type=template&id=1faff8ae&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/alunos/view/Pagamentos.vue?vue&type=template&id=1faff8ae&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/alunos/view/Pagamentos.vue?vue&type=template&id=1faff8ae&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "pagamentos" },
    [
      _c("v-container", [
        _c("h4", { staticClass: "alunos__font--title" }, [
          _vm._v("Historico de Transações"),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "px-7" },
          [
            _c("v-simple-table", {
              attrs: { "fixed-header": "" },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function () {
                    return [
                      _c("thead", [
                        _c("tr", { staticClass: "tabela__header" }, [
                          _c("th", { staticClass: "text-left" }, [
                            _vm._v("\n          Plano\n        "),
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "text-left" }, [
                            _vm._v("\n          Vencimento\n        "),
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "text-left" }, [
                            _vm._v("\n          valor\n        "),
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "text-left" }, [
                            _vm._v("\n          Metodo de Pag.\n        "),
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "text-left" }, [
                            _vm._v("\n          Situação\n        "),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        { staticClass: "tabela" },
                        _vm._l(_vm.pagas, function (item) {
                          return _c(
                            "tr",
                            { key: item.plano, staticClass: "tabela__linha" },
                            [
                              _c("td", { staticClass: "tabela__celula" }, [
                                _vm._v(_vm._s(item.plano)),
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "tabela__celula" }, [
                                _vm._v(_vm._s(item.vencimento)),
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "tabela__celula" }, [
                                _vm._v("R$" + _vm._s(item.valor)),
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "tabela__celula" }, [
                                _vm._v(_vm._s(item.metodo)),
                              ]),
                              _vm._v(" "),
                              item.situacao === "Pendente"
                                ? _c(
                                    "td",
                                    { staticClass: "tabela__celula pendente" },
                                    [_vm._v(_vm._s(item.situacao))]
                                  )
                                : _c(
                                    "td",
                                    { staticClass: "tabela__celula pago" },
                                    [_vm._v(_vm._s(item.situacao))]
                                  ),
                            ]
                          )
                        }),
                        0
                      ),
                    ]
                  },
                  proxy: true,
                },
              ]),
            }),
          ],
          1
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);