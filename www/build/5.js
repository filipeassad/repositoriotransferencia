webpackJsonp([5],{

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlterarSenhaUsuarioModule", function() { return AlterarSenhaUsuarioModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alterar_senha_usuario__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AlterarSenhaUsuarioModule = /** @class */ (function () {
    function AlterarSenhaUsuarioModule() {
    }
    AlterarSenhaUsuarioModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__alterar_senha_usuario__["a" /* AlterarSenhaUsuarioPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__alterar_senha_usuario__["a" /* AlterarSenhaUsuarioPage */])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__alterar_senha_usuario__["a" /* AlterarSenhaUsuarioPage */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AlterarSenhaUsuarioModule);
    return AlterarSenhaUsuarioModule;
}());

//# sourceMappingURL=alterar-senha-usuario.module.js.map

/***/ }),

/***/ 376:
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

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlterarSenhaUsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_to_alterar_senha_usuario_to_model__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_usuario_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_custom_validators_helper__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_toast_helper__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_storage_service__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AlterarSenhaUsuarioPage = /** @class */ (function () {
    function AlterarSenhaUsuarioPage(usuarioService, toastHelper, loadingCtrl, navCtrl, storageService) {
        this.usuarioService = usuarioService;
        this.toastHelper = toastHelper;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.storageService = storageService;
        this.alterarSenhaUsuarioTO = new __WEBPACK_IMPORTED_MODULE_3__models_to_alterar_senha_usuario_to_model__["a" /* AlterarSenhaUsuarioTO */]();
        this.customValidatorsHelper = new __WEBPACK_IMPORTED_MODULE_5__helpers_custom_validators_helper__["a" /* CustomValidatorsHelper */]();
        this.alterarSenhaForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            senhaAtual: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            novaSenha: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            confirmarNovaSenha: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, this.customValidatorsHelper.equals.bind(this.customValidatorsHelper)])
        });
    }
    AlterarSenhaUsuarioPage.prototype.alterarSenha = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.storageService.getBeneficiario()
            .then(function (beneficiario) {
            _this.usuarioService.alterarSenha(beneficiario.cpf, _this.alterarSenhaUsuarioTO.senhaAtual, _this.alterarSenhaUsuarioTO.novaSenha).subscribe(function () {
                _this.toastHelper.notificacaoMensagem('Senha alterada com sucesso');
                loader.dismiss();
                _this.navCtrl.setRoot('HomePage');
            }, function (error) {
                if (error.status == 400) {
                    _this.toastHelper.notificacaoMensagem('A senha atual não confere com a cadastrada');
                }
                else {
                    _this.toastHelper.notificacaoMensagem('Ocorreu um erro ao realizar a troca de sua senha, por favor tente novamente mais tarde');
                }
                loader.dismiss();
            });
        }, function () {
            _this.toastHelper.notificacaoMensagem('Ocorreu um erro ao realizar a troca de sua senha, por favor tente novamente mais tarde');
            loader.dismiss();
        });
    };
    AlterarSenhaUsuarioPage.prototype.alterarValorComparacaoSenha = function () {
        this.customValidatorsHelper.valorAComparar = this.alterarSenhaUsuarioTO.novaSenha;
        this.alterarSenhaForm.controls['confirmarNovaSenha'].updateValueAndValidity();
    };
    AlterarSenhaUsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-alterar-senha-usuario',template:/*ion-inline-start:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\usuario\alterar-senha-usuario\alterar-senha-usuario.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Alterar Senha</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="login-content auth-content">\n    <form class="login-form auth-form" (ngSubmit)="alterarSenha()" [formGroup]="alterarSenhaForm" #alterarSenhaFormElement="ngForm"\n          novalidate>\n        <ion-list>\n            <show-hide-container>\n                <ion-item>\n                    <ion-label floating>Senha Atual</ion-label>\n                    <ion-input type="password" [(ngModel)]="alterarSenhaUsuarioTO.senhaAtual" formControlName="senhaAtual"\n                               show-hide-input></ion-input>\n                </ion-item>\n            </show-hide-container>\n            <show-hide-container>\n                <ion-item>\n                    <ion-label floating>Nova Senha</ion-label>\n                    <ion-input type="password" [(ngModel)]="alterarSenhaUsuarioTO.novaSenha" formControlName="novaSenha" (keyup)="alterarValorComparacaoSenha()"\n                               show-hide-input></ion-input>\n                </ion-item>\n            </show-hide-container>\n            <show-hide-container>\n                <ion-item>\n                    <ion-label floating>Confirmar Nova Senha</ion-label>\n                    <ion-input type="password" [(ngModel)]="alterarSenhaUsuarioTO.confirmarNovaSenha" formControlName="confirmarNovaSenha"\n                               show-hide-input></ion-input>\n                </ion-item>\n            </show-hide-container>\n        </ion-list>\n        <button type="submit" ion-button block [disabled]="!alterarSenhaFormElement.form.valid">Alterar Senha</button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\usuario\alterar-senha-usuario\alterar-senha-usuario.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_6__helpers_toast_helper__["a" /* ToastHelper */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_storage_service__["a" /* StorageService */]])
    ], AlterarSenhaUsuarioPage);
    return AlterarSenhaUsuarioPage;
}());

//# sourceMappingURL=alterar-senha-usuario.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlterarSenhaUsuarioTO; });
var AlterarSenhaUsuarioTO = /** @class */ (function () {
    function AlterarSenhaUsuarioTO() {
    }
    Object.defineProperty(AlterarSenhaUsuarioTO.prototype, "login", {
        get: function () {
            return this._login;
        },
        set: function (value) {
            this._login = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlterarSenhaUsuarioTO.prototype, "senhaAtual", {
        get: function () {
            return this._senhaAtual;
        },
        set: function (value) {
            this._senhaAtual = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlterarSenhaUsuarioTO.prototype, "novaSenha", {
        get: function () {
            return this._novaSenha;
        },
        set: function (value) {
            this._novaSenha = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlterarSenhaUsuarioTO.prototype, "confirmarNovaSenha", {
        get: function () {
            return this._confirmarNovaSenha;
        },
        set: function (value) {
            this._confirmarNovaSenha = value;
        },
        enumerable: true,
        configurable: true
    });
    return AlterarSenhaUsuarioTO;
}());

//# sourceMappingURL=alterar-senha-usuario.to.model.js.map

/***/ })

});
//# sourceMappingURL=5.js.map