(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["funcionalidades-lancamentos-lancamentos-module~funcionalidades-usuarios-usuarios-module"],{

/***/ "./node_modules/@nbfontana/ngx-br/esm5/nbfontana-ngx-br.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@nbfontana/ngx-br/esm5/nbfontana-ngx-br.js ***!
  \*****************************************************************/
/*! exports provided: NgxBrModule, NgxBrPipesModule, CnpjPipe, CpfCnpjPipe, CpfPipe, TelefonePipe, NgxBrComponentsModule, CepModule, CepMaskDirective, CepComponent, CnpjModule, CnpjComponent, CnpjMaskDirective, CnpjComponentContainer, CpfModule, CpfComponent, CpfComponentContainer, CpfMaskDirective, DinheiroModule, DinheiroComponent, DinheiroMaskDirective, EstadosModule, EstadosComponent, Estado, HoraModule, HoraComponent, HoraMaskDirective, PercentualModule, PercentualComponent, PercentualMaskDirective, PesoModule, PesoComponent, TelefoneModule, TelefoneComponent, TelefoneMaskDirective, NgxBrValidators, cpfValidationFn, cnpjValidationFn, percentualValidationFn, dinheiroValidationFn, horaValidationFn, ValueAccessorBase, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxBrModule", function() { return NgxBrModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxBrPipesModule", function() { return NgxBrPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CnpjPipe", function() { return CnpjPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CpfCnpjPipe", function() { return CpfCnpjPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CpfPipe", function() { return CpfPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelefonePipe", function() { return TelefonePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxBrComponentsModule", function() { return NgxBrComponentsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CepModule", function() { return CepModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CepMaskDirective", function() { return CepMaskDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CepComponent", function() { return CepComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CnpjModule", function() { return CnpjModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CnpjComponent", function() { return CnpjComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CnpjMaskDirective", function() { return CnpjMaskDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CnpjComponentContainer", function() { return CnpjComponentContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CpfModule", function() { return CpfModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CpfComponent", function() { return CpfComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CpfComponentContainer", function() { return CpfComponentContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CpfMaskDirective", function() { return CpfMaskDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DinheiroModule", function() { return DinheiroModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DinheiroComponent", function() { return DinheiroComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DinheiroMaskDirective", function() { return DinheiroMaskDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadosModule", function() { return EstadosModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadosComponent", function() { return EstadosComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Estado", function() { return Estado; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoraModule", function() { return HoraModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoraComponent", function() { return HoraComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoraMaskDirective", function() { return HoraMaskDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercentualModule", function() { return PercentualModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercentualComponent", function() { return PercentualComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercentualMaskDirective", function() { return PercentualMaskDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PesoModule", function() { return PesoModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PesoComponent", function() { return PesoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelefoneModule", function() { return TelefoneModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelefoneComponent", function() { return TelefoneComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelefoneMaskDirective", function() { return TelefoneMaskDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxBrValidators", function() { return NgxBrValidators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cpfValidationFn", function() { return cpfValidationFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cnpjValidationFn", function() { return cnpjValidationFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "percentualValidationFn", function() { return percentualValidationFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dinheiroValidationFn", function() { return dinheiroValidationFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "horaValidationFn", function() { return horaValidationFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueAccessorBase", function() { return ValueAccessorBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CepPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-currency */ "./node_modules/ngx-currency/index.js");






var telefoneFixoPattern = '(99) 9999-9999';
var telefoneCelularPattern = '(99) 99999-9999';
var horaPattern = '99:99';
var cpfPattern = '999.999.999-99';
var cnpjPattern = '99.999.999/9999-99';
var cepPattern = '99999-999';
var cepPlaceholder = '00000-000';
var cnpjPlaceholder = '00.000.000/0000-00';
var cpfPlaceholder = '000.000.000-00';
var pesoPlaceholder = '0,00 kg';
var dinheiroPlaceholder = 'R$ 0,00';
var percentualPlaceholder = '0%';
var horaPlaceholder = 'HH:MM';
var dinheiroPatternConfig = {
    precision: 2,
    separator: ',',
    delimiter: '.',
    unit: 'R$',
    zeroCents: false,
};
var percentualPatternConfig = {
    precision: 1,
    separator: ',',
    delimiter: ',',
    suffixUnit: '%',
    zeroCents: false,
};
var vanillaMasker = __webpack_require__(/*! vanilla-masker */ "./node_modules/vanilla-masker/lib/vanilla-masker.js");
var CpfPipe = /** @class */ (function () {
    function CpfPipe() {
    }
    CpfPipe.prototype.transform = function (value) {
        if (!value) {
            return '';
        }
        return vanillaMasker.toPattern(value, cpfPattern);
    };
    return CpfPipe;
}());
CpfPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                name: 'cpf',
            },] },
];
CpfPipe.ctorParameters = function () { return []; };
var vanillaMasker$1 = __webpack_require__(/*! vanilla-masker */ "./node_modules/vanilla-masker/lib/vanilla-masker.js");
var CnpjPipe = /** @class */ (function () {
    function CnpjPipe() {
    }
    CnpjPipe.prototype.transform = function (value) {
        if (!value) {
            return '';
        }
        return vanillaMasker$1.toPattern(value, cnpjPattern);
    };
    return CnpjPipe;
}());
CnpjPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                name: 'cnpj',
            },] },
];
CnpjPipe.ctorParameters = function () { return []; };
var vanillaMasker$2 = __webpack_require__(/*! vanilla-masker */ "./node_modules/vanilla-masker/lib/vanilla-masker.js");
var CPF_LENGTH = 11;
var CpfCnpjPipe = /** @class */ (function () {
    function CpfCnpjPipe() {
    }
    CpfCnpjPipe.prototype.transform = function (value) {
        if (!value) {
            return '';
        }
        if (value.length > CPF_LENGTH) {
            return vanillaMasker$2.toPattern(value, cnpjPattern);
        }
        return vanillaMasker$2.toPattern(value, cpfPattern);
    };
    return CpfCnpjPipe;
}());
CpfCnpjPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                name: 'cpfOuCnpj',
            },] },
];
CpfCnpjPipe.ctorParameters = function () { return []; };
var vanillaMasker$3 = __webpack_require__(/*! vanilla-masker */ "./node_modules/vanilla-masker/lib/vanilla-masker.js");
var TelefonePipe = /** @class */ (function () {
    function TelefonePipe() {
    }
    TelefonePipe.prototype.transform = function (value) {
        if (!value) {
            return '';
        }
        var telefonePattern = value.toString().length === 11 ? telefoneCelularPattern : telefoneFixoPattern;
        return vanillaMasker$3.toPattern(value, telefonePattern);
    };
    return TelefonePipe;
}());
TelefonePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                name: 'telefone',
            },] },
];
TelefonePipe.ctorParameters = function () { return []; };
var vanillaMasker$4 = __webpack_require__(/*! vanilla-masker */ "./node_modules/vanilla-masker/lib/vanilla-masker.js");
var CepPipe = /** @class */ (function () {
    function CepPipe() {
    }
    CepPipe.prototype.transform = function (value) {
        if (!value) {
            return '';
        }
        return vanillaMasker$4.toPattern(value, cepPattern);
    };
    return CepPipe;
}());
CepPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                name: 'cep',
            },] },
];
CepPipe.ctorParameters = function () { return []; };
var NgxBrPipesModule = /** @class */ (function () {
    function NgxBrPipesModule() {
    }
    return NgxBrPipesModule;
}());
NgxBrPipesModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [],
                declarations: [
                    CepPipe,
                    CpfPipe,
                    CnpjPipe,
                    CpfCnpjPipe,
                    TelefonePipe
                ],
                exports: [
                    CepPipe,
                    CpfPipe,
                    CnpjPipe,
                    CpfCnpjPipe,
                    TelefonePipe
                ],
                providers: [
                    CepPipe,
                    CpfPipe,
                    CnpjPipe,
                    CpfCnpjPipe,
                    TelefonePipe
                ]
            },] },
];
NgxBrPipesModule.ctorParameters = function () { return []; };
var vanillaMasker$5 = __webpack_require__(/*! vanilla-masker */ "./node_modules/vanilla-masker/lib/vanilla-masker.js");
var ValueAccessorBase = /** @class */ (function () {
    function ValueAccessorBase() {
        this.disabled = false;
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    Object.defineProperty(ValueAccessorBase.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (value) {
            this.innerValue = value;
            this.onChange(value);
            this.onTouched();
        },
        enumerable: true,
        configurable: true
    });
    ValueAccessorBase.prototype.writeValue = function (value) {
        if (!this.pattern) {
            this.innerValue = value;
        }
        else {
            this.innerValue = this.applyPattern(value);
        }
    };
    ValueAccessorBase.prototype.applyPattern = function (value) {
        if (!value) {
            return '';
        }
        if (typeof this.pattern === 'string') {
            return vanillaMasker$5.toPattern(value, this.pattern);
        }
        if (typeof this.pattern === 'function') {
            return vanillaMasker$5.toPattern(value, this.pattern(value));
        }
        return vanillaMasker$5.toMoney(value, this.pattern);
    };
    ValueAccessorBase.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ValueAccessorBase.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    ValueAccessorBase.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    ValueAccessorBase.prototype.touch = function () {
        this.onTouched.forEach(function (f) { return f(); });
    };
    ValueAccessorBase.prototype.notifyChanges = function (value) {
        value = this.transform(value);
        this.onChange(value);
        this.onTouched();
    };
    return ValueAccessorBase;
}());
ValueAccessorBase.propDecorators = {
    "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var CPF_PROVIDER = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return CpfComponent; }),
    multi: true,
};
var CpfComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CpfComponent, _super);
    function CpfComponent() {
        var _this = _super.apply(this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(arguments)) || this;
        _this.pattern = cpfPattern;
        _this.placeholder = cpfPlaceholder;
        _this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    CpfComponent.prototype.transform = function (value) {
        return value ? value.replace(/[^\d]/g, '').trim().slice(0, 11) : value;
    };
    CpfComponent.prototype.blurEvt = function (event) {
        this.blur.emit(event);
    };
    return CpfComponent;
}(ValueAccessorBase));
CpfComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'cpf',
                template: "<input\n  cpfMask\n  type=\"tel\"\n  class=\"form-control\"\n  maxlength=\"14\"\n  [id]=\"id\"\n  [placeholder]=\"placeholder\"\n  [disabled]=\"disabled\"\n  [(ngModel)]=\"value\"\n  (ngModelChange)=\"notifyChanges($event)\"\n  (blur)=\"blurEvt($event)\">\n",
                styles: [""],
                providers: [CPF_PROVIDER],
            },] },
];
CpfComponent.ctorParameters = function () { return []; };
CpfComponent.propDecorators = {
    "placeholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "blur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
};
var vanillaMasker$6 = __webpack_require__(/*! vanilla-masker */ "./node_modules/vanilla-masker/lib/vanilla-masker.js");
var CpfMaskDirective = /** @class */ (function () {
    function CpfMaskDirective(element) {
        this.element = element;
        this.nativeElement = this.element.nativeElement;
        vanillaMasker$6(this.nativeElement).maskPattern(cpfPattern);
    }
    return CpfMaskDirective;
}());
CpfMaskDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[cpfMask]',
            },] },
];
CpfMaskDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
]; };
var CpfComponentContainer = /** @class */ (function () {
    function CpfComponentContainer() {
        this.requiredMsg = 'Este campo é obrigatório';
        this.cpfMsg = 'CPF Inválido';
    }
    CpfComponentContainer.prototype.shouldShowErrors = function () {
        return this.control && !this.control.valid && !this.control.pristine &&
            this.control.touched && !!this.control.errors;
    };
    return CpfComponentContainer;
}());
CpfComponentContainer.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'cpf-container',
                template: "\n    <ng-content></ng-content>\n    <span *ngIf=\"shouldShowErrors()\" style=\"color: #f05050\">\n      <span *ngIf=\"control.hasError('required')\">{{requiredMsg}}</span>\n      <span *ngIf=\"!control.hasError('required') && control.hasError('cpf')\">{{cpfMsg}}</span>\n    </span>\n  ",
            },] },
];
CpfComponentContainer.ctorParameters = function () { return []; };
CpfComponentContainer.propDecorators = {
    "control": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "requiredMsg": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "cpfMsg": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var CpfModule = /** @class */ (function () {
    function CpfModule() {
    }
    return CpfModule;
}());
CpfModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                declarations: [
                    CpfComponent,
                    CpfMaskDirective,
                    CpfComponentContainer
                ],
                exports: [
                    CpfComponent,
                    CpfMaskDirective,
                    CpfComponentContainer
                ]
            },] },
];
CpfModule.ctorParameters = function () { return []; };
var CNPJ_PROVIDER = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return CnpjComponent; }),
    multi: true,
};
var CnpjComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CnpjComponent, _super);
    function CnpjComponent() {
        var _this = _super.apply(this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(arguments)) || this;
        _this.pattern = cnpjPattern;
        _this.placeholder = cnpjPlaceholder;
        _this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    CnpjComponent.prototype.transform = function (value) {
        return value ? value.replace(/[^\d]/g, '').trim().slice(0, 14) : value;
    };
    CnpjComponent.prototype.blurEvt = function (event) {
        this.blur.emit(event);
    };
    return CnpjComponent;
}(ValueAccessorBase));
CnpjComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'cnpj',
                template: "<input\n  cnpjMask\n  class=\"form-control\"\n  maxlength=\"18\"\n  type=\"tel\"\n  [id]=\"id\"\n  [placeholder]=\"placeholder\"\n  [disabled]=\"disabled\"\n  [(ngModel)]=\"value\"\n  (ngModelChange)=\"notifyChanges($event)\"\n  (blur)=\"blurEvt($event)\">\n",
                styles: [""],
                providers: [CNPJ_PROVIDER]
            },] },
];
CnpjComponent.ctorParameters = function () { return []; };
CnpjComponent.propDecorators = {
    "placeholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "blur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
};
var vanillaMasker$7 = __webpack_require__(/*! vanilla-masker */ "./node_modules/vanilla-masker/lib/vanilla-masker.js");
var CnpjMaskDirective = /** @class */ (function () {
    function CnpjMaskDirective(element) {
        this.element = element;
        this.nativeElement = this.element.nativeElement;
        vanillaMasker$7(this.nativeElement).maskPattern(cnpjPattern);
    }
    return CnpjMaskDirective;
}());
CnpjMaskDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[cnpjMask]',
            },] },
];
CnpjMaskDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
]; };
var CnpjComponentContainer = /** @class */ (function () {
    function CnpjComponentContainer() {
        this.requiredMsg = 'Este campo é obrigatório';
        this.cnpjMsg = 'CNPJ Inválido';
    }
    CnpjComponentContainer.prototype.shouldShowErrors = function () {
        return this.control && !this.control.valid && !this.control.pristine &&
            this.control.touched && !!this.control.errors;
    };
    return CnpjComponentContainer;
}());
CnpjComponentContainer.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'cnpj-container',
                template: "\n    <ng-content></ng-content>\n    <span *ngIf=\"shouldShowErrors()\" style=\"color: #f05050\">\n      <span *ngIf=\"control.hasError('required')\">{{requiredMsg}}</span>\n      <span *ngIf=\"!control.hasError('required') && control.hasError('cnpj')\">{{cnpjMsg}}</span>\n    </span>\n  ",
            },] },
];
CnpjComponentContainer.ctorParameters = function () { return []; };
CnpjComponentContainer.propDecorators = {
    "control": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "requiredMsg": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "cnpjMsg": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var CnpjModule = /** @class */ (function () {
    function CnpjModule() {
    }
    return CnpjModule;
}());
CnpjModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                declarations: [
                    CnpjComponent,
                    CnpjMaskDirective,
                    CnpjComponentContainer
                ],
                exports: [
                    CnpjComponent,
                    CnpjMaskDirective,
                    CnpjComponentContainer
                ]
            },] },
];
CnpjModule.ctorParameters = function () { return []; };
var DINHEIRO_PROVIDER = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return DinheiroComponent; }),
    multi: true,
};
var DinheiroComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DinheiroComponent, _super);
    function DinheiroComponent(elementRef) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.placeholder = dinheiroPlaceholder;
        _this.maxLength = 15;
        _this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    DinheiroComponent.prototype.blurEvt = function (event) {
        this.blur.emit(event);
    };
    DinheiroComponent.prototype.transform = function (value) {
        return value;
    };
    DinheiroComponent.prototype.onKeydown = function (event) {
        if (event.ctrlKey && event.keyCode === 65) {
            console.log(this.elementRef);
        }
    };
    return DinheiroComponent;
}(ValueAccessorBase));
DinheiroComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'dinheiro',
                template: "<input\n  currencyMask\n  class=\"form-control\"\n  maxlength=\"{{maxLength}}\"\n  [id]=\"id\"\n  [disabled]=\"disabled\"\n  [placeholder]=\"placeholder\"\n  [ngStyle]=\"style\"\n  [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',', allowNegative: false }\"\n  [(ngModel)]=\"value\"\n  (keydown)=\"onKeydown($event)\"\n  (ngModelChange)=\"notifyChanges($event)\"\n  (blur)=\"blurEvt($event)\">\n",
                styles: [""],
                providers: [DINHEIRO_PROVIDER]
            },] },
];
DinheiroComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
]; };
DinheiroComponent.propDecorators = {
    "style": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "placeholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "maxLength": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "blur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
};
var vanillaMasker$8 = __webpack_require__(/*! vanilla-masker */ "./node_modules/vanilla-masker/lib/vanilla-masker.js");
var DinheiroMaskDirective = /** @class */ (function () {
    function DinheiroMaskDirective(element) {
        this.element = element;
        this.nativeElement = this.element.nativeElement;
        vanillaMasker$8(this.nativeElement).maskMoney(dinheiroPatternConfig);
    }
    return DinheiroMaskDirective;
}());
DinheiroMaskDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[dinheiroMask]',
            },] },
];
DinheiroMaskDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
]; };
var DinheiroModule = /** @class */ (function () {
    function DinheiroModule() {
    }
    return DinheiroModule;
}());
DinheiroModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    ngx_currency__WEBPACK_IMPORTED_MODULE_4__["NgxCurrencyModule"]
                ],
                declarations: [
                    DinheiroComponent,
                    DinheiroMaskDirective,
                ],
                exports: [
                    DinheiroComponent,
                    DinheiroMaskDirective
                ]
            },] },
];
DinheiroModule.ctorParameters = function () { return []; };
var Estado = /** @class */ (function () {
    function Estado(sigla, descricao) {
        this.sigla = sigla;
        this.descricao = descricao;
    }
    return Estado;
}());
var ESTADOS_PROVIDER = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return EstadosComponent; }),
    multi: true,
};
var EstadosComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EstadosComponent, _super);
    function EstadosComponent() {
        var _this = _super.apply(this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(arguments)) || this;
        _this.placeholder = 'Selecione';
        _this.estados = [
            new Estado('AC', 'Acre'),
            new Estado('AL', 'Alagoas'),
            new Estado('AP', 'Amapá'),
            new Estado('AM', 'Amazonas'),
            new Estado('BA', 'Bahia'),
            new Estado('CE', 'Ceará'),
            new Estado('DF', 'Distrito Federal'),
            new Estado('ES', 'Espírito Santo'),
            new Estado('GO', 'Goiás'),
            new Estado('MA', 'Maranhão'),
            new Estado('MT', 'Mato Grosso'),
            new Estado('MS', 'Mato Grosso do Sul'),
            new Estado('MG', 'Minas Gerais'),
            new Estado('PA', 'Pará'),
            new Estado('PB', 'Paraíba'),
            new Estado('PR', 'Paraná'),
            new Estado('PE', 'Pernambuco'),
            new Estado('PI', 'Piauí'),
            new Estado('RJ', 'Rio de Janeiro'),
            new Estado('RN', 'Rio Grande do Norte'),
            new Estado('RS', 'Rio Grande do Sul'),
            new Estado('RO', 'Rondônia'),
            new Estado('RR', 'Roraima'),
            new Estado('SC', 'Santa Catarina'),
            new Estado('SP', 'São Paulo'),
            new Estado('SE', 'Sergipe'),
            new Estado('TO', 'Tocantins'),
        ];
        return _this;
    }
    EstadosComponent.prototype.transform = function (T) {
        return undefined;
    };
    return EstadosComponent;
}(ValueAccessorBase));
EstadosComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'estados',
                template: "<select\n  class=\"form-control\"\n  [(ngModel)]=\"value\"\n  [id]=\"id\"\n  [disabled]=\"disabled\">\n  <option value=\"null\" disabled selected>{{placeholder}}</option>\n  <option *ngFor=\"let estado of estados\" [ngValue]=\"estado.sigla\">{{estado.descricao}}</option>\n</select>\n",
                styles: [""],
                providers: [ESTADOS_PROVIDER]
            },] },
];
EstadosComponent.ctorParameters = function () { return []; };
EstadosComponent.propDecorators = {
    "placeholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var EstadosModule = /** @class */ (function () {
    function EstadosModule() {
    }
    return EstadosModule;
}());
EstadosModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                declarations: [
                    EstadosComponent
                ],
                exports: [
                    EstadosComponent
                ]
            },] },
];
EstadosModule.ctorParameters = function () { return []; };
var vanillaMasker$9 = __webpack_require__(/*! vanilla-masker */ "./node_modules/vanilla-masker/lib/vanilla-masker.js");
var HORA_PROVIDER = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return HoraComponent; }),
    multi: true,
};
var HoraComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HoraComponent, _super);
    function HoraComponent() {
        var _this = _super.apply(this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(arguments)) || this;
        _this.pattern = horaPattern;
        _this.placeholder = horaPlaceholder;
        _this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    HoraComponent.prototype.blurEvt = function (event) {
        var value = event.target.value;
        if (value) {
            value = value.replace(/[^\d]/g, '').padEnd(4, '0');
            this.value = vanillaMasker$9.toPattern(value, '99:99');
        }
        this.blur.emit(event);
    };
    HoraComponent.prototype.transform = function (value) {
        return value ? value.replace(/[^\d]/g, '').trim().slice(0, 5) : value;
    };
    return HoraComponent;
}(ValueAccessorBase));
HoraComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hora',
                template: "<input\n  horaMask\n  class=\"form-control text-right\"\n  maxlength=\"5\"\n  [id]=\"id\"\n  [disabled]=\"disabled\"\n  [placeholder]=\"placeholder\"\n  [(ngModel)]=\"value\"\n  (ngModelChange)=\"notifyChanges($event)\"\n  (blur)=\"blurEvt($event)\">\n",
                styles: [""],
                providers: [HORA_PROVIDER]
            },] },
];
HoraComponent.ctorParameters = function () { return []; };
HoraComponent.propDecorators = {
    "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "placeholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "blur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
};
var vanillaMasker$10 = __webpack_require__(/*! vanilla-masker */ "./node_modules/vanilla-masker/lib/vanilla-masker.js");
var HoraMaskDirective = /** @class */ (function () {
    function HoraMaskDirective(element) {
        this.element = element;
        this.nativeElement = this.element.nativeElement;
        vanillaMasker$10(this.nativeElement).maskPattern(horaPattern);
    }
    return HoraMaskDirective;
}());
HoraMaskDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[horaMask]',
            },] },
];
HoraMaskDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
]; };
var HoraModule = /** @class */ (function () {
    function HoraModule() {
    }
    return HoraModule;
}());
HoraModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                declarations: [
                    HoraComponent,
                    HoraMaskDirective
                ],
                exports: [
                    HoraComponent,
                    HoraMaskDirective
                ]
            },] },
];
HoraModule.ctorParameters = function () { return []; };
var PERCENTUAL_PROVIDER = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return PercentualComponent; }),
    multi: true,
};
var PercentualComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PercentualComponent, _super);
    function PercentualComponent() {
        var _this = _super.apply(this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(arguments)) || this;
        _this.maxLength = 10;
        _this.placeholder = percentualPlaceholder;
        _this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    PercentualComponent.prototype.blurEvt = function (event) {
        this.blur.emit(event);
    };
    PercentualComponent.prototype.transform = function (value) {
        return value;
    };
    return PercentualComponent;
}(ValueAccessorBase));
PercentualComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'percentual',
                template: "<input\n  currencyMask\n  class=\"form-control\"\n  maxlength=\"{{maxLength}}\"\n  [id]=\"id\"\n  [disabled]=\"disabled\"\n  [placeholder]=\"placeholder\"\n  [ngStyle]=\"style\"\n  [options]=\"{ suffix: ' %', prefix: '', thousands: '.', decimal: ',', allowNegative: true }\"\n  [(ngModel)]=\"value\"\n  (ngModelChange)=\"notifyChanges($event)\"\n  (blur)=\"blurEvt($event)\">\n",
                styles: [""],
                providers: [PERCENTUAL_PROVIDER]
            },] },
];
PercentualComponent.ctorParameters = function () { return []; };
PercentualComponent.propDecorators = {
    "style": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "maxLength": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "placeholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "blur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
};
var vanillaMasker$11 = __webpack_require__(/*! vanilla-masker */ "./node_modules/vanilla-masker/lib/vanilla-masker.js");
var PercentualMaskDirective = /** @class */ (function () {
    function PercentualMaskDirective(element) {
        this.element = element;
        this.nativeElement = this.element.nativeElement;
        vanillaMasker$11(this.nativeElement).maskMoney(percentualPatternConfig);
    }
    return PercentualMaskDirective;
}());
PercentualMaskDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[percentualMask]',
            },] },
];
PercentualMaskDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
]; };
var PercentualModule = /** @class */ (function () {
    function PercentualModule() {
    }
    return PercentualModule;
}());
PercentualModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    ngx_currency__WEBPACK_IMPORTED_MODULE_4__["NgxCurrencyModule"]
                ],
                declarations: [
                    PercentualComponent,
                    PercentualMaskDirective
                ],
                exports: [
                    PercentualComponent,
                    PercentualMaskDirective
                ]
            },] },
];
PercentualModule.ctorParameters = function () { return []; };
var PESO_PROVIDER = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return PesoComponent; }),
    multi: true,
};
var PesoComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PesoComponent, _super);
    function PesoComponent() {
        var _this = _super.apply(this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(arguments)) || this;
        _this.maxLength = 10;
        _this.placeholder = pesoPlaceholder;
        _this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    PesoComponent.prototype.blurEvt = function (event) {
        this.blur.emit(event);
    };
    PesoComponent.prototype.transform = function (value) {
        return value;
    };
    return PesoComponent;
}(ValueAccessorBase));
PesoComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'peso',
                template: "<input\n  currencyMask\n  class=\"form-control\"\n  placeholder=\"{{placeholder}}\"\n  maxlength=\"{{maxLength}}\"\n  [id]=\"id\"\n  [disabled]=\"disabled\"\n  [placeholder]=\"placeholder\"\n  [ngStyle]=\"style\"\n  [options]=\"{ suffix: ' kg', prefix: '', thousands: '.', decimal: ',', allowNegative: false }\"\n  [(ngModel)]=\"value\"\n  (ngModelChange)=\"notifyChanges($event)\"\n  (blur)=\"blurEvt($event)\">\n",
                styles: [""],
                providers: [PESO_PROVIDER]
            },] },
];
PesoComponent.ctorParameters = function () { return []; };
PesoComponent.propDecorators = {
    "style": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "maxLength": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "placeholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "blur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
};
var PesoModule = /** @class */ (function () {
    function PesoModule() {
    }
    return PesoModule;
}());
PesoModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    ngx_currency__WEBPACK_IMPORTED_MODULE_4__["NgxCurrencyModule"]
                ],
                declarations: [
                    PesoComponent
                ],
                exports: [
                    PesoComponent
                ]
            },] },
];
PesoModule.ctorParameters = function () { return []; };
var TELEFONE_PROVIDER = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return TelefoneComponent; }),
    multi: true,
};
var TelefoneComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TelefoneComponent, _super);
    function TelefoneComponent() {
        var _this = _super.apply(this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(arguments)) || this;
        _this.pattern = function (value) {
            return value.toString().length === 11 ? telefoneCelularPattern : telefoneFixoPattern;
        };
        _this.placeholder = telefoneFixoPattern;
        _this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    TelefoneComponent.prototype.transform = function (value) {
        return value ? value.replace(/[^\d]/g, '').trim().slice(0, 11) : value;
    };
    TelefoneComponent.prototype.blurEvt = function (event) {
        this.blur.emit(event);
    };
    return TelefoneComponent;
}(ValueAccessorBase));
TelefoneComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'telefone',
                template: "<input\n  telefoneMask\n  type=\"tel\"\n  class=\"form-control\"\n  maxlength=\"16\"\n  [id]=\"id\"\n  [disabled]=\"disabled\"\n  [placeholder]=\"placeholder\"\n  [(ngModel)]=\"value\"\n  (ngModelChange)=\"notifyChanges($event)\">\n",
                styles: [""],
                providers: [TELEFONE_PROVIDER]
            },] },
];
TelefoneComponent.ctorParameters = function () { return []; };
TelefoneComponent.propDecorators = {
    "placeholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "blur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
};
function removeNonDigitValues(value) {
    return value ? value.replace(/[^\d]/g, '').trim() : value;
}
var vanillaMasker$12 = __webpack_require__(/*! vanilla-masker */ "./node_modules/vanilla-masker/lib/vanilla-masker.js");
var TelefoneMaskDirective = /** @class */ (function () {
    function TelefoneMaskDirective(element) {
        this.element = element;
        this.nativeElement = this.element.nativeElement;
    }
    TelefoneMaskDirective.prototype.onKeyup = function (event) {
        var telefonePattern = removeNonDigitValues(this.nativeElement.value).length === 11 ? telefoneCelularPattern : telefoneFixoPattern;
        this.nativeElement.value = vanillaMasker$12.toPattern(this.nativeElement.value, telefonePattern);
    };
    return TelefoneMaskDirective;
}());
TelefoneMaskDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[telefoneMask]',
            },] },
];
TelefoneMaskDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
]; };
TelefoneMaskDirective.propDecorators = {
    "onKeyup": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['keyup', ['$event'],] },],
};
var TelefoneModule = /** @class */ (function () {
    function TelefoneModule() {
    }
    return TelefoneModule;
}());
TelefoneModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                declarations: [
                    TelefoneComponent,
                    TelefoneMaskDirective
                ],
                exports: [
                    TelefoneComponent,
                    TelefoneMaskDirective
                ]
            },] },
];
TelefoneModule.ctorParameters = function () { return []; };
var CEP_PROVIDER = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return CepComponent; }),
    multi: true,
};
var CepComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CepComponent, _super);
    function CepComponent() {
        var _this = _super.apply(this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(arguments)) || this;
        _this.pattern = cepPattern;
        _this.placeholder = cepPlaceholder;
        _this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    CepComponent.prototype.blurEvt = function (event) {
        this.blur.emit(event);
    };
    CepComponent.prototype.transform = function (value) {
        return value ? value.replace(/[^\d]/g, '').trim().slice(0, 8) : value;
    };
    return CepComponent;
}(ValueAccessorBase));
CepComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'cep',
                template: "<input\n  cepMask\n  class=\"form-control\"\n  maxlength=\"9\"\n  type=\"tel\"\n  [id]=\"id\"\n  [placeholder]=\"placeholder\"\n  [disabled]=\"disabled\"\n  [(ngModel)]=\"value\"\n  (ngModelChange)=\"notifyChanges($event)\"\n  (blur)=\"blurEvt($event)\">\n",
                styles: [""],
                providers: [CEP_PROVIDER]
            },] },
];
CepComponent.ctorParameters = function () { return []; };
CepComponent.propDecorators = {
    "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "placeholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "blur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
};
var vanillaMasker$13 = __webpack_require__(/*! vanilla-masker */ "./node_modules/vanilla-masker/lib/vanilla-masker.js");
var CepMaskDirective = /** @class */ (function () {
    function CepMaskDirective(element) {
        this.element = element;
        this.nativeElement = this.element.nativeElement;
        vanillaMasker$13(this.nativeElement).maskPattern(cepPattern);
    }
    return CepMaskDirective;
}());
CepMaskDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[cepMask]',
            },] },
];
CepMaskDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
]; };
var CepModule = /** @class */ (function () {
    function CepModule() {
    }
    return CepModule;
}());
CepModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                declarations: [
                    CepComponent,
                    CepMaskDirective
                ],
                exports: [
                    CepComponent,
                    CepMaskDirective
                ]
            },] },
];
CepModule.ctorParameters = function () { return []; };
var NgxBrComponentsModule = /** @class */ (function () {
    function NgxBrComponentsModule() {
    }
    return NgxBrComponentsModule;
}());
NgxBrComponentsModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [
                    CpfModule,
                    CepModule,
                    CnpjModule,
                    DinheiroModule,
                    EstadosModule,
                    HoraModule,
                    PercentualModule,
                    PesoModule,
                    TelefoneModule,
                ],
                exports: [
                    CpfModule,
                    CepModule,
                    CnpjModule,
                    DinheiroModule,
                    EstadosModule,
                    HoraModule,
                    PercentualModule,
                    PesoModule,
                    TelefoneModule,
                ]
            },] },
];
NgxBrComponentsModule.ctorParameters = function () { return []; };
var CPF = __webpack_require__(/*! cpf_cnpj */ "./node_modules/cpf_cnpj/index.js").CPF;
function cpfValidationFn() {
    return function (control) {
        var value = control.value;
        if (value && !CPF.isValid(value)) {
            return {
                cpf: true,
            };
        }
        return null;
    };
}
var CNPJ = __webpack_require__(/*! cpf_cnpj */ "./node_modules/cpf_cnpj/index.js").CNPJ;
function cnpjValidationFn() {
    return function (control) {
        var value = control.value;
        if (value && !CNPJ.isValid(value)) {
            return {
                cnpj: true,
            };
        }
        return null;
    };
}
function dinheiroValidationFn() {
    return function (control) {
        var value = control.value;
        return value && value !== '0.00' && '0,00' ? null : { dinheiroRequired: true };
    };
}
function percentualValidationFn() {
    return function (control) {
        var value = control.value;
        return value && value !== '0.0' ? null : { percentualRequired: true };
    };
}
function horaValidationFn() {
    return function (control) {
        var value = control.value;
        if (!value) {
            return null;
        }
        var isValid = new RegExp('^([0-1]?[0-9]|2[0-3]):([0-5][0-9])?$').test(value);
        if (!isValid) {
            return {
                hora: true,
            };
        }
        return null;
    };
}
var NgxBrValidators = /** @class */ (function () {
    function NgxBrValidators() {
    }
    return NgxBrValidators;
}());
NgxBrValidators.cpf = cpfValidationFn;
NgxBrValidators.cnpj = cnpjValidationFn;
NgxBrValidators.hora = horaValidationFn;
NgxBrValidators.dinheiroRequired = dinheiroValidationFn;
NgxBrValidators.percentualRequired = percentualValidationFn;
var NgxBrModule = /** @class */ (function () {
    function NgxBrModule() {
    }
    NgxBrModule.forRoot = function () {
        return {
            ngModule: NgxBrModule,
            providers: []
        };
    };
    return NgxBrModule;
}());
NgxBrModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [
                    NgxBrComponentsModule,
                    NgxBrPipesModule
                ],
                exports: [
                    NgxBrComponentsModule,
                    NgxBrPipesModule
                ]
            },] },
];
NgxBrModule.ctorParameters = function () { return []; };


