webpackJsonp([3],{

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
        })
    ], LoginModule);
    return LoginModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 385:
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

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_usuario_model__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_capitalize_all_pipe__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_usuario_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_especialidade_service__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_municipio_service__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_tipo_prestador_service__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__helpers_toast_helper__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__helpers_ios_helper__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_Observable__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_observable_forkJoin__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_facebook__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_beneficiario_benner_beneficiario_benner_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_storage_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_in_app_browser__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var LoginPage = /** @class */ (function () {
    function LoginPage(usuarioService, loadingCtrl, navCtrl, menuCtrl, especialidadeService, municipioService, tipoPrestadorService, toastHelper, iosHelper, facebook, alertCtrl, beneficiarioBennerService, storageService, inAppBrowser) {
        this.usuarioService = usuarioService;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.especialidadeService = especialidadeService;
        this.municipioService = municipioService;
        this.tipoPrestadorService = tipoPrestadorService;
        this.toastHelper = toastHelper;
        this.iosHelper = iosHelper;
        this.facebook = facebook;
        this.alertCtrl = alertCtrl;
        this.beneficiarioBennerService = beneficiarioBennerService;
        this.storageService = storageService;
        this.inAppBrowser = inAppBrowser;
        this.usuario = new __WEBPACK_IMPORTED_MODULE_2__models_usuario_model__["a" /* Usuario */]();
        this.capitalizeAllPipe = new __WEBPACK_IMPORTED_MODULE_4__pipes_capitalize_all_pipe__["a" /* CapitalizeAllPipe */]();
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            cpf: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].maxLength(11), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(11), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].pattern('^[0-9]*$')]),
            senha: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required)
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.iosHelper.mostrarLoaderTemporario();
    };
    LoginPage.prototype.realizarLogin = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.usuarioService.realizarLogin(this.usuario).subscribe(function (result) {
            if (!result) {
                _this.toastHelper.notificacaoMensagem('CPF ou senha inválidos');
                loader.dismiss();
            }
            else {
                _this.buscarDadosBeneficiarioERedirecionarHome(loader, _this.usuario);
            }
        }, function (error) {
            if (error.status == 401) {
                _this.toastHelper.notificacaoMensagem('CPF ou senha inválidos');
            }
            else {
                _this.toastHelper.notificacaoMensagem('Ocorreu um erro ao realizar o login, por favor tente novamente mais tarde');
            }
            loader.dismiss();
        });
    };
    LoginPage.prototype.realizarCadastro = function () {
        this.navCtrl.push('CadastrarUsuarioPage');
    };
    LoginPage.prototype.realizarRecuperacaoDeSenha = function () {
        this.navCtrl.push('RedefinirSenhaUsuarioPage');
    };
    LoginPage.prototype.realizarInsercaoCodigoAtivacao = function () {
        this.navCtrl.push('CodigoAtivacaoUsuarioPage');
    };
    LoginPage.prototype.realizarLoginFacebook = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.facebook.login(['public_profile']).then(function (response) {
            _this.usuarioService.buscarUsuario(null, response.authResponse.userID).subscribe(function (usuario) {
                if (usuario) {
                    _this.buscarDadosBeneficiarioERedirecionarHome(loader, usuario);
                }
                else {
                    loader.dismiss().then(function () {
                        _this.abrirAlertaPossuiContaPortal();
                    });
                }
            }, function (error) {
                loader.dismiss().then(function () {
                    if (error.status == '400') {
                        _this.abrirAlertaPossuiContaPortal();
                    }
                    else {
                        _this.toastHelper.notificacaoErroCarregarDados();
                    }
                });
            });
        }, function (error) {
            loader.dismiss();
            _this.toastHelper.notificacaoMensagem('Não foi possível realizar o login pelo Facebook, por favor tente novamente mais tarde');
        });
    };
    /**
     * @TODO
     */
    LoginPage.prototype.realizarLoginGooglePlus = function () {
    };
    LoginPage.prototype.abrirAlertaPossuiContaPortal = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Você já possui conta no portal do beneficiário?',
            message: '',
            buttons: [
                {
                    text: 'Não',
                    handler: function () {
                        alert.dismiss();
                        _this.navCtrl.push('CadastrarUsuarioPage');
                    }
                },
                {
                    text: 'Sim',
                    handler: function () {
                        alert.dismiss();
                        _this.toastHelper.notificacaoMensagem('Por favor realize o login');
                    }
                }
            ]
        });
        alert.present();
    };
    LoginPage.prototype.buscarDadosBeneficiarioERedirecionarHome = function (loader, usuario) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_11_rxjs_Observable__["Observable"].forkJoin(this.beneficiarioBennerService.buscarBeneficiarioCpf(usuario.username), this.usuarioService.buscarUsuario(usuario.username), this.tipoPrestadorService.buscarListaTipoPrestadores(), this.especialidadeService.buscarListaEspecialidades(), this.municipioService.buscarListaMunicipios()).subscribe(function (result) {
            _this.beneficiarioBennerService.buscarBeneficiariosGrupoFamiliarPortal(result[0].handleTitular)
                .subscribe(function (grupoFamiliar) {
                Promise.all([
                    _this.storageService.setBeneficiario(result[0]),
                    _this.storageService.setGrupoFamiliar(grupoFamiliar),
                    _this.storageService.setUsuario(result[1]),
                    _this.storageService.setTipoPrestadores(result[2]),
                    _this.storageService.setEspecialidades(result[3]),
                    _this.storageService.setMunicipios(result[4])
                ]).then(function () {
                    _this.menuCtrl.enable(false, 'nao_autenticado');
                    if (result[0].titular === 'S') {
                        _this.menuCtrl.enable(true, 'titular');
                    }
                    else {
                        _this.menuCtrl.enable(true, 'dependente');
                    }
                    loader.dismiss();
                    _this.toastHelper.notificacaoMensagem('Seja bem vindo ' + _this.capitalizeAllPipe.transform(result[0].nome));
                    if (result[1].idFacebook == null && result[1].idGooglePlus == null) {
                        _this.navCtrl.setRoot('PreHomeRedesSociaisPage', { 'Usuario': result[1] });
                    }
                    else {
                        _this.navCtrl.setRoot('HomePage');
                    }
                }).catch(function () {
                    loader.dismiss();
                    _this.toastHelper.notificacaoErroCarregarDados();
                });
            }, function () {
                loader.dismiss();
                _this.toastHelper.notificacaoErroCarregarDados();
            });
        }, function () {
            loader.dismiss();
            _this.toastHelper.notificacaoErroCarregarDados();
        });
    };
    LoginPage.prototype.laudosWebRedirect = function () {
        this.inAppBrowser.create("http://laudosweb.cassems.com.br/portal-laudos");
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\Filipe\Projetos Android\cassems-beneficiario\src\pages\usuario\login\login.html"*/'<ion-header class="listing-header">\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n            <div class="header-logo">\n\n                <preload-image [ratio]="{w:583, h:100}" src="./assets/images/logo3.png"></preload-image>\n\n            </div>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="login-content auth-content">\n\n    <form class="login-form auth-form" (ngSubmit)="realizarLogin()" [formGroup]="loginForm" #loginFormElement="ngForm"\n\n          novalidate>\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-label floating>CPF</ion-label>\n\n                <ion-input type="number" [(ngModel)]="usuario.username"\n\n                           formControlName="cpf" maxlength="11"></ion-input>\n\n\n\n            </ion-item>\n\n            <show-hide-container>\n\n                <ion-item>\n\n                    <ion-label floating>Senha</ion-label>\n\n                    <ion-input type="password" [(ngModel)]="usuario.password" formControlName="senha"\n\n                               show-hide-input></ion-input>\n\n                </ion-item>\n\n            </show-hide-container>\n\n\n\n        </ion-list>\n\n        <button type="submit" icon-left ion-button block [disabled]="!loginFormElement.form.valid">\n\n            <ion-icon name="log-in"></ion-icon>\n\n            Entrar\n\n        </button>\n\n    </form>\n\n    <ion-row class="alt-options">\n\n        <ion-col no-padding width-50>\n\n            <button ion-button block clear class="forgot-button" (click)="realizarRecuperacaoDeSenha()">Esqueci minha\n\n                senha?\n\n            </button>\n\n        </ion-col>\n\n        <ion-col no-padding width-50>\n\n            <button ion-button block clear class="signup-button" (click)="realizarCadastro()">Cadastrar!</button>\n\n        </ion-col>\n\n    </ion-row>\n\n    <p class="auth-divider">\n\n        Ou\n\n    </p>\n\n    <ion-row class="alt-options">\n\n        <button ion-button block clear class="codigo-ativacao-button" (click)="realizarInsercaoCodigoAtivacao()">Inserir\n\n            Código de Ativação\n\n        </button>\n\n    </ion-row>\n\n    <div class="redes-sociais">\n\n        <button ion-button block icon-left class="facebook-auth-button" (click)="realizarLoginFacebook()">\n\n            <ion-icon name="logo-facebook"></ion-icon>\n\n            Login Facebook\n\n        </button>\n\n        <!--<button ion-button block icon-left class="google-auth-button" (click)="realizarLoginGooglePlus()">\n\n            <ion-icon name="logo-googleplus"></ion-icon>\n\n            Login Google+\n\n        </button>-->\n\n    </div>\n\n    <div class="laudos-web">\n\n        <button ion-button block (click)="laudosWebRedirect()">Resultados Laboratório CASSEMS</button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Filipe\Projetos Android\cassems-beneficiario\src\pages\usuario\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_especialidade_service__["a" /* EspecialidadeService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_municipio_service__["a" /* MunicipioService */],
            __WEBPACK_IMPORTED_MODULE_8__providers_tipo_prestador_service__["a" /* TipoPrestadorService */],
            __WEBPACK_IMPORTED_MODULE_9__helpers_toast_helper__["a" /* ToastHelper */],
            __WEBPACK_IMPORTED_MODULE_10__helpers_ios_helper__["a" /* IosHelper */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_14__providers_beneficiario_benner_beneficiario_benner_service__["a" /* BeneficiarioBennerService */],
            __WEBPACK_IMPORTED_MODULE_15__providers_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(11);
var forkJoin_1 = __webpack_require__(226);
Observable_1.Observable.forkJoin = forkJoin_1.forkJoin;
//# sourceMappingURL=forkJoin.js.map

/***/ })

});
//# sourceMappingURL=3.js.map