(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["funcionalidades-agendamentos-agendamentos-module"],{

/***/ "./src/app/funcionalidades/agendamentos/agendamentos-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/funcionalidades/agendamentos/agendamentos-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AgendamentosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendamentosRoutingModule", function() { return AgendamentosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_agendamentos_agendamentos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/agendamentos/agendamentos */ "./src/app/funcionalidades/agendamentos/pages/agendamentos/agendamentos.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '', component: _pages_agendamentos_agendamentos__WEBPACK_IMPORTED_MODULE_2__["AgendamentosPage"]
    }];
var AgendamentosRoutingModule = /** @class */ (function () {
    function AgendamentosRoutingModule() {
    }
    AgendamentosRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AgendamentosRoutingModule);
    return AgendamentosRoutingModule;
}());



/***/ }),

/***/ "./src/app/funcionalidades/agendamentos/agendamentos.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/funcionalidades/agendamentos/agendamentos.module.ts ***!
  \*********************************************************************/
/*! exports provided: AgendamentosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendamentosModule", function() { return AgendamentosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-6-datatable */ "./node_modules/angular-6-datatable/index.js");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular_6_datatable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_core_components_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/components/component.module */ "./src/app/core/components/component.module.ts");
/* harmony import */ var src_app_modals_modals_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modals/modals.module */ "./src/app/modals/modals.module.ts");
/* harmony import */ var src_app_core_components_actionbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/components/actionbar */ "./src/app/core/components/actionbar/index.ts");
/* harmony import */ var _agendamentos_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./agendamentos-routing.module */ "./src/app/funcionalidades/agendamentos/agendamentos-routing.module.ts");
/* harmony import */ var _pages_agendamentos_agendamentos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/agendamentos/agendamentos */ "./src/app/funcionalidades/agendamentos/pages/agendamentos/agendamentos.ts");
/* harmony import */ var _modals_agendamento_agendamento_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modals/agendamento/agendamento.modal */ "./src/app/funcionalidades/agendamentos/modals/agendamento/agendamento.modal.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "./node_modules/ngx-bootstrap/chronos/fesm5/ngx-bootstrap-chronos.js");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/locale */ "./node_modules/ngx-bootstrap/locale/fesm5/ngx-bootstrap-locale.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_11__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_12__["ptBrLocale"]);
var AgendamentosModule = /** @class */ (function () {
    function AgendamentosModule() {
    }
    AgendamentosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                angular_6_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__["BsDatepickerModule"].forRoot(),
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"],
                src_app_core_components_actionbar__WEBPACK_IMPORTED_MODULE_6__["ActionbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                src_app_core_components_component_module__WEBPACK_IMPORTED_MODULE_4__["ComponentModule"],
                src_app_modals_modals_module__WEBPACK_IMPORTED_MODULE_5__["ModalsModule"],
                _agendamentos_routing_module__WEBPACK_IMPORTED_MODULE_7__["AgendamentosRoutingModule"]
            ],
            declarations: [_pages_agendamentos_agendamentos__WEBPACK_IMPORTED_MODULE_8__["AgendamentosPage"], _modals_agendamento_agendamento_modal__WEBPACK_IMPORTED_MODULE_9__["AgendamentoModal"]],
            entryComponents: [_modals_agendamento_agendamento_modal__WEBPACK_IMPORTED_MODULE_9__["AgendamentoModal"]]
        })
    ], AgendamentosModule);
    return AgendamentosModule;
}());



/***/ }),

