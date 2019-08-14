webpackJsonp([82],{

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficiarioModule", function() { return BeneficiarioModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__beneficiario__ = __webpack_require__(397);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BeneficiarioModule = /** @class */ (function () {
    function BeneficiarioModule() {
    }
    BeneficiarioModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__beneficiario__["a" /* BeneficiarioPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__beneficiario__["a" /* BeneficiarioPage */]),
                __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__["a" /* PipeModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__beneficiario__["a" /* BeneficiarioPage */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [],
        })
    ], BeneficiarioModule);
    return BeneficiarioModule;
}());

//# sourceMappingURL=beneficiario.module.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeneficiarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_toast_helper__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_beneficiario_benner_en_vi_portal_beneficiario_model__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BeneficiarioPage = /** @class */ (function () {
    function BeneficiarioPage(navCtrl, navParams, loadingCtrl, toastHelper, storageService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastHelper = toastHelper;
        this.storageService = storageService;
        this.beneficiario = new __WEBPACK_IMPORTED_MODULE_4__models_beneficiario_benner_en_vi_portal_beneficiario_model__["a" /* EnViPortalBeneficiario */]();
        this.beneficiarioLogado = null;
        this.isTitular = false;
        this.beneficiario = this.navParams.get('beneficiario');
    }
    BeneficiarioPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        Promise.all([
            this.storageService.getBeneficiario(),
            this.storageService.getBeneficiarioFromGrupoFamiliar(this.beneficiario.handle)
        ])
            .then(function (beneficiario) {
            _this.beneficiarioLogado = beneficiario[0];
            if (_this.beneficiarioLogado.titular === 'S') {
                _this.isTitular = true;
            }
            _this.beneficiario = beneficiario[1];
            loader.dismiss();
        }, function () {
            loader.dismiss();
            _this.toastHelper.notificacaoErroCarregarDados();
        });
    };
    BeneficiarioPage.prototype.atualizarEndereco = function () {
        this.navCtrl.push('AtualizarEnderecoPage', { 'Beneficiario': this.beneficiario });
    };
    BeneficiarioPage.prototype.atualizarContato = function () {
        this.navCtrl.push('AtualizarContatoPage', { 'Beneficiario': this.beneficiario });
    };
    BeneficiarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-beneficiario',template:/*ion-inline-start:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\beneficiario\beneficiario.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Beneficiário</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="contentBeneficiario">\n    <div class="user-details">\n        <ion-row wrap class="user-bio-row">\n            <ion-col no-padding col-12 text-center>\n                <h2 class="user-name">{{beneficiario.nome | capitalizeAll}}</h2>\n            </ion-col>\n            <section class="user-detail-section">\n                <ion-col no-padding col-12>\n                    <p class="user-description">\n                        Matrícula: {{beneficiario.matriculaCassems | matriculaCassems}}\n                    </p>\n                </ion-col>\n                <ion-col no-padding col-12>\n                    <p class="user-description">\n                        Dependência: {{beneficiario.descricaoDependencia | capitalizeAll}}\n                    </p>\n                </ion-col>\n                <ion-col no-padding col-12>\n                    <p class="user-description">\n                        Validade Carteira: {{(beneficiario.compValidadeFinal || beneficiario.dataValidadeFinal) | date:\n                        "dd/MM/y"}}\n                    </p>\n                </ion-col>\n                <ion-col no-padding col-12 *ngIf="beneficiario.cpf">\n                    <p class="user-description">\n                        CPF: {{beneficiario.cpf | cpf}}\n                    </p>\n                </ion-col>\n                <ion-col no-padding col-12 *ngIf="beneficiario.rg">\n                    <p class="user-description">\n                        RG: {{beneficiario.rg}}<span *ngIf="beneficiario.orgaoExpRg">{{beneficiario.orgaoExpRg}}</span>\n                    </p>\n                </ion-col>\n                <ion-col no-padding col-12>\n                    <p class="user-description">\n                        Data Nascimento: {{beneficiario.dataNascimento | date: "dd/MM/y"}}\n                    </p>\n                </ion-col>\n            </section>\n        </ion-row>\n    </div>\n    <div class="endereco-content"\n         *ngIf="isTitular && beneficiarioLogado.benId === beneficiario.benId">\n        <ion-grid>\n            <ion-row>\n                <ion-col no-padding col-12 text-center>\n                    <h2 class="endereco-title">Endereço</h2>\n                </ion-col>\n            </ion-row>\n            <section class="endereco-detail-section">\n                <ion-row>\n                    <ion-col no-padding col-12>\n                        <p class="endereco-description">\n                            CEP: {{beneficiario.cep | cep}}\n                        </p>\n                    </ion-col>\n                    <ion-col no-padding col-12>\n                        <p class="endereco-description">\n                            Logradouro: {{beneficiario.enderecoResidencial | capitalizeAll}},\n                            {{beneficiario.numeroResidencial}}\n                        </p>\n                    </ion-col>\n                    <ion-col no-padding col-12 *ngIf="beneficiario.complementoEndereco">\n                        <p class="endereco-description">\n                            Complemento: {{beneficiario.complementoEndereco | capitalizeAll}}\n                        </p>\n                    </ion-col>\n                    <ion-col no-padding col-12>\n                        <p class="endereco-description">\n                            Bairro: {{beneficiario.bairro | capitalizeAll}}\n                        </p>\n                    </ion-col>\n                    <ion-col no-padding col-12>\n                        <p class="endereco-description">\n                            Cidade: {{beneficiario.municipioResidencial | capitalizeAll}}\n                        </p>\n                    </ion-col>\n                    <ion-col no-padding col-12>\n                        <p class="endereco-description">\n                            Estado: {{beneficiario.estadoResidencial}}\n                        </p>\n                    </ion-col>\n                    <ion-col no-padding col-12>\n                        <p class="endereco-description">\n                            Telefone: {{beneficiario.telefone | telefone}}\n                        </p>\n                    </ion-col>\n                    <ion-col no-padding col-12>\n                        <p class="endereco-description">\n                            Celular: {{beneficiario.celular | telefone}}\n                        </p>\n                    </ion-col>\n                </ion-row>\n                <section class="endereco-options">\n                    <ion-row>\n                        <ion-col></ion-col>\n                        <ion-col col-8>\n                            <button class="atualizar-endereco-button" block ion-button type="button"\n                                    (click)="atualizarEndereco()">Atualizar Endereço\n                            </button>\n                        </ion-col>\n                        <ion-col></ion-col>\n                    </ion-row>\n                </section>\n            </section>\n        </ion-grid>\n    </div>\n    <div class="contato-content">\n        <ion-grid>\n            <ion-row>\n                <ion-col no-padding col-12 text-center>\n                    <h2 class="contato-title">Contato</h2>\n                </ion-col>\n            </ion-row>\n            <section class="contato-detail-section">\n                <ion-row>\n                    <ion-col no-padding col-12>\n                        <p class="contato-description">\n                            Celular: {{beneficiario.celularContato | telefone}}\n                        </p>\n                    </ion-col>\n                    <ion-col no-padding col-12>\n                        <p class="contato-description">\n                            E-mail: {{beneficiario.email}}\n                        </p>\n                    </ion-col>\n                </ion-row>\n                <section class="contato-options">\n                    <ion-row>\n                        <ion-col></ion-col>\n                        <ion-col col-8>\n                            <button class="atualizar-contato-button" block ion-button type="button"\n                                    (click)="atualizarContato()">Atualizar Contato\n                            </button>\n                        </ion-col>\n                        <ion-col></ion-col>\n                    </ion-row>\n                </section>\n            </section>\n        </ion-grid>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\beneficiario\beneficiario.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__helpers_toast_helper__["a" /* ToastHelper */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage_service__["a" /* StorageService */]])
    ], BeneficiarioPage);
    return BeneficiarioPage;
}());

//# sourceMappingURL=beneficiario.js.map

/***/ })

});
//# sourceMappingURL=82.js.map