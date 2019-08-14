import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {PipeModule} from "../../pipes/pipe.module";
import {BeneficiarioPage} from "./beneficiario";


@NgModule({
    declarations: [
        BeneficiarioPage
    ],
    imports: [
        IonicPageModule.forChild(BeneficiarioPage),
        PipeModule
    ],
    exports: [BeneficiarioPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
})
export class BeneficiarioModule {

}