webpackJsonp([65],{

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionarioRevalidacaoDependenteModule", function() { return QuestionarioRevalidacaoDependenteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questionario_revalidacao_dependente__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipe_module__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var QuestionarioRevalidacaoDependenteModule = /** @class */ (function () {
    function QuestionarioRevalidacaoDependenteModule() {
    }
    QuestionarioRevalidacaoDependenteModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__questionario_revalidacao_dependente__["a" /* QuestionarioRevalidacaoDependentePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__questionario_revalidacao_dependente__["a" /* QuestionarioRevalidacaoDependentePage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipe_module__["a" /* PipeModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__questionario_revalidacao_dependente__["a" /* QuestionarioRevalidacaoDependentePage */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [],
        })
    ], QuestionarioRevalidacaoDependenteModule);
    return QuestionarioRevalidacaoDependenteModule;
}());

//# sourceMappingURL=questionario-revalidacao-dependente.module.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionarioRevalidacaoDependentePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_questionario_revalidacao_model__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_toast_helper__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_revalidacao_service__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuestionarioRevalidacaoDependentePage = /** @class */ (function () {
    function QuestionarioRevalidacaoDependentePage(toastHelper, navCtrl, navParams, loadingCtrl, revalidacaoService) {
        this.toastHelper = toastHelper;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.revalidacaoService = revalidacaoService;
        this.questionario = new __WEBPACK_IMPORTED_MODULE_3__models_questionario_revalidacao_model__["a" /* QuestionarioRevalidacao */]();
        this.opcoesQuestao1 = __WEBPACK_IMPORTED_MODULE_3__models_questionario_revalidacao_model__["a" /* QuestionarioRevalidacao */].opcoesQuestao1();
        this.opcoesQuestao2 = __WEBPACK_IMPORTED_MODULE_3__models_questionario_revalidacao_model__["a" /* QuestionarioRevalidacao */].opcoesQuestao2();
        this.opcoesQuestao3 = __WEBPACK_IMPORTED_MODULE_3__models_questionario_revalidacao_model__["a" /* QuestionarioRevalidacao */].opcoesQuestao3();
        this.beneficiario = this.navParams.get('Beneficiario');
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'questao1': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            'questao2': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            'questao3': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            'prefeitura': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]({ value: '', disabled: true }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
        });
    }
    /**
     * Metodo utilizado para resetar o valor da prefeitura no questionario
     *
     * @author Anderson Friaca
     * @since v2.2.0 24/05/2017
     */
    QuestionarioRevalidacaoDependentePage.prototype.resetValorPrefeitura = function () {
        this.questionario.prefeitura = null;
        if (this.questionario.questao3 == __WEBPACK_IMPORTED_MODULE_3__models_questionario_revalidacao_model__["a" /* QuestionarioRevalidacao */].opcaoQuestao3Prefeitura.toString()) {
            this.form.get('prefeitura').enable();
        }
        else {
            this.form.get('prefeitura').disable();
        }
    };
    /**
     * Metodo utilizado para revalidar o beneficiario dependente
     *
     * @author Anderson Friaca
     * @since v2.2.0 24/05/2017
     */
    QuestionarioRevalidacaoDependentePage.prototype.revalidar = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.revalidacaoService.revalidarBeneficiario(this.beneficiario.matriculaCassems).subscribe(function (response) {
            loader.dismiss();
            _this.toastHelper.notificacaoMensagem('Revalidação realizada com sucesso');
            _this.navCtrl.setRoot('ListaGrupoFamiliarRevalidacaoPage');
        }, function (error) {
            if (error.status == 400) {
                _this.toastHelper.notificacaoMensagem(error.error.descricaoCompleta);
            }
            else {
                _this.toastHelper.notificacaoMensagem('Ocorreu um erro interno, por favor tente novamente mais tarde');
            }
            loader.dismiss();
        });
    };
    QuestionarioRevalidacaoDependentePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-questionario-revalidacao-dependente',template:/*ion-inline-start:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\revalidacao\dependente\questionario-revalidacao-dependente\questionario-revalidacao-dependente.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Revalidação</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="contentRevalidacao">\n    <form (ngSubmit)="revalidar()" [formGroup]="form" class="formQuestionarioRevalidacao" #formElement="ngForm">\n        <ion-list>\n            <ion-item>\n                <ion-label floating>Qual o grau de parentesco?</ion-label>\n                <ion-select [(ngModel)]="questionario.questao1" formControlName="questao1" cancelText="Fechar">\n                    <ion-option [value]="tipo.value" *ngFor="let tipo of opcoesQuestao1 | keysJson">{{tipo.key}}</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Ultimamente tem utilizado o plano para qual finalidade?</ion-label>\n                <ion-select [(ngModel)]="questionario.questao2" formControlName="questao2" cancelText="Fechar">\n                    <ion-option [value]="tipo.value" *ngFor="let tipo of opcoesQuestao2 | keysJson">{{tipo.key}}</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Cônjuge possui vinculo empregatício com:</ion-label>\n                <ion-select [(ngModel)]="questionario.questao3" formControlName="questao3" cancelText="Fechar" (ionChange)="resetValorPrefeitura()">\n                    <ion-option [value]="tipo.value" *ngFor="let tipo of opcoesQuestao3 | keysJson">{{tipo.key}}</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item *ngIf="questionario.questao3 == 2">\n                <ion-label floating>Qual?</ion-label>\n                <ion-input type="text" [(ngModel)]="questionario.prefeitura" formControlName="prefeitura"></ion-input>\n            </ion-item>\n        </ion-list>\n        <ion-row>\n            <button type="submit" ion-button block [disabled]="!formElement.form.valid">Revalidar</button>\n        </ion-row>\n    </form>\n</ion-content>\n'/*ion-inline-end:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\revalidacao\dependente\questionario-revalidacao-dependente\questionario-revalidacao-dependente.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__helpers_toast_helper__["a" /* ToastHelper */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_revalidacao_service__["a" /* RevalidacaoService */]])
    ], QuestionarioRevalidacaoDependentePage);
    return QuestionarioRevalidacaoDependentePage;
}());

