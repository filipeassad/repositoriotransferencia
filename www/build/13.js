webpackJsonp([13],{

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevalidacaoAtualizarEnderecoModule", function() { return RevalidacaoAtualizarEnderecoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__revalidacao_atualizar_endereco__ = __webpack_require__(422);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RevalidacaoAtualizarEnderecoModule = /** @class */ (function () {
    function RevalidacaoAtualizarEnderecoModule() {
    }
    RevalidacaoAtualizarEnderecoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__revalidacao_atualizar_endereco__["a" /* RevalidacaoAtualizarEnderecoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__revalidacao_atualizar_endereco__["a" /* RevalidacaoAtualizarEnderecoPage */]),
                __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__["a" /* PipeModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__revalidacao_atualizar_endereco__["a" /* RevalidacaoAtualizarEnderecoPage */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [],
        })
    ], RevalidacaoAtualizarEnderecoModule);
    return RevalidacaoAtualizarEnderecoModule;
}());

//# sourceMappingURL=revalidacao-atualizar-endereco.module.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RevalidacaoAtualizarEnderecoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_to_util_busca_cep_model__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_toast_helper__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_revalidacao_service__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_util_service__ = __webpack_require__(235);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RevalidacaoAtualizarEnderecoPage = /** @class */ (function () {
    function RevalidacaoAtualizarEnderecoPage(toastHelper, navCtrl, navParams, loadingCtrl, revalidacaoService, utilService) {
        this.toastHelper = toastHelper;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.revalidacaoService = revalidacaoService;
        this.utilService = utilService;
        this.buscaCep = new __WEBPACK_IMPORTED_MODULE_3__models_to_util_busca_cep_model__["a" /* UtilBuscaCep */]();
        this.numero = null;
        this.complemento = null;
        this.beneficiario = this.navParams.get('Beneficiario');
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            'cep': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(8), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[0-9]*$')]),
            'cidade': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]({ value: '', disabled: true }),
            'uf': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]({ value: '', disabled: true }),
            'bairro': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]({ value: '', disabled: true }),
            'endereco': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]({ value: '', disabled: true }),
            'numero': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]({
                value: null,
                disabled: true
            }, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[0-9]*$')]),
            'complemento': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]({ value: null, disabled: true })
        });
    }
    RevalidacaoAtualizarEnderecoPage.prototype.buscarCep = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.utilService.buscarCep(this.buscaCep.cep).subscribe(function (buscaCep) {
            if (buscaCep.length) {
                _this.buscaCep = buscaCep[0];
                _this.form.get('cep').disable();
                _this.form.get('cep').markAsPending();
                _this.form.get('numero').enable();
                _this.form.get('numero').markAsTouched();
                _this.form.get('complemento').enable();
            }
            else {
                _this.toastHelper.notificacaoErroCarregarDados();
            }
            loader.dismiss();
        }, function (error) {
            if (error.status == 400) {
                _this.toastHelper.notificacaoMensagem('CEP não encontrado, revalidação permitida somente na unidade CASSEMS');
            }
            else {
                _this.toastHelper.notificacaoErroCarregarDados();
            }
            loader.dismiss();
        });
    };
    RevalidacaoAtualizarEnderecoPage.prototype.revalidar = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.revalidacaoService.revalidarBeneficiario(this.beneficiario.matriculaCassems, this.buscaCep.cep, this.buscaCep.endereco, this.numero, this.complemento, this.buscaCep.bairro, 1).subscribe(function (auxiliar) {
            loader.dismiss();
            _this.toastHelper.notificacaoMensagem(auxiliar.descricaoCompleta);
            _this.navCtrl.setRoot('ListaGrupoFamiliarRevalidacaoPage');
        }, function (error) {
            if (error.status == 400) {
                _this.toastHelper.notificacaoMensagem(error.error.mensagem);
            }
            else {
                _this.toastHelper.notificacaoMensagem('Ocorreu um erro interno, por favor tente novamente mais tarde');
            }
            loader.dismiss();
        });
    };
    RevalidacaoAtualizarEnderecoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-revalidacao-atualizar-endereco',template:/*ion-inline-start:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\revalidacao\revalidacao-atualizar-endereco\revalidacao-atualizar-endereco.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Revalidação</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="contentRevalidacao">\n    <form (ngSubmit)="revalidar()" [formGroup]="form" class="formAtualizarEndereco" #formElement="ngForm">\n        <ion-list>\n            <ion-item>\n                <ion-label floating>CEP</ion-label>\n                <ion-input type="number" [(ngModel)]="buscaCep.cep" formControlName="cep" maxlength="8"></ion-input>\n            </ion-item>\n            <ion-row *ngIf="buscaCep.codCidade == null">\n                <button type="button" ion-button block [disabled]="!form.controls[\'cep\'].valid" (click)="buscarCep()"><span text-wrap>Buscar</span></button>\n            </ion-row>\n            <div class="dadosCep" *ngIf="buscaCep.codCidade != null">\n                <ion-item>\n                    <ion-label floating>Endereço</ion-label>\n                    <ion-input type="text" [(ngModel)]="buscaCep.endereco" formControlName="endereco"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label floating>Bairro</ion-label>\n                    <ion-input type="text" [(ngModel)]="buscaCep.bairro" formControlName="bairro"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label floating>Cidade</ion-label>\n                    <ion-input type="text" [(ngModel)]="buscaCep.cidade" formControlName="cidade"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label floating>UF</ion-label>\n                    <ion-input type="text" [(ngModel)]="buscaCep.uf" formControlName="uf"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label floating>Número</ion-label>\n                    <ion-input type="number" [(ngModel)]="numero" formControlName="numero"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label floating>Complemento</ion-label>\n                    <ion-input type="text" [(ngModel)]="complemento" formControlName="complemento"></ion-input>\n                </ion-item>\n                <ion-row>\n                    <button type="submit" ion-button block [disabled]="!formElement.form.valid">Revalidar</button>\n                </ion-row>\n            </div>\n        </ion-list>\n    </form>\n</ion-content>\n'/*ion-inline-end:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\revalidacao\revalidacao-atualizar-endereco\revalidacao-atualizar-endereco.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__helpers_toast_helper__["a" /* ToastHelper */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_revalidacao_service__["a" /* RevalidacaoService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_util_service__["a" /* UtilService */]])
    ], RevalidacaoAtualizarEnderecoPage);
    return RevalidacaoAtualizarEnderecoPage;
}());

