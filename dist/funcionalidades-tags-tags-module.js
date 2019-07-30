(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["funcionalidades-tags-tags-module"],{

/***/ "./src/app/funcionalidades/tags/modals/tag/tag.modal.html":
/*!****************************************************************!*\
  !*** ./src/app/funcionalidades/tags/modals/tag/tag.modal.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"tag-modal\" class=\"ss-modal\" style=\"display:block;\">     \n    <div class=\"ss-modal-content\" style=\"width: 500px;\">\n\n        <div class=\"ss-modal-header\">\n            <span class=\"ss-modal-btnclose\" (click)=\"fechar()\">&times;</span>\n            <h5>Cadastro de Tag</h5>\n        </div>\n \n        <div class=\"ss-modal-body\" > \n\n            <div class=\"ss-form-group\" >\n                <label>Nome <span class=\"campo-obrigatorio-label\" >*</span></label>\n                <div class=\"ss-addon\" >    \n                    <input class=\"ss-form-control\"  [(ngModel)]=\"tag.nome\" type=\"text\" maxlength=\"250\" placeholder=\"Nome\" scInput >\n                </div> \n            </div> \n    \n        </div>\n\n        <div class=\"ss-modal-footer\">  \n            <div class=\"row\">\n                <div class=\"col-sm-4\">\n                </div>\n                <div class=\"col-sm-4\">\n                    <botao label=\"Salvar\" tipo=\"success\" (click)=\"salvar()\"></botao>\n                </div>\n                <div class=\"col-sm-4\">\n                    <botao label=\"Fechar\" tipo=\"outline-default\" (click)=\"fechar()\"></botao>\n                </div>\n            </div>\n        </div>\n        \n    </div> \n</div> \n\n\n "

/***/ }),

/***/ "./src/app/funcionalidades/tags/modals/tag/tag.modal.scss":
/*!****************************************************************!*\
  !*** ./src/app/funcionalidades/tags/modals/tag/tag.modal.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#tag-modal .ss-modal-body {\n  margin-top: 20px;\n  margin-left: 20px;\n  margin-right: 20px; }\n"

/***/ }),

/***/ "./src/app/funcionalidades/tags/modals/tag/tag.modal.ts":
/*!**************************************************************!*\
  !*** ./src/app/funcionalidades/tags/modals/tag/tag.modal.ts ***!
  \**************************************************************/
/*! exports provided: TagModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagModal", function() { return TagModal; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_util_constantes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/util/constantes */ "./src/app/core/util/constantes.ts");
/* harmony import */ var src_app_services_alerta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alerta.service */ "./src/app/services/alerta.service.ts");
/* harmony import */ var src_app_core_components_actionbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/components/actionbar */ "./src/app/core/components/actionbar/index.ts");
/* harmony import */ var src_app_services_tags_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tags.service */ "./src/app/services/tags.service.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var TagModal = /** @class */ (function () {
    /***************************************************************************************************
     *            Construtor de pobre
     ***************************************************************************************************/
    function TagModal(actionBarRef, data, tagsService, alertaService) {
        this.actionBarRef = actionBarRef;
        this.data = data;
        this.tagsService = tagsService;
        this.alertaService = alertaService;
        if (data.tag) {
            this.tag = Object.assign({}, JSON.parse(JSON.stringify(data.tag)));
        }
        else {
            this.tag = { nome: '' };
        }
    }
    /***************************************************************************************************
     * fecha a tela e volta para a tela anterior
     ***************************************************************************************************/
    TagModal.prototype.fechar = function (valor) {
        if (valor === void 0) { valor = 'Fechado'; }
        this.actionBarRef.close(__assign({}, this.data, { valor: valor }));
    };
    /***************************************************************************************************
     * salva o laudo da fiscalização
     ***************************************************************************************************/
    TagModal.prototype.salvar = function () {
        var _this = this;
        var mensagem = "Tag salva com sucesso!";
        this.tagsService.saveTag(this.tag).subscribe(function () {
            _this.data.tag = _this.tag;
            _this.alertaService.sucesso(mensagem);
            _this.fechar(src_app_core_util_constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].SUCESSO);
        });
    };
    TagModal = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tag-modal',
            template: __webpack_require__(/*! ./tag.modal.html */ "./src/app/funcionalidades/tags/modals/tag/tag.modal.html"),
            styles: [__webpack_require__(/*! ./tag.modal.scss */ "./src/app/funcionalidades/tags/modals/tag/tag.modal.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(src_app_core_components_actionbar__WEBPACK_IMPORTED_MODULE_3__["ACTIONBAR_DATA"])),
        __metadata("design:paramtypes", [src_app_core_components_actionbar__WEBPACK_IMPORTED_MODULE_3__["ActionBarRef"], Object, src_app_services_tags_service__WEBPACK_IMPORTED_MODULE_4__["TagsService"],
            src_app_services_alerta_service__WEBPACK_IMPORTED_MODULE_2__["AlertaService"]])
    ], TagModal);
    return TagModal;
}());



