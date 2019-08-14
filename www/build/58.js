webpackJsonp([58],{

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilModule", function() { return PerfilModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipe_module__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PerfilModule = /** @class */ (function () {
    function PerfilModule() {
    }
    PerfilModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__perfil__["a" /* PerfilPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__perfil__["a" /* PerfilPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipe_module__["a" /* PipeModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__perfil__["a" /* PerfilPage */]],
            schemas: [],
            providers: [],
        })
    ], PerfilModule);
    return PerfilModule;
}());

//# sourceMappingURL=perfil.module.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    Object.defineProperty(Usuario.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "beneficiario", {
        get: function () {
            return this._beneficiario;
        },
        set: function (value) {
            this._beneficiario = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "idFacebook", {
        get: function () {
            return this._idFacebook;
        },
        set: function (value) {
            this._idFacebook = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "idGooglePlus", {
        get: function () {
            return this._idGooglePlus;
        },
        set: function (value) {
            this._idGooglePlus = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "matricula", {
        get: function () {
            return this._matricula;
        },
        set: function (value) {
            this._matricula = value;
        },
        enumerable: true,
        configurable: true
    });
    return Usuario;
}());

//# sourceMappingURL=usuario.model.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_toast_helper__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usuario_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_usuario_model__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_storage_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_beneficiario_benner_en_vi_portal_beneficiario_model__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_beneficiario_benner_beneficiario_benner_service__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var PerfilPage = /** @class */ (function () {
    function PerfilPage(loadingCtrl, navCtrl, toastHelper, usuarioService, facebook, storageService, beneficiarioBennerService) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.toastHelper = toastHelper;
        this.usuarioService = usuarioService;
        this.facebook = facebook;
        this.storageService = storageService;
        this.beneficiarioBennerService = beneficiarioBennerService;
        this.beneficiario = new __WEBPACK_IMPORTED_MODULE_8__models_beneficiario_benner_en_vi_portal_beneficiario_model__["a" /* EnViPortalBeneficiario */]();
        this.usuario = new __WEBPACK_IMPORTED_MODULE_4__models_usuario_model__["a" /* Usuario */]();
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        Promise.all([
            this.storageService.getUsuario(),
            this.storageService.getBeneficiario()
        ]).then(function (result) {
            _this.usuario = result[0];
            _this.beneficiario = result[1];
            loader.dismiss();
        }, function () {
            loader.dismiss();
            _this.toastHelper.notificacaoErroCarregarDados();
        });
    };
    PerfilPage.prototype.alterarSenha = function () {
        this.navCtrl.push('AlterarSenhaUsuarioPage');
    };
    PerfilPage.prototype.recarregarDados = function (refresher) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].forkJoin(this.usuarioService.buscarUsuario(this.usuario.username), this.beneficiarioBennerService.buscarBeneficiarioCpf(this.beneficiario.cpf)).subscribe(function (result) {
            Promise.all([
                _this.storageService.setUsuario(result[0]),
                _this.storageService.setBeneficiario(result[1])
            ])
                .then(function () {
                refresher.complete();
            }, function () {
                _this.toastHelper.notificacaoErroCarregarDados();
                refresher.complete();
            });
        }, function () {
            _this.toastHelper.notificacaoErroCarregarDados();
            refresher.complete();
        });
    };
    /**
     * Metodo utilizado para vincular o usuario atual a uma conta do Facebook
     *
     * @author Anderson Friaca
     */
    PerfilPage.prototype.vincularUsuarioFacebook = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.facebook.login(['public_profile']).then(function (response) {
            _this.usuarioService.vincularUsuarioRedeSocial(_this.usuario.username, response.authResponse.userID).subscribe(function () {
                _this.usuario.idFacebook = response.authResponse.userID;
                _this.storageService.setUsuario(_this.usuario)
                    .then(function () {
                    loader.dismiss();
                }, function () {
                    loader.dismiss();
                });
            }, function (error) {
                var mensagemErro = 'Ocorreu um erro ao vincular sua conta do Facebook, por favor tente novamente mais tarde';
                if (error.status == 400) {
                    mensagemErro = 'Esta conta do Facebook já possui vinculação';
                }
                _this.facebook.logout().then(function () {
                    loader.dismiss();
                    _this.toastHelper.notificacaoMensagem(mensagemErro);
                }, function () {
                    loader.dismiss();
                    _this.toastHelper.notificacaoMensagem(mensagemErro);
                });
            });
        }, function () {
            loader.dismiss();
            _this.toastHelper.notificacaoMensagem('Não foi possível realizar o login pelo Facebook, por favor tente novamente mais tarde');
        });
    };
    /**
     * @TODO
     */
    PerfilPage.prototype.vincularUsuarioGooglePlus = function () {
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\usuario\perfil\perfil.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Perfil</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="contentPerfil">\n    <ion-refresher (ionRefresh)="recarregarDados($event)">\n        <ion-refresher-content\n                pullingIcon="arrow-dropdown"\n                pullingText="Puxe para atualizar"\n                refreshingSpinner="circles"\n                refreshingText="Carregando dados...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <div class="user-details">\n        <ion-row wrap class="user-bio-row">\n            <ion-col no-padding col-12 text-center>\n                <h2 class="user-name">{{beneficiario.nome | capitalizeAll}}</h2>\n            </ion-col>\n            <section class="user-detail-section">\n                <ion-col no-padding col-12>\n                    <p class="user-description">\n                        Matrícula: {{beneficiario.matriculaCassems | matriculaCassems}}\n                    </p>\n                </ion-col>\n                <ion-col no-padding col-12>\n                    <p class="user-description">\n                        Dependência: {{beneficiario.descricaoDependencia | capitalizeAll}}\n                    </p>\n                </ion-col>\n                <ion-col no-padding col-12>\n                    <p class="user-description">\n                        Validade Carteira: {{(beneficiario.compValidadeFinal || beneficiario.dataValidadeFinal) | date:\n                        "dd/MM/y"}}\n                    </p>\n                </ion-col>\n                <ion-col no-padding col-12 *ngIf="beneficiario.cpf">\n                    <p class="user-description">\n                        CPF: {{beneficiario.cpf | cpf}}\n                    </p>\n                </ion-col>\n                <ion-col no-padding col-12 *ngIf="beneficiario.rg">\n                    <p class="user-description">\n                        RG: {{beneficiario.rg}}<span *ngIf="beneficiario.orgaoExpRg">/{{beneficiario.orgaoExpRg}}</span>\n                    </p>\n                </ion-col>\n                <ion-col no-padding col-12>\n                    <p class="user-description">\n                        Data Nascimento: {{beneficiario.dataNascimento | date: "dd/MM/y"}}\n                    </p>\n                </ion-col>\n            </section>\n        </ion-row>\n    </div>\n    <ion-row class="alt-options">\n        <button ion-button block (click)="alterarSenha()" class="alterar-senha-button">\n            Alterar Senha\n        </button>\n        <button ion-button block icon-left class="facebook-auth-button" (click)="vincularUsuarioFacebook()"\n                *ngIf="usuario.idFacebook == null">\n            <ion-icon name="logo-facebook"></ion-icon>\n            Vincular Facebook\n        </button>\n        <!--<button ion-button block icon-left class="google-auth-button" (click)="vincularUsuarioGooglePlus()"\n        *ngIf="usuario.idGooglePlus == null">\n            <ion-icon name="logo-googleplus"></ion-icon>\n            Vincular Google+\n        </button>-->\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\usuario\perfil\perfil.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__helpers_toast_helper__["a" /* ToastHelper */],
            __WEBPACK_IMPORTED_MODULE_3__providers_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_7__providers_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_9__providers_beneficiario_benner_beneficiario_benner_service__["a" /* BeneficiarioBennerService */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ })

});
//# sourceMappingURL=58.js.map