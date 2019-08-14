webpackJsonp([0],{

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtualizarEnderecoModule", function() { return AtualizarEnderecoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__atualizar_endereco__ = __webpack_require__(400);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AtualizarEnderecoModule = /** @class */ (function () {
    function AtualizarEnderecoModule() {
    }
    AtualizarEnderecoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__atualizar_endereco__["a" /* AtualizarEnderecoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__atualizar_endereco__["a" /* AtualizarEnderecoPage */]),
                __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_4__atualizar_endereco__["a" /* AtualizarEnderecoPage */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [],
        })
    ], AtualizarEnderecoModule);
    return AtualizarEnderecoModule;
}());

//# sourceMappingURL=atualizar-endereco.module.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BrMaskModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrMaskerIonic3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(17);


var BrMaskModel = (function () {
    function BrMaskModel() {
        this.type = 'alfa';
        this.decimal = 2;
        this.decimalCaracter = ",";
        this.userCaracters = false;
        this.numberAndTousand = false;
    }
    return BrMaskModel;
}());

var BrMaskerIonic3 = (function () {
    function BrMaskerIonic3(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.brmasker = new BrMaskModel();
    }
    BrMaskerIonic3.prototype.inputKeyup = function (event) {
        var value = this.returnValue(event.target.value);
        this.writeValue(value);
        event.target.value = value;
    };
    BrMaskerIonic3.prototype.inputOnblur = function (event) {
        var value = this.returnValue(event.value);
        this.writeValue(value);
        event.value = value;
    };
    BrMaskerIonic3.prototype.inputFocus = function (event) {
        var value = this.returnValue(event.value);
        this.writeValue(value);
        event.value = value;
    };
    BrMaskerIonic3.prototype.ngOnInit = function () {
        if (!this.brmasker.type) {
            this.brmasker.type = 'all';
        }
        if (!this.brmasker.decimal) {
            this.brmasker.decimal = 2;
        }
        if (!this.brmasker.decimalCaracter) {
            this.brmasker.decimalCaracter = ',';
        }
    };
    BrMaskerIonic3.prototype.writeValue = function (fn) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', fn);
    };
    BrMaskerIonic3.prototype.registerOnChange = function (fn) {
        return;
    };
    BrMaskerIonic3.prototype.registerOnTouched = function (fn) {
        return;
    };
    BrMaskerIonic3.prototype.setDisabledState = function (isDisabled) {
        if (isDisabled) {
            this._renderer.setElementAttribute(this._elementRef.nativeElement, 'disabled', 'true');
        }
        else {
            this._renderer.setElementAttribute(this._elementRef.nativeElement, 'disabled', 'false');
        }
    };
    BrMaskerIonic3.prototype.writeCreateValue = function (value, config) {
        if (config === void 0) { config = new BrMaskModel(); }
        if (value && config.phone) {
            return value.replace(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/gi, '$1 ($2) $3-$4');
        }
        if (value && config.money) {
            return this.writeValueMoney(value, config);
        }
        if (value && config.person) {
            return this.writeValuePerson(value);
        }
        if (value && config.percent) {
            return this.writeValuePercent(value);
        }
        if (value && config.mask) {
            this.brmasker.mask = config.mask;
            if (config.len) {
                this.brmasker.len = config.len;
            }
            return this.onInput(value);
        }
        return value;
    };
    BrMaskerIonic3.prototype.writeValuePercent = function (value) {
        value.replace(/\D/gi, '');
        value.replace(/%/gi, '');
        return value.replace(/([0-9]{0})$/gi, '%$1');
    };
    BrMaskerIonic3.prototype.writeValuePerson = function (value) {
        if (value.length <= 11) {
            return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gi, '\$1.\$2.\$3\-\$4');
        }
        else {
            return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/gi, '\$1.\$2.\$3\/\$4\-\$5');
        }
    };
    BrMaskerIonic3.prototype.writeValueMoney = function (value, config) {
        if (config === void 0) { config = new BrMaskModel(); }
        return this.moneyMask(value, config);
    };
    BrMaskerIonic3.prototype.returnValue = function (value) {
        if (!this.brmasker.mask) {
            this.brmasker.mask = '';
        }
        if (value) {
            var v = value;
            if (this.brmasker.type == 'alfa') {
                v = v.replace(/\d/gi, '');
            }
            if (this.brmasker.type == 'num') {
                v = v.replace(/\D/gi, '');
            }
            if (this.brmasker.money) {
                return this.moneyMask(this.onInput(v), this.brmasker);
            }
            if (this.brmasker.phone) {
                return this.phoneMask(v);
            }
            if (this.brmasker.phoneNotDDD) {
                return this.phoneNotDDDMask(v);
            }
            if (this.brmasker.person) {
                return this.peapollMask(v);
            }
            if (this.brmasker.percent) {
                return this.percentMask(v);
            }
            if (this.brmasker.numberAndTousand) {
                return this.thousand(v);
            }
            if (this.brmasker.userCaracters) {
                return this.usingSpecialCharacters(v, this.brmasker.mask, this.brmasker.len);
            }
            return this.onInput(v);
        }
        else {
            return '';
        }
    };
    BrMaskerIonic3.prototype.percentMask = function (v) {
        var tmp = v;
        tmp = tmp.replace(/\D/gi, '');
        tmp = tmp.replace(/%/gi, '');
        tmp = tmp.replace(/([0-9]{0})$/gi, '%$1');
        return tmp;
    };
    BrMaskerIonic3.prototype.phoneMask = function (v) {
        var n = v;
        if (n.length > 14) {
            this.brmasker.len = 15;
            this.brmasker.mask = '(99) 99999-9999';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{2})(\d)/gi, '$1 $2');
            n = n.replace(/(\d{5})(\d)/gi, '$1-$2');
            n = n.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        else {
            this.brmasker.len = 14;
            this.brmasker.mask = '(99) 9999-9999';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{2})(\d)/gi, '$1 $2');
            n = n.replace(/(\d{4})(\d)/gi, '$1-$2');
            n = n.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        return this.onInput(n);
    };
    BrMaskerIonic3.prototype.phoneNotDDDMask = function (v) {
        var n = v;
        if (n.length > 9) {
            this.brmasker.len = 10;
            this.brmasker.mask = '99999-9999';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{5})(\d)/gi, '$1-$2');
            n = n.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        else {
            this.brmasker.len = 9;
            this.brmasker.mask = '9999-9999';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{4})(\d)/gi, '$1-$2');
            n = n.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        return this.onInput(n);
    };
    BrMaskerIonic3.prototype.peapollMask = function (v) {
        var n = v;
        if (n.length > 14) {
            this.brmasker.len = 18;
            this.brmasker.mask = '99.999.999/9999-99';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{2})(\d)/gi, '$1.$2');
            n = n.replace(/(\d{3})(\d)/gi, '$1.$2');
            n = n.replace(/(\d{3})(\d)/gi, '$1/$2');
            n = n.replace(/(\d{4})(\d{1,4})$/gi, '$1-$2');
            n = n.replace(/(\d{2})(\d{1,2})$/gi, '$1$2');
        }
        else {
            this.brmasker.len = 14;
            this.brmasker.mask = '999.999.999-99';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{3})(\d)/gi, '$1.$2');
            n = n.replace(/(\d{3})(\d)/gi, '$1.$2');
            n = n.replace(/(\d{3})(\d{1,2})$/gi, '$1-$2');
        }
        return this.onInput(n);
    };
    BrMaskerIonic3.prototype.moneyMask = function (value, config) {
        var decimal = config.decimal || this.brmasker.decimal;
        value = value
            .replace(/\D/gi, '')
            .replace(new RegExp("([0-9]{" + decimal + "})$", "g"), config.decimalCaracter + '$1');
        if (value.length === decimal + 1) {
            return "0" + value; // leading 0 so we're not left with something weird like ",50"
        }
        else if (value.length > decimal + 2 && value.charAt(0) === '0') {
            return value.substr(1); // remove leading 0 when we don't need it anymore
        }
        if (config.thousand && value.length > (Number(4) + Number(config.decimal))) {
            value = value.replace(new RegExp("([0-9]{3})" + config.decimalCaracter + "([0-9]{" + config.decimal + "}$)", "g"), config.thousand + "$1" + config.decimalCaracter + "$2");
        }
        if (config.thousand && value.length > (Number(8) + Number(config.decimal))) {
            value = value.replace(new RegExp("([0-9]{3})" + config.thousand + "([0-9]{3})" + config.decimalCaracter + "([0-9]{" + config.decimal + "}$)", "g"), config.thousand + "$1" + config.thousand + "$2" + config.decimalCaracter + "$3");
        }
        return value;
    };
    BrMaskerIonic3.prototype.onInput = function (value) {
        var ret = this.formatField(value, this.brmasker.mask, this.brmasker.len);
        return ret;
        // if (ret) {
        //   this.element.nativeElement.value = ret;
        // }
    };
    BrMaskerIonic3.prototype.thousand = function (value) {
        var val = value.replace(/\D/gi, '');
        var reverse = val.toString().split('').reverse().join('');
        var thousands = reverse.match(/\d{1,3}/g);
        if (thousands) {
            return thousands.join("" + (this.brmasker.thousand || '.')).split('').reverse().join('');
        }
        return val;
    };
    BrMaskerIonic3.prototype.usingSpecialCharacters = function (campo, Mascara, tamanho) {
        if (!tamanho) {
            tamanho = 99999999999;
        }
        var boleanoMascara;
        var exp = /\-|\.|\,| /gi;
        var campoSoNumeros = campo.toString().replace(exp, '');
        var posicaoCampo = 0;
        var NovoValorCampo = '';
        var TamanhoMascara = campoSoNumeros.length;
        for (var i = 0; i < TamanhoMascara; i++) {
            if (i < tamanho) {
                boleanoMascara = ((Mascara.charAt(i) === '-') || (Mascara.charAt(i) === '.') || (Mascara.charAt(i) === ','));
                if (boleanoMascara) {
                    NovoValorCampo += Mascara.charAt(i);
                    TamanhoMascara++;
                }
                else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
    };
    BrMaskerIonic3.prototype.formatField = function (campo, Mascara, tamanho) {
        if (!tamanho) {
            tamanho = 99999999999;
        }
        var boleanoMascara;
        var exp = /\-|\.|\/|\(|\)|\,|\*|\+|\@|\#|\$|\&|\%|\:| /gi;
        var campoSoNumeros = campo.toString().replace(exp, '');
        var posicaoCampo = 0;
        var NovoValorCampo = '';
        var TamanhoMascara = campoSoNumeros.length;
        for (var i = 0; i < TamanhoMascara; i++) {
            if (i < tamanho) {
                boleanoMascara = ((Mascara.charAt(i) === '-') || (Mascara.charAt(i) === '.') || (Mascara.charAt(i) === '/'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '(') || (Mascara.charAt(i) === ')') || (Mascara.charAt(i) === ' '));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === ',') || (Mascara.charAt(i) === '*') || (Mascara.charAt(i) === '+'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '@') || (Mascara.charAt(i) === '#') || (Mascara.charAt(i) === ':'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '$') || (Mascara.charAt(i) === '&') || (Mascara.charAt(i) === '%'));
                if (boleanoMascara) {
                    NovoValorCampo += Mascara.charAt(i);
                    TamanhoMascara++;
                }
                else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
    };
    return BrMaskerIonic3;
}());

