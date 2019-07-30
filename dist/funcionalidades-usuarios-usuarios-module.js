(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["funcionalidades-usuarios-usuarios-module"],{

/***/ "./src/app/funcionalidades/usuarios/modals/usuario/usuario.modal.html":
/*!****************************************************************************!*\
  !*** ./src/app/funcionalidades/usuarios/modals/usuario/usuario.modal.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"usuario-modal\" class=\"ss-modal\" style=\"display:block;\">     \n    <div class=\"ss-modal-content\" style=\"width: 800px;\">\n\n        <div class=\"ss-modal-header\">\n            <span class=\"ss-modal-btnclose\" (click)=\"fechar()\">&times;</span>\n            <h5>Cadastro de Usuário</h5>\n        </div> \n\n        <div class=\"ss-modal-body\" > \n            <div class=\"ss-form-group\" >\n                <label>Nome </label>\n                <div class=\"ss-addon\" >    \n                    <span class=\"ss-form-control campo-bloqueado\">{{usuario.nome}}</span>\n                </div> \n            </div> \n            \n            <div class=\"row\">\n                <div class=\"col-sm-8\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                            <div class=\"ss-form-group\" >\n                                <label>Perfil <span class=\"campo-obrigatorio-label\" >*</span></label>\n                                <ng-select [items]=\"listPerfis\" bindLabel=\"nome\"  placeholder=\"Selecione\" [(ngModel)]=\"usuario.perfil\"></ng-select> \n                            </div>  \n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div class=\"ss-form-group\" >\n                                <label>Login </label>\n                                <div class=\"ss-addon\" >    \n                                    <span class=\"ss-form-control campo-bloqueado\">{{usuario.login}}</span>\n                                </div> \n                            </div> \n                        </div>\n\n                        <div class=\"col-sm-6\">\n                            <div class=\"ss-form-group\" >\n                                <label>E-mail <span class=\"campo-obrigatorio-label\" >*</span></label>\n                                <div class=\"ss-addon\" >    \n                                    <input class=\"ss-form-control\"  [(ngModel)]=\"usuario.email\" type=\"text\" scInput >\n                                </div> \n                            </div> \n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div class=\"ss-form-group\" >\n                                <label>CPF </label>\n                                <div class=\"ss-addon\" >    \n                                    <!-- <input class=\"ss-form-control\"  [(ngModel)]=\"usuario.cpf\" type=\"text\" maxlength=\"14\" placeholder=\"CPF\" scInput > -->\n                                    <!-- <input [(ngModel)]=\"usuario.cpf\" maxlength=\"18\" type=\"tel\" mascara=\"CPF-CNPJ\"  class=\"ss-form-control\" > -->\n                                    <cpf [(ngModel)]=\"usuario.cpf\" class=\"input-cpf\"></cpf>\n                                </div> \n                            </div> \n                        </div>\n\n                        <div class=\"col-sm-6\">\n                            <div class=\"ss-form-group\" >\n                                <label>Telefone </label>\n                                <div class=\"ss-addon\" >    \n                                    <telefone [(ngModel)]=\"usuario.telefone\" class=\"input-cpf\" ></telefone>\n                                </div> \n                            </div> \n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div class=\"ss-form-group\" >\n                                <label>Celular </label>\n                                <div class=\"ss-addon\" >    \n                                    <telefone [(ngModel)]=\"usuario.celular\" class=\"input-cpf\" ></telefone>\n                                </div> \n                            </div> \n                        </div>\n                        \n                    </div>\n                </div>\n                <div class=\"col-sm-4\">\n                    <img class=\"ss-user-img\" [src]=\"usuario.foto? usuario.foto:'assets/images/ico-person.svg'\"> \n                </div>\n            </div>\n\n            \n\n\n\n\n\n        </div>\n\n        <div class=\"ss-modal-footer\" style=\"height: 65px;\">   \n            <div style=\"float: right;\">\n                <botao label=\"Salvar\" formato=\"inline\" tipo=\"success\" (click)=\"salvar()\" ></botao>\n                <botao label=\"Fechar\" formato=\"inline\" tipo=\"outline-default\" (click)=\"fechar()\" ></botao> \n            </div> \n        </div>\n    </div> \n</div> "

/***/ }),

