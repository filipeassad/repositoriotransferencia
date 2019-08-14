import {Municipio} from "./municipio.model";

export class Beneficiario{

    private _numeroBeneficiario: number;

    private _numSegurado: number;

    private _seqSegurado: number;

    private _seqDependente: number;

    private _ufOrigem: string;

    private _nome: string;

    private _sexo: number;

    private _cpf: string;

    private _rg: string;

    private _orgaoExpeditorRg: string;

    private _ufExpeditorRg: string;

    private _dataValidadeCarteira: Date;

    private _dataNascimento: Date;

    private _estadoCivil: number;

    private _nomePai: string;

    private _nomeMae: string;

    private _codSituacaoBeneficiario: number;

    private _dataSituacao: Date;

    private _emiteCarteira: Date;

    private _telefone: string;

    private _dataCadastro: Date;

    private _usuario: string;

    private _dataEmissaoCartao: Date;

    private _codMunicipioEmissao: number;

    private _codMunicipioEnvio: number;

    private _emitirOficio: string;

    private _numeroOficio: string;

    private _dataAtualizacao: Date;

    private _faixaEtaria: string;

    private _idade: number;

    private _entregaManual: number;

    private _enderecoResidencia: string;

    private _cep: string;

    private _bairro: string;

    private _codigoMunicipio: number;

    private _numeroResidencia: number;

    private _complementoEndereco: string;

    private _celular: string;

    private _email: string;

    private _pisPasep: string;

    private _registroAns: number;

    private _codTipoDependencia: number;

    private _dataUniaoConjugal: Date;

    private _codMotivoImpedimento: number;

    private _situacaoSecundaria: string;

    private _nomeConjuge: string;

    private _ufEndereco: string;

    private _inicioContribuicao: string;

    private _matriculaCassems: string;

    private _cartaoPvc: number;

    private _retirouCartao: number;

    private _numBeneficiarioTitularAnterior: number;

    private _tipoCis: number;

    private _numCns: string;

    private _paisExpeditorRg: number;

    private _codTipoDependenciaAns: number;

    private _cpfProprio: number;

    private _telefone2: string;

    private _possuiCabesp: number;

    private _enderecoInvalido: number;

    private _tipoConsignacao: number;

    private _versaoCartao: number;

    private _idPFJ: number;

    private _situacaoPne: string;

    private _dataAdesaoReciprocidade: Date;

    private _odontoProgramaBebe: string;

    private _enderecoCorrespondencia: string;

    private _cepCorrespondencia: string;

    private _bairroCorrespondencia: string;

    private _codMunicipioCorrespondencia: number;

    private _numCorrespondencia: number;

    private _complementoCorrespondencia: string;

    private _numDnv: string;

    private _confirmacaoBiometrica: string;

    private _conselhoDiretorCassems: string;

    private _liderSindical: string;

    private _municipio: Municipio;

    private _tipoDependencia: any;

    private _descricaoOrgaoLotacao: string;

    private _descricaoLocal: string;

    private _unidadeFederalLocal: string;

    private _descricaoTipoDependente: string;

    private _rgCompleto: string;

    private _tipo: string;

    private _codIBGE: string;

    private _numeroContrato: number;

    private _revalidacao: Date;

    private _compValidadeFinal: Date;

    private _emailPortal: string;

    get compValidadeFinal(): Date {
        return this._compValidadeFinal;
    }

    set compValidadeFinal(value: Date) {
        this._compValidadeFinal = value;
    }

    get numeroBeneficiario(): number {
        return this._numeroBeneficiario;
    }

    set numeroBeneficiario(value: number) {
        this._numeroBeneficiario = value;
    }

    get numSegurado(): number {
        return this._numSegurado;
    }

    set numSegurado(value: number) {
        this._numSegurado = value;
    }

    get seqSegurado(): number {
        return this._seqSegurado;
    }

    set seqSegurado(value: number) {
        this._seqSegurado = value;
    }

    get seqDependente(): number {
        return this._seqDependente;
    }

    set seqDependente(value: number) {
        this._seqDependente = value;
    }

    get ufOrigem(): string {
        return this._ufOrigem;
    }

    set ufOrigem(value: string) {
        this._ufOrigem = value;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        this._nome = value;
    }

    get sexo(): number {
        return this._sexo;
    }

    set sexo(value: number) {
        this._sexo = value;
    }

    get cpf(): string {
        return this._cpf;
    }

