import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {GrupoFamiliarDependentePage} from "./grupo-familiar-dependente";
import {PipeModule} from "../../../../pipes/pipe.module";


@NgModule({
    declarations: [
        GrupoFamiliarDependentePage
    ],
    imports: [
        IonicPageModule.forChild(GrupoFamiliarDependentePage),
        PipeModule
    ],
    exports: [GrupoFamiliarDependentePage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
})
export class GrupoFamiliarDependenteModule {

}