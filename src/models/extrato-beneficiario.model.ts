export class ExtratoBeneficiario{

    private _id: number;

    private _caraterAtendimento: string;

    private _cnes: string;

    private _codMunicipio: number;

    private _codPlano: number;

    private _codProcedimento: number;

    private _dataFinal: Date;

    private _dataInicial: Date;

    private _descProcedimento: string;

    private _evento: string;

    private _matricCassems: string;

    private _motivoEncerramento: string;

    private _municipio: string;

    private _nome: string;

    private _nomeCredenciado: string;

    private _numCns: string;

    private _plano: string;

    private _qtde: number;

    private _tipoConsulta: string;

    private _tipoInternacao: number;


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get caraterAtendimento(): string {
        return this._caraterAtendimento;
    }

    set caraterAtendimento(value: string) {
        this._caraterAtendimento = value;
    }

    get cnes(): string {
        return this._cnes;
    }

    set cnes(value: string) {
        this._cnes = value;
    }

    get codMunicipio(): number {
        return this._codMunicipio;
    }

    set codMunicipio(value: number) {
        this._codMunicipio = value;
    }

    get codPlano(): number {
        return this._codPlano;
    }

    set codPlano(value: number) {
        this._codPlano = value;
    }

    get codProcedimento(): number {
        return this._codProcedimento;
    }

    set codProcedimento(value: number) {
        this._codProcedimento = value;
    }

    get dataFinal(): Date {
        return this._dataFinal;
    }

    set dataFinal(value: Date) {
        this._dataFinal = new Date(value.toString().replace(/-/g, '\/'));
    }

    get dataInicial(): Date {
        return this._dataInicial;
    }

    set dataInicial(value: Date) {
        this._dataInicial = new Date(value.toString().replace(/-/g, '\/'));
    }

    get descProcedimento(): string {
        return this._descProcedimento;
    }

    set descProcedimento(value: string) {
        this._descProcedimento = value;
    }

    get evento(): string {
        return this._evento;
    }

    set evento(value: string) {
        this._evento = value;
    }

    get matricCassems(): string {
        return this._matricCassems;
    }

    set matricCassems(value: string) {
        this._matricCassems = value;
    }

    get motivoEncerramento(): string {
        return this._motivoEncerramento;
    }

    set motivoEncerramento(value: string) {
        this._motivoEncerramento = value;
    }

    get municipio(): string {
        return this._municipio;
    }

    set municipio(value: string) {
        this._municipio = value;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        this._nome = value;
    }

    get nomeCredenciado(): string {
        return this._nomeCredenciado;
    }

    set nomeCredenciado(value: string) {
        this._nomeCredenciado = value;
    }

    get numCns(): string {
        return this._numCns;
    }

    set numCns(value: string) {
        this._numCns = value;
    }

    get plano(): string {
        return this._plano;
    }

    set plano(value: string) {
        this._plano = value;
    }

    get qtde(): number {
        return this._qtde;
    }

    set qtde(value: number) {
        this._qtde = value;
    }

    get tipoConsulta(): string {
        return this._tipoConsulta;
    }

    set tipoConsulta(value: string) {
        this._tipoConsulta = value;
    }

    get tipoInternacao(): number {
        return this._tipoInternacao;
    }

    set tipoInternacao(value: number) {
        this._tipoInternacao = value;
    }
}