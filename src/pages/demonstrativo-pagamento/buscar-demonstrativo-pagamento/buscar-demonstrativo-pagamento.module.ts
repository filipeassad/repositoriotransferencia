import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {BuscarDemonstrativoPagamentoPage} from "./buscar-demonstrativo-pagamento";
import {PipeModule} from "../../../pipes/pipe.module";


@NgModule({
    declarations: [
        BuscarDemonstrativoPagamentoPage
    ],
    imports: [
        IonicPageModule.forChild(BuscarDemonstrativoPagamentoPage),
        PipeModule
    ],
    exports: [BuscarDemonstrativoPagamentoPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
})
export class BuscarDemonstrativoPagamentoModule {

}