webpackJsonp([36],{

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficiarioModule", function() { return BeneficiarioModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__beneficiario__ = __webpack_require__(399);
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

/***/ 399:
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
            selector: 'page-beneficiario',template:/*ion-inline-start:"D:\Filipe\Projetos Android\cassems-beneficiario\src\pages\beneficiario\beneficiario.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Beneficiário</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="contentBeneficiario">\n\n    <div class="user-details">\n\n        <ion-row wrap class="user-bio-row">\n\n            <ion-col no-padding col-12 text-center>\n\n                <h2 class="user-name">{{beneficiario.nome | capitalizeAll}}</h2>\n\n            </ion-col>\n\n            <section class="user-detail-section">\n\n                <ion-col no-padding col-12>\n\n                    <p class="user-description">\n\n                        Matrícula: {{beneficiario.matriculaCassems | matriculaCassems}}\n\n                    </p>\n\n                </ion-col>\n\n                <ion-col no-padding col-12>\n\n                    <p class="user-description">\n\n                        Dependência: {{beneficiario.descricaoDependencia | capitalizeAll}}\n\n                    </p>\n\n                </ion-col>\n\n                <ion-col no-padding col-12>\n\n                    <p class="user-description">\n\n                        Validade Carteira: {{(beneficiario.compValidadeFinal || beneficiario.dataValidadeFinal) | date:\n\n                        "dd/MM/y"}}\n\n                    </p>\n\n                </ion-col>\n\n                <ion-col no-padding col-12 *ngIf="beneficiario.cpf">\n\n                    <p class="user-description">\n\n                        CPF: {{beneficiario.cpf | cpf}}\n\n                    </p>\n\n                </ion-col>\n\n                <ion-col no-padding col-12 *ngIf="beneficiario.rg">\n\n                    <p class="user-description">\n\n                        RG: {{beneficiario.rg}}<span *ngIf="beneficiario.orgaoExpRg">{{beneficiario.orgaoExpRg}}</span>\n\n                    </p>\n\n                </ion-col>\n\n                <ion-col no-padding col-12>\n\n                    <p class="user-description">\n\n                        Data Nascimento: {{beneficiario.dataNascimento | date: "dd/MM/y"}}\n\n                    </p>\n\n                </ion-col>\n\n            </section>\n\n        </ion-row>\n\n    </div>\n\n    <div class="endereco-content"\n\n         *ngIf="isTitular && beneficiarioLogado.benId === beneficiario.benId">\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col no-padding col-12 text-center>\n\n                    <h2 class="endereco-title">Endereço</h2>\n\n                </ion-col>\n\n            </ion-row>\n\n            <section class="endereco-detail-section">\n\n                <ion-row>\n\n                    <ion-col no-padding col-12>\n\n                        <p class="endereco-description">\n\n                            CEP: {{beneficiario.cep | cep}}\n\n                        </p>\n\n                    </ion-col>\n\n                    <ion-col no-padding col-12>\n\n                        <p class="endereco-description">\n\n                            Logradouro: {{beneficiario.enderecoResidencial | capitalizeAll}},\n\n                            {{beneficiario.numeroResidencial}}\n\n                        </p>\n\n                    </ion-col>\n\n                    <ion-col no-padding col-12 *ngIf="beneficiario.complementoEndereco">\n\n                        <p class="endereco-description">\n\n                            Complemento: {{beneficiario.complementoEndereco | capitalizeAll}}\n\n                        </p>\n\n                    </ion-col>\n\n                    <ion-col no-padding col-12>\n\n                        <p class="endereco-description">\n\n                            Bairro: {{beneficiario.bairro | capitalizeAll}}\n\n                        </p>\n\n                    </ion-col>\n\n                    <ion-col no-padding col-12>\n\n                        <p class="endereco-description">\n\n                            Cidade: {{beneficiario.municipioResidencial | capitalizeAll}}\n\n                        </p>\n\n                    </ion-col>\n\n                    <ion-col no-padding col-12>\n\n                        <p class="endereco-description">\n\n                            Estado: {{beneficiario.estadoResidencial}}\n\n                        </p>\n\n                    </ion-col>\n\n                    <ion-col no-padding col-12>\n\n                        <p class="endereco-description">\n\n                            Telefone: {{beneficiario.telefone | telefone}}\n\n                        </p>\n\n                    </ion-col>\n\n                    <ion-col no-padding col-12>\n\n                        <p class="endereco-description">\n\n                            Celular: {{beneficiario.celular | telefone}}\n\n                        </p>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <section class="endereco-options">\n\n                    <ion-row>\n\n                        <ion-col></ion-col>\n\n                        <ion-col col-8>\n\n                            <button class="atualizar-endereco-button" block ion-button type="button"\n\n                                    (click)="atualizarEndereco()">Atualizar Endereço\n\n                            </button>\n\n                        </ion-col>\n\n                        <ion-col></ion-col>\n\n                    </ion-row>\n\n                </section>\n\n            </section>\n\n        </ion-grid>\n\n    </div>\n\n    <div class="contato-content">\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col no-padding col-12 text-center>\n\n                    <h2 class="contato-title">Contato</h2>\n\n                </ion-col>\n\n            </ion-row>\n\n            <section class="contato-detail-section">\n\n                <ion-row>\n\n                    <ion-col no-padding col-12>\n\n                        <p class="contato-description">\n\n                            Celular: {{beneficiario.celularContato | telefone}}\n\n                        </p>\n\n                    </ion-col>\n\n                    <ion-col no-padding col-12>\n\n                        <p class="contato-description">\n\n                            E-mail: {{beneficiario.email}}\n\n                        </p>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <section class="contato-options">\n\n                    <ion-row>\n\n                        <ion-col></ion-col>\n\n                        <ion-col col-8>\n\n                            <button class="atualizar-contato-button" block ion-button type="button"\n\n                                    (click)="atualizarContato()">Atualizar Contato\n\n                            </button>\n\n                        </ion-col>\n\n                        <ion-col></ion-col>\n\n                    </ion-row>\n\n                </section>\n\n            </section>\n\n        </ion-grid>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Filipe\Projetos Android\cassems-beneficiario\src\pages\beneficiario\beneficiario.html"*/
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
//# sourceMappingURL=36.js.map