/***/ "./src/app/funcionalidades/agendamentos/modals/agendamento/agendamento.modal.html":
/*!****************************************************************************************!*\
  !*** ./src/app/funcionalidades/agendamentos/modals/agendamento/agendamento.modal.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"tag-modal\" class=\"ss-modal\" style=\"display:block;\">     \n    <div class=\"ss-modal-content\" style=\"width: 800px;\">\n\n        <div class=\"ss-modal-header\">\n            <span class=\"ss-modal-btnclose\" (click)=\"fechar()\">&times;</span>\n            <h5>Cadastro de Pagamento Agendado</h5>\n        </div>\n \n        <div class=\"ss-modal-body\" > \n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div class=\"ss-form-group\" >\n                        <label>Nome <span class=\"campo-obrigatorio-label\" >*</span></label>\n                        <div class=\"ss-addon\" >    \n                            <input class=\"ss-form-control\"  [(ngModel)]=\"agendamento.nome\" type=\"text\" maxlength=\"250\" placeholder=\"Nome\" scInput >\n                        </div> \n                    </div> \n        \n                    <div class=\"ss-form-group\" >\n                        <label>Descrição <span class=\"campo-obrigatorio-label\" >*</span></label>\n                        <div class=\"ss-addon\" >    \n                            <textarea class=\"ss-form-control\" [(ngModel)]=\"agendamento.descricao\" maxlength=\"3750\" style=\"width: 100% !important;\" rows=\"7\" ></textarea>\n                        </div> \n                    </div> \n\n                </div>\n                <div class=\"col-sm-6\"> \n        \n                    <div class=\"ss-form-group\" >\n                        <label>Grupo <span class=\"campo-obrigatorio-label\" >*</span></label>\n                        <ng-select [items]=\"listGrupos\" bindLabel=\"nome\"  placeholder=\"Selecione\" [(ngModel)]=\"grupo\"></ng-select> \n                    </div> \n        \n                    <div class=\"ss-form-group\" >\n                        <label>Categoria <span class=\"campo-obrigatorio-label\" >*</span></label>\n                        <ng-select [items]=\"grupo.listCategorias\" bindLabel=\"nome\" placeholder=\"Selecione\" [(ngModel)]=\"agendamento.categoria\" ></ng-select> \n                    </div>  \n         \n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                            <div class=\"ss-form-group\" >\n                                <label>Data de Início <span class=\"campo-obrigatorio-label\" >*</span></label>\n                                <div class=\"ss-addon\" >    \n                                    <input class=\"ss-form-control\" [(ngModel)]=\"agendamento.dataInicio\" type=\"tel\"  maxlength=\"10\" scInput bsDatepicker >\n                                </div> \n                            </div> \n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div class=\"ss-form-group\" >\n                                <label>Período <span class=\"campo-obrigatorio-label\" >*</span></label>\n                                <ng-select [items]=\"listPeriodos\" bindLabel=\"nome\"  placeholder=\"Selecione\" [(ngModel)]=\"agendamento.periodo\"></ng-select> \n                            </div> \n                        </div>\n                    </div>\n\n                </div>\n            </div> \n        </div>\n\n        <div class=\"ss-modal-footer\" style=\"height: 65px;\">   \n            <div style=\"float: right;\">\n                <botao label=\"Salvar\" formato=\"inline\" tipo=\"success\" (click)=\"salvar()\" ></botao>\n                <botao label=\"Fechar\" formato=\"inline\" tipo=\"outline-default\" (click)=\"fechar()\" ></botao> \n            </div> \n        </div>\n    </div> \n</div> \n\n<!-- \n<button class=\"ss-btn ss-btn-format-inline ss-btn-neutral\" *ngFor=\"let p of listTags\" (click)=\"p.check = !p.check\"\n    [ngClass]=\"{'ss-btn-primary':p.check === true, 'ss-btn-neutral': p.check === false}\">\n    <i class=\"material-icons\">{{p.check === true ?'check_circle':''}}</i> {{p.nome}}\n</button>\n       -->"

/***/ }),

/***/ "./src/app/funcionalidades/agendamentos/modals/agendamento/agendamento.modal.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/funcionalidades/agendamentos/modals/agendamento/agendamento.modal.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#tag-modal .ss-modal-body {\n  margin-top: 20px;\n  margin-left: 20px;\n  margin-right: 20px; }\n"

/***/ }),

/***/ "./src/app/funcionalidades/agendamentos/modals/agendamento/agendamento.modal.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/funcionalidades/agendamentos/modals/agendamento/agendamento.modal.ts ***!
  \**************************************************************************************/
/*! exports provided: AgendamentoModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendamentoModal", function() { return AgendamentoModal; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_util_constantes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/util/constantes */ "./src/app/core/util/constantes.ts");
/* harmony import */ var src_app_services_alerta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alerta.service */ "./src/app/services/alerta.service.ts");
/* harmony import */ var src_app_core_components_actionbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/components/actionbar */ "./src/app/core/components/actionbar/index.ts");
/* harmony import */ var src_app_services_agendamento_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/agendamento.service */ "./src/app/services/agendamento.service.ts");
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





