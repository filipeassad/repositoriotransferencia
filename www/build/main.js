webpackJsonp([45],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    apiUrlBeneficiarioDev: 'http://hmlsgc.cassems.com.br/sgcWeb/rest/beneficiario/',
    apiUrlBeneficiarioProd: 'https://sgc.cassems.com.br/sgcWeb/rest/beneficiario/',
    apiUrlAgendamentoDev: 'http://hmlsgc.cassems.com.br/sgcWeb/rest/agendamento/',
    apiUrlAgendamentoProd: 'https://sgc.cassems.com.br/sgcWeb/rest/agendamento/',
    apiUrlPortalBeneficiarioDev: 'http://hmlbeneficiario.cassems.com.br/portal/',
    apiUrlPortalBeneficiarioProd: 'https://beneficiario.cassems.com.br/portal/',
    apiUrlNegociacaoDev: 'http://hmlsgc.cassems.com.br/srvb-wf-ss-financeiro/rest/negociacao/',
    apiUrlNegociacaoProd: 'https://sgc.cassems.com.br/srvb-wf-ss-financeiro/rest/negociacao/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeneficiarioBennerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeneficiarioBennerService = /** @class */ (function () {
    function BeneficiarioBennerService(http) {
        this.http = http;
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* isDevMode */])()) {
            this.apiUrlPortalBeneficiario = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrlPortalBeneficiarioDev;
        }
        else {
            this.apiUrlPortalBeneficiario = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrlPortalBeneficiarioProd;
        }
    }
    /**
     * Metodo utilizado para buscar os dados de uma determinada matricula do beneficiario
     *
     * @author Anderson Friaca
     * @param matricula
     */
    BeneficiarioBennerService.prototype.buscarBeneficiarioMatriculaCassems = function (matricula) {
        return this.http.get(this.apiUrlPortalBeneficiario + "RpBennerBeneficiario/matricula/" + matricula);
    };
    /**
     * Metodo utilizado para buscar os dados do grupo familiar (portal) atraves do handle do titular
     *
     * @author Anderson Friaca
     * @param handleTitular
     */
    BeneficiarioBennerService.prototype.buscarBeneficiariosGrupoFamiliarPortal = function (handleTitular) {
        return this.http.get(this.apiUrlPortalBeneficiario + "RpBennerBeneficiario/grupo_familiar/" + handleTitular);
    };
    /**
     * Metodo utilizado parabuscar os dados do beneficiairo atraves do cpf
     *
     * @author Anderson Friaca
     * @param cpf
     */
    BeneficiarioBennerService.prototype.buscarBeneficiarioCpf = function (cpf) {
        return this.http.get(this.apiUrlPortalBeneficiario + "RpBennerBeneficiario/cpf/" + cpf);
    };
    BeneficiarioBennerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BeneficiarioBennerService);
    return BeneficiarioBennerService;
}());

//# sourceMappingURL=beneficiario-benner.service.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtratoBeneficiarioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExtratoBeneficiarioService = /** @class */ (function () {
    function ExtratoBeneficiarioService(http) {
        this.http = http;
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* isDevMode */])()) {
            this.apiUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrlPortalBeneficiarioDev;
        }
        else {
            this.apiUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrlPortalBeneficiarioProd;
        }
    }
    /**
     * Metodo utilizado para buscar os extratos dos beneficiarios do grupo relacionado a matricula
     *
     * @author Anderson Friaca
     * @since v1.0.0 23/03/2017
     * @param cpf
     * @param dataInicial deve ser no formato: dd-mm-yyyy
     * @param dataFinal deve ser no formato: dd-mm-yyyy
     */
    ExtratoBeneficiarioService.prototype.buscarExtratoBeneficiarioGrupo = function (cpf, dataInicial, dataFinal) {
        return this.http.get(this.apiUrl + "RpExtratoMedico/lista?tipoExtratoMedico=2&matricula=" + cpf + "&dataInicial=" + dataInicial + "&dataFinal=" + dataFinal);
    };
    /**
     * Metodo utilizado para buscar os extratos do beneficiario relacionado a matricula
     *
     * @author Anderson Friaca
     * @since v1.0.0 23/03/2017
     * @param matricula
     * @param dataInicial deve ser no formato: dd-mm-yyyy
     * @param dataFinal deve ser no formato: dd-mm-yyyy
     */
    ExtratoBeneficiarioService.prototype.buscarExtratoBeneficiarioIndividual = function (matricula, dataInicial, dataFinal) {
        return this.http.get(this.apiUrl + "RpExtratoMedico/lista?tipoExtratoMedico=1&matricula=" + matricula + "&dataInicial=" + dataInicial + "&dataFinal=" + dataFinal);
    };
    /**
     * Metodo utilizado para buscar os ultimos extratos do beneficiario
     *
     * @author Anderson Friaca
     * @since v1.1.0 30/03/2017
     * @param matricula
     * @return Observable<ExtratoBeneficiario[]>
     */
    ExtratoBeneficiarioService.prototype.buscarExtratoBeneficiarioLimitadoIndividual = function (matricula) {
        return this.http.get(this.apiUrl + "RpExtratoMedico/lista_limitado?matricula=" + matricula);
    };
    ExtratoBeneficiarioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ExtratoBeneficiarioService);
    return ExtratoBeneficiarioService;
}());

//# sourceMappingURL=extrato-beneficiario.service.js.map

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/agendamento/agendamento/agendamento.module": [
		330,
		11
	],
	"../pages/agendamento/buscar-prestador-agendamento/buscar-prestador-agendamento.module": [
		331,
		44
	],
	"../pages/agendamento/cancelar-agendamento/cancelar-agendamento.module": [
		332,
		10
	],
	"../pages/agendamento/confirmar-agendamento/confirmar-agendamento.module": [
		333,
		43
	],
	"../pages/agendamento/escolher-data-agendamento/escolher-data-agendamento.module": [
		373,
		42
	],
	"../pages/agendamento/filtros-busca-agendamento-centro-medico/filtros-busca-agendamento-centro-medico.module": [
		334,
		41
	],
	"../pages/agendamento/filtros-busca-agendamento-especialidade/filtros-busca-agendamento-especialidade.module": [
		335,
		40
	],
	"../pages/agendamento/filtros-busca-agendamento-prestador/filtros-busca-agendamento-prestador.module": [
		336,
		39
	],
	"../pages/agendamento/meus-agendamentos/meus-agendamentos.module": [
		338,
		38
	],
	"../pages/agendamento/tipo-agendamento/tipo-agendamento.module": [
		337,
		37
	],
	"../pages/beneficiario/beneficiario.module": [
		340,
		36
	],
	"../pages/cadastro/atualizar-contato/atualizar-contato.module": [
		339,
		2
	],
	"../pages/cadastro/atualizar-endereco/atualizar-endereco.module": [
		341,
		0
	],
	"../pages/demonstrativo-pagamento/buscar-demonstrativo-pagamento/buscar-demonstrativo-pagamento.module": [
		343,
		17
	],
	"../pages/demonstrativo-pagamento/demonstrativo-pagamento/demonstrativo-pagamento.module": [
		349,
		16
	],
	"../pages/detalhe-fatura-negocicao/detalhe-fatura-negocicao.module": [
		342,
		35
	],
	"../pages/detalhes-autorizacao/detalhes-autorizacao.module": [
		344,
		34
	],
	"../pages/extrato-beneficiario/dependente/buscar-extrato-beneficiario-dependente/buscar-extrato-beneficiario-dependente.module": [
		345,
		9
	],
	"../pages/extrato-beneficiario/extrato-beneficiario/extrato-beneficiario.module": [
		346,
		21
	],
	"../pages/extrato-beneficiario/lista-extrato-beneficiario/lista-extrato-beneficiario.module": [
		348,
		8
	],
	"../pages/extrato-beneficiario/titular/buscar-extrato-beneficiario-titular/buscar-extrato-beneficiario-titular.module": [
		347,
		7
	],
	"../pages/grupo-familiar/dependente/grupo-familiar-dependente/grupo-familiar-dependente.module": [
		353,
		33
	],
	"../pages/grupo-familiar/titular/grupo-familiar-titular/grupo-familiar-titular.module": [
		350,
		32
	],
	"../pages/home/home.module": [
		166
	],
	"../pages/listagem-autorizacao/listagem-autorizacao.module": [
		351,
		31
	],
	"../pages/listagem-faturas-negociacao/listagem-faturas-negociacao.module": [
		352,
		30
	],
	"../pages/listagem-negociacao/listagem-negociacao.module": [
		354,
		29
	],
	"../pages/negociacao/negociacao.module": [
		357,
		1
	],
	"../pages/pre-home-redes-sociais/pre-home-redes-sociais.module": [
		355,
		28
	],
	"../pages/prestador/busca-prestador-lista/busca-prestador-lista.module": [
		359,
		15
	],
	"../pages/prestador/busca-prestador/busca-prestador.module": [
		356,
		14
	],
	"../pages/prestador/prestador/prestador.module": [
		360,
		20
	],
	"../pages/revalidacao/dependente/questionario-revalidacao-dependente/questionario-revalidacao-dependente.module": [
		358,
		19
	],
	"../pages/revalidacao/lista-grupo-familiar-revalidacao/lista-grupo-familiar-revalidacao.module": [
		361,
		27
	],
	"../pages/revalidacao/revalidacao-atualizar-endereco/revalidacao-atualizar-endereco.module": [
		362,
		13
	],
	"../pages/revalidacao/termo-convocado/termo-convocado.module": [
		364,
		26
	],
	"../pages/segunda-via-boleto/extrato-cabesp-boleto/extrato-cabesp-boleto.module": [
		365,
		25
	],
	"../pages/segunda-via-boleto/lista-segunda-via-boleto/lista-segunda-via-boleto.module": [
		366,
		24
	],
	"../pages/segunda-via-boleto/segunda-via-boleto/segunda-via-boleto.module": [
		363,
		22
	],
	"../pages/usuario/alterar-senha-usuario/alterar-senha-usuario.module": [
		367,
		5
	],
	"../pages/usuario/cadastrar-usuario/cadastrar-usuario.module": [
		369,
		4
	],
	"../pages/usuario/codigo-ativacao-usuario/codigo-ativacao-usuario.module": [
		370,
		6
	],
	"../pages/usuario/login/login.module": [
		374,
		3
	],
	"../pages/usuario/modal-termos-e-condicoes/modal-termos-e-condicoes.module": [
		368,
		23
	],
	"../pages/usuario/perfil/perfil.module": [
		371,
		12
	],
	"../pages/usuario/redefinir-senha-usuario/redefinir-senha-usuario.module": [
		372,
		18
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipe_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(217);
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
                __WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipe_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [],
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_extrato_beneficiario_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_toast_helper__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_beneficiario_benner_en_vi_portal_beneficiario_model__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(storageService, loadingCtrl, extratoBeneficiarioService, navCtrl, toastHelper) {
        this.storageService = storageService;
        this.loadingCtrl = loadingCtrl;
        this.extratoBeneficiarioService = extratoBeneficiarioService;
        this.navCtrl = navCtrl;
        this.toastHelper = toastHelper;
        this.beneficiario = new __WEBPACK_IMPORTED_MODULE_5__models_beneficiario_benner_en_vi_portal_beneficiario_model__["a" /* EnViPortalBeneficiario */]();
        this.listaExtratoBeneficiario = [];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        var ativarBuscaExtratoBeneficiario = false;
        this.storageService.getBeneficiario()
            .then(function (beneficiario) {
            _this.beneficiario = beneficiario;
            if (ativarBuscaExtratoBeneficiario) {
                _this.extratoBeneficiarioService.buscarExtratoBeneficiarioLimitadoIndividual(_this.beneficiario.matriculaCassems).subscribe(function (lista) {
                    if (lista != null) {
                        _this.listaExtratoBeneficiario = lista;
                    }
                    loader.dismiss();
                }, function () {
                    loader.dismiss();
                    _this.toastHelper.notificacaoErroCarregarDados();
                });
            }
        }, function () {
            _this.toastHelper.notificacaoErroCarregarDados();
        });
        loader.dismiss();
    };
    HomePage.prototype.visualizarExtratoBeneficiario = function (extratoBeneficiario) {
        this.navCtrl.push('ExtratoBeneficiarioPage', { 'ExtratoBeneficiario': extratoBeneficiario });
    };
    HomePage.prototype.recarregarDados = function (refresher) {
        var _this = this;
        this.extratoBeneficiarioService.buscarExtratoBeneficiarioLimitadoIndividual(this.beneficiario.matriculaCassems).subscribe(function (lista) {
            _this.listaExtratoBeneficiario = lista;
            refresher.complete();
        }, function () {
            refresher.complete();
            _this.toastHelper.notificacaoErroCarregarDados();
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Filipe\Projetos Android\cassems-beneficiario\src\pages\home\home.html"*/'<ion-header class="listing-header">\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n            <div class="header-logo">\n\n                <preload-image [ratio]="{w:583, h:100}" src="./assets/images/logo3.png"></preload-image>\n\n            </div>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="contentHome">\n\n\n\n    <ion-refresher (ionRefresh)="recarregarDados($event)">\n\n        <ion-refresher-content\n\n                pullingIcon="arrow-dropdown"\n\n                pullingText="Puxe para atualizar"\n\n                refreshingSpinner="circles"\n\n                refreshingText="Carregando dados...">\n\n        </ion-refresher-content>\n\n    </ion-refresher>\n\n\n\n    <div class="user-details">\n\n        <ion-row wrap class="user-bio-row">\n\n            <ion-col no-padding col-12 text-center>\n\n                <h2 class="user-name">{{beneficiario.nome | capitalizeAll}}</h2>\n\n            </ion-col>\n\n            <section class="user-detail-section">\n\n                <ion-col no-padding col-12>\n\n                    <p class="user-description">\n\n                        Matrícula: {{beneficiario.matriculaCassems | matriculaCassems}}\n\n                    </p>\n\n                </ion-col>\n\n            </section>\n\n        </ion-row>\n\n    </div>\n\n    <section class="lista-extrato-beneficiario-section" *ngIf="listaExtratoBeneficiario.length">\n\n        <h2 class="titulo-lista-extratos" text-center>Procedimentos Recentes</h2>\n\n        <ion-list>\n\n            <button ion-item class="list-item" *ngFor="let extratoBeneficiario of listaExtratoBeneficiario" (click)="visualizarExtratoBeneficiario(extratoBeneficiario)">\n\n                <ion-row no-padding class="content-row one-line">\n\n\n\n                    <ion-col no-padding width-90 class="item-content">\n\n                        <h3 class="item-title" text-wrap>{{ extratoBeneficiario.nome | capitalizeAll}}</h3>\n\n                        <p class="item-description">Data: {{ extratoBeneficiario.dataInicial | date: "dd/MM/y"}}</p>\n\n                        <p class="item-description">Procedimento: {{extratoBeneficiario.descProcedimento | capitalizeAll}}</p>\n\n                    </ion-col>\n\n                    <ion-col no-padding width-10 class="item-icon">\n\n                        <ion-icon name="arrow-forward"></ion-icon>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </button>\n\n        </ion-list>\n\n    </section>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Filipe\Projetos Android\cassems-beneficiario\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_extrato_beneficiario_service__["a" /* ExtratoBeneficiarioService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__helpers_toast_helper__["a" /* ToastHelper */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowHideInput; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowHideInput = /** @class */ (function () {
    function ShowHideInput(el) {
        this.el = el;
        this.type = 'password';
    }
    ShowHideInput.prototype.changeType = function (type) {
        this.type = type;
        this.el.nativeElement.children[0].type = this.type;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])(),
        __metadata("design:type", String)
    ], ShowHideInput.prototype, "type", void 0);
    ShowHideInput = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[show-hide-input]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], ShowHideInput);
    return ShowHideInput;
}());

