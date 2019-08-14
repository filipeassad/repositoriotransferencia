import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {PipeModule} from "../../pipes/pipe.module";
import {ComponentsModule} from "../../components/components.module";
import {PreHomeRedesSociaisPage} from "./pre-home-redes-sociais";


@NgModule({
    declarations: [
        PreHomeRedesSociaisPage
    ],
    imports: [
        IonicPageModule.forChild(PreHomeRedesSociaisPage),
        PipeModule,
        ComponentsModule
    ],
    exports: [PreHomeRedesSociaisPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
})
export class HomeModule {

}