/***/ "./src/app/funcionalidades/usuarios/modals/usuario/usuario.modal.scss":
/*!****************************************************************************!*\
  !*** ./src/app/funcionalidades/usuarios/modals/usuario/usuario.modal.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#usuario-modal .ss-modal-body {\n  margin-top: 20px;\n  margin-left: 20px;\n  margin-right: 20px; }\n\n#usuario-modal .campo-bloqueado {\n  background-color: rgba(7, 7, 7, 0.048); }\n\n#usuario-modal .input-cpf2 {\n  width: 100% !important;\n  border: 1px solid #34495E !important;\n  border-radius: 4px; }\n\n#usuario-modal .input-cpf {\n  border-radius: 4px !important;\n  border: 1px solid #34495E !important;\n  background-color: transparent !important;\n  width: 100% !important;\n  color: #34495E !important; }\n\n#usuario-modal .input-cpf input {\n    height: 36px !important;\n    background-color: transparent !important;\n    color: #34495E !important; }\n"

/***/ }),

/***/ "./src/app/funcionalidades/usuarios/modals/usuario/usuario.modal.ts":
/*!**************************************************************************!*\
  !*** ./src/app/funcionalidades/usuarios/modals/usuario/usuario.modal.ts ***!
  \**************************************************************************/
/*! exports provided: UsuarioModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioModal", function() { return UsuarioModal; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_util_constantes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/util/constantes */ "./src/app/core/util/constantes.ts");
/* harmony import */ var src_app_services_alerta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alerta.service */ "./src/app/services/alerta.service.ts");
/* harmony import */ var src_app_core_components_actionbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/components/actionbar */ "./src/app/core/components/actionbar/index.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
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





var UsuarioModal = /** @class */ (function () {
    /***************************************************************************************************
     *            Construtor de pobre
     ***************************************************************************************************/
    function UsuarioModal(actionBarRef, data, usuarioService, alertaService) {
        this.actionBarRef = actionBarRef;
        this.data = data;
        this.usuarioService = usuarioService;
        this.alertaService = alertaService;
        this.listPerfis = data.listPerfis;
        if (data.usuario) {
            this.usuario = Object.assign({}, JSON.parse(JSON.stringify(data.usuario)));
        }
        else {
            this.usuario = { nome: '' };
        }
    }
    /***************************************************************************************************
     * fecha a tela e volta para a tela anterior
     ***************************************************************************************************/
    UsuarioModal.prototype.fechar = function (valor) {
        if (valor === void 0) { valor = 'Fechado'; }
        this.actionBarRef.close(__assign({}, this.data, { valor: valor }));
    };
    /***************************************************************************************************
     * salva o laudo da fiscalização
     ***************************************************************************************************/
    UsuarioModal.prototype.salvar = function () {
        var _this = this;
        var mensagem = "Usu\u00E1rio salvo com sucesso!";
        this.usuarioService.save(this.usuario).subscribe(function () {
            _this.data.usuario = _this.usuario;
            _this.alertaService.sucesso(mensagem);
            _this.fechar(src_app_core_util_constantes__WEBPACK_IMPORTED_MODULE_1__["Constantes"].SUCESSO);
        });
    };
    UsuarioModal = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usuario-modal',
            template: __webpack_require__(/*! ./usuario.modal.html */ "./src/app/funcionalidades/usuarios/modals/usuario/usuario.modal.html"),
            styles: [__webpack_require__(/*! ./usuario.modal.scss */ "./src/app/funcionalidades/usuarios/modals/usuario/usuario.modal.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(src_app_core_components_actionbar__WEBPACK_IMPORTED_MODULE_3__["ACTIONBAR_DATA"])),
        __metadata("design:paramtypes", [src_app_core_components_actionbar__WEBPACK_IMPORTED_MODULE_3__["ActionBarRef"], Object, src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"],
            src_app_services_alerta_service__WEBPACK_IMPORTED_MODULE_2__["AlertaService"]])
    ], UsuarioModal);
    return UsuarioModal;
}());



/***/ }),

