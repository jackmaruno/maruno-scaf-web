(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/services/cartao.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/cartao.service.ts ***!
  \********************************************/
/*! exports provided: CartaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartaoService", function() { return CartaoService; });
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



var CartaoService = /** @class */ (function () {
    function CartaoService(http) {
        this.http = http;
    }
    CartaoService.prototype.find = function () {
        return this.http.get(this.RESOURCE());
        // .pipe(
        //     map((response: any) => response.map(i => ({ ...i, codigo:i.id })))
        //   );
    };
    CartaoService.prototype.findAtivos = function () {
        return this.http.get(this.RESOURCE() + "/ativos");
        // .pipe(
        //     map((response: any) => response.map(i => ({ ...i, codigo:i.id })))
        //   );
    };
    CartaoService.prototype.save = function (objeto) {
        if (objeto.codigo > 0) {
            objeto.id = objeto.codigo;
            return this.http.put(this.RESOURCE(objeto.codigo), objeto);
        }
        else {
            return this.http.post(this.RESOURCE(), objeto);
        }
    };
    CartaoService.prototype.alterarStatus = function (objeto) {
        if (objeto.ativo) {
            objeto.ativo = false;
            return this.http.put(this.RESOURCE(objeto.codigo) + '/desativar', objeto);
        }
        else {
            objeto.ativo = true;
            return this.http.put(this.RESOURCE(objeto.codigo) + '/ativar', objeto);
        }
    };
    CartaoService.prototype.remove = function (codigo) {
        return this.http.delete(this.RESOURCE(codigo));
    };
    /***************************************************************************************************
     *
     ***************************************************************************************************/
    CartaoService.prototype.findFaturas = function (codigo) {
        return this.http.get(this.RESOURCE(codigo) + "/faturas");
    };
    /***************************************************************************************************
     *
     ***************************************************************************************************/
    CartaoService.prototype.findDatasFaturas = function (codigo) {
        return this.http.get(this.RESOURCE(codigo) + "/faturas/datas");
    };
    /***************************************************************************************************
     *
     ***************************************************************************************************/
    CartaoService.prototype.findParcelas = function (codigo, data) {
        return this.http.get(this.RESOURCE(codigo) + ("/faturas/" + data + "/parcelas"));
    };
    /***************************************************************************************************
     * RESOURCE
     ***************************************************************************************************/
    CartaoService.prototype.RESOURCE = function (codigo) {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].rest_url + "/cartoes" + (codigo > 0 ? '/' + codigo : '');
    };
    CartaoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CartaoService);
    return CartaoService;
}());



/***/ }),

/***/ "./src/app/services/parametros.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/parametros.service.ts ***!
  \************************************************/
/*! exports provided: ParametrosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParametrosService", function() { return ParametrosService; });
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



var ParametrosService = /** @class */ (function () {
    function ParametrosService(http) {
        this.http = http;
    }
    ParametrosService.prototype.findGrupos = function () {
        return this.GET("grupos");
    };
    ParametrosService.prototype.findPeriodos = function () {
        return this.GET("periodos");
    };
    /***************************************************************************************************
     * RESOURCE
     ***************************************************************************************************/
    ParametrosService.prototype.GET = function (path) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].rest_url + "/" + path);
    };
    ParametrosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ParametrosService);
    return ParametrosService;
}());



/***/ }),

/***/ "./src/app/services/tags.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/tags.service.ts ***!
  \******************************************/
/*! exports provided: TagsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsService", function() { return TagsService; });
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



var TagsService = /** @class */ (function () {
    function TagsService(http) {
        this.http = http;
    }
    TagsService.prototype.findTags = function () {
        return this.http.get(this.RESOURCE());
    };
    TagsService.prototype.saveTag = function (objeto) {
        if (objeto.codigo > 0) {
            objeto.id = objeto.codigo;
            return this.http.put(this.RESOURCE(objeto.codigo), objeto);
        }
        else {
            return this.http.post(this.RESOURCE(), objeto);
        }
    };
    TagsService.prototype.removeTag = function (codigo) {
        return this.http.delete(this.RESOURCE(codigo));
    };
    /***************************************************************************************************
     * RESOURCE
     ***************************************************************************************************/
    TagsService.prototype.RESOURCE = function (codigo) {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].rest_url + "/tags" + (codigo > 0 ? '/' + codigo : '');
    };
    TagsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TagsService);
    return TagsService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map