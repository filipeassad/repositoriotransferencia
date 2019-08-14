/**
 * Baseada na seguinte classe do SISGS br.com.ben.oracle.beneficiario.EnViPortalBeneficiario
 */
export class EnViPortalBeneficiario {

    /** @var int|null */
    private _handle: number;

    /** @var int|null */
    private _benId: number;

    /** @var string|null */
    private _matriculaCassems: string;

    /** @var string|null */
    private _nome: string;

    /** @var string|null */
    private _rg: string;

    /** @var string|null */
    private _cpf: string;

    /** @var string|null */
    private _orgaoExpRg: string;

    /** @var int|null */
    private _numSegurado: number;

    /** @var int|null */
    private _seqSegurado: number;

    /** @var int|null */
    private _handleTitular: number;

    /** @var int|null */
    private _benIdTitular: number;

    /** @var string|null */
    private _dataNascimento: string;

    /** @var int|null */
    private _idade: number;

    /** @var string|null */
    private _sexo: string;

    /** @var int|null */
    private _codMunicipio: number;

    /** @var string|null */
    private _numeroCns: string;

    /** @var string|null */
    private _nomeMae: string;

    /** @var string|null */
    private _nomePai: string;

    /** @var string|null */
    private _tipoDependencia: string;

    /** @var int|null */
    private _codDependencia: number;

    /** @var string|null */
    private _descricaoDependencia: string;

    /** @var string|null */
    private _municipioNascimento: string;

    /** @var int|null */
    private _estadoCivil: number;

    /** @var string|null */
    private _descricaoEstadoCivil: string;

    /** @var string|null */
    private _titular: string;

    /** @var int|null */
    private _situacaoBenef: number;

    /** @var string|null */
    private _dataCancelamento: string;

    /** @var string|null */
    private _codMotivoCancelamento: string;

    /** @var string|null */
    private _motivoCancelamento: string;

    /** @var string|null */
    private _dataBloqueio: string;

    /** @var string|null */
    private _codMotivoBloqueio: string;

    /** @var string|null */
    private _motivoBloqueio: string;

    /** @var string|null */
    private _faixaEtaria: string;

    /** @var string|null */
    private _dataAdesao: string;

    /** @var string|null */
    private _compValidadeFinal: string;

    /** @var string|null */
    private _dataValidadeFinal: string;

    /** @var int|null */
    private _idContrato: number;

    /** @var int|null */
    private _codContrato: number;

    /** @var string|null */
    private _descricaoContrato: string;

    /** @var string|null */
    private _reciprocidade: string;

    /** @var string|null */
    private _dataCadastro: string;

    /** @var int|null */
    private _codProduto: number;

    /** @var string|null */
    private _descricaoProduto: string;

    /** @var string|null */
    private _codPlanoAns: string;

    /** @var string|null */
    private _descricaoPlanoAns: string;

    /** @var string|null */
    private _tipoContratacao: string;

    /** @var string|null */
    private _regulamentacaoPlano: string;

    /** @var string|null */
    private _segmentacaoAssistencial: string;

    /** @var string|null */
    private _codVinculo: string;

    /** @var string|null */
    private _descricaoBenefOrgaoVinculo: string;

    /** @var int|null */
    private _statusVinculo: number;

    /** @var int|null */
    private _gerenciavel: number;

    /** @var string|null */
    private _matriculaFolha: string;

    /** @var int|null */
    private _codAcomodacao: number;

    /** @var string|null */
    private _descricaoAcomodacao: string;

    /** @var int|null */
    private _codEndereco: number;

    /** @var string|null */
    private _enderecoResidencial: string;

    /** @var int|null */
    private _numeroResidencial: number;

    /** @var string|null */
    private _cep: string;

    /** @var string|null */
    private _bairro: string;

    /** @var string|null */
    private _complementoEndereco: string;

    /** @var int|null */
    private _codMunicipioResidencial: number;

    /** @var string|null */
    private _municipioResidencial: string;

    /** @var int|null */
    private _codEstadoResidencial: number;

    /** @var string|null */
    private _estadoResidencial: string;

    /** @var string|null */
    private _ufResidencial: string;

    /** @var int|null */
    private _codPaisResidencial: number;

    /** @var string|null */
    private _paisResidencial: string;

    /** @var string|null */
    private _celular: string;

    /** @var string|null */
    private _telefone: string;

    /** @var string|null */
    private _email: string;

    /** @var string|null */
    private _emailPortal: string;

    /** @var string|null */
    private _celularContato: string;


    get handle(): number {
        return this._handle;
    }

    set handle(value: number) {
        this._handle = value;
    }

    get benId(): number {
        return this._benId;
    }

    set benId(value: number) {
        this._benId = value;
    }

    get matriculaCassems(): string {
        return this._matriculaCassems;
    }

    set matriculaCassems(value: string) {
        this._matriculaCassems = value;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        this._nome = value;
    }