/***/ "./src/app/funcionalidades/usuarios/pages/usuarios/usuarios.html":
/*!***********************************************************************!*\
  !*** ./src/app/funcionalidades/usuarios/pages/usuarios/usuarios.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ss-table ss-table-striped ss-table-sortable\">\n  <table [mfData]=\"lista$ | async\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\n    <thead>\n      <tr>\n        <th>ID</th> \n        <th>Nome</th> \n        <th>Login</th>\n        <th>Perfil</th>\n        <th>Data de Cadastro</th> \n        <th>Responsável Cadastro</th> \n        <th>Última Alteração</th> \n        <th>Responsável  Alteração</th> \n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let usuario of mf.data\">\n        <td>{{ usuario.codigo }}</td> \n        <td>{{ usuario.nome }}</td> \n        <td>{{ usuario.login }}</td> \n        <td>{{ usuario.perfil.nome }}</td> \n        <td>{{ usuario.dataCadastro }}</td> \n        <td>{{ usuario.responsavelCadastro.nome }}</td> \n        <td>{{ usuario.dataAtualizacao }}</td> \n        <td>{{ usuario.responsavelAtualizacao?usuario.responsavelAtualizacao.nome:'' }}</td> \n        <td>\n          <botao [icon]=\"usuario.ativo? 'remove_circle' : 'check_circle'\" label=\"\" [tipo]=\"usuario.ativo? 'outline-danger' : 'outline-success'\" (click)=\"alterarStatus(usuario, usuario.ativo? 'Inativar' : 'Ativar')\" class=\"width-50\" formato=\"inline\"></botao>\n          <botao icon=\"edit\" label=\"\" tipo=\"outline-warning\" (click)=\"editar(usuario)\" class=\"width-50\" formato=\"inline\"></botao>\n          <botao icon=\"close\" label=\"\" tipo=\"danger\" (click)=\"remover(usuario)\" class=\"width-50\" formato=\"inline\"></botao>\n        </td>\n      </tr>\n    </tbody>\n    <tfoot>\n      <tr>\n        <td colspan=\"9\" style=\"background-color: #F5F7F8 !important;\">\n          <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\n        </td>\n      </tr>\n    </tfoot>\n  </table>\n</div>\n\n\n<ng-template #filtrosSidebar > \n    <div class=\"row sidebar-content\" >\n        <div class=\"col-sm-12 row-sub-header\">Filtros de pesquisa</div>\n        <div class=\"col-sm-12 row-header\"><HR></div> \n\n        <div class=\"ss-form-group col-sm-12 \">\n          <label>Nome</label> \n          <div class=\"ss-addon\" >    \n            <input class=\"ss-form-control\" [(ngModel)]=\"filtro.nome\" maxlength=\"100\" type=\"text\"  (keyup)=\"onKey($event)\">\n          </div>\n        </div>\n\n        <div class=\"ss-form-group col-sm-12 \">\n          <label>Login</label> \n          <div class=\"ss-addon\" >    \n            <input class=\"ss-form-control\" [(ngModel)]=\"filtro.login\" maxlength=\"100\" type=\"text\"  (keyup)=\"onKey($event)\">\n          </div>\n        </div>\n \n        <div class=\"ss-form-group col-sm-12 row-col\" >\n            <label>Perfil </label>\n            <ng-select [items]=\"listPerfis\" bindLabel=\"nome\" bindValue=\"codigo\" placeholder=\"Selecione\" [(ngModel)]=\"filtro.codPerfil\"></ng-select> \n        </div>   \n \n        <div class=\"col-sm-12\">&nbsp;</div>\n\n        <div class=\"col-sm-12\"> \n          <botao icon=\"search\" label=\"Pesquisar\" tipo=\"success\" (click)=\"pesquisar()\"></botao>\n        </div>   \n\n        <div class=\"col-sm-12\"> \n          <botao icon=\"undo\" label=\"Limpar\" tipo=\"outline-default\" (click)=\"limpar()\"></botao>\n        </div>  \n        <div class=\"col-sm-12\">&nbsp;</div> \n    </div> \n</ng-template> "

/***/ }),

/***/ "./src/app/funcionalidades/usuarios/pages/usuarios/usuarios.scss":
/*!***********************************************************************!*\
  !*** ./src/app/funcionalidades/usuarios/pages/usuarios/usuarios.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/funcionalidades/usuarios/pages/usuarios/usuarios.ts":
/*!*********************************************************************!*\
  !*** ./src/app/funcionalidades/usuarios/pages/usuarios/usuarios.ts ***!
  \*********************************************************************/
