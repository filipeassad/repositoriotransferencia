import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {QuestionarioRevalidacaoDependentePage} from "./questionario-revalidacao-dependente";
import {PipeModule} from "../../../../pipes/pipe.module";


@NgModule({
    declarations: [
        QuestionarioRevalidacaoDependentePage
    ],
    imports: [
        IonicPageModule.forChild(QuestionarioRevalidacaoDependentePage),
        PipeModule
    ],
    exports: [QuestionarioRevalidacaoDependentePage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
})
export class QuestionarioRevalidacaoDependenteModule {

}