//# sourceMappingURL=show-hide-input.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__matricula_cassems_pipe__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cep_pipe__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cpf_pipe__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cnpj_pipe__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__capitalize_all_pipe__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__keys_enum_pipe__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__monetario_brasil_pipe__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mes_brasil_pipe__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__keys_json_pipe__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__telefone_pipe__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var PipeModule = /** @class */ (function () {
    function PipeModule() {
    }
    PipeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__matricula_cassems_pipe__["a" /* MatriculaCassemsPipe */],
                __WEBPACK_IMPORTED_MODULE_2__cep_pipe__["a" /* CepPipe */],
                __WEBPACK_IMPORTED_MODULE_3__cpf_pipe__["a" /* CpfPipe */],
                __WEBPACK_IMPORTED_MODULE_4__cnpj_pipe__["a" /* CnpjPipe */],
                __WEBPACK_IMPORTED_MODULE_5__capitalize_all_pipe__["a" /* CapitalizeAllPipe */],
                __WEBPACK_IMPORTED_MODULE_6__keys_enum_pipe__["a" /* KeysEnumPipe */],
                __WEBPACK_IMPORTED_MODULE_9__keys_json_pipe__["a" /* KeysJsonPipe */],
                __WEBPACK_IMPORTED_MODULE_7__monetario_brasil_pipe__["a" /* MonetarioBrasilPipe */],
                __WEBPACK_IMPORTED_MODULE_8__mes_brasil_pipe__["a" /* MesBrasilPipe */],
                __WEBPACK_IMPORTED_MODULE_10__telefone_pipe__["a" /* TelefonePipe */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__matricula_cassems_pipe__["a" /* MatriculaCassemsPipe */],
                __WEBPACK_IMPORTED_MODULE_2__cep_pipe__["a" /* CepPipe */],
                __WEBPACK_IMPORTED_MODULE_3__cpf_pipe__["a" /* CpfPipe */],
                __WEBPACK_IMPORTED_MODULE_4__cnpj_pipe__["a" /* CnpjPipe */],
                __WEBPACK_IMPORTED_MODULE_5__capitalize_all_pipe__["a" /* CapitalizeAllPipe */],
                __WEBPACK_IMPORTED_MODULE_6__keys_enum_pipe__["a" /* KeysEnumPipe */],
                __WEBPACK_IMPORTED_MODULE_9__keys_json_pipe__["a" /* KeysJsonPipe */],
                __WEBPACK_IMPORTED_MODULE_7__monetario_brasil_pipe__["a" /* MonetarioBrasilPipe */],
                __WEBPACK_IMPORTED_MODULE_8__mes_brasil_pipe__["a" /* MesBrasilPipe */],
                __WEBPACK_IMPORTED_MODULE_10__telefone_pipe__["a" /* TelefonePipe */]
            ]
        })
    ], PipeModule);
    return PipeModule;
}());

//# sourceMappingURL=pipe.module.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendamentoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AgendamentoService = /** @class */ (function () {
    function AgendamentoService(http) {
        this.http = http;
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* isDevMode */])()) {
            this.apiUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrlAgendamentoDev;
            this.apiUrlPortalBeneficiario = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrlPortalBeneficiarioDev;
        }
        else {
            this.apiUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrlAgendamentoProd;
            this.apiUrlPortalBeneficiario = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrlPortalBeneficiarioProd;
        }
    }
    /**
     * Metodo utilizado para buscar a lista de especialidades de agendamento
     *
     * @author Anderson Friaca
     * @param centroMedico
     * @param codCrecenciado
     * @returns {Observable<Especialidade[]>}
     */
    AgendamentoService.prototype.buscarListaEspecialidade = function (centroMedico, codCrecenciado) {
        if (centroMedico === void 0) { centroMedico = null; }
        if (codCrecenciado === void 0) { codCrecenciado = null; }
        var parametros = '';
        if (centroMedico) {
            parametros = '?centroMedico=' + centroMedico;
        }
        if (codCrecenciado) {
            if (parametros.length) {
                parametros += '&codCredenciado=' + codCrecenciado;
            }
            else {
                parametros += '?codCredenciado=' + codCrecenciado;
            }
        }
        return this.http.get(this.apiUrl + 'listar-especialidades' + parametros);
    };
    /**
     * Metodo utilizado para buscar a lista de centros medicos para agendamento
     *
     * @author Anderson Friaca
     * @param codEspecialidade
     * @param codCredenciado
     * @returns {Observable<CentroMedico[]>}
     */
    AgendamentoService.prototype.buscarListaCentroMedico = function (codEspecialidade, codCredenciado) {
        if (codEspecialidade === void 0) { codEspecialidade = null; }
        if (codCredenciado === void 0) { codCredenciado = null; }
        var parametros = '';
        if (codEspecialidade) {
            parametros = '?codEspecialidade=' + codEspecialidade;
        }
        if (codCredenciado) {
            if (parametros.length) {
                parametros += '&codCredenciado=' + codCredenciado;
            }
            else {
                parametros += '?codCredenciado=' + codCredenciado;
            }
        }
        return this.http.get(this.apiUrl + 'listar-centros-medicos' + parametros);
    };
    /**
     * Metodo utilizado para buscar a lista de prestadores para agendamento
     *
     * @author Anderson Friaca
     * @param centroMedico
     * @param codEspecialidade
     * @param nome
     * @returns {Observable<Prestador[]>}
     */
    AgendamentoService.prototype.buscarListaCredenciado = function (centroMedico, codEspecialidade, nome) {
        if (centroMedico === void 0) { centroMedico = null; }
        if (codEspecialidade === void 0) { codEspecialidade = null; }
        if (nome === void 0) { nome = ''; }
        var parametros = '';
        if (centroMedico) {
            parametros = '?centroMedico=' + centroMedico;
        }
        if (codEspecialidade) {
            if (parametros.length) {
                parametros += '&codEspecialidade=' + codEspecialidade;
            }
            else {
                parametros = '?codEspecialidade=' + codEspecialidade;
            }
        }
        if (nome.length) {
            if (parametros.length) {
                parametros = '&nome=' + nome;
            }
            else {
                parametros = '?nome=' + nome;
            }
        }
        return this.http.get(this.apiUrl + 'listar-credenciados' + parametros);
    };
    /**
     * Metodo utilizado para buscar a agenda de determinado prestador
     *
     * @author Anderson Friaca
     * @param codigoCredenciado
     * @param centroMedico
     * @returns {Observable<[]>}
     */
    AgendamentoService.prototype.buscarAgendaPrestador = function (codigoCredenciado, centroMedico) {
        if (codigoCredenciado === void 0) { codigoCredenciado = null; }
        if (centroMedico === void 0) { centroMedico = null; }
        return this.http.get(this.apiUrl + 'buscar-agenda-prestador/' + codigoCredenciado + ',' + centroMedico);
    };
    /**
     * Metodo utilizado para listar a agenda de um determinado beneficiario
     *
     * @author Anderson Friaca
     * @param matricula
     * @returns {Observable<Agendamento[]>}
     */
    AgendamentoService.prototype.listarAgendaBeneficiario = function (matricula) {
        return this.http.get(this.apiUrl + 'listar-agenda-beneficiario/' + matricula);
    };
    /**
     * Metodo utilizado para realizar um agendamento
     *
     * @author Anderson Friaca
     * @param matricula
     * @param dataAgendamento
     * @param horaAgendamento
     * @param codigoEspecialidade
     * @param codigoCentroMedico
     * @param codigoCredenciado
     * @returns {Observable<{}>}
     */
    AgendamentoService.prototype.agendar = function (matricula, dataAgendamento, horaAgendamento, codigoEspecialidade, codigoCentroMedico, codigoCredenciado) {
        return this.http.post(this.apiUrl + "agendar?codigoBeneficiario=" + matricula + "&dataAgendamento=" + dataAgendamento + "&horaAgendamento=" + horaAgendamento + "&codigoEspecialidade=" + codigoEspecialidade + "&codigoCentroMedico=" + codigoCentroMedico + "&codigoPrestador=" + codigoCredenciado + "&tipoRequisicao=0", {});
    };
    /**
     * Metodo utilizado para cancelar um agendamento
     *
     * @author Anderson Friaca
     * @since 19/07/2017
     * @param {number} idGuia
     * @param {string} motivoCancelamento
     * @returns {Observable<{}>}
     */
    AgendamentoService.prototype.cancelarAgendamento = function (idGuia, motivoCancelamento) {
        return this.http.post(this.apiUrl + "cancelar-agendamento?idGuia=" + idGuia + "&motivo=" + motivoCancelamento + "&idRequisicao=0", {});
    };
    /**
     * Metodo utilizado para validar os parametros de um determinado agendamento,
     * assim obtendo a lista de avisos/mensagens
     *
     * @author Anderson Friaca
     * @param {number} benId
     * @param {number} codEspecialidade
     * @param {string} codPrestador
     * @param {number} codCentroMedico
     * @return {Observable<ValidaAgendamentoTO>}
     */
    AgendamentoService.prototype.validarParametrosAgendamento = function (benId, codEspecialidade, codPrestador, codCentroMedico) {
        return this.http.get(this.apiUrlPortalBeneficiario + "RpAgendamento/validar_parametros_agendamento?benId=" + benId + "&codEspecialidade=" + codEspecialidade + "&codPrestador=" + codPrestador + "&codCentroMedico=" + codCentroMedico);
    };
    AgendamentoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], AgendamentoService);
    return AgendamentoService;
}());

