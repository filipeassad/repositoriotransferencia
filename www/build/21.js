webpackJsonp([21],{

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtratoBeneficiarioModule", function() { return ExtratoBeneficiarioModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extrato_beneficiario__ = __webpack_require__(404);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ExtratoBeneficiarioModule = /** @class */ (function () {
    function ExtratoBeneficiarioModule() {
    }
    ExtratoBeneficiarioModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__extrato_beneficiario__["a" /* ExtratoBeneficiarioPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__extrato_beneficiario__["a" /* ExtratoBeneficiarioPage */]),
                __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__["a" /* PipeModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__extrato_beneficiario__["a" /* ExtratoBeneficiarioPage */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [],
        })
    ], ExtratoBeneficiarioModule);
    return ExtratoBeneficiarioModule;
}());

//# sourceMappingURL=extrato-beneficiario.module.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtratoBeneficiarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_extrato_beneficiario_model__ = __webpack_require__(405);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExtratoBeneficiarioPage = /** @class */ (function () {
    function ExtratoBeneficiarioPage(navParams) {
        this.navParams = navParams;
        this.extratoBeneficiario = new __WEBPACK_IMPORTED_MODULE_2__models_extrato_beneficiario_model__["a" /* ExtratoBeneficiario */]();
        this.tipoCaraterAtendimentoDescricao = '';
    }
    ExtratoBeneficiarioPage.prototype.ionViewDidLoad = function () {
        this.extratoBeneficiario = this.navParams.get('ExtratoBeneficiario');
        if (this.extratoBeneficiario.caraterAtendimento) {
            if (this.extratoBeneficiario.caraterAtendimento == '1') {
                this.tipoCaraterAtendimentoDescricao = 'Eletivo';
            }
            else {
                this.tipoCaraterAtendimentoDescricao = 'Urgência/Emergência';
            }
        }
        else {
            this.tipoCaraterAtendimentoDescricao = 'Sem Informação';
        }
    };
    ExtratoBeneficiarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-extrato-beneficiario',template:/*ion-inline-start:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\extrato-beneficiario\extrato-beneficiario\extrato-beneficiario.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            <span class="titulo-page">Extrato Beneficiário</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="contentExtratoBeneficiario">\n\n    <div class="details">\n        <ion-row wrap class="details-title-row">\n            <ion-col no-padding col-12>\n                <h2 class="details-title" text-center>{{extratoBeneficiario.nome | capitalizeAll}}</h2>\n            </ion-col>\n            <section class="prestador-section">\n                <ion-col no-padding col-12>\n                    <p class="details-description">\n                        Matrícula: {{extratoBeneficiario.matricCassems | matriculaCassems}}\n                    </p>\n                </ion-col>\n                <ion-col no-padding col-12>\n                    <p class="details-description">\n                        Plano: {{extratoBeneficiario.plano | capitalizeAll}}\n                    </p>\n                </ion-col>\n                <ion-col no-padding col-12>\n                    <p class="details-description">\n                        Prestador: {{extratoBeneficiario.nomeCredenciado | capitalizeAll}}\n                    </p>\n                </ion-col>\n                <ion-col no-padding col-12>\n                    <p class="details-description">\n                        CNES: {{extratoBeneficiario.cnes}}\n                    </p>\n                </ion-col>\n            </section>\n            <section class="procedimento-section">\n                <ion-col no-padding col-12>\n                    <p class="details-description">\n                        Data Procedimento: {{extratoBeneficiario.dataInicial | date: "dd/MM/y"}}\n                    </p>\n                </ion-col>\n                <ion-col no-padding col-12>\n                    <p class="details-description">\n                        Procedimento: {{extratoBeneficiario.descProcedimento | capitalizeAll}}\n                    </p>\n                </ion-col>\n            </section>\n            <section class="outros-detalhes-section">\n                <ion-col no-padding col-12 *ngIf="extratoBeneficiario.tipoConsulta">\n                    <p class="details-description">\n                        Tipo Consulta: {{extratoBeneficiario.tipoConsulta |\n                        capitalizeAll}}\n                    </p>\n                </ion-col>\n                <ion-col no-padding col-12 *ngIf="extratoBeneficiario.tipoInternacao">\n                    <p class="details-description">\n                        Tipo Internação: {{extratoBeneficiario.tipoInternacao}}\n                    </p>\n                </ion-col>\n                <ion-col no-padding col-12 *ngIf="extratoBeneficiario.evento">\n                    <p class="details-description">\n                        Evento: {{extratoBeneficiario.evento | capitalizeAll}}\n                    </p>\n                </ion-col>\n                <ion-col no-padding col-12>\n                    <p class="details-description">\n                        Caráter: {{tipoCaraterAtendimentoDescricao}}\n                    </p>\n                </ion-col>\n                <ion-col no-padding col-12 *ngIf="extratoBeneficiario.municipio">\n                    <p class="details-description">\n                        Município: {{extratoBeneficiario.municipio | capitalizeAll}}\n                    </p>\n                </ion-col>\n            </section>\n        </ion-row>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\extrato-beneficiario\extrato-beneficiario\extrato-beneficiario.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ExtratoBeneficiarioPage);
    return ExtratoBeneficiarioPage;
}());