//# sourceMappingURL=nbfontana-ngx-br.js.map


/***/ }),

/***/ "./node_modules/cpf_cnpj/index.js":
/*!****************************************!*\
  !*** ./node_modules/cpf_cnpj/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  CPF: __webpack_require__(/*! ./lib/cpf */ "./node_modules/cpf_cnpj/lib/cpf.js"),
  CNPJ: __webpack_require__(/*! ./lib/cnpj */ "./node_modules/cpf_cnpj/lib/cnpj.js")
};


/***/ }),

/***/ "./node_modules/cpf_cnpj/lib/cnpj.js":
/*!*******************************************!*\
  !*** ./node_modules/cpf_cnpj/lib/cnpj.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

;(function(commonjs){
  // Blacklist common values.
  var BLACKLIST = [
    "00000000000000",
    "11111111111111",
    "22222222222222",
    "33333333333333",
    "44444444444444",
    "55555555555555",
    "66666666666666",
    "77777777777777",
    "88888888888888",
    "99999999999999"
  ];

  var STRICT_STRIP_REGEX = /[-\/.]/g;
  var LOOSE_STRIP_REGEX = /[^\d]/g;

  var verifierDigit = function(numbers) {
    var index = 2;
    var reverse = numbers.split("").reduce(function(buffer, number) {
      return [parseInt(number, 10)].concat(buffer);
    }, []);

    var sum = reverse.reduce(function(buffer, number) {
      buffer += number * index;
      index = (index === 9 ? 2 : index + 1);
      return buffer;
    }, 0);

    var mod = sum % 11;
    return (mod < 2 ? 0 : 11 - mod);
  };

  var CNPJ = {};

  CNPJ.format = function(number) {
    return this.strip(number).replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");
  };

  CNPJ.strip = function(number, strict) {
    var regex = strict ? STRICT_STRIP_REGEX : LOOSE_STRIP_REGEX;
    return (number || "").toString().replace(regex, "");
  };

  CNPJ.isValid = function(number, strict) {
    var stripped = this.strip(number, strict);

    // CNPJ must be defined
    if (!stripped) { return false; }

    // CNPJ must have 14 chars
    if (stripped.length !== 14) { return false; }

    // CNPJ can't be blacklisted
    if (BLACKLIST.indexOf(stripped) >= 0) { return false; }

    var numbers = stripped.substr(0, 12);
    numbers += verifierDigit(numbers);
    numbers += verifierDigit(numbers);

    return numbers.substr(-2) === stripped.substr(-2);
  };

  CNPJ.generate = function(formatted) {
    var numbers = "";

    for (var i = 0; i < 12; i++) {
      numbers += Math.floor(Math.random() * 9);
    }

    numbers += verifierDigit(numbers);
    numbers += verifierDigit(numbers);

    return (formatted ? this.format(numbers) : numbers);
  };

  if (commonjs) {
    module.exports = CNPJ;
  } else {
    window.CNPJ = CNPJ;
  }
})(typeof(exports) !== "undefined");


/***/ }),