//# sourceMappingURL=agendamento.service.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jshashes__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jshashes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jshashes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_util_helper__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsuarioService = /** @class */ (function () {
    function UsuarioService(http) {
        this.http = http;
        this.utilHelper = new __WEBPACK_IMPORTED_MODULE_3__helpers_util_helper__["a" /* UtilHelper */]();
        this.sha1 = new __WEBPACK_IMPORTED_MODULE_1_jshashes__["SHA1"];
        this.salt = 'b0facef43eecc67fd8a4a0c93aa7056f1e0f584d';
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* isDevMode */])()) {
            this.apiUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrlBeneficiarioDev;
        }
        else {
            this.apiUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrlBeneficiarioProd;
        }
    }
    UsuarioService.prototype.realizarLogin = function (usuario) {
        var password = this.sha1.hex(this.salt + usuario.password);
        return this.http.post(this.apiUrl + 'validar-login-senha', {
            matricula: usuario.username,
            senha: password
        }, { headers: this.utilHelper.montarHeaders([]) });
    };
    UsuarioService.prototype.realizarCadastroUsuario = function (usuario) {
        var dataNascimento = new Date(usuario.dataNascimento.toString().replace(/-/g, '\/'));
        return this.http.post(this.apiUrl + "cadastrar-novo-usuario?matricula=" + usuario.matriculaCassems.trim() + "&&cpf=" + usuario.cpf.trim() + "&&email=" + usuario.email.trim() + "&&data-nascimento=" + dataNascimento.getDate() + "-" + ("0" + (dataNascimento.getMonth() + 1)).slice(-2) + "-" + dataNascimento.getFullYear(), {}, { headers: this.utilHelper.montarHeaders() });
    };
    UsuarioService.prototype.validarCodigoAtivacao = function (cpf, codigoAtivacao, tipoValidacao) {
        return this.http.get(this.apiUrl + "validar-cadastro-novo-usuario/" + tipoValidacao + "," + cpf + "," + codigoAtivacao, { headers: this.utilHelper.montarHeaders() });
    };
    UsuarioService.prototype.realizarPedidoReenvioSenha = function (cpf) {
        return this.http.get(this.apiUrl + "esqueci-minha-senha/" + cpf, { headers: this.utilHelper.montarHeaders() });
    };
    UsuarioService.prototype.alterarSenha = function (cpf, senha, novaSenha) {
        return this.http.post(this.apiUrl + 'alterar-senha', {
            matricula: cpf,
            senha: this.sha1.hex(this.salt + senha),
            novaSenha: this.sha1.hex(this.salt + novaSenha)
        }, { headers: this.utilHelper.montarHeaders([]) });
    };
    /**
     * Metodo utilizado para buscar o usuario pelo id da rede social
     *
     * @author Anderson Friaca
     *
     * @param {string} username
     * @param {string} idFacebook
     * @param {string} idGooglePlus
     * @returns {Observable<Usuario>}
     */
    UsuarioService.prototype.buscarUsuario = function (username, idFacebook, idGooglePlus) {
        if (username === void 0) { username = null; }
        if (idFacebook === void 0) { idFacebook = null; }
        if (idGooglePlus === void 0) { idGooglePlus = null; }
        var params = '';
        if (username != null) {
            params = params + 'username=' + username;
        }
        else {
            if (idFacebook != null) {
                params = params + 'id_facebook=' + idFacebook;
            }
            else {
                params = params + 'id_google=' + idGooglePlus;
            }
        }
        return this.http.get(this.apiUrl + "buscar-usuario?" + params);
    };
    /**
     * Metodo utilizado para vincular um determinado usuario com uma rede social atraves da matricula
     *
     * @author Anderson Friaca
     *
     * @param {string} matricula
     * @param {string} idFacebook
     * @param {string} idGooglePlus
     * @returns {Observable<any>}
     */
    UsuarioService.prototype.vincularUsuarioRedeSocial = function (matricula, idFacebook, idGooglePlus) {
        if (idFacebook === void 0) { idFacebook = null; }
        if (idGooglePlus === void 0) { idGooglePlus = null; }
        var params = '';
        if (idFacebook != null) {
            params = params + 'id_facebook=' + idFacebook;
        }
        else {
            params = params + 'id_google=' + idGooglePlus;
        }
        return this.http.post(this.apiUrl + "vincular-rede-social/" + matricula + "?" + params, []);
    };
    /**
     * Metodo utilizado para desvincular um determinado id da rede social a algum usuario
     *
     * @author Anderson Friaca
     *
     * @param {string} idFacebook
     * @param {string} idGooglePlus
     * @returns {Observable<any>}
     */
    UsuarioService.prototype.desvincularUsuarioRedeSocial = function (idFacebook, idGooglePlus) {
        if (idFacebook === void 0) { idFacebook = null; }
        if (idGooglePlus === void 0) { idGooglePlus = null; }
        var params = '';
        if (idFacebook != null) {
            params = params + 'id_facebook=' + idFacebook;
        }
        else {
            params = params + 'id_google=' + idGooglePlus;
        }
        return this.http.post(this.apiUrl + "desvincular-rede-social?" + params, []);
    };
    UsuarioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], UsuarioService);
    return UsuarioService;
}());

//# sourceMappingURL=usuario.service.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnViPortalBeneficiario; });
/**
 * Baseada na seguinte classe do SISGS br.com.ben.oracle.beneficiario.EnViPortalBeneficiario
 */
