webpackJsonp([18],{

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedefinirSenhaUsuarioModule", function() { return RedefinirSenhaUsuarioModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redefinir_senha_usuario__ = __webpack_require__(442);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RedefinirSenhaUsuarioModule = /** @class */ (function () {
    function RedefinirSenhaUsuarioModule() {
    }
    RedefinirSenhaUsuarioModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__redefinir_senha_usuario__["a" /* RedefinirSenhaUsuarioPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__redefinir_senha_usuario__["a" /* RedefinirSenhaUsuarioPage */])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__redefinir_senha_usuario__["a" /* RedefinirSenhaUsuarioPage */]],
            schemas: [],
            providers: [],
        })
    ], RedefinirSenhaUsuarioModule);
    return RedefinirSenhaUsuarioModule;
}());

//# sourceMappingURL=redefinir-senha-usuario.module.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedefinirSenhaUsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_redefinir_senha_to_model__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_usuario_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_toast_helper__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RedefinirSenhaUsuarioPage = /** @class */ (function () {
    function RedefinirSenhaUsuarioPage(usuarioService, toastHelper, loadingCtrl, navCtrl) {
        this.usuarioService = usuarioService;
        this.toastHelper = toastHelper;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.redefinirSenhaTO = new __WEBPACK_IMPORTED_MODULE_3__models_redefinir_senha_to_model__["a" /* RedefinirSenhaTO */]();
        this.redefinirSenhaForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            cpf: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(11), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(11), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern('^[0-9]*$')]),
        });
    }
    RedefinirSenhaUsuarioPage.prototype.realizarRedefinicaoSenha = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.usuarioService.realizarPedidoReenvioSenha(this.redefinirSenhaTO.cpf).subscribe(function (response) {
            _this.toastHelper.notificacaoMensagem('Foi lhe enviado um e-mail para a redefinição de sua senha');
            loader.dismiss();
            _this.navCtrl.setRoot('CodigoAtivacaoUsuarioPage');
        }, function (error) {
            if (error.status == 400) {
                _this.toastHelper.notificacaoMensagem('CPF inválido');
            }
            else {
                if (error.status == 401) {
                    _this.toastHelper.notificacaoMensagem('Não existe cadastro para o CPF desejado');
                }
                else {
                    _this.toastHelper.notificacaoMensagem('Ocorreu um erro ao realizar o pedido de redefinição de senha, por favor tente novamente mais tarde');
                }
            }
            loader.dismiss();
        });
    };
    RedefinirSenhaUsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-redefinir-senha-usuario',template:/*ion-inline-start:"D:\Filipe\Projetos Android\cassems-beneficiario\src\pages\usuario\redefinir-senha-usuario\redefinir-senha-usuario.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Redefinir Senha</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="login-content auth-content">\n\n    <form class="login-form auth-form" (ngSubmit)="realizarRedefinicaoSenha()" [formGroup]="redefinirSenhaForm" #redefinirSenhaFormElement="ngForm"\n\n          novalidate>\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-label floating>CPF</ion-label>\n\n                <ion-input type="number" [(ngModel)]="redefinirSenhaTO.cpf"\n\n                           formControlName="cpf" maxlength="11"></ion-input>\n\n            </ion-item>\n\n        </ion-list>\n\n        <button type="submit" ion-button block [disabled]="!redefinirSenhaFormElement.form.valid">Redefinir</button>\n\n    </form>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Filipe\Projetos Android\cassems-beneficiario\src\pages\usuario\redefinir-senha-usuario\redefinir-senha-usuario.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_5__helpers_toast_helper__["a" /* ToastHelper */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */]])
    ], RedefinirSenhaUsuarioPage);
    return RedefinirSenhaUsuarioPage;
}());

//# sourceMappingURL=redefinir-senha-usuario.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedefinirSenhaTO; });
var RedefinirSenhaTO = /** @class */ (function () {
    function RedefinirSenhaTO() {
    }
    Object.defineProperty(RedefinirSenhaTO.prototype, "cpf", {
        get: function () {
            return this._cpf;
        },
        set: function (value) {
            this._cpf = value;
        },
        enumerable: true,
        configurable: true
    });
    return RedefinirSenhaTO;
}());

//# sourceMappingURL=redefinir-senha.to.model.js.map

/***/ })

});
//# sourceMappingURL=18.js.map