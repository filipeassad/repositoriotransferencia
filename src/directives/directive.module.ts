import {NgModule} from "@angular/core";
import {ElasticDirective} from "./elastic/elastic.directive";

@NgModule({
    declarations: [
        ElasticDirective
    ],
    exports: [
        ElasticDirective
    ]
})
export class DirectiveModule{

}