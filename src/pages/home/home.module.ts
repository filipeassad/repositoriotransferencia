import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {HomePage} from "./home";
import {IonicPageModule} from "ionic-angular";
import {PipeModule} from "../../pipes/pipe.module";
import {ComponentsModule} from "../../components/components.module";


@NgModule({
    declarations: [
        HomePage
    ],
    imports: [
        IonicPageModule.forChild(HomePage),
        PipeModule,
        ComponentsModule
    ],
    exports: [HomePage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
})
export class HomeModule {

}