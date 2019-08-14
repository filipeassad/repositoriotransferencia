import { NegociacaoItem } from "./negociacao-item.model";

export class Negociacao {

    private _handleAutorizacao: number;
    private _snDataaceite: Date;
    private _snDatacadastro: Date;
    private _snDatarejeicao: Date;
    private _snId: number;
    private _snInfoadicional: string;
    private _snOrigem: number;
    private _snValortotal: number;
    private _tbSolNegociacaoItems: NegociacaoItem[];

    /**
     * Getter handleAutorizacao
     * @return {number}
     */
	public get handleAutorizacao(): number {
		return this.handleAutorizacao;
	}

    /**
     * Getter snDataaceite
     * @return {Date}
     */
	public get snDataaceite(): Date {
		return this.snDataaceite;
	}

    /**
     * Getter snDatacadastro
     * @return {Date}
     */
	public get snDatacadastro(): Date {
		return this.snDatacadastro;
	}

    /**
     * Getter snDatarejeicao
     * @return {Date}
     */
	public get snDatarejeicao(): Date {
		return this.snDatarejeicao;
	}

    /**
     * Getter snId
     * @return {number}
     */
	public get snId(): number {
		return this.snId;
	}

    /**
     * Getter snInfoadicional
     * @return {string}
     */
	public get snInfoadicional(): string {
		return this.snInfoadicional;
	}

    /**
     * Getter snOrigem
     * @return {number}
     */
	public get snOrigem(): number {
		return this.snOrigem;
	}

    /**
     * Getter snValortotal
     * @return {number}
     */
	public get snValortotal(): number {
		return this.snValortotal;
	}

    /**
     * Getter tbSolNegociacaoItems
     * /
     * @return {NegociacaoItem[]}
     */
	public get tbSolNegociacaoItems(): NegociacaoItem[] {
		return this.tbSolNegociacaoItems;
	}

    /**
     * Setter handleAutorizacao
     * @param {number} value
     */
	public set handleAutorizacao(value: number) {
		this.handleAutorizacao = value;
	}

    /**
     * Setter snDataaceite
     * @param {Date} value
     */
	public set snDataaceite(value: Date) {
		this.snDataaceite = new Date(value.toString().replace(/-/g, '\/'));
	}

    /**
     * Setter snDatacadastro
     * @param {Date} value
     */
	public set snDatacadastro(value: Date) {
		this.snDatacadastro = new Date(value.toString().replace(/-/g, '\/'));
	}

    /**
     * Setter snDatarejeicao
     * @param {Date} value
     */
	public set snDatarejeicao(value: Date) {
		this.snDatarejeicao = new Date(value.toString().replace(/-/g, '\/'));
	}

    /**
     * Setter snId
     * @param {number} value
     */
	public set snId(value: number) {
		this.snId = value;
	}

    /**
     * Setter snInfoadicional
     * @param {string} value
     */
	public set snInfoadicional(value: string) {
		this.snInfoadicional = value;
	}

    /**
     * Setter snOrigem
     * @param {number} value
     */
	public set snOrigem(value: number) {
		this.snOrigem = value;
	}

    /**
     * Setter snValortotal
     * @param {number} value
     */
	public set snValortotal(value: number) {
		this.snValortotal = value;
	}

    /**
     * Setter tbSolNegociacaoItems
     * @param {NegociacaoItem[]} value
     */
	public set tbSolNegociacaoItems(value: NegociacaoItem[]) {
		this.tbSolNegociacaoItems = value;
	}
}
