import {EnPrestadorListaMensagemAppPortalModel} from "../en-prestador-lista-mensagem-app-portal.model";

export class ValidaAgendamentoTO {

    private _valida: boolean;
    private _listMensagem: EnPrestadorListaMensagemAppPortalModel[];


    get valida(): boolean {
        return this._valida;
    }

    set valida(value: boolean) {
        this._valida = value;
    }

    get listMensagem(): EnPrestadorListaMensagemAppPortalModel[] {
        return this._listMensagem;
    }

    set listMensagem(value: EnPrestadorListaMensagemAppPortalModel[]) {
        this._listMensagem = value;
    }
}