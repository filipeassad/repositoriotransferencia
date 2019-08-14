export class BoletoSapiens{

    private _numTitulo: string;
    private _codTpt: string;
    private _desTpt: string;
    private _codTns: string;
    private _desTns: string;
    private _codCli_titular: number;
    private _nomeCli_titular: string;
    private _ideCli_titular: string;
    private _cliBen_agregado: string;
    private _nomeCli_agregado: string;
    private _ideBen_agregado: string;
    private _datemi: Date;
    private _vctOri: Date;
    private _vctOri_data: number;
    private _hoje: Date;
    private _cmpOri: Date;
    private _dias_Venc: number;
    private _vlr_Abe: number;
    private _sit_tit: string;
    private _tit_ban: string;
    private _doc_ori: string;
    private _numeroDigitavel: string;
    private _dataVencimentoCalculado: Date;
    private _reciprocidade: boolean;


    get numTitulo(): string {
        return this._numTitulo;
    }

    set numTitulo(value: string) {
        this._numTitulo = value;
    }

    get codTpt(): string {
        return this._codTpt;
    }

    set codTpt(value: string) {
        this._codTpt = value;
    }

    get desTpt(): string {
        return this._desTpt;
    }

    set desTpt(value: string) {
        this._desTpt = value;
    }

    get codTns(): string {
        return this._codTns;
    }

    set codTns(value: string) {
        this._codTns = value;
    }

    get desTns(): string {
        return this._desTns;
    }

    set desTns(value: string) {
        this._desTns = value;
    }

    get codCli_titular(): number {
        return this._codCli_titular;
    }

    set codCli_titular(value: number) {
        this._codCli_titular = value;
    }

    get nomeCli_titular(): string {
        return this._nomeCli_titular;
    }

    set nomeCli_titular(value: string) {
        this._nomeCli_titular = value;
    }

    get ideCli_titular(): string {
        return this._ideCli_titular;
    }

    set ideCli_titular(value: string) {
        this._ideCli_titular = value;
    }

    get cliBen_agregado(): string {
        return this._cliBen_agregado;
    }

    set cliBen_agregado(value: string) {
        this._cliBen_agregado = value;
    }

    get nomeCli_agregado(): string {
        return this._nomeCli_agregado;
    }

    set nomeCli_agregado(value: string) {
        this._nomeCli_agregado = value;
    }

    get ideBen_agregado(): string {
        return this._ideBen_agregado;
    }

    set ideBen_agregado(value: string) {
        this._ideBen_agregado = value;
    }

    get datemi(): Date {
        return this._datemi;
    }

    set datemi(value: Date) {
        this._datemi = new Date(value.toString().replace(/-/g, '\/'));
    }

    get vctOri(): Date {
        return this._vctOri;
    }

    set vctOri(value: Date) {
        this._vctOri = new Date(value.toString().replace(/-/g, '\/'));
    }

    get vctOri_data(): number {
        return this._vctOri_data;
    }

    set vctOri_data(value: number) {
        this._vctOri_data = value;
    }

    get hoje(): Date {
        return this._hoje;
    }

    set hoje(value: Date) {
        this._hoje = new Date(value.toString().replace(/-/g, '\/'));
    }

    get cmpOri(): Date {
        return this._cmpOri;
    }

    set cmpOri(value: Date) {
        this._cmpOri = new Date(value.toString().replace(/-/g, '\/'));
    }

    get dias_Venc(): number {
        return this._dias_Venc;
    }

    set dias_Venc(value: number) {
        this._dias_Venc = value;
    }

    get vlr_Abe(): number {
        return this._vlr_Abe;
    }

    set vlr_Abe(value: number) {
        this._vlr_Abe = value;
    }

    get sit_tit(): string {
        return this._sit_tit;
    }

    set sit_tit(value: string) {
        this._sit_tit = value;
    }

    get tit_ban(): string {
        return this._tit_ban;
    }

    set tit_ban(value: string) {
        this._tit_ban = value;
    }

    get doc_ori(): string {
        return this._doc_ori;
    }

    set doc_ori(value: string) {
        this._doc_ori = value;
    }

    get numeroDigitavel(): string {
        return this._numeroDigitavel;
    }

    set numeroDigitavel(value: string) {
        this._numeroDigitavel = value;
    }

    get dataVencimentoCalculado(): Date {
        return this._dataVencimentoCalculado;
    }

    set dataVencimentoCalculado(value: Date) {
        this._dataVencimentoCalculado = value;
    }

    get reciprocidade(): boolean {
        return this._reciprocidade;
    }

    set reciprocidade(value: boolean) {
        this._reciprocidade = value;
    }
}