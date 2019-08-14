export class DtoSamEndereco {

    private _handle: number;

    private _grupoZ: number;

    private _cep: string;

    private _tipoLogradouro: number;

    private _celular: string;

    private _ramal: string;

    private _tipoComplemento: number;

    private _dataAtualizacao: string;

    private _estado: number;

    private _municipio: number;

    private _bairro: string;

    private _logradouro: string;

    private _numero: number;

    private _complemento: string;

    private _telefone1: string;

    private _telefone2: string;


    get handle(): number {
        return this._handle;
    }

    set handle(value: number) {
        this._handle = value;
    }

    get grupoZ(): number {
        return this._grupoZ;
    }

    set grupoZ(value: number) {
        this._grupoZ = value;
    }

    get cep(): string {
        return this._cep;
    }

    set cep(value: string) {
        this._cep = value;
    }

    get tipoLogradouro(): number {
        return this._tipoLogradouro;
    }

    set tipoLogradouro(value: number) {
        this._tipoLogradouro = value;
    }

    get celular(): string {
        return this._celular;
    }

    set celular(value: string) {
        this._celular = value;
    }

    get ramal(): string {
        return this._ramal;
    }

    set ramal(value: string) {
        this._ramal = value;
    }

    get tipoComplemento(): number {
        return this._tipoComplemento;
    }

    set tipoComplemento(value: number) {
        this._tipoComplemento = value;
    }

    get dataAtualizacao(): string {
        return this._dataAtualizacao;
    }

    set dataAtualizacao(value: string) {
        this._dataAtualizacao = value;
    }

    get estado(): number {
        return this._estado;
    }

    set estado(value: number) {
        this._estado = value;
    }

    get municipio(): number {
        return this._municipio;
    }

    set municipio(value: number) {
        this._municipio = value;
    }

    get bairro(): string {
        return this._bairro;
    }

    set bairro(value: string) {
        this._bairro = value;
    }

    get logradouro(): string {
        return this._logradouro;
    }

    set logradouro(value: string) {
        this._logradouro = value;
    }

    get numero(): number {
        return this._numero;
    }

    set numero(value: number) {
        this._numero = value;
    }

    get complemento(): string {
        return this._complemento;
    }

    set complemento(value: string) {
        this._complemento = value;
    }

    get telefone1(): string {
        return this._telefone1;
    }

    set telefone1(value: string) {
        this._telefone1 = value;
    }

    get telefone2(): string {
        return this._telefone2;
    }

    set telefone2(value: string) {
        this._telefone2 = value;
    }
}