var EnViPortalBeneficiario = /** @class */ (function () {
    function EnViPortalBeneficiario() {
    }
    Object.defineProperty(EnViPortalBeneficiario.prototype, "handle", {
        get: function () {
            return this._handle;
        },
        set: function (value) {
            this._handle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "benId", {
        get: function () {
            return this._benId;
        },
        set: function (value) {
            this._benId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "matriculaCassems", {
        get: function () {
            return this._matriculaCassems;
        },
        set: function (value) {
            this._matriculaCassems = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (value) {
            this._nome = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "rg", {
        get: function () {
            return this._rg;
        },
        set: function (value) {
            this._rg = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "cpf", {
        get: function () {
            return this._cpf;
        },
        set: function (value) {
            this._cpf = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "orgaoExpRg", {
        get: function () {
            return this._orgaoExpRg;
        },
        set: function (value) {
            this._orgaoExpRg = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "numSegurado", {
        get: function () {
            return this._numSegurado;
        },
        set: function (value) {
            this._numSegurado = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "seqSegurado", {
        get: function () {
            return this._seqSegurado;
        },
        set: function (value) {
            this._seqSegurado = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "handleTitular", {
        get: function () {
            return this._handleTitular;
        },
        set: function (value) {
            this._handleTitular = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "benIdTitular", {
        get: function () {
            return this._benIdTitular;
        },
        set: function (value) {
            this._benIdTitular = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "dataNascimento", {
        get: function () {
            return this._dataNascimento;
        },
        set: function (value) {
            this._dataNascimento = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "idade", {
        get: function () {
            return this._idade;
        },
        set: function (value) {
            this._idade = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "sexo", {
        get: function () {
            return this._sexo;
        },
        set: function (value) {
            this._sexo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "codMunicipio", {
        get: function () {
            return this._codMunicipio;
        },
        set: function (value) {
            this._codMunicipio = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "numeroCns", {
        get: function () {
            return this._numeroCns;
        },
        set: function (value) {
            this._numeroCns = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "nomeMae", {
        get: function () {
            return this._nomeMae;
        },
        set: function (value) {
            this._nomeMae = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "nomePai", {
        get: function () {
            return this._nomePai;
        },
        set: function (value) {
            this._nomePai = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "tipoDependencia", {
        get: function () {
            return this._tipoDependencia;
        },
        set: function (value) {
            this._tipoDependencia = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "codDependencia", {
        get: function () {
            return this._codDependencia;
        },
        set: function (value) {
            this._codDependencia = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "descricaoDependencia", {
        get: function () {
            return this._descricaoDependencia;
        },
        set: function (value) {
            this._descricaoDependencia = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "municipioNascimento", {
        get: function () {
            return this._municipioNascimento;
        },
        set: function (value) {
            this._municipioNascimento = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "estadoCivil", {
        get: function () {
            return this._estadoCivil;
        },
        set: function (value) {
            this._estadoCivil = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "descricaoEstadoCivil", {
        get: function () {
            return this._descricaoEstadoCivil;
        },
        set: function (value) {
            this._descricaoEstadoCivil = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "titular", {
        get: function () {
            return this._titular;
        },
        set: function (value) {
            this._titular = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "situacaoBenef", {
        get: function () {
            return this._situacaoBenef;
        },
        set: function (value) {
            this._situacaoBenef = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "dataCancelamento", {
        get: function () {
            return this._dataCancelamento;
        },
        set: function (value) {
            this._dataCancelamento = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "codMotivoCancelamento", {
        get: function () {
            return this._codMotivoCancelamento;
        },
        set: function (value) {
            this._codMotivoCancelamento = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "motivoCancelamento", {
        get: function () {
            return this._motivoCancelamento;
        },
        set: function (value) {
            this._motivoCancelamento = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "dataBloqueio", {
        get: function () {
            return this._dataBloqueio;
        },
        set: function (value) {
            this._dataBloqueio = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "codMotivoBloqueio", {
        get: function () {
            return this._codMotivoBloqueio;
        },
        set: function (value) {
            this._codMotivoBloqueio = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "motivoBloqueio", {
        get: function () {
            return this._motivoBloqueio;
        },
        set: function (value) {
            this._motivoBloqueio = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "faixaEtaria", {
        get: function () {
            return this._faixaEtaria;
        },
        set: function (value) {
            this._faixaEtaria = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "dataAdesao", {
        get: function () {
            return this._dataAdesao;
        },
        set: function (value) {
            this._dataAdesao = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "compValidadeFinal", {
        get: function () {
            return this._compValidadeFinal;
        },
        set: function (value) {
            this._compValidadeFinal = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "dataValidadeFinal", {
        get: function () {
            return this._dataValidadeFinal;
        },
        set: function (value) {
            this._dataValidadeFinal = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "idContrato", {
        get: function () {
            return this._idContrato;
        },
        set: function (value) {
            this._idContrato = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "codContrato", {
        get: function () {
            return this._codContrato;
        },
        set: function (value) {
            this._codContrato = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "descricaoContrato", {
        get: function () {
            return this._descricaoContrato;
        },
        set: function (value) {
            this._descricaoContrato = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "reciprocidade", {
        get: function () {
            return this._reciprocidade;
        },
        set: function (value) {
            this._reciprocidade = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "dataCadastro", {
        get: function () {
            return this._dataCadastro;
        },
        set: function (value) {
            this._dataCadastro = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "codProduto", {
        get: function () {
            return this._codProduto;
        },
        set: function (value) {
            this._codProduto = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "descricaoProduto", {
        get: function () {
            return this._descricaoProduto;
        },
        set: function (value) {
            this._descricaoProduto = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "codPlanoAns", {
        get: function () {
            return this._codPlanoAns;
        },
        set: function (value) {
            this._codPlanoAns = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "descricaoPlanoAns", {
        get: function () {
            return this._descricaoPlanoAns;
        },
        set: function (value) {
            this._descricaoPlanoAns = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "tipoContratacao", {
        get: function () {
            return this._tipoContratacao;
        },
        set: function (value) {
            this._tipoContratacao = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "regulamentacaoPlano", {
        get: function () {
            return this._regulamentacaoPlano;
        },
        set: function (value) {
            this._regulamentacaoPlano = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "segmentacaoAssistencial", {
        get: function () {
            return this._segmentacaoAssistencial;
        },
        set: function (value) {
            this._segmentacaoAssistencial = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "codVinculo", {
        get: function () {
            return this._codVinculo;
        },
        set: function (value) {
            this._codVinculo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "descricaoBenefOrgaoVinculo", {
        get: function () {
            return this._descricaoBenefOrgaoVinculo;
        },
        set: function (value) {
            this._descricaoBenefOrgaoVinculo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "statusVinculo", {
        get: function () {
            return this._statusVinculo;
        },
        set: function (value) {
            this._statusVinculo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "gerenciavel", {
        get: function () {
            return this._gerenciavel;
        },
        set: function (value) {
            this._gerenciavel = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "matriculaFolha", {
        get: function () {
            return this._matriculaFolha;
        },
        set: function (value) {
            this._matriculaFolha = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "codAcomodacao", {
        get: function () {
            return this._codAcomodacao;
        },
        set: function (value) {
            this._codAcomodacao = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "descricaoAcomodacao", {
        get: function () {
            return this._descricaoAcomodacao;
        },
        set: function (value) {
            this._descricaoAcomodacao = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "codEndereco", {
        get: function () {
            return this._codEndereco;
        },
        set: function (value) {
            this._codEndereco = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "enderecoResidencial", {
        get: function () {
            return this._enderecoResidencial;
        },
        set: function (value) {
            this._enderecoResidencial = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "numeroResidencial", {
        get: function () {
            return this._numeroResidencial;
        },
        set: function (value) {
            this._numeroResidencial = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "cep", {
        get: function () {
            return this._cep;
        },
        set: function (value) {
            this._cep = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "bairro", {
        get: function () {
            return this._bairro;
        },
        set: function (value) {
            this._bairro = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "complementoEndereco", {
        get: function () {
            return this._complementoEndereco;
        },
        set: function (value) {
            this._complementoEndereco = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "codMunicipioResidencial", {
        get: function () {
            return this._codMunicipioResidencial;
        },
        set: function (value) {
            this._codMunicipioResidencial = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "municipioResidencial", {
        get: function () {
            return this._municipioResidencial;
        },
        set: function (value) {
            this._municipioResidencial = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "codEstadoResidencial", {
        get: function () {
            return this._codEstadoResidencial;
        },
        set: function (value) {
            this._codEstadoResidencial = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "estadoResidencial", {
        get: function () {
            return this._estadoResidencial;
        },
        set: function (value) {
            this._estadoResidencial = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "ufResidencial", {
        get: function () {
            return this._ufResidencial;
        },
        set: function (value) {
            this._ufResidencial = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "codPaisResidencial", {
        get: function () {
            return this._codPaisResidencial;
        },
        set: function (value) {
            this._codPaisResidencial = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "paisResidencial", {
        get: function () {
            return this._paisResidencial;
        },
        set: function (value) {
            this._paisResidencial = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "celular", {
        get: function () {
            return this._celular;
        },
        set: function (value) {
            this._celular = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "telefone", {
        get: function () {
            return this._telefone;
        },
        set: function (value) {
            this._telefone = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "emailPortal", {
        get: function () {
            return this._emailPortal;
        },
        set: function (value) {
            this._emailPortal = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnViPortalBeneficiario.prototype, "celularContato", {
        get: function () {
            return this._celularContato;
        },
        set: function (value) {
            this._celularContato = value;
        },
        enumerable: true,
        configurable: true
    });
    return EnViPortalBeneficiario;
}());

//# sourceMappingURL=en-vi-portal-beneficiario.model.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RevalidacaoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RevalidacaoService = /** @class */ (function () {
    function RevalidacaoService(http) {
        this.http = http;
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* isDevMode */])()) {
            this.apiUrlBeneficiario = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrlPortalBeneficiarioDev;
        }
        else {
            this.apiUrlBeneficiario = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrlPortalBeneficiarioProd;
        }
    }
    /**
     * Metodo utilizado para buscar a lista dos beneficiarios aptos para revalidacao da carteira,
     * conforme o grupo familiar
     *
     * @author Anderson Friaca
     * @since v2.2.0 22/05/2017
     * @returns {Observable<EnViPortalBeneficiario[]>}
     * @param handleTitular
     */
    RevalidacaoService.prototype.listaGrupoFamiliarAptoRevalidacao = function (handleTitular) {
        return this.http.get(this.apiUrlBeneficiario + "RpBennerBeneficiarioCadastro/grupo_revalidacao/" + handleTitular);
    };
    /**
     * Metodo utilizado para revalidar um determinado beneficiario
     *
     * @author Anderson Friaca
     * @since v2.2.0 23/05/2017
     *
     * @param matricula
     * @param cep
     * @param endereco
     * @param numero
     * @param complemento
     * @param bairro
     * @param atualizaEndereco
     * @returns {Observable<{}>}
     */
    RevalidacaoService.prototype.revalidarBeneficiario = function (matricula, cep, endereco, numero, complemento, bairro, atualizaEndereco) {
        if (cep === void 0) { cep = null; }
        if (endereco === void 0) { endereco = null; }
        if (numero === void 0) { numero = null; }
        if (complemento === void 0) { complemento = null; }
        if (bairro === void 0) { bairro = null; }
        if (atualizaEndereco === void 0) { atualizaEndereco = 0; }
        var bodyParams = {
            "cep": cep,
            "endereco": endereco,
            "numero": numero,
            "complemento": complemento,
            "bairro": bairro,
            "atualizaEndereco": atualizaEndereco
        };
        return this.http.post(this.apiUrlBeneficiario + "RpBennerBeneficiarioCadastro/revalida_cartao_benner/" + matricula, bodyParams);
    };
    RevalidacaoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], RevalidacaoService);
    return RevalidacaoService;
}());

//# sourceMappingURL=revalidacao.service.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IosHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IosHelper = /** @class */ (function () {
    function IosHelper(platform, loadingCtrl) {
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
    }
    /**
     * Metodo utilizado para mostrar um loader por um tempo determinado, padrao 0.5s
     *
     * @author Anderson Friaca
     * @since 27/06/2017
     * @param tempo
     */
    IosHelper.prototype.mostrarLoaderTemporario = function (tempo) {
        var _this = this;
        if (tempo === void 0) { tempo = 500; }
        if (this.platform.is('ios')) {
            this.loader = this.loadingCtrl.create({
                content: "Por favor aguarde...",
            });
            this.loader.present();
            setTimeout(function () {
                _this.loader.dismiss();
            }, tempo);
        }
    };
    IosHelper = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], IosHelper);
    return IosHelper;
}());

//# sourceMappingURL=ios.helper.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__show_hide_password_show_hide_container__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__show_hide_password_show_hide_input__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__background_image_background_image__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__preload_image_preload_image__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__show_hide_password_show_hide_container__["a" /* ShowHideContainer */],
                __WEBPACK_IMPORTED_MODULE_2__show_hide_password_show_hide_input__["a" /* ShowHideInput */],
                __WEBPACK_IMPORTED_MODULE_3__background_image_background_image__["a" /* BackgroundImage */],
                __WEBPACK_IMPORTED_MODULE_4__preload_image_preload_image__["a" /* PreloadImage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__show_hide_password_show_hide_container__["a" /* ShowHideContainer */]),
                __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__background_image_background_image__["a" /* BackgroundImage */]),
                __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__preload_image_preload_image__["a" /* PreloadImage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__show_hide_password_show_hide_input__["a" /* ShowHideInput */],
                __WEBPACK_IMPORTED_MODULE_1__show_hide_password_show_hide_container__["a" /* ShowHideContainer */],
                __WEBPACK_IMPORTED_MODULE_3__background_image_background_image__["a" /* BackgroundImage */],
                __WEBPACK_IMPORTED_MODULE_4__preload_image_preload_image__["a" /* PreloadImage */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SegundaViaBoletoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_util_helper__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SegundaViaBoletoService = /** @class */ (function () {
    function SegundaViaBoletoService(http) {
        this.http = http;
        this.utilHelper = new __WEBPACK_IMPORTED_MODULE_2__helpers_util_helper__["a" /* UtilHelper */]();
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* isDevMode */])()) {
            this.apiUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrlBeneficiarioDev;
        }
        else {
            this.apiUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrlBeneficiarioProd;
        }
    }
    SegundaViaBoletoService.prototype.buscarListaBoletosEmAberto = function (handleTitular) {
        return this.http.get(this.apiUrl + 'busca-boletos-aberto/' + handleTitular, { headers: this.utilHelper.montarHeaders() });
    };
    SegundaViaBoletoService.prototype.enviarBoletoEmail = function (numTitulo, email) {
        return this.http.get(this.apiUrl + 'envio-segunda-via-boleto?numtit=' + numTitulo + '&&emailBeneficiario=' + email, { headers: this.utilHelper.montarHeaders() });
    };
    /**
     * Metodo utilizado para buscar o extrato cabesp de determinado boleto reciprocidade
     *
     * @author Anderson Friaca
     * @since 17/08/2017
     * @param {string} numeroTitulo
     * @returns {Observable<ExtratoCabesp[]>}
     */
    SegundaViaBoletoService.prototype.buscarExtratoCabesp = function (numeroTitulo) {
        return this.http.get(this.apiUrl + 'extrato-reciprocidade?numRlc=' + numeroTitulo);
    };
    SegundaViaBoletoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], SegundaViaBoletoService);
    return SegundaViaBoletoService;
}());

//# sourceMappingURL=segunda-via-boleto.service.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeneficiarioCadastroBennerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeneficiarioCadastroBennerService = /** @class */ (function () {
    function BeneficiarioCadastroBennerService(http) {
        this.http = http;
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* isDevMode */])()) {
            this.apiUrlPortalBeneficiario = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrlPortalBeneficiarioDev;
        }
        else {
            this.apiUrlPortalBeneficiario = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrlPortalBeneficiarioProd;
        }
    }
    /**
     * Metodo utilizado para atualizar um determinado endereco
     *
     * @author Anderson Friaca
     * @param idEndereco
     * @param dtoSamEndereco
     */
    BeneficiarioCadastroBennerService.prototype.atualizarEndereco = function (idEndereco, dtoSamEndereco) {
        return this.http.put(this.apiUrlPortalBeneficiario + "RpBennerBeneficiarioCadastro/atualizar_endereco/" + idEndereco, {
            logradouro: dtoSamEndereco.logradouro,
            numero: dtoSamEndereco.numero,
            complemento: dtoSamEndereco.complemento,
            bairro: dtoSamEndereco.bairro,
            cep: dtoSamEndereco.cep,
            idTipoLogradouro: dtoSamEndereco.tipoLogradouro,
            idMunicipio: dtoSamEndereco.municipio,
            idEstado: dtoSamEndereco.estado,
            telefone: dtoSamEndereco.telefone1,
            celular: dtoSamEndereco.celular
        });
    };
    /**
     * Metodo utilizado para atualizar o contato de um determinado beneficiario
     *
     * @author Anderson Friaca
     * @param idBeneficiario
     * @param ddd
     * @param celular
     * @param email
     */
    BeneficiarioCadastroBennerService.prototype.atualizarContato = function (idBeneficiario, ddd, celular, email) {
        return this.http.put(this.apiUrlPortalBeneficiario + "RpBennerBeneficiarioCadastro/atualizar_contato/" + idBeneficiario, {
            ddd: ddd,
            celular: celular,
            email: email
        });
    };
    BeneficiarioCadastroBennerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BeneficiarioCadastroBennerService);
    return BeneficiarioCadastroBennerService;
}());

//# sourceMappingURL=beneficiario-cadastro-benner.service.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NegociacaoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NegociacaoService = /** @class */ (function () {
    function NegociacaoService(http) {
        this.http = http;
        this.urlRpConsultaNegociacao = "RpConsultaStatusAutorizacao/lista_negociar?handleAutorizacao=";
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* isDevMode */])()) {
            this.apiUrlPortalNegociacao = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrlPortalBeneficiarioDev;
        }
        else {
            this.apiUrlPortalNegociacao = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrlPortalBeneficiarioProd;
        }
    }
    NegociacaoService.prototype.buscarNegociacoes = function (autorizacaoId) {
        return this.http.get(this.apiUrlPortalNegociacao + this.urlRpConsultaNegociacao + autorizacaoId, {});
    };
    NegociacaoService.prototype.confirmarNegociacao = function (handleNegociacao) {
        console.log(handleNegociacao);
        return this.http.get(this.apiUrlPortalNegociacao + "RpConsultaStatusAutorizacao/confirmar_negociacao?solNegociacao=" + handleNegociacao, {});
    };
    NegociacaoService.prototype.rejeitarNegociacao = function (handleNegociacao) {
        return this.http.get(this.apiUrlPortalNegociacao + "RpConsultaStatusAutorizacao/rejeitar_negociacao?solNegociacao=" + handleNegociacao, {});
    };
    NegociacaoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], NegociacaoService);
    return NegociacaoService;
}());

//# sourceMappingURL=negociacao.service.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NegociacaoItemEstaticoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NegociacaoItemEstaticoService = /** @class */ (function () {
    function NegociacaoItemEstaticoService() {
    }
    NegociacaoItemEstaticoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], NegociacaoItemEstaticoService);
    return NegociacaoItemEstaticoService;
}());

//# sourceMappingURL=negociacao-item-estatico.service.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipoPrestadorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_util_helper__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TipoPrestadorService = /** @class */ (function () {
    function TipoPrestadorService(http) {
        this.http = http;
        this.utilHelper = new __WEBPACK_IMPORTED_MODULE_2__helpers_util_helper__["a" /* UtilHelper */]();
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* isDevMode */])()) {
            this.apiUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrlBeneficiarioDev;
        }
        else {
            this.apiUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrlBeneficiarioProd;
        }
    }
    TipoPrestadorService.prototype.buscarListaTipoPrestadores = function () {
        return this.http.get(this.apiUrl + 'busca-categoria', { headers: this.utilHelper.montarHeaders() });
    };
    TipoPrestadorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], TipoPrestadorService);
    return TipoPrestadorService;
}());

//# sourceMappingURL=tipo-prestador.service.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EspecialidadeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_util_helper__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EspecialidadeService = /** @class */ (function () {
    function EspecialidadeService(http) {
        this.http = http;
        this.utilHelper = new __WEBPACK_IMPORTED_MODULE_2__helpers_util_helper__["a" /* UtilHelper */]();
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* isDevMode */])()) {
            this.apiUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrlBeneficiarioDev;
        }
        else {
            this.apiUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrlBeneficiarioProd;
        }
    }
    EspecialidadeService.prototype.buscarListaEspecialidades = function () {
        return this.http.get(this.apiUrl + 'busca-especialidade', { headers: this.utilHelper.montarHeaders() });
    };
    EspecialidadeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], EspecialidadeService);
    return EspecialidadeService;
}());

//# sourceMappingURL=especialidade.service.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MunicipioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_util_helper__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MunicipioService = /** @class */ (function () {
    function MunicipioService(http) {
        this.http = http;
        this.utilHelper = new __WEBPACK_IMPORTED_MODULE_2__helpers_util_helper__["a" /* UtilHelper */]();
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* isDevMode */])()) {
            this.apiUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrlBeneficiarioDev;
        }
        else {
            this.apiUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrlBeneficiarioProd;
        }
    }
    MunicipioService.prototype.buscarListaMunicipios = function () {
        return this.http.get(this.apiUrl + 'busca-municipio', { headers: this.utilHelper.montarHeaders() });
    };
    MunicipioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], MunicipioService);
    return MunicipioService;
}());

//# sourceMappingURL=municipio.service.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrestadorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_util_helper__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PrestadorService = /** @class */ (function () {
    function PrestadorService(http) {
        this.http = http;
        this.utilHelper = new __WEBPACK_IMPORTED_MODULE_2__helpers_util_helper__["a" /* UtilHelper */]();
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* isDevMode */])()) {
            this.apiUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrlBeneficiarioDev;
        }
        else {
            this.apiUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrlBeneficiarioProd;
        }
    }
    PrestadorService.prototype.buscarPrestador = function (nomePrestador, codMunicipio, codCategoria, codEspecialidade) {
        if (nomePrestador === void 0) { nomePrestador = ''; }
        if (codMunicipio === void 0) { codMunicipio = null; }
        if (codCategoria === void 0) { codCategoria = null; }
        if (codEspecialidade === void 0) { codEspecialidade = null; }
        var query = this.montarQueryBuscarPrestador(nomePrestador, codMunicipio, codCategoria, codEspecialidade);
        return this.http.get(this.apiUrl + 'busca-prestador' + query, { headers: this.utilHelper.montarHeaders([]) });
    };
    PrestadorService.prototype.buscarEspecialidadesPrestador = function (codCredenciado) {
        return this.http.get(this.apiUrl + 'busca-espec-prestador/' + codCredenciado, { headers: this.utilHelper.montarHeaders([]) });
    };
    PrestadorService.prototype.montarQueryBuscarPrestador = function (nomePrestador, codMunicipio, codCategoria, codEspecialidade) {
        if (nomePrestador === void 0) { nomePrestador = ''; }
        if (codMunicipio === void 0) { codMunicipio = null; }
        if (codCategoria === void 0) { codCategoria = null; }
        if (codEspecialidade === void 0) { codEspecialidade = null; }
        var query = '?';
        if (nomePrestador != '') {
            query = query.concat('nome=' + nomePrestador);
        }
        if (codMunicipio != null) {
            query = query.concat('&&codMunicipio=');
            query = query.concat(codMunicipio.toString());
        }
        if (codCategoria != null) {
            query = query.concat('&&codCategoria=');
            query = query.concat(codCategoria.toString());
        }
        if (codEspecialidade != null) {
            query = query.concat('&&codEspecialidade=');
            query = query.concat(codEspecialidade.toString());
        }
        return query;
    };
    PrestadorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], PrestadorService);
    return PrestadorService;
}());

//# sourceMappingURL=prestador.service.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizeAllPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizeAllPipe = /** @class */ (function () {
    function CapitalizeAllPipe() {
    }
    CapitalizeAllPipe.prototype.transform = function (valor) {
        if (valor != '' && valor != null) {
            return valor.toLowerCase().split(' ').map(function (s) { return s.charAt(0).toUpperCase() + s.slice(1); }).join(' ');
        }
        else {
            return valor;
        }
    };
    CapitalizeAllPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'capitalizeAll'
        })
    ], CapitalizeAllPipe);
    return CapitalizeAllPipe;
}());

//# sourceMappingURL=capitalize-all.pipe.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnderecoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EnderecoService = /** @class */ (function () {
    function EnderecoService(http) {
        this.http = http;
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* isDevMode */])()) {
            this.apiUrlPortalBeneficiario = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrlPortalBeneficiarioDev;
        }
        else {
            this.apiUrlPortalBeneficiario = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrlPortalBeneficiarioProd;
        }
    }
    /**
     * Metodo utilizado para buscar um endereco atraves do cep
     *
     * @author Anderson Friaca
     * @param {string} cep
     * @return {Observable<DtoLogradouro>}
     */
    EnderecoService.prototype.buscarCep = function (cep) {
        return this.http.get(this.apiUrlPortalBeneficiario + "RpBennerEndereco/cep/" + cep);
    };
    EnderecoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], EnderecoService);
    return EnderecoService;
}());

//# sourceMappingURL=endereco.service.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemonstrativoPagamentoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_util_helper__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DemonstrativoPagamentoService = /** @class */ (function () {
    function DemonstrativoPagamentoService(http) {
        this.http = http;
        this.utilHelper = new __WEBPACK_IMPORTED_MODULE_2__helpers_util_helper__["a" /* UtilHelper */]();
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* isDevMode */])()) {
            this.apiUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrlBeneficiarioDev;
        }
        else {
            this.apiUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrlBeneficiarioProd;
        }
    }
    DemonstrativoPagamentoService.prototype.buscarDemonstrativoPagamento = function (cpf, ano) {
        return this.http.get(this.apiUrl + 'demonstrativo-pagamento/' + cpf + ',' + ano, { headers: this.utilHelper.montarHeaders() });
    };
    DemonstrativoPagamentoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], DemonstrativoPagamentoService);
    return DemonstrativoPagamentoService;
}());

//# sourceMappingURL=demonstrativo-pagamento.service.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(7);

var UtilHelper = /** @class */ (function () {
    function UtilHelper() {
    }
    UtilHelper.prototype.montarHeaders = function (array) {
        if (array === void 0) { array = []; }
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        if (array.length > 0) {
            array.forEach(function (obj) {
                Object.keys(obj).forEach(function (index) {
                    headers.append(index, obj[index]);
                });
            });
        }
        return headers;
    };
    UtilHelper.prototype.calcularIdade = function (data) {
        if (data != '') {
            var dataNascimento = new Date(data.toString().replace(/-/g, '\/'));
            var dataAtual = new Date();
            var idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
            if ((dataAtual.getMonth() + 1) < (dataNascimento.getMonth() + 1)) {
                idade--;
            }
            if ((dataAtual.getMonth() + 1) == (dataNascimento.getMonth() + 1)) {
                if (dataAtual.getDate() < dataNascimento.getDate()) {
                    idade--;
                }
            }
            return idade;
        }
        return null;
    };
    return UtilHelper;
}());

//# sourceMappingURL=util.helper.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutorizacaoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AutorizacaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AutorizacaoProvider = /** @class */ (function () {
    function AutorizacaoProvider(http) {
        this.http = http;
        this.urlRpConsultaAutorizacao = "RpConsultaStatusAutorizacao/lista?handleBeneficiario=";
        if (Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* isDevMode */])()) {
            this.apiUrlPortalBeneficiario = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrlPortalBeneficiarioDev;
        }
        else {
            this.apiUrlPortalBeneficiario = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrlPortalBeneficiarioProd;
        }
    }
    AutorizacaoProvider.prototype.buscarAutoriazacao = function (handleTitular) {
        return this.http.get("" + this.apiUrlPortalBeneficiario + this.urlRpConsultaAutorizacao + handleTitular);
    };
    AutorizacaoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AutorizacaoProvider);
    return AutorizacaoProvider;
}());

//# sourceMappingURL=autorizacao.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CondicaoPagamentoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CondicaoPagamentoService = /** @class */ (function () {
    function CondicaoPagamentoService(http) {
        this.http = http;
        this.urlRpConsultaCondicaoPagamento = "RpConsultaStatusAutorizacao/condicoes_pagamento?tipoTitulo=";
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* isDevMode */])()) {
            this.apiUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrlPortalBeneficiarioDev;
        }
        else {
            this.apiUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrlPortalBeneficiarioProd;
        }
    }
    // se avista = 1 ---> não precisa de entrada nem parcelas
    CondicaoPagamentoService.prototype.buscarCondicaoPagamento = function (sniTipoTitulo) {
        return this.http.get(this.apiUrl + this.urlRpConsultaCondicaoPagamento + sniTipoTitulo, {});
    };
    CondicaoPagamentoService.prototype.confirmarCondicaoNegociacao = function (itemSolNegociacao, condPagamento, valorEntrada, valorParcelas, qtdParcelas) {
        return this.http.get(this.apiUrl + "RpConsultaStatusAutorizacao/confirmar_condicao_pagamento_ajax?itemSolNegociacao=" + itemSolNegociacao
            + "&condPagamento=" + condPagamento
            + "&valorEntrada=" + valorEntrada
            + "&valorParcelas=" + valorParcelas
            + "&qtdParcelas=" + qtdParcelas, {});
    };
    CondicaoPagamentoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CondicaoPagamentoService);
    return CondicaoPagamentoService;
}());

//# sourceMappingURL=condicoes-pagamento.service.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalAtendimentoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_util_helper__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocalAtendimentoService = /** @class */ (function () {
    function LocalAtendimentoService(http) {
        this.http = http;
        this.chaveGeocoder = 'AIzaSyCjn7LBjBjmVqlYcZgiYXhjLARMRrhiIuE';
        this.utilHelper = new __WEBPACK_IMPORTED_MODULE_2__helpers_util_helper__["a" /* UtilHelper */]();
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* isDevMode */])()) {
            this.apiUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrlBeneficiarioDev;
        }
        else {
            this.apiUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrlBeneficiarioProd;
        }
    }
    LocalAtendimentoService.prototype.buscarLocaisAtendimento = function (codCredenciado) {
        return this.http.get(this.apiUrl + 'busca-local-prestador/' + codCredenciado, { headers: this.utilHelper.montarHeaders([]) });
    };
    LocalAtendimentoService.prototype.buscarGeoLocation = function (endereco) {
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + endereco + '&key=' + this.chaveGeocoder);
    };
    LocalAtendimentoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], LocalAtendimentoService);
    return LocalAtendimentoService;
}());

//# sourceMappingURL=local-atendimento.service.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UtilService = /** @class */ (function () {
    function UtilService(http) {
        this.http = http;
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* isDevMode */])()) {
            this.apiUrlBeneficiario = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrlBeneficiarioDev;
        }
        else {
            this.apiUrlBeneficiario = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrlBeneficiarioProd;
        }
    }
    /**
     * Metodo utilizado para buscar os dados do cep
     *
     * @author Anderson Friaca
     * @param cep
     * @returns {Observable<UtilBuscaCep[]>}
     */
    UtilService.prototype.buscarCep = function (cep) {
        return this.http.get(this.apiUrlBeneficiario + 'busca-cep/' + cep);
    };
    UtilService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], UtilService);
    return UtilService;
}());

//# sourceMappingURL=util.service.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(258);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_usuario_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_municipio_service__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_especialidade_service__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_tipo_prestador_service__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__helpers_toast_helper__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__helpers_ios_helper__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_extrato_beneficiario_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_agendamento_service__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_demonstrativo_pagamento_service__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_local_atendimento_service__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_prestador_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_revalidacao_service__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_segunda_via_boleto_service__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_util_service__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_home_home_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_launch_navigator__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_call_number__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_clipboard__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_toast__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_facebook__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_common_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_beneficiario_cadastro_service__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_storage_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_endereco_service__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_header_color__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_beneficiario_benner_beneficiario_benner_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_beneficiario_cadastro_benner_beneficiario_cadastro_benner_service__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_in_app_browser__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_autorizacao_autorizacao__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_negociacao_service__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_condicoes_pagamento_service__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_negociacao_item_estatico_service__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            exports: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_21__pages_home_home_module__["HomeModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    platforms: {
                        ios: {
                            backButtonText: ''
                        }
                    }
                }, {
                    links: [
                        { loadChildren: '../pages/agendamento/agendamento/agendamento.module#AgendamentoModule', name: 'AgendamentoPage', segment: 'agendamento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/agendamento/buscar-prestador-agendamento/buscar-prestador-agendamento.module#BuscarPrestadorAgendamentoModule', name: 'BuscarPrestadorAgendamentoPage', segment: 'buscar-prestador-agendamento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/agendamento/cancelar-agendamento/cancelar-agendamento.module#AgendamentoModule', name: 'CancelarAgendamentoPage', segment: 'cancelar-agendamento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/agendamento/confirmar-agendamento/confirmar-agendamento.module#ConfirmarAgendamentoModule', name: 'ConfirmarAgendamentoPage', segment: 'confirmar-agendamento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/agendamento/filtros-busca-agendamento-centro-medico/filtros-busca-agendamento-centro-medico.module#FiltrosBuscaAgendamentoCentroMedicoModule', name: 'FiltrosBuscaAgendamentoCentroMedicoPage', segment: 'filtros-busca-agendamento-centro-medico', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/agendamento/filtros-busca-agendamento-especialidade/filtros-busca-agendamento-especialidade.module#FiltrosBuscaAgendamentoEspecialidadeModule', name: 'FiltrosBuscaAgendamentoEspecialidadePage', segment: 'filtros-busca-agendamento-especialidade', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/agendamento/filtros-busca-agendamento-prestador/filtros-busca-agendamento-prestador.module#FiltrosBuscaAgendamentoPrestadorModule', name: 'FiltrosBuscaAgendamentoPrestadorPage', segment: 'filtros-busca-agendamento-prestador', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/agendamento/tipo-agendamento/tipo-agendamento.module#TipoAgendamentoModule', name: 'TipoAgendamentoPage', segment: 'tipo-agendamento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/agendamento/meus-agendamentos/meus-agendamentos.module#MeusAgendamentosModule', name: 'MeusAgendamentosPage', segment: 'meus-agendamentos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro/atualizar-contato/atualizar-contato.module#AtualizarContatoModule', name: 'AtualizarContatoPage', segment: 'atualizar-contato', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/beneficiario/beneficiario.module#BeneficiarioModule', name: 'BeneficiarioPage', segment: 'beneficiario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro/atualizar-endereco/atualizar-endereco.module#AtualizarEnderecoModule', name: 'AtualizarEnderecoPage', segment: 'atualizar-endereco', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalhe-fatura-negocicao/detalhe-fatura-negocicao.module#DetalheFaturaNegocicaoPageModule', name: 'DetalheFaturaNegocicaoPage', segment: 'detalhe-fatura-negocicao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/demonstrativo-pagamento/buscar-demonstrativo-pagamento/buscar-demonstrativo-pagamento.module#BuscarDemonstrativoPagamentoModule', name: 'BuscarDemonstrativoPagamentoPage', segment: 'buscar-demonstrativo-pagamento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalhes-autorizacao/detalhes-autorizacao.module#DetalhesAutorizacaoPageModule', name: 'DetalhesAutorizacaoPage', segment: 'detalhes-autorizacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/extrato-beneficiario/dependente/buscar-extrato-beneficiario-dependente/buscar-extrato-beneficiario-dependente.module#BuscarExtratoBeneficiarioDependenteModule', name: 'BuscarExtratoBeneficiarioDependentePage', segment: 'buscar-extrato-beneficiario-dependente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/extrato-beneficiario/extrato-beneficiario/extrato-beneficiario.module#ExtratoBeneficiarioModule', name: 'ExtratoBeneficiarioPage', segment: 'extrato-beneficiario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/extrato-beneficiario/titular/buscar-extrato-beneficiario-titular/buscar-extrato-beneficiario-titular.module#BuscarExtratoBeneficiarioTitularModule', name: 'BuscarExtratoBeneficiarioTitularPage', segment: 'buscar-extrato-beneficiario-titular', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/extrato-beneficiario/lista-extrato-beneficiario/lista-extrato-beneficiario.module#ListaExtratoBeneficiarioModule', name: 'ListaExtratoBeneficiarioPage', segment: 'lista-extrato-beneficiario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/demonstrativo-pagamento/demonstrativo-pagamento/demonstrativo-pagamento.module#DemonstrativoPagamentoModule', name: 'DemonstrativoPagamentoPage', segment: 'demonstrativo-pagamento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/grupo-familiar/titular/grupo-familiar-titular/grupo-familiar-titular.module#GrupoFamiliarTitularModule', name: 'GrupoFamiliarTitularPage', segment: 'grupo-familiar-titular', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomeModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listagem-autorizacao/listagem-autorizacao.module#ListagemAutorizacaoPageModule', name: 'ListagemAutorizacaoPage', segment: 'listagem-autorizacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listagem-faturas-negociacao/listagem-faturas-negociacao.module#ListagemFaturasNegociacaoPageModule', name: 'ListagemFaturasNegociacaoPage', segment: 'listagem-faturas-negociacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/grupo-familiar/dependente/grupo-familiar-dependente/grupo-familiar-dependente.module#GrupoFamiliarDependenteModule', name: 'GrupoFamiliarDependentePage', segment: 'grupo-familiar-dependente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listagem-negociacao/listagem-negociacao.module#ListagemNegociacaoPageModule', name: 'ListagemNegociacaoPage', segment: 'listagem-negociacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pre-home-redes-sociais/pre-home-redes-sociais.module#HomeModule', name: 'PreHomeRedesSociaisPage', segment: 'pre-home-redes-sociais', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/prestador/busca-prestador/busca-prestador.module#BuscaPrestadorModule', name: 'BuscaPrestadorPage', segment: 'busca-prestador', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/negociacao/negociacao.module#NegociacaoPageModule', name: 'NegociacaoPage', segment: 'negociacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/revalidacao/dependente/questionario-revalidacao-dependente/questionario-revalidacao-dependente.module#QuestionarioRevalidacaoDependenteModule', name: 'QuestionarioRevalidacaoDependentePage', segment: 'questionario-revalidacao-dependente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/prestador/busca-prestador-lista/busca-prestador-lista.module#BuscaPrestadorListaModule', name: 'BuscaPrestadorListaPage', segment: 'busca-prestador-lista', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/prestador/prestador/prestador.module#PrestadorModule', name: 'PrestadorPage', segment: 'prestador', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/revalidacao/lista-grupo-familiar-revalidacao/lista-grupo-familiar-revalidacao.module#ListaGrupoFamiliarRevalidacaoModule', name: 'ListaGrupoFamiliarRevalidacaoPage', segment: 'lista-grupo-familiar-revalidacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/revalidacao/revalidacao-atualizar-endereco/revalidacao-atualizar-endereco.module#RevalidacaoAtualizarEnderecoModule', name: 'RevalidacaoAtualizarEnderecoPage', segment: 'revalidacao-atualizar-endereco', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/segunda-via-boleto/segunda-via-boleto/segunda-via-boleto.module#SegundaViaBoletoModule', name: 'SegundaViaBoletoPage', segment: 'segunda-via-boleto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/revalidacao/termo-convocado/termo-convocado.module#TermoConvocadoModule', name: 'TermoConvocadoPage', segment: 'termo-convocado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/segunda-via-boleto/extrato-cabesp-boleto/extrato-cabesp-boleto.module#ExtratoCabespBoletoModule', name: 'ExtratoCabespBoletoPage', segment: 'extrato-cabesp-boleto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/segunda-via-boleto/lista-segunda-via-boleto/lista-segunda-via-boleto.module#ListaSegundaViaBoletoModule', name: 'ListaSegundaViaBoletoPage', segment: 'lista-segunda-via-boleto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/usuario/alterar-senha-usuario/alterar-senha-usuario.module#AlterarSenhaUsuarioModule', name: 'AlterarSenhaUsuarioPage', segment: 'alterar-senha-usuario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/usuario/modal-termos-e-condicoes/modal-termos-e-condicoes.module#ModalTermosECondicoesModule', name: 'ModalTermosECondicoesPage', segment: 'modal-termos-e-condicoes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/usuario/cadastrar-usuario/cadastrar-usuario.module#CadastrarUsuarioModule', name: 'CadastrarUsuarioPage', segment: 'cadastrar-usuario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/usuario/codigo-ativacao-usuario/codigo-ativacao-usuario.module#CodigoAtivacaoUsuarioModule', name: 'CodigoAtivacaoUsuarioPage', segment: 'codigo-ativacao-usuario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/usuario/perfil/perfil.module#PerfilModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/usuario/redefinir-senha-usuario/redefinir-senha-usuario.module#RedefinirSenhaUsuarioModule', name: 'RedefinirSenhaUsuarioPage', segment: 'redefinir-senha-usuario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/agendamento/escolher-data-agendamento/escolher-data-agendamento.module#EscolherDataAgendamentoModule', name: 'EscolherDataAgendamentoPage', segment: 'escolher-data-agendamento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/usuario/login/login.module#LoginModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__cassems_beneficiario-1.1.0',
                    driverOrder: ['sqlite', 'websql', 'indexeddb']
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_clipboard__["a" /* Clipboard */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__providers_agendamento_service__["a" /* AgendamentoService */],
                __WEBPACK_IMPORTED_MODULE_32__providers_beneficiario_benner_beneficiario_benner_service__["a" /* BeneficiarioBennerService */],
                __WEBPACK_IMPORTED_MODULE_28__providers_beneficiario_cadastro_service__["a" /* BeneficiarioCadastroService */],
                __WEBPACK_IMPORTED_MODULE_33__providers_beneficiario_cadastro_benner_beneficiario_cadastro_benner_service__["a" /* BeneficiarioCadastroBennerService */],
                __WEBPACK_IMPORTED_MODULE_15__providers_demonstrativo_pagamento_service__["a" /* DemonstrativoPagamentoService */],
                __WEBPACK_IMPORTED_MODULE_9__providers_especialidade_service__["a" /* EspecialidadeService */],
                __WEBPACK_IMPORTED_MODULE_30__providers_endereco_service__["a" /* EnderecoService */],
                __WEBPACK_IMPORTED_MODULE_13__providers_extrato_beneficiario_service__["a" /* ExtratoBeneficiarioService */],
                __WEBPACK_IMPORTED_MODULE_16__providers_local_atendimento_service__["a" /* LocalAtendimentoService */],
                __WEBPACK_IMPORTED_MODULE_8__providers_municipio_service__["a" /* MunicipioService */],
                __WEBPACK_IMPORTED_MODULE_17__providers_prestador_service__["a" /* PrestadorService */],
                __WEBPACK_IMPORTED_MODULE_18__providers_revalidacao_service__["a" /* RevalidacaoService */],
                __WEBPACK_IMPORTED_MODULE_19__providers_segunda_via_boleto_service__["a" /* SegundaViaBoletoService */],
                __WEBPACK_IMPORTED_MODULE_10__providers_tipo_prestador_service__["a" /* TipoPrestadorService */],
                __WEBPACK_IMPORTED_MODULE_6__providers_usuario_service__["a" /* UsuarioService */],
                __WEBPACK_IMPORTED_MODULE_20__providers_util_service__["a" /* UtilService */],
                __WEBPACK_IMPORTED_MODULE_11__helpers_toast_helper__["a" /* ToastHelper */],
                __WEBPACK_IMPORTED_MODULE_12__helpers_ios_helper__["a" /* IosHelper */],
                __WEBPACK_IMPORTED_MODULE_29__providers_storage_service__["a" /* StorageService */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_header_color__["a" /* HeaderColor */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_35__providers_autorizacao_autorizacao__["a" /* AutorizacaoProvider */],
                __WEBPACK_IMPORTED_MODULE_36__providers_negociacao_service__["a" /* NegociacaoService */],
                __WEBPACK_IMPORTED_MODULE_37__providers_condicoes_pagamento_service__["a" /* CondicaoPagamentoService */],
                __WEBPACK_IMPORTED_MODULE_38__providers_negociacao_item_estatico_service__["a" /* NegociacaoItemEstaticoService */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatriculaCassemsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MatriculaCassemsPipe = /** @class */ (function () {
    function MatriculaCassemsPipe() {
    }
    MatriculaCassemsPipe.prototype.transform = function (valor) {
        if (valor !== '' && valor !== null && valor !== undefined) {
            var valorFinal = '';
            if (valor.length === 11) {
                valorFinal = valor.substring(0, 7) + '-';
                valorFinal += valor.substring(7, 8) + '.';
                valorFinal += valor.substring(8, 10) + '-';
                valorFinal += valor.substring(10, 11);
                return valorFinal;
            }
            else {
                if (valor.length === 12) {
                    //XXX.XXXXXXX.XX
                    valorFinal = valor.substring(0, 3) + '.';
                    valorFinal += valor.substring(3, 10) + '.';
                    valorFinal += valor.substring(10, 12) + '.';
                    return valorFinal;
                }
                else {
                    if (valor.length === 16) {
                        //XXX.XXXXXXX.XX.XX.XX
                        valorFinal = valor.substring(0, 3) + '.';
                        valorFinal += valor.substring(3, 10) + '.';
                        valorFinal += valor.substring(10, 12) + '.';
                        valorFinal += valor.substring(12, 14) + '.';
                        valorFinal += valor.substring(14, 16);
                        return valorFinal;
                    }
                }
            }
        }
        return valor;
    };
    MatriculaCassemsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'matriculaCassems'
        })
    ], MatriculaCassemsPipe);
    return MatriculaCassemsPipe;
}());

//# sourceMappingURL=matricula-cassems.pipe.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CepPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CepPipe = /** @class */ (function () {
    function CepPipe() {
    }
    CepPipe.prototype.transform = function (value) {
        if (value) {
            value = value.toString().replace(/\D/g, '');
            return value.substr(0, 5) + '-' + value.substr(5, 3);
        }
        else {
            return '';
        }
    };
    CepPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'cep'
        })
    ], CepPipe);
    return CepPipe;
}());

//# sourceMappingURL=cep.pipe.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CpfPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CpfPipe = /** @class */ (function () {
    function CpfPipe() {
    }
    CpfPipe.prototype.transform = function (valor) {
        if (valor) {
            if (valor.length <= 14) {
                valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
                valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
                valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
            }
        }
        return valor;
    };
    CpfPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'cpf'
        })
    ], CpfPipe);
    return CpfPipe;
}());

//# sourceMappingURL=cpf.pipe.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CnpjPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CnpjPipe = /** @class */ (function () {
    function CnpjPipe() {
    }
    CnpjPipe.prototype.transform = function (valor) {
        if (valor) {
            if (valor.length <= 14) {
                valor = valor.replace(/^(\d{2})(\d)/, "$1.$2");
                valor = valor.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
                valor = valor.replace(/\.(\d{3})(\d)/, ".$1/$2");
                valor = valor.replace(/(\d{4})(\d)/, "$1-$2");
            }
        }
        return valor;
    };
    CnpjPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'cnpj'
        })
    ], CnpjPipe);
    return CnpjPipe;
}());

//# sourceMappingURL=cnpj.pipe.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysEnumPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysEnumPipe = /** @class */ (function () {
    function KeysEnumPipe() {
    }
    KeysEnumPipe.prototype.transform = function (lista) {
        var keys = [];
        Object.keys(lista).forEach(function (value) {
            if (!isNaN(parseInt(value, 10))) {
                keys.push({ key: lista[value], value: value });
            }
        });
        return keys;
    };
    KeysEnumPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'keysEnum'
        })
    ], KeysEnumPipe);
    return KeysEnumPipe;
}());

//# sourceMappingURL=keys-enum.pipe.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonetarioBrasilPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MonetarioBrasilPipe = /** @class */ (function () {
    function MonetarioBrasilPipe() {
    }
    MonetarioBrasilPipe.prototype.transform = function (value) {
        var currencySign = 'R$ ';
        var decimalLength = 2;
        var chunkDelimiter = '.';
        var decimalDelimiter = ',';
        var chunkLength = 3;
        var result = '\\d(?=(\\d{' + chunkLength + '})+' + (decimalLength > 0 ? '\\D' : '$') + ')';
        var num = Number(value).toFixed(Math.max(0, ~~decimalLength));
        return currencySign + (decimalDelimiter ? num.replace('.', decimalDelimiter) : num).replace(new RegExp(result, 'g'), '$&' + chunkDelimiter);
    };
    MonetarioBrasilPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'monetarioBrasil'
        })
    ], MonetarioBrasilPipe);
    return MonetarioBrasilPipe;
}());

//# sourceMappingURL=monetario-brasil.pipe.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MesBrasilPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MesBrasilPipe = /** @class */ (function () {
    function MesBrasilPipe() {
    }
    MesBrasilPipe.prototype.transform = function (value) {
        switch (value) {
            case 0:
                return 'Janeiro';
            case 1:
                return 'Fevereiro';
            case 2:
                return 'Março';
            case 3:
                return 'Abril';
            case 4:
                return 'Maio';
            case 5:
                return 'Junho';
            case 6:
                return 'Julho';
            case 7:
                return 'Agosto';
            case 8:
                return 'Setembro';
            case 9:
                return 'Outubro';
            case 10:
                return 'Novembro';
            case 11:
                return 'Dezembro';
        }
    };
    MesBrasilPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'mesBrasil'
        })
    ], MesBrasilPipe);
    return MesBrasilPipe;
}());