/***/ "./node_modules/cpf_cnpj/lib/cpf.js":
/*!******************************************!*\
  !*** ./node_modules/cpf_cnpj/lib/cpf.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

;(function(commonjs){
  // Blacklist common values.
  var BLACKLIST = [
    "00000000000",
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
    "12345678909"
  ];

  var STRICT_STRIP_REGEX = /[.-]/g;
  var LOOSE_STRIP_REGEX = /[^\d]/g;

  var verifierDigit = function(numbers) {
    numbers = numbers
      .split("")
      .map(function(number){ return parseInt(number, 10); })
    ;

    var modulus = numbers.length + 1;

    var multiplied = numbers.map(function(number, index) {
      return number * (modulus - index);
    });

    var mod = multiplied.reduce(function(buffer, number){
      return buffer + number;
    }) % 11;

    return (mod < 2 ? 0 : 11 - mod);
  };

  var CPF = {};

  CPF.format = function(number) {
    return this.strip(number).replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
  };

  CPF.strip = function(number, strict) {
    var regex = strict ? STRICT_STRIP_REGEX : LOOSE_STRIP_REGEX;
    return (number || "").toString().replace(regex, "");
  };

  CPF.isValid = function(number, strict) {
    var stripped = this.strip(number, strict);

    // CPF must be defined
    if (!stripped) { return false; }

    // CPF must have 11 chars
    if (stripped.length !== 11) { return false; }

    // CPF can't be blacklisted
    if (BLACKLIST.indexOf(stripped) >= 0) { return false; }

    var numbers = stripped.substr(0, 9);
    numbers += verifierDigit(numbers);
    numbers += verifierDigit(numbers);

    return numbers.substr(-2) === stripped.substr(-2);
  };

  CPF.generate = function(formatted) {
    var numbers = "";

    for (var i = 0; i < 9; i++) {
      numbers += Math.floor(Math.random() * 9);
    }

    numbers += verifierDigit(numbers);
    numbers += verifierDigit(numbers);

    return (formatted ? this.format(numbers) : numbers);
  };

  if (commonjs) {
    module.exports = CPF;
  } else {
    window.CPF = CPF;
  }
})(typeof(exports) !== "undefined");


/***/ }),