//# sourceMappingURL=extrato-beneficiario.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtratoBeneficiario; });
var ExtratoBeneficiario = /** @class */ (function () {
    function ExtratoBeneficiario() {
    }
    Object.defineProperty(ExtratoBeneficiario.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtratoBeneficiario.prototype, "caraterAtendimento", {
        get: function () {
            return this._caraterAtendimento;
        },
        set: function (value) {
            this._caraterAtendimento = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtratoBeneficiario.prototype, "cnes", {
        get: function () {
            return this._cnes;
        },
        set: function (value) {
            this._cnes = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtratoBeneficiario.prototype, "codMunicipio", {
        get: function () {
            return this._codMunicipio;
        },
        set: function (value) {
            this._codMunicipio = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtratoBeneficiario.prototype, "codPlano", {
        get: function () {
            return this._codPlano;
        },
        set: function (value) {
            this._codPlano = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtratoBeneficiario.prototype, "codProcedimento", {
        get: function () {
            return this._codProcedimento;
        },
        set: function (value) {
            this._codProcedimento = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtratoBeneficiario.prototype, "dataFinal", {
        get: function () {
            return this._dataFinal;
        },
        set: function (value) {
            this._dataFinal = new Date(value.toString().replace(/-/g, '\/'));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtratoBeneficiario.prototype, "dataInicial", {
        get: function () {
            return this._dataInicial;
        },
        set: function (value) {
            this._dataInicial = new Date(value.toString().replace(/-/g, '\/'));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtratoBeneficiario.prototype, "descProcedimento", {
        get: function () {
            return this._descProcedimento;
        },
        set: function (value) {
            this._descProcedimento = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtratoBeneficiario.prototype, "evento", {
        get: function () {
            return this._evento;
        },
        set: function (value) {
            this._evento = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtratoBeneficiario.prototype, "matricCassems", {
        get: function () {
            return this._matricCassems;
        },
        set: function (value) {
            this._matricCassems = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtratoBeneficiario.prototype, "motivoEncerramento", {
        get: function () {
            return this._motivoEncerramento;
        },
        set: function (value) {
            this._motivoEncerramento = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtratoBeneficiario.prototype, "municipio", {
        get: function () {
            return this._municipio;
        },
        set: function (value) {
            this._municipio = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtratoBeneficiario.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (value) {
            this._nome = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtratoBeneficiario.prototype, "nomeCredenciado", {
        get: function () {
            return this._nomeCredenciado;
        },
        set: function (value) {
            this._nomeCredenciado = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtratoBeneficiario.prototype, "numCns", {
        get: function () {
            return this._numCns;
        },
        set: function (value) {
            this._numCns = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtratoBeneficiario.prototype, "plano", {
        get: function () {
            return this._plano;
        },
        set: function (value) {
            this._plano = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtratoBeneficiario.prototype, "qtde", {
        get: function () {
            return this._qtde;
        },
        set: function (value) {
            this._qtde = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtratoBeneficiario.prototype, "tipoConsulta", {
        get: function () {
            return this._tipoConsulta;
        },
        set: function (value) {
            this._tipoConsulta = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtratoBeneficiario.prototype, "tipoInternacao", {
        get: function () {
            return this._tipoInternacao;
        },
        set: function (value) {
            this._tipoInternacao = value;
        },
        enumerable: true,
        configurable: true
    });
    return ExtratoBeneficiario;
}());

//# sourceMappingURL=extrato-beneficiario.model.js.map

/***/ })

});
//# sourceMappingURL=21.js.map