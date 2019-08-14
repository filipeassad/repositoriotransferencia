import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {PipeModule} from "../../../pipes/pipe.module";
import {ExtratoBeneficiarioPage} from "./extrato-beneficiario";


@NgModule({
    declarations: [
        ExtratoBeneficiarioPage
    ],
    imports: [
        IonicPageModule.forChild(ExtratoBeneficiarioPage),
        PipeModule
    ],
    exports: [ExtratoBeneficiarioPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
})
export class ExtratoBeneficiarioModule {

}