BrMaskerIonic3.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: '[brmasker]',
                providers: [
                    {
                        provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALUE_ACCESSOR */],
                        useExisting: BrMaskerIonic3,
                        multi: true
                    }
                ]
            },] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
];
/** @nocollapse */
BrMaskerIonic3.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
]; };
BrMaskerIonic3.propDecorators = {
    'brmasker': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'inputKeyup': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */], args: ['keyup', ['$event'],] },],
    'inputOnblur': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */], args: ['ionBlur', ['$event'],] },],
    'inputFocus': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */], args: ['ionFocus', ['$event'],] },],
};
//# sourceMappingURL=brmasker-ionic-3.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BrMaskServicesModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrMaskerIonicServices3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var BrMaskServicesModel = (function () {
    function BrMaskServicesModel() {
        this.type = 'alfa';
        this.decimal = 2;
        this.decimalCaracter = ",";
        this.userCaracters = false;
        this.numberAndTousand = false;
    }
    return BrMaskServicesModel;
}());

var BrMaskerIonicServices3 = (function () {
    function BrMaskerIonicServices3() {
        this.brmasker = new BrMaskServicesModel();
    }
    BrMaskerIonicServices3.prototype.ngOnInit = function () {
        if (!this.brmasker.type) {
            this.brmasker.type = 'all';
        }
        if (!this.brmasker.decimal) {
            this.brmasker.decimal = 2;
        }
        if (!this.brmasker.decimalCaracter) {
            this.brmasker.decimalCaracter = ',';
        }
    };
    BrMaskerIonicServices3.prototype.writeCreateValue = function (value, config) {
        if (config === void 0) { config = new BrMaskServicesModel(); }
        if (value && config.phone) {
            return value.replace(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/gi, '$1 ($2) $3-$4');
        }
        if (value && config.money) {
            return this.writeValueMoney(value, config);
        }
        if (value && config.person) {
            return this.writeValuePerson(value);
        }
        if (value && config.percent) {
            return this.writeValuePercent(value);
        }
        if (value && config.numberAndTousand) {
            return this.writeValueNumberAndThousand(value);
        }
        if (value && config.userCaracters) {
            return this.writeValueusingSpecialCharacters(value);
        }
        if (value && config.mask) {
            this.brmasker.mask = config.mask;
            if (config.len) {
                this.brmasker.len = config.len;
            }
            return this.onInput(value);
        }
        return value;
    };
    BrMaskerIonicServices3.prototype.writeValuePercent = function (value) {
        value.replace(/\D/gi, '');
        value.replace(/%/gi, '');
        return value.replace(/([0-9]{0})$/gi, '%$1');
    };
    BrMaskerIonicServices3.prototype.writeValuePerson = function (value) {
        if (value.length <= 11) {
            return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gi, '\$1.\$2.\$3\-\$4');
        }
        else {
            return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/gi, '\$1.\$2.\$3\/\$4\-\$5');
        }
    };
    BrMaskerIonicServices3.prototype.writeValueMoney = function (value, config) {
        if (config === void 0) { config = new BrMaskServicesModel(); }
        return this.moneyMask(value, config);
    };
    BrMaskerIonicServices3.prototype.writeValueNumberAndThousand = function (value, config) {
        if (config === void 0) { config = new BrMaskServicesModel(); }
        return this.thousand(value);
    };
    BrMaskerIonicServices3.prototype.writeValueusingSpecialCharacters = function (value, config) {
        if (config === void 0) { config = new BrMaskServicesModel(); }
        return this.usingSpecialCharacters(value, config.mask, config.len);
    };
    BrMaskerIonicServices3.prototype.moneyMask = function (value, config) {
        var decimal = config.decimal || this.brmasker.decimal;
        value = value
            .replace(/\D/gi, '')
            .replace(new RegExp("([0-9]{" + decimal + "})$", "g"), config.decimalCaracter + '$1');
        if (value.length === decimal + 1) {
            return "0" + value; // leading 0 so we're not left with something weird like ",50"
        }
        else if (value.length > decimal + 2 && value.charAt(0) === '0') {
            return value.substr(1); // remove leading 0 when we don't need it anymore
        }
        if (config.thousand && value.length > (Number(4) + Number(config.decimal))) {
            value = value.replace(new RegExp("([0-9]{3})" + config.decimalCaracter + "([0-9]{" + config.decimal + "}$)", "g"), config.thousand + "$1" + config.decimalCaracter + "$2");
        }
        if (config.thousand && value.length > (Number(8) + Number(config.decimal))) {
            value = value.replace(new RegExp("([0-9]{3})" + config.thousand + "([0-9]{3})" + config.decimalCaracter + "([0-9]{" + config.decimal + "}$)", "g"), config.thousand + "$1" + config.thousand + "$2" + config.decimalCaracter + "$3");
        }
        return value;
    };
    BrMaskerIonicServices3.prototype.onInput = function (value) {
        var ret = this.formatField(value, this.brmasker.mask, this.brmasker.len);
        return ret;
    };
    BrMaskerIonicServices3.prototype.thousand = function (value) {
        var val = value.replace(/\D/gi, '');
        var reverse = val.toString().split('').reverse().join('');
        var thousands = reverse.match(/\d{1,3}/g);
        val = thousands.join("" + (this.brmasker.thousand || '.')).split('').reverse().join('');
        return val;
    };
    BrMaskerIonicServices3.prototype.usingSpecialCharacters = function (campo, Mascara, tamanho) {
        if (!tamanho) {
            tamanho = 99999999999;
        }
        var boleanoMascara;
        var exp = /\-|\.|\,| /gi;
        var campoSoNumeros = campo.toString().replace(exp, '');
        var posicaoCampo = 0;
        var NovoValorCampo = '';
        var TamanhoMascara = campoSoNumeros.length;
        for (var i = 0; i < TamanhoMascara; i++) {
            if (i < tamanho) {
                boleanoMascara = ((Mascara.charAt(i) === '-') || (Mascara.charAt(i) === '.') || (Mascara.charAt(i) === ','));
                if (boleanoMascara) {
                    NovoValorCampo += Mascara.charAt(i);
                    TamanhoMascara++;
                }
                else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
    };
    BrMaskerIonicServices3.prototype.formatField = function (campo, Mascara, tamanho) {
        if (!tamanho) {
            tamanho = 99999999999;
        }
        var boleanoMascara;
        var exp = /\-|\.|\/|\(|\)|\,|\*|\+|\@|\#|\$|\&|\%|\:| /gi;
        var campoSoNumeros = campo.toString().replace(exp, '');
        var posicaoCampo = 0;
        var NovoValorCampo = '';
        var TamanhoMascara = campoSoNumeros.length;
        for (var i = 0; i < TamanhoMascara; i++) {
            if (i < tamanho) {
                boleanoMascara = ((Mascara.charAt(i) === '-') || (Mascara.charAt(i) === '.') || (Mascara.charAt(i) === '/'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '(') || (Mascara.charAt(i) === ')') || (Mascara.charAt(i) === ' '));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === ',') || (Mascara.charAt(i) === '*') || (Mascara.charAt(i) === '+'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '@') || (Mascara.charAt(i) === '#') || (Mascara.charAt(i) === ':'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '$') || (Mascara.charAt(i) === '&') || (Mascara.charAt(i) === '%'));
                if (boleanoMascara) {
                    NovoValorCampo += Mascara.charAt(i);
                    TamanhoMascara++;
                }
                else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
    };
    return BrMaskerIonicServices3;
}());

