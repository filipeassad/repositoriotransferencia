import {Prestador} from "./prestador.model";
import {CentroMedico} from "./centro-medico.model";
import {Especialidade} from "./especialidade.model";
export class Agendamento {

    private _dataFormatada: string;
    private _horaFormatada: string;
    private _hora: string;
    private _data: string;
    private _status: string;
    private _dtoPrestador: Prestador;
    private _dtoCentroMedico: CentroMedico;
    private _dtoEspecialidade: Especialidade;
    private _idGuia: number;

    private _dataFinal: Date;


    get dataFormatada(): string {
        return this._dataFormatada;
    }

    set dataFormatada(value: string) {
        this._dataFormatada = value;
    }

    get horaFormatada(): string {
        return this._horaFormatada;
    }

    set horaFormatada(value: string) {
        this._horaFormatada = value;
    }

    get hora(): string {
        return this._hora;
    }

    set hora(value: string) {
        this._hora = value;
    }

    get data(): string {
        return this._data;
    }

    set data(value: string) {
        this._data = value;
    }

    get status(): string {
        return this._status;
    }

    set status(value: string) {
        this._status = value;
    }

    get dtoPrestador(): Prestador {
        return this._dtoPrestador;
    }

    set dtoPrestador(value: Prestador) {
        this._dtoPrestador = value;
    }

    get dtoCentroMedico(): CentroMedico {
        return this._dtoCentroMedico;
    }

    set dtoCentroMedico(value: CentroMedico) {
        this._dtoCentroMedico = value;
    }

    get dtoEspecialidade(): Especialidade {
        return this._dtoEspecialidade;
    }

    set dtoEspecialidade(value: Especialidade) {
        this._dtoEspecialidade = value;
    }

    get dataFinal(): Date {
        return this._dataFinal;
    }

    set dataFinal(value: Date) {
        this._dataFinal = value;
    }

    get idGuia(): number {
        return this._idGuia;
    }

    set idGuia(value: number) {
        this._idGuia = value;
    }
}