/*! exports provided: UsuariosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosPage", function() { return UsuariosPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var src_app_core_util_constantes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/util/constantes */ "./src/app/core/util/constantes.ts");
/* harmony import */ var src_app_core_components_actionbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/components/actionbar */ "./src/app/core/components/actionbar/index.ts");
/* harmony import */ var src_app_services_alerta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alerta.service */ "./src/app/services/alerta.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_core_components_sidebar_sidebar_container_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/components/sidebar/sidebar-container.service */ "./src/app/core/components/sidebar/sidebar-container.service.ts");
/* harmony import */ var _modals_usuario_usuario_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modals/usuario/usuario.modal */ "./src/app/funcionalidades/usuarios/modals/usuario/usuario.modal.ts");
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
*  Tela Cadastro de Usuários
*  @Aplicativo SCAF WEB
*  @Autor willian.maruno
***********************************/
var UsuariosPage = /** @class */ (function () {
    /***************************************************************************************************
     *            Construtor de pobre
     ***************************************************************************************************/
    function UsuariosPage(actionBarService, sidebarService, usuarioService, alertaService) {
        this.actionBarService = actionBarService;
        this.sidebarService = sidebarService;
        this.usuarioService = usuarioService;
        this.alertaService = alertaService;
        this.filtro = {};
    }
    /***************************************************************************************************
     * inicia os componentes
     ***************************************************************************************************/
    UsuariosPage.prototype.ngOnInit = function () {
        var _this = this;
        this.usuarioService.findPerfis().subscribe(function (listPerfis) {
            _this.listPerfis = listPerfis;
        });
        this.sidebarService.open(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](this.filtrosSidebar, undefined, {}));
    };
    /***************************************************************************************************
     *  realiza a pesquisa
     ***************************************************************************************************/
    UsuariosPage.prototype.pesquisar = function () {
        this.lista$ = this.usuarioService.find(this.filtro);
    };
    /***************************************************************************************************
     * abre a tela de cadastro
     ***************************************************************************************************/
    UsuariosPage.prototype.editar = function (usuario) {
        var _this = this;
        this.usuarioService.findById(usuario.codigo).subscribe(function (response) {
            var data = { usuario: response, listPerfis: _this.listPerfis };
            _this.actionBarService.open(_modals_usuario_usuario_modal__WEBPACK_IMPORTED_MODULE_7__["UsuarioModal"], { data: data }).afterClosed().subscribe(function (result) {
                if (result && result.valor === src_app_core_util_constantes__WEBPACK_IMPORTED_MODULE_2__["Constantes"].SUCESSO) {
                    _this.pesquisar();
                }
            });
        });
    };
    /***************************************************************************************************
     *  alterar Status
     ***************************************************************************************************/
    UsuariosPage.prototype.alterarStatus = function (usuario, status) {
        var _this = this;
        var msg = "Deseja mesmo " + status + " o Usu\u00E1rio \"" + usuario.nome + "\"";
        this.alertaService.confirmar(status + " de Usu\u00E1rio", msg).subscribe(function (data) {
            console.log(data);
            if (data && data.resultado && data.resultado == src_app_core_util_constantes__WEBPACK_IMPORTED_MODULE_2__["Constantes"].CONFIRMADO) {
                _this.usuarioService.alterarStatus(usuario, status).subscribe(function (r) {
                    _this.alertaService.sucesso("Usu\u00E1rio \"" + usuario.nome + "\" " + status + " com sucesso!");
                    _this.pesquisar();
                });
            }
        });
    };
    /***************************************************************************************************
     *  remove
     ***************************************************************************************************/
    UsuariosPage.prototype.remover = function (usuario) {
        var _this = this;
        var msg = "Deseja mesmo excluir o Usu\u00E1rio \"" + usuario.nome + "\"";
        this.alertaService.confirmar("Exclusão de Usuário", msg).subscribe(function (data) {
            console.log(data);
            if (data && data.resultado && data.resultado == src_app_core_util_constantes__WEBPACK_IMPORTED_MODULE_2__["Constantes"].CONFIRMADO) {
                _this.usuarioService.remove(usuario.codigo).subscribe(function (r) {
                    _this.alertaService.sucesso("Usu\u00E1rio \"" + usuario.nome + "\" exclu\u00EDdo com sucesso!");
                    _this.pesquisar();
                });
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('filtrosSidebar'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], UsuariosPage.prototype, "filtrosSidebar", void 0);
    UsuariosPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usuarios',
            template: __webpack_require__(/*! ./usuarios.html */ "./src/app/funcionalidades/usuarios/pages/usuarios/usuarios.html"),
            styles: [__webpack_require__(/*! ./usuarios.scss */ "./src/app/funcionalidades/usuarios/pages/usuarios/usuarios.scss")]
        }),
        __metadata("design:paramtypes", [src_app_core_components_actionbar__WEBPACK_IMPORTED_MODULE_3__["ActionBarService"],
            src_app_core_components_sidebar_sidebar_container_service__WEBPACK_IMPORTED_MODULE_6__["SidebarContainerService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"],
            src_app_services_alerta_service__WEBPACK_IMPORTED_MODULE_4__["AlertaService"]])
    ], UsuariosPage);
    return UsuariosPage;
}());