/***/ }),

/***/ "./src/app/funcionalidades/tags/pages/tags/tags.html":
/*!***********************************************************!*\
  !*** ./src/app/funcionalidades/tags/pages/tags/tags.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ss-table ss-table-striped ss-table-sortable\">\n  <table [mfData]=\"lista$ | async\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\n    <thead>\n      <tr>\n        <th>ID</th> \n        <th>Nome</th> \n        <th>Data de Cadastro</th> \n        <th>Última Alteração</th> \n        <th></th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let tag of mf.data\">\n        <td>{{ tag.codigo }}</td> \n        <td>{{ tag.nome }}</td> \n        <td>{{ tag.dataInclusao }}</td> \n        <td>{{ tag.dataAlteracao }}</td> \n        <td>\n          <botao icon=\"edit\" label=\"\" tipo=\"outline-warning\" (click)=\"editar(tag)\" class=\"width-30\"></botao>\n        </td>\n        <td>\n            <botao icon=\"close\" label=\"\" tipo=\"danger\" (click)=\"remover(tag)\" class=\"width-30\"></botao>\n        </td>\n      </tr>\n    </tbody>\n    <tfoot>\n      <tr>\n        <td colspan=\"6\" style=\"background-color: #F5F7F8 !important;\">\n          <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\n        </td>\n      </tr>\n    </tfoot>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/funcionalidades/tags/pages/tags/tags.scss":
/*!***********************************************************!*\
  !*** ./src/app/funcionalidades/tags/pages/tags/tags.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/funcionalidades/tags/pages/tags/tags.ts":
/*!*********************************************************!*\
  !*** ./src/app/funcionalidades/tags/pages/tags/tags.ts ***!
  \*********************************************************/
/*! exports provided: TagsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsPage", function() { return TagsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_util_constantes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/util/constantes */ "./src/app/core/util/constantes.ts");
/* harmony import */ var src_app_core_components_actionbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/components/actionbar */ "./src/app/core/components/actionbar/index.ts");
/* harmony import */ var src_app_services_tags_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tags.service */ "./src/app/services/tags.service.ts");
/* harmony import */ var _modals_tag_tag_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modals/tag/tag.modal */ "./src/app/funcionalidades/tags/modals/tag/tag.modal.ts");
/* harmony import */ var src_app_services_alerta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alerta.service */ "./src/app/services/alerta.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/***********************************
*  Tela Cadastro de Tags
*  @Aplicativo SCAF WEB
*  @Autor willian.maruno
***********************************/
var TagsPage = /** @class */ (function () {
    /***************************************************************************************************
     *            Construtor de pobre
     ***************************************************************************************************/
    function TagsPage(actionBarService, tagsService, alertaService) {
        this.actionBarService = actionBarService;
        this.tagsService = tagsService;
        this.alertaService = alertaService;
    }
    /***************************************************************************************************
     * inicia os componentes
     ***************************************************************************************************/
    TagsPage.prototype.ngOnInit = function () {
        this.pesquisar();
    };
    /***************************************************************************************************
     *  realiza a pesquisa de novas fiscalizações
     ***************************************************************************************************/
    TagsPage.prototype.pesquisar = function () {
        this.lista$ = this.tagsService.findTags();
    };
    /***************************************************************************************************
     * abre a tela de ações
     ***************************************************************************************************/
    TagsPage.prototype.editar = function (tag) {
        var _this = this;
        this.actionBarService.open(_modals_tag_tag_modal__WEBPACK_IMPORTED_MODULE_4__["TagModal"], { data: { tag: tag } }).afterClosed().subscribe(function (result) {
            if (result && result.valor === src_app_core_util_constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].SUCESSO) {
                _this.pesquisar();
            }
        });
    };
    /***************************************************************************************************
     *  realiza a pesquisa de novas fiscalizações
     ***************************************************************************************************/
    TagsPage.prototype.remover = function (tag) {
        var _this = this;
        var msg = "Deseja mesmo excluir a Etiqueta \"" + tag.nome + "\"";
        this.alertaService.confirmar("Exclusão de Etiqueta", msg).subscribe(function (data) {
            console.log(data);
            if (data && data.resultado && data.resultado == src_app_core_util_constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].CONFIRMADO) {
                _this.tagsService.removeTag(tag.codigo).subscribe(function (r) {
                    _this.alertaService.sucesso("Etiqueta \"" + tag.nome + "\" exclu\u00EDda com sucesso!");
                    _this.pesquisar();
                });
            }
        });
    };
    TagsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tags',
            template: __webpack_require__(/*! ./tags.html */ "./src/app/funcionalidades/tags/pages/tags/tags.html"),
            styles: [__webpack_require__(/*! ./tags.scss */ "./src/app/funcionalidades/tags/pages/tags/tags.scss")]
        }),
        __metadata("design:paramtypes", [src_app_core_components_actionbar__WEBPACK_IMPORTED_MODULE_2__["ActionBarService"],
            src_app_services_tags_service__WEBPACK_IMPORTED_MODULE_3__["TagsService"],
            src_app_services_alerta_service__WEBPACK_IMPORTED_MODULE_5__["AlertaService"]])
    ], TagsPage);
    return TagsPage;
}());



