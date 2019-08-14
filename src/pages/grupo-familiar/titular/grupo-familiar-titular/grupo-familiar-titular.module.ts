import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {GrupoFamiliarTitularPage} from "./grupo-familiar-titular";
import {PipeModule} from "../../../../pipes/pipe.module";


@NgModule({
    declarations: [
        GrupoFamiliarTitularPage
    ],
    imports: [
        IonicPageModule.forChild(GrupoFamiliarTitularPage),
        PipeModule
    ],
    exports: [GrupoFamiliarTitularPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
})
export class GrupoFamiliarTitularModule {

}