BrMaskerIonicServices3.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: '[brmasker]',
            },] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
];
/** @nocollapse */
BrMaskerIonicServices3.ctorParameters = function () { return []; };
//# sourceMappingURL=brmasker-ionic-services.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomValidatorsHelper; });
var CustomValidatorsHelper = /** @class */ (function () {
    function CustomValidatorsHelper() {
    }
    Object.defineProperty(CustomValidatorsHelper.prototype, "valorAComparar", {
        get: function () {
            return this._valorAComparar;
        },
        set: function (value) {
            this._valorAComparar = value;
        },
        enumerable: true,
        configurable: true
    });
    CustomValidatorsHelper.prototype.equals = function (field) {
        return (field.value == this._valorAComparar) ? null : {
            equals: false
        };
    };
    CustomValidatorsHelper.prototype.validEmail = function (field) {
        return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(field.value)) ? null : {
            validEmail: false
        };
    };
    CustomValidatorsHelper.prototype.validTelefoneMasked = function (field) {
        return (/^\(\d{2}\)\s\d{4}-\d{4}$/.test(field.value)) ? null : {
            validTelefoneMasked: false
        };
    };
    CustomValidatorsHelper.prototype.validCelularMasked = function (field) {
        return (/^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(field.value)) ? null : {
            validCelularMasked: false
        };
    };
    CustomValidatorsHelper.prototype.validCepMasked = function (field) {
        return (/^\d{5}-\d{3}$/.test(field.value)) ? null : {
            validCepMasked: false
        };
    };
    return CustomValidatorsHelper;
}());

