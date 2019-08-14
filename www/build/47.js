webpackJsonp([47],{

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NegociacaoPageModule", function() { return NegociacaoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__negociacao__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_mask_ionic__ = __webpack_require__(420);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NegociacaoPageModule = /** @class */ (function () {
    function NegociacaoPageModule() {
    }
    NegociacaoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__negociacao__["a" /* NegociacaoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__negociacao__["a" /* NegociacaoPage */]),
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_mask_ionic__["a" /* NgxMaskIonicModule */].forRoot()
            ],
        })
    ], NegociacaoPageModule);
    return NegociacaoPageModule;
}());

//# sourceMappingURL=negociacao.module.js.map

/***/ }),

/***/ 374:
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

/***/ 375:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(378);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives__ = __webpack_require__(379);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrMaskerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_brmasker_ionic_3__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_brmasker_ionic_services__ = __webpack_require__(375);




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

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__brmasker_ionic_3__ = __webpack_require__(374);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__brmasker_ionic_services__ = __webpack_require__(375);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NegociacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_condicoes_pagamento_service__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_toast_helper__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_negociacao_item_estatico_service__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the NegociacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NegociacaoPage = /** @class */ (function () {
    function NegociacaoPage(navCtrl, navParams, loadingCtrl, condicaoPagamentoService, toastHelper, negociacaoItemEstaticoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.condicaoPagamentoService = condicaoPagamentoService;
        this.toastHelper = toastHelper;
        this.negociacaoItemEstaticoService = negociacaoItemEstaticoService;
        this.condicoesPagamento = [];
        this.itemNegociacaoSelecionado = this.navParams.get('itemNegociacaoSelecionada');
    }
    NegociacaoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        this.condicaoPagamentoService.buscarCondicaoPagamento(this.itemNegociacaoSelecionado.sniTipotitulo)
            .subscribe(function (resultado) {
            _this.condicoesPagamento = resultado;
            loader.dismiss();
        }, function () {
            loader.dismiss();
        });
    };
    NegociacaoPage.prototype.selecionaCondicaoPagamento = function () {
        if (this.condicaoPagamentoSelecionada.avista == 1) {
            this.temParcela = false;
            this.temEntrada = false;
        }
        else {
            if (this.condicaoPagamentoSelecionada.parcelas.length == 1)
                this.temEntrada = false;
            else
                this.temEntrada = true;
            this.temParcela = true;
        }
    };
    NegociacaoPage.prototype.atualizaParcela = function () {
        if (this.temParcela)
            this.parcela = (this.itemNegociacaoSelecionado.sniValortotal - this.entrada) / this.condicaoPagamentoSelecionada.parcelas[1].qtdPar;
        else
            this.parcela = 0;
    };
    NegociacaoPage.prototype.confirmarCondicao = function () {
        var _this = this;
        this.validaCampos();
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        var quantidadeParcelas = this.temEntrada ? this.condicaoPagamentoSelecionada.parcelas[1].qtdPar : 1;
        this.condicaoPagamentoService.confirmarCondicaoNegociacao(this.itemNegociacaoSelecionado.sniId, this.condicaoPagamentoSelecionada.codCpg, this.entrada, this.parcela, quantidadeParcelas)
            .subscribe(function (resultado) {
            _this.itemNegociacaoSelecionado.sniCondicaopagamento = +_this.condicaoPagamentoSelecionada.codCpg;
            _this.negociacaoItemEstaticoService.negociacaoItemAlterado = _this.itemNegociacaoSelecionado;
            loader.dismiss();
            _this.navCtrl.pop();
        }, function () {
            loader.dismiss();
        });
    };
    NegociacaoPage.prototype.validaCampos = function () {
        if (!this.condicaoPagamentoSelecionada) {
            this.toastHelper.notificacaoMensagem('Condição de pagamento não foi selecionada.');
            return;
        }
        if (this.temEntrada && !this.entrada) {
            this.toastHelper.notificacaoMensagem('A entrada deve ser informada.');
            return;
        }
        if (this.temParcela && !this.parcela) {
            this.toastHelper.notificacaoMensagem('A parcela deve ser informada.');
            return;
        }
    };
    NegociacaoPage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    NegociacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-negociacao',template:/*ion-inline-start:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\negociacao\negociacao.html"*/'<ion-header class="listing-header">\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Negociação</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-row wrap class="user-bio-row">\n        <ion-col no-padding col-12>\n            <p class="user-description">\n                Fatura: {{ itemNegociacaoSelecionado.sniNumeroFatura }}\n            </p>\n        </ion-col>\n    </ion-row>\n\n    <ion-row wrap class="user-bio-row">\n        <ion-col no-padding col-12>\n            <p class="user-description">\n                Tipo: {{ itemNegociacaoSelecionado.sniDescTipofatura }}\n            </p>\n        </ion-col>\n    </ion-row>\n\n    <ion-row wrap class="user-bio-row">\n        <ion-col no-padding col-12>\n            <p class="user-description">\n                Valor: R$ {{ itemNegociacaoSelecionado.sniValortotal }}\n            </p>\n        </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-col col-12>\n            <ion-item>\n                <ion-label floating>Condições</ion-label>\n                <ion-select [(ngModel)]="condicaoPagamentoSelecionada"\n                    (ionChange)="selecionaCondicaoPagamento()">\n                    <ion-option [value]="condicaoPagamento" *ngFor="let condicaoPagamento of condicoesPagamento">\n                        {{ condicaoPagamento.desCpg }}</ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf="temEntrada">\n        <ion-col>\n            <ion-item>\n                <ion-label floating>Entrada</ion-label>\n                <ion-input type="text" [(ngModel)]="entrada" mask="9*.99" (ionChange)="atualizaParcela()"></ion-input>\n            </ion-item>\n        </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf="temParcela">\n        <ion-col>\n            <ion-item>\n                <ion-label floating>{{ condicaoPagamentoSelecionada.parcelas.length == 2 ? condicaoPagamentoSelecionada.parcelas[1].qtdPar : condicaoPagamentoSelecionada.parcelas[0].qtdPar }}x</ion-label>\n                <ion-input type="text" [(ngModel)]="parcela" mask="9*.99" [disabled]="temEntrada"></ion-input>\n            </ion-item>\n        </ion-col>\n    </ion-row>\n\n    <ion-row style="margin-top: 20px;">\n        <ion-col offset-1 col-10>\n            <button style="width: 100%;" ion-button type="button" (click)="confirmarCondicao()" >Confirmar</button>\n        </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-col offset-1 col-10>\n            <button style="width: 100%;" ion-button type="button" (click)="cancelar()">Cancelar</button>\n        </ion-col>\n    </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\negociacao\negociacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_condicoes_pagamento_service__["a" /* CondicaoPagamentoService */],
            __WEBPACK_IMPORTED_MODULE_3__helpers_toast_helper__["a" /* ToastHelper */],
            __WEBPACK_IMPORTED_MODULE_4__providers_negociacao_item_estatico_service__["a" /* NegociacaoItemEstaticoService */]])
    ], NegociacaoPage);
    return NegociacaoPage;
}());