/***/ }),

/***/ "./src/app/funcionalidades/usuarios/usuarios-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/funcionalidades/usuarios/usuarios-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: UsuariosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosRoutingModule", function() { return UsuariosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_usuarios_usuarios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/usuarios/usuarios */ "./src/app/funcionalidades/usuarios/pages/usuarios/usuarios.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '', component: _pages_usuarios_usuarios__WEBPACK_IMPORTED_MODULE_2__["UsuariosPage"]
    }];
var UsuariosRoutingModule = /** @class */ (function () {
    function UsuariosRoutingModule() {
    }
    UsuariosRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UsuariosRoutingModule);
    return UsuariosRoutingModule;
}());



/***/ }),

/***/ "./src/app/funcionalidades/usuarios/usuarios.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/funcionalidades/usuarios/usuarios.module.ts ***!
  \*************************************************************/
/*! exports provided: UsuariosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosModule", function() { return UsuariosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-6-datatable */ "./node_modules/angular-6-datatable/index.js");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular_6_datatable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_core_components_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/components/component.module */ "./src/app/core/components/component.module.ts");
/* harmony import */ var src_app_modals_modals_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modals/modals.module */ "./src/app/modals/modals.module.ts");
/* harmony import */ var src_app_core_components_actionbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/components/actionbar */ "./src/app/core/components/actionbar/index.ts");
/* harmony import */ var _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./usuarios-routing.module */ "./src/app/funcionalidades/usuarios/usuarios-routing.module.ts");
/* harmony import */ var _pages_usuarios_usuarios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/usuarios/usuarios */ "./src/app/funcionalidades/usuarios/pages/usuarios/usuarios.ts");
/* harmony import */ var _modals_usuario_usuario_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modals/usuario/usuario.modal */ "./src/app/funcionalidades/usuarios/modals/usuario/usuario.modal.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "./node_modules/ngx-bootstrap/chronos/fesm5/ngx-bootstrap-chronos.js");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/locale */ "./node_modules/ngx-bootstrap/locale/fesm5/ngx-bootstrap-locale.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _nbfontana_ngx_br__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @nbfontana/ngx-br */ "./node_modules/@nbfontana/ngx-br/esm5/nbfontana-ngx-br.js");
/* harmony import */ var src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/pipes/pipe.module */ "./src/app/core/pipes/pipe.module.ts");
/* harmony import */ var src_app_core_directives_directives_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/directives/directives.module */ "./src/app/core/directives/directives.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_11__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_12__["ptBrLocale"]);
var UsuariosModule = /** @class */ (function () {
    function UsuariosModule() {
    }
    UsuariosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                angular_6_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__["BsDatepickerModule"].forRoot(),
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"],
                src_app_core_components_actionbar__WEBPACK_IMPORTED_MODULE_6__["ActionbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                src_app_core_components_component_module__WEBPACK_IMPORTED_MODULE_4__["ComponentModule"],
                _nbfontana_ngx_br__WEBPACK_IMPORTED_MODULE_14__["CpfModule"],
                _nbfontana_ngx_br__WEBPACK_IMPORTED_MODULE_14__["TelefoneModule"],
                src_app_core_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_15__["PipeModule"],
                src_app_core_directives_directives_module__WEBPACK_IMPORTED_MODULE_16__["DirectivesModule"],
                src_app_modals_modals_module__WEBPACK_IMPORTED_MODULE_5__["ModalsModule"],
                _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_7__["UsuariosRoutingModule"]
            ],
            declarations: [_pages_usuarios_usuarios__WEBPACK_IMPORTED_MODULE_8__["UsuariosPage"], _modals_usuario_usuario_modal__WEBPACK_IMPORTED_MODULE_9__["UsuarioModal"]],
            entryComponents: [_modals_usuario_usuario_modal__WEBPACK_IMPORTED_MODULE_9__["UsuarioModal"]]
        })
    ], UsuariosModule);
    return UsuariosModule;
}());



/***/ }),