/***/ "./node_modules/ngx-currency/index.js":
/*!********************************************!*\
  !*** ./node_modules/ngx-currency/index.js ***!
  \********************************************/
/*! exports provided: CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR, CurrencyMaskDirective, NgxCurrencyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_currency_mask_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/currency-mask.directive */ "./node_modules/ngx-currency/src/currency-mask.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR", function() { return _src_currency_mask_directive__WEBPACK_IMPORTED_MODULE_0__["CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrencyMaskDirective", function() { return _src_currency_mask_directive__WEBPACK_IMPORTED_MODULE_0__["CurrencyMaskDirective"]; });

/* harmony import */ var _src_currency_mask_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/currency-mask.module */ "./node_modules/ngx-currency/src/currency-mask.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxCurrencyModule", function() { return _src_currency_mask_module__WEBPACK_IMPORTED_MODULE_1__["NgxCurrencyModule"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-currency/src/currency-mask.config.js":
/*!***************************************************************!*\
  !*** ./node_modules/ngx-currency/src/currency-mask.config.js ***!
  \***************************************************************/
/*! exports provided: CURRENCY_MASK_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENCY_MASK_CONFIG", function() { return CURRENCY_MASK_CONFIG; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var CURRENCY_MASK_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("currency.mask.config");
//# sourceMappingURL=currency-mask.config.js.map

/***/ }),

/***/ "./node_modules/ngx-currency/src/currency-mask.directive.js":
/*!******************************************************************!*\
  !*** ./node_modules/ngx-currency/src/currency-mask.directive.js ***!
  \******************************************************************/
/*! exports provided: CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR, CurrencyMaskDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR", function() { return CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyMaskDirective", function() { return CurrencyMaskDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _currency_mask_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currency-mask.config */ "./node_modules/ngx-currency/src/currency-mask.config.js");
/* harmony import */ var _input_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input.handler */ "./node_modules/ngx-currency/src/input.handler.js");




var CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return CurrencyMaskDirective; }),
    multi: true
};
var CurrencyMaskDirective = (function () {
    function CurrencyMaskDirective(currencyMaskConfig, elementRef, keyValueDiffers) {
        this.currencyMaskConfig = currencyMaskConfig;
        this.elementRef = elementRef;
        this.keyValueDiffers = keyValueDiffers;
        this.options = {};
        this.optionsTemplate = {
            align: "right",
            allowNegative: true,
            allowZero: true,
            decimal: ".",
            precision: 2,
            prefix: "$ ",
            suffix: "",
            thousands: ","
        };
        if (currencyMaskConfig) {
            this.optionsTemplate = currencyMaskConfig;
        }
        this.keyValueDiffer = keyValueDiffers.find({}).create(null);
    }
    CurrencyMaskDirective.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.style.textAlign = this.options.align ? this.options.align : this.optionsTemplate.align;
    };
    CurrencyMaskDirective.prototype.ngDoCheck = function () {
        if (this.keyValueDiffer.diff(this.options)) {
            this.elementRef.nativeElement.style.textAlign = this.options.align ? this.options.align : this.optionsTemplate.align;
            this.inputHandler.updateOptions(Object.assign({}, this.optionsTemplate, this.options));
        }
    };
    CurrencyMaskDirective.prototype.ngOnInit = function () {
        this.inputHandler = new _input_handler__WEBPACK_IMPORTED_MODULE_3__["InputHandler"](this.elementRef.nativeElement, Object.assign({}, this.optionsTemplate, this.options));
    };
    CurrencyMaskDirective.prototype.handleBlur = function (event) {
        this.inputHandler.getOnModelTouched().apply(event);
    };
    CurrencyMaskDirective.prototype.handleCut = function (event) {
        if (!this.isChromeAndroid()) {
            this.inputHandler.handleCut(event);
        }
    };
    CurrencyMaskDirective.prototype.handleInput = function (event) {
        if (this.isChromeAndroid()) {
            this.inputHandler.handleInput(event);
        }
    };
    CurrencyMaskDirective.prototype.handleKeydown = function (event) {
        if (!this.isChromeAndroid()) {
            this.inputHandler.handleKeydown(event);
        }
    };
    CurrencyMaskDirective.prototype.handleKeypress = function (event) {
        if (!this.isChromeAndroid()) {
            this.inputHandler.handleKeypress(event);
        }
    };
    CurrencyMaskDirective.prototype.handlePaste = function (event) {
        if (!this.isChromeAndroid()) {
            this.inputHandler.handlePaste(event);
        }
    };
    CurrencyMaskDirective.prototype.isChromeAndroid = function () {
        return /chrome/i.test(navigator.userAgent) && /android/i.test(navigator.userAgent);
    };
    CurrencyMaskDirective.prototype.registerOnChange = function (callbackFunction) {
        this.inputHandler.setOnModelChange(callbackFunction);
    };
    CurrencyMaskDirective.prototype.registerOnTouched = function (callbackFunction) {
        this.inputHandler.setOnModelTouched(callbackFunction);
    };
    CurrencyMaskDirective.prototype.setDisabledState = function (value) {
        this.elementRef.nativeElement.disabled = value;
    };
    CurrencyMaskDirective.prototype.writeValue = function (value) {
        this.inputHandler.setValue(value);
    };
    return CurrencyMaskDirective;
}());

CurrencyMaskDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: "[currencyMask]",
                providers: [CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
CurrencyMaskDirective.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_currency_mask_config__WEBPACK_IMPORTED_MODULE_2__["CURRENCY_MASK_CONFIG"],] },] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], },
]; };
CurrencyMaskDirective.propDecorators = {
    'options': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'handleBlur': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ["blur", ["$event"],] },],
    'handleCut': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ["cut", ["$event"],] },],
    'handleInput': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ["input", ["$event"],] },],
    'handleKeydown': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ["keydown", ["$event"],] },],
    'handleKeypress': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ["keypress", ["$event"],] },],
    'handlePaste': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ["paste", ["$event"],] },],
};
//# sourceMappingURL=currency-mask.directive.js.map

/***/ }),

/***/ "./node_modules/ngx-currency/src/currency-mask.module.js":
/*!***************************************************************!*\
  !*** ./node_modules/ngx-currency/src/currency-mask.module.js ***!
  \***************************************************************/