//# sourceMappingURL=custom-validators.helper.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(379);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives__ = __webpack_require__(380);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrMaskerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_brmasker_ionic_3__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_brmasker_ionic_services__ = __webpack_require__(376);




var BrMaskerModule = (function () {
    function BrMaskerModule() {
    }
    return BrMaskerModule;
}());

BrMaskerModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */], args: [{
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_2__directives_brmasker_ionic_3__["a" /* BrMaskerIonic3 */],
                    __WEBPACK_IMPORTED_MODULE_3__directives_brmasker_ionic_services__["a" /* BrMaskerIonicServices3 */]
                ],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_2__directives_brmasker_ionic_3__["a" /* BrMaskerIonic3 */],
                    __WEBPACK_IMPORTED_MODULE_3__directives_brmasker_ionic_services__["a" /* BrMaskerIonicServices3 */]
                ],
                imports: [
                    __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */]
                ],
                schemas: [
                    __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]
                ],
                providers: [__WEBPACK_IMPORTED_MODULE_3__directives_brmasker_ionic_services__["a" /* BrMaskerIonicServices3 */]]
            },] },
];
/** @nocollapse */
BrMaskerModule.ctorParameters = function () { return []; };
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__brmasker_ionic_3__ = __webpack_require__(375);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__brmasker_ionic_services__ = __webpack_require__(376);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtualizarEnderecoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_toast_helper__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_custom_validators_helper__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_endereco_service__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_storage_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_beneficiario_benner_en_vi_portal_beneficiario_model__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_beneficiario_cadastro_benner_beneficiario_cadastro_benner_service__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_dto_dto_sam_endereco__ = __webpack_require__(401);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AtualizarEnderecoPage = /** @class */ (function () {
    function AtualizarEnderecoPage(navParams, loadingCtrl, toastHelper, navCtrl, enderecoService, beneficiarioCadastroBennerService, events, storageService) {
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastHelper = toastHelper;
        this.navCtrl = navCtrl;
        this.enderecoService = enderecoService;
        this.beneficiarioCadastroBennerService = beneficiarioCadastroBennerService;
        this.events = events;
        this.storageService = storageService;
        this.beneficiario = new __WEBPACK_IMPORTED_MODULE_7__models_beneficiario_benner_en_vi_portal_beneficiario_model__["a" /* EnViPortalBeneficiario */]();
        this.customValidatorsHelper = new __WEBPACK_IMPORTED_MODULE_4__helpers_custom_validators_helper__["a" /* CustomValidatorsHelper */]();
        this.dtoLogradouro = null;
        this.beneficiario = this.navParams.get('Beneficiario');
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            cep: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, this.customValidatorsHelper.validCepMasked, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(9)]),
            logradouro: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            numero: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern('^[0-9]+$')]),
            complemento: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', []),
            bairro: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            cidade: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            uf: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            telefone: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, this.customValidatorsHelper.validTelefoneMasked]),
            celular: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, this.customValidatorsHelper.validCelularMasked])
        });
    }
    AtualizarEnderecoPage.prototype.buscarCep = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.enderecoService.buscarCep(this.cep)
            .subscribe(function (dtoLogradouro) {
            _this.dtoLogradouro = dtoLogradouro;
            _this.logradouro = _this.dtoLogradouro.logradouro;
            _this.numero = null;
            _this.complemento = '';
            _this.bairro = _this.dtoLogradouro.bairro;
            _this.cidade = _this.dtoLogradouro.zNomeMunicipio;
            _this.uf = _this.dtoLogradouro.nomeEstado;
            loader.dismiss();
        }, function (error) {
            if (error.status === 400) {
                _this.toastHelper.notificacaoMensagem(error.error.mensagem);
            }
            else {
                _this.toastHelper.notificacaoMensagem('Ocorreu um erro interno, por favor tente novamente mais tarde');
            }
            loader.dismiss();
        });
    };
    AtualizarEnderecoPage.prototype.atualizarEndereco = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        var dtoSamEndereco = new __WEBPACK_IMPORTED_MODULE_9__models_dto_dto_sam_endereco__["a" /* DtoSamEndereco */]();
        dtoSamEndereco.logradouro = this.dtoLogradouro.logradouro;
        dtoSamEndereco.numero = this.numero;
        dtoSamEndereco.complemento = this.complemento;
        dtoSamEndereco.bairro = this.dtoLogradouro.bairro;
        dtoSamEndereco.cep = this.cep.replace(/\D/g, '');
        dtoSamEndereco.tipoLogradouro = this.dtoLogradouro.tipoLogradouroId;
        dtoSamEndereco.municipio = this.dtoLogradouro.idMunicipio;
        dtoSamEndereco.estado = this.dtoLogradouro.idEstado;
        dtoSamEndereco.telefone1 = this.telefone;
        dtoSamEndereco.celular = this.celular;
        this.beneficiarioCadastroBennerService.atualizarEndereco(this.beneficiario.codEndereco, dtoSamEndereco)
            .subscribe(function (dtoAuxiliarBooleano) {
            if (dtoAuxiliarBooleano.resposta) {
                _this.storageService.refreshBeneficiarioEGrupoFamiliar()
                    .then(function () {
                    loader.dismiss();
                    _this.toastHelper.notificacaoMensagem('Endereço atualizado com sucesso');
                    _this.navCtrl.pop();
                }, function () {
                    loader.dismiss();
                    _this.toastHelper.notificacaoMensagem('Por favor realize o login novamente');
                    setTimeout(function () {
                        _this.events.publish('user:logout');
                    }, 1500);
                });
            }
            else {
                loader.dismiss();
                _this.toastHelper.notificacaoMensagem('Não foi possível atualizar o endereço, por favor tente novamente mais tarde');
            }
        }, function (error) {
            if (error.status === 400) {
                _this.toastHelper.notificacaoMensagem(error.error.mensagem);
            }
            else {
                _this.toastHelper.notificacaoMensagem('Ocorreu um erro interno, por favor tente novamente mais tarde');
            }
            loader.dismiss();
        });
    };
    AtualizarEnderecoPage.prototype.limpar = function () {
        this.cep = null;
        this.dtoLogradouro = null;
        this.logradouro = null;
        this.numero = null;
        this.complemento = null;
        this.bairro = null;
        this.cidade = null;
        this.uf = null;
        this.telefone = null;
        this.celular = null;
        this.form.get('numero').markAsUntouched();
    };
    AtualizarEnderecoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-atualizar-endereco',template:/*ion-inline-start:"D:\Filipe\Projetos Android\cassems-beneficiario\src\pages\cadastro\atualizar-endereco\atualizar-endereco.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n            <span class="titulo-page">Atualizar Endereço</span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="contentAtualizarEndereco">\n\n    <form (ngSubmit)="atualizarEndereco()" class="formAtualizarEndereco" [formGroup]="form" #formElement="ngForm">\n\n        <ion-list inset>\n\n            <ion-item>\n\n                <ion-label floating>CEP</ion-label>\n\n                <ion-input type="tel" [(ngModel)]="cep" [brmasker]="{mask: \'00000-000\', len: \'9\', type:\'num\'}" maxlength="9"\n\n                           formControlName="cep" [disabled]="dtoLogradouro !== null"></ion-input>\n\n            </ion-item>\n\n            <ion-item *ngIf="dtoLogradouro === null">\n\n                <ion-row>\n\n                    <button type="button" ion-button block [disabled]="!form.controls[\'cep\'].valid"\n\n                            (click)="buscarCep()">\n\n                        <span text-wrap>Buscar</span></button>\n\n                </ion-row>\n\n            </ion-item>\n\n            <div class="dadosCep" *ngIf="dtoLogradouro !== null">\n\n                <ion-item>\n\n                    <ion-label floating>Logradouro</ion-label>\n\n                    <ion-input type="text" [disabled]="dtoLogradouro !== null" [(ngModel)]="logradouro"\n\n                               formControlName="logradouro"></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label floating>Número</ion-label>\n\n                    <ion-input type="number" [(ngModel)]="numero" formControlName="numero"></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label floating>Complemento</ion-label>\n\n                    <ion-input type="text" [(ngModel)]="complemento" formControlName="complemento"></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label floating>Bairro</ion-label>\n\n                    <ion-input type="text" [disabled]="dtoLogradouro !== null" [(ngModel)]="bairro"\n\n                               formControlName="bairro"></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label floating>Cidade</ion-label>\n\n                    <ion-input type="text" [disabled]="dtoLogradouro !== null" [(ngModel)]="cidade"\n\n                               formControlName="cidade"></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label floating>UF</ion-label>\n\n                    <ion-input type="text" [disabled]="dtoLogradouro !== null" [(ngModel)]="uf"\n\n                               formControlName="uf"></ion-input>\n\n                </ion-item>\n\n                <ion-item [class.ng-valid]="form.get(\'telefone\').valid" [class.ng-invalid]="!form.get(\'telefone\').valid">\n\n                    <ion-label floating>Telefone</ion-label>\n\n                    <ion-input type="tel" [(ngModel)]="telefone"\n\n                               [brmasker]="{mask: \'(00) 0000-0000\', len: \'14\', type:\'num\'}" maxlength="14"\n\n                               formControlName="telefone"></ion-input>\n\n                </ion-item>\n\n                <ion-item [class.ng-valid]="form.get(\'celular\').valid" [class.ng-invalid]="!form.get(\'celular\').valid" >\n\n                    <ion-label floating>Celular</ion-label>\n\n                    <ion-input type="tel" [(ngModel)]="celular" [brmasker]="{phone: true}" maxlength="15"\n\n                               formControlName="celular"></ion-input>\n\n                </ion-item>\n\n            </div>\n\n        </ion-list>\n\n        <ion-grid *ngIf="dtoLogradouro !== null">\n\n            <ion-row>\n\n                <ion-col col-6>\n\n                    <button type="submit" ion-button block [disabled]="!formElement.form.valid">Atualizar</button>\n\n                </ion-col>\n\n                <ion-col col-6>\n\n                    <button type="button" ion-button block (click)="limpar()"><span text-wrap>Limpar</span></button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </form>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Filipe\Projetos Android\cassems-beneficiario\src\pages\cadastro\atualizar-endereco\atualizar-endereco.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__helpers_toast_helper__["a" /* ToastHelper */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_endereco_service__["a" /* EnderecoService */],
            __WEBPACK_IMPORTED_MODULE_8__providers_beneficiario_cadastro_benner_beneficiario_cadastro_benner_service__["a" /* BeneficiarioCadastroBennerService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__providers_storage_service__["a" /* StorageService */]])
    ], AtualizarEnderecoPage);
    return AtualizarEnderecoPage;
}());