var AgendamentoModal = /** @class */ (function () {
    /***************************************************************************************************
     *            Construtor de pobre
     ***************************************************************************************************/
    function AgendamentoModal(actionBarRef, data, agendamentoService, alertaService) {
        this.actionBarRef = actionBarRef;
        this.data = data;
        this.agendamentoService = agendamentoService;
        this.alertaService = alertaService;
        this.grupo = { listCategorias: [] };
        this.listGrupos = data.listGrupos;
        this.listPeriodos = data.listPeriodos;
        this.listTags = data.listTags;
        if (data.agendamento) {
            this.agendamento = Object.assign({}, JSON.parse(JSON.stringify(data.agendamento)));
            var categoria = Object.assign({}, JSON.parse(JSON.stringify(data.agendamento.categoria)));
            this.grupo = Object.assign({}, JSON.parse(JSON.stringify(data.agendamento.categoria.grupo)));
            this.grupo.listCategorias = [categoria];
        }
        else {
            this.agendamento = { nome: '' };
        }
    }
    /***************************************************************************************************
     * fecha a tela e volta para a tela anterior
     ***************************************************************************************************/
    AgendamentoModal.prototype.fechar = function (valor) {
        if (valor === void 0) { valor = 'Fechado'; }
        this.actionBarRef.close(__assign({}, this.data, { valor: valor }));
    };
    /***************************************************************************************************
     * salva o laudo da fiscalização
     ***************************************************************************************************/
    AgendamentoModal.prototype.salvar = function () {
        var _this = this;
        var mensagem = "Pagamento Agendado salvo com sucesso!";
        this.agendamentoService.save(this.agendamento).subscribe(function () {
            _this.data.agendamento = _this.agendamento;
            _this.alertaService.sucesso(mensagem);
            _this.fechar(src_app_core_util_constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].SUCESSO);
        });
    };
    AgendamentoModal = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agendamento-modal',
            template: __webpack_require__(/*! ./agendamento.modal.html */ "./src/app/funcionalidades/agendamentos/modals/agendamento/agendamento.modal.html"),
            styles: [__webpack_require__(/*! ./agendamento.modal.scss */ "./src/app/funcionalidades/agendamentos/modals/agendamento/agendamento.modal.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(src_app_core_components_actionbar__WEBPACK_IMPORTED_MODULE_3__["ACTIONBAR_DATA"])),
        __metadata("design:paramtypes", [src_app_core_components_actionbar__WEBPACK_IMPORTED_MODULE_3__["ActionBarRef"], Object, src_app_services_agendamento_service__WEBPACK_IMPORTED_MODULE_4__["AgendamentoService"],
            src_app_services_alerta_service__WEBPACK_IMPORTED_MODULE_2__["AlertaService"]])
    ], AgendamentoModal);
    return AgendamentoModal;
}());



/***/ }),

/***/ "./src/app/funcionalidades/agendamentos/pages/agendamentos/agendamentos.html":
/*!***********************************************************************************!*\
  !*** ./src/app/funcionalidades/agendamentos/pages/agendamentos/agendamentos.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ss-table ss-table-striped ss-table-sortable\">\n  <table [mfData]=\"lista$ | async\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\n    <thead>\n      <tr>\n        <th>ID</th> \n        <th>Nome</th> \n        <th>Data de Início</th>\n        <th>Período</th>\n        <th>Categoria</th>\n        <th>Etiquetas</th>\n        <th>Data de Cadastro</th> \n        <th>Última Alteração</th> \n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let agendamento of mf.data\">\n        <td>{{ agendamento.codigo }}</td> \n        <td>{{ agendamento.nome }}</td> \n        <td>{{ agendamento.dataInicio }}</td> \n        <td>{{ agendamento.periodo.nome }}</td> \n        <td>{{ agendamento.categoria.nome }}</td> \n        <td>\n          <tags-list [tags]=\"agendamento.tags\" (click)=\"openTags(agendamento)\"></tags-list>\n        </td> \n        <td>{{ agendamento.dataInclusao }}</td> \n        <td>{{ agendamento.dataAlteracao }}</td> \n        <td>\n          <botao [icon]=\"agendamento.ativo? 'remove_circle' : 'check_circle'\" label=\"\" [tipo]=\"agendamento.ativo? 'outline-danger' : 'outline-success'\" (click)=\"alterarStatus(agendamento)\" class=\"width-50\" formato=\"inline\"></botao>\n          <botao icon=\"edit\" label=\"\" tipo=\"outline-warning\" (click)=\"editar(agendamento)\" class=\"width-50\" formato=\"inline\"></botao>\n          <botao icon=\"close\" label=\"\" tipo=\"danger\" (click)=\"remover(agendamento)\" class=\"width-50\" formato=\"inline\"></botao>\n        </td>\n      </tr>\n    </tbody>\n    <tfoot>\n      <tr>\n        <td colspan=\"8\" style=\"background-color: #F5F7F8 !important;\">\n          <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\n        </td>\n      </tr>\n    </tfoot>\n  </table>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/funcionalidades/agendamentos/pages/agendamentos/agendamentos.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/funcionalidades/agendamentos/pages/agendamentos/agendamentos.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/funcionalidades/agendamentos/pages/agendamentos/agendamentos.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/funcionalidades/agendamentos/pages/agendamentos/agendamentos.ts ***!
  \*********************************************************************************/