/*! exports provided: NgxCurrencyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxCurrencyModule", function() { return NgxCurrencyModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _currency_mask_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./currency-mask.directive */ "./node_modules/ngx-currency/src/currency-mask.directive.js");




var NgxCurrencyModule = (function () {
    function NgxCurrencyModule() {
    }
    return NgxCurrencyModule;
}());

NgxCurrencyModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
                ],
                declarations: [
                    _currency_mask_directive__WEBPACK_IMPORTED_MODULE_3__["CurrencyMaskDirective"]
                ],
                exports: [
                    _currency_mask_directive__WEBPACK_IMPORTED_MODULE_3__["CurrencyMaskDirective"]
                ]
            },] },
];
/** @nocollapse */
NgxCurrencyModule.ctorParameters = function () { return []; };
//# sourceMappingURL=currency-mask.module.js.map

/***/ }),

/***/ "./node_modules/ngx-currency/src/input.handler.js":
/*!********************************************************!*\
  !*** ./node_modules/ngx-currency/src/input.handler.js ***!
  \********************************************************/
/*! exports provided: InputHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputHandler", function() { return InputHandler; });
/* harmony import */ var _input_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input.service */ "./node_modules/ngx-currency/src/input.service.js");

var InputHandler = (function () {
    function InputHandler(htmlInputElement, options) {
        this.inputService = new _input_service__WEBPACK_IMPORTED_MODULE_0__["InputService"](htmlInputElement, options);
    }
    InputHandler.prototype.handleCut = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.inputService.updateFieldValue();
            _this.setValue(_this.inputService.value);
            _this.onModelChange(_this.inputService.value);
        }, 0);
    };
    InputHandler.prototype.handleInput = function (event) {
        var keyCode = this.inputService.rawValue.charCodeAt(this.inputService.rawValue.length - 1);
        var rawValueLength = this.inputService.rawValue.length;
        var rawValueSelectionEnd = this.inputService.inputSelection.selectionEnd;
        var storedRawValueLength = this.inputService.storedRawValue.length;
        this.inputService.rawValue = this.inputService.storedRawValue;
        if (rawValueLength != rawValueSelectionEnd || Math.abs(rawValueLength - storedRawValueLength) != 1) {
            this.setCursorPosition(event);
            return;
        }
        if (rawValueLength < storedRawValueLength) {
            this.inputService.removeNumber(8);
        }
        if (rawValueLength > storedRawValueLength) {
            switch (keyCode) {
                case 43:
                    this.inputService.changeToPositive();
                    break;
                case 45:
                    this.inputService.changeToNegative();
                    break;
                default:
                    if (!this.inputService.canInputMoreNumbers) {
                        return;
                    }
                    this.inputService.addNumber(keyCode);
            }
        }
        this.setCursorPosition(event);
        this.onModelChange(this.inputService.value);
    };
    InputHandler.prototype.handleKeydown = function (event) {
        var keyCode = event.which || event.charCode || event.keyCode;
        if (keyCode == 8 || keyCode == 46 || keyCode == 63272) {
            event.preventDefault();
            var selectionRangeLength = Math.abs(this.inputService.inputSelection.selectionEnd - this.inputService.inputSelection.selectionStart);
            if (selectionRangeLength == 0) {
                this.inputService.removeNumber(keyCode);
                this.onModelChange(this.inputService.value);
            }
            if (selectionRangeLength == this.inputService.rawValue.length) {
                this.setValue(0);
                this.onModelChange(this.inputService.value);
            }
        }
    };
    InputHandler.prototype.handleKeypress = function (event) {
        var keyCode = event.which || event.charCode || event.keyCode;
        if (keyCode === 97 && event.ctrlKey) {
            return;
        }
        switch (keyCode) {
            case undefined:
            case 9:
            case 13:
            case 37:
            case 39:
                return;
            case 43:
                this.inputService.changeToPositive();
                break;
            case 45:
                this.inputService.changeToNegative();
                break;
            default:
                if (this.inputService.canInputMoreNumbers) {
                    var selectionRangeLength = Math.abs(this.inputService.inputSelection.selectionEnd - this.inputService.inputSelection.selectionStart);
                    if (selectionRangeLength == this.inputService.rawValue.length) {
                        this.setValue(0);
                    }
                    this.inputService.addNumber(keyCode);
                }
        }
        event.preventDefault();
        this.onModelChange(this.inputService.value);
    };
    InputHandler.prototype.handlePaste = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.inputService.updateFieldValue();
            _this.setValue(_this.inputService.value);
            _this.onModelChange(_this.inputService.value);
        }, 1);
    };
    InputHandler.prototype.updateOptions = function (options) {
        this.inputService.updateOptions(options);
    };
    InputHandler.prototype.getOnModelChange = function () {
        return this.onModelChange;
    };
    InputHandler.prototype.setOnModelChange = function (callbackFunction) {
        this.onModelChange = callbackFunction;
    };
    InputHandler.prototype.getOnModelTouched = function () {
        return this.onModelTouched;
    };
    InputHandler.prototype.setOnModelTouched = function (callbackFunction) {
        this.onModelTouched = callbackFunction;
    };
    InputHandler.prototype.setValue = function (value) {
        this.inputService.value = value;
    };
    InputHandler.prototype.setCursorPosition = function (event) {
        setTimeout(function () {
            event.target.setSelectionRange(event.target.value.length, event.target.value.length);
        }, 0);
    };
    return InputHandler;
}());

//# sourceMappingURL=input.handler.js.map

/***/ }),

/***/ "./node_modules/ngx-currency/src/input.manager.js":
/*!********************************************************!*\
  !*** ./node_modules/ngx-currency/src/input.manager.js ***!
  \********************************************************/
/*! exports provided: InputManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputManager", function() { return InputManager; });
var InputManager = (function () {
    function InputManager(htmlInputElement) {
        this.htmlInputElement = htmlInputElement;
    }
    InputManager.prototype.setCursorAt = function (position) {
        if (this.htmlInputElement.setSelectionRange) {
            this.htmlInputElement.focus();
            this.htmlInputElement.setSelectionRange(position, position);
        }
        else if (this.htmlInputElement.createTextRange) {
            var textRange = this.htmlInputElement.createTextRange();
            textRange.collapse(true);
            textRange.moveEnd("character", position);
            textRange.moveStart("character", position);
            textRange.select();
        }
    };
    InputManager.prototype.updateValueAndCursor = function (newRawValue, oldLength, selectionStart) {
        this.rawValue = newRawValue;
        var newLength = newRawValue.length;
        selectionStart = selectionStart - (oldLength - newLength);
        this.setCursorAt(selectionStart);
    };
    Object.defineProperty(InputManager.prototype, "canInputMoreNumbers", {
        get: function () {
            var haventReachedMaxLength = !(this.rawValue.length >= this.htmlInputElement.maxLength && this.htmlInputElement.maxLength >= 0);
            var selectionStart = this.inputSelection.selectionStart;
            var selectionEnd = this.inputSelection.selectionEnd;
            var haveNumberSelected = (selectionStart != selectionEnd && this.htmlInputElement.value.substring(selectionStart, selectionEnd).match(/\d/)) ? true : false;
            var startWithZero = (this.htmlInputElement.value.substring(0, 1) == "0");
            return haventReachedMaxLength || haveNumberSelected || startWithZero;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputManager.prototype, "inputSelection", {
        get: function () {
            var selectionStart = 0;
            var selectionEnd = 0;
            if (typeof this.htmlInputElement.selectionStart == "number" && typeof this.htmlInputElement.selectionEnd == "number") {
                selectionStart = this.htmlInputElement.selectionStart;
                selectionEnd = this.htmlInputElement.selectionEnd;
            }
            else {
                var range = document.selection.createRange();
                if (range && range.parentElement() == this.htmlInputElement) {
                    var lenght = this.htmlInputElement.value.length;
                    var normalizedValue = this.htmlInputElement.value.replace(/\r\n/g, "\n");
                    var startRange = this.htmlInputElement.createTextRange();
                    startRange.moveToBookmark(range.getBookmark());
                    var endRange = this.htmlInputElement.createTextRange();
                    endRange.collapse(false);
                    if (startRange.compareEndPoints("StartToEnd", endRange) > -1) {
                        selectionStart = selectionEnd = lenght;
                    }
                    else {
                        selectionStart = -startRange.moveStart("character", -lenght);
                        selectionStart += normalizedValue.slice(0, selectionStart).split("\n").length - 1;
                        if (startRange.compareEndPoints("EndToEnd", endRange) > -1) {
                            selectionEnd = lenght;
                        }
                        else {
                            selectionEnd = -startRange.moveEnd("character", -lenght);
                            selectionEnd += normalizedValue.slice(0, selectionEnd).split("\n").length - 1;
                        }
                    }
                }
            }
            return {
                selectionStart: selectionStart,
                selectionEnd: selectionEnd
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputManager.prototype, "rawValue", {
        get: function () {
            return this.htmlInputElement && this.htmlInputElement.value;
        },
        set: function (value) {
            this._storedRawValue = value;
            if (this.htmlInputElement) {
                this.htmlInputElement.value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputManager.prototype, "storedRawValue", {
        get: function () {
            return this._storedRawValue;
        },
        enumerable: true,
        configurable: true
    });
    return InputManager;
}());

//# sourceMappingURL=input.manager.js.map

/***/ }),

/***/ "./node_modules/ngx-currency/src/input.service.js":
/*!********************************************************!*\
  !*** ./node_modules/ngx-currency/src/input.service.js ***!
  \********************************************************/
