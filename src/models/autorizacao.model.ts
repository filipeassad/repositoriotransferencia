import { Evento } from "./evento.model";

export class Autorizacao {
    private _autorizacao: number;
    private _beneficiario: string;
    private _dataInclusao: Date;
    private _dataValidade: Date;
    private _descricaoTipoAutorizacao: string;
    private _eventos: Evento[];
    private _executante: string;
    private _handleAutorizacao: number;
    private _handleBeneficiario: number;
    private _handleExecutante: number;
    private _handleSolicitante: number;
    private _nrGuiaSolicitacao: string;
    private _senha: number;
    private _senhaGuiaSolicitacao: string;
    private _solicitante: string;
    private _solicitanteCRM: string;
    private _statusAutorizacao: string;
    private _temFatura: number;


    /**
     * Getter autorizacao
     * @return {number}
     */
	public get autorizacao(): number {
		return this._autorizacao;
	}

    /**
     * Getter beneficiario
     * @return {string}
     */
	public get beneficiario(): string {
		return this._beneficiario;
	}

    /**
     * Getter dataInclusao
     * @return {Date}
     */
	public get dataInclusao(): Date {
		return this._dataInclusao;
	}

    /**
     * Getter dataValidade
     * @return {Date}
     */
	public get dataValidade(): Date {
		return this._dataValidade;
	}

    /**
     * Getter descricaoTipoAutorizacao
     * @return {string}
     */
	public get descricaoTipoAutorizacao(): string {
		return this._descricaoTipoAutorizacao;
	}

    /**
     * Getter eventos
     * @return {Evento[]}
     */
	public get eventos(): Evento[] {
		return this._eventos;
	}

    /**
     * Getter executante
     * @return {string}
     */
	public get executante(): string {
		return this._executante;
	}

    /**
     * Getter handleAutorizacao
     * @return {number}
     */
	public get handleAutorizacao(): number {
		return this._handleAutorizacao;
	}

    /**
     * Getter handleBeneficiario
     * @return {number}
     */
	public get handleBeneficiario(): number {
		return this._handleBeneficiario;
	}

    /**
     * Getter handleExecutante
     * @return {number}
     */
	public get handleExecutante(): number {
		return this._handleExecutante;
	}

    /**
     * Getter handleSolicitante
     * @return {number}
     */
	public get handleSolicitante(): number {
		return this._handleSolicitante;
	}

    /**
     * Getter nrGuiaSolicitacao
     * @return {string}
     */
	public get nrGuiaSolicitacao(): string {
		return this._nrGuiaSolicitacao;
	}

    /**
     * Getter senha
     * @return {number}
     */
	public get senha(): number {
		return this._senha;
	}

    /**
     * Getter senhaGuiaSolicitacao
     * @return {string}
     */
	public get senhaGuiaSolicitacao(): string {
		return this._senhaGuiaSolicitacao;
	}

    /**
     * Getter solicitante
     * @return {string}
     */
	public get solicitante(): string {
		return this._solicitante;
	}

    /**
     * Getter solicitanteCRM
     * @return {string}
     */
	public get solicitanteCRM(): string {
		return this._solicitanteCRM;
	}

    /**
     * Getter statusAutorizacao
     * @return {string}
     */
	public get statusAutorizacao(): string {
		return this._statusAutorizacao;
	}

    /**
     * Getter temFatura
     * @return {number}
     */
	public get temFatura(): number {
		return this._temFatura;
	}

    /**
     * Setter autorizacao
     * @param {number} value
     */
	public set autorizacao(value: number) {
		this._autorizacao = value;
	}

    /**
     * Setter beneficiario
     * @param {string} value
     */
	public set beneficiario(value: string) {
		this._beneficiario = value;
	}

    /**
     * Setter dataInclusao
     * @param {Date} value
     */
	public set dataInclusao(value: Date) {
		this._dataInclusao = new Date(value.toString().replace(/-/g, '\/'));;
	}

    /**
     * Setter dataValidade
     * @param {Date} value
     */
	public set dataValidade(value: Date) {
		this._dataValidade = new Date(value.toString().replace(/-/g, '\/'));;
	}

    /**
     * Setter descricaoTipoAutorizacao
     * @param {string} value
     */
	public set descricaoTipoAutorizacao(value: string) {
		this._descricaoTipoAutorizacao = value;
	}

    /**
     * Setter eventos
     * @param {Evento[]} value
     */
	public set eventos(value: Evento[]) {
		this._eventos = value;
	}

    /**
     * Setter executante
     * @param {string} value
     */
	public set executante(value: string) {
		this._executante = value;
	}

    /**
     * Setter handleAutorizacao
     * @param {number} value
     */
	public set handleAutorizacao(value: number) {
		this._handleAutorizacao = value;
	}

    /**
     * Setter handleBeneficiario
     * @param {number} value
     */
	public set handleBeneficiario(value: number) {
		this._handleBeneficiario = value;
	}

    /**
     * Setter handleExecutante
     * @param {number} value
     */
	public set handleExecutante(value: number) {
		this._handleExecutante = value;
	}

    /**
     * Setter handleSolicitante
     * @param {number} value
     */
	public set handleSolicitante(value: number) {
		this._handleSolicitante = value;
	}

    /**
     * Setter nrGuiaSolicitacao
     * @param {string} value
     */
	public set nrGuiaSolicitacao(value: string) {
		this._nrGuiaSolicitacao = value;
	}

    /**
     * Setter senha
     * @param {number} value
     */
	public set senha(value: number) {
		this._senha = value;
	}

    /**
     * Setter senhaGuiaSolicitacao
     * @param {string} value
     */
	public set senhaGuiaSolicitacao(value: string) {
		this._senhaGuiaSolicitacao = value;
	}

    /**
     * Setter solicitante
     * @param {string} value
     */
	public set solicitante(value: string) {
		this._solicitante = value;
	}

    /**
     * Setter solicitanteCRM
     * @param {string} value
     */
	public set solicitanteCRM(value: string) {
		this._solicitanteCRM = value;
	}

    /**
     * Setter statusAutorizacao
     * @param {string} value
     */
	public set statusAutorizacao(value: string) {
		this._statusAutorizacao = value;
	}

    /**
     * Setter temFatura
     * @param {number} value
     */
	public set temFatura(value: number) {
		this._temFatura = value;
	}

}