//# sourceMappingURL=negociacao.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export config */
/* unused harmony export NEW_CONFIG */
/* unused harmony export INITIAL_CONFIG */
/* unused harmony export initialConfig */
/* unused harmony export MaskDirective */
/* unused harmony export MaskService */
/* unused harmony export _configFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxMaskIonicModule; });
/* unused harmony export MaskPipe */
/* unused harmony export ɵa */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tslib__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(17);





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var config = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* InjectionToken */]('config');
/** @type {?} */
var NEW_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* InjectionToken */]('NEW_CONFIG');
/** @type {?} */
var INITIAL_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* InjectionToken */]('INITIAL_CONFIG');
/** @type {?} */
var initialConfig = {
    sufix: '',
    prefix: '',
    clearIfNotMatch: false,
    showTemplate: false,
    showMaskTyped: false,
    dropSpecialCharacters: true,
    specialCharacters: [
        '/',
        '(',
        ')',
        '.',
        ':',
        '-',
        ' ',
        '+',
        ',',
        '@',
        '[',
        ']',
        '"',
        "'"
    ],
    patterns: {
        '0': {
            pattern: new RegExp('\\d')
        },
        '9': {
            pattern: new RegExp('\\d'),
            optional: true
        },
        A: {
            pattern: new RegExp('[a-zA-Z0-9]')
        },
        S: {
            pattern: new RegExp('[a-zA-Z]')
        },
        d: {
            pattern: new RegExp('\\d')
        },
        m: {
            pattern: new RegExp('\\d')
        }
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MaskApplierService = /** @class */ (function () {
    function MaskApplierService(_config) {
        this._config = _config;
        this.maskExpression = '';
        this._shift = new Set();
        this.maskSpecialCharacters = (/** @type {?} */ (this._config)).specialCharacters;
        this.maskAvailablePatterns = this._config.patterns;
        this.clearIfNotMatch = this._config.clearIfNotMatch;
        this.dropSpecialCharacters = this._config.dropSpecialCharacters;
        this.maskSpecialCharacters = (/** @type {?} */ (this._config)).specialCharacters;
        this.maskAvailablePatterns = this._config.patterns;
        this.prefix = this._config.prefix;
        this.sufix = this._config.sufix;
    }
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} inputValue
     * @param {?} maskAndPattern
     * @return {?}
     */
    MaskApplierService.prototype.applyMaskWithPattern = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} inputValue
     * @param {?} maskAndPattern
     * @return {?}
     */
    function (inputValue, maskAndPattern) {
        var _a = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["c" /* __read */])(maskAndPattern, 2), mask = _a[0], customPattern = _a[1];
        this.customPattern = customPattern;
        return this.applyMask(inputValue, mask);
    };
    /**
     * @param {?} inputValue
     * @param {?} maskExpression
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    MaskApplierService.prototype.applyMask = /**
     * @param {?} inputValue
     * @param {?} maskExpression
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    function (inputValue, maskExpression, position, cb) {
        if (position === void 0) { position = 0; }
        if (cb === void 0) { cb = function () { }; }
        if (inputValue === undefined ||
            inputValue === null ||
            maskExpression === undefined) {
            return '';
        }
        /** @type {?} */
        var cursor = 0;
        /** @type {?} */
        var result = "";
        /** @type {?} */
        var multi = false;
        if (inputValue.slice(0, this.prefix.length) === this.prefix) {
            inputValue = inputValue.slice(this.prefix.length, inputValue.length);
        }
        /** @type {?} */
        var inputArray = inputValue.toString().split('');
        // tslint:disable-next-line
        for (var i = 0, inputSymbol = inputArray[0]; i < inputArray.length; i++, inputSymbol = inputArray[i]) {
            if (cursor === maskExpression.length) {
                break;
            }
            if (this._checkSymbolMask(inputSymbol, maskExpression[cursor]) &&
                maskExpression[cursor + 1] === '?') {
                result += inputSymbol;
                cursor += 2;
            }
            else if (maskExpression[cursor + 1] === '*' &&
                multi &&
                this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2])) {
                result += inputSymbol;
                cursor += 3;
                multi = false;
            }
            else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor]) &&
                maskExpression[cursor + 1] === '*') {
                result += inputSymbol;
                multi = true;
            }
            else if (maskExpression[cursor + 1] === '?' &&
                this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2])) {
                result += inputSymbol;
                cursor += 3;
            }
            else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor])) {
                if (maskExpression[cursor] === 'd') {
                    if (Number(inputSymbol) > 3) {
                        result += 0;
                        cursor += 1;
                        /** @type {?} */
                        var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                            ? inputArray.length
                            : cursor;
                        this._shift.add(shiftStep + this.prefix.length || 0);
                        i--;
                        continue;
                    }
                }
                if (maskExpression[cursor - 1] === 'd') {
                    if (Number(inputValue.slice(cursor - 1, cursor + 1)) > 31) {
                        continue;
                    }
                }
                if (maskExpression[cursor] === 'm') {
                    if (Number(inputSymbol) > 1) {
                        result += 0;
                        cursor += 1;
                        /** @type {?} */
                        var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                            ? inputArray.length
                            : cursor;
                        this._shift.add(shiftStep + this.prefix.length || 0);
                        i--;
                        continue;
                    }
                }
                if (maskExpression[cursor - 1] === 'm') {
                    if (Number(inputValue.slice(cursor - 1, cursor + 1)) > 12) {
                        continue;
                    }
                }
                result += inputSymbol;
                cursor++;
            }
            else if (this.maskSpecialCharacters.indexOf(maskExpression[cursor]) !== -1) {
                result += maskExpression[cursor];
                cursor++;
                /** @type {?} */
                var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                    ? inputArray.length
                    : cursor;
                this._shift.add(shiftStep + this.prefix.length || 0);
                i--;
            }
            else if (this.maskSpecialCharacters.indexOf(inputSymbol) > -1 &&
                this.maskAvailablePatterns[maskExpression[cursor]] &&
                this.maskAvailablePatterns[maskExpression[cursor]].optional) {
                cursor++;
                i--;
            }
            else if (this.maskExpression[cursor + 1] === '*' &&
                this._findSpecialChar(this.maskExpression[cursor + 2]) &&
                this._findSpecialChar(inputSymbol) === this.maskExpression[cursor + 2]) {
                cursor += 3;
                result += inputSymbol;
            }
        }
        if (result.length + 1 === maskExpression.length &&
            this.maskSpecialCharacters.indexOf(maskExpression[maskExpression.length - 1]) !== -1) {
            result += maskExpression[maskExpression.length - 1];
        }
        /** @type {?} */
        var shift = 1;
        /** @type {?} */
        var newPosition = position + 1;
        while (this._shift.has(newPosition)) {
            shift++;
            newPosition++;
        }
        cb(this._shift.has(position) ? shift : 0);
        /** @type {?} */
        var res = "" + this.prefix + result;
        res =
            this.sufix && cursor === maskExpression.length
                ? "" + this.prefix + result + this.sufix
                : "" + this.prefix + result;
        return res;
    };
    /**
     * @param {?} inputSymbol
     * @return {?}
     */
    MaskApplierService.prototype._findSpecialChar = /**
     * @param {?} inputSymbol
     * @return {?}
     */
    function (inputSymbol) {
        /** @type {?} */
        var symbol = this.maskSpecialCharacters.find(function (val) { return val === inputSymbol; });
        return symbol;
    };
    /**
     * @private
     * @param {?} inputSymbol
     * @param {?} maskSymbol
     * @return {?}
     */
    MaskApplierService.prototype._checkSymbolMask = /**
     * @private
     * @param {?} inputSymbol
     * @param {?} maskSymbol
     * @return {?}
     */
    function (inputSymbol, maskSymbol) {
        this.maskAvailablePatterns = this.customPattern
            ? this.customPattern
            : this.maskAvailablePatterns;
        return (this.maskAvailablePatterns[maskSymbol] &&
            this.maskAvailablePatterns[maskSymbol].pattern &&
            this.maskAvailablePatterns[maskSymbol].pattern.test(inputSymbol));
    };
    MaskApplierService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] }
    ];
    /** @nocollapse */
    MaskApplierService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */], args: [config,] }] }
    ]; };
    return MaskApplierService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MaskService = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(MaskService, _super);
    function MaskService(document, _config, _elementRef, _renderer, _ngControl) {
        var _this = _super.call(this, _config) || this;
        _this.document = document;
        _this._config = _config;
        _this._elementRef = _elementRef;
        _this._renderer = _renderer;
        _this._ngControl = _ngControl;
        _this.maskExpression = '';
        _this.isNumberValue = false;
        _this.showMaskTyped = false;
        _this.maskIsShown = '';
        _this.onTouch = function () { };
        _this.setFormElement(_elementRef.nativeElement);
        setTimeout(function () {
            if (_this._formElement.localName !== 'input') {
                /** @type {?} */
                var inputEl = _this._elementRef.nativeElement.querySelector('input');
                if (inputEl != null) {
                    _this.setFormElement(inputEl);
                }
                else {
                    console.warn('mask-service: Could not find Input Element.  Please make sure one is present.');
                }
            }
            _this._ngControl.valueChanges.subscribe(function (value) {
                _this._onControlValueChange(value);
            });
        });
        return _this;
    }
    /**
     * @param {?} el
     * @return {?}
     */
    MaskService.prototype.setFormElement = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        this._formElement = el;
    };
    /**
     * @param {?} inputValue
     * @param {?} maskExpression
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    MaskService.prototype.applyMask = /**
     * @param {?} inputValue
     * @param {?} maskExpression
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    function (inputValue, maskExpression, position, cb) {
        if (position === void 0) { position = 0; }
        if (cb === void 0) { cb = function () { }; }
        this.maskIsShown = this.showMaskTyped
            ? this.maskExpression.replace(/[0-9]/g, '_')
            : '';
        if (!inputValue && this.showMaskTyped) {
            return this.prefix + this.maskIsShown;
        }
        /** @type {?} */
        var result = _super.prototype.applyMask.call(this, inputValue, maskExpression, position, cb);
        this.unmaskedValue = this.getUnmaskedValue(result);
        return this._applyMaskResult(result);
    };
    /**
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    MaskService.prototype.applyValueChanges = /**
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    function (position, cb) {
        if (position === void 0) { position = 0; }
        if (cb === void 0) { cb = function () { }; }
        /** @type {?} */
        var maskedInput = this.applyMask(this._formElement.value, this.maskExpression, position, cb);
        this._formElement.value = maskedInput;
        if (this._formElement === this.document.activeElement) {
            return;
        }
        this.clearIfNotMatchFn();
    };
    /**
     * @return {?}
     */
    MaskService.prototype.showMaskInInput = /**
     * @return {?}
     */
    function () {
        if (this.showMaskTyped) {
            this.maskIsShown = this.maskExpression.replace(/[0-9]/g, '_');
        }
    };
    /**
     * @return {?}
     */
    MaskService.prototype.clearIfNotMatchFn = /**
     * @return {?}
     */
    function () {
        console.log('clear-if-not-matched');
        if (this.clearIfNotMatch === true &&
            this.maskExpression.length !== this._formElement.value.length) {
            this.setValue('');
            this.applyMask(this._formElement.value, this.maskExpression);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MaskService.prototype.setValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.unmaskedValue = this.getUnmaskedValue(value);
        this._ngControl.control.setValue(value);
    };
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    MaskService.prototype.setFormElementProperty = /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (name, value) {
        if (this._formElement) {
            this._renderer.setProperty(this._formElement, name, value);
        }
    };
    /**
     * @param {?} result
     * @return {?}
     */
    MaskService.prototype.getUnmaskedValue = /**
     * @param {?} result
     * @return {?}
     */
    function (result) {
        /** @type {?} */
        var resultNoSuffixOrPrefix = this._removeSufix(this._removePrefix(result));
        /** @type {?} */
        var changeValue = resultNoSuffixOrPrefix;
        if (Array.isArray(this.dropSpecialCharacters)) {
            changeValue = this._removeMask(resultNoSuffixOrPrefix, this.dropSpecialCharacters);
        }
        else if (this.dropSpecialCharacters) {
            changeValue = this._removeMask(resultNoSuffixOrPrefix, this.maskSpecialCharacters);
            changeValue = this.isNumberValue ? Number(changeValue) : changeValue;
        }
        return changeValue;
    };
    /**
     * @private
     * @param {?} value
     * @param {?} specialCharactersForRemove
     * @return {?}
     */
    MaskService.prototype._removeMask = /**
     * @private
     * @param {?} value
     * @param {?} specialCharactersForRemove
     * @return {?}
     */
    function (value, specialCharactersForRemove) {
        return value
            ? value.replace(this._regExpForRemove(specialCharactersForRemove), '')
            : value;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    MaskService.prototype._removePrefix = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this.prefix) {
            return value;
        }
        return value ? value.replace(this.prefix, '') : value;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    MaskService.prototype._removeSufix = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this.sufix) {
            return value;
        }
        return value ? value.replace(this.sufix, '') : value;
    };
    /**
     * @private
     * @param {?} specialCharactersForRemove
     * @return {?}
     */
    MaskService.prototype._regExpForRemove = /**
     * @private
     * @param {?} specialCharactersForRemove
     * @return {?}
     */
    function (specialCharactersForRemove) {
        return new RegExp(specialCharactersForRemove.map(function (item) { return "\\" + item; }).join('|'), 'gi');
    };
    /**
     * @private
     * @param {?} result
     * @return {?}
     */
    MaskService.prototype._applyMaskResult = /**
     * @private
     * @param {?} result
     * @return {?}
     */
    function (result) {
        if (!this.showMaskTyped) {
            return result;
        }
        /** @type {?} */
        var resLen = result.length;
        /** @type {?} */
        var prefNmask = this.prefix + this.maskIsShown;
        /** @type {?} */
        var ifMaskIsShown = prefNmask.slice(resLen);
        return result + ifMaskIsShown;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    MaskService.prototype._onControlValueChange = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /*
              Because we are no longer working with the ControlValueAccessor (since it doesn't play nice with Ionic).
              We need logic here to track changes made programmatically to the form value.  Specifically changes
              done OUTSIDE of the mask. Since changes done inside the mask may also fire off this method
              we need to do some jiu jitsu to ensure we are ignoring those changes.
            */
        /** @type {?} */
        var newValue = this.getUnmaskedValue(value);
        if (this.unmaskedValue === newValue) {
            return;
        }
        /** @type {?} */
        var unmaskedSubstring = null;
        // This method (value change) fires off before a Keydown or Input event, so we need to subtract
        // the latest change and compare to our previous (known) value.
        if (this.unmaskedValue != null) {
            /** @type {?} */
            var v = this.unmaskedValue.toString();
            unmaskedSubstring = v.substring(0, v.length - 1);
        }
        if (newValue !== unmaskedSubstring) {
            /** @type {?} */
            var nv = newValue != null ? newValue.toString() : null;
            /** @type {?} */
            var v = this.applyMask(nv, this.maskExpression);
            this.setValue(v);
        }
    };
    MaskService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] }
    ];
    /** @nocollapse */
    MaskService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* DOCUMENT */],] }] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */], args: [config,] }] },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer2 */] },
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* NgControl */] }
    ]; };
    return MaskService;
}(MaskApplierService));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MaskDirective = /** @class */ (function () {
    function MaskDirective(document, _maskService, _ngControl) {
        this.document = document;
        this._maskService = _maskService;
        this._ngControl = _ngControl;
        this._position = null;
        // tslint:disable-next-line
        this.onTouch = function () { };
    }
    Object.defineProperty(MaskDirective.prototype, "maskExpression", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maskValue = value || '';
            if (!this._maskValue) {
                return;
            }
            this._inputValue = this._ngControl.control.value;
            this._initializeMask();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "specialCharacters", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value ||
                !Array.isArray(value) ||
                (Array.isArray(value) && !value.length)) {
                return;
            }
            this._maskService.maskSpecialCharacters = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "patterns", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value) {
                return;
            }
            this._maskService.maskAvailablePatterns = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "prefix", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value) {
                return;
            }
            this._maskService.prefix = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "sufix", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value) {
                return;
            }
            this._maskService.sufix = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "dropSpecialCharacters", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maskService.dropSpecialCharacters = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "showMaskTyped", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value) {
                return;
            }
            this._maskService.showMaskTyped = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "showTemplate", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maskService.showTemplate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "clearIfNotMatch", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maskService.clearIfNotMatch = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} e
     * @return {?}
     */
    MaskDirective.prototype.onInput = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var el = (/** @type {?} */ (e.target));
        this._inputValue = el.value;
        if (!this._maskValue) {
            return;
        }
        /** @type {?} */
        var position = ((/** @type {?} */ (el.selectionStart))) === 1
            ? ((/** @type {?} */ (el.selectionStart))) + this._maskService.prefix.length
            : ((/** @type {?} */ (el.selectionStart)));
        /** @type {?} */
        var caretShift = 0;
        this._maskService.applyValueChanges(position, function (shift) { return (caretShift = shift); });
        // only set the selection if the element is active
        if (this.document.activeElement !== el) {
            return;
        }
        el.selectionStart = el.selectionEnd =
            this._position !== null
                ? this._position
                : position +
                    // tslint:disable-next-line
                    (((/** @type {?} */ (e))).inputType === 'deleteContentBackward' ? 0 : caretShift);
        this._position = null;
    };
    /**
     * @return {?}
     */
    MaskDirective.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this._maskService.clearIfNotMatchFn();
        this.onTouch();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    MaskDirective.prototype.onFocus = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var el = (/** @type {?} */ (e.target));
        if (el !== null &&
            el.selectionStart !== null &&
            el.selectionStart === el.selectionEnd &&
            el.selectionStart > this._maskService.prefix.length &&
            // tslint:disable-next-line
            ((/** @type {?} */ (e))).keyCode !== 38) {
            return;
        }
        if (this._maskService.showMaskTyped) {
            this._maskService.maskIsShown = this._maskService.maskExpression.replace(/[0-9]/g, '_');
        }
        el.value =
            !el.value || el.value === this._maskService.prefix
                ? this._maskService.prefix + this._maskService.maskIsShown
                : el.value;
        /** fix of cursor position with prefix when mouse click occur */
        if ((((/** @type {?} */ (el.selectionStart))) || ((/** @type {?} */ (el.selectionEnd)))) <=
            this._maskService.prefix.length) {
            el.selectionStart = this._maskService.prefix.length;
            return;
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    MaskDirective.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var el = (/** @type {?} */ (e.target));
        if (e.keyCode === 38) {
            e.preventDefault();
        }
        if (e.keyCode === 37 || e.keyCode === 8) {
            if (((/** @type {?} */ (el.selectionStart))) <= this._maskService.prefix.length &&
                ((/** @type {?} */ (el.selectionEnd))) <= this._maskService.prefix.length) {
                e.preventDefault();
            }
            this.onFocus(e);
            if (e.keyCode === 8 &&
                el.selectionStart === 0 &&
                el.selectionEnd === el.value.length) {
                el.value = this._maskService.prefix;
                this._position = this._maskService.prefix
                    ? this._maskService.prefix.length
                    : 1;
                this.onInput(e);
            }
        }
    };
    /**
     * @return {?}
     */
    MaskDirective.prototype.onPaste = /**
     * @return {?}
     */
    function () {
        this._position = Number.MAX_SAFE_INTEGER;
    };
    /** It disables the input element */
    /**
     * It disables the input element
     * @param {?} isDisabled
     * @return {?}
     */
    MaskDirective.prototype.setDisabledState = /**
     * It disables the input element
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this._maskService.setFormElementProperty('disabled', isDisabled);
    };
    /**
     * @private
     * @param {?} maskExp
     * @return {?}
     */
    MaskDirective.prototype._repeatPatternSymbols = /**
     * @private
     * @param {?} maskExp
     * @return {?}
     */
    function (maskExp) {
        var _this = this;
        return ((maskExp.match(/{[0-9]+}/) &&
            maskExp
                .split('')
                .reduce(function (accum, currval, index) {
                _this._start = currval === '{' ? index : _this._start;
                if (currval !== '}') {
                    return _this._maskService._findSpecialChar(currval)
                        ? accum + currval
                        : accum;
                }
                _this._end = index;
                /** @type {?} */
                var repeatNumber = Number(maskExp.slice(_this._start + 1, _this._end));
                /** @type {?} */
                var repaceWith = new Array(repeatNumber + 1).join(maskExp[_this._start - 1]);
                return accum + repaceWith;
            }, '')) ||
            maskExp);
    };
    /**
     * @private
     * @return {?}
     */
    MaskDirective.prototype._initializeMask = /**
     * @private
     * @return {?}
     */
    function () {
        this._maskService.maskExpression = this._repeatPatternSymbols(this._maskValue);
        /** @type {?} */
        var m = this._maskService.applyMask(this._inputValue, this._maskService.maskExpression);
        this._maskService.setValue(m);
    };
    MaskDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                    selector: '[mask]',
                    providers: [MaskService]
                },] }
    ];
    /** @nocollapse */
    MaskDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* DOCUMENT */],] }] },
        { type: MaskService },
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* NgControl */] }
    ]; };
    MaskDirective.propDecorators = {
        maskExpression: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['mask',] }],
        specialCharacters: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] }],
        patterns: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] }],
        prefix: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] }],
        sufix: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] }],
        dropSpecialCharacters: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] }],
        showMaskTyped: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] }],
        showTemplate: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] }],
        clearIfNotMatch: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] }],
        onInput: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */], args: ['input', ['$event'],] }],
        onBlur: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */], args: ['blur',] }],
        onFocus: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */], args: ['click', ['$event'],] }],
        onKeyDown: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */], args: ['keydown', ['$event'],] }],
        onPaste: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */], args: ['paste',] }]
    };
    return MaskDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MaskPipe = /** @class */ (function () {
    function MaskPipe(_maskService) {
        this._maskService = _maskService;
    }
    /**
     * @param {?} value
     * @param {?} mask
     * @return {?}
     */
    MaskPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} mask
     * @return {?}
     */
    function (value, mask) {
        if (!value) {
            return '';
        }
        if (typeof mask === 'string') {
            return this._maskService.applyMask("" + value, mask);
        }
        return this._maskService.applyMaskWithPattern("" + value, mask);
    };
    MaskPipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */], args: [{
                    name: 'mask',
                    pure: true
                },] }
    ];
    /** @nocollapse */
    MaskPipe.ctorParameters = function () { return [
        { type: MaskApplierService }
    ]; };
    return MaskPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxMaskIonicModule = /** @class */ (function () {
    function NgxMaskIonicModule() {
    }
    /**
     * @param {?=} configValue
     * @return {?}
     */
    NgxMaskIonicModule.forRoot = /**
     * @param {?=} configValue
     * @return {?}
     */
    function (configValue) {
        return {
            ngModule: NgxMaskIonicModule,
            providers: [
                {
                    provide: NEW_CONFIG,
                    useValue: configValue
                },
                {
                    provide: INITIAL_CONFIG,
                    useValue: initialConfig
                },
                {
                    provide: config,
                    useFactory: _configFactory,
                    deps: [INITIAL_CONFIG, NEW_CONFIG]
                },
                MaskPipe
            ]
        };
    };
    /**
     * @param {?=} configValue
     * @return {?}
     */
    NgxMaskIonicModule.forChild = /**
     * @param {?=} configValue
     * @return {?}
     */
    function (configValue) {
        return {
            ngModule: NgxMaskIonicModule
        };
    };
    NgxMaskIonicModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                    providers: [MaskApplierService, MaskPipe],
                    exports: [MaskDirective, MaskPipe],
                    declarations: [MaskDirective, MaskPipe]
                },] }
    ];
    return NgxMaskIonicModule;
}());
/**
 * \@internal
 * @param {?} initConfig
 * @param {?} configValue
 * @return {?}
 */
