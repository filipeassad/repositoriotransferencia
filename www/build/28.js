webpackJsonp([28],{

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pre_home_redes_sociais__ = __webpack_require__(414);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__pre_home_redes_sociais__["a" /* PreHomeRedesSociaisPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__pre_home_redes_sociais__["a" /* PreHomeRedesSociaisPage */]),
                __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_4__pre_home_redes_sociais__["a" /* PreHomeRedesSociaisPage */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [],
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=pre-home-redes-sociais.module.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreHomeRedesSociaisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_toast_helper__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_usuario_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_storage_service__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PreHomeRedesSociaisPage = /** @class */ (function () {
    function PreHomeRedesSociaisPage(storageService, loadingCtrl, navCtrl, toastHelper, navParams, facebook, usuarioService) {
        this.storageService = storageService;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.toastHelper = toastHelper;
        this.navParams = navParams;
        this.facebook = facebook;
        this.usuarioService = usuarioService;
    }
    PreHomeRedesSociaisPage.prototype.ionViewDidLoad = function () {
        this.usuario = this.navParams.get('Usuario');
    };
    /**
     * Metodo utilizado para vincular o usuario atual a uma conta do Facebook
     *
     * @author Anderson Friaca
     */
    PreHomeRedesSociaisPage.prototype.vincularUsuarioFacebook = function () {
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
                    _this.redirecionarPaginaHome();
                }, function () {
                    loader.dismiss();
                    _this.redirecionarPaginaHome();
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
        }, function (error) {
            loader.dismiss();
            _this.toastHelper.notificacaoMensagem('Não foi possível realizar o login pelo Facebook, por favor tente novamente mais tarde');
        });
    };
    /**
     * @TODO
     */
    PreHomeRedesSociaisPage.prototype.vincularUsuarioGooglePlus = function () {
    };
    PreHomeRedesSociaisPage.prototype.redirecionarPaginaHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    PreHomeRedesSociaisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-pre-home-redes-sociais',template:/*ion-inline-start:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\pre-home-redes-sociais\pre-home-redes-sociais.html"*/'<ion-header class="listing-header">\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            <div class="header-logo">\n                <preload-image [ratio]="{w:583, h:100}" src="./assets/images/logo3.png"></preload-image>\n            </div>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="contentPreHomeRedesSociais">\n    <h2 class="titulo-vinculacao" text-center>Deseja vincular sua conta com alguma rede social?</h2>\n    <div class="redes-sociais">\n        <button ion-button block icon-left class="facebook-auth-button" (click)="vincularUsuarioFacebook()">\n            <ion-icon name="logo-facebook"></ion-icon>\n            Vincular Facebook\n        </button>\n        <!--<button ion-button block icon-left class="google-auth-button" (click)="vincularUsuarioGooglePlus()">\n            <ion-icon name="logo-googleplus"></ion-icon>\n            Vincular Google+\n        </button>-->\n    </div>\n    <div align="right">\n        <button ion-button icon-left (click)="redirecionarPaginaHome()" class="button-continuar">\n            <ion-icon name="arrow-forward"></ion-icon>\n            Pular\n        </button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\pre-home-redes-sociais\pre-home-redes-sociais.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__helpers_toast_helper__["a" /* ToastHelper */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_4__providers_usuario_service__["a" /* UsuarioService */]])
    ], PreHomeRedesSociaisPage);
    return PreHomeRedesSociaisPage;
}());

//# sourceMappingURL=pre-home-redes-sociais.js.map

/***/ })

});
//# sourceMappingURL=28.js.map