webpackJsonp([10],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendamentoModule", function() { return AgendamentoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cancelar_agendamento__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directive_module__ = __webpack_require__(388);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AgendamentoModule = /** @class */ (function () {
    function AgendamentoModule() {
    }
    AgendamentoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__cancelar_agendamento__["a" /* CancelarAgendamentoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__cancelar_agendamento__["a" /* CancelarAgendamentoPage */]),
                __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directive_module__["a" /* DirectiveModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__cancelar_agendamento__["a" /* CancelarAgendamentoPage */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [],
        })
    ], AgendamentoModule);
    return AgendamentoModule;
}());

//# sourceMappingURL=cancelar-agendamento.module.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CancelarAgendamentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_toast_helper__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_agendamento_service__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CancelarAgendamentoPage = /** @class */ (function () {
    function CancelarAgendamentoPage(navParams, navCtrl, toastHelper, agendamentoService) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.toastHelper = toastHelper;
        this.agendamentoService = agendamentoService;
        this.agendamento = this.navParams.get('Agendamento');
        this.cancelarAgendamentoForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            'motivoCancelamento': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(400)])
        });
    }
    CancelarAgendamentoPage.prototype.cancelarAgendamento = function () {
        var _this = this;
        if (this.motivoCancelamento.trim() !== '') {
            this.agendamentoService.cancelarAgendamento(this.agendamento.idGuia, this.motivoCancelamento)
                .subscribe(function (response) {
                _this.toastHelper.notificacaoMensagem('Cancelamento realizado com sucesso');
                _this.navCtrl.setRoot('MeusAgendamentosPage');
            }, function (error) {
                _this.toastHelper.notificacaoMensagem('Ocorreu um erro ao cancelar o agendamento, por favor tente novamente mais tarde');
            });
        }
        else {
            this.toastHelper.notificacaoMensagem('Por favor digite o motivo do cancelamento');
        }
    };
    CancelarAgendamentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cancelar-agendamento',template:/*ion-inline-start:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\agendamento\cancelar-agendamento\cancelar-agendamento.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Cancelar Agendamento</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="contentAgendamento">\n    <form (ngSubmit)="cancelarAgendamento()" class="formCancelarAgendamento" [formGroup]="cancelarAgendamentoForm"\n          #cancelarAgendamentoFormElement="ngForm" novalidate>\n        <ion-list>\n            <ion-item>\n                <ion-label floating>Motivo do cancelamento</ion-label>\n                <ion-textarea elastic [(ngModel)]="motivoCancelamento"\n                              formControlName="motivoCancelamento" maxlength="400"></ion-textarea>\n            </ion-item>\n        </ion-list>\n        <button type="submit" ion-button block [disabled]="!cancelarAgendamentoFormElement.form.valid">Cancelar\n            Agendamento\n        </button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\agendamento\cancelar-agendamento\cancelar-agendamento.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__helpers_toast_helper__["a" /* ToastHelper */],
            __WEBPACK_IMPORTED_MODULE_4__providers_agendamento_service__["a" /* AgendamentoService */]])
    ], CancelarAgendamentoPage);
    return CancelarAgendamentoPage;
}());

//# sourceMappingURL=cancelar-agendamento.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectiveModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__elastic_elastic_directive__ = __webpack_require__(389);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DirectiveModule = /** @class */ (function () {
    function DirectiveModule() {
    }
    DirectiveModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__elastic_elastic_directive__["a" /* ElasticDirective */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__elastic_elastic_directive__["a" /* ElasticDirective */]
            ]
        })
    ], DirectiveModule);
    return DirectiveModule;
}());

//# sourceMappingURL=directive.module.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElasticDirective; });
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

var ElasticDirective = /** @class */ (function () {
    function ElasticDirective() {
    }
    ElasticDirective.prototype.onInput = function (nativeElement) {
        nativeElement.style.overflow = 'hidden';
        nativeElement.style.height = 'auto';
        nativeElement.style.height = nativeElement.scrollHeight + "px";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('input', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ElasticDirective.prototype, "onInput", null);
    ElasticDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[elastic]'
        })
    ], ElasticDirective);
    return ElasticDirective;
}());

//# sourceMappingURL=elastic.directive.js.map

/***/ })

});
//# sourceMappingURL=10.js.map