/***/ "./src/app/services/usuario.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/usuario.service.ts ***!
  \*********************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_util_constantes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/util/constantes */ "./src/app/core/util/constantes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsuarioService = /** @class */ (function () {
    function UsuarioService(http) {
        this.http = http;
    }
    /***************************************************************************************************
     * RESOURCE SISTEMA
     ***************************************************************************************************/
    UsuarioService.prototype.urlSistema = function () {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].corporativo_url + "/sistemas/4";
    };
    /***************************************************************************************************
     * RESOURCE usuarios cadastrados no scaf
     ***************************************************************************************************/
    UsuarioService.prototype.urlUsuarioSistema = function (codigo) {
        return this.urlSistema() + "/usuarios" + (codigo > 0 ? '/' + codigo : '');
    };
    /***************************************************************************************************
     * RESOURCE usuarios cadastrados no corporativo
     ***************************************************************************************************/
    UsuarioService.prototype.urlUsuarioCorporativo = function (codigo) {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].corporativo_url + "/usuarios" + (codigo > 0 ? '/' + codigo : '');
    };
    UsuarioService.prototype.findPerfis = function () {
        return this.http.get(this.urlSistema() + "/perfis");
    };
    UsuarioService.prototype.find = function (filtro) {
        var options = { params: filtro };
        return this.http.get(this.urlUsuarioSistema(), options);
    };
    UsuarioService.prototype.findById = function (codigo) {
        return this.http.get(this.urlUsuarioSistema(codigo));
    };
    UsuarioService.prototype.save = function (objeto) {
        if (objeto.codigo > 0) {
            objeto.id = objeto.codigo;
            return this.http.put(this.urlUsuarioSistema(objeto.codigo), objeto);
        }
        else {
            return this.http.post(this.urlUsuarioSistema(), objeto);
        }
    };
    UsuarioService.prototype.alterarStatus = function (objeto, status) {
        return this.http.put(this.urlUsuarioSistema(objeto.codigo) + '/status/' + status, objeto);
    };
    UsuarioService.prototype.remove = function (codigo) {
        return this.http.delete(this.urlUsuarioSistema(codigo));
    };
    UsuarioService.prototype.findUsuariosCorporativo = function (filtro) {
        var options = { params: filtro };
        return this.http.get(this.urlUsuarioCorporativo(), options);
    };
    UsuarioService.prototype.findUsuarioCorporativoByLogin = function (login) {
        return this.http.get(this.urlUsuarioCorporativo(login) + "/");
    };
    UsuarioService.prototype.findFotoUsuarioCorporativo = function (codigo) {
        return this.http.get(this.urlUsuarioCorporativo(codigo) + "/foto");
    };
    UsuarioService.prototype.saveFotoUsuarioCorporativo = function (codigo, foto) {
        var fotoVO = { foto: foto };
        return this.http.put(this.urlUsuarioCorporativo(codigo) + "/foto", fotoVO);
    };
    /***************************************************************************************************
     *  retorna o usuário logado
     ***************************************************************************************************/
    UsuarioService.prototype.getUsuario = function () {
        var s = localStorage.getItem(_core_util_constantes__WEBPACK_IMPORTED_MODULE_3__["Constantes"].USUARIO);
        if (s && s != '') {
            return JSON.parse(s);
        }
        return {};
    };
    /***************************************************************************************************
     *  retorna o código do usuário logado
     ***************************************************************************************************/
    UsuarioService.prototype.getIdUsuario = function () {
        return this.getUsuario().codigo;
    };
    /***************************************************************************************************
     *  seta o usuário logado
     ***************************************************************************************************/
    UsuarioService.prototype.setUsuario = function (access_user) {
        localStorage.setItem(_core_util_constantes__WEBPACK_IMPORTED_MODULE_3__["Constantes"].ACCESS_USER, JSON.stringify(access_user));
        localStorage.setItem(_core_util_constantes__WEBPACK_IMPORTED_MODULE_3__["Constantes"].USUARIO, JSON.stringify(access_user.usuario));
        localStorage.setItem(_core_util_constantes__WEBPACK_IMPORTED_MODULE_3__["Constantes"].REFRESH_TOKEN, access_user.refresh_token);
        localStorage.setItem(_core_util_constantes__WEBPACK_IMPORTED_MODULE_3__["Constantes"].ACCESS_TOKEN, access_user.token_type + " " + access_user.access_token);
    };
    UsuarioService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UsuarioService);
    return UsuarioService;
}());



/***/ })

}]);
//# sourceMappingURL=funcionalidades-usuarios-usuarios-module.js.map