/*! exports provided: InputService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputService", function() { return InputService; });
/* harmony import */ var _input_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input.manager */ "./node_modules/ngx-currency/src/input.manager.js");

var InputService = (function () {
    function InputService(htmlInputElement, options) {
        this.htmlInputElement = htmlInputElement;
        this.options = options;
        this.inputManager = new _input_manager__WEBPACK_IMPORTED_MODULE_0__["InputManager"](htmlInputElement);
    }
    InputService.prototype.addNumber = function (keyCode) {
        if (!this.rawValue) {
            this.rawValue = this.applyMask(false, "0");
        }
        var keyChar = String.fromCharCode(keyCode);
        var selectionStart = this.inputSelection.selectionStart;
        var selectionEnd = this.inputSelection.selectionEnd;
        this.rawValue = this.rawValue.substring(0, selectionStart) + keyChar + this.rawValue.substring(selectionEnd, this.rawValue.length);
        this.updateFieldValue(selectionStart + 1);
    };
    InputService.prototype.applyMask = function (isNumber, rawValue) {
        var _a = this.options, allowNegative = _a.allowNegative, decimal = _a.decimal, precision = _a.precision, prefix = _a.prefix, suffix = _a.suffix, thousands = _a.thousands;
        rawValue = isNumber ? new Number(rawValue).toFixed(precision) : rawValue;
        var onlyNumbers = rawValue.replace(/[^0-9]/g, "");
        if (!onlyNumbers) {
            return "";
        }
        var integerPart = onlyNumbers.slice(0, onlyNumbers.length - precision).replace(/^0*/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, thousands);
        if (integerPart == "") {
            integerPart = "0";
        }
        var newRawValue = integerPart;
        var decimalPart = onlyNumbers.slice(onlyNumbers.length - precision);
        if (precision > 0) {
            newRawValue += decimal + decimalPart;
        }
        var isZero = parseInt(integerPart) == 0 && (parseInt(decimalPart) == 0 || decimalPart == "");
        var operator = (rawValue.indexOf("-") > -1 && allowNegative && !isZero) ? "-" : "";
        return operator + prefix + newRawValue + suffix;
    };
    InputService.prototype.clearMask = function (rawValue) {
        var value = (rawValue || "0").replace(this.options.prefix, "").replace(this.options.suffix, "");
        if (this.options.thousands) {
            value = value.replace(new RegExp("\\" + this.options.thousands, "g"), "");
        }
        if (this.options.decimal) {
            value = value.replace(this.options.decimal, ".");
        }
        return parseFloat(value);
    };
    InputService.prototype.changeToNegative = function () {
        if (this.options.allowNegative && this.rawValue != "" && this.rawValue.charAt(0) != "-" && this.value != 0) {
            this.rawValue = "-" + this.rawValue;
        }
    };
    InputService.prototype.changeToPositive = function () {
        this.rawValue = this.rawValue.replace("-", "");
    };
    InputService.prototype.removeNumber = function (keyCode) {
        var selectionEnd = this.inputSelection.selectionEnd;
        var selectionStart = this.inputSelection.selectionStart;
        if (selectionStart > this.rawValue.length - this.options.suffix.length) {
            selectionEnd = this.rawValue.length - this.options.suffix.length;
            selectionStart = this.rawValue.length - this.options.suffix.length;
        }
        selectionEnd = keyCode == 46 || keyCode == 63272 ? selectionEnd + 1 : selectionEnd;
        selectionStart = keyCode == 8 ? selectionStart - 1 : selectionStart;
        this.rawValue = this.rawValue.substring(0, selectionStart) + this.rawValue.substring(selectionEnd, this.rawValue.length);
        this.updateFieldValue(selectionStart);
    };
    InputService.prototype.updateFieldValue = function (selectionStart) {
        var newRawValue = this.applyMask(false, this.rawValue || "");
        selectionStart = selectionStart == undefined ? this.rawValue.length : selectionStart;
        this.inputManager.updateValueAndCursor(newRawValue, this.rawValue.length, selectionStart);
    };
    InputService.prototype.updateOptions = function (options) {
        var value = this.value;
        this.options = options;
        this.value = value;
    };
    Object.defineProperty(InputService.prototype, "canInputMoreNumbers", {
        get: function () {
            return this.inputManager.canInputMoreNumbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputService.prototype, "inputSelection", {
        get: function () {
            return this.inputManager.inputSelection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputService.prototype, "rawValue", {
        get: function () {
            return this.inputManager.rawValue;
        },
        set: function (value) {
            this.inputManager.rawValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputService.prototype, "storedRawValue", {
        get: function () {
            return this.inputManager.storedRawValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputService.prototype, "value", {
        get: function () {
            return this.clearMask(this.rawValue);
        },
        set: function (value) {
            this.rawValue = this.applyMask(true, "" + value);
        },
        enumerable: true,
        configurable: true
    });
    return InputService;
}());

//# sourceMappingURL=input.service.js.map

/***/ }),

/***/ "./node_modules/vanilla-masker/lib/vanilla-masker.js":
/*!***********************************************************!*\
  !*** ./node_modules/vanilla-masker/lib/vanilla-masker.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function() {
  var DIGIT = "9",
      ALPHA = "A",
      ALPHANUM = "S",
      BY_PASS_KEYS = [9, 16, 17, 18, 36, 37, 38, 39, 40, 91, 92, 93],
      isAllowedKeyCode = function(keyCode) {
        for (var i = 0, len = BY_PASS_KEYS.length; i < len; i++) {
          if (keyCode == BY_PASS_KEYS[i]) {
            return false;
          }
        }
        return true;
      },
      mergeMoneyOptions = function(opts) {
        opts = opts || {};
        opts = {
          delimiter: opts.delimiter || ".",
          lastOutput: opts.lastOutput,
          precision: opts.hasOwnProperty("precision") ? opts.precision : 2,
          separator: opts.separator || ",",
          showSignal: opts.showSignal,
          suffixUnit: opts.suffixUnit && (" " + opts.suffixUnit.replace(/[\s]/g,'')) || "",
          unit: opts.unit && (opts.unit.replace(/[\s]/g,'') + " ") || "",
          zeroCents: opts.zeroCents
        };
        opts.moneyPrecision = opts.zeroCents ? 0 : opts.precision;
        return opts;
      },
      // Fill wildcards past index in output with placeholder
      addPlaceholdersToOutput = function(output, index, placeholder) {
        for (; index < output.length; index++) {
          if(output[index] === DIGIT || output[index] === ALPHA || output[index] === ALPHANUM) {
            output[index] = placeholder;
          }
        }
        return output;
      }
  ;

  var VanillaMasker = function(elements) {
    this.elements = elements;
  };

  VanillaMasker.prototype.unbindElementToMask = function() {
    for (var i = 0, len = this.elements.length; i < len; i++) {
      this.elements[i].lastOutput = "";
      this.elements[i].onkeyup = false;
      this.elements[i].onkeydown = false;

      if (this.elements[i].value.length) {
        this.elements[i].value = this.elements[i].value.replace(/\D/g, '');
      }
    }
  };

  VanillaMasker.prototype.bindElementToMask = function(maskFunction) {
    var that = this,
        onType = function(e) {
          e = e || window.event;
          var source = e.target || e.srcElement;

          if (isAllowedKeyCode(e.keyCode)) {
            setTimeout(function() {
              that.opts.lastOutput = source.lastOutput;
              source.value = VMasker[maskFunction](source.value, that.opts);
              source.lastOutput = source.value;
              if (source.setSelectionRange && that.opts.suffixUnit) {
                source.setSelectionRange(source.value.length, (source.value.length - that.opts.suffixUnit.length));
              }
            }, 0);
          }
        }
    ;
    for (var i = 0, len = this.elements.length; i < len; i++) {
      this.elements[i].lastOutput = "";
      this.elements[i].onkeyup = onType;
      if (this.elements[i].value.length) {
        this.elements[i].value = VMasker[maskFunction](this.elements[i].value, this.opts);
      }
    }
  };

  VanillaMasker.prototype.maskMoney = function(opts) {
    this.opts = mergeMoneyOptions(opts);
    this.bindElementToMask("toMoney");
  };

  VanillaMasker.prototype.maskNumber = function() {
    this.opts = {};
    this.bindElementToMask("toNumber");
  };
  
  VanillaMasker.prototype.maskAlphaNum = function() {
    this.opts = {};
    this.bindElementToMask("toAlphaNumeric");
  };

  VanillaMasker.prototype.maskPattern = function(pattern) {
    this.opts = {pattern: pattern};
    this.bindElementToMask("toPattern");
  };

  VanillaMasker.prototype.unMask = function() {
    this.unbindElementToMask();
  };

  var VMasker = function(el) {
    if (!el) {
      throw new Error("VanillaMasker: There is no element to bind.");
    }
    var elements = ("length" in el) ? (el.length ? el : []) : [el];
    return new VanillaMasker(elements);
  };

  VMasker.toMoney = function(value, opts) {
    opts = mergeMoneyOptions(opts);
    if (opts.zeroCents) {
      opts.lastOutput = opts.lastOutput || "";
      var zeroMatcher = ("("+ opts.separator +"[0]{0,"+ opts.precision +"})"),
          zeroRegExp = new RegExp(zeroMatcher, "g"),
          digitsLength = value.toString().replace(/[\D]/g, "").length || 0,
          lastDigitLength = opts.lastOutput.toString().replace(/[\D]/g, "").length || 0
      ;
      value = value.toString().replace(zeroRegExp, "");
      if (digitsLength < lastDigitLength) {
        value = value.slice(0, value.length - 1);
      }
    }
    var number = value.toString().replace(/[\D]/g, ""),
        clearDelimiter = new RegExp("^(0|\\"+ opts.delimiter +")"),
        clearSeparator = new RegExp("(\\"+ opts.separator +")$"),
        money = number.substr(0, number.length - opts.moneyPrecision),
        masked = money.substr(0, money.length % 3),
        cents = new Array(opts.precision + 1).join("0")
    ;
    money = money.substr(money.length % 3, money.length);
    for (var i = 0, len = money.length; i < len; i++) {
      if (i % 3 === 0) {
        masked += opts.delimiter;
      }
      masked += money[i];
    }
    masked = masked.replace(clearDelimiter, "");
    masked = masked.length ? masked : "0";
    var signal = "";
    if(opts.showSignal === true) {
      signal = value < 0 || (value.startsWith && value.startsWith('-')) ? "-" :  "";
    }
    if (!opts.zeroCents) {
      var beginCents = number.length - opts.precision,
          centsValue = number.substr(beginCents, opts.precision),
          centsLength = centsValue.length,
          centsSliced = (opts.precision > centsLength) ? opts.precision : centsLength
      ;
      cents = (cents + centsValue).slice(-centsSliced);
    }
    var output = opts.unit + signal + masked + opts.separator + cents;
    return output.replace(clearSeparator, "") + opts.suffixUnit;
  };

  VMasker.toPattern = function(value, opts) {
    var pattern = (typeof opts === 'object' ? opts.pattern : opts),
        patternChars = pattern.replace(/\W/g, ''),
        output = pattern.split(""),
        values = value.toString().replace(/\W/g, ""),
        charsValues = values.replace(/\W/g, ''),
        index = 0,
        i,
        outputLength = output.length,
        placeholder = (typeof opts === 'object' ? opts.placeholder : undefined)
    ;
    
    for (i = 0; i < outputLength; i++) {
      // Reached the end of input
      if (index >= values.length) {
        if (patternChars.length == charsValues.length) {
          return output.join("");
        }
        else if ((placeholder !== undefined) && (patternChars.length > charsValues.length)) {
          return addPlaceholdersToOutput(output, i, placeholder).join("");
        }
        else {
          break;
        }
      }
      // Remaining chars in input
      else{
        if ((output[i] === DIGIT && values[index].match(/[0-9]/)) ||
            (output[i] === ALPHA && values[index].match(/[a-zA-Z]/)) ||
            (output[i] === ALPHANUM && values[index].match(/[0-9a-zA-Z]/))) {
          output[i] = values[index++];
        } else if (output[i] === DIGIT || output[i] === ALPHA || output[i] === ALPHANUM) {
          if(placeholder !== undefined){
            return addPlaceholdersToOutput(output, i, placeholder).join("");
          }
          else{
            return output.slice(0, i).join("");
          }
        }
      }
    }
    return output.join("").substr(0, i);
  };

  VMasker.toNumber = function(value) {
    return value.toString().replace(/(?!^-)[^0-9]/g, "");
  };
  
  VMasker.toAlphaNumeric = function(value) {
    return value.toString().replace(/[^a-z0-9 ]+/i, "");
  };

  return VMasker;
}));


/***/ }),

/***/ "./src/app/core/components/sidebar/sidebar-container.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/core/components/sidebar/sidebar-container.service.ts ***!
  \**********************************************************************/
/*! exports provided: SidebarContainerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarContainerService", function() { return SidebarContainerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarContainerService = /** @class */ (function () {
    function SidebarContainerService() {
        this.sidebarOptionsPortalSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        this._isClosed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
    }
    Object.defineProperty(SidebarContainerService.prototype, "sidebarOptionsPortal$", {
        get: function () {
            return this.sidebarOptionsPortalSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    SidebarContainerService.prototype.open = function (portal) {
        this._isClosed.next(false);
        this.sidebarOptionsPortalSubject.next(portal);
    };
    SidebarContainerService.prototype.close = function () {
        this._isClosed.next(true);
        this.sidebarOptionsPortalSubject.next(undefined);
    };
    Object.defineProperty(SidebarContainerService.prototype, "isClosed$", {
        get: function () {
            return this._isClosed.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    SidebarContainerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [])
    ], SidebarContainerService);
    return SidebarContainerService;
}());



/***/ }),

/***/ "./src/app/core/directives/directives.module.ts":
/*!******************************************************!*\
  !*** ./src/app/core/directives/directives.module.ts ***!
  \******************************************************/
/*! exports provided: DirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivesModule", function() { return DirectivesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mascara__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mascara */ "./src/app/core/directives/mascara.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/***************************************************************************************************
*  Módulo de diretivas
*  @Aplicativo Fiscalização WEB
*  @Autor willian.maruno
***************************************************************************************************/
var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [],
            declarations: [_mascara__WEBPACK_IMPORTED_MODULE_1__["MascaraDirective"]],
            exports: [_mascara__WEBPACK_IMPORTED_MODULE_1__["MascaraDirective"]]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());



/***/ }),

/***/ "./src/app/core/directives/mascara.ts":
/*!********************************************!*\
  !*** ./src/app/core/directives/mascara.ts ***!
  \********************************************/
/*! exports provided: MascaraDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MascaraDirective", function() { return MascaraDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _util_cpf_cnpj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/cpf-cnpj */ "./src/app/core/util/cpf-cnpj.ts");
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



/***************************************************************************************************
*  Diretiva de máscaras
*  @Aplicativo Fiscalização WEB
*  @Autor willian.maruno
***************************************************************************************************/
var MascaraDirective = /** @class */ (function () {
    /***************************************************************************************************
     *          Construtor de pobre
     ***************************************************************************************************/
    function MascaraDirective(model, tipo) {
        this.model = model;
        this.tipo = tipo;
    }
    /***************************************************************************************************
     *          Evento mapeado
     ***************************************************************************************************/
    MascaraDirective.prototype.onInputChange = function (event) {
        var valorLimpo = event.target.value.replace(/[^\d]+/g, '');
        switch (this.tipo) {
            case "CPF":
                this.cpf(valorLimpo);
                return;
            case "CNPJ":
                this.cnpj(valorLimpo);
                return;
            case "CPF-CNPJ":
                this.cpfCnpj(valorLimpo);
                return;
            case "MONETARIO":
                this.monetario(valorLimpo);
                return;
            case "MONETARIO-NULL":
                this.monetarioNull(valorLimpo);
                return;
            case "INTEIRO":
                this.model.update.emit(valorLimpo);
                return;
            case "TELEFONE":
                this.telefone(valorLimpo);
                return;
            default:
                return;
        }
    };
    /***************************************************************************************************
     * formata CPF
     ***************************************************************************************************/
    MascaraDirective.prototype.cpf = function (valorLimpo) {
        this.model.update.emit(_util_cpf_cnpj__WEBPACK_IMPORTED_MODULE_2__["CpfCnpj"].formatarCPFIncompleto(valorLimpo));
    };
    /***************************************************************************************************
     * formata CNPJ
     ***************************************************************************************************/
    MascaraDirective.prototype.cnpj = function (valorLimpo) {
        this.model.update.emit(_util_cpf_cnpj__WEBPACK_IMPORTED_MODULE_2__["CpfCnpj"].formatarCNPJIncompleto(valorLimpo));
    };
    /***************************************************************************************************
     * formata CPF/CNPJ
     ***************************************************************************************************/
    MascaraDirective.prototype.cpfCnpj = function (valorLimpo) {
        if (valorLimpo.length <= 11) {
            this.model.update.emit(_util_cpf_cnpj__WEBPACK_IMPORTED_MODULE_2__["CpfCnpj"].formatarCPFIncompleto(valorLimpo));
        }
        else {
            this.model.update.emit(_util_cpf_cnpj__WEBPACK_IMPORTED_MODULE_2__["CpfCnpj"].formatarCNPJIncompleto(valorLimpo));
        }
    };
    /***************************************************************************************************
     * formata Telefone
     ***************************************************************************************************/
    MascaraDirective.prototype.telefone = function (valorLimpo) {
        var telefone = valorLimpo.replace(/(\d{2})(\d{4,5})(\d{4})$/, "($1) $2-$3");
        this.model.update.emit(telefone);
    };
    /***************************************************************************************************
     * formata Moeda
     ***************************************************************************************************/
    MascaraDirective.prototype.monetario = function (valorLimpo) {
        if (!valorLimpo) {
            this.model.update.emit(valorLimpo);
            return;
        }
        var v = valorLimpo + 'e-2';
        var numero = Number(v);
        v = numero.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
        this.model.update.emit(v);
    };
    /***************************************************************************************************
     * formata Moeda e/ou nulo
     ***************************************************************************************************/
    MascaraDirective.prototype.monetarioNull = function (valorLimpo) {
        if (!valorLimpo) {
            this.model.update.emit(valorLimpo);
            return;
        }
        var v = valorLimpo + 'e-2';
        var numero = Number(v);
        if (numero > 0) {
            v = numero.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
        }
        else {
            v = '';
        }
        this.model.update.emit(v);
        return;
    };
    MascaraDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[mascara]',
            host: { '(keyup)': 'onInputChange($event)' },
            providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"])('mascara')),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], String])
    ], MascaraDirective);
    return MascaraDirective;
}());



/***/ })

}]);
//# sourceMappingURL=funcionalidades-lancamentos-lancamentos-module~funcionalidades-usuarios-usuarios-module.js.map