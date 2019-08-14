import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {PipeModule} from "../../../pipes/pipe.module";
import {ListaGrupoFamiliarRevalidacaoPage} from "./lista-grupo-familiar-revalidacao";


@NgModule({
    declarations: [
        ListaGrupoFamiliarRevalidacaoPage
    ],
    imports: [
        IonicPageModule.forChild(ListaGrupoFamiliarRevalidacaoPage),
        PipeModule
    ],
    exports: [ListaGrupoFamiliarRevalidacaoPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
})
export class ListaGrupoFamiliarRevalidacaoModule {

}