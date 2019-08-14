import {NgModule} from "@angular/core";
import {MatriculaCassemsPipe} from "./matricula-cassems.pipe";
import {CepPipe} from "./cep.pipe";
import {CpfPipe} from "./cpf.pipe";
import {CnpjPipe} from "./cnpj.pipe";
import {CapitalizeAllPipe} from "./capitalize-all.pipe";
import {KeysEnumPipe} from "./keys-enum.pipe";
import {MonetarioBrasilPipe} from "./monetario-brasil.pipe";
import {MesBrasilPipe} from "./mes-brasil.pipe";
import {KeysJsonPipe} from "./keys-json.pipe";
import {TelefonePipe} from "./telefone.pipe";

@NgModule({
    declarations: [
        MatriculaCassemsPipe,
        CepPipe,
        CpfPipe,
        CnpjPipe,
        CapitalizeAllPipe,
        KeysEnumPipe,
        KeysJsonPipe,
        MonetarioBrasilPipe,
        MesBrasilPipe,
        TelefonePipe
    ],
    exports: [
        MatriculaCassemsPipe,
        CepPipe,
        CpfPipe,
        CnpjPipe,
        CapitalizeAllPipe,
        KeysEnumPipe,
        KeysJsonPipe,
        MonetarioBrasilPipe,
        MesBrasilPipe,
        TelefonePipe
    ]
})
export class PipeModule{

}