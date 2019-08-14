export class DtoLogradouro {


    private _idPais: number;

    private _nomePais: string;

    private _idEstado: number;

    private _nomeEstado: string;

    private _sigla: string;

    private _idMunicipio: number;

    private _codigoIbge: number;

    private _codLocalK: number;

    private _logradouroId: number;

    private _logradouro: string;

    private _bairro: string;

    private _tipoLogradouroId: number;

    private _tipoLogradouroDescricao: string;

    private _zNomeMunicipio: string;


    get idPais(): number {
        return this._idPais;
    }

    set idPais(value: number) {
        this._idPais = value;
    }

    get nomePais(): string {
        return this._nomePais;
    }

    set nomePais(value: string) {
        this._nomePais = value;
    }

    get idEstado(): number {
        return this._idEstado;
    }

    set idEstado(value: number) {
        this._idEstado = value;
    }

    get nomeEstado(): string {
        return this._nomeEstado;
    }

    set nomeEstado(value: string) {
        this._nomeEstado = value;
    }

    get sigla(): string {
        return this._sigla;
    }

    set sigla(value: string) {
        this._sigla = value;
    }

    get idMunicipio(): number {
        return this._idMunicipio;
    }

    set idMunicipio(value: number) {
        this._idMunicipio = value;
    }

    get codigoIbge(): number {
        return this._codigoIbge;
    }

    set codigoIbge(value: number) {
        this._codigoIbge = value;
    }

    get codLocalK(): number {
        return this._codLocalK;
    }

    set codLocalK(value: number) {
        this._codLocalK = value;
    }

    get logradouroId(): number {
        return this._logradouroId;
    }

    set logradouroId(value: number) {
        this._logradouroId = value;
    }

    get logradouro(): string {
        return this._logradouro;
    }

    set logradouro(value: string) {
        this._logradouro = value;
    }

    get bairro(): string {
        return this._bairro;
    }

    set bairro(value: string) {
        this._bairro = value;
    }

    get tipoLogradouroId(): number {
        return this._tipoLogradouroId;
    }

    set tipoLogradouroId(value: number) {
        this._tipoLogradouroId = value;
    }

    get tipoLogradouroDescricao(): string {
        return this._tipoLogradouroDescricao;
    }

    set tipoLogradouroDescricao(value: string) {
        this._tipoLogradouroDescricao = value;
    }

    get zNomeMunicipio(): string {
        return this._zNomeMunicipio;
    }

    set zNomeMunicipio(value: string) {
        this._zNomeMunicipio = value;
    }
}