    get rg(): string {
        return this._rg;
    }

    set rg(value: string) {
        this._rg = value;
    }

    get cpf(): string {
        return this._cpf;
    }

    set cpf(value: string) {
        this._cpf = value;
    }

    get orgaoExpRg(): string {
        return this._orgaoExpRg;
    }

    set orgaoExpRg(value: string) {
        this._orgaoExpRg = value;
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

    get handleTitular(): number {
        return this._handleTitular;
    }

    set handleTitular(value: number) {
        this._handleTitular = value;
    }

    get benIdTitular(): number {
        return this._benIdTitular;
    }

    set benIdTitular(value: number) {
        this._benIdTitular = value;
    }

    get dataNascimento(): string {
        return this._dataNascimento;
    }

    set dataNascimento(value: string) {
        this._dataNascimento = value;
    }

    get idade(): number {
        return this._idade;
    }

    set idade(value: number) {
        this._idade = value;
    }

    get sexo(): string {
        return this._sexo;
    }

    set sexo(value: string) {
        this._sexo = value;
    }

    get codMunicipio(): number {
        return this._codMunicipio;
    }

    set codMunicipio(value: number) {
        this._codMunicipio = value;
    }

    get numeroCns(): string {
        return this._numeroCns;
    }

    set numeroCns(value: string) {
        this._numeroCns = value;
    }

    get nomeMae(): string {
        return this._nomeMae;
    }

    set nomeMae(value: string) {
        this._nomeMae = value;
    }

    get nomePai(): string {
        return this._nomePai;
    }

    set nomePai(value: string) {
        this._nomePai = value;
    }

    get tipoDependencia(): string {
        return this._tipoDependencia;
    }

    set tipoDependencia(value: string) {
        this._tipoDependencia = value;
    }

    get codDependencia(): number {
        return this._codDependencia;
    }

    set codDependencia(value: number) {
        this._codDependencia = value;
    }

    get descricaoDependencia(): string {
        return this._descricaoDependencia;
    }

    set descricaoDependencia(value: string) {
        this._descricaoDependencia = value;
    }

    get municipioNascimento(): string {
        return this._municipioNascimento;
    }

    set municipioNascimento(value: string) {
        this._municipioNascimento = value;
    }

    get estadoCivil(): number {
        return this._estadoCivil;
    }

    set estadoCivil(value: number) {
        this._estadoCivil = value;
    }

    get descricaoEstadoCivil(): string {
        return this._descricaoEstadoCivil;
    }

    set descricaoEstadoCivil(value: string) {
        this._descricaoEstadoCivil = value;
    }

    get titular(): string {
        return this._titular;
    }

    set titular(value: string) {
        this._titular = value;
    }

    get situacaoBenef(): number {
        return this._situacaoBenef;
    }

    set situacaoBenef(value: number) {
        this._situacaoBenef = value;
    }

    get dataCancelamento(): string {
        return this._dataCancelamento;
    }

    set dataCancelamento(value: string) {
        this._dataCancelamento = value;
    }

    get codMotivoCancelamento(): string {
        return this._codMotivoCancelamento;
    }

    set codMotivoCancelamento(value: string) {
        this._codMotivoCancelamento = value;
    }

    get motivoCancelamento(): string {
        return this._motivoCancelamento;
    }

    set motivoCancelamento(value: string) {
        this._motivoCancelamento = value;
    }

    get dataBloqueio(): string {
        return this._dataBloqueio;
    }

    set dataBloqueio(value: string) {
        this._dataBloqueio = value;
    }

    get codMotivoBloqueio(): string {
        return this._codMotivoBloqueio;
    }

    set codMotivoBloqueio(value: string) {
        this._codMotivoBloqueio = value;
    }

    get motivoBloqueio(): string {
        return this._motivoBloqueio;
    }

    set motivoBloqueio(value: string) {
        this._motivoBloqueio = value;
    }

    get faixaEtaria(): string {
        return this._faixaEtaria;
    }

    set faixaEtaria(value: string) {
        this._faixaEtaria = value;
    }

    get dataAdesao(): string {
        return this._dataAdesao;
    }

    set dataAdesao(value: string) {
        this._dataAdesao = value;
    }

    get compValidadeFinal(): string {
        return this._compValidadeFinal;
    }

    set compValidadeFinal(value: string) {
        this._compValidadeFinal = value;
    }

    get dataValidadeFinal(): string {
        return this._dataValidadeFinal;
    }

    set dataValidadeFinal(value: string) {
        this._dataValidadeFinal = value;
    }

    get idContrato(): number {
        return this._idContrato;
    }

    set idContrato(value: number) {
        this._idContrato = value;
    }

    get codContrato(): number {
        return this._codContrato;
    }

    set codContrato(value: number) {
        this._codContrato = value;
    }

    get descricaoContrato(): string {
        return this._descricaoContrato;
    }

    set descricaoContrato(value: string) {
        this._descricaoContrato = value;
    }

    get reciprocidade(): string {
        return this._reciprocidade;
    }

    set reciprocidade(value: string) {
        this._reciprocidade = value;
    }

    get dataCadastro(): string {
        return this._dataCadastro;
    }

    set dataCadastro(value: string) {
        this._dataCadastro = value;
    }

    get codProduto(): number {
        return this._codProduto;
    }

    set codProduto(value: number) {
        this._codProduto = value;
    }

    get descricaoProduto(): string {
        return this._descricaoProduto;
    }

    set descricaoProduto(value: string) {
        this._descricaoProduto = value;
    }

    get codPlanoAns(): string {
        return this._codPlanoAns;
    }

    set codPlanoAns(value: string) {
        this._codPlanoAns = value;
    }

    get descricaoPlanoAns(): string {
        return this._descricaoPlanoAns;
    }

    set descricaoPlanoAns(value: string) {
        this._descricaoPlanoAns = value;
    }

    get tipoContratacao(): string {
        return this._tipoContratacao;
    }

    set tipoContratacao(value: string) {
        this._tipoContratacao = value;
    }

    get regulamentacaoPlano(): string {
        return this._regulamentacaoPlano;
    }

    set regulamentacaoPlano(value: string) {
        this._regulamentacaoPlano = value;
    }

    get segmentacaoAssistencial(): string {
        return this._segmentacaoAssistencial;
    }

    set segmentacaoAssistencial(value: string) {
        this._segmentacaoAssistencial = value;
    }

    get codVinculo(): string {
        return this._codVinculo;
    }

    set codVinculo(value: string) {
        this._codVinculo = value;
    }

    get descricaoBenefOrgaoVinculo(): string {
        return this._descricaoBenefOrgaoVinculo;
    }

    set descricaoBenefOrgaoVinculo(value: string) {
        this._descricaoBenefOrgaoVinculo = value;
    }

    get statusVinculo(): number {
        return this._statusVinculo;
    }

    set statusVinculo(value: number) {
        this._statusVinculo = value;
    }

    get gerenciavel(): number {
        return this._gerenciavel;
    }

    set gerenciavel(value: number) {
        this._gerenciavel = value;
    }

    get matriculaFolha(): string {
        return this._matriculaFolha;
    }

    set matriculaFolha(value: string) {
        this._matriculaFolha = value;
    }

    get codAcomodacao(): number {
        return this._codAcomodacao;
    }

    set codAcomodacao(value: number) {
        this._codAcomodacao = value;
    }

    get descricaoAcomodacao(): string {
        return this._descricaoAcomodacao;
    }

    set descricaoAcomodacao(value: string) {
        this._descricaoAcomodacao = value;
    }

    get codEndereco(): number {
        return this._codEndereco;
    }

    set codEndereco(value: number) {
        this._codEndereco = value;
    }

    get enderecoResidencial(): string {
        return this._enderecoResidencial;
    }

    set enderecoResidencial(value: string) {
        this._enderecoResidencial = value;
    }

    get numeroResidencial(): number {
        return this._numeroResidencial;
    }

    set numeroResidencial(value: number) {
        this._numeroResidencial = value;
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

    get complementoEndereco(): string {
        return this._complementoEndereco;
    }

    set complementoEndereco(value: string) {
        this._complementoEndereco = value;
    }

    get codMunicipioResidencial(): number {
        return this._codMunicipioResidencial;
    }

    set codMunicipioResidencial(value: number) {
        this._codMunicipioResidencial = value;
    }

    get municipioResidencial(): string {
        return this._municipioResidencial;
    }

    set municipioResidencial(value: string) {
        this._municipioResidencial = value;
    }

    get codEstadoResidencial(): number {
        return this._codEstadoResidencial;
    }

    set codEstadoResidencial(value: number) {
        this._codEstadoResidencial = value;
    }

    get estadoResidencial(): string {
        return this._estadoResidencial;
    }

    set estadoResidencial(value: string) {
        this._estadoResidencial = value;
    }

    get ufResidencial(): string {
        return this._ufResidencial;
    }

    set ufResidencial(value: string) {
        this._ufResidencial = value;
    }

    get codPaisResidencial(): number {
        return this._codPaisResidencial;
    }

    set codPaisResidencial(value: number) {
        this._codPaisResidencial = value;
    }

    get paisResidencial(): string {
        return this._paisResidencial;
    }

    set paisResidencial(value: string) {
        this._paisResidencial = value;
    }

    get celular(): string {
        return this._celular;
    }

    set celular(value: string) {
        this._celular = value;
    }

    get telefone(): string {
        return this._telefone;
    }

    set telefone(value: string) {
        this._telefone = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get emailPortal(): string {
        return this._emailPortal;
    }

    set emailPortal(value: string) {
        this._emailPortal = value;
    }

    get celularContato(): string {
        return this._celularContato;
    }

    set celularContato(value: string) {
        this._celularContato = value;
    }
}