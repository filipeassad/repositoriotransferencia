import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {PipeModule} from "../../../pipes/pipe.module";
import {DemonstrativoPagamentoPage} from "./demonstrativo-pagamento";


@NgModule({
    declarations: [
        DemonstrativoPagamentoPage
    ],
    imports: [
        IonicPageModule.forChild(DemonstrativoPagamentoPage),
        PipeModule
    ],
    exports: [DemonstrativoPagamentoPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
})
export class DemonstrativoPagamentoModule {

}