import {PrestadorEspecialidade} from "./prestador-especialidade.model";

export class Prestador{

    private _codCredenciado: number;
    private _nome: string;
    private _codMunicipio: number;
    private _municipio: string;
    private _uf: string;
    private _codCategoria: number;
    private _descCategoria: string;
    private _codEspecialidade: number;
    private _descEspecialidade: string;
    private _cnpj: string;
    private _cpf: string;
    private _razaoSocial: string;
    private _numConselho: string;
    private _ufConselho: string;
    private _tipoConselho: string;
    private _tipoPessoa: number;
    private _especialidades: PrestadorEspecialidade[];


    get codCredenciado(): number {
        return this._codCredenciado;
    }

    set codCredenciado(value: number) {
        this._codCredenciado = value;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        this._nome = value;
    }

    get codMunicipio(): number {
        return this._codMunicipio;
    }

    set codMunicipio(value: number) {
        this._codMunicipio = value;
    }

    get municipio(): string {
        return this._municipio;
    }

    set municipio(value: string) {
        this._municipio = value;
    }

    get uf(): string {
        return this._uf;
    }

    set uf(value: string) {
        this._uf = value;
    }

    get codCategoria(): number {
        return this._codCategoria;
    }

    set codCategoria(value: number) {
        this._codCategoria = value;
    }

    get descCategoria(): string {
        return this._descCategoria;
    }

    set descCategoria(value: string) {
        this._descCategoria = value;
    }

    get codEspecialidade(): number {
        return this._codEspecialidade;
    }

    set codEspecialidade(value: number) {
        this._codEspecialidade = value;
    }

    get descEspecialidade(): string {
        return this._descEspecialidade;
    }

    set descEspecialidade(value: string) {
        this._descEspecialidade = value;
    }

    get cnpj(): string {
        return this._cnpj;
    }

    set cnpj(value: string) {
        this._cnpj = value;
    }

    get cpf(): string {
        return this._cpf;
    }

    set cpf(value: string) {
        this._cpf = value;
    }

    get razaoSocial(): string {
        return this._razaoSocial;
    }

    set razaoSocial(value: string) {
        this._razaoSocial = value;
    }

    get numConselho(): string {
        return this._numConselho;
    }

    set numConselho(value: string) {
        this._numConselho = value;
    }

    get ufConselho(): string {
        return this._ufConselho;
    }

    set ufConselho(value: string) {
        this._ufConselho = value;
    }

    get tipoConselho(): string {
        return this._tipoConselho;
    }

    set tipoConselho(value: string) {
        this._tipoConselho = value;
    }

    get tipoPessoa(): number {
        return this._tipoPessoa;
    }

    set tipoPessoa(value: number) {
        this._tipoPessoa = value;
    }

    get especialidades(): PrestadorEspecialidade[] {
        return this._especialidades;
    }

    set especialidades(value: PrestadorEspecialidade[]) {
        this._especialidades = value;
    }
}