//# sourceMappingURL=mes-brasil.pipe.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysJsonPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysJsonPipe = /** @class */ (function () {
    function KeysJsonPipe() {
    }
    KeysJsonPipe.prototype.transform = function (lista) {
        var keys = [];
        Object.keys(lista).forEach(function (value) {
            keys.push({ key: value, value: lista[value] });
        });
        return keys;
    };
    KeysJsonPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'keysJson'
        })
    ], KeysJsonPipe);
    return KeysJsonPipe;
}());

//# sourceMappingURL=keys-json.pipe.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TelefonePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TelefonePipe = /** @class */ (function () {
    function TelefonePipe() {
    }
    TelefonePipe.prototype.transform = function (valor) {
        if (valor !== null && valor !== '') {
            var valorString = valor.toString().replace(/\D/g, '');
            if (valorString.length === 8 || valorString.length === 9) {
                return valorString.replace(/^(\d{4,5})(\d{4})$/, '$1-$2');
            }
            if (valorString.length === 10 || valorString.length === 11) {
                return valorString.replace(/^(\d{2})(\d{4,5})(\d{4})$/, '($1) $2-$3');
            }
            if (valorString.length === 12 || valorString.length === 13) {
                return valorString.replace(/^(\d{2})(\d{2})(\d{4,5})(\d{4})$/, '+$1 ($2) $3-$4');
            }
            return valorString;
        }
        return valor;
    };
    TelefonePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'telefone'
        })
    ], TelefonePipe);
    return TelefonePipe;
}());

