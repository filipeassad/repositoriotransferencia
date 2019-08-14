export class QuestionarioRevalidacao{

    private _questao1: string;
    private _questao2: string;
    private _questao3: string;
    private _prefeitura: string;
    private _matriculaBeneficiario: string;

    public static opcaoQuestao1Esposo_a = 1;
    public static opcaoQuestao1Companheiro_a = 2;
    public static opcaoQuestao1NaoEMaisMeuDependente = 3;

    public static opcaoQuestao2Consultas = 1;
    public static opcaoQuestao2Exames = 2;
    public static opcaoQuestao2ProcedimentosCirurgicos = 3;
    public static opcaoQuestao2Todas = 4;
    public static opcaoQuestao2NenhumaDasAlternativas = 5;

    public static opcaoQuestao3Governo = 1;
    public static opcaoQuestao3Prefeitura = 2;
    public static opcaoQuestao3NaoTemMaisVinculo = 3;
    public static opcaoQuestao3NaoPossui = 4;


    get questao1(): string {
        return this._questao1;
    }

    set questao1(value: string) {
        this._questao1 = value;
    }

    get questao2(): string {
        return this._questao2;
    }

    set questao2(value: string) {
        this._questao2 = value;
    }

    get questao3(): string {
        return this._questao3;
    }

    set questao3(value: string) {
        this._questao3 = value;
    }

    get prefeitura(): string {
        return this._prefeitura;
    }

    set prefeitura(value: string) {
        this._prefeitura = value;
    }

    get matriculaBeneficiario(): string {
        return this._matriculaBeneficiario;
    }

    set matriculaBeneficiario(value: string) {
        this._matriculaBeneficiario = value;
    }


    public static opcoesQuestao1(){
        return {
            'Esposo(a)': QuestionarioRevalidacao.opcaoQuestao1Esposo_a,
            'Companheiro(a)' : QuestionarioRevalidacao.opcaoQuestao1Companheiro_a,
            'Não é mais meu dependente': QuestionarioRevalidacao.opcaoQuestao1NaoEMaisMeuDependente
        };
    }

    public static opcoesQuestao2(){
        return {
            'Consultas': QuestionarioRevalidacao.opcaoQuestao2Consultas,
            'Exames': QuestionarioRevalidacao.opcaoQuestao2Exames,
            'Procedimentos Cirúrgicos': QuestionarioRevalidacao.opcaoQuestao2ProcedimentosCirurgicos,
            'Todas': QuestionarioRevalidacao.opcaoQuestao2Todas,
            'Nenhuma das alternativas': QuestionarioRevalidacao.opcaoQuestao2NenhumaDasAlternativas
        };
    }

    public static opcoesQuestao3(){
        return {
            'Governo': QuestionarioRevalidacao.opcaoQuestao3Governo,
            'Prefeitura': QuestionarioRevalidacao.opcaoQuestao3Prefeitura,
            'Não tem mais vínculo': QuestionarioRevalidacao.opcaoQuestao3NaoTemMaisVinculo,
            'Não possui': QuestionarioRevalidacao.opcaoQuestao3NaoPossui
        };
    }
}