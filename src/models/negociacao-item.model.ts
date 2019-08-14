export class NegociacaoItem {

    private _handleFatura: number;
    private _handleTipofatura: number;
    private _sniCondicaopagamento: number;
    private _sniDataNegociacao: Date;
    private _sniDataconfirmnegociacao: Date;
    private _sniDescTipofatura: string;
    private _sniId: number;
    private _sniNumeroFatura: number;
    private _sniQtdparcelas: number;
    private _sniTipotitulo: string;
    private _sniValorentrada: number;
    private _sniValorparcelas: number;
    private _sniValortotal: number;

    /**
     * Getter handleFatura
     * @return {number}
     */
	public get handleFatura(): number {
		return this.handleFatura;
	}

    /**
     * Getter handleTipofatura
     * @return {number}
     */
	public get handleTipofatura(): number {
		return this.handleTipofatura;
	}

    /**
     * Getter sniCondicaopagamento
     * @return {number}
     */
	public get sniCondicaopagamento(): number {
		return this.sniCondicaopagamento;
	}

    /**
     * Getter sniDataNegociacao
     * @return {Date}
     */
	public get sniDataNegociacao(): Date {
		return this.sniDataNegociacao;
	}

    /**
     * Getter sniDataconfirmnegociacao
     * @return {Date}
     */
	public get sniDataconfirmnegociacao(): Date {
		return this.sniDataconfirmnegociacao;
	}

    /**
     * Getter sniDescTipofatura
     * @return {string}
     */
	public get sniDescTipofatura(): string {
		return this.sniDescTipofatura;
	}

    /**
     * Getter sniId
     * @return {number}
     */
	public get sniId(): number {
		return this.sniId;
	}

    /**
     * Getter sniNumeroFatura
     * @return {number}
     */
	public get sniNumeroFatura(): number {
		return this.sniNumeroFatura;
	}

    /**
     * Getter sniQtdparcelas
     * @return {number}
     */
	public get sniQtdparcelas(): number {
		return this.sniQtdparcelas;
	}

    /**
     * Getter sniTipotitulo
     * @return {string}
     */
	public get sniTipotitulo(): string {
		return this.sniTipotitulo;
	}

    /**
     * Getter sniValorentrada
     * @return {number}
     */
	public get sniValorentrada(): number {
		return this.sniValorentrada;
	}

    /**
     * Getter sniValorparcelas
     * @return {number}
     */
	public get sniValorparcelas(): number {
		return this.sniValorparcelas;
	}

    /**
     * Getter sniValortotal
     * @return {number}
     */
	public get sniValortotal(): number {
		return this.sniValortotal;
	}

    /**
     * Setter handleFatura
     * @param {number} value
     */
	public set handleFatura(value: number) {
		this.handleFatura = value;
	}

    /**
     * Setter handleTipofatura
     * @param {number} value
     */
	public set handleTipofatura(value: number) {
		this.handleTipofatura = value;
	}

    /**
     * Setter sniCondicaopagamento
     * @param {number} value
     */
	public set sniCondicaopagamento(value: number) {
		this.sniCondicaopagamento = value;
	}

    /**
     * Setter sniDataNegociacao
     * @param {Date} value
     */
	public set sniDataNegociacao(value: Date) {
		this.sniDataNegociacao = new Date(value.toString().replace(/-/g, '\/'));
	}

    /**
     * Setter sniDataconfirmnegociacao
     * @param {Date} value
     */
	public set sniDataconfirmnegociacao(value: Date) {
		this.sniDataconfirmnegociacao = new Date(value.toString().replace(/-/g, '\/'));
	}

    /**
     * Setter sniDescTipofatura
     * @param {string} value
     */
	public set sniDescTipofatura(value: string) {
		this.sniDescTipofatura = value;
	}

    /**
     * Setter sniId
     * @param {number} value
     */
	public set sniId(value: number) {
		this.sniId = value;
	}

    /**
     * Setter sniNumeroFatura
     * @param {number} value
     */
	public set sniNumeroFatura(value: number) {
		this.sniNumeroFatura = value;
	}

    /**
     * Setter sniQtdparcelas
     * @param {number} value
     */
	public set sniQtdparcelas(value: number) {
		this.sniQtdparcelas = value;
	}

    /**
     * Setter sniTipotitulo
     * @param {string} value
     */
	public set sniTipotitulo(value: string) {
		this.sniTipotitulo = value;
	}

    /**
     * Setter sniValorentrada
     * @param {number} value
     */
	public set sniValorentrada(value: number) {
		this.sniValorentrada = value;
	}

    /**
     * Setter sniValorparcelas
     * @param {number} value
     */
	public set sniValorparcelas(value: number) {
		this.sniValorparcelas = value;
	}

    /**
     * Setter sniValortotal
     * @param {number} value
     */
	public set sniValortotal(value: number) {
		this.sniValortotal = value;
	}

}