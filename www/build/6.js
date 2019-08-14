webpackJsonp([6],{

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodigoAtivacaoUsuarioModule", function() { return CodigoAtivacaoUsuarioModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__codigo_ativacao_usuario__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipe_module__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CodigoAtivacaoUsuarioModule = /** @class */ (function () {
    function CodigoAtivacaoUsuarioModule() {
    }
    CodigoAtivacaoUsuarioModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__codigo_ativacao_usuario__["a" /* CodigoAtivacaoUsuarioPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__codigo_ativacao_usuario__["a" /* CodigoAtivacaoUsuarioPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipe_module__["a" /* PipeModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__codigo_ativacao_usuario__["a" /* CodigoAtivacaoUsuarioPage */]],
            schemas: [],
            providers: [],
        })
    ], CodigoAtivacaoUsuarioModule);
    return CodigoAtivacaoUsuarioModule;
}());

//# sourceMappingURL=codigo-ativacao-usuario.module.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodigoAtivacaoUsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_to_codigo_ativacao_to_model__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enums_tipo_codigo_ativacao_enum__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_usuario_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_toast_helper__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CodigoAtivacaoUsuarioPage = /** @class */ (function () {
    function CodigoAtivacaoUsuarioPage(usuarioService, toastHelper, loadingCtrl, navCtrl) {
        this.usuarioService = usuarioService;
        this.toastHelper = toastHelper;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.codigoAtivacaoTO = new __WEBPACK_IMPORTED_MODULE_3__models_to_codigo_ativacao_to_model__["a" /* CodigoAtivacaoTO */]();
        this.listaTipoCodigoAtivacao = __WEBPACK_IMPORTED_MODULE_4__enums_tipo_codigo_ativacao_enum__["a" /* TipoCodigoAtivacaoEnum */];
        this.codigoAtivacaoForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            cpf: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(11), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(11), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern('^[0-9]*$')]),
            codigo: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(6), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern('^[0-9]*$')]),
            'tipo-codigo': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required])
        });
    }
    CodigoAtivacaoUsuarioPage.prototype.realizarEnvioCodigoAtivacao = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.usuarioService.validarCodigoAtivacao(this.codigoAtivacaoTO.cpf, this.codigoAtivacaoTO.codigoAtivacao.toString(), this.codigoAtivacaoTO.tipoCodigoAtivacao).subscribe(function (response) {
            if (_this.codigoAtivacaoTO.tipoCodigoAtivacao == _this.listaTipoCodigoAtivacao['Novo Cadastro']) {
                _this.toastHelper.notificacaoMensagem('Sua conta foi ativada com sucesso');
            }
            else {
                _this.toastHelper.notificacaoMensagem('A senha de sua conta foi redefinida com sucesso');
            }
            loader.dismiss();
            _this.navCtrl.setRoot('LoginPage');
        }, function (error) {
            if (error.status == 400) {
                _this.toastHelper.notificacaoMensagem('Dados inválidos');
            }
            else {
                _this.toastHelper.notificacaoMensagem('Ocorreu um erro ao verificar seu código, por favor tente novamente mais tarde');
            }
            loader.dismiss();
        });
    };
    CodigoAtivacaoUsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-codigo-ativacao-usuario',template:/*ion-inline-start:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\usuario\codigo-ativacao-usuario\codigo-ativacao-usuario.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Codigo Ativação</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="login-content auth-content">\n    <form class="login-form auth-form" (ngSubmit)="realizarEnvioCodigoAtivacao()" [formGroup]="codigoAtivacaoForm" #codigoAtivacaoFormElement="ngForm"\n          novalidate>\n        <ion-list>\n            <ion-item>\n                <ion-label floating>CPF</ion-label>\n                <ion-input type="number" [(ngModel)]="codigoAtivacaoTO.cpf"\n                           formControlName="cpf" maxlength="11"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Código de Ativação</ion-label>\n                <ion-input type="number" [(ngModel)]="codigoAtivacaoTO.codigoAtivacao"\n                           formControlName="codigo" maxlength="6"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Tipo Ativação</ion-label>\n                <ion-select [(ngModel)]="codigoAtivacaoTO.tipoCodigoAtivacao" formControlName="tipo-codigo" cancelText="Fechar" >\n                    <ion-option [value]="tipo.value" *ngFor="let tipo of listaTipoCodigoAtivacao | keysEnum">{{tipo.key}}</ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-list>\n        <button type="submit" ion-button block [disabled]="!codigoAtivacaoFormElement.form.valid">Validar</button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\usuario\codigo-ativacao-usuario\codigo-ativacao-usuario.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_6__helpers_toast_helper__["a" /* ToastHelper */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */]])
    ], CodigoAtivacaoUsuarioPage);
    return CodigoAtivacaoUsuarioPage;
}());

//# sourceMappingURL=codigo-ativacao-usuario.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodigoAtivacaoTO; });
var CodigoAtivacaoTO = /** @class */ (function () {
    function CodigoAtivacaoTO() {
    }
    Object.defineProperty(CodigoAtivacaoTO.prototype, "cpf", {
        get: function () {
            return this._cpf;
        },
        set: function (value) {
            this._cpf = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CodigoAtivacaoTO.prototype, "codigoAtivacao", {
        get: function () {
            return this._codigoAtivacao;
        },
        set: function (value) {
            this._codigoAtivacao = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CodigoAtivacaoTO.prototype, "tipoCodigoAtivacao", {
        get: function () {
            return this._tipoCodigoAtivacao;
        },
        set: function (value) {
            this._tipoCodigoAtivacao = value;
        },
        enumerable: true,
        configurable: true
    });
    return CodigoAtivacaoTO;
}());

//# sourceMappingURL=codigo-ativacao.to.model.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipoCodigoAtivacaoEnum; });
var TipoCodigoAtivacaoEnum;
(function (TipoCodigoAtivacaoEnum) {
    TipoCodigoAtivacaoEnum[TipoCodigoAtivacaoEnum["Novo Cadastro"] = 0] = "Novo Cadastro";
    TipoCodigoAtivacaoEnum[TipoCodigoAtivacaoEnum["Recupera\u00E7\u00E3o de Senha"] = 1] = "Recupera\u00E7\u00E3o de Senha";
})(TipoCodigoAtivacaoEnum || (TipoCodigoAtivacaoEnum = {}));
//# sourceMappingURL=tipo-codigo-ativacao.enum.js.map

/***/ })

});
//# sourceMappingURL=6.js.map