/*! exports provided: AgendamentosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendamentosPage", function() { return AgendamentosPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_util_constantes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/util/constantes */ "./src/app/core/util/constantes.ts");
/* harmony import */ var src_app_core_components_actionbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/components/actionbar */ "./src/app/core/components/actionbar/index.ts");
/* harmony import */ var _modals_agendamento_agendamento_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modals/agendamento/agendamento.modal */ "./src/app/funcionalidades/agendamentos/modals/agendamento/agendamento.modal.ts");
/* harmony import */ var src_app_services_alerta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alerta.service */ "./src/app/services/alerta.service.ts");
/* harmony import */ var src_app_services_agendamento_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/agendamento.service */ "./src/app/services/agendamento.service.ts");
/* harmony import */ var src_app_services_parametros_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/parametros.service */ "./src/app/services/parametros.service.ts");
/* harmony import */ var src_app_services_tags_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tags.service */ "./src/app/services/tags.service.ts");
/* harmony import */ var src_app_modals_tags_tags_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modals/tags/tags.modal */ "./src/app/modals/tags/tags.modal.ts");
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
*  Tela Cadastro de Pagamentos Agendados
*  @Aplicativo SCAF WEB
*  @Autor willian.maruno
***********************************/
var AgendamentosPage = /** @class */ (function () {
    /***************************************************************************************************
     *            Construtor de pobre
     ***************************************************************************************************/
    function AgendamentosPage(actionBarService, agendamentoService, parametrosService, tagsService, alertaService) {
        this.actionBarService = actionBarService;
        this.agendamentoService = agendamentoService;
        this.parametrosService = parametrosService;
        this.tagsService = tagsService;
        this.alertaService = alertaService;
    }
    /***************************************************************************************************
     * inicia os componentes
     ***************************************************************************************************/
    AgendamentosPage.prototype.ngOnInit = function () {
        var _this = this;
        this.pesquisar();
        this.parametrosService.findGrupos().subscribe(function (listGrupos) {
            _this.listGrupos = listGrupos;
        });
        this.parametrosService.findPeriodos().subscribe(function (listPeriodos) {
            _this.listPeriodos = listPeriodos;
        });
        this.tagsService.findTags().subscribe(function (listTags) {
            _this.listTags = listTags;
        });
    };
    /***************************************************************************************************
     *  realiza a pesquisa
     ***************************************************************************************************/
    AgendamentosPage.prototype.pesquisar = function () {
        this.lista$ = this.agendamentoService.find();
    };
    /***************************************************************************************************
     ***************************************************************************************************/
    AgendamentosPage.prototype.openTags = function (agendamento) {
        var data = { tags: agendamento.tags, listTags: this.listTags };
        this.actionBarService.open(src_app_modals_tags_tags_modal__WEBPACK_IMPORTED_MODULE_8__["TagsModal"], { data: data }).afterClosed().subscribe(function (result) {
            if (result && result.valor === src_app_core_util_constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].SUCESSO) {
                agendamento.tags = result.tags;
            }
        });
    };
    /***************************************************************************************************
     * abre a tela de cadastro
     ***************************************************************************************************/
    AgendamentosPage.prototype.editar = function (agendamento) {
        var _this = this;
        var data = { agendamento: agendamento, listGrupos: this.listGrupos, listPeriodos: this.listPeriodos, listTags: this.listTags };
        this.actionBarService.open(_modals_agendamento_agendamento_modal__WEBPACK_IMPORTED_MODULE_3__["AgendamentoModal"], { data: data }).afterClosed().subscribe(function (result) {
            if (result && result.valor === src_app_core_util_constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].SUCESSO) {
                _this.pesquisar();
            }
        });
    };
    /***************************************************************************************************
     *  alterar Status
     ***************************************************************************************************/
    AgendamentosPage.prototype.alterarStatus = function (agendamento) {
        var _this = this;
        var msg = "Deseja mesmo " + (agendamento.ativo ? 'Desativar' : 'Ativar') + " o Pagamento Agendado \"" + agendamento.nome + "\"";
        this.alertaService.confirmar((agendamento.ativo ? 'Desativação' : 'Ativação') + " de Pagamento Agendado", msg).subscribe(function (data) {
            console.log(data);
            if (data && data.resultado && data.resultado == src_app_core_util_constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].CONFIRMADO) {
                _this.agendamentoService.alterarStatus(agendamento).subscribe(function (r) {
                    _this.alertaService.sucesso("Pagamento Agendado \"" + agendamento.nome + "\" " + (agendamento.ativo ? 'desativado' : 'ativado') + " com sucesso!");
                    _this.pesquisar();
                });
            }
        });
    };
    /***************************************************************************************************
     *  remove
     ***************************************************************************************************/
    AgendamentosPage.prototype.remover = function (agendamento) {
        var _this = this;
        var msg = "Deseja mesmo excluir o Pagamento Agendado \"" + agendamento.nome + "\"";
        this.alertaService.confirmar("Exclusão de Pagamento Agendado", msg).subscribe(function (data) {
            console.log(data);
            if (data && data.resultado && data.resultado == src_app_core_util_constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].CONFIRMADO) {
                _this.agendamentoService.remove(agendamento.codigo).subscribe(function (r) {
                    _this.alertaService.sucesso("Pagamento Agendado \"" + agendamento.nome + "\" exclu\u00EDdo com sucesso!");
                    _this.pesquisar();
                });
            }
        });
    };
    AgendamentosPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agendamentos',
            template: __webpack_require__(/*! ./agendamentos.html */ "./src/app/funcionalidades/agendamentos/pages/agendamentos/agendamentos.html"),
            styles: [__webpack_require__(/*! ./agendamentos.scss */ "./src/app/funcionalidades/agendamentos/pages/agendamentos/agendamentos.scss")]
        }),
        __metadata("design:paramtypes", [src_app_core_components_actionbar__WEBPACK_IMPORTED_MODULE_2__["ActionBarService"],
            src_app_services_agendamento_service__WEBPACK_IMPORTED_MODULE_5__["AgendamentoService"],
            src_app_services_parametros_service__WEBPACK_IMPORTED_MODULE_6__["ParametrosService"],
            src_app_services_tags_service__WEBPACK_IMPORTED_MODULE_7__["TagsService"],
            src_app_services_alerta_service__WEBPACK_IMPORTED_MODULE_4__["AlertaService"]])
    ], AgendamentosPage);
    return AgendamentosPage;
}());



