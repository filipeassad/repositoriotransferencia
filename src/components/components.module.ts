import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {ShowHideContainer} from "./show-hide-password/show-hide-container";
import {ShowHideInput} from "./show-hide-password/show-hide-input";
import {BackgroundImage} from "./background-image/background-image";
import {PreloadImage} from "./preload-image/preload-image";
import {CommonModule} from "@angular/common";
import {IonicPageModule} from "ionic-angular";

@NgModule({
    declarations: [
        ShowHideContainer,
        ShowHideInput,
        BackgroundImage,
        PreloadImage
    ],
    imports: [
        CommonModule,
        IonicPageModule.forChild(ShowHideContainer),
        IonicPageModule.forChild(BackgroundImage),
        IonicPageModule.forChild(PreloadImage)
    ],
    exports: [
        ShowHideInput,
        ShowHideContainer,
        BackgroundImage,
        PreloadImage
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {

}