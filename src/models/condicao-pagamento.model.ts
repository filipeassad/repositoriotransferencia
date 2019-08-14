import { Parcela } from "./parcela.model";

export class CondicaoPagamento {

    private _abrCpg: string;
    private _aplCpg: string;
    private _avista: number;
    private _codCpg: string;
    private _codEmp: number;
    private _codPdv: string;
    private _desCpg: string;
    private _diaEsp: number;
    private _diaMe1: number;
    private _parcelas: Parcela[];

    /**
     * Getter abrCpg
     * @return {string}
     */
	public get abrCpg(): string {
		return this._abrCpg;
	}

    /**
     * Getter aplCpg
     * @return {string}
     */
	public get aplCpg(): string {
		return this._aplCpg;
	}

    /**
     * Getter avista
     * @return {number}
     */
	public get avista(): number {
		return this._avista;
	}

    /**
     * Getter codCpg
     * @return {string}
     */
	public get codCpg(): string {
		return this._codCpg;
	}

    /**
     * Getter codEmp
     * @return {number}
     */
	public get codEmp(): number {
		return this._codEmp;
	}

    /**
     * Getter codPdv
     * @return {string}
     */
	public get codPdv(): string {
		return this._codPdv;
	}

    /**
     * Getter desCpg
     * @return {string}
     */
	public get desCpg(): string {
		return this._desCpg;
	}

    /**
     * Getter diaEsp
     * @return {number}
     */
	public get diaEsp(): number {
		return this._diaEsp;
	}

    /**
     * Getter diaMe1
     * @return {number}
     */
	public get diaMe1(): number {
		return this._diaMe1;
	}

    /**
     * Getter parcelas
     * @return {Parcela[]}
     */
	public get parcelas(): Parcela[] {
		return this._parcelas;
	}

    /**
     * Setter abrCpg
     * @param {string} value
     */
	public set abrCpg(value: string) {
		this._abrCpg = value;
	}

    /**
     * Setter aplCpg
     * @param {string} value
     */
	public set aplCpg(value: string) {
		this._aplCpg = value;
	}

    /**
     * Setter avista
     * @param {number} value
     */
	public set avista(value: number) {
		this._avista = value;
	}

    /**
     * Setter codCpg
     * @param {string} value
     */
	public set codCpg(value: string) {
		this._codCpg = value;
	}

    /**
     * Setter codEmp
     * @param {number} value
     */
	public set codEmp(value: number) {
		this._codEmp = value;
	}

    /**
     * Setter codPdv
     * @param {string} value
     */
	public set codPdv(value: string) {
		this._codPdv = value;
	}

    /**
     * Setter desCpg
     * @param {string} value
     */
	public set desCpg(value: string) {
		this._desCpg = value;
	}

    /**
     * Setter diaEsp
     * @param {number} value
     */
	public set diaEsp(value: number) {
		this._diaEsp = value;
	}

    /**
     * Setter diaMe1
     * @param {number} value
     */
	public set diaMe1(value: number) {
		this._diaMe1 = value;
	}

    /**
     * Setter parcelas
     * @param {Parcela[]} value
     */
	public set parcelas(value: Parcela[]) {
		this._parcelas = value;
	}

}