/***/ }),

/***/ "./src/app/services/agendamento.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/agendamento.service.ts ***!
  \*************************************************/
/*! exports provided: AgendamentoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendamentoService", function() { return AgendamentoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AgendamentoService = /** @class */ (function () {
    function AgendamentoService(http) {
        this.http = http;
    }
    AgendamentoService.prototype.find = function () {
        return this.http.get(this.RESOURCE());
        // .pipe(
        //     map((response: any) => response.map(i => ({ ...i, codigo:i.id })))
        //   );
    };
    AgendamentoService.prototype.save = function (objeto) {
        if (objeto.codigo > 0) {
            // objeto.id = objeto.codigo;
            return this.http.put(this.RESOURCE(objeto.codigo), objeto);
        }
        else {
            return this.http.post(this.RESOURCE(), objeto);
        }
    };
    AgendamentoService.prototype.alterarStatus = function (objeto) {
        if (objeto.ativo) {
            objeto.ativo = false;
            return this.http.put(this.RESOURCE(objeto.codigo) + '/desativar', objeto);
        }
        else {
            objeto.ativo = true;
            return this.http.put(this.RESOURCE(objeto.codigo) + '/ativar', objeto);
        }
    };
    AgendamentoService.prototype.remove = function (codigo) {
        return this.http.delete(this.RESOURCE(codigo));
    };
    /***************************************************************************************************
     * RESOURCE
     ***************************************************************************************************/
    AgendamentoService.prototype.RESOURCE = function (codigo) {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].rest_url + "/agendamentos" + (codigo > 0 ? '/' + codigo : '');
    };
    AgendamentoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AgendamentoService);
    return AgendamentoService;
}());



/***/ })

}]);
//# sourceMappingURL=funcionalidades-agendamentos-agendamentos-module.js.map