    set cpf(value: string) {
        this._cpf = value;
    }

    get rg(): string {
        return this._rg;
    }

    set rg(value: string) {
        this._rg = value;
    }

    get orgaoExpeditorRg(): string {
        return this._orgaoExpeditorRg;
    }

    set orgaoExpeditorRg(value: string) {
        this._orgaoExpeditorRg = value;
    }

    get ufExpeditorRg(): string {
        return this._ufExpeditorRg;
    }

    set ufExpeditorRg(value: string) {
        this._ufExpeditorRg = value;
    }

    get dataValidadeCarteira(): Date {
        return this._dataValidadeCarteira;
    }

    set dataValidadeCarteira(value: Date) {
        this._dataValidadeCarteira = new Date(value.toString().replace(/-/g, '\/'));
    }

    get dataNascimento(): Date {
        return this._dataNascimento;
    }

    set dataNascimento(value: Date) {
        this._dataNascimento = new Date(value.toString().replace(/-/g, '\/'));
    }

    get estadoCivil(): number {
        return this._estadoCivil;
    }

    set estadoCivil(value: number) {
        this._estadoCivil = value;
    }

    get nomePai(): string {
        return this._nomePai;
    }

    set nomePai(value: string) {
        this._nomePai = value;
    }

    get nomeMae(): string {
        return this._nomeMae;
    }

    set nomeMae(value: string) {
        this._nomeMae = value;
    }

    get codSituacaoBeneficiario(): number {
        return this._codSituacaoBeneficiario;
    }

    set codSituacaoBeneficiario(value: number) {
        this._codSituacaoBeneficiario = value;
    }

    get dataSituacao(): Date {
        return this._dataSituacao;
    }

    set dataSituacao(value: Date) {
        this._dataSituacao = new Date(value.toString().replace(/-/g, '\/'));
    }

    get emiteCarteira(): Date {
        return this._emiteCarteira;
    }

    set emiteCarteira(value: Date) {
        this._emiteCarteira = new Date(value.toString().replace(/-/g, '\/'));
    }

    get telefone(): string {
        return this._telefone;
    }

    set telefone(value: string) {
        this._telefone = value;
    }

    get dataCadastro(): Date {
        return this._dataCadastro;
    }

    set dataCadastro(value: Date) {
        this._dataCadastro = new Date(value.toString().replace(/-/g, '\/'));
    }

    get usuario(): string {
        return this._usuario;
    }

    set usuario(value: string) {
        this._usuario = value;
    }

    get dataEmissaoCartao(): Date {
        return this._dataEmissaoCartao;
    }

    set dataEmissaoCartao(value: Date) {
        this._dataEmissaoCartao = new Date(value.toString().replace(/-/g, '\/'));
    }

    get codMunicipioEmissao(): number {
        return this._codMunicipioEmissao;
    }

    set codMunicipioEmissao(value: number) {
        this._codMunicipioEmissao = value;
    }

    get codMunicipioEnvio(): number {
        return this._codMunicipioEnvio;
    }

    set codMunicipioEnvio(value: number) {
        this._codMunicipioEnvio = value;
    }

    get emitirOficio(): string {
        return this._emitirOficio;
    }

    set emitirOficio(value: string) {
        this._emitirOficio = value;
    }

    get numeroOficio(): string {
        return this._numeroOficio;
    }

    set numeroOficio(value: string) {
        this._numeroOficio = value;
    }

    get dataAtualizacao(): Date {
        return this._dataAtualizacao;
    }

    set dataAtualizacao(value: Date) {
        this._dataAtualizacao = new Date(value.toString().replace(/-/g, '\/'));
    }

    get faixaEtaria(): string {
        return this._faixaEtaria;
    }

    set faixaEtaria(value: string) {
        this._faixaEtaria = value;
    }

    get idade(): number {
        return this._idade;
    }

    set idade(value: number) {
        this._idade = value;
    }

    get entregaManual(): number {
        return this._entregaManual;
    }

    set entregaManual(value: number) {
        this._entregaManual = value;
    }

    get enderecoResidencia(): string {
        return this._enderecoResidencia;
    }

    set enderecoResidencia(value: string) {
        this._enderecoResidencia = value;
    }

    get cep(): string {
        return this._cep;
    }

    set cep(value: string) {
        this._cep = value;
    }

    get bairro(): string {
        return this._bairro;
    }

    set bairro(value: string) {
        this._bairro = value;
    }

