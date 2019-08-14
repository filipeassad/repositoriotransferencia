webpackJsonp([23],{

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalTermosECondicoesModule", function() { return ModalTermosECondicoesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_termos_e_condicoes__ = __webpack_require__(438);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalTermosECondicoesModule = /** @class */ (function () {
    function ModalTermosECondicoesModule() {
    }
    ModalTermosECondicoesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_termos_e_condicoes__["a" /* ModalTermosECondicoesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_termos_e_condicoes__["a" /* ModalTermosECondicoesPage */])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__modal_termos_e_condicoes__["a" /* ModalTermosECondicoesPage */]],
            schemas: [],
            providers: [],
        })
    ], ModalTermosECondicoesModule);
    return ModalTermosECondicoesModule;
}());

//# sourceMappingURL=modal-termos-e-condicoes.module.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalTermosECondicoesPage; });
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


var ModalTermosECondicoesPage = /** @class */ (function () {
    function ModalTermosECondicoesPage(view) {
        this.view = view;
    }
    ModalTermosECondicoesPage.prototype.dismiss = function () {
        this.view.dismiss();
    };
    ModalTermosECondicoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-modal-termos-e-condicoes',template:/*ion-inline-start:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\usuario\modal-termos-e-condicoes\modal-termos-e-condicoes.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      <span class="titulo">Termos e Condições</span>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="privacy-content legal-content">\n  <h4 class="legal-title">Termo de Confidencialidade</h4>\n  <p style="text-align: justify;">Ao acessar qualquer site gerenciado pela CASSEMS o benefici&aacute;rio e/ou visitante concorda plenamente com os termos expostos nesta p&aacute;gina.</p>\n\n  <p style="text-align: justify;">Considerando a obriga&ccedil;&atilde;o da Caixa de Assist&ecirc;ncia dos Servidores do Estado de Mato Grosso do Sul &ndash; CASSEMS, operadora de plano de sa&uacute;de em autogest&atilde;o, registrada perante a Ag&ecirc;ncia Nacional de Sa&uacute;de Suplementar sob o n&ordm; 41353-4, em disponibilizar, sem qualquer &ocirc;nus, as informa&ccedil;&otilde;es de dados de aten&ccedil;&atilde;o &agrave; sa&uacute;de do padr&atilde;o TISS, solicitadas pelo benefici&aacute;rio, por seu respons&aacute;vel legal ou ainda por terceiros formalmente autorizados, e a necessidade de manuten&ccedil;&atilde;o do sigilo de tais dados e informa&ccedil;&otilde;es, o usu&aacute;rio concorda integralmente com o presente Termo de Confidencialidade:</p>\n\n  <p style="text-align: justify;">A TISS (Troca de Informa&ccedil;&atilde;o em Sa&uacute;de Suplementar) &eacute; uma norma institu&iacute;da pela ANS - Ag&ecirc;ncia Nacional de Sa&uacute;de Suplementar, que estabelece um padr&atilde;o obrigat&oacute;rio para a troca de informa&ccedil;&otilde;es entre operadoras de planos de sa&uacute;de e prestadores de servi&ccedil;o de sa&uacute;de sobre os eventos realizados em benefici&aacute;rios de planos privados de sa&uacute;de.<br />\n    <br />\n    O padr&atilde;o TISS estabelece os requisitos de prote&ccedil;&atilde;o para assegurar o direito individual ao sigilo, &agrave; privacidade e &agrave; confidencialidade dos dados de aten&ccedil;&atilde;o &agrave; sa&uacute;de. Tem como base o sigilo profissional e segue a legisla&ccedil;&atilde;o.</p>\n\n  <p style="text-align: justify;">Durante a navega&ccedil;&atilde;o na &aacute;rea do site restrita a clientes ser&aacute; utilizada e gravada a identifica&ccedil;&atilde;o de IP** a fim de garantir a seguran&ccedil;a e autenticidade das transa&ccedil;&otilde;es.</p>\n\n  <p style="text-align: justify;">*IP (Internet Protocol) - endere&ccedil;o eletr&ocirc;nico num&eacute;rico atribu&iacute;do pelo provedor de acesso ao usu&aacute;rio, permitindo a identifica&ccedil;&atilde;o do usu&aacute;rio em hor&aacute;rio e data determinado.</p>\n\n  <p style="text-align: justify;">N&atilde;o &eacute; permitido que menores de idade efetuem contrata&ccedil;&otilde;es ou se envolvam em outros atos legais nos sites gerenciados pela CASSEMS.</p>\n\n  <p style="text-align: justify;">A CASSEMS pode alterar a presente Pol&iacute;tica a qualquer tempo independentemente de pr&eacute;via notifica&ccedil;&atilde;o, de forma que a cada visita, o cliente e/ou visitante deve consult&aacute;-la.</p>\n\n  <p style="text-align: justify;">Toda informa&ccedil;&atilde;o que venha, a partir desta data, a ser fornecida por uma parte &agrave; outra, em rela&ccedil;&atilde;o, direta ou indiretamente, &agrave; opera&ccedil;&atilde;o ser&aacute; tratada como sigilosa e confidencial.</p>\n\n  <p style="text-align: justify;">As partes garantem que t&ecirc;m o direito e est&atilde;o devidamente autorizadas a revelar todas as informa&ccedil;&otilde;es confidenciais uma &agrave; outra e cada parte indenizar&aacute; e manter&aacute; livre de qualquer dano a outra parte, de todas as reclama&ccedil;&otilde;es de terceiros relacionadas &agrave; revela&ccedil;&atilde;o err&ocirc;nea.</p>\n\n  <p style="text-align: justify;">Como condi&ccedil;&atilde;o para o fornecimento das informa&ccedil;&otilde;es, as partes se obrigam em trat&aacute;-las e mant&ecirc;-las sob estrita confidencialidade e sigilo.</p>\n\n  <p style="text-align: justify;">O usu&aacute;rio dever&aacute; adotar as necess&aacute;rias precau&ccedil;&otilde;es para impossibilitar a revela&ccedil;&atilde;o de informa&ccedil;&otilde;es acessadas, prevenindo e evitando que tais informa&ccedil;&otilde;es sejam usadas para quaisquer outros fins ou divulgadas a quaisquer terceiros.</p>\n\n  <p style="text-align: justify;">As informa&ccedil;&otilde;es assistenciais podem sofrer altera&ccedil;&atilde;o a qualquer tempo em raz&atilde;o de novos lan&ccedil;amentos.</p>\n\n  <p style="text-align: justify;">Qualquer toler&acirc;ncia concedida pela partes em raz&atilde;o do cumprimento das obriga&ccedil;&otilde;es ora pactuadas n&atilde;o constituir&aacute; nova&ccedil;&atilde;o, nem mesmo ren&uacute;ncia aos direitos conferidos &agrave; parte pelo presente.</p>\n\n  <p style="text-align: justify;">Sobreviver&aacute; ao presente termo a obriga&ccedil;&atilde;o de as partes manterem sigilo das informa&ccedil;&otilde;es recebidas, dela s&oacute; se desobrigando se expressamente autorizada pela outra parte.&nbsp;</p>\n\n  <p style="text-align: justify;">Nenhuma das partes ceder&aacute;, transferir&aacute; ou sub-rogar&aacute; este contrato a terceiros, no todo ou em parte, sem a aprova&ccedil;&atilde;o por escrito da parte cedida.</p>\n\n  <p style="text-align: justify;">Este instrumento ser&aacute; regido por e interpretado em conformidade com as leis vigentes no territ&oacute;rio nacional e obrigar&aacute; as partes assim como seus sucessores e cession&aacute;rios.</p>\n\n  <p style="text-align: justify;">O usu&aacute;rio concorda que para dirimir as quest&otilde;es que porventura surjam na execu&ccedil;&atilde;o deste Termo de Confidencialidade ser&atilde;o sempre demandadas no foro da Comarca desta Capital.</p>\n\n</ion-content>\n'/*ion-inline-end:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\usuario\modal-termos-e-condicoes\modal-termos-e-condicoes.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], ModalTermosECondicoesPage);
    return ModalTermosECondicoesPage;
}());

//# sourceMappingURL=modal-termos-e-condicoes.js.map

/***/ })

});
//# sourceMappingURL=23.js.map