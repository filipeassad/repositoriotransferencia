webpackJsonp([4],{

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastrarUsuarioModule", function() { return CadastrarUsuarioModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cadastrar_usuario__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastrarUsuarioModule = /** @class */ (function () {
    function CadastrarUsuarioModule() {
    }
    CadastrarUsuarioModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__cadastrar_usuario__["a" /* CadastrarUsuarioPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__cadastrar_usuario__["a" /* CadastrarUsuarioPage */])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_0__cadastrar_usuario__["a" /* CadastrarUsuarioPage */]],
            schemas: [],
            providers: [],
        })
    ], CadastrarUsuarioModule);
    return CadastrarUsuarioModule;
}());

//# sourceMappingURL=cadastrar-usuario.module.js.map

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

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarUsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_to_usuario_cadastro_to_model__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_usuario_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_toast_helper__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_custom_validators_helper__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers_util_helper__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CadastrarUsuarioPage = /** @class */ (function () {
    function CadastrarUsuarioPage(usuarioService, modal, toastHelper, loadingCtrl, navCtrl) {
        this.usuarioService = usuarioService;
        this.modal = modal;
        this.toastHelper = toastHelper;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.usuarioCadastro = new __WEBPACK_IMPORTED_MODULE_3__models_to_usuario_cadastro_to_model__["a" /* UsuarioCadastroTO */]();
        this.customValidatorsHelper = new __WEBPACK_IMPORTED_MODULE_6__helpers_custom_validators_helper__["a" /* CustomValidatorsHelper */]();
        this.utilHelper = new __WEBPACK_IMPORTED_MODULE_7__helpers_util_helper__["a" /* UtilHelper */]();
        this.cadastroForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            matricula: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(16), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(11), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[0-9]*$')]),
            cpf: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(11), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(11), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[0-9]*$')]),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, this.customValidatorsHelper.validEmail]),
            'confirmar-email': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, this.customValidatorsHelper.equals.bind(this.customValidatorsHelper), this.customValidatorsHelper.validEmail]),
            'data-nascimento': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            'aceite-termo': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](false, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].requiredTrue)
        });
    }
    CadastrarUsuarioPage.prototype.cadastrarUsuario = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        if (this.utilHelper.calcularIdade(this.usuarioCadastro.dataNascimento) >= 18) {
            this.usuarioService.realizarCadastroUsuario(this.usuarioCadastro).subscribe(function (response) {
                loader.dismiss();
                _this.toastHelper.notificacaoMensagem('O cadastro foi realizado com sucesso, por favor verifique seu e-mail para poder ativar sua conta');
                _this.navCtrl.setRoot('CodigoAtivacaoUsuarioPage');
            }, function (error) {
                loader.dismiss();
                if (error.status == 400) {
                    _this.toastHelper.notificacaoMensagem('Dados Inválidos');
                }
                else {
                    if (error.status == 401) {
                        _this.toastHelper.notificacaoMensagem('Beneficiário já cadastrado');
                    }
                    else {
                        if (error.status == 403) {
                            _this.toastHelper.notificacaoMensagem('Cadastro permitido apenas para beneficiários maiores de idade');
                        }
                        else {
                            _this.toastHelper.notificacaoMensagem('Ocorreu um erro ao realizar seu cadastro, por favor tente novamente mais tarde');
                        }
                    }
                }
            });
        }
        else {
            loader.dismiss();
            this.toastHelper.notificacaoMensagem('Cadastro permitido apenas para beneficiários maiores de idade');
        }
    };
    CadastrarUsuarioPage.prototype.modalTermosECondicoes = function () {
        this.modal.create('ModalTermosECondicoesPage').present();
    };
    CadastrarUsuarioPage.prototype.aceitarTermo = function (e) {
        this.usuarioCadastro.aceiteTermo = e.checked;
    };
    CadastrarUsuarioPage.prototype.alterarValorComparacaoEmail = function () {
        this.customValidatorsHelper.valorAComparar = this.usuarioCadastro.email;
        this.cadastroForm.controls['confirmar-email'].updateValueAndValidity();
    };
    CadastrarUsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cadastrar-usuario',template:/*ion-inline-start:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\usuario\cadastrar-usuario\cadastrar-usuario.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Cadastrar</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="signup-content auth-content">\n    <form class="signup-form auth-form" (ngSubmit)="cadastrarUsuario()" [formGroup]="cadastroForm" #cadastroFormElement="ngForm" novalidate>\n        <ion-list>\n            <ion-item>\n                <ion-label floating>Matrícula CASSEMS</ion-label>\n                <ion-input type="number" [(ngModel)]="usuarioCadastro.matriculaCassems" formControlName="matricula"\n                            maxlength="16"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>CPF</ion-label>\n                <ion-input type="number" [(ngModel)]="usuarioCadastro.cpf" formControlName="cpf"\n                           maxlength="11"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>E-mail</ion-label>\n                <ion-input type="email" [(ngModel)]="usuarioCadastro.email" formControlName="email" (keyup)="alterarValorComparacaoEmail()"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Confirmar E-mail</ion-label>\n                <ion-input type="email" [(ngModel)]="usuarioCadastro.emailConfirmar" formControlName="confirmar-email"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Data Nascimento</ion-label>\n                <ion-datetime displayFormat="DD/MM/YYYY" doneText="Ok" cancelText="Fechar"\n                              [(ngModel)]="usuarioCadastro.dataNascimento" formControlName="data-nascimento"></ion-datetime>\n            </ion-item>\n            <ion-item class="switcher-item">\n                <ion-label><button ion-button type="button" block clear (click)="modalTermosECondicoes()">Aceito os termos e condições</button></ion-label>\n                <ion-toggle [(ngModel)]="usuarioCadastro.aceiteTermo" color="secondary" formControlName="aceite-termo" (ionChange)="aceitarTermo($event)"></ion-toggle>\n            </ion-item>\n        </ion-list>\n        <button type="submit" ion-button block [disabled]="!cadastroFormElement.form.valid">Cadastrar</button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\usuario\cadastrar-usuario\cadastrar-usuario.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__helpers_toast_helper__["a" /* ToastHelper */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], CadastrarUsuarioPage);
    return CadastrarUsuarioPage;
}());

//# sourceMappingURL=cadastrar-usuario.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioCadastroTO; });
var UsuarioCadastroTO = /** @class */ (function () {
    function UsuarioCadastroTO() {
    }
    Object.defineProperty(UsuarioCadastroTO.prototype, "matriculaCassems", {
        get: function () {
            return this._matriculaCassems;
        },
        set: function (value) {
            this._matriculaCassems = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsuarioCadastroTO.prototype, "cpf", {
        get: function () {
            return this._cpf;
        },
        set: function (value) {
            this._cpf = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsuarioCadastroTO.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsuarioCadastroTO.prototype, "emailConfirmar", {
        get: function () {
            return this._emailConfirmar;
        },
        set: function (value) {
            this._emailConfirmar = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsuarioCadastroTO.prototype, "dataNascimento", {
        get: function () {
            return this._dataNascimento;
        },
        set: function (value) {
            this._dataNascimento = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsuarioCadastroTO.prototype, "aceiteTermo", {
        get: function () {
            return this._aceiteTermo;
        },
        set: function (value) {
            this._aceiteTermo = value;
        },
        enumerable: true,
        configurable: true
    });
    return UsuarioCadastroTO;
}());

//# sourceMappingURL=usuario-cadastro-to.model.js.map

/***/ })

});
//# sourceMappingURL=4.js.map