//# sourceMappingURL=revalidacao-atualizar-endereco.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilBuscaCep; });
var UtilBuscaCep = /** @class */ (function () {
    function UtilBuscaCep() {
    }
    Object.defineProperty(UtilBuscaCep.prototype, "cep", {
        get: function () {
            return this._cep;
        },
        set: function (value) {
            this._cep = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UtilBuscaCep.prototype, "codCidade", {
        get: function () {
            return this._codCidade;
        },
        set: function (value) {
            this._codCidade = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UtilBuscaCep.prototype, "cidade", {
        get: function () {
            return this._cidade;
        },
        set: function (value) {
            this._cidade = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UtilBuscaCep.prototype, "uf", {
        get: function () {
            return this._uf;
        },
        set: function (value) {
            this._uf = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UtilBuscaCep.prototype, "bairro", {
        get: function () {
            return this._bairro;
        },
        set: function (value) {
            this._bairro = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UtilBuscaCep.prototype, "endereco", {
        get: function () {
            return this._endereco;
        },
        set: function (value) {
            this._endereco = value;
        },
        enumerable: true,
        configurable: true
    });
    return UtilBuscaCep;
}());

//# sourceMappingURL=util-busca-cep.model.js.map

/***/ })

});
//# sourceMappingURL=13.js.map