//# sourceMappingURL=atualizar-endereco.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DtoSamEndereco; });
var DtoSamEndereco = /** @class */ (function () {
    function DtoSamEndereco() {
    }
    Object.defineProperty(DtoSamEndereco.prototype, "handle", {
        get: function () {
            return this._handle;
        },
        set: function (value) {
            this._handle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DtoSamEndereco.prototype, "grupoZ", {
        get: function () {
            return this._grupoZ;
        },
        set: function (value) {
            this._grupoZ = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DtoSamEndereco.prototype, "cep", {
        get: function () {
            return this._cep;
        },
        set: function (value) {
            this._cep = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DtoSamEndereco.prototype, "tipoLogradouro", {
        get: function () {
            return this._tipoLogradouro;
        },
        set: function (value) {
            this._tipoLogradouro = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DtoSamEndereco.prototype, "celular", {
        get: function () {
            return this._celular;
        },
        set: function (value) {
            this._celular = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DtoSamEndereco.prototype, "ramal", {
        get: function () {
            return this._ramal;
        },
        set: function (value) {
            this._ramal = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DtoSamEndereco.prototype, "tipoComplemento", {
        get: function () {
            return this._tipoComplemento;
        },
        set: function (value) {
            this._tipoComplemento = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DtoSamEndereco.prototype, "dataAtualizacao", {
        get: function () {
            return this._dataAtualizacao;
        },
        set: function (value) {
            this._dataAtualizacao = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DtoSamEndereco.prototype, "estado", {
        get: function () {
            return this._estado;
        },
        set: function (value) {
            this._estado = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DtoSamEndereco.prototype, "municipio", {
        get: function () {
            return this._municipio;
        },
        set: function (value) {
            this._municipio = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DtoSamEndereco.prototype, "bairro", {
        get: function () {
            return this._bairro;
        },
        set: function (value) {
            this._bairro = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DtoSamEndereco.prototype, "logradouro", {
        get: function () {
            return this._logradouro;
        },
        set: function (value) {
            this._logradouro = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DtoSamEndereco.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (value) {
            this._numero = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DtoSamEndereco.prototype, "complemento", {
        get: function () {
            return this._complemento;
        },
        set: function (value) {
            this._complemento = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DtoSamEndereco.prototype, "telefone1", {
        get: function () {
            return this._telefone1;
        },
        set: function (value) {
            this._telefone1 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DtoSamEndereco.prototype, "telefone2", {
        get: function () {
            return this._telefone2;
        },
        set: function (value) {
            this._telefone2 = value;
        },
        enumerable: true,
        configurable: true
    });
    return DtoSamEndereco;
}());

//# sourceMappingURL=dto-sam-endereco.js.map

/***/ })

});
//# sourceMappingURL=0.js.map