/***/ }),

/***/ "./src/app/funcionalidades/tags/tags-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/funcionalidades/tags/tags-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: TagsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsRoutingModule", function() { return TagsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_tags_tags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/tags/tags */ "./src/app/funcionalidades/tags/pages/tags/tags.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '', component: _pages_tags_tags__WEBPACK_IMPORTED_MODULE_2__["TagsPage"]
    }];
var TagsRoutingModule = /** @class */ (function () {
    function TagsRoutingModule() {
    }
    TagsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TagsRoutingModule);
    return TagsRoutingModule;
}());



/***/ }),

/***/ "./src/app/funcionalidades/tags/tags.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/funcionalidades/tags/tags.module.ts ***!
  \*****************************************************/
/*! exports provided: TagsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsModule", function() { return TagsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-6-datatable */ "./node_modules/angular-6-datatable/index.js");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular_6_datatable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_core_components_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/components/component.module */ "./src/app/core/components/component.module.ts");
/* harmony import */ var src_app_modals_modals_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modals/modals.module */ "./src/app/modals/modals.module.ts");
/* harmony import */ var src_app_core_components_actionbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/components/actionbar */ "./src/app/core/components/actionbar/index.ts");
/* harmony import */ var _pages_tags_tags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/tags/tags */ "./src/app/funcionalidades/tags/pages/tags/tags.ts");
/* harmony import */ var _tags_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tags-routing.module */ "./src/app/funcionalidades/tags/tags-routing.module.ts");
/* harmony import */ var _modals_tag_tag_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modals/tag/tag.modal */ "./src/app/funcionalidades/tags/modals/tag/tag.modal.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var TagsModule = /** @class */ (function () {
    function TagsModule() {
    }
    TagsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                angular_6_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableModule"],
                src_app_core_components_actionbar__WEBPACK_IMPORTED_MODULE_6__["ActionbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                src_app_core_components_component_module__WEBPACK_IMPORTED_MODULE_4__["ComponentModule"],
                src_app_modals_modals_module__WEBPACK_IMPORTED_MODULE_5__["ModalsModule"],
                _tags_routing_module__WEBPACK_IMPORTED_MODULE_8__["TagsRoutingModule"]
            ],
            declarations: [_pages_tags_tags__WEBPACK_IMPORTED_MODULE_7__["TagsPage"], _modals_tag_tag_modal__WEBPACK_IMPORTED_MODULE_9__["TagModal"]],
            entryComponents: [_modals_tag_tag_modal__WEBPACK_IMPORTED_MODULE_9__["TagModal"]]
        })
    ], TagsModule);
    return TagsModule;
}());



/***/ })

}]);
//# sourceMappingURL=funcionalidades-tags-tags-module.js.map