//# sourceMappingURL=telefone.pipe.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageKeys; });
var StorageKeys = /** @class */ (function () {
    function StorageKeys() {
    }
    StorageKeys.getKeyBeneficiario = function () {
        return 'beneficiario';
    };
    StorageKeys.getKeyGrupoFamiliar = function () {
        return 'grupo-familiar';
    };
    StorageKeys.getKeyUsuario = function () {
        return 'usuario';
    };
    StorageKeys.getKeyListaTipoPrestadores = function () {
        return 'lista-tipo-prestadores';
    };
    StorageKeys.getKeyListaEspecialidades = function () {
        return 'lista-especialidades';
    };
    StorageKeys.getKeyListaMunicipios = function () {
        return 'lista-municipios';
    };
    return StorageKeys;
}());

//# sourceMappingURL=storage-keys.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowHideContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__show_hide_input__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowHideContainer = /** @class */ (function () {
    function ShowHideContainer() {
        this.show = false;
    }
    ShowHideContainer.prototype.toggleShow = function () {
        this.show = !this.show;
        if (this.show) {
            this.input.changeType("text");
        }
        else {
            this.input.changeType("password");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_1__show_hide_input__["a" /* ShowHideInput */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__show_hide_input__["a" /* ShowHideInput */])
    ], ShowHideContainer.prototype, "input", void 0);
    ShowHideContainer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'show-hide-container',template:/*ion-inline-start:"D:\Filipe\Projetos Android\cassems-beneficiario\src\components\show-hide-password\show-hide-password.html"*/'<ng-content></ng-content>\n\n<a class="type-toggle" (click)="toggleShow()">\n\n	<ion-icon class="show-option" [hidden]="show" name="eye"></ion-icon>\n\n	<ion-icon class="hide-option" [hidden]="!show" name="eye-off"></ion-icon>\n\n</a>\n\n'/*ion-inline-end:"D:\Filipe\Projetos Android\cassems-beneficiario\src\components\show-hide-password\show-hide-password.html"*/,
            host: {
                'class': 'show-hide-password'
            }
        }),
        __metadata("design:paramtypes", [])
    ], ShowHideContainer);
    return ShowHideContainer;
}());

