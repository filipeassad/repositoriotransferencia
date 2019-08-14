export class Parcela {

    private _codCpg: string;
    private _codEmp: number;
    private _datFix: Date;
    private _diaFix: string;
    private _diaPar: number;
    private _diaVenc: number;
    private _qtdPar: number;
    private _vlrCalc: number;

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
     * Getter datFix
     * @return {Date}
     */
	public get datFix(): Date {
		return this._datFix;
	}

    /**
     * Getter diaFix
     * @return {string}
     */
	public get diaFix(): string {
		return this._diaFix;
	}

    /**
     * Getter diaPar
     * @return {number}
     */
	public get diaPar(): number {
		return this._diaPar;
	}

    /**
     * Getter diaVenc
     * @return {number}
     */
	public get diaVenc(): number {
		return this._diaVenc;
	}

    /**
     * Getter qtdPar
     * @return {number}
     */
	public get qtdPar(): number {
		return this._qtdPar;
	}

    /**
     * Getter vlrCalc
     * @return {number}
     */
	public get vlrCalc(): number {
		return this._vlrCalc;
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
     * Setter datFix
     * @param {Date} value
     */
	public set datFix(value: Date) {
		this._datFix = value;
	}

    /**
     * Setter diaFix
     * @param {string} value
     */
	public set diaFix(value: string) {
		this._diaFix = value;
	}

    /**
     * Setter diaPar
     * @param {number} value
     */
	public set diaPar(value: number) {
		this._diaPar = value;
	}

    /**
     * Setter diaVenc
     * @param {number} value
     */
	public set diaVenc(value: number) {
		this._diaVenc = value;
	}

    /**
     * Setter qtdPar
     * @param {number} value
     */
	public set qtdPar(value: number) {
		this._qtdPar = value;
	}

    /**
     * Setter vlrCalc
     * @param {number} value
     */
	public set vlrCalc(value: number) {
		this._vlrCalc = value;
	}

}