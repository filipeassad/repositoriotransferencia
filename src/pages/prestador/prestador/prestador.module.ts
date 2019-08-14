import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {PrestadorPage} from "./prestador";
import {PipeModule} from "../../../pipes/pipe.module";

@NgModule({
    declarations:[
        PrestadorPage
    ],
    imports: [
        IonicPageModule.forChild(PrestadorPage),
        PipeModule
    ],
    exports: [PrestadorPage],
    schemas: [],
    providers: [],
})
export class PrestadorModule{

}