//# sourceMappingURL=show-hide-container.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundImage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BackgroundImage = /** @class */ (function () {
    function BackgroundImage(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._src = '';
    }
    Object.defineProperty(BackgroundImage.prototype, "src", {
        set: function (val) {
            this._src = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["l" /* isPresent */])(val) ? val : '';
        },
        enumerable: true,
        configurable: true
    });
    BackgroundImage.prototype.ngOnChanges = function (changes) {
        this._update();
        // console.log("CHANGES background-image", this._src);
        // console.log(changes['src'].isFirstChange());
    };
    BackgroundImage.prototype._update = function () {
        var _this = this;
        var img = new Image();
        img.addEventListener('load', function () {
            _this._elementRef.nativeElement.style.backgroundImage = 'url(' + _this._src + ')';
            _this._loaded(true);
        });
        img.src = this._src;
        this._loaded(false);
    };
    BackgroundImage.prototype._loaded = function (isLoaded) {
        this._elementRef.nativeElement.classList[isLoaded ? 'add' : 'remove']('img-loaded');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], BackgroundImage.prototype, "class", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], BackgroundImage.prototype, "src", null);
    BackgroundImage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'background-image',template:/*ion-inline-start:"D:\Filipe\Projetos Android\cassems-beneficiario\src\components\background-image\background-image.html"*/'<span class="bg-overlay"></span>\n\n<ion-spinner name="bubbles"></ion-spinner>\n\n<ng-content></ng-content>\n\n'/*ion-inline-end:"D:\Filipe\Projetos Android\cassems-beneficiario\src\components\background-image\background-image.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer2 */]])
    ], BackgroundImage);
    return BackgroundImage;
}());

//# sourceMappingURL=background-image.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreloadImage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PreloadImage = /** @class */ (function () {
    function PreloadImage(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._src = '';
        this._img = new Image();
    }
    Object.defineProperty(PreloadImage.prototype, "src", {
        set: function (val) {
            this._src = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["l" /* isPresent */])(val) ? val : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PreloadImage.prototype, "ratio", {
        set: function (ratio) {
            this._ratio = ratio || null;
        },
        enumerable: true,
        configurable: true
    });
    PreloadImage.prototype.ngOnChanges = function (changes) {
        var ratio_height = (this._ratio.h / this._ratio.w * 100) + "%";
        // Conserve aspect ratio (see: http://stackoverflow.com/a/10441480/1116959)
        this._renderer.setStyle(this._elementRef.nativeElement, 'padding-bottom', ratio_height);
        this._update();
        // console.log("CHANGES preload-image", this._src);
        // console.log(changes['src'].isFirstChange());
    };
    PreloadImage.prototype._update = function () {
        var _this = this;
        if (Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["l" /* isPresent */])(this.alt)) {
            this._img.alt = this.alt;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["l" /* isPresent */])(this.title)) {
            this._img.title = this.title;
        }
        this._img.addEventListener('load', function () {
            _this._elementRef.nativeElement.appendChild(_this._img);
            _this._loaded(true);
        });
        this._img.src = this._src;
        this._loaded(false);
    };
    PreloadImage.prototype._loaded = function (isLoaded) {
        this._elementRef.nativeElement.classList[isLoaded ? 'add' : 'remove']('img-loaded');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], PreloadImage.prototype, "alt", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], PreloadImage.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PreloadImage.prototype, "src", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PreloadImage.prototype, "ratio", null);
    PreloadImage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'preload-image',template:/*ion-inline-start:"D:\Filipe\Projetos Android\cassems-beneficiario\src\components\preload-image\preload-image.html"*/'<ion-spinner name="bubbles"></ion-spinner>\n\n<ng-content></ng-content>\n\n'/*ion-inline-end:"D:\Filipe\Projetos Android\cassems-beneficiario\src\components\preload-image\preload-image.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer2 */]])
    ], PreloadImage);
    return PreloadImage;
}());

//# sourceMappingURL=preload-image.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_toast_helper__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_header_color__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_storage_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl, loadingCtrl, toastHelper, facebook, events, headerColor, storageService, inAppBrowser) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.menuCtrl = menuCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastHelper = toastHelper;
        this.facebook = facebook;
        this.events = events;
        this.headerColor = headerColor;
        this.storageService = storageService;
        this.inAppBrowser = inAppBrowser;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.paginasNaoAutenticado = [
            { title: 'Buscar Prestador', component: 'BuscaPrestadorPage', icon: 'search' },
            { title: 'Login', component: 'LoginPage', icon: 'log-in' }
        ];
        this.paginasTitular = [
            { title: 'Início', component: 'HomePage', icon: 'home' },
            { title: 'Agendamento', component: 'MeusAgendamentosPage', icon: 'calendar' },
            { title: 'Buscar Prestador', component: 'BuscaPrestadorPage', icon: 'search' },
            { title: 'Consultar Autorização', component: 'ListagemAutorizacaoPage', icon: 'clipboard' },
            { title: 'Demonstrativo Pagamento', component: 'BuscarDemonstrativoPagamentoPage', icon: 'document' },
            { title: 'Extrato Beneficiário', component: 'BuscarExtratoBeneficiarioTitularPage', icon: 'paper' },
            { title: 'Grupo Familiar', component: 'GrupoFamiliarTitularPage', icon: 'people' },
            { title: 'Segunda Via Boleto', component: 'ListaSegundaViaBoletoPage', icon: 'barcode' },
            { title: 'Perfil', component: 'PerfilPage', icon: 'person' }
        ];
        this.paginasDependente = [
            { title: 'Início', component: 'HomePage', icon: 'home' },
            { title: 'Agendamento', component: 'MeusAgendamentosPage', icon: 'calendar' },
            { title: 'Buscar Prestador', component: 'BuscaPrestadorPage', icon: 'search' },
            { title: 'Extrato Beneficiário', component: 'BuscarExtratoBeneficiarioDependentePage', icon: 'paper' },
            { title: 'Grupo Familiar', component: 'GrupoFamiliarDependentePage', icon: 'people' },
            { title: 'Perfil', component: 'PerfilPage', icon: 'person' }
        ];
        this.initializeApp();
        this.events.subscribe('user:logout', function () {
            _this.logout();
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleLightContent();
            _this.headerColor.tint('#005D87');
            _this.menuCtrl.enable(true, 'nao_autenticado');
            _this.menuCtrl.enable(false, 'titular');
            _this.menuCtrl.enable(false, 'dependente');
            Promise.all([
                _this.storageService.getUsuario(),
                _this.storageService.getBeneficiario()
            ])
                .then(function (result) {
                if (result[0]) {
                    _this.menuCtrl.enable(false, 'nao_autenticado');
                    if (result[1].titular === 'S') {
                        _this.menuCtrl.enable(true, 'titular');
                        _this.menuCtrl.enable(false, 'dependente');
                    }
                    else {
                        _this.menuCtrl.enable(true, 'dependente');
                        _this.menuCtrl.enable(false, 'titular');
                    }
                    _this.nav.setRoot('HomePage').then(function () {
                        _this.splashScreen.hide();
                    });
                }
                else {
                    _this.splashScreen.hide();
                }
            }, function () {
                _this.splashScreen.hide();
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.storageService.removeUsuario()
            .then(function () {
            _this.toastHelper.notificacaoMensagem('Até mais');
            _this.menuCtrl.enable(true, 'nao_autenticado');
            _this.menuCtrl.enable(false, 'titular');
            _this.menuCtrl.enable(false, 'dependente');
            _this.facebook.logout();
            loader.dismiss();
            _this.nav.setRoot('LoginPage');
        }, function () {
            loader.dismiss();
            _this.toastHelper.notificacaoMensagem('Ocorreu um erro ao sair, por favor tente novamente mais tarde');
        });
    };
    MyApp.prototype.laudosWebRedirect = function () {
        this.inAppBrowser.create("http://laudosweb.cassems.com.br/portal-laudos");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Filipe\Projetos Android\cassems-beneficiario\src\app\app.html"*/'<ion-menu id="nao_autenticado" [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title align="center">Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content class="menu-content">\n\n    <ion-list text-wrap class="menu-list">\n\n      <button menuClose ion-item *ngFor="let p of paginasNaoAutenticado" (click)="openPage(p)">\n\n        <ion-icon [name]="p.icon" item-left></ion-icon>\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-menu id="titular" [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title align="center">Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content class="menu-content">\n\n    <ion-list text-wrap class="menu-list">\n\n      <button menuClose ion-item *ngFor="let p of paginasTitular" (click)="openPage(p)">\n\n        <ion-icon [name]="p.icon" item-left></ion-icon>\n\n        {{p.title}}\n\n      </button>\n\n      <button menuClose ion-item (click)="laudosWebRedirect()">\n\n        <ion-icon name="open" item-left></ion-icon>\n\n        Resultados Laboratório CASSEMS\n\n      </button>\n\n      <button menuClose ion-item (click)="logout()">\n\n        <ion-icon name="log-out" item-left></ion-icon>\n\n        Sair\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-menu id="dependente" [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title align="center">Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content class="menu-content">\n\n    <ion-list text-wrap class="menu-list">\n\n      <button menuClose ion-item *ngFor="let p of paginasDependente" (click)="openPage(p)">\n\n        <ion-icon [name]="p.icon" item-left></ion-icon>\n\n        {{p.title}}\n\n      </button>\n\n      <button menuClose ion-item (click)="laudosWebRedirect()">\n\n        <ion-icon name="open" item-left></ion-icon>\n\n        Resultados Laboratório CASSEMS\n\n      </button>\n\n      <button menuClose ion-item (click)="logout()">\n\n        <ion-icon name="log-out" item-left></ion-icon>\n\n        Sair\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"D:\Filipe\Projetos Android\cassems-beneficiario\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__helpers_toast_helper__["a" /* ToastHelper */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_header_color__["a" /* HeaderColor */],
            __WEBPACK_IMPORTED_MODULE_8__providers_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeneficiarioCadastroService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeneficiarioCadastroService = /** @class */ (function () {
    function BeneficiarioCadastroService(http) {
        this.http = http;
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* isDevMode */])()) {
            this.apiUrlPortalBeneficiario = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrlPortalBeneficiarioDev;
        }
        else {
            this.apiUrlPortalBeneficiario = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrlPortalBeneficiarioProd;
        }
    }
    /**
     * Metodo utilizado para atualizar o contato do gestao de um determinado beneficiario
     *
     * @author Anderson Friaca
     * @param {number} benId
     * @param {string} email
     * @param {string} dddTelefone
     * @param {string} telefone
     * @param {string} dddCelular
     * @param {string} celular
     * @return {Observable<DtoAuxiliarBooleano>}
     */
    BeneficiarioCadastroService.prototype.atualizarContatoGestao = function (benId, email, dddTelefone, telefone, dddCelular, celular) {
        return this.http.post(this.apiUrlPortalBeneficiario + "RpCassemsBeneficiarioCadastro/atualizar_contato_gestao", {
            benId: benId,
            email: email,
            dddTelefone: dddTelefone,
            telefone: telefone,
            dddCelular: dddCelular,
            celular: celular
        });
    };
    /**
     * Metodo utilizado para atualizar o endereco do beneficiario no sistema gestao
     *
     * @author Anderson Friaca
     * @param {number} benId
     * @param {number} codLocal
     * @param {string} cep
     * @param {string} logradouro
     * @param {number} numero
     * @param {string} complemento
     * @param {string} bairro
     * @return {Observable<DtoAuxiliarBooleano>}
     */
    BeneficiarioCadastroService.prototype.atualizarEnderecoGestao = function (benId, codLocal, cep, logradouro, numero, complemento, bairro) {
        return this.http.post(this.apiUrlPortalBeneficiario + "RpCassemsBeneficiarioCadastro/atualizar_endereco_gestao", {
            benId: benId,
            codLocal: codLocal,
            cep: cep,
            logradouro: logradouro,
            numero: numero,
            complemento: complemento,
            bairro: bairro
        });
    };
    BeneficiarioCadastroService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], BeneficiarioCadastroService);
    return BeneficiarioCadastroService;
}());