function _configFactory(initConfig, configValue) {
    return typeof configValue === 'function'
        ? configValue()
        : Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __assign */])({}, initConfig, configValue);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hc2staW9uaWMuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1tYXNrLWlvbmljL2xpYi9jb25maWcudHMiLCJuZzovL25neC1tYXNrLWlvbmljL2xpYi9tYXNrLWFwcGxpZXIuc2VydmljZS50cyIsIm5nOi8vbmd4LW1hc2staW9uaWMvbGliL21hc2suc2VydmljZS50cyIsIm5nOi8vbmd4LW1hc2staW9uaWMvbGliL21hc2suZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtbWFzay1pb25pYy9saWIvbWFzay5waXBlLnRzIiwibmc6Ly9uZ3gtbWFzay1pb25pYy9saWIvbmd4LW1hc2staW9uaWMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb25maWcge1xyXG4gIHN1Zml4OiBzdHJpbmc7XHJcbiAgcHJlZml4OiBzdHJpbmc7XHJcbiAgY2xlYXJJZk5vdE1hdGNoOiBib29sZWFuO1xyXG4gIHNob3dUZW1wbGF0ZTogYm9vbGVhbjtcclxuICBzaG93TWFza1R5cGVkOiBib29sZWFuO1xyXG4gIGRyb3BTcGVjaWFsQ2hhcmFjdGVyczogYm9vbGVhbiB8IHN0cmluZ1tdO1xyXG4gIHNwZWNpYWxDaGFyYWN0ZXJzOiBzdHJpbmdbXTtcclxuICBwYXR0ZXJuczoge1xyXG4gICAgW2NoYXJhY3Rlcjogc3RyaW5nXToge1xyXG4gICAgICBwYXR0ZXJuOiBSZWdFeHA7XHJcbiAgICAgIG9wdGlvbmFsPzogYm9vbGVhbjtcclxuICAgIH07XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgb3B0aW9uc0NvbmZpZyA9IFBhcnRpYWw8SUNvbmZpZz47XHJcbmV4cG9ydCBjb25zdCBjb25maWc6IEluamVjdGlvblRva2VuPHN0cmluZz4gPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ2NvbmZpZycpO1xyXG5leHBvcnQgY29uc3QgTkVXX0NPTkZJRzogSW5qZWN0aW9uVG9rZW48c3RyaW5nPiA9IG5ldyBJbmplY3Rpb25Ub2tlbihcclxuICAnTkVXX0NPTkZJRydcclxuKTtcclxuZXhwb3J0IGNvbnN0IElOSVRJQUxfQ09ORklHOiBJbmplY3Rpb25Ub2tlbjxJQ29uZmlnPiA9IG5ldyBJbmplY3Rpb25Ub2tlbihcclxuICAnSU5JVElBTF9DT05GSUcnXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbENvbmZpZzogSUNvbmZpZyA9IHtcclxuICBzdWZpeDogJycsXHJcbiAgcHJlZml4OiAnJyxcclxuICBjbGVhcklmTm90TWF0Y2g6IGZhbHNlLFxyXG4gIHNob3dUZW1wbGF0ZTogZmFsc2UsXHJcbiAgc2hvd01hc2tUeXBlZDogZmFsc2UsXHJcbiAgZHJvcFNwZWNpYWxDaGFyYWN0ZXJzOiB0cnVlLFxyXG4gIHNwZWNpYWxDaGFyYWN0ZXJzOiBbXHJcbiAgICAnLycsXHJcbiAgICAnKCcsXHJcbiAgICAnKScsXHJcbiAgICAnLicsXHJcbiAgICAnOicsXHJcbiAgICAnLScsXHJcbiAgICAnICcsXHJcbiAgICAnKycsXHJcbiAgICAnLCcsXHJcbiAgICAnQCcsXHJcbiAgICAnWycsXHJcbiAgICAnXScsXHJcbiAgICAnXCInLFxyXG4gICAgXCInXCJcclxuICBdLFxyXG4gIHBhdHRlcm5zOiB7XHJcbiAgICAnMCc6IHtcclxuICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cCgnXFxcXGQnKVxyXG4gICAgfSxcclxuICAgICc5Jzoge1xyXG4gICAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKCdcXFxcZCcpLFxyXG4gICAgICBvcHRpb25hbDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIEE6IHtcclxuICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cCgnW2EtekEtWjAtOV0nKVxyXG4gICAgfSxcclxuICAgIFM6IHtcclxuICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cCgnW2EtekEtWl0nKVxyXG4gICAgfSxcclxuICAgIGQ6IHtcclxuICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cCgnXFxcXGQnKVxyXG4gICAgfSxcclxuICAgIG06IHtcclxuICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cCgnXFxcXGQnKVxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGNvbmZpZywgSUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1hc2tBcHBsaWVyU2VydmljZSB7XHJcbiAgcHVibGljIGRyb3BTcGVjaWFsQ2hhcmFjdGVyczogSUNvbmZpZ1snZHJvcFNwZWNpYWxDaGFyYWN0ZXJzJ107XHJcbiAgcHVibGljIHNob3dUZW1wbGF0ZTogSUNvbmZpZ1snc2hvd1RlbXBsYXRlJ107XHJcbiAgcHVibGljIGNsZWFySWZOb3RNYXRjaDogSUNvbmZpZ1snY2xlYXJJZk5vdE1hdGNoJ107XHJcbiAgcHVibGljIG1hc2tFeHByZXNzaW9uID0gJyc7XHJcbiAgcHVibGljIG1hc2tTcGVjaWFsQ2hhcmFjdGVyczogSUNvbmZpZ1snc3BlY2lhbENoYXJhY3RlcnMnXTtcclxuICBwdWJsaWMgbWFza0F2YWlsYWJsZVBhdHRlcm5zOiBJQ29uZmlnWydwYXR0ZXJucyddO1xyXG4gIHB1YmxpYyBwcmVmaXg6IElDb25maWdbJ3ByZWZpeCddO1xyXG4gIHB1YmxpYyBzdWZpeDogSUNvbmZpZ1snc3VmaXgnXTtcclxuICBwdWJsaWMgY3VzdG9tUGF0dGVybjogSUNvbmZpZ1sncGF0dGVybnMnXTtcclxuXHJcbiAgcHJpdmF0ZSBfc2hpZnQ6IFNldDxudW1iZXI+O1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoQEluamVjdChjb25maWcpIHByb3RlY3RlZCBfY29uZmlnOiBJQ29uZmlnKSB7XHJcbiAgICB0aGlzLl9zaGlmdCA9IG5ldyBTZXQoKTtcclxuICAgIHRoaXMubWFza1NwZWNpYWxDaGFyYWN0ZXJzID0gdGhpcy5fY29uZmlnIS5zcGVjaWFsQ2hhcmFjdGVycztcclxuICAgIHRoaXMubWFza0F2YWlsYWJsZVBhdHRlcm5zID0gdGhpcy5fY29uZmlnLnBhdHRlcm5zO1xyXG4gICAgdGhpcy5jbGVhcklmTm90TWF0Y2ggPSB0aGlzLl9jb25maWcuY2xlYXJJZk5vdE1hdGNoO1xyXG4gICAgdGhpcy5kcm9wU3BlY2lhbENoYXJhY3RlcnMgPSB0aGlzLl9jb25maWcuZHJvcFNwZWNpYWxDaGFyYWN0ZXJzO1xyXG4gICAgdGhpcy5tYXNrU3BlY2lhbENoYXJhY3RlcnMgPSB0aGlzLl9jb25maWchLnNwZWNpYWxDaGFyYWN0ZXJzO1xyXG4gICAgdGhpcy5tYXNrQXZhaWxhYmxlUGF0dGVybnMgPSB0aGlzLl9jb25maWcucGF0dGVybnM7XHJcbiAgICB0aGlzLnByZWZpeCA9IHRoaXMuX2NvbmZpZy5wcmVmaXg7XHJcbiAgICB0aGlzLnN1Zml4ID0gdGhpcy5fY29uZmlnLnN1Zml4O1xyXG4gIH1cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgcHVibGljIGFwcGx5TWFza1dpdGhQYXR0ZXJuKFxyXG4gICAgaW5wdXRWYWx1ZTogc3RyaW5nLFxyXG4gICAgbWFza0FuZFBhdHRlcm46IFtzdHJpbmcsIElDb25maWdbJ3BhdHRlcm5zJ11dXHJcbiAgKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IFttYXNrLCBjdXN0b21QYXR0ZXJuXSA9IG1hc2tBbmRQYXR0ZXJuO1xyXG4gICAgdGhpcy5jdXN0b21QYXR0ZXJuID0gY3VzdG9tUGF0dGVybjtcclxuICAgIHJldHVybiB0aGlzLmFwcGx5TWFzayhpbnB1dFZhbHVlLCBtYXNrKTtcclxuICB9XHJcbiAgcHVibGljIGFwcGx5TWFzayhcclxuICAgIGlucHV0VmFsdWU6IHN0cmluZyxcclxuICAgIG1hc2tFeHByZXNzaW9uOiBzdHJpbmcsXHJcbiAgICBwb3NpdGlvbjogbnVtYmVyID0gMCxcclxuICAgIGNiOiBGdW5jdGlvbiA9ICgpID0+IHt9XHJcbiAgKTogc3RyaW5nIHtcclxuICAgIGlmIChcclxuICAgICAgaW5wdXRWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgIGlucHV0VmFsdWUgPT09IG51bGwgfHxcclxuICAgICAgbWFza0V4cHJlc3Npb24gPT09IHVuZGVmaW5lZFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY3Vyc29yID0gMDtcclxuICAgIGxldCByZXN1bHQgPSBgYDtcclxuICAgIGxldCBtdWx0aSA9IGZhbHNlO1xyXG5cclxuICAgIGlmIChpbnB1dFZhbHVlLnNsaWNlKDAsIHRoaXMucHJlZml4Lmxlbmd0aCkgPT09IHRoaXMucHJlZml4KSB7XHJcbiAgICAgIGlucHV0VmFsdWUgPSBpbnB1dFZhbHVlLnNsaWNlKHRoaXMucHJlZml4Lmxlbmd0aCwgaW5wdXRWYWx1ZS5sZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGlucHV0QXJyYXk6IHN0cmluZ1tdID0gaW5wdXRWYWx1ZS50b1N0cmluZygpLnNwbGl0KCcnKTtcclxuXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIGZvciAoXHJcbiAgICAgIGxldCBpOiBudW1iZXIgPSAwLCBpbnB1dFN5bWJvbDogc3RyaW5nID0gaW5wdXRBcnJheVswXTtcclxuICAgICAgaSA8IGlucHV0QXJyYXkubGVuZ3RoO1xyXG4gICAgICBpKyssIGlucHV0U3ltYm9sID0gaW5wdXRBcnJheVtpXVxyXG4gICAgKSB7XHJcbiAgICAgIGlmIChjdXJzb3IgPT09IG1hc2tFeHByZXNzaW9uLmxlbmd0aCkge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLl9jaGVja1N5bWJvbE1hc2soaW5wdXRTeW1ib2wsIG1hc2tFeHByZXNzaW9uW2N1cnNvcl0pICYmXHJcbiAgICAgICAgbWFza0V4cHJlc3Npb25bY3Vyc29yICsgMV0gPT09ICc/J1xyXG4gICAgICApIHtcclxuICAgICAgICByZXN1bHQgKz0gaW5wdXRTeW1ib2w7XHJcbiAgICAgICAgY3Vyc29yICs9IDI7XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgbWFza0V4cHJlc3Npb25bY3Vyc29yICsgMV0gPT09ICcqJyAmJlxyXG4gICAgICAgIG11bHRpICYmXHJcbiAgICAgICAgdGhpcy5fY2hlY2tTeW1ib2xNYXNrKGlucHV0U3ltYm9sLCBtYXNrRXhwcmVzc2lvbltjdXJzb3IgKyAyXSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IGlucHV0U3ltYm9sO1xyXG4gICAgICAgIGN1cnNvciArPSAzO1xyXG4gICAgICAgIG11bHRpID0gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgdGhpcy5fY2hlY2tTeW1ib2xNYXNrKGlucHV0U3ltYm9sLCBtYXNrRXhwcmVzc2lvbltjdXJzb3JdKSAmJlxyXG4gICAgICAgIG1hc2tFeHByZXNzaW9uW2N1cnNvciArIDFdID09PSAnKidcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IGlucHV0U3ltYm9sO1xyXG4gICAgICAgIG11bHRpID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICBtYXNrRXhwcmVzc2lvbltjdXJzb3IgKyAxXSA9PT0gJz8nICYmXHJcbiAgICAgICAgdGhpcy5fY2hlY2tTeW1ib2xNYXNrKGlucHV0U3ltYm9sLCBtYXNrRXhwcmVzc2lvbltjdXJzb3IgKyAyXSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IGlucHV0U3ltYm9sO1xyXG4gICAgICAgIGN1cnNvciArPSAzO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2NoZWNrU3ltYm9sTWFzayhpbnB1dFN5bWJvbCwgbWFza0V4cHJlc3Npb25bY3Vyc29yXSkpIHtcclxuICAgICAgICBpZiAobWFza0V4cHJlc3Npb25bY3Vyc29yXSA9PT0gJ2QnKSB7XHJcbiAgICAgICAgICBpZiAoTnVtYmVyKGlucHV0U3ltYm9sKSA+IDMpIHtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IDA7XHJcbiAgICAgICAgICAgIGN1cnNvciArPSAxO1xyXG4gICAgICAgICAgICBjb25zdCBzaGlmdFN0ZXA6IG51bWJlciA9IC9cXCp8XFw/L2cudGVzdChcclxuICAgICAgICAgICAgICBtYXNrRXhwcmVzc2lvbi5zbGljZSgwLCBjdXJzb3IpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICA/IGlucHV0QXJyYXkubGVuZ3RoXHJcbiAgICAgICAgICAgICAgOiBjdXJzb3I7XHJcbiAgICAgICAgICAgIHRoaXMuX3NoaWZ0LmFkZChzaGlmdFN0ZXAgKyB0aGlzLnByZWZpeC5sZW5ndGggfHwgMCk7XHJcbiAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtYXNrRXhwcmVzc2lvbltjdXJzb3IgLSAxXSA9PT0gJ2QnKSB7XHJcbiAgICAgICAgICBpZiAoTnVtYmVyKGlucHV0VmFsdWUuc2xpY2UoY3Vyc29yIC0gMSwgY3Vyc29yICsgMSkpID4gMzEpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtYXNrRXhwcmVzc2lvbltjdXJzb3JdID09PSAnbScpIHtcclxuICAgICAgICAgIGlmIChOdW1iZXIoaW5wdXRTeW1ib2wpID4gMSkge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gMDtcclxuICAgICAgICAgICAgY3Vyc29yICs9IDE7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoaWZ0U3RlcDogbnVtYmVyID0gL1xcKnxcXD8vZy50ZXN0KFxyXG4gICAgICAgICAgICAgIG1hc2tFeHByZXNzaW9uLnNsaWNlKDAsIGN1cnNvcilcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgID8gaW5wdXRBcnJheS5sZW5ndGhcclxuICAgICAgICAgICAgICA6IGN1cnNvcjtcclxuICAgICAgICAgICAgdGhpcy5fc2hpZnQuYWRkKHNoaWZ0U3RlcCArIHRoaXMucHJlZml4Lmxlbmd0aCB8fCAwKTtcclxuICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1hc2tFeHByZXNzaW9uW2N1cnNvciAtIDFdID09PSAnbScpIHtcclxuICAgICAgICAgIGlmIChOdW1iZXIoaW5wdXRWYWx1ZS5zbGljZShjdXJzb3IgLSAxLCBjdXJzb3IgKyAxKSkgPiAxMikge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzdWx0ICs9IGlucHV0U3ltYm9sO1xyXG4gICAgICAgIGN1cnNvcisrO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIHRoaXMubWFza1NwZWNpYWxDaGFyYWN0ZXJzLmluZGV4T2YobWFza0V4cHJlc3Npb25bY3Vyc29yXSkgIT09IC0xXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJlc3VsdCArPSBtYXNrRXhwcmVzc2lvbltjdXJzb3JdO1xyXG4gICAgICAgIGN1cnNvcisrO1xyXG4gICAgICAgIGNvbnN0IHNoaWZ0U3RlcDogbnVtYmVyID0gL1xcKnxcXD8vZy50ZXN0KG1hc2tFeHByZXNzaW9uLnNsaWNlKDAsIGN1cnNvcikpXHJcbiAgICAgICAgICA/IGlucHV0QXJyYXkubGVuZ3RoXHJcbiAgICAgICAgICA6IGN1cnNvcjtcclxuICAgICAgICB0aGlzLl9zaGlmdC5hZGQoc2hpZnRTdGVwICsgdGhpcy5wcmVmaXgubGVuZ3RoIHx8IDApO1xyXG4gICAgICAgIGktLTtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICB0aGlzLm1hc2tTcGVjaWFsQ2hhcmFjdGVycy5pbmRleE9mKGlucHV0U3ltYm9sKSA+IC0xICYmXHJcbiAgICAgICAgdGhpcy5tYXNrQXZhaWxhYmxlUGF0dGVybnNbbWFza0V4cHJlc3Npb25bY3Vyc29yXV0gJiZcclxuICAgICAgICB0aGlzLm1hc2tBdmFpbGFibGVQYXR0ZXJuc1ttYXNrRXhwcmVzc2lvbltjdXJzb3JdXS5vcHRpb25hbFxyXG4gICAgICApIHtcclxuICAgICAgICBjdXJzb3IrKztcclxuICAgICAgICBpLS07XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgdGhpcy5tYXNrRXhwcmVzc2lvbltjdXJzb3IgKyAxXSA9PT0gJyonICYmXHJcbiAgICAgICAgdGhpcy5fZmluZFNwZWNpYWxDaGFyKHRoaXMubWFza0V4cHJlc3Npb25bY3Vyc29yICsgMl0pICYmXHJcbiAgICAgICAgdGhpcy5fZmluZFNwZWNpYWxDaGFyKGlucHV0U3ltYm9sKSA9PT0gdGhpcy5tYXNrRXhwcmVzc2lvbltjdXJzb3IgKyAyXVxyXG4gICAgICApIHtcclxuICAgICAgICBjdXJzb3IgKz0gMztcclxuICAgICAgICByZXN1bHQgKz0gaW5wdXRTeW1ib2w7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHJlc3VsdC5sZW5ndGggKyAxID09PSBtYXNrRXhwcmVzc2lvbi5sZW5ndGggJiZcclxuICAgICAgdGhpcy5tYXNrU3BlY2lhbENoYXJhY3RlcnMuaW5kZXhPZihcclxuICAgICAgICBtYXNrRXhwcmVzc2lvblttYXNrRXhwcmVzc2lvbi5sZW5ndGggLSAxXVxyXG4gICAgICApICE9PSAtMVxyXG4gICAgKSB7XHJcbiAgICAgIHJlc3VsdCArPSBtYXNrRXhwcmVzc2lvblttYXNrRXhwcmVzc2lvbi5sZW5ndGggLSAxXTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgc2hpZnQgPSAxO1xyXG4gICAgbGV0IG5ld1Bvc2l0aW9uOiBudW1iZXIgPSBwb3NpdGlvbiArIDE7XHJcblxyXG4gICAgd2hpbGUgKHRoaXMuX3NoaWZ0LmhhcyhuZXdQb3NpdGlvbikpIHtcclxuICAgICAgc2hpZnQrKztcclxuICAgICAgbmV3UG9zaXRpb24rKztcclxuICAgIH1cclxuXHJcbiAgICBjYih0aGlzLl9zaGlmdC5oYXMocG9zaXRpb24pID8gc2hpZnQgOiAwKTtcclxuICAgIGxldCByZXMgPSBgJHt0aGlzLnByZWZpeH0ke3Jlc3VsdH1gO1xyXG4gICAgcmVzID1cclxuICAgICAgdGhpcy5zdWZpeCAmJiBjdXJzb3IgPT09IG1hc2tFeHByZXNzaW9uLmxlbmd0aFxyXG4gICAgICAgID8gYCR7dGhpcy5wcmVmaXh9JHtyZXN1bHR9JHt0aGlzLnN1Zml4fWBcclxuICAgICAgICA6IGAke3RoaXMucHJlZml4fSR7cmVzdWx0fWA7XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxuICBwdWJsaWMgX2ZpbmRTcGVjaWFsQ2hhcihpbnB1dFN5bWJvbDogc3RyaW5nKTogdW5kZWZpbmVkIHwgc3RyaW5nIHtcclxuICAgIGNvbnN0IHN5bWJvbDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdGhpcy5tYXNrU3BlY2lhbENoYXJhY3RlcnMuZmluZChcclxuICAgICAgKHZhbDogc3RyaW5nKSA9PiB2YWwgPT09IGlucHV0U3ltYm9sXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHN5bWJvbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2NoZWNrU3ltYm9sTWFzayhpbnB1dFN5bWJvbDogc3RyaW5nLCBtYXNrU3ltYm9sOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHRoaXMubWFza0F2YWlsYWJsZVBhdHRlcm5zID0gdGhpcy5jdXN0b21QYXR0ZXJuXHJcbiAgICAgID8gdGhpcy5jdXN0b21QYXR0ZXJuXHJcbiAgICAgIDogdGhpcy5tYXNrQXZhaWxhYmxlUGF0dGVybnM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLm1hc2tBdmFpbGFibGVQYXR0ZXJuc1ttYXNrU3ltYm9sXSAmJlxyXG4gICAgICB0aGlzLm1hc2tBdmFpbGFibGVQYXR0ZXJuc1ttYXNrU3ltYm9sXS5wYXR0ZXJuICYmXHJcbiAgICAgIHRoaXMubWFza0F2YWlsYWJsZVBhdHRlcm5zW21hc2tTeW1ib2xdLnBhdHRlcm4udGVzdChpbnB1dFN5bWJvbClcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdCwgSW5qZWN0YWJsZSwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGNvbmZpZywgSUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNYXNrQXBwbGllclNlcnZpY2UgfSBmcm9tICcuL21hc2stYXBwbGllci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTWFza1NlcnZpY2UgZXh0ZW5kcyBNYXNrQXBwbGllclNlcnZpY2Uge1xyXG4gIHB1YmxpYyBtYXNrRXhwcmVzc2lvbiA9ICcnO1xyXG4gIHB1YmxpYyBpc051bWJlclZhbHVlID0gZmFsc2U7XHJcbiAgcHVibGljIHNob3dNYXNrVHlwZWQgPSBmYWxzZTtcclxuICBwdWJsaWMgbWFza0lzU2hvd24gPSAnJztcclxuICBwcml2YXRlIF9mb3JtRWxlbWVudDogSFRNTElucHV0RWxlbWVudDtcclxuICBwcml2YXRlIHVubWFza2VkVmFsdWU6IHN0cmluZyB8IG51bWJlcjtcclxuICBwdWJsaWMgb25Ub3VjaCA9ICgpID0+IHt9O1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxyXG4gICAgQEluamVjdChjb25maWcpIHByb3RlY3RlZCBfY29uZmlnOiBJQ29uZmlnLFxyXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIF9uZ0NvbnRyb2w6IE5nQ29udHJvbFxyXG4gICkge1xyXG4gICAgc3VwZXIoX2NvbmZpZyk7XHJcbiAgICB0aGlzLnNldEZvcm1FbGVtZW50KF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5fZm9ybUVsZW1lbnQubG9jYWxOYW1lICE9PSAnaW5wdXQnKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRFbCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG4gICAgICAgIGlmIChpbnB1dEVsICE9IG51bGwpIHtcclxuICAgICAgICAgIHRoaXMuc2V0Rm9ybUVsZW1lbnQoaW5wdXRFbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICAgICAgJ21hc2stc2VydmljZTogQ291bGQgbm90IGZpbmQgSW5wdXQgRWxlbWVudC4gIFBsZWFzZSBtYWtlIHN1cmUgb25lIGlzIHByZXNlbnQuJ1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuX25nQ29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCh2YWx1ZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fb25Db250cm9sVmFsdWVDaGFuZ2UodmFsdWUpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEZvcm1FbGVtZW50KGVsOiBIVE1MSW5wdXRFbGVtZW50KSB7XHJcbiAgICB0aGlzLl9mb3JtRWxlbWVudCA9IGVsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFwcGx5TWFzayhcclxuICAgIGlucHV0VmFsdWU6IHN0cmluZyxcclxuICAgIG1hc2tFeHByZXNzaW9uOiBzdHJpbmcsXHJcbiAgICBwb3NpdGlvbjogbnVtYmVyID0gMCxcclxuICAgIGNiOiBGdW5jdGlvbiA9ICgpID0+IHt9XHJcbiAgKTogc3RyaW5nIHtcclxuICAgIHRoaXMubWFza0lzU2hvd24gPSB0aGlzLnNob3dNYXNrVHlwZWRcclxuICAgICAgPyB0aGlzLm1hc2tFeHByZXNzaW9uLnJlcGxhY2UoL1swLTldL2csICdfJylcclxuICAgICAgOiAnJztcclxuICAgIGlmICghaW5wdXRWYWx1ZSAmJiB0aGlzLnNob3dNYXNrVHlwZWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHJlZml4ICsgdGhpcy5tYXNrSXNTaG93bjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBzdXBlci5hcHBseU1hc2soaW5wdXRWYWx1ZSwgbWFza0V4cHJlc3Npb24sIHBvc2l0aW9uLCBjYik7XHJcbiAgICB0aGlzLnVubWFza2VkVmFsdWUgPSB0aGlzLmdldFVubWFza2VkVmFsdWUocmVzdWx0KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fYXBwbHlNYXNrUmVzdWx0KHJlc3VsdCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXBwbHlWYWx1ZUNoYW5nZXMoXHJcbiAgICBwb3NpdGlvbjogbnVtYmVyID0gMCxcclxuICAgIGNiOiBGdW5jdGlvbiA9ICgpID0+IHt9XHJcbiAgKTogdm9pZCB7XHJcbiAgICBjb25zdCBtYXNrZWRJbnB1dDogc3RyaW5nIHwgbnVtYmVyID0gdGhpcy5hcHBseU1hc2soXHJcbiAgICAgIHRoaXMuX2Zvcm1FbGVtZW50LnZhbHVlLFxyXG4gICAgICB0aGlzLm1hc2tFeHByZXNzaW9uLFxyXG4gICAgICBwb3NpdGlvbixcclxuICAgICAgY2JcclxuICAgICk7XHJcbiAgICB0aGlzLl9mb3JtRWxlbWVudC52YWx1ZSA9IG1hc2tlZElucHV0O1xyXG4gICAgaWYgKHRoaXMuX2Zvcm1FbGVtZW50ID09PSB0aGlzLmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jbGVhcklmTm90TWF0Y2hGbigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNob3dNYXNrSW5JbnB1dCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNob3dNYXNrVHlwZWQpIHtcclxuICAgICAgdGhpcy5tYXNrSXNTaG93biA9IHRoaXMubWFza0V4cHJlc3Npb24ucmVwbGFjZSgvWzAtOV0vZywgJ18nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGVhcklmTm90TWF0Y2hGbigpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdjbGVhci1pZi1ub3QtbWF0Y2hlZCcpO1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmNsZWFySWZOb3RNYXRjaCA9PT0gdHJ1ZSAmJlxyXG4gICAgICB0aGlzLm1hc2tFeHByZXNzaW9uLmxlbmd0aCAhPT0gdGhpcy5fZm9ybUVsZW1lbnQudmFsdWUubGVuZ3RoXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5zZXRWYWx1ZSgnJyk7XHJcbiAgICAgIHRoaXMuYXBwbHlNYXNrKHRoaXMuX2Zvcm1FbGVtZW50LnZhbHVlLCB0aGlzLm1hc2tFeHByZXNzaW9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnVubWFza2VkVmFsdWUgPSB0aGlzLmdldFVubWFza2VkVmFsdWUodmFsdWUpO1xyXG4gICAgdGhpcy5fbmdDb250cm9sLmNvbnRyb2wuc2V0VmFsdWUodmFsdWUpO1xyXG4gIH1cclxuICBwdWJsaWMgc2V0Rm9ybUVsZW1lbnRQcm9wZXJ0eShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBib29sZWFuKSB7XHJcbiAgICBpZiAodGhpcy5fZm9ybUVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5fZm9ybUVsZW1lbnQsIG5hbWUsIHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRVbm1hc2tlZFZhbHVlKHJlc3VsdDogc3RyaW5nKTogc3RyaW5nIHwgbnVtYmVyIHtcclxuICAgIGNvbnN0IHJlc3VsdE5vU3VmZml4T3JQcmVmaXggPSB0aGlzLl9yZW1vdmVTdWZpeChcclxuICAgICAgdGhpcy5fcmVtb3ZlUHJlZml4KHJlc3VsdClcclxuICAgICk7XHJcbiAgICBsZXQgY2hhbmdlVmFsdWU6IHN0cmluZyB8IG51bWJlciA9IHJlc3VsdE5vU3VmZml4T3JQcmVmaXg7XHJcblxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5kcm9wU3BlY2lhbENoYXJhY3RlcnMpKSB7XHJcbiAgICAgIGNoYW5nZVZhbHVlID0gdGhpcy5fcmVtb3ZlTWFzayhcclxuICAgICAgICByZXN1bHROb1N1ZmZpeE9yUHJlZml4LFxyXG4gICAgICAgIHRoaXMuZHJvcFNwZWNpYWxDaGFyYWN0ZXJzXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZHJvcFNwZWNpYWxDaGFyYWN0ZXJzKSB7XHJcbiAgICAgIGNoYW5nZVZhbHVlID0gdGhpcy5fcmVtb3ZlTWFzayhcclxuICAgICAgICByZXN1bHROb1N1ZmZpeE9yUHJlZml4LFxyXG4gICAgICAgIHRoaXMubWFza1NwZWNpYWxDaGFyYWN0ZXJzXHJcbiAgICAgICk7XHJcbiAgICAgIGNoYW5nZVZhbHVlID0gdGhpcy5pc051bWJlclZhbHVlID8gTnVtYmVyKGNoYW5nZVZhbHVlKSA6IGNoYW5nZVZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjaGFuZ2VWYWx1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3JlbW92ZU1hc2soXHJcbiAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgc3BlY2lhbENoYXJhY3RlcnNGb3JSZW1vdmU6IHN0cmluZ1tdXHJcbiAgKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB2YWx1ZVxyXG4gICAgICA/IHZhbHVlLnJlcGxhY2UodGhpcy5fcmVnRXhwRm9yUmVtb3ZlKHNwZWNpYWxDaGFyYWN0ZXJzRm9yUmVtb3ZlKSwgJycpXHJcbiAgICAgIDogdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9yZW1vdmVQcmVmaXgodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoIXRoaXMucHJlZml4KSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZSA/IHZhbHVlLnJlcGxhY2UodGhpcy5wcmVmaXgsICcnKSA6IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfcmVtb3ZlU3VmaXgodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoIXRoaXMuc3VmaXgpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlID8gdmFsdWUucmVwbGFjZSh0aGlzLnN1Zml4LCAnJykgOiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3JlZ0V4cEZvclJlbW92ZShzcGVjaWFsQ2hhcmFjdGVyc0ZvclJlbW92ZTogc3RyaW5nW10pOiBSZWdFeHAge1xyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXHJcbiAgICAgIHNwZWNpYWxDaGFyYWN0ZXJzRm9yUmVtb3ZlLm1hcCgoaXRlbTogc3RyaW5nKSA9PiBgXFxcXCR7aXRlbX1gKS5qb2luKCd8JyksXHJcbiAgICAgICdnaSdcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9hcHBseU1hc2tSZXN1bHQocmVzdWx0OiBzdHJpbmcpIHtcclxuICAgIGlmICghdGhpcy5zaG93TWFza1R5cGVkKSB7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXNMZW46IG51bWJlciA9IHJlc3VsdC5sZW5ndGg7XHJcbiAgICBjb25zdCBwcmVmTm1hc2s6IHN0cmluZyA9IHRoaXMucHJlZml4ICsgdGhpcy5tYXNrSXNTaG93bjtcclxuICAgIGNvbnN0IGlmTWFza0lzU2hvd24gPSBwcmVmTm1hc2suc2xpY2UocmVzTGVuKTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0ICsgaWZNYXNrSXNTaG93bjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX29uQ29udHJvbFZhbHVlQ2hhbmdlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIC8qXHJcbiAgICAgIEJlY2F1c2Ugd2UgYXJlIG5vIGxvbmdlciB3b3JraW5nIHdpdGggdGhlIENvbnRyb2xWYWx1ZUFjY2Vzc29yIChzaW5jZSBpdCBkb2Vzbid0IHBsYXkgbmljZSB3aXRoIElvbmljKS5cclxuICAgICAgV2UgbmVlZCBsb2dpYyBoZXJlIHRvIHRyYWNrIGNoYW5nZXMgbWFkZSBwcm9ncmFtbWF0aWNhbGx5IHRvIHRoZSBmb3JtIHZhbHVlLiAgU3BlY2lmaWNhbGx5IGNoYW5nZXNcclxuICAgICAgZG9uZSBPVVRTSURFIG9mIHRoZSBtYXNrLiBTaW5jZSBjaGFuZ2VzIGRvbmUgaW5zaWRlIHRoZSBtYXNrIG1heSBhbHNvIGZpcmUgb2ZmIHRoaXMgbWV0aG9kXHJcbiAgICAgIHdlIG5lZWQgdG8gZG8gc29tZSBqaXUgaml0c3UgdG8gZW5zdXJlIHdlIGFyZSBpZ25vcmluZyB0aG9zZSBjaGFuZ2VzLlxyXG4gICAgKi9cclxuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5nZXRVbm1hc2tlZFZhbHVlKHZhbHVlKTtcclxuXHJcbiAgICBpZiAodGhpcy51bm1hc2tlZFZhbHVlID09PSBuZXdWYWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHVubWFza2VkU3Vic3RyaW5nOiBzdHJpbmcgPSBudWxsO1xyXG5cclxuICAgIC8vIFRoaXMgbWV0aG9kICh2YWx1ZSBjaGFuZ2UpIGZpcmVzIG9mZiBiZWZvcmUgYSBLZXlkb3duIG9yIElucHV0IGV2ZW50LCBzbyB3ZSBuZWVkIHRvIHN1YnRyYWN0XHJcbiAgICAvLyB0aGUgbGF0ZXN0IGNoYW5nZSBhbmQgY29tcGFyZSB0byBvdXIgcHJldmlvdXMgKGtub3duKSB2YWx1ZS5cclxuICAgIGlmICh0aGlzLnVubWFza2VkVmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICBjb25zdCB2ID0gdGhpcy51bm1hc2tlZFZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgIHVubWFza2VkU3Vic3RyaW5nID0gdi5zdWJzdHJpbmcoMCwgdi5sZW5ndGggLSAxKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmV3VmFsdWUgIT09IHVubWFza2VkU3Vic3RyaW5nKSB7XHJcbiAgICAgIGNvbnN0IG52ID0gbmV3VmFsdWUgIT0gbnVsbCA/IG5ld1ZhbHVlLnRvU3RyaW5nKCkgOiBudWxsO1xyXG4gICAgICBjb25zdCB2ID0gdGhpcy5hcHBseU1hc2sobnYsIHRoaXMubWFza0V4cHJlc3Npb24pO1xyXG4gICAgICB0aGlzLnNldFZhbHVlKHYpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSW5qZWN0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTWFza1NlcnZpY2UgfSBmcm9tICcuL21hc2suc2VydmljZSc7XHJcbmltcG9ydCB7IElDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1ttYXNrXScsXHJcbiAgcHJvdmlkZXJzOiBbTWFza1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXNrRGlyZWN0aXZlIHtcclxuICBwcml2YXRlIF9tYXNrVmFsdWU6IHN0cmluZztcclxuICBwcml2YXRlIF9pbnB1dFZhbHVlOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfcG9zaXRpb246IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gIHByaXZhdGUgX3N0YXJ0OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfZW5kOiBudW1iZXI7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgcHVibGljIG9uVG91Y2ggPSAoKSA9PiB7fTtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcclxuICAgIHByaXZhdGUgX21hc2tTZXJ2aWNlOiBNYXNrU2VydmljZSxcclxuICAgIHByaXZhdGUgX25nQ29udHJvbDogTmdDb250cm9sXHJcbiAgKSB7fVxyXG5cclxuICBASW5wdXQoJ21hc2snKVxyXG4gIHB1YmxpYyBzZXQgbWFza0V4cHJlc3Npb24odmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fbWFza1ZhbHVlID0gdmFsdWUgfHwgJyc7XHJcbiAgICBpZiAoIXRoaXMuX21hc2tWYWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9pbnB1dFZhbHVlID0gdGhpcy5fbmdDb250cm9sLmNvbnRyb2wudmFsdWU7XHJcbiAgICB0aGlzLl9pbml0aWFsaXplTWFzaygpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IHNwZWNpYWxDaGFyYWN0ZXJzKHZhbHVlOiBJQ29uZmlnWydzcGVjaWFsQ2hhcmFjdGVycyddKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgICF2YWx1ZSB8fFxyXG4gICAgICAhQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHxcclxuICAgICAgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmICF2YWx1ZS5sZW5ndGgpXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fbWFza1NlcnZpY2UubWFza1NwZWNpYWxDaGFyYWN0ZXJzID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgcGF0dGVybnModmFsdWU6IElDb25maWdbJ3BhdHRlcm5zJ10pIHtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fbWFza1NlcnZpY2UubWFza0F2YWlsYWJsZVBhdHRlcm5zID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgcHJlZml4KHZhbHVlOiBJQ29uZmlnWydwcmVmaXgnXSkge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9tYXNrU2VydmljZS5wcmVmaXggPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCBzdWZpeCh2YWx1ZTogSUNvbmZpZ1snc3VmaXgnXSkge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9tYXNrU2VydmljZS5zdWZpeCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IGRyb3BTcGVjaWFsQ2hhcmFjdGVycyh2YWx1ZTogSUNvbmZpZ1snZHJvcFNwZWNpYWxDaGFyYWN0ZXJzJ10pIHtcclxuICAgIHRoaXMuX21hc2tTZXJ2aWNlLmRyb3BTcGVjaWFsQ2hhcmFjdGVycyA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IHNob3dNYXNrVHlwZWQodmFsdWU6IElDb25maWdbJ3Nob3dNYXNrVHlwZWQnXSkge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9tYXNrU2VydmljZS5zaG93TWFza1R5cGVkID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgc2hvd1RlbXBsYXRlKHZhbHVlOiBJQ29uZmlnWydzaG93VGVtcGxhdGUnXSkge1xyXG4gICAgdGhpcy5fbWFza1NlcnZpY2Uuc2hvd1RlbXBsYXRlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgY2xlYXJJZk5vdE1hdGNoKHZhbHVlOiBJQ29uZmlnWydjbGVhcklmTm90TWF0Y2gnXSkge1xyXG4gICAgdGhpcy5fbWFza1NlcnZpY2UuY2xlYXJJZk5vdE1hdGNoID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50J10pXHJcbiAgcHVibGljIG9uSW5wdXQoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWw6IEhUTUxJbnB1dEVsZW1lbnQgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgdGhpcy5faW5wdXRWYWx1ZSA9IGVsLnZhbHVlO1xyXG5cclxuICAgIGlmICghdGhpcy5fbWFza1ZhbHVlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHBvc2l0aW9uOiBudW1iZXIgPVxyXG4gICAgICAoZWwuc2VsZWN0aW9uU3RhcnQgYXMgbnVtYmVyKSA9PT0gMVxyXG4gICAgICAgID8gKGVsLnNlbGVjdGlvblN0YXJ0IGFzIG51bWJlcikgKyB0aGlzLl9tYXNrU2VydmljZS5wcmVmaXgubGVuZ3RoXHJcbiAgICAgICAgOiAoZWwuc2VsZWN0aW9uU3RhcnQgYXMgbnVtYmVyKTtcclxuICAgIGxldCBjYXJldFNoaWZ0ID0gMDtcclxuICAgIHRoaXMuX21hc2tTZXJ2aWNlLmFwcGx5VmFsdWVDaGFuZ2VzKFxyXG4gICAgICBwb3NpdGlvbixcclxuICAgICAgKHNoaWZ0OiBudW1iZXIpID0+IChjYXJldFNoaWZ0ID0gc2hpZnQpXHJcbiAgICApO1xyXG4gICAgLy8gb25seSBzZXQgdGhlIHNlbGVjdGlvbiBpZiB0aGUgZWxlbWVudCBpcyBhY3RpdmVcclxuICAgIGlmICh0aGlzLmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IGVsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGVsLnNlbGVjdGlvblN0YXJ0ID0gZWwuc2VsZWN0aW9uRW5kID1cclxuICAgICAgdGhpcy5fcG9zaXRpb24gIT09IG51bGxcclxuICAgICAgICA/IHRoaXMuX3Bvc2l0aW9uXHJcbiAgICAgICAgOiBwb3NpdGlvbiArXHJcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgICAgICgoZSBhcyBhbnkpLmlucHV0VHlwZSA9PT0gJ2RlbGV0ZUNvbnRlbnRCYWNrd2FyZCcgPyAwIDogY2FyZXRTaGlmdCk7XHJcbiAgICB0aGlzLl9wb3NpdGlvbiA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdibHVyJylcclxuICBwdWJsaWMgb25CbHVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fbWFza1NlcnZpY2UuY2xlYXJJZk5vdE1hdGNoRm4oKTtcclxuICAgIHRoaXMub25Ub3VjaCgpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIHB1YmxpYyBvbkZvY3VzKGU6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBlbDogSFRNTElucHV0RWxlbWVudCA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBlbCAhPT0gbnVsbCAmJlxyXG4gICAgICBlbC5zZWxlY3Rpb25TdGFydCAhPT0gbnVsbCAmJlxyXG4gICAgICBlbC5zZWxlY3Rpb25TdGFydCA9PT0gZWwuc2VsZWN0aW9uRW5kICYmXHJcbiAgICAgIGVsLnNlbGVjdGlvblN0YXJ0ID4gdGhpcy5fbWFza1NlcnZpY2UucHJlZml4Lmxlbmd0aCAmJlxyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgKGUgYXMgYW55KS5rZXlDb2RlICE9PSAzOFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9tYXNrU2VydmljZS5zaG93TWFza1R5cGVkKSB7XHJcbiAgICAgIHRoaXMuX21hc2tTZXJ2aWNlLm1hc2tJc1Nob3duID0gdGhpcy5fbWFza1NlcnZpY2UubWFza0V4cHJlc3Npb24ucmVwbGFjZShcclxuICAgICAgICAvWzAtOV0vZyxcclxuICAgICAgICAnXydcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGVsLnZhbHVlID1cclxuICAgICAgIWVsLnZhbHVlIHx8IGVsLnZhbHVlID09PSB0aGlzLl9tYXNrU2VydmljZS5wcmVmaXhcclxuICAgICAgICA/IHRoaXMuX21hc2tTZXJ2aWNlLnByZWZpeCArIHRoaXMuX21hc2tTZXJ2aWNlLm1hc2tJc1Nob3duXHJcbiAgICAgICAgOiBlbC52YWx1ZTtcclxuICAgIC8qKiBmaXggb2YgY3Vyc29yIHBvc2l0aW9uIHdpdGggcHJlZml4IHdoZW4gbW91c2UgY2xpY2sgb2NjdXIgKi9cclxuICAgIGlmIChcclxuICAgICAgKChlbC5zZWxlY3Rpb25TdGFydCBhcyBudW1iZXIpIHx8IChlbC5zZWxlY3Rpb25FbmQgYXMgbnVtYmVyKSkgPD1cclxuICAgICAgdGhpcy5fbWFza1NlcnZpY2UucHJlZml4Lmxlbmd0aFxyXG4gICAgKSB7XHJcbiAgICAgIGVsLnNlbGVjdGlvblN0YXJ0ID0gdGhpcy5fbWFza1NlcnZpY2UucHJlZml4Lmxlbmd0aDtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXHJcbiAgcHVibGljIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBlbDogSFRNTElucHV0RWxlbWVudCA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzOCkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzNyB8fCBlLmtleUNvZGUgPT09IDgpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIChlbC5zZWxlY3Rpb25TdGFydCBhcyBudW1iZXIpIDw9IHRoaXMuX21hc2tTZXJ2aWNlLnByZWZpeC5sZW5ndGggJiZcclxuICAgICAgICAoZWwuc2VsZWN0aW9uRW5kIGFzIG51bWJlcikgPD0gdGhpcy5fbWFza1NlcnZpY2UucHJlZml4Lmxlbmd0aFxyXG4gICAgICApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5vbkZvY3VzKGUpO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgZS5rZXlDb2RlID09PSA4ICYmXHJcbiAgICAgICAgZWwuc2VsZWN0aW9uU3RhcnQgPT09IDAgJiZcclxuICAgICAgICBlbC5zZWxlY3Rpb25FbmQgPT09IGVsLnZhbHVlLmxlbmd0aFxyXG4gICAgICApIHtcclxuICAgICAgICBlbC52YWx1ZSA9IHRoaXMuX21hc2tTZXJ2aWNlLnByZWZpeDtcclxuICAgICAgICB0aGlzLl9wb3NpdGlvbiA9IHRoaXMuX21hc2tTZXJ2aWNlLnByZWZpeFxyXG4gICAgICAgICAgPyB0aGlzLl9tYXNrU2VydmljZS5wcmVmaXgubGVuZ3RoXHJcbiAgICAgICAgICA6IDE7XHJcbiAgICAgICAgdGhpcy5vbklucHV0KGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdwYXN0ZScpXHJcbiAgcHVibGljIG9uUGFzdGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9wb3NpdGlvbiA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xyXG4gIH1cclxuXHJcbiAgLyoqIEl0IGRpc2FibGVzIHRoZSBpbnB1dCBlbGVtZW50ICovXHJcbiAgcHVibGljIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5fbWFza1NlcnZpY2Uuc2V0Rm9ybUVsZW1lbnRQcm9wZXJ0eSgnZGlzYWJsZWQnLCBpc0Rpc2FibGVkKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3JlcGVhdFBhdHRlcm5TeW1ib2xzKG1hc2tFeHA6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAobWFza0V4cC5tYXRjaCgve1swLTldK30vKSAmJlxyXG4gICAgICAgIG1hc2tFeHBcclxuICAgICAgICAgIC5zcGxpdCgnJylcclxuICAgICAgICAgIC5yZWR1Y2UoKGFjY3VtOiBzdHJpbmcsIGN1cnJ2YWw6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0ID0gY3VycnZhbCA9PT0gJ3snID8gaW5kZXggOiB0aGlzLl9zdGFydDtcclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJydmFsICE9PSAnfScpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbWFza1NlcnZpY2UuX2ZpbmRTcGVjaWFsQ2hhcihjdXJydmFsKVxyXG4gICAgICAgICAgICAgICAgPyBhY2N1bSArIGN1cnJ2YWxcclxuICAgICAgICAgICAgICAgIDogYWNjdW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fZW5kID0gaW5kZXg7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcGVhdE51bWJlcjogbnVtYmVyID0gTnVtYmVyKFxyXG4gICAgICAgICAgICAgIG1hc2tFeHAuc2xpY2UodGhpcy5fc3RhcnQgKyAxLCB0aGlzLl9lbmQpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcGFjZVdpdGg6IHN0cmluZyA9IG5ldyBBcnJheShyZXBlYXROdW1iZXIgKyAxKS5qb2luKFxyXG4gICAgICAgICAgICAgIG1hc2tFeHBbdGhpcy5fc3RhcnQgLSAxXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gYWNjdW0gKyByZXBhY2VXaXRoO1xyXG4gICAgICAgICAgfSwgJycpKSB8fFxyXG4gICAgICBtYXNrRXhwXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaW5pdGlhbGl6ZU1hc2soKSB7XHJcbiAgICB0aGlzLl9tYXNrU2VydmljZS5tYXNrRXhwcmVzc2lvbiA9IHRoaXMuX3JlcGVhdFBhdHRlcm5TeW1ib2xzKFxyXG4gICAgICB0aGlzLl9tYXNrVmFsdWVcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgbSA9IHRoaXMuX21hc2tTZXJ2aWNlLmFwcGx5TWFzayhcclxuICAgICAgdGhpcy5faW5wdXRWYWx1ZSxcclxuICAgICAgdGhpcy5fbWFza1NlcnZpY2UubWFza0V4cHJlc3Npb25cclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5fbWFza1NlcnZpY2Uuc2V0VmFsdWUobSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWFza0FwcGxpZXJTZXJ2aWNlIH0gZnJvbSAnLi9tYXNrLWFwcGxpZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IElDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ21hc2snLFxyXG4gIHB1cmU6IHRydWVcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hc2tQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX21hc2tTZXJ2aWNlOiBNYXNrQXBwbGllclNlcnZpY2UpIHt9XHJcblxyXG4gIHB1YmxpYyB0cmFuc2Zvcm0oXHJcbiAgICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLFxyXG4gICAgbWFzazogc3RyaW5nIHwgW3N0cmluZywgSUNvbmZpZ1sncGF0dGVybnMnXV1cclxuICApOiBzdHJpbmcge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIG1hc2sgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9tYXNrU2VydmljZS5hcHBseU1hc2soYCR7dmFsdWV9YCwgbWFzayk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fbWFza1NlcnZpY2UuYXBwbHlNYXNrV2l0aFBhdHRlcm4oYCR7dmFsdWV9YCwgbWFzayk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgY29uZmlnLFxyXG4gIElOSVRJQUxfQ09ORklHLFxyXG4gIGluaXRpYWxDb25maWcsXHJcbiAgTkVXX0NPTkZJRyxcclxuICBvcHRpb25zQ29uZmlnXHJcbiAgfSBmcm9tICcuL2NvbmZpZyc7XHJcbmltcG9ydCB7IE1hc2tBcHBsaWVyU2VydmljZSB9IGZyb20gJy4vbWFzay1hcHBsaWVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXNrRGlyZWN0aXZlIH0gZnJvbSAnLi9tYXNrLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE1hc2tQaXBlIH0gZnJvbSAnLi9tYXNrLnBpcGUnO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgcHJvdmlkZXJzOiBbTWFza0FwcGxpZXJTZXJ2aWNlLCBNYXNrUGlwZV0sXHJcbiAgZXhwb3J0czogW01hc2tEaXJlY3RpdmUsIE1hc2tQaXBlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtNYXNrRGlyZWN0aXZlLCBNYXNrUGlwZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neE1hc2tJb25pY01vZHVsZSB7XHJcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZ1ZhbHVlPzogb3B0aW9uc0NvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE5neE1hc2tJb25pY01vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogTkVXX0NPTkZJRyxcclxuICAgICAgICAgIHVzZVZhbHVlOiBjb25maWdWYWx1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogSU5JVElBTF9DT05GSUcsXHJcbiAgICAgICAgICB1c2VWYWx1ZTogaW5pdGlhbENvbmZpZ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogY29uZmlnLFxyXG4gICAgICAgICAgdXNlRmFjdG9yeTogX2NvbmZpZ0ZhY3RvcnksXHJcbiAgICAgICAgICBkZXBzOiBbSU5JVElBTF9DT05GSUcsIE5FV19DT05GSUddXHJcbiAgICAgICAgfSxcclxuICAgICAgICBNYXNrUGlwZVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxuICBwdWJsaWMgc3RhdGljIGZvckNoaWxkKGNvbmZpZ1ZhbHVlPzogb3B0aW9uc0NvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE5neE1hc2tJb25pY01vZHVsZVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfY29uZmlnRmFjdG9yeShcclxuICBpbml0Q29uZmlnOiBvcHRpb25zQ29uZmlnLFxyXG4gIGNvbmZpZ1ZhbHVlOiBvcHRpb25zQ29uZmlnIHwgKCgpID0+IG9wdGlvbnNDb25maWcpXHJcbik6IEZ1bmN0aW9uIHwgb3B0aW9uc0NvbmZpZyB7XHJcbiAgcmV0dXJuIHR5cGVvZiBjb25maWdWYWx1ZSA9PT0gJ2Z1bmN0aW9uJ1xyXG4gICAgPyBjb25maWdWYWx1ZSgpXHJcbiAgICA6IHsgLi4uaW5pdENvbmZpZywgLi4uY29uZmlnVmFsdWUgfTtcclxufVxyXG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBbUJBLElBQWEsTUFBTSxHQUEyQixJQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUM7O0FBQzFFLElBQWEsVUFBVSxHQUEyQixJQUFJLGNBQWMsQ0FDbEUsWUFBWSxDQUNiOztBQUNELElBQWEsY0FBYyxHQUE0QixJQUFJLGNBQWMsQ0FDdkUsZ0JBQWdCLENBQ2pCOztBQUVELElBQWEsYUFBYSxHQUFZO0lBQ3BDLEtBQUssRUFBRSxFQUFFO0lBQ1QsTUFBTSxFQUFFLEVBQUU7SUFDVixlQUFlLEVBQUUsS0FBSztJQUN0QixZQUFZLEVBQUUsS0FBSztJQUNuQixhQUFhLEVBQUUsS0FBSztJQUNwQixxQkFBcUIsRUFBRSxJQUFJO0lBQzNCLGlCQUFpQixFQUFFO1FBQ2pCLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0o7SUFDRCxRQUFRLEVBQUU7UUFDUixHQUFHLEVBQUU7WUFDSCxPQUFPLEVBQUUsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQzNCO1FBQ0QsR0FBRyxFQUFFO1lBQ0gsT0FBTyxFQUFFLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQztZQUMxQixRQUFRLEVBQUUsSUFBSTtTQUNmO1FBQ0QsQ0FBQyxFQUFFO1lBQ0QsT0FBTyxFQUFFLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQztTQUNuQztRQUNELENBQUMsRUFBRTtZQUNELE9BQU8sRUFBRSxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUM7U0FDaEM7UUFDRCxDQUFDLEVBQUU7WUFDRCxPQUFP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

/***/ })

});
//# sourceMappingURL=47.js.map