    get codigoMunicipio(): number {
        return this._codigoMunicipio;
    }

    set codigoMunicipio(value: number) {
        this._codigoMunicipio = value;
    }

    get numeroResidencia(): number {
        return this._numeroResidencia;
    }

    set numeroResidencia(value: number) {
        this._numeroResidencia = value;
    }

    get complementoEndereco(): string {
        return this._complementoEndereco;
    }

    set complementoEndereco(value: string) {
        this._complementoEndereco = value;
    }

    get celular(): string {
        return this._celular;
    }

    set celular(value: string) {
        this._celular = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get pisPasep(): string {
        return this._pisPasep;
    }

    set pisPasep(value: string) {
        this._pisPasep = value;
    }

    get registroAns(): number {
        return this._registroAns;
    }

    set registroAns(value: number) {
        this._registroAns = value;
    }

    get codTipoDependencia(): number {
        return this._codTipoDependencia;
    }

    set codTipoDependencia(value: number) {
        this._codTipoDependencia = value;
    }

    get dataUniaoConjugal(): Date {
        return this._dataUniaoConjugal;
    }

    set dataUniaoConjugal(value: Date) {
        this._dataUniaoConjugal = new Date(value.toString().replace(/-/g, '\/'));
    }

    get codMotivoImpedimento(): number {
        return this._codMotivoImpedimento;
    }

    set codMotivoImpedimento(value: number) {
        this._codMotivoImpedimento = value;
    }

    get situacaoSecundaria(): string {
        return this._situacaoSecundaria;
    }

    set situacaoSecundaria(value: string) {
        this._situacaoSecundaria = value;
    }

    get nomeConjuge(): string {
        return this._nomeConjuge;
    }

    set nomeConjuge(value: string) {
        this._nomeConjuge = value;
    }

    get ufEndereco(): string {
        return this._ufEndereco;
    }

    set ufEndereco(value: string) {
        this._ufEndereco = value;
    }

    get inicioContribuicao(): string {
        return this._inicioContribuicao;
    }

    set inicioContribuicao(value: string) {
        this._inicioContribuicao = value;
    }

    get matriculaCassems(): string {
        return this._matriculaCassems;
    }

    set matriculaCassems(value: string) {
        this._matriculaCassems = value;
    }

    get cartaoPvc(): number {
        return this._cartaoPvc;
    }

    set cartaoPvc(value: number) {
        this._cartaoPvc = value;
    }

    get retirouCartao(): number {
        return this._retirouCartao;
    }

    set retirouCartao(value: number) {
        this._retirouCartao = value;
    }

    get numBeneficiarioTitularAnterior(): number {
        return this._numBeneficiarioTitularAnterior;
    }

    set numBeneficiarioTitularAnterior(value: number) {
        this._numBeneficiarioTitularAnterior = value;
    }

    get tipoCis(): number {
        return this._tipoCis;
    }

    set tipoCis(value: number) {
        this._tipoCis = value;
    }

    get numCns(): string {
        return this._numCns;
    }

    set numCns(value: string) {
        this._numCns = value;
    }

    get paisExpeditorRg(): number {
        return this._paisExpeditorRg;
    }

    set paisExpeditorRg(value: number) {
        this._paisExpeditorRg = value;
    }

    get codTipoDependenciaAns(): number {
        return this._codTipoDependenciaAns;
    }

    set codTipoDependenciaAns(value: number) {
        this._codTipoDependenciaAns = value;
    }

    get cpfProprio(): number {
        return this._cpfProprio;
    }

    set cpfProprio(value: number) {
        this._cpfProprio = value;
    }

    get telefone2(): string {
        return this._telefone2;
    }

    set telefone2(value: string) {
        this._telefone2 = value;
    }

    get possuiCabesp(): number {
        return this._possuiCabesp;
    }

    set possuiCabesp(value: number) {
        this._possuiCabesp = value;
    }

    get enderecoInvalido(): number {
        return this._enderecoInvalido;
    }

    set enderecoInvalido(value: number) {
        this._enderecoInvalido = value;
    }

    get tipoConsignacao(): number {
        return this._tipoConsignacao;
    }

    set tipoConsignacao(value: number) {
        this._tipoConsignacao = value;
    }

    get versaoCartao(): number {
        return this._versaoCartao;
    }

    set versaoCartao(value: number) {
        this._versaoCartao = value;
    }

    get idPFJ(): number {
        return this._idPFJ;
    }

    set idPFJ(value: number) {
        this._idPFJ = value;
    }

    get situacaoPne(): string {
        return this._situacaoPne;
    }

    set situacaoPne(value: string) {
        this._situacaoPne = value;
    }

    get dataAdesaoReciprocidade(): Date {
        return this._dataAdesaoReciprocidade;
    }

    set dataAdesaoReciprocidade(value: Date) {
        this._dataAdesaoReciprocidade = new Date(value.toString().replace(/-/g, '\/'));
    }

    get odontoProgramaBebe(): string {
        return this._odontoProgramaBebe;
    }

    set odontoProgramaBebe(value: string) {
        this._odontoProgramaBebe = value;
    }

    get enderecoCorrespondencia(): string {
        return this._enderecoCorrespondencia;
    }

    set enderecoCorrespondencia(value: string) {
        this._enderecoCorrespondencia = value;
    }

    get cepCorrespondencia(): string {
        return this._cepCorrespondencia;
    }

    set cepCorrespondencia(value: string) {
        this._cepCorrespondencia = value;
    }

    get bairroCorrespondencia(): string {
        return this._bairroCorrespondencia;
    }

    set bairroCorrespondencia(value: string) {
        this._bairroCorrespondencia = value;
    }

    get codMunicipioCorrespondencia(): number {
        return this._codMunicipioCorrespondencia;
    }

    set codMunicipioCorrespondencia(value: number) {
        this._codMunicipioCorrespondencia = value;
    }

    get numCorrespondencia(): number {
        return this._numCorrespondencia;
    }

    set numCorrespondencia(value: number) {
        this._numCorrespondencia = value;
    }

    get complementoCorrespondencia(): string {
        return this._complementoCorrespondencia;
    }

    set complementoCorrespondencia(value: string) {
        this._complementoCorrespondencia = value;
    }

    get numDnv(): string {
        return this._numDnv;
    }

    set numDnv(value: string) {
        this._numDnv = value;
    }

    get confirmacaoBiometrica(): string {
        return this._confirmacaoBiometrica;
    }

    set confirmacaoBiometrica(value: string) {
        this._confirmacaoBiometrica = value;
    }

    get conselhoDiretorCassems(): string {
        return this._conselhoDiretorCassems;
    }

    set conselhoDiretorCassems(value: string) {
        this._conselhoDiretorCassems = value;
    }

    get liderSindical(): string {
        return this._liderSindical;
    }

    set liderSindical(value: string) {
        this._liderSindical = value;
    }

    get municipio(): Municipio {
        return this._municipio;
    }

    set municipio(value: Municipio) {
        this._municipio = value;
    }

    get tipoDependencia(): any {
        return this._tipoDependencia;
    }

    set tipoDependencia(value: any) {
        this._tipoDependencia = value;
    }

    get descricaoOrgaoLotacao(): string {
        return this._descricaoOrgaoLotacao;
    }

    set descricaoOrgaoLotacao(value: string) {
        this._descricaoOrgaoLotacao = value;
    }

    get descricaoLocal(): string {
        return this._descricaoLocal;
    }

    set descricaoLocal(value: string) {
        this._descricaoLocal = value;
    }

    get unidadeFederalLocal(): string {
        return this._unidadeFederalLocal;
    }

    set unidadeFederalLocal(value: string) {
        this._unidadeFederalLocal = value;
    }

    get descricaoTipoDependente(): string {
        return this._descricaoTipoDependente;
    }

    set descricaoTipoDependente(value: string) {
        this._descricaoTipoDependente = value;
    }

    get rgCompleto(): string {
        return this._rgCompleto;
    }

    set rgCompleto(value: string) {
        this._rgCompleto = value;
    }

    get tipo(): string {
        return this._tipo;
    }

    set tipo(value: string) {
        this._tipo = value;
    }

    get codIBGE(): string {
        return this._codIBGE;
    }

    set codIBGE(value: string) {
        this._codIBGE = value;
    }

    get numeroContrato(): number {
        return this._numeroContrato;
    }

    set numeroContrato(value: number) {
        this._numeroContrato = value;
    }

    get revalidacao(): Date {
        return this._revalidacao;
    }

    set revalidacao(value: Date) {
        this._revalidacao = new Date(value.toString().replace(/-/g, '\/'));
    }

    get emailPortal(): string {
        return this._emailPortal;
    }

    set emailPortal(value: string) {
        this._emailPortal = value;
    }
}