//# sourceMappingURL=questionario-revalidacao-dependente.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionarioRevalidacao; });
var QuestionarioRevalidacao = /** @class */ (function () {
    function QuestionarioRevalidacao() {
    }
    Object.defineProperty(QuestionarioRevalidacao.prototype, "questao1", {
        get: function () {
            return this._questao1;
        },
        set: function (value) {
            this._questao1 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionarioRevalidacao.prototype, "questao2", {
        get: function () {
            return this._questao2;
        },
        set: function (value) {
            this._questao2 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionarioRevalidacao.prototype, "questao3", {
        get: function () {
            return this._questao3;
        },
        set: function (value) {
            this._questao3 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionarioRevalidacao.prototype, "prefeitura", {
        get: function () {
            return this._prefeitura;
        },
        set: function (value) {
            this._prefeitura = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionarioRevalidacao.prototype, "matriculaBeneficiario", {
        get: function () {
            return this._matriculaBeneficiario;
        },
        set: function (value) {
            this._matriculaBeneficiario = value;
        },
        enumerable: true,
        configurable: true
    });
    QuestionarioRevalidacao.opcoesQuestao1 = function () {
        return {
            'Esposo(a)': QuestionarioRevalidacao.opcaoQuestao1Esposo_a,
            'Companheiro(a)': QuestionarioRevalidacao.opcaoQuestao1Companheiro_a,
            'Não é mais meu dependente': QuestionarioRevalidacao.opcaoQuestao1NaoEMaisMeuDependente
        };
    };
    QuestionarioRevalidacao.opcoesQuestao2 = function () {
        return {
            'Consultas': QuestionarioRevalidacao.opcaoQuestao2Consultas,
            'Exames': QuestionarioRevalidacao.opcaoQuestao2Exames,
            'Procedimentos Cirúrgicos': QuestionarioRevalidacao.opcaoQuestao2ProcedimentosCirurgicos,
            'Todas': QuestionarioRevalidacao.opcaoQuestao2Todas,
            'Nenhuma das alternativas': QuestionarioRevalidacao.opcaoQuestao2NenhumaDasAlternativas
        };
    };
    QuestionarioRevalidacao.opcoesQuestao3 = function () {
        return {
            'Governo': QuestionarioRevalidacao.opcaoQuestao3Governo,
            'Prefeitura': QuestionarioRevalidacao.opcaoQuestao3Prefeitura,
            'Não tem mais vínculo': QuestionarioRevalidacao.opcaoQuestao3NaoTemMaisVinculo,
            'Não possui': QuestionarioRevalidacao.opcaoQuestao3NaoPossui
        };
    };
    QuestionarioRevalidacao.opcaoQuestao1Esposo_a = 1;
    QuestionarioRevalidacao.opcaoQuestao1Companheiro_a = 2;
    QuestionarioRevalidacao.opcaoQuestao1NaoEMaisMeuDependente = 3;
    QuestionarioRevalidacao.opcaoQuestao2Consultas = 1;
    QuestionarioRevalidacao.opcaoQuestao2Exames = 2;
    QuestionarioRevalidacao.opcaoQuestao2ProcedimentosCirurgicos = 3;
    QuestionarioRevalidacao.opcaoQuestao2Todas = 4;
    QuestionarioRevalidacao.opcaoQuestao2NenhumaDasAlternativas = 5;
    QuestionarioRevalidacao.opcaoQuestao3Governo = 1;
    QuestionarioRevalidacao.opcaoQuestao3Prefeitura = 2;
    QuestionarioRevalidacao.opcaoQuestao3NaoTemMaisVinculo = 3;
    QuestionarioRevalidacao.opcaoQuestao3NaoPossui = 4;
    return QuestionarioRevalidacao;
}());

//# sourceMappingURL=questionario-revalidacao.model.js.map

/***/ })

});
//# sourceMappingURL=65.js.map