//# sourceMappingURL=beneficiario-cadastro.service.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_toast__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToastHelper = /** @class */ (function () {
    function ToastHelper(toast, platform, toastCtrl) {
        this.toast = toast;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
    }
    ToastHelper.prototype.notificacaoErroCarregarDados = function () {
        if (this.platform.is('core') || this.platform.is('mobileweb')) {
            this.toastCtrl.create({
                message: 'Ocorreu um erro ao buscar os dados, por favor tente novamente mais tarde',
                duration: 3000,
                position: 'bottom'
            }).present();
        }
        else {
            this.toast.show('Ocorreu um erro ao buscar os dados, por favor tente novamente mais tarde', '3000', 'bottom').subscribe();
        }
    };
    ToastHelper.prototype.notificacaoPreencherTodosCamposBusca = function () {
        if (this.platform.is('core') || this.platform.is('mobileweb')) {
            this.toastCtrl.create({
                message: 'Por favor preencha todos os campos para buscar',
                duration: 3000,
                position: 'bottom'
            }).present();
        }
        else {
            this.toast.show('Por favor preencha todos os campos para buscar', '3000', 'bottom').subscribe();
        }
    };
    ToastHelper.prototype.notificacaoMensagem = function (mensagem) {
        if (this.platform.is('core') || this.platform.is('mobileweb')) {
            this.toastCtrl.create({
                message: mensagem,
                duration: 3000,
                position: 'bottom'
            }).present();
        }
        else {
            this.toast.show(mensagem, '3000', 'bottom').subscribe();
        }
    };
    ToastHelper = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */]])
    ], ToastHelper);
    return ToastHelper;
}());

//# sourceMappingURL=toast.helper.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storages_storage_keys__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__beneficiario_benner_beneficiario_benner_service__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StorageService = /** @class */ (function () {
    function StorageService(storage, beneficiarioBennerService) {
        this.storage = storage;
        this.beneficiarioBennerService = beneficiarioBennerService;
    }
    StorageService.prototype.refreshBeneficiarioEGrupoFamiliar = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getBeneficiario()
                .then(function (beneficiario) {
                _this.beneficiarioBennerService.buscarBeneficiariosGrupoFamiliarPortal(beneficiario.handleTitular)
                    .subscribe(function (listaGrupoFamiliar) {
                    var beneficiarioAtual = listaGrupoFamiliar.find(function (benef) { return benef.handle === beneficiario.handle; });
                    Promise.all([
                        _this.setBeneficiario(beneficiarioAtual),
                        _this.setGrupoFamiliar(listaGrupoFamiliar)
                    ])
                        .then(function () {
                        resolve();
                    }, function (error) {
                        reject(error);
                    });
                }, function () {
                    reject('Ocorreu um erro ao carregar os dados, por favor tente novamente mais tarde');
                });
            }, function (error) {
                reject(error);
            });
        });
    };
    StorageService.prototype.getBeneficiario = function () {
        return this.getFromStorage(__WEBPACK_IMPORTED_MODULE_2__storages_storage_keys__["a" /* StorageKeys */].getKeyBeneficiario());
    };
    StorageService.prototype.getBeneficiarioFromGrupoFamiliar = function (handle) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getGrupoFamiliar()
                .then(function (listaGrupoFamiliar) {
                resolve(listaGrupoFamiliar.find(function (benef) { return benef.handle === handle; }));
            }, function (error) {
                reject(error);
            });
        });
    };
    StorageService.prototype.getBeneficiarioTitular = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getGrupoFamiliar()
                .then(function (listaGrupoFamiliar) {
                resolve(listaGrupoFamiliar.find(function (benef) { return benef.titular.toString() === 'S'; }));
            }, function (error) {
                reject(error);
            });
        });
    };
    StorageService.prototype.getGrupoFamiliar = function () {
        return this.getFromStorage(__WEBPACK_IMPORTED_MODULE_2__storages_storage_keys__["a" /* StorageKeys */].getKeyGrupoFamiliar());
    };
    StorageService.prototype.getUsuario = function () {
        return this.getFromStorage(__WEBPACK_IMPORTED_MODULE_2__storages_storage_keys__["a" /* StorageKeys */].getKeyUsuario());
    };
    StorageService.prototype.getTipoPrestadores = function () {
        return this.getFromStorage(__WEBPACK_IMPORTED_MODULE_2__storages_storage_keys__["a" /* StorageKeys */].getKeyListaTipoPrestadores());
    };
    StorageService.prototype.getEspecialidades = function () {
        return this.getFromStorage(__WEBPACK_IMPORTED_MODULE_2__storages_storage_keys__["a" /* StorageKeys */].getKeyListaEspecialidades());
    };
    StorageService.prototype.getMunicipios = function () {
        return this.getFromStorage(__WEBPACK_IMPORTED_MODULE_2__storages_storage_keys__["a" /* StorageKeys */].getKeyListaMunicipios());
    };
    StorageService.prototype.setBeneficiario = function (beneficiario) {
        return this.setInStorage(__WEBPACK_IMPORTED_MODULE_2__storages_storage_keys__["a" /* StorageKeys */].getKeyBeneficiario(), beneficiario);
    };
    StorageService.prototype.setGrupoFamiliar = function (listaGrupoFamiliar) {
        return this.setInStorage(__WEBPACK_IMPORTED_MODULE_2__storages_storage_keys__["a" /* StorageKeys */].getKeyGrupoFamiliar(), listaGrupoFamiliar);
    };
    StorageService.prototype.setUsuario = function (usuario) {
        return this.setInStorage(__WEBPACK_IMPORTED_MODULE_2__storages_storage_keys__["a" /* StorageKeys */].getKeyUsuario(), usuario);
    };
    StorageService.prototype.setTipoPrestadores = function (listaTipoPrestador) {
        return this.setInStorage(__WEBPACK_IMPORTED_MODULE_2__storages_storage_keys__["a" /* StorageKeys */].getKeyListaTipoPrestadores(), listaTipoPrestador);
    };
    StorageService.prototype.setEspecialidades = function (listaEspecialidades) {
        return this.setInStorage(__WEBPACK_IMPORTED_MODULE_2__storages_storage_keys__["a" /* StorageKeys */].getKeyListaEspecialidades(), listaEspecialidades);
    };
    StorageService.prototype.setMunicipios = function (listaMunicipios) {
        return this.setInStorage(__WEBPACK_IMPORTED_MODULE_2__storages_storage_keys__["a" /* StorageKeys */].getKeyListaMunicipios(), listaMunicipios);
    };
    StorageService.prototype.removeBeneficiario = function () {
        return this.removeFromStorage(__WEBPACK_IMPORTED_MODULE_2__storages_storage_keys__["a" /* StorageKeys */].getKeyBeneficiario());
    };
    StorageService.prototype.removeGrupoFamiliar = function () {
        return this.removeFromStorage(__WEBPACK_IMPORTED_MODULE_2__storages_storage_keys__["a" /* StorageKeys */].getKeyGrupoFamiliar());
    };
    StorageService.prototype.removeUsuario = function () {
        return this.removeFromStorage(__WEBPACK_IMPORTED_MODULE_2__storages_storage_keys__["a" /* StorageKeys */].getKeyUsuario());
    };
    StorageService.prototype.removeTipoPrestadores = function () {
        return this.removeFromStorage(__WEBPACK_IMPORTED_MODULE_2__storages_storage_keys__["a" /* StorageKeys */].getKeyListaTipoPrestadores());
    };
    StorageService.prototype.removeEspecialidades = function () {
        return this.removeFromStorage(__WEBPACK_IMPORTED_MODULE_2__storages_storage_keys__["a" /* StorageKeys */].getKeyListaEspecialidades());
    };
    StorageService.prototype.removeMunicipios = function () {
        return this.removeFromStorage(__WEBPACK_IMPORTED_MODULE_2__storages_storage_keys__["a" /* StorageKeys */].getKeyListaMunicipios());
    };
    StorageService.prototype.getFromStorage = function (key) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.ready()
                .then(function () {
                _this.storage.get(key)
                    .then(function (stringValue) {
                    resolve(JSON.parse(stringValue));
                }, function () {
                    reject('Ocorreu um erro interno, por favor tente novamente mais tarde');
                });
            }, function () {
                reject('Ocorreu um erro interno, por favor tente novamente mais tarde');
            });
        });
    };
    StorageService.prototype.setInStorage = function (key, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.ready()
                .then(function () {
                _this.storage.set(key, JSON.stringify(value))
                    .then(function () {
                    resolve(value);
                }, function () {
                    reject('Ocorreu um erro interno, por favor tente novamente mais tarde');
                });
            }, function () {
                reject('Ocorreu um erro interno, por favor tente novamente mais tarde');
            });
        });
    };
    /**
     * Metodo utilizado para remover um determinado dado do storage
     *
     * @author Anderson Friaca
     * @param key
     */
    StorageService.prototype.removeFromStorage = function (key) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.ready()
                .then(function () {
                _this.storage.remove(key)
                    .then(function () {
                    resolve();
                }, function () {
                    reject('Ocorreu um erro interno, por favor tente novamente mais tarde');
                });
            }, function () {
                reject('Ocorreu um erro interno, por favor tente novamente mais tarde');
            });
        });
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__beneficiario_benner_beneficiario_benner_service__["a" /* BeneficiarioBennerService */]])
    ], StorageService);
    return StorageService;
}());

//# sourceMappingURL=storage.service.js.map

/***/ })

